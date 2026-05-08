/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  LAB héritage — js/enhance.js                               ║
 * ║  Hiệu ứng nâng cao: scroll reveal, transition, UX           ║
 * ║                                                              ║
 * ║  Chức năng:                                                  ║
 * ║  • Nút VI/EN chuyển đổi ngôn ngữ toàn trang                ║
 * ║  • Dịch TẤT CẢ text qua data-vi / data-en attributes       ║
 * ║  • Dịch placeholder inputs qua data-ph-vi / data-ph-en      ║
 * ║  • Hover effects cho cards, buttons, links                  ║
 * ║  • Về/Trên/Dưới navigation indicator                        ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

document.addEventListener('DOMContentLoaded', () => {
  injectLangBtn();   /* Tạo và gắn nút VI/EN vào navbar */
});

/* ═══════════════════════════════════════════════════════════════
   BILINGUAL ENGINE
   ─────────────────────────────────────────────────────────────
   Nguyên tắc: TẤT CẢ text song ngữ đều qua data-vi / data-en
   trong HTML/app.js → hàm applyLang() đọc và cập nhật.

   Cách thêm text mới:
   → HTML tĩnh: thêm data-vi="..." data-en="..." vào element
   → Nội dung động (app.js): thêm _en vào DATA trong content.js
     và sử dụng data-vi="${...}" data-en="${..._en||...}" khi render
═══════════════════════════════════════════════════════════════ */
let currentLang = 'vi';

function injectLangBtn() {
  /* Tạo nút chuyển ngôn ngữ */
  const btn = document.createElement('button');
  btn.id = 'lang-btn';
  btn.textContent = 'EN';
  btn.title = 'Switch to English / Chuyển sang tiếng Anh';
  btn.setAttribute('aria-label', 'Switch language');
  btn.style.cssText = `
    font-family:var(--font-ui,Inter,sans-serif);
    font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
    color:var(--muted,#9a8e7a);border:1px solid rgba(154,142,122,.35);
    padding:7px 12px;cursor:pointer;background:none;
    transition:color .2s,border-color .2s;margin-right:8px;
  `;
  btn.addEventListener('mouseover', () => { btn.style.color='var(--gold,#c8981e)'; btn.style.borderColor='var(--gold,#c8981e)'; });
  btn.addEventListener('mouseout',  () => {
    if (currentLang === 'vi') { btn.style.color='var(--muted,#9a8e7a)'; btn.style.borderColor='rgba(154,142,122,.35)'; }
    else { btn.style.color='var(--gold,#c8981e)'; btn.style.borderColor='var(--gold,#c8981e)'; }
  });

  /* Gắn vào trước nút hamburger */
  const ham = document.getElementById('ham');
  if (ham) ham.parentNode.insertBefore(btn, ham);
  else document.getElementById('nav')?.appendChild(btn);

  /* Nút mobile trong mob-nav */
  const mobNav = document.getElementById('mobNav');
  if (mobNav) {
    const mobBtn = btn.cloneNode(true);
    mobBtn.id = 'lang-btn-mob';
    mobBtn.style.cssText += 'margin-top:8px;font-size:11px;padding:8px 18px;';
    mobNav.appendChild(mobBtn);
    mobBtn.addEventListener('click', toggleLang);
    mobBtn.addEventListener('mouseover', () => { mobBtn.style.color='var(--gold,#c8981e)'; mobBtn.style.borderColor='var(--gold,#c8981e)'; });
  }

  btn.addEventListener('click', toggleLang);
}

function toggleLang() {
  currentLang = currentLang === 'vi' ? 'en' : 'vi';
  document.documentElement.lang = currentLang;

  /* Cập nhật label nút */
  document.querySelectorAll('#lang-btn, #lang-btn-mob').forEach(b => {
    b.textContent = currentLang === 'vi' ? 'EN' : 'VI';
    b.title = currentLang === 'vi'
      ? 'Switch to English / Chuyển sang tiếng Anh'
      : 'Chuyển sang tiếng Việt / Switch to Vietnamese';
    b.style.color = currentLang === 'en'
      ? 'var(--gold,#c8981e)'
      : 'var(--muted,#9a8e7a)';
    b.style.borderColor = currentLang === 'en'
      ? 'var(--gold,#c8981e)'
      : 'rgba(154,142,122,.35)';
  });

  applyLang(); /* Cập nhật tất cả text */
}

/**
 * applyLang() — cập nhật text toàn trang theo ngôn ngữ hiện tại.
 *
 * Xử lý 3 loại:
 * 1. [data-vi] / [data-en]    → textContent của element
 * 2. [data-ph-vi] / [data-ph-en] → placeholder của input/textarea
 * 3. Một số trường hợp đặc biệt (title trang, aria-label, nav-cta)
 */
function applyLang() {
  const isEn = currentLang === 'en';

  /* ── 1. Tất cả element có data-vi ── */
  document.querySelectorAll('[data-vi]').forEach(el => {
    /* Bỏ qua nếu có children cũng có data-vi (tránh ghi đè container) */
    if (el.querySelector('[data-vi]')) return;
    const val = isEn ? (el.dataset.en || el.dataset.vi) : el.dataset.vi;
    el.textContent = val;
  });

  /* ── 2. Inputs: placeholder ── */
  document.querySelectorAll('[data-ph-vi]').forEach(el => {
    el.placeholder = isEn ? (el.dataset.phEn || el.dataset.phVi) : el.dataset.phVi;
  });

  /* ── 3. Nav CTA ── */
  const navCta = document.querySelector('a.nav-cta');
  if (navCta && navCta.dataset.vi) {
    navCta.textContent = isEn ? (navCta.dataset.en || navCta.dataset.vi) : navCta.dataset.vi;
  }

  /* ── 4. Title trang ── */
  document.title = isEn
    ? 'LAB héritage | Preserving Beauty — Heritage & Architecture Restoration'
    : 'LAB héritage | Conserver la beauté — Phục Dựng & Bảo Tồn Kiến Trúc';

  /* ── 5. Form select first option (cơ chế riêng vì là <option>) ── */
  const svcFirst = document.querySelector('#cf_service option[value=""]');
  if (svcFirst && svcFirst.dataset.vi) {
    svcFirst.textContent = `— ${isEn ? (svcFirst.dataset.en||svcFirst.dataset.vi) : svcFirst.dataset.vi} —`;
  }
  const matFirst = document.querySelector('#cf_material option[value=""]');
  if (matFirst && matFirst.dataset.vi) {
    matFirst.textContent = `— ${isEn ? (matFirst.dataset.en||matFirst.dataset.vi) : matFirst.dataset.vi} —`;
  }

  /* ── 6. Modal close button aria-label ── */
  const closeBtn = document.getElementById('proj-modal-close-btn');
  if (closeBtn) closeBtn.setAttribute('aria-label', isEn ? 'Close' : 'Đóng');

  /* ── 7. "Xem Chi Tiết" buttons trên project cards ── */
  document.querySelectorAll('.pi-detail-btn[data-vi]').forEach(btn => {
    btn.textContent = isEn ? (btn.dataset.en || btn.dataset.vi) : btn.dataset.vi;
  });
}
