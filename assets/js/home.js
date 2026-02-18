/* home.js — homepage specific JS */

document.addEventListener("DOMContentLoaded", () => {
  Components.init("Home");
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  buildStats();
  buildHero();
  buildHomeNotices();
});

/* ── Stats ── */
function buildStats() {
  const grid = document.getElementById("statsGrid");
  if (!grid) return;
  grid.innerHTML = SCHOOL_CONFIG.stats.map(s => `
    <div class="stat-item">
      <div class="stat-item__icon">${s.icon}</div>
      <div class="stat-item__value" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="stat-item__label">${esc(s.label)}</div>
    </div>
  `).join("");

  // Animate on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll("[data-target]").forEach(el => {
        const target = +el.dataset.target;
        const suf = el.dataset.suffix;
        let cur = 0;
        const step = target / 60;
        const t = setInterval(() => {
          cur = Math.min(cur + step, target);
          el.textContent = Math.floor(cur) + suf;
          if (cur >= target) clearInterval(t);
        }, 18);
      });
      obs.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  obs.observe(grid);
}

/* ── Hero Slider ── */
let heroImages = [], heroIdx = 0, heroTimer = null;

function buildHero() {
  // ✅ FIX: Use getHeroImages() which handles driveFiles, hosted, and fallback correctly.
  // Old code only checked source==="hosted" and missed the "driveFiles" mode entirely.
  heroImages = (typeof getHeroImages === "function")
    ? getHeroImages()
    : SCHOOL_CONFIG.heroImages.fallback;

  const track = document.getElementById("heroTrack");
  const dotsWrap = document.getElementById("heroDots");
  if (!track) return;

  track.innerHTML = "";
  dotsWrap.innerHTML = "";

  heroImages.forEach((img, i) => {
    const url = img.url || img.path;
    const slide = document.createElement("div");
    slide.className = "hero__slide" + (i === 0 ? " active" : "");
    slide.innerHTML = `
      <img src="${url}" alt="${esc(img.caption || "")}" loading="${i === 0 ? "eager" : "lazy"}"
           onerror="this.parentElement.style.background='var(--grad-primary)'">
      <div class="hero__overlay"></div>
      <div class="hero__pattern"></div>
    `;
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "hero__dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Slide " + (i + 1));
    dot.addEventListener("click", () => goSlide(i));
    dotsWrap.appendChild(dot);
  });

  startHeroTimer();

  document.querySelector(".hero__nav--prev")?.addEventListener("click", () => goSlide(heroIdx - 1));
  document.querySelector(".hero__nav--next")?.addEventListener("click", () => goSlide(heroIdx + 1));
}

function goSlide(n) {
  const slides = document.querySelectorAll(".hero__slide");
  const dots = document.querySelectorAll(".hero__dot");
  slides[heroIdx]?.classList.remove("active");
  dots[heroIdx]?.classList.remove("active");
  heroIdx = ((n % heroImages.length) + heroImages.length) % heroImages.length;
  slides[heroIdx]?.classList.add("active");
  dots[heroIdx]?.classList.add("active");
  clearInterval(heroTimer);
  startHeroTimer();
}

function startHeroTimer() {
  heroTimer = setInterval(() => goSlide(heroIdx + 1), 5000);
}

/* ── Home Notices Preview ── */
function buildHomeNotices() {
  const list = document.getElementById("homeNoticeList");
  if (!list) return;

  let notices = [];
  if (SCHOOL_CONFIG.notices.source === "hosted") {
    notices = SCHOOL_CONFIG.notices.hostedFiles.map(n => ({
      title: n.title, date: n.date,
      viewUrl: n.file, downloadUrl: n.file,
      isNew: isNew(n.date)
    }));
  }
  // Sort newest first, show 5
  notices.sort((a, b) => new Date(b.date) - new Date(a.date));
  notices = notices.slice(0, 5);

  if (!notices.length) {
    list.innerHTML = `<div style="padding:2rem;text-align:center;color:var(--c-muted)">No notices available.</div>`;
    return;
  }

  list.innerHTML = notices.map(n => `
    <div class="notice-item">
      <div class="notice-item__icon">📄</div>
      <div class="notice-item__body">
        <div class="notice-item__title">
          ${esc(n.title)}
          ${n.isNew ? `<span class="badge-new">New</span>` : ""}
        </div>
        <div class="notice-item__date">📅 ${fmtDate(n.date)}</div>
      </div>
      <div class="notice-item__btns">
        ${n.viewUrl
          ? `<button class="n-btn n-btn--view" onclick="openPdfModal('${esc(n.title)}','${n.viewUrl}','${n.downloadUrl}')" title="Preview">👁️</button>`
          : `<button class="n-btn n-btn--view" disabled title="Not uploaded yet" style="opacity:.4;cursor:not-allowed">👁️</button>`}
        ${n.downloadUrl
          ? `<a href="${n.downloadUrl}" download class="n-btn n-btn--dl" title="Download">⬇️</a>`
          : `<button class="n-btn n-btn--dl" disabled style="opacity:.4;cursor:not-allowed">⬇️</button>`}
      </div>
    </div>
  `).join("");
}
