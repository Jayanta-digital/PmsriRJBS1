/**
 * ============================================================
 *  DRIVE LOADER - Dynamic Google Drive File Fetcher
 *  Handles loading images, PDFs, and assets from Google Drive
 * ============================================================
 */

const DriveLoader = (() => {

  // Cache to avoid duplicate fetches
  const cache = new Map();

  /**
   * Fetch public folder contents via Google Drive API
   * Returns array of file metadata objects
   */
  async function fetchFolderContents(folderId, apiKey) {
    if (!folderId || folderId === "1hCPcOexl5XzLhPTn5W5bwB-l3zHD5qli") return [];

    const cacheKey = `folder_${folderId}`;
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    try {
      const url = apiKey && apiKey !== "YOUR_GOOGLE_API_KEY_HERE"
        ? `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType,createdTime,modifiedTime)&orderBy=modifiedTime+desc`
        : null;

      if (!url) return [];

      const res = await fetch(url);
      if (!res.ok) throw new Error("Drive API error");
      const data = await res.json();
      const files = data.files || [];
      cache.set(cacheKey, files);
      return files;
    } catch (e) {
      console.warn("[DriveLoader] Could not fetch folder:", e.message);
      return [];
    }
  }

  /**
   * Classify files by MIME type
   */
  function classifyFiles(files) {
    return {
      images: files.filter(f =>
        f.mimeType?.startsWith("image/")
      ),
      pdfs: files.filter(f =>
        f.mimeType === "application/pdf"
      ),
      all: files,
    };
  }

  /**
   * Get a direct viewable URL for a Drive file
   */
  function getViewUrl(fileId) {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }

  function getDirectUrl(fileId) {
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }

  function getDownloadUrl(fileId) {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }

  /**
   * Load gallery images - from Drive or fallback
   */
  async function loadGalleryImages(folderId, apiKey) {
    const files = await fetchFolderContents(folderId, apiKey);
    const { images } = classifyFiles(files);

    if (images.length > 0) {
      return images.map(f => ({
        url: getDirectUrl(f.id),
        caption: f.name.replace(/\.[^.]+$/, "").replace(/_/g, " "),
        driveId: f.id,
      }));
    }

    // Fallback to config static images
    return SCHOOL_CONFIG.fallback.galleryImages;
  }

  /**
   * Load notices (PDFs) - from Drive or fallback
   */
  async function loadNotices(folderId, apiKey) {
    const files = await fetchFolderContents(folderId, apiKey);
    const { pdfs } = classifyFiles(files);

    if (pdfs.length > 0) {
      return pdfs.map(f => ({
        title: f.name.replace(/\.pdf$/i, "").replace(/_/g, " "),
        date: f.modifiedTime?.split("T")[0] || new Date().toISOString().split("T")[0],
        type: "pdf",
        isNew: isNewNotice(f.modifiedTime),
        driveFileId: f.id,
        viewUrl: getViewUrl(f.id),
        downloadUrl: getDownloadUrl(f.id),
      }));
    }

    // Fallback to static notices
    return SCHOOL_CONFIG.staticNotices.map(n => ({
      ...n,
      viewUrl: n.driveFileId ? getViewUrl(n.driveFileId) : null,
      downloadUrl: n.driveFileId ? getDownloadUrl(n.driveFileId) : null,
    }));
  }

  /**
   * Load school logo - from Drive or fallback
   */
  async function loadSchoolLogo(fileId) {
    if (!fileId || fileId === "YOUR_LOGO_FILE_ID") {
      return null; // Will use text logo
    }
    // Test if image loads
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(getDirectUrl(fileId));
      img.onerror = () => resolve(null);
      img.src = getDirectUrl(fileId);
      setTimeout(() => resolve(null), 3000); // 3s timeout
    });
  }

  /**
   * Load hero slider images
   */
  async function loadHeroImages(folderId, apiKey) {
    const files = await fetchFolderContents(folderId, apiKey);
    const { images } = classifyFiles(files);

    if (images.length > 0) {
      return images.slice(0, 5).map(f => getDirectUrl(f.id));
    }
    return SCHOOL_CONFIG.fallback.heroImages;
  }

  /**
   * Load results PDFs
   */
  async function loadResults(folderId, apiKey) {
    const files = await fetchFolderContents(folderId, apiKey);
    const { pdfs } = classifyFiles(files);

    if (pdfs.length > 0) {
      // Try to parse class and year from filename
      return pdfs.map(f => {
        const name = f.name.replace(/\.pdf$/i, "");
        const yearMatch = name.match(/20\d\d/);
        const classMatch = name.match(/[Cc]lass[\s_-]*([IVX\d]+)/);
        return {
          label: name.replace(/_/g, " "),
          year: yearMatch ? parseInt(yearMatch[0]) : 2024,
          class: classMatch ? classMatch[1] : "?",
          downloadUrl: getDownloadUrl(f.id),
          viewUrl: getViewUrl(f.id),
        };
      });
    }

    // Return config static results
    return SCHOOL_CONFIG.results.map(r => ({
      ...r,
      downloadUrl: r.driveFileId ? getDownloadUrl(r.driveFileId) : null,
      viewUrl: r.driveFileId ? getViewUrl(r.driveFileId) : null,
    }));
  }

  // Public API
  return {
    fetchFolderContents,
    loadGalleryImages,
    loadNotices,
    loadSchoolLogo,
    loadHeroImages,
    loadResults,
    getViewUrl,
    getDownloadUrl,
    getDirectUrl,
  };
})();
