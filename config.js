/**
 * ============================================================
 *  SCHOOL WEBSITE CONFIG — Edit ONLY this file
 *  PM Shri Radhakuchi J.B. School
 * ============================================================
 *
 *  ✅ FIXED ISSUES (v2):
 *  1. Logo Drive link now uses lh3.googleusercontent.com thumbnail URL
 *     (Google Drive uc?export=view is BLOCKED by browsers — this fixes it)
 *  2. Hero source changed to "driveFiles" — paste individual share links,
 *     no Google API key needed
 *  3. Gallery same fix — individual Drive file links
 *  4. Smart fallback: if Drive links are placeholders → auto-shows Unsplash images
 *  5. Notices source corrected to "hosted"
 *
 *  HOW TO ADD YOUR DRIVE IMAGES (No API Key needed):
 *  ─────────────────────────────────────────────────
 *  1. Open Google Drive → right-click your image → Share
 *  2. Set to "Anyone with the link can view"
 *  3. Click "Copy link" — paste it in driveLink: "..." below
 *  4. The code automatically converts it to a working display URL
 * ============================================================
 */
/**
 * ============================================================
 *  SCHOOL WEBSITE CONFIG — Edit ONLY this file
 *  PM Shri Radhakuchi J.B. School
 * ============================================================
 *
 *  ✅ FIXED ISSUES (v2):
 *  1. Logo Drive link now uses lh3.googleusercontent.com thumbnail URL
 *     (Google Drive uc?export=view is BLOCKED by browsers — this fixes it)
 *  2. Hero source changed to "driveFiles" — paste individual share links,
 *     no Google API key needed
 *  3. Gallery same fix — individual Drive file links
 *  4. Smart fallback: if Drive links are placeholders → auto-shows Unsplash images
 *  5. Notices source corrected to "hosted"
 *
 *  HOW TO ADD YOUR DRIVE IMAGES (No API Key needed):
 *  ─────────────────────────────────────────────────
 *  1. Open Google Drive → right-click your image → Share
 *  2. Set to "Anyone with the link can view"
 *  3. Click "Copy link" — paste it in driveLink: "..." below
 *  4. The code automatically converts it to a working display URL
 * ============================================================
 */

const SCHOOL_CONFIG = {

  // ─── SCHOOL IDENTITY ────────────────────────────────────────
  name:          "PM Shri B Radhakuchi J.B. School",
  nameAssamese:  "৬৬ নং বি ৰাধাকুছি নিম্ন বুনিয়াদী বিদ্যালয়",
  shortName:     "RJBS",
  code:          "18060605101",
  established:   1948,
  tagline:       "শিক্ষাই মানৱ জীৱনৰ মূল আধাৰ",
  taglineEn:     "Education is the Foundation of Human Life",
  affiliation:   "DEE Assam / Samagra Shiksha Abhiyan",
  district:      "Kamrup",
  state:         "Assam",
  type:          "Government Junior Basic School",

  // ─── CONTACT ────────────────────────────────────────────────
  contact: {
    address:  "Radhakuchi, Kamrup District, Assam – 781381",
    phone:    "+91 94350 XXXXX",
    phone2:   "+91 03751 XXXXXX",
    email:    "radhakuchijbs@gmail.com",
    website:  "Coming soon...",

// ─── HEADMASTER ─────────────────────────────────────────────
headmaster: {
  name:        "Mr. [Headmaster's Full Name]",       // ← fill in
  designation: "Headmaster",
  //qualification: "M.A., B.Ed.",                      // ← fill in
  experience:  "18+ Years",                          // ← fill in
  photoSource: "drive",                              // "drive" or "hosted"
  drivePhotoLink: "https://drive.google.com/file/d/1LY6HyfdZajx_HYGLTZs_IQQUAfUkPzLH/view",
  hostedPath:  "assets/images/headmaster.jpg",
  message: `Dear Students, Parents & Well-wishers,

It is with immense pride and joy that I welcome you to the official website of PM Shri 66no Radhakuchi J.B. School. For over seven decades, this institution has stood as a beacon of knowledge, values, and inclusive education in the heart of Kamrup.

Our school is not merely a place of learning — it is a second home where every child is nurtured with care, curiosity, and character. Under the guidance of the Government of Assam and Samagra Shiksha Abhiyan, we strive every day to deliver quality foundational education aligned with the vision of NEP 2020.

I sincerely thank our dedicated teachers, supportive parents, and the entire school community for making our journey remarkable. Together, we shall continue to light the lamp of education for every child.

With warm regards,`
},


    
  },

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.4341516920206!2d91.51992632346046!3d26.35147917072626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sRadhakuchi%20LP%20School!2sRadhakuchi%2C%20Kamrup%20District%2C%20Assam!5e0!3m2!1sen!2sin!4v1707033600000",

  // ─── LOGO ───────────────────────────────────────────────────
  logo: {
    // "drive"  → paste your Google Drive share link in driveLink below
    // "hosted" → place file at assets/images/school-logo.png
    source: "drive",

    // ✅ Your logo Drive link (already set):
    driveLink: "https://drive.google.com/file/d/1qZgL9GzErfQfKgnrePbUC8Txrils9muZ/view",

    // Used if source is "hosted"
    hostedPath: "assets/images/school-logo.png",

    // Shown as text badge if image fails to load
    textFallback: "RJBS",
  },

  // Assam Govt Seal — always fetched from Wikipedia CDN
  govtSealUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Seal_of_Assam.svg/240px-Seal_of_Assam.svg.png",

  // ─── HERO SLIDER IMAGES ──────────────────────────────────────
  heroImages: {
    // ✅ Use "driveFiles" to paste individual Google Drive share links
    // No API key needed — just right-click → Share → Copy link
    // Use "hosted" for hosted files/"driveFiles" for google drivefor local files | "fallback" forces Unsplash images
    source: "driveFiles",

    // ✅ PASTE YOUR HERO IMAGE DRIVE LINKS HERE:
    // Each image: right-click in Drive → Share → "Anyone with link" → Copy link
    driveFiles: [
      {
        driveLink: "https://drive.google.com/file/d/1JIMdIJEBibhw4rRaJvcCPmxAM1bGsEHJ/view",
        caption: "Welcome to PM Shri Radhakuchi J.B. School"
      },
      {
        driveLink: "https://drive.google.com/file/d/1Q43KzhqkxUwbP0BNZH7Zz4I9mDouqaE8/view",
        caption: "Excellence in Education Since 1948"
      },
      {
        driveLink: "https://drive.google.com/file/d/1ZgSVXCSD82stANGzVfWx1NxVDRQXWeU4/view",
        caption: "Building Tomorrow's Leaders"
      },
    ],

    // Local files (used when source = "hosted")
    hosted: [
      { path: "assets/images/hero/slide1.jpg", caption: "Welcome to our School" },
      { path: "assets/images/hero/slide2.jpg", caption: "Excellence in Education" },
      { path: "assets/images/hero/slide3.jpg", caption: "Building Tomorrow's Leaders" },
    ],

    // ✅ Fallback: shown automatically when Drive links are still placeholders
    fallback: [
      { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=80", caption: "Our School Campus" },
      { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=80", caption: "Quality Education" },
      { url: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1400&q=80", caption: "Learning Together" },
    ],
  },

  // ─── NOTICE BOARD ───────────────────────────────────────────
  notices: {
    // ✅ FIX: was "drive" but folder link was still a placeholder.
    // Using "hosted" — put your PDF files in assets/pdfs/notices/
    source: "hosted",

    hostedFiles: [
      { title: "Annual Examination Schedule 2024-25",  file: "assets/pdfs/notices/exam-schedule-2025.pdf",  date: "2025-02-10" },
      { title: "Admission Notice – Session 2025-26",    file: "assets/pdfs/notices/admission-2025-26.pdf",  date: "2025-01-28" },
      { title: "Mid-Day Meal Committee Meeting",        file: "assets/pdfs/notices/mdm-meeting-jan25.pdf",  date: "2025-01-15" },
      { title: "Result – Class V Annual Exam 2024",     file: "assets/pdfs/notices/result-cv-2024.pdf",     date: "2024-12-20" },
      { title: "School Development Committee (SDC)",    file: "assets/pdfs/notices/sdc-meeting-dec24.pdf",  date: "2024-12-05" },
    ],

    // Switch to "drive" and put real link here when you have a real notices folder:
    driveFolderLink: "https://drive.google.com/drive/folders/YOUR_REAL_NOTICES_FOLDER_ID",
    driveApiKey: "",
  },

  // ─── GALLERY ────────────────────────────────────────────────
  gallery: {
    // ✅ Use "driveFiles" for individual Google Drive share links
    source: "driveFiles",

    // ✅ PASTE YOUR GALLERY IMAGE DRIVE LINKS HERE:
    driveFiles: [
      { driveLink: "https://drive.google.com/file/d/1hZxrkJx6IHE94kHEFrPRAmfaJtngccXL/view", caption: "Frontend" },
      { driveLink: "https://drive.google.com/file/d/1llg2aoW2LoKmI3mM1oOY0yI_nNI7FSGI/view", caption: "Digital Class Room" },
      { driveLink: "https://drive.google.com/file/d/1a3mB5GF_FRVRhcKOktPelQM2O7DUMOkb/view", caption: "musical Instrument" },
      { driveLink: "https://drive.google.com/file/d/19wU_yApMdk3yDQGXFkh7f1rn_udsWHCQ/view", caption: "Newspaper Corner" },
      { driveLink: "https://drive.google.com/file/d/134ePXCs40lOlrLAW-QVYUDiBbSsfWno1/view", caption: "Office Room" },
      { driveLink: "https://drive.google.com/file/d/1w7ne9EgW15Lpe9V67WxNpACABqAX-ieI/view", caption: "Class Room" },
    ],

    hosted: [
      { path: "assets/images/gallery/sports-day.jpg",   caption: "Annual Sports Day 2024" },
      { path: "assets/images/gallery/science-expo.jpg", caption: "Science Exhibition" },
      { path: "assets/images/gallery/cultural.jpg",     caption: "Cultural Programme" },
    ],

    fallback: [
      { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", caption: "Annual Sports Day" },
      { url: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80", caption: "Science Exhibition" },
      { url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80", caption: "Cultural Programme" },
      { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80", caption: "Classroom Learning" },
      { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80", caption: "Library Session" },
      { url: "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=600&q=80", caption: "Independence Day" },
    ],
  },

  // ─── RESULTS ─────────────────────────────────────────────────
  results: [
    { year: 2024, class: 1, label: "Class I",   source: "hosted", file: "assets/pdfs/results/2024/class1-2024.pdf", driveLink: "" },
    { year: 2024, class: 2, label: "Class II",  source: "hosted", file: "assets/pdfs/results/2024/class2-2024.pdf", driveLink: "" },
    { year: 2024, class: 3, label: "Class III", source: "hosted", file: "assets/pdfs/results/2024/class3-2024.pdf", driveLink: "" },
    { year: 2024, class: 4, label: "Class IV",  source: "hosted", file: "assets/pdfs/results/2024/class4-2024.pdf", driveLink: "" },
    { year: 2024, class: 5, label: "Class V",   source: "hosted", file: "assets/pdfs/results/2024/class5-2024.pdf", driveLink: "" },
    { year: 2023, class: 1, label: "Class I",   source: "hosted", file: "assets/pdfs/results/2023/class1-2023.pdf", driveLink: "" },
    { year: 2023, class: 2, label: "Class II",  source: "hosted", file: "assets/pdfs/results/2023/class2-2023.pdf", driveLink: "" },
    { year: 2023, class: 3, label: "Class III", source: "hosted", file: "assets/pdfs/results/2023/class3-2023.pdf", driveLink: "" },
    { year: 2023, class: 4, label: "Class IV",  source: "hosted", file: "assets/pdfs/results/2023/class4-2023.pdf", driveLink: "" },
    { year: 2023, class: 5, label: "Class V",   source: "hosted", file: "assets/pdfs/results/2023/class5-2023.pdf", driveLink: "" },
    { year: 2022, class: 1, label: "Class I",   source: "drive",  file: "", driveLink: "" },
    { year: 2022, class: 2, label: "Class II",  source: "drive",  file: "", driveLink: "" },
    { year: 2022, class: 3, label: "Class III", source: "drive",  file: "", driveLink: "" },
    { year: 2022, class: 4, label: "Class IV",  source: "drive",  file: "", driveLink: "" },
    { year: 2022, class: 5, label: "Class V",   source: "drive",  file: "", driveLink: "" },
  ],

  // ─── TEACHERS ────────────────────────────────────────────────
  teachers: [
    { name: "Boloram Baruah",  designation: "Headmaster",       qualification: "HSLC", subject: "General Administration",  experience: "18 Years", photoSource: "drive", photoPath: "", drivePhotoLink: "https://drive.google.com/file/d/1OGoltG1Lpo4tRDb56WGZZGzRMuv3CCOI/view" },
    { name: "Champak Nath",     designation: "Asstt. Teacher",   qualification: "B.A.",             subject: "All", experience: "12 Years", photoSource: "drive", photoPath: "", drivePhotoLink: "https://drive.google.com/file/d/1mb__YEKJJWvd0KWYFlyJdxxBwkqR2iSv/view" },
    { name: "Charulata Deka",     designation: "Asstt. Teacher",          qualification: "HSLC",            subject: "All",    experience: "19 Years",  photoSource: "drive", photoPath: "", drivePhotoLink: "https://drive.google.com/file/d/1Tkf62r1ymoZzliYjua884-Mf3mpPVUYL/view" },
    { name: "Iramoni Deka",    designation: "Asstt. Teacher",          qualification: "B.A., B.Ed.",          subject: "All",           experience: "6 Years",  photoSource: "drive", photoPath: "", drivePhotoLink: "https://drive.google.com/file/d/1PXjHGASCPezF1rdvkaUpfPuH6tYdHXMA/view" },
    { name: "Bhanita Baruah",    designation: "Asstt. Teacher",          qualification: "M.A.",          subject: "All",            experience: "4 Years",  photoSource: "drive", photoPath: "", drivePhotoLink: "https://drive.google.com/file/d/1_DU22FZRTIyV_JgjYbv_pIwq-TT1PTTv/view" },
    { name: "Doli Talukdar",    designation: "Asstt. Teacher",          qualification: "M.A., M.Ed.",          subject: "All",            experience: "4 Years",  photoSource: "drive", photoPath: "", drivePhotoLink: "https://drive.google.com/file/d/1Z6ZPWX_OLZU59QWqgwl3hOQ2kfGqMIaJ/view" },
  ],

  supportingStaff: [
    { name: "Dipu Kumar Nath",    designation: "Chess Teacher(Temp.)", photoSource: "Avatar", drivePhotoLink: "https://drive.google.com/file/d/PASTE_PHOTO_ID_HERE/view" },
    { name: "Kankan Deka",    designation: "Music Teacher(Temp.)", photoSource: "Avatar", drivePhotoLink: "https://drive.google.com/file/d/PASTE_PHOTO_ID_HERE/view" },
    { name: "Bikash Brahma",    designation: "P.E & Sports Teacher(Temp.)", photoSource: "Avatar", drivePhotoLink: "https://drive.google.com/file/d/PASTE_PHOTO_ID_HERE/view" },
    { name: "Doiboki Kalita", designation: "Cook",           photoSource: "Avatar", drivePhotoLink: "https://drive.google.com/file/d/PASTE_PHOTO_ID_HERE/view" },
    { name: "Bobita Deka",  designation: "Cook",            photoSource: "Avatar", drivePhotoLink: "https://drive.google.com/file/d/PASTE_PHOTO_ID_HERE/view" },
  ],

  // ─── STATS ───────────────────────────────────────────────────
  stats: [
    { label: "Total Students",      value: 312, suffix: "+", icon: "👨‍🎓" },
    { label: "Pass Percentage",     value: 100, suffix: "%", icon: "📊" },
    { label: "Teaching Staff",      value: 6,   suffix: "+",  icon: "👩‍🏫" },
    { label: "Years of Excellence", value: 78,  suffix: "+", icon: "🏅" },
  ],

  // ─── GOVT LINKS ──────────────────────────────────────────────
  govLinks: [
    { name: "Samagra Shiksha Assam", url: "https://www.samagrashikshaassam.in/" },
    { name: "DEE Assam",             url: "https://dee.assam.gov.in/" },
    { name: "SEBA",                  url: "https://sebaonline.org/" },
    { name: "Education Dept. Assam", url: "https://education.assam.gov.in/" },
    { name: "SCERT Assam",           url: "https://scertassam.co.in/" },
    { name: "DIKSHA Portal",         url: "https://diksha.gov.in/" },
    { name: "PM e-VIDYA",            url: "https://pmvidya.gov.in/" },
    { name: "U-DISE+",              url: "https://udiseplus.gov.in/" },
  ],

  social: { facebook: "#", youtube: "#", twitter: "#" },
};

// ═══════════════════════════════════════════════════════════════
//  HELPER FUNCTIONS — Do not edit below this line
// ═══════════════════════════════════════════════════════════════

/**
 * ✅ THE CRITICAL FIX:
 * Google Drive's uc?export=view URLs are blocked by browsers (CORS + redirect issues).
 * The lh3.googleusercontent.com/d/FILE_ID=s1600 format works reliably for public files.
 */
function driveShareToImageUrl(link) {
  if (!link) return null;
  const m1 = link.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  const m2 = link.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  const id = (m1 && m1[1]) || (m2 && m2[1]);
  if (!id) return null;
  return `https://lh3.googleusercontent.com/d/${id}=s1600`;
}

/** Check if a Drive link is still an unfilled placeholder */
function isDrivePlaceholder(link) {
  if (!link) return true;
  return (
    link.includes("PASTE_") ||
    link.includes("REPLACE_") ||
    link.includes("YOUR_FILE_ID") ||
    link.includes("YOUR_FOLDER_ID") ||
    link === ""
  );
}

/** Get hero images — smart fallback through all sources */
function getHeroImages() {
  const cfg = SCHOOL_CONFIG.heroImages;

  if (cfg.source === "driveFiles" && cfg.driveFiles) {
    const resolved = cfg.driveFiles
      .filter(f => !isDrivePlaceholder(f.driveLink))
      .map(f => ({ url: driveShareToImageUrl(f.driveLink), caption: f.caption }))
      .filter(f => f.url);
    if (resolved.length > 0) return resolved;
    // All placeholders → fall to fallback automatically
  }

  if (cfg.source === "hosted" && cfg.hosted && cfg.hosted.length) {
    return cfg.hosted.map(h => ({ url: h.path, caption: h.caption }));
  }

  return cfg.fallback || [];
}

/** Get gallery images — smart fallback through all sources */
function getGalleryImages() {
  const cfg = SCHOOL_CONFIG.gallery;

  if (cfg.source === "driveFiles" && cfg.driveFiles) {
    const resolved = cfg.driveFiles
      .filter(f => !isDrivePlaceholder(f.driveLink))
      .map(f => ({ url: driveShareToImageUrl(f.driveLink), caption: f.caption }))
      .filter(f => f.url);
    if (resolved.length > 0) return resolved;
  }

  if (cfg.source === "hosted" && cfg.hosted && cfg.hosted.length) {
    return cfg.hosted.map(h => ({ url: h.path, caption: h.caption }));
  }

  return cfg.fallback || [];
}

/** Get logo URL — uses thumbnail API for Drive */
function getLogoUrl() {
  const cfg = SCHOOL_CONFIG.logo;
  if (cfg.source === "drive" && cfg.driveLink && !isDrivePlaceholder(cfg.driveLink)) {
    return driveShareToImageUrl(cfg.driveLink);
  }
  if (cfg.source === "hosted" && cfg.hostedPath) {
    return cfg.hostedPath;
  }
  return null; // will show textFallback
}

/** Convert Drive share link to embeddable PDF preview URL */
function driveShareToEmbed(link) {
  if (!link) return null;
  const m = link.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (m) return `https://drive.google.com/file/d/${m[1]}/preview`;
  return link;
}

/** Convert Drive share link to download URL */
function driveShareToDownload(link) {
  if (!link) return null;
  const m = link.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (m) return `https://drive.google.com/uc?export=download&id=${m[1]}`;
  return link;
}

/** Get teacher photo URL */
function getTeacherPhotoUrl(teacher) {
  if (teacher.photoSource === "hosted" && teacher.photoPath) return teacher.photoPath;
  if (teacher.photoSource === "drive" && teacher.drivePhotoLink && !isDrivePlaceholder(teacher.drivePhotoLink))
    return driveShareToImageUrl(teacher.drivePhotoLink);
  return `https://ui-avatars.com/api/?background=1a5276&color=fff&size=200&bold=true&name=${encodeURIComponent(teacher.name)}`;
}

/** Get result PDF URLs */
function getResultUrls(result) {
  if (result.source === "drive" && result.driveLink && !isDrivePlaceholder(result.driveLink)) {
    return { view: driveShareToEmbed(result.driveLink), download: driveShareToDownload(result.driveLink), available: true };
  }
  if (result.source === "hosted" && result.file) {
    return { view: result.file, download: result.file, available: true };
  }
  return { view: null, download: null, available: false };
}

/** Format date nicely */
function fmtDate(str) {
  if (!str) return "";
  try { return new Date(str).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }); }
  catch { return str; }
}

/** Escape HTML */
function esc(str) {
  if (!str) return "";
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

/** Check if notice is new (within 30 days) */
function isNew(dateStr) {
  return (Date.now() - new Date(dateStr)) / 86400000 <= 30;
     }
