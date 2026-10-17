// 星つむぎ 紹介ページ
// ・言語切替（ja / en）。日本語は index.html の文をそのまま使い、英語だけここに持つ
//   （日本語を二か所に書くと食い違うため）
// ・hero の夜空（星のまたたき・雪・ときどき流れ星）
// ・ヘッダーの出し入れ／なめらかスクロール／fade-in／ボタンの波紋

// ── 英語の文 ─────────────────────────────────────────────────────────────────

const en = {
  page_title: "Star Weaver - Climb the night sky with a glowing kitten",
  meta_description:
    "Star Weaver is an iPhone game where a glowing kitten climbs the night sky by hopping on falling stars. Stars you step on are joined by a line, and when lines cross they become a constellation. Meet real bright stars, and pass the Moon and Saturn as you climb. No login needed; your records stay on your device.",
  app_name: "Star Weaver",
  nav_howto: "How to Play",
  nav_features: "Features",
  nav_download: "Download",
  nav_privacy: "Privacy",
  nav_contact: "Contact",

  hero_mark: "Star Weaver",
  hero_title_line1: "Hop on falling stars,",
  hero_title_line2: "beyond the Moon.",
  hero_description:
    "Star Weaver is a game where you climb the night sky with a glowing kitten. Each star you step on is joined to the last by a line, and when the lines cross they light up as a constellation. The higher you go, the more the sky changes — and you may meet real bright stars, the Moon and Saturn.",
  hero_cta_download: "Download",
  hero_cta_howto: "How to Play",
  icon_alt: "Star Weaver app icon",

  howto_title: "How to Play",
  howto_lead:
    "Move your finger left and right and the kitten follows. Tap to jump, then climb by stepping on the falling stars. A star you have stepped on won't hold you again, so think a little ahead.",
  star_normal_title: "Star",
  star_normal_text: "Step on it to bounce up. It is joined by a line to the previous star, and won't hold you again.",
  star_color_title: "Colored star",
  star_color_text: "Step on the same color in a row and the line takes that color, with a chord on top.",
  star_sleep_title: "Sleepy star",
  star_sleep_text: "The first step only wakes it up. From the second step it is an ordinary star.",
  star_twin_title: "Twin stars",
  star_twin_text: "Two make a pair. Step on both and the kitten glows brighter.",
  star_shoot_title: "Shooting star",
  star_shoot_text: "It crosses the screen. Step on it for a big jump and a “wish” (you can hold one).",
  star_const_title: "Constellation",
  star_const_text: "When your line crosses an earlier line, the shape it encloses lights up as a constellation — and you jump higher.",
  star_wish_title: "Wish",
  star_wish_text: "After stepping on a star, falling off the bottom of the screen ends the night. With a wish, you are caught once.",

  features_title: "Features",
  feature_named_title: "Meet real stars",
  feature_named_text:
    "Real bright stars such as Sirius and Vega sometimes fall. Step on one to learn its name and a little fact; it is recorded in your seasonal star book.",
  feature_layers_title: "The sky changes as you climb",
  feature_layers_text:
    "Snow clouds, night sky, aurora, sea of stars, Moon, galaxy and the edge of the stars. Each layer changes how stars fall and the scale they ring in. The sky goes on forever.",
  feature_marks_title: "A landmark every 400 m",
  feature_marks_text:
    "The Moon, Saturn, a comet, a star whale… Pass one and you enter a golden time where stars and constellations score double for a while.",
  feature_chain_title: "Chain stars for more points",
  feature_chain_text: "Step on stars one after another to chain them. Every 5 links raises the multiplier (up to ×9).",
  feature_sound_title: "Every step rings a note",
  feature_sound_text: "Each star rings a note in the scale of the current sky, and the music changes with the layers.",
  feature_box_title: "Treasure box",
  feature_box_text:
    "Climb higher or score more to unlock new music, step sounds, kitten accessories and night-sky scenery.",
  feature_records_title: "Titles and records",
  feature_records_text: "Your top 5 scores, 14 titles, and totals of stars stepped on and constellations made.",
  feature_easy_title: "Easy mode",
  feature_easy_text: "In Easy, stars are closer together and fall more slowly, and you start with one wish.",
  feature_icloud_title: "Back up to iCloud",
  feature_icloud_text: "Keep your records in iCloud and carry on even after changing phones. It's up to you whether to use it.",
  feature_privacy_title: "No login needed",
  feature_privacy_text: "No account, no sign-up. Your records are saved on your device.",

  download_title: "Download",
  download_heading: "Download on the App Store",
  download_subheading: "Requires iOS 26.0 or later.",
  download_button: "Download on the App Store",
  download_requirements_title: "Requirements",
  download_requirements_ios: "iOS 26.0 or later",
  download_requirements_devices: "iPhone / portrait",
  download_requirements_language: "Japanese",
  download_requirements_price: "Free download",
  download_requirements_iap: "No in-app purchases",

  privacy_title: "Privacy Policy",
  privacy_handling_heading: "How we handle personal information",
  privacy_handling_text:
    "Star Weaver (“the App”) respects your privacy and is committed to protecting personal information. The App requires no account, and the developer runs no servers.",
  privacy_collect_heading: "Information we handle",
  privacy_collect_text:
    "The App only handles your play records (scores, heights reached, dates, titles earned, the number of stars stepped on and constellations made, and play time), the stars you have met, and your settings. All of these stay on your device. We do not collect your name, email address or location, and the App has no analytics or advertising.",
  privacy_storage_heading: "Storage",
  privacy_storage_text: "Play records and settings (sound, difficulty, colors, etc.) are stored on your device (UserDefaults).",
  privacy_icloud_heading: "iCloud",
  privacy_icloud_text:
    "Only if you turn on iCloud backup in Settings, your play records and the stars you have met are stored in iCloud key-value storage and synced between devices on the same Apple Account. This sync happens entirely within Apple's iCloud, and the developer cannot see its contents. Settings stay only on each device.",
  privacy_network_heading: "Network",
  privacy_network_text:
    "The App never sends your records to the developer. The only network use is communication with Apple's services when you turn on iCloud backup.",
  privacy_delete_heading: "Deleting data",
  privacy_delete_text:
    "Deleting the App also deletes the records and settings stored on your device. If you use iCloud backup, you can delete the data in iCloud from iOS Settings.",
  privacy_children_heading: "Children",
  privacy_children_text:
    "The App can be used by people of any age. The developer collects no personal information, and the App has no ads or in-app purchases.",
  privacy_contact_heading: "Contact",
  privacy_contact_text_before: "For questions about this privacy policy, please ",
  privacy_contact_link: "contact us",
  privacy_contact_text_after: ".",
  privacy_update: "Last updated: October 2026",

  contact_title: "Contact",
  contact_intro: "If you have questions, bug reports or feature requests about the App, please feel free to get in touch.",
  contact_email_heading: "📧 Email",
  contact_bug_heading: "🐛 Bug reports",
  contact_bug_text: "If something moves strangely or a sound doesn't play, please send the details to the address above.",
  contact_feature_heading: "💡 Feature requests",
  contact_feature_text: "Ideas for new stars or skies are always welcome.",

  footer_copyright: "© 2026 Star Weaver. All rights reserved.",
};

// ── Language ─────────────────────────────────────────────────────────────────

/** 日本語は、はじめに読んだ index.html の文を覚えておいて使う */
const ja = {};

function captureJapanese() {
  ja.page_title = document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) ja.meta_description = metaDesc.getAttribute("content");
  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    // HTML の中で文を折り返した改行と字下げだけを取りのぞく（「400 m」などの空白は残す）
    ja[el.getAttribute("data-i18n-key")] = el.textContent.trim().replace(/\s*\n\s*/g, "");
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    ja[el.getAttribute("data-i18n-alt")] = el.getAttribute("alt");
  });
}

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("lang")) return params.get("lang") === "en" ? "en" : "ja";
  let stored = null;
  try {
    stored = localStorage.getItem("lang");
  } catch (e) {}
  if (stored) return stored;
  const browser = navigator.language || "ja";
  return browser.startsWith("ja") ? "ja" : "en";
}

function applyLanguage(lang) {
  const t = lang === "en" ? en : ja;

  document.title = t.page_title || document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t.meta_description) metaDesc.setAttribute("content", t.meta_description);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    const v = t[el.getAttribute("data-i18n-key")];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const v = t[el.getAttribute("data-i18n-alt")];
    if (v !== undefined) el.setAttribute("alt", v);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}
}

// ── Hero の夜空 ───────────────────────────────────────────────────────────────

function initSky() {
  const cv = document.querySelector(".hero-sky");
  if (!cv) return;
  const c = cv.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W = 0, H = 0, dpr = 1;
  const stars = Array.from({ length: 110 }, () => ({ x: Math.random(), y: Math.random(), r: 0.5 + Math.random() * 1.1, p: Math.random() * 6.3 }));
  const snow = Array.from({ length: 46 }, () => ({ x: Math.random(), y: Math.random(), r: 0.8 + Math.random() * 1.4, v: 0.4 + Math.random() * 0.6, p: Math.random() * 6.3 }));
  let meteor = null;

  function size() {
    const r = cv.getBoundingClientRect();
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = r.width;
    H = r.height;
    cv.width = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
  }
  size();
  window.addEventListener("resize", size);

  function frame(ms) {
    const t = ms / 1000;
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    c.clearRect(0, 0, W, H);
    for (const s of stars) {
      c.globalAlpha = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(t * 1.4 + s.p));
      c.fillStyle = "#d7e0ff";
      c.beginPath();
      c.arc(s.x * W, s.y * H, s.r, 0, 6.283);
      c.fill();
    }
    c.globalAlpha = 0.55;
    c.fillStyle = "#ffffff";
    for (const s of snow) {
      const x = s.x * W + Math.sin(t * 0.6 + s.p) * 10;
      const y = (((s.y + t * 0.02 * s.v) % 1) + 1) % 1;
      c.beginPath();
      c.arc(x, y * H, s.r, 0, 6.283);
      c.fill();
    }
    // ときどき流れ星
    if (!meteor && Math.random() < 0.004) meteor = { x: W * (0.4 + Math.random() * 0.6), y: H * Math.random() * 0.4, life: 1 };
    if (meteor) {
      meteor.x -= 7;
      meteor.y += 3.8;
      meteor.life -= 0.02;
      const g = c.createLinearGradient(meteor.x, meteor.y, meteor.x + 70, meteor.y - 38);
      g.addColorStop(0, "rgba(255,250,230," + 0.85 * meteor.life + ")");
      g.addColorStop(1, "rgba(255,250,230,0)");
      c.globalAlpha = 1;
      c.strokeStyle = g;
      c.lineWidth = 1.6;
      c.beginPath();
      c.moveTo(meteor.x, meteor.y);
      c.lineTo(meteor.x + 70, meteor.y - 38);
      c.stroke();
      if (meteor.life <= 0) meteor = null;
    }
    c.globalAlpha = 1;
    if (!reduce) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// ── Scroll & Header ───────────────────────────────────────────────────────────

function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;
  let lastScrollY = window.scrollY;
  header.style.transition = "transform 0.3s ease";
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      header.style.transform = y > lastScrollY && y > 100 ? "translateY(-100%)" : "translateY(0)";
      lastScrollY = y;
    },
    { passive: true },
  );
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ── Intersection Observer (fade-in) ──────────────────────────────────────────

function initFadeIn() {
  const targets = document.querySelectorAll(
    ".star-card, .feature-card, .download-info, .download-requirements, .privacy-content, .contact-method",
  );
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  // 最初から見えている範囲は隠さない（監視が働かない環境で真っ白にならないように）
  targets.forEach((el) => {
    if (el.getBoundingClientRect().top <= window.innerHeight) return;
    el.style.opacity = "0";
    observer.observe(el);
  });

  document.addEventListener("animationstart", (e) => {
    if (e.animationName === "fadeInUp") e.target.style.opacity = "";
  });

  // 保険。何らかの理由で監視が働かなくても、必ず見える状態に戻す
  setTimeout(() => {
    targets.forEach((el) => {
      if (el.style.opacity === "0") el.style.opacity = "";
    });
  }, 4000);
}

// ── Ripple on buttons ─────────────────────────────────────────────────────────

function initRipple() {
  document.querySelectorAll(".btn, .app-store-placeholder").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
        background:rgba(255,255,255,0.35);border-radius:50%;
        transform:scale(0);animation:ripple 0.5s linear;pointer-events:none;
      `;
      btn.style.position = "relative";
      btn.style.overflow = "hidden";
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });

  const style = document.createElement("style");
  style.textContent = `@keyframes ripple{to{transform:scale(2.5);opacity:0}}`;
  document.head.appendChild(style);
}

// ── Init ──────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  captureJapanese();
  applyLanguage(detectLanguage());

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  initSky();
  initHeader();
  initSmoothScroll();
  initFadeIn();
  initRipple();
});
