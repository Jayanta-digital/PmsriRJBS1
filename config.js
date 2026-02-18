/**
 * ============================================================
 *  SCHOOL WEBSITE CONFIG — Edit ONLY this file
 *  Supports both Google Drive links AND self-hosted files
 * ============================================================
 *
 *  HOW TO USE FILE SOURCES (two modes):
 *
 *  MODE 1 — GOOGLE DRIVE:
 *    Set fileSource: "drive"
 *    Paste your Google Drive share link or folder ID
 *    Make sure folders are set to "Anyone with the link can view"
 *
 *  MODE 2 — SELF HOSTED:
 *    Set fileSource: "hosted"
 *    Place files in /assets/images/, /assets/pdfs/ etc.
 *    Set the relative path in the config below
 *
 *  You can mix both modes per section!
 * ============================================================
 */

const SCHOOL_CONFIG = {

  // ─── SCHOOL IDENTITY ────────────────────────────────────────
  name:          "PM Shri Radhakuchi J.B. School",
  nameAssamese:  "৬৬ নং ৰাধকুছি প্ৰাথমিক বিদ্যালয়",
  shortName:     "NPS",
  code:          "18060605101",
  established:   1948,
  tagline:       "শিক্ষাই মানৱ জীৱনৰ মূল আধাৰ",
  taglineEn:     "Education is the Foundation of Human Life",
  affiliation:   "DEE Assam / Samagra Shiksha Abhiyan",
  district:      "Kamrup",
  state:         "Assam",
  type:          "Government Lower Primary School",

  // ─── CONTACT ────────────────────────────────────────────────
  contact: {
    address:  "Radhakuchi, Kamrup District, Assam – 781381",
    phone:    "+91 94350 XXXXX",
    phone2:   "+91 03751 XXXXXX",
    email:    "radhakuchijbs@gmail.com",
    website:  "comming soon....",
  },
  
  

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57898.0!2d95.339!3d27.293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744d0b1a6e8cde5%3A0x6f11f9dae8d56c97!2sNaharkatia%2C%20Assam!5e0!3m2!1sen!2sin!4v1234567890",

  // ─── LOGO ───────────────────────────────────────────────────
  logo: {
    // "drive" or "hosted"
    source: "hosted",

    // If hosted: path relative to root
    hostedPath: "assets/images/school-logo.png",

    // If drive: paste the Google Drive shareable file link
    driveLink: "https://drive.google.com/file/d/1qZgL9GzErfQfKgnrePbUC8Txrils9muZ/view",

    // Fallback text logo if image not found
    textFallback: "RJBS",
  },

  // Assam Govt Seal — always auto-fetched from CDN
  govtSealUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Seal_of_Assam.svg/240px-Seal_of_Assam.svg.png",

  // ─── HERO SLIDER IMAGES ──────────────────────────────────────
  heroImages: {
    source: "hosted", // "drive" | "hosted" | "both"

    hosted: [
      // Place images in assets/images/hero/ and list them here
      { path: "assets/images/hero/slide1.jpg", caption: "Welcome to our School" },
      { path: "assets/images/hero/slide2.jpg", caption: "Excellence in Education" },
      { path: "assets/images/hero/slide3.jpg", caption: "Building Tomorrow's Leaders" },
    ],

    // Google Drive: Paste shareable FOLDER link
    driveFolderLink: "https://drive.google.com/drive/folders/1qhy59YDxSiCvXrlZdNOhnkbcbTdxKoNC",

    // Fallback images from Unsplash CDN if no local/drive images
    fallback: [
      { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=80", caption: "Our School Campus" },
      { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=80", caption: "Quality Education" },
      { url: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1400&q=80", caption: "Learning Together" },
    ],
  },

  // ─── NOTICE BOARD ───────────────────────────────────────────
  notices: {
    source: "hosted", // "drive" | "hosted"

    // If hosted: place PDFs in assets/pdfs/notices/ and list here
    hostedFiles: [
      { title: "Annual Examination Schedule 2024-25",    file: "assets/pdfs/notices/exam-schedule-2025.pdf",   date: "2025-02-10" },
      { title: "Admission Notice – Session 2025-26",      file: "assets/pdfs/notices/admission-2025-26.pdf",   date: "2025-01-28" },
      { title: "Mid-Day Meal Committee Meeting",          file: "assets/pdfs/notices/mdm-meeting-jan25.pdf",   date: "2025-01-15" },
      { title: "Result – Class V Annual Exam 2024",       file: "assets/pdfs/notices/result-cv-2024.pdf",      date: "2024-12-20" },
      { title: "School Development Committee (SDC)",      file: "assets/pdfs/notices/sdc-meeting-dec24.pdf",   date: "2024-12-05" },
    ],

    // If drive: paste Google Drive folder shareable link
    driveFolderLink: "https://drive.google.com/drive/folders/YOUR_NOTICES_FOLDER_ID",
    driveApiKey: "YOUR_GOOGLE_API_KEY_OPTIONAL",
  },

  // ─── GALLERY ────────────────────────────────────────────────
  gallery: {
    source: "hosted", // "drive" | "hosted"

    hosted: [
      { path: "assets/images/gallery/sports-day.jpg",      caption: "Annual Sports Day 2024" },
      { path: "assets/images/gallery/science-expo.jpg",    caption: "Science Exhibition" },
      { path: "assets/images/gallery/cultural.jpg",        caption: "Cultural Programme" },
      { path: "assets/images/gallery/classroom.jpg",       caption: "Smart Classroom Session" },
      { path: "assets/images/gallery/library.jpg",         caption: "Library Activities" },
      { path: "assets/images/gallery/independence.jpg",    caption: "Independence Day 2024" },
      { path: "assets/images/gallery/bihu.jpg",            caption: "Bihu Celebration" },
      { path: "assets/images/gallery/plantation.jpg",      caption: "Tree Plantation Drive" },
    ],

    driveFolderLink: "https://drive.google.com/drive/folders/YOUR_GALLERY_FOLDER_ID",
    driveApiKey: "YOUR_GOOGLE_API_KEY_OPTIONAL",

    // Unsplash fallbacks (shown if hosted images not found & drive not configured)
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
  // source per entry: "hosted" | "drive"
  results: [
    // 2024
    { year: 2024, class: 1, label: "Class I",   source: "hosted", file: "assets/pdfs/results/2024/class1-2024.pdf",  driveLink: "" },
    { year: 2024, class: 2, label: "Class II",  source: "hosted", file: "assets/pdfs/results/2024/class2-2024.pdf",  driveLink: "" },
    { year: 2024, class: 3, label: "Class III", source: "hosted", file: "assets/pdfs/results/2024/class3-2024.pdf",  driveLink: "" },
    { year: 2024, class: 4, label: "Class IV",  source: "hosted", file: "assets/pdfs/results/2024/class4-2024.pdf",  driveLink: "" },
    { year: 2024, class: 5, label: "Class V",   source: "hosted", file: "assets/pdfs/results/2024/class5-2024.pdf",  driveLink: "" },
    // 2023
    { year: 2023, class: 1, label: "Class I",   source: "hosted", file: "assets/pdfs/results/2023/class1-2023.pdf",  driveLink: "" },
    { year: 2023, class: 2, label: "Class II",  source: "hosted", file: "assets/pdfs/results/2023/class2-2023.pdf",  driveLink: "" },
    { year: 2023, class: 3, label: "Class III", source: "hosted", file: "assets/pdfs/results/2023/class3-2023.pdf",  driveLink: "" },
    { year: 2023, class: 4, label: "Class IV",  source: "hosted", file: "assets/pdfs/results/2023/class4-2023.pdf",  driveLink: "" },
    { year: 2023, class: 5, label: "Class V",   source: "hosted", file: "assets/pdfs/results/2023/class5-2023.pdf",  driveLink: "" },
    // 2022
    { year: 2022, class: 1, label: "Class I",   source: "drive",  file: "",                                          driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view" },
    { year: 2022, class: 2, label: "Class II",  source: "drive",  file: "",                                          driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view" },
    { year: 2022, class: 3, label: "Class III", source: "drive",  file: "",                                          driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view" },
    { year: 2022, class: 4, label: "Class IV",  source: "drive",  file: "",                                          driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view" },
    { year: 2022, class: 5, label: "Class V",   source: "drive",  file: "",                                          driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view" },
  ],

  // ─── TEACHERS ────────────────────────────────────────────────
  teachers: [
    {
      name:        "Boloram Baruah",
      designation: "Headmistress",
      qualification: "M.A. (Education), B.Ed.",
      subject:     "General Administration",
      experience:  "18 Years",
      // photo source: "hosted" | "drive" | "avatar"
      photoSource: "avatar",
      photoPath:   "",
      drivePhotoLink: "",
    },
    {
      name:        "Rupam Gogoi",
      designation: "Senior Teacher",
      qualification: "B.A., B.Ed.",
      subject:     "Assamese & Social Studies",
      experience:  "12 Years",
      photoSource: "avatar",
      photoPath:   "",
      drivePhotoLink: "",
    },
    {
      name:        "Mousumi Das",
      designation: "Teacher",
      qualification: "B.Sc., B.Ed.",
      subject:     "Mathematics & Science",
      experience:  "8 Years",
      photoSource: "avatar",
      photoPath:   "",
      drivePhotoLink: "",
    },
    {
      name:        "Bijit Kalita",
      designation: "Teacher",
      qualification: "B.A., D.El.Ed.",
      subject:     "English & Arts",
      experience:  "6 Years",
      photoSource: "avatar",
      photoPath:   "",
      drivePhotoLink: "",
    },
    {
      name:        "Rekha Saikia",
      designation: "Teacher",
      qualification: "B.A., D.El.Ed.",
      subject:     "EVS & Drawing",
      experience:  "4 Years",
      photoSource: "avatar",
      photoPath:   "",
      drivePhotoLink: "",
    },
  ],

  supportingStaff: [
    { name: "Rina Nath",    designation: "Peon-cum-Chowkidar", photoSource: "avatar" },
    { name: "Dipak Saikia", designation: "MDM Cook",           photoSource: "avatar" },
    { name: "Mira Baruah",  designation: "Sweeper",            photoSource: "avatar" },
  ],

  // ─── STATS ───────────────────────────────────────────────────
  stats: [
    { label: "Total Students",      value: 312, suffix: "+", icon: "👨‍🎓" },
    { label: "Pass Percentage",     value: 100,  suffix: "%", icon: "📊" },
    { label: "Teaching Staff",      value: 6,   suffix: "",  icon: "👩‍🏫" },
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

  social: {
    facebook: "#",
    youtube: "#",
    twitter: "#",
  },
};

// ─── HELPERS ─────────────────────────────────────────────────

/** Convert Google Drive share link to direct viewable/embeddable URL */
function driveShareToEmbed(link) {
  if (!link) return null;
  // Handle /file/d/ID/view format
  const fileMatch = link.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
  // Handle ?id=ID format
  const idMatch = link.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch) return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
  return link;
}

/** Convert Google Drive share link to download URL */
function driveShareToDownload(link) {
  if (!link) return null;
  const fileMatch = link.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) return `https://drive.google.com/uc?export=download&id=${fileMatch[1]}`;
  const idMatch = link.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch) return `https://drive.google.com/uc?export=download&id=${idMatch[1]}`;
  return link;
}

/** Convert folder share link to API-queryable ID */
function driveFolderLinkToId(link) {
  if (!link) return null;
  const match = link.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

/** Get teacher photo URL from config entry */
function getTeacherPhotoUrl(teacher) {
  if (teacher.photoSource === "hosted" && teacher.photoPath)
    return teacher.photoPath;
  if (teacher.photoSource === "drive" && teacher.drivePhotoLink) {
    const m = teacher.drivePhotoLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (m) return `https://drive.google.com/uc?export=view&id=${m[1]}`;
  }
  // Avatar fallback
  return `https://ui-avatars.com/api/?background=1a5276&color=fff&size=200&bold=true&name=${encodeURIComponent(teacher.name)}`;
}

/** Get result PDF URLs from a result entry */
function getResultUrls(result) {
  if (result.source === "drive" && result.driveLink) {
    return {
      view: driveShareToEmbed(result.driveLink),
      download: driveShareToDownload(result.driveLink),
      available: true,
    };
  }
  if (result.source === "hosted" && result.file) {
    return {
      view: result.file,     // relative path for inline viewer
      download: result.file,
      available: true,
    };
  }
  return { view: null, download: null, available: false };
}

/** Format date nicely */
function fmtDate(str) {
  if (!str) return "";
  try {
    return new Date(str).toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" });
  } catch { return str; }
}

/** Escape HTML */
function esc(str) {
  if (!str) return "";
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

/** Check if notice is "new" (≤ 30 days) */
function isNew(dateStr) {
  return (Date.now() - new Date(dateStr)) / 86400000 <= 30;
}
