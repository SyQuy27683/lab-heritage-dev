/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  LAB héritage — js/app.js                                   ║
 * ║  Core JavaScript: chuyển ngữ, modal, form + EmailJS         ║
 * ║  ✅ ĐÃ SỬA: giữ nguyên thẻ HTML (strong, em, ul, li...)    ║
 * ║  ✅ ĐÃ THÊM: chuyển ngữ động bằng innerHTML                 ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ═══════════════════════════════════════════════════════════════
   NGÔN NGỮ & KHỞI TẠO
═══════════════════════════════════════════════════════════════ */
let currentLang = 'vi';   // 'vi' hoặc 'en'

document.addEventListener('DOMContentLoaded', () => {
  renderAll();          // Render toàn bộ trang từ DATA (chỉ 1 lần)
  initNav();            // Navbar scroll + mobile menu
  initSlider();         // Before/After image slider
  initReveal();         // Scroll reveal animations
  initFilters();        // Project filter tabs
  initForm();           // Form validation + EmailJS
  initModal();          // Project modal dialog
  initLanguageSwitcher(); // Thêm nút chuyển ngữ và xử lý
});

/* ─────────────────────────────────────────────────────────────
   RENDER ENGINE — đọc DATA từ content.js và render HTML
   (chỉ gọi 1 lần khi tải trang)
───────────────────────────────────────────────────────────── */
function renderAll() {
  renderHero();
  renderBA();
  renderAbout();
  renderServices();
  renderProcess();
  renderProjects();
  renderProof();
  renderPartners();
  renderCTA();
  renderStandards();
  renderInsights();
  renderContact();
  renderFooter();
}

/* ── Hero section ── */
function renderHero() {
  const h = DATA.hero;
  // Đảm bảo có mảng ticker_en (nếu thiếu thì dùng ticker gốc)
  const tickerEn = h.ticker_en || h.ticker.slice(); // fallback

  // Tạo dữ liệu ticker song ngữ cho từng item
  const tickerData = h.ticker.map((vi, idx) => ({
    vi: vi,
    en: tickerEn[idx] || vi
  }));

  // Tạo các span có data-vi / data-en để updateAllTexts có thể cập nhật
  const tickerItems = [...tickerData, ...tickerData].map(item => `
    <span class="ticker-item">
      <span data-vi="${escapeAttr(item.vi)}" data-en="${escapeAttr(item.en)}">${item.vi}</span>
      <span class="ticker-dot">✦</span>
    </span>
  `).join('');

  const statsHtml = h.stats.map(s =>
    `<div>
       <div class="stat-num">${s.num}<sup style="font-size:.45em">${s.sup}</sup></div>
       <div class="stat-label" data-vi="${escapeAttr(s.label)}" data-en="${escapeAttr(s.label_en || s.label)}">${s.label}</div>
     </div>`
  ).join('');

  document.getElementById('hero').innerHTML = `
    <div class="hero-lines"><span></span><span></span><span></span><span></span></div>
    <div class="hero-accent"></div>
    <div class="hero-body">
      <div class="hero-eyebrow" data-vi="${escapeAttr(h.eyebrow)}" data-en="${escapeAttr(h.eyebrow_en || h.eyebrow)}">${h.eyebrow}</div>
      
      <h1 id="hero-h1">
        <span data-vi="${escapeAttr(h.h1_line1)}" data-en="${escapeAttr(h.h1_line1_en || h.h1_line1)}">${h.h1_line1}</span><br/>
        <em><span data-vi="${escapeAttr(h.h1_em)}" data-en="${escapeAttr(h.h1_em_en || h.h1_em)}">${h.h1_em}</span></em><br/>
        <span data-vi="${escapeAttr(h.h1_line3)}" data-en="${escapeAttr(h.h1_line3_en || h.h1_line3)}">${h.h1_line3}</span>
      </h1>

      <div class="hero-tagline" data-vi="${escapeAttr(DATA.company.slogan)}" data-en="${escapeAttr(DATA.company.slogan_en || DATA.company.slogan)}">${DATA.company.slogan}</div>
      
      <p class="hero-desc" data-vi="${escapeAttr(h.desc)}" data-en="${escapeAttr(h.desc_en || h.desc)}">${h.desc}</p>
      
      <div class="hero-btns">
        <a href="#contact" class="btn-primary" data-vi="${escapeAttr(h.btn1)}" data-en="${escapeAttr(h.btn1_en || h.btn1)}">${h.btn1}</a>
        <a href="#projects" class="btn-outline" data-vi="${escapeAttr(h.btn2)}" data-en="${escapeAttr(h.btn2_en || h.btn2)}">${h.btn2}</a>
      </div>
    </div>
    <div class="hero-stats">${statsHtml}</div>
    <div class="ticker-row"><div class="ticker-track">${tickerItems}</div></div>
  `;
}

/* ── Before / After slider ── */
function renderBA() {
  const ba = DATA.before_after;
  const L = DATA.ui_labels;
  const afterContent  = ba.img_after
    ? `<img src="${ba.img_after}" alt="${ba.label_after}" onerror="this.style.display='none'">
       <div class="ba-ph" style="position:absolute;z-index:1"><span>🏛️</span><p data-vi="${L.ba_after_vi}" data-en="${L.ba_after_en}">${L.ba_after_vi}</p></div>`
    : `<div class="ba-ph"><span>🏛️</span><p data-vi="${L.ba_after_vi}" data-en="${L.ba_after_en}">${L.ba_after_vi}</p></div>`;
  const beforeContent = ba.img_before
    ? `<img src="${ba.img_before}" alt="${ba.label_before}" onerror="this.style.display='none'">
       <div class="ba-ph" style="position:absolute;z-index:1;filter:grayscale(85%) brightness(.55)"><span>🏚️</span><p data-vi="${L.ba_before_vi}" data-en="${L.ba_before_en}">${L.ba_before_vi}</p></div>`
    : `<div class="ba-ph" style="filter:grayscale(85%) brightness(.55)"><span>🏚️</span><p data-vi="${L.ba_before_vi}" data-en="${L.ba_before_en}">${L.ba_before_vi}</p></div>`;

  document.getElementById('ba-section').innerHTML = `
    <div class="ba-wrap">
      <div class="ba-header reveal">
        <div class="label center" data-vi="${L.ba_label_vi}" data-en="${L.ba_label_en}">${L.ba_label_vi}</div>
        <h2 class="headline" style="text-align:center;margin-top:16px">
          <span data-vi="${L.ba_h2_line1_vi}" data-en="${L.ba_h2_line1_en}">${L.ba_h2_line1_vi}</span><br/>
          <em data-vi="${L.ba_h2_line2_vi}" data-en="${L.ba_h2_line2_en}">${L.ba_h2_line2_vi}</em>
        </h2>
        <p data-vi="${L.ba_desc_vi}" data-en="${L.ba_desc_en}">${L.ba_desc_vi}</p>
      </div>
      <div class="ba-slider reveal" id="baSlider">
        <div class="ba-label l" data-vi="${ba.label_before}" data-en="${ba.label_before_en || ba.label_before}">${ba.label_before}</div>
        <div class="ba-label r" data-vi="${ba.label_after}"  data-en="${ba.label_after_en || ba.label_after}">${ba.label_after}</div>
        <div class="ba-after">${afterContent}</div>
        <div class="ba-before" id="baBefore">${beforeContent}</div>
        <div class="ba-handle" id="baHandle">
          <div class="ba-line"></div>
          <div class="ba-knob">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="15 18 9 12 15 6"/><polyline points="9 6 15 12 9 18" transform="translate(6,0)"/>
            </svg>
          </div>
        </div>
      </div>
      <p class="ba-note reveal" data-vi="${L.ba_note_vi}" data-en="${L.ba_note_en}">${L.ba_note_vi}</p>
    </div>
  `;
}

function renderAbout() {
  const a = DATA.about;
  const L = DATA.ui_labels;
  const imgHtml = a.img
    ? `<img src="${a.img}" alt="LAB héritage" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  const parasHtml = a.paragraphs.map((p, i) => {
    const p_en = a.paragraphs_en?.[i] || p;
    return `<p class="about-para" data-vi="${escapeAttr(p)}" data-en="${escapeAttr(p_en)}">${p}</p>`;
  }).join('');
  const statsHtml = a.stats.map(s =>
    `<div class="stat-box"><div class="n">${s.n}</div><div class="l" data-vi="${s.l}" data-en="${s.l_en || s.l}">${s.l}</div></div>`
  ).join('');
  const tagsHtml = a.products.map((p, i) => {
    const p_en = a.products_en?.[i] || p;
    return `<span class="prod-tag" data-vi="${escapeAttr(p)}" data-en="${escapeAttr(p_en)}">${p}</span>`;
  }).join('');

  // SỬA: lấy đúng id "about"
  const aboutContainer = document.getElementById('about');
  if (!aboutContainer) return;

  aboutContainer.innerHTML = `
    <div class="about-image reveal">
      ${imgHtml}
      <div class="about-img-ph" ${a.img ? 'style="display:none"' : ''}>
        <span>🏺</span>
        <p id="about-img-ph-text"
           data-vi="${L.about_img_ph_vi}"
           data-en="${L.about_img_ph_en}">${L.about_img_ph_vi}</p>
      </div>
    </div>
    <div class="reveal delay1">
      <div class="label" id="about-label" style="margin-bottom:20px"
           data-vi="${L.about_label_vi}" data-en="${L.about_label_en}">${L.about_label_vi}</div>
      <h2 class="headline" id="about-h2" style="margin-bottom:24px">
        <span data-vi="${L.about_h2_line1_vi}" data-en="${L.about_h2_line1_en}">${L.about_h2_line1_vi}</span><br/>
        <em data-vi="${L.about_h2_em_vi}" data-en="${L.about_h2_em_en}">${L.about_h2_em_vi}</em>
      </h2>
      <div class="about-text" id="about-text">${parasHtml}</div>
      <div class="stats-4">${statsHtml}</div>
      <div class="prod-strip">
        <div class="prod-strip-label" id="about-prod-label"
             data-vi="${L.about_prod_label_vi}" data-en="${L.about_prod_label_en}">${L.about_prod_label_vi}</div>
        <div class="prod-tags">${tagsHtml}</div>
      </div>
    </div>
  `;
}

/* ── Services cards ── */
function renderServices() {
  const el = document.getElementById('svc-grid');
  if (!el) return;
  el.innerHTML = DATA.services.map((s, i) => `
    <div class="svc-card reveal${i % 2 === 1 ? ' delay1' : ''}">
      <div class="svc-num">${s.num}</div>
      <span class="svc-icon">${s.icon}</span>
      <div class="svc-title" data-vi="${escapeAttr(s.title)}" data-en="${escapeAttr(s.title_en || s.title)}">${s.title}</div>
      <div class="svc-sub"   data-vi="${escapeAttr(s.sub)}"   data-en="${escapeAttr(s.sub_en || s.sub)}">${s.sub}</div>
      <p class="svc-desc"    data-vi="${escapeAttr(s.desc)}"  data-en="${escapeAttr(s.desc_en || s.desc)}">${s.desc}</p>
      <div class="svc-mats">
        ${s.mats.map((m, idx) => {
          const m_en = s.mats_en?.[idx] || m;
          return `<span class="mat-chip" data-vi="${escapeAttr(m)}" data-en="${escapeAttr(m_en)}">${m}</span>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

/* ── Process steps ── */
function renderProcess() {
  const el = document.getElementById('proc-grid');
  if (!el) return;
  el.innerHTML = DATA.process.map((p, i) => `
    <div class="proc-step reveal${i > 0 ? ` delay${i}` : ''}">
      <div class="proc-num">${p.num}</div>
      <div class="proc-title" data-vi="${escapeAttr(p.title)}" data-en="${escapeAttr(p.title_en || p.title)}">${p.title}</div>
      <p class="proc-desc"   data-vi="${escapeAttr(p.desc)}"  data-en="${escapeAttr(p.desc_en || p.desc)}">${p.desc}</p>
    </div>
  `).join('');
}

/* ── Project cards ── */
function renderProjects() {
  const el = document.getElementById('proj-grid');
  if (!el) return;
  el.innerHTML = DATA.projects.map((p, i) => {
    const imgHtml = p.img ? `<img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'">` : '';
    return `
      <div class="pi${p.featured ? ' featured' : ''} reveal${i===1?' delay1':i===4?' delay2':''}"
           data-cat="${p.filter}" data-index="${i}">
        <div class="pi-bg" style="background:${p.bg}">${imgHtml}<span class="pi-icon">${p.icon}</span></div>
        <div class="pi-overlay">
          <div class="pi-cat"  data-vi="${escapeAttr(p.cat)}"  data-en="${escapeAttr(p.cat_en || p.cat)}">${p.cat}</div>
          <div class="pi-name" data-vi="${escapeAttr(p.name)}" data-en="${escapeAttr(p.name_en || p.name)}">${p.name}</div>
          <div class="pi-desc" data-vi="${escapeAttr(p.desc)}" data-en="${escapeAttr(p.desc_en || p.desc)}">${p.desc}</div>
          <span class="pi-detail-btn" data-vi="Xem Chi Tiết →" data-en="View Details →">Xem Chi Tiết →</span>
        </div>
      </div>
    `;
  }).join('');
}

/* ── Proof (ALMA section) ── */
function renderProof() {
  const el = document.getElementById('proof-section');
  if (!el) return;
  const pr = DATA.proof;
  const L  = DATA.ui_labels;
  const parasHtml = pr.paragraphs.map((p, i) => {
    const p_en = pr.paragraphs_en?.[i] || p;
    return `<p class="proof-p" data-vi="${escapeAttr(p)}" data-en="${escapeAttr(p_en)}">${p}</p>`;
  }).join('');
  const mosaicHtml = pr.images.map(img =>
    `<div class="pm">${img.img ? `<img src="${img.img}" alt="" onerror="this.style.display='none'">` : img.icon}</div>`
  ).join('');

  el.innerHTML = `
    <div class="proof-inner">
      <div class="reveal">
        <div class="label" style="margin-bottom:20px"
             data-vi="${L.proof_label_vi}" data-en="${L.proof_label_en}">${L.proof_label_vi}</div>
        <h2 class="headline" style="margin-bottom:20px"
            data-vi="${pr.title1}<br/><em>${pr.title2}</em>" 
            data-en="${pr.title1_en || pr.title1}<br/><em>${pr.title2_en || pr.title2}</em>">
          ${pr.title1}<br/><em>${pr.title2}</em>
        </h2>
        <blockquote class="proof-quote"
                    data-vi="${escapeAttr(pr.quote)}" data-en="${escapeAttr(pr.quote_en || pr.quote)}">${pr.quote}</blockquote>
        ${parasHtml}
      </div>
      <div class="reveal delay1">
        <div class="proof-mosaic">${mosaicHtml}</div>
        <p style="margin-top:14px;font-family:var(--font-ui);font-size:9px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);text-align:center"
           data-vi="${L.proof_mosaic_note_vi}" data-en="${L.proof_mosaic_note_en}">${L.proof_mosaic_note_vi}</p>
      </div>
    </div>
  `;
}

/* ── Partners ── */
function renderPartners() {
  const grid = document.getElementById('prt-grid');
  const note = document.getElementById('prt-note');
  if (grid) {
    grid.innerHTML = DATA.partners.map(p => `
      <div class="prt-item">
        <div>
          <div class="prt-name" style="${p.style};color:var(--cream2)">${p.name}</div>
          ${p.sub ? `<span class="prt-sub" data-vi="${p.sub}" data-en="${p.sub_en || p.sub}">${p.sub}</span>` : ''}
        </div>
      </div>
    `).join('');
  }
  if (note) {
    note.setAttribute('data-vi', DATA.partners_note);
    note.setAttribute('data-en', DATA.partners_note_en || DATA.partners_note);
    note.innerHTML = DATA.partners_note; // dùng innerHTML đề phòng có HTML
  }
}

/* ── CTA Banner ── */
function renderCTA() {
  const el = document.getElementById('cta-banner');
  if (!el) return;
  const c = DATA.cta;
  el.innerHTML = `
    <h2>
      <span data-vi="${c.line1}" data-en="${c.line1_en || c.line1}">${c.line1}</span><br/>
      <em data-vi="${c.line2}" data-en="${c.line2_en || c.line2}">${c.line2}</em>
    </h2>
    <a href="#contact" class="btn-black"
       data-vi="${c.btn}" data-en="${c.btn_en || c.btn}">${c.btn}</a>
  `;
}

/* ── Standards & Brand cards ── */
function renderStandards() {
  const stdList  = document.getElementById('std-list');
  const brandDiv = document.getElementById('brand-cards');
  if (stdList) {
    stdList.innerHTML = DATA.standards.map(s => `
      <div class="std-item">
        <span class="std-code">${s.code}</span>
        <span class="std-desc" data-vi="${escapeAttr(s.desc)}" data-en="${escapeAttr(s.desc_en || s.desc)}">${s.desc}</span>
      </div>
    `).join('');
  }
  if (brandDiv) {
    brandDiv.innerHTML = DATA.brands.map(b => `
      <div class="brand-card">
        <div class="brand-card-name" data-vi="${escapeAttr(b.name)}" data-en="${escapeAttr(b.name_en || b.name)}">${b.name}</div>
        <p class="brand-card-desc" data-vi="${escapeAttr(b.desc)}" data-en="${escapeAttr(b.desc_en || b.desc)}">${b.desc}</p>
        <span class="brand-badge" data-vi="${b.badge}" data-en="${b.badge_en || b.badge}">${b.badge}</span>
      </div>
    `).join('');
  }
}

/* ── Insights cards ── */
function renderInsights() {
  const el = document.getElementById('ins-grid');
  if (!el) return;
  el.innerHTML = DATA.insights.map((ins, i) => {
    const thumbContent = ins.img
      ? `<img src="${ins.img}" alt="${ins.tag}" onerror="this.style.display='none'">${ins.icon}`
      : ins.icon;
    return `
      <div class="ins-card reveal${i > 0 ? ` delay${i}` : ''}">
        <div class="ins-thumb">${thumbContent}</div>
        <div class="ins-body">
          <div class="ins-tag"     data-vi="${escapeAttr(ins.tag)}"     data-en="${escapeAttr(ins.tag_en || ins.tag)}">${ins.tag}</div>
          <div class="ins-title"   data-vi="${escapeAttr(ins.title)}"   data-en="${escapeAttr(ins.title_en || ins.title)}">${ins.title}</div>
          <p class="ins-excerpt"   data-vi="${escapeAttr(ins.excerpt)}" data-en="${escapeAttr(ins.excerpt_en || ins.excerpt)}">${ins.excerpt}</p>
        </div>
      </div>
    `;
  }).join('');
}

/* ── Contact section ── */
function renderContact() {
  const c      = DATA.company;
  const L      = DATA.ui_labels;
  const infoEl = document.getElementById('contact-info');
  const formEl = document.getElementById('contact-form');

  if (infoEl) {
    const mapHtml = c.map_embed
      ? `<iframe class="map-iframe" src="${c.map_embed}" allowfullscreen loading="lazy"></iframe>`
      : `<div class="map-ph"><span style="font-size:28px;opacity:.25">🗺️</span><p>${c.address}</p></div>`;

    infoEl.innerHTML = `
      <div class="label" id="contact-label" style="margin-bottom:20px"
           data-vi="${L.contact_label_vi}" data-en="${L.contact_label_en}">${L.contact_label_vi}</div>
      <div class="ci-title" id="ci-title-el">
        <span data-vi="${L.contact_title_line1_vi}" data-en="${L.contact_title_line1_en}">${L.contact_title_line1_vi}</span><br/>
        <em data-vi="${L.contact_title_em_vi}" data-en="${L.contact_title_em_en}">${L.contact_title_em_vi}</em>
        <span data-vi="${L.contact_title_line2_vi}" data-en="${L.contact_title_line2_en}"> ${L.contact_title_line2_vi}</span>
      </div>
      <p class="ci-sub"
         data-vi="${c.name} ${L.contact_sub_vi}"
         data-en="${c.name_en || c.name} ${L.contact_sub_en}">${c.name} ${L.contact_sub_vi}</p>
      <div class="ci-items">
        <div class="ci-item">
          <div class="ci-icon">📞</div>
          <div class="ci-text">
            <strong>${c.contact}</strong>
            <a href="tel:${c.phone.replace(/\s/g,'')}"><span>${c.phone}</span></a>
          </div>
        </div>
        <div class="ci-item">
          <div class="ci-icon">✉️</div>
          <div class="ci-text">
            <strong>Email</strong>
            <a href="mailto:${c.email}"><span>${c.email}</span></a>
          </div>
        </div>
        <div class="ci-item">
          <div class="ci-icon">📍</div>
          <div class="ci-text">
            <strong data-vi="${L.label_address_vi}" data-en="${L.label_address_en}">${L.label_address_vi}</strong>
            <span>${c.address}</span>
          </div>
        </div>
        <div class="ci-item">
          <div class="ci-icon">🏭</div>
          <div class="ci-text">
            <strong data-vi="${L.label_workshop_vi}" data-en="${L.label_workshop_en}">${L.label_workshop_vi}</strong>
            <span>${c.workshop}</span>
          </div>
        </div>
      </div>
      ${mapHtml}
    `;
  }

  if (formEl) {
    // Trong renderContact(), sau const L = DATA.ui_labels; và trước formEl.innerHTML = ...
    const svcOpts = DATA.form_services.map((sv, idx) => {
    const svEn = DATA.form_services_en?.[idx] || sv;
    return `<option value="${escapeAttr(sv)}" data-vi="${escapeAttr(sv)}" data-en="${escapeAttr(svEn)}">${sv}</option>`;
        }).join('');

    const matOpts = DATA.form_materials.map((mat, idx) => {
    const matEn = DATA.form_materials_en?.[idx] || mat;
    return `<option value="${escapeAttr(mat)}" data-vi="${escapeAttr(mat)}" data-en="${escapeAttr(matEn)}">${mat}</option>`;
        }).join('');
    formEl.innerHTML = `
      <div class="form-wrap" id="contactFormWrap">
        <div class="fg-2">
          <div class="fg">
            <label for="cf_name"
                   data-vi="${L.form_name_vi}" data-en="${L.form_name_en}">${L.form_name_vi}
              <span style="color:var(--gold)">*</span></label>
            <input type="text" id="cf_name" name="from_name"
                   placeholder="${L.form_name_ph_vi}"
                   data-ph-vi="${L.form_name_ph_vi}" data-ph-en="${L.form_name_ph_en}"
                   autocomplete="name"/>
          </div>
          <div class="fg">
            <label for="cf_phone"
                   data-vi="${L.form_phone_vi}" data-en="${L.form_phone_en}">${L.form_phone_vi}
              <span style="color:var(--gold)">*</span></label>
            <input type="tel" id="cf_phone" name="phone"
                   placeholder="${L.form_phone_ph_vi}"
                   data-ph-vi="${L.form_phone_ph_vi}" data-ph-en="${L.form_phone_ph_en}"
                   autocomplete="tel"/>
          </div>
        </div>
        <div class="fg">
          <label for="cf_email"
                 data-vi="${L.form_email_vi}" data-en="${L.form_email_en}">${L.form_email_vi}
            <span style="color:var(--gold)">*</span></label>
          <input type="email" id="cf_email" name="reply_to"
                 placeholder="${L.form_email_ph_vi}"
                 data-ph-vi="${L.form_email_ph_vi}" data-ph-en="${L.form_email_ph_en}"
                 autocomplete="email"/>
        </div>
        <div class="fg">
          <label for="cf_service"
                 data-vi="${L.form_service_vi}" data-en="${L.form_service_en}">${L.form_service_vi}</label>
                 <select id="cf_service" name="service">
                 <option value=""
                   data-vi="— ${L.form_service_ph_vi} —"
                   data-en="— ${L.form_service_ph_en} —">— ${L.form_service_ph_vi} —</option>
                 ${svcOpts}
               </select>
        </div>
        <div class="fg">
          <label for="cf_material"
                 data-vi="${L.form_material_vi}" data-en="${L.form_material_en}">${L.form_material_vi}</label>
                 <select id="cf_material" name="material">
                 <option value=""
                   data-vi="— ${L.form_material_ph_vi} —"
                   data-en="— ${L.form_material_ph_en} —">— ${L.form_material_ph_vi} —</option>
                 ${matOpts}
               </select>
        </div>
        <div class="fg">
          <label for="cf_message"
                 data-vi="${L.form_message_vi}" data-en="${L.form_message_en}">${L.form_message_vi}</label>
          <textarea id="cf_message" name="message"
                    placeholder="${L.form_message_ph_vi}"
                    data-ph-vi="${L.form_message_ph_vi}" data-ph-en="${L.form_message_ph_en}"></textarea>
        </div>
        <div id="form-status" style="display:none"></div>
        <button class="btn-submit" id="submitBtn" type="button"
                data-vi="${L.form_submit_vi}" data-en="${L.form_submit_en}">${L.form_submit_vi}</button>
      </div>
    `;
  }
}

/* ── Footer ── */
function renderFooter() {
  const el = document.getElementById('ft-inner');
  if (!el) return;
  const c = DATA.company;
  const L = DATA.ui_labels;
  el.innerHTML = `
    <div class="ft-logo">
      <img src="images/logo.png" alt="${c.name}"
           onerror="this.onerror=null;this.src='images/logo.svg'"/>
      <div class="ft-logo-txt">
        <div class="brand">LAB <b>héritage</b></div>
        <div class="tag" data-vi="${c.tagline}" data-en="${L.ft_tagline_en || c.tagline}">${c.tagline}</div>
      </div>
    </div>
    <div class="ft-links">
      <a href="#about"    id="ftl-about"    data-vi="${L.nav_about_vi}"    data-en="${L.nav_about_en}">${L.nav_about_vi}</a>
      <a href="#services" id="ftl-services" data-vi="${L.nav_services_vi}" data-en="${L.nav_services_en}">${L.nav_services_vi}</a>
      <a href="#projects" id="ftl-projects" data-vi="${L.nav_projects_vi}" data-en="${L.nav_projects_en}">${L.nav_projects_vi}</a>
      <a href="#partners" id="ftl-partners" data-vi="${L.nav_partners_vi}" data-en="${L.nav_partners_en}">${L.nav_partners_vi}</a>
      <a href="#insights" id="ftl-insights" data-vi="${L.nav_insights_vi}" data-en="${L.nav_insights_en}">${L.nav_insights_vi}</a>
      <a href="#contact"  id="ftl-contact"  data-vi="${L.nav_contact_vi}"  data-en="${L.nav_contact_en}">${L.nav_contact_vi}</a>
    </div>
    <div class="ft-copy">© 2026 LAB héritage · Design by SyQy.dev          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .&nbsp;</div>
  `;
  const zBtn = document.querySelector('.zalo-btn');
  if (zBtn) zBtn.href = c.zalo;
}


/* ═══════════════════════════════════════════════════════════════
   CHUYỂN NGỮ ĐỘNG 
═══════════════════════════════════════════════════════════════ */
function updateAllTexts() {
  const isEn = currentLang === 'en';
  // 1. Các phần tử có data-vi / data-en (thường là div, span, p, h2, ...)
  document.querySelectorAll('[data-vi][data-en]').forEach(el => {
    const content = isEn ? el.getAttribute('data-en') : el.getAttribute('data-vi');
    if (content !== null) {
      // Dùng innerHTML để giữ thẻ HTML (strong, em, br, ul, li)
      el.innerHTML = content;
    }
  });
  
  // 2. Các thẻ heading đặc biệt có data-vi chứa HTML (ví dụ proof h2)
  document.querySelectorAll('h2.headline[data-vi], h2[data-vi]').forEach(el => {
    const content = isEn ? el.getAttribute('data-en') : el.getAttribute('data-vi');
    if (content) el.innerHTML = content;
  });

  // 3. Input placeholders (có data-ph-vi, data-ph-en)
  document.querySelectorAll('input, textarea, select').forEach(el => {
    const phVi = el.getAttribute('data-ph-vi');
    const phEn = el.getAttribute('data-ph-en');
    if (phVi && phEn) {
      el.placeholder = isEn ? phEn : phVi;
    }
    // Đối với select, cập nhật option mặc định (nếu có data-vi)
    if (el.tagName === 'SELECT') {
      const defaultOpt = el.querySelector('option[value=""]');
      if (defaultOpt) {
        const defVi = defaultOpt.getAttribute('data-vi');
        const defEn = defaultOpt.getAttribute('data-en');
        if (defVi && defEn) {
          defaultOpt.textContent = isEn ? defEn : defVi;
        }
      }
      // Các option khác nếu có data-vi riêng
      el.querySelectorAll('option[data-vi][data-en]').forEach(opt => {
        const txt = isEn ? opt.getAttribute('data-en') : opt.getAttribute('data-vi');
        if (txt) opt.textContent = txt;
      });
    }
  });

  // 4. Nút submit và các button có data-vi
  document.querySelectorAll('button[data-vi][data-en]').forEach(btn => {
    const txt = isEn ? btn.getAttribute('data-en') : btn.getAttribute('data-vi');
    if (txt) btn.textContent = txt;
  });

  // 5. Cập nhật lang attribute trên html
  document.documentElement.lang = currentLang;
  
  // 6. Nếu modal đang mở, cập nhật nội dung modal theo ngôn ngữ mới
  const modal = document.getElementById('proj-modal-overlay');
  if (modal && modal.classList.contains('open')) {
    // Lấy lại project hiện tại (được lưu ở đâu đó) – cách đơn giản: tìm project bằng tên?
    // Ta sẽ lưu currentProjectId vào biến toàn cục
    if (window._currentProjectIndex !== undefined) {
      const project = DATA.projects[window._currentProjectIndex];
      if (project) updateModalContent(project);
    }
  }
}

/* Escape HTML trong thuộc tính để tránh vỡ cấu trúc */
function escapeAttr(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
}

/* Thêm nút chuyển ngữ VI | EN vào navbar (giống mẫu cũ) */
function initLanguageSwitcher() {
  const existing = document.getElementById('lang-switcher');
  if (existing) return;

  // Tạo nút với cấu trúc span để có thể style riêng VI và EN
  const langBtn = document.createElement('button');
  langBtn.id = 'lang-switcher';
  langBtn.className = 'lang-switch-btn';
  langBtn.setAttribute('aria-label', 'Switch language');
  langBtn.innerHTML = '<span class="lang-vi">VI</span><span class="lang-sep"> | </span><span class="lang-en">EN</span>';

  // Tìm vị trí để chèn: trong navbar, bên cạnh nút hamburger
  const nav = document.getElementById('nav');
  const navRight = document.querySelector('.nav-right');
  if (navRight) {
    navRight.appendChild(langBtn);
  } else {
    nav?.appendChild(langBtn);
  }

  // Style kèm hiệu ứng active
  const style = document.createElement('style');
  style.textContent = `
    .lang-switch-btn {
      background: transparent;
      border: 1px solid rgba(200,152,30,0.4);
      color: var(--cream);
      font-family: var(--font-ui);
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 1px;
      padding: 6px 12px;
      border-radius: 30px;
      cursor: pointer;
      transition: 0.2s;
      margin-left: 16px;
      display: inline-flex;
      gap: 2px;
      align-items: baseline;
    }
    .lang-switch-btn:hover {
      border-color: var(--gold);
    }
    .lang-vi, .lang-en {
      transition: color 0.2s, text-shadow 0.2s;
    }
    .lang-vi.active, .lang-en.active {
      color: var(--gold);
      text-shadow: 0 0 4px rgba(200,152,30,0.4);
    }
    .lang-sep {
      color: rgba(255,245,220,0.5);
      margin: 0 2px;
    }
    @media (max-width: 768px) {
      .lang-switch-btn {
        margin: 10px 20px;
        display: inline-flex;
        width: fit-content;
      }
    }
  `;
  document.head.appendChild(style);

  // Cập nhật UI của nút dựa trên currentLang
  function updateLangButtonUI() {
    const viSpan = langBtn.querySelector('.lang-vi');
    const enSpan = langBtn.querySelector('.lang-en');
    if (currentLang === 'vi') {
      viSpan.classList.add('active');
      enSpan.classList.remove('active');
    } else {
      enSpan.classList.add('active');
      viSpan.classList.remove('active');
    }
  }

  // Xử lý click chuyển ngữ
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    updateAllTexts();
    updateLangButtonUI();
  });

  // Trên mobile: thêm nút vào menu dọc và đồng bộ trạng thái
  const mobNav = document.getElementById('mobNav');
  if (mobNav && !mobNav.querySelector('.lang-switch-btn')) {
    const mobBtn = langBtn.cloneNode(true);
    mobBtn.style.margin = '20px';
    mobBtn.style.display = 'inline-flex';
    mobNav.appendChild(mobBtn);

    // Hàm đồng bộ UI cho nút mobile
    function updateMobileBtnUI() {
      const mobVi = mobBtn.querySelector('.lang-vi');
      const mobEn = mobBtn.querySelector('.lang-en');
      if (currentLang === 'vi') {
        mobVi.classList.add('active');
        mobEn.classList.remove('active');
      } else {
        mobEn.classList.add('active');
        mobVi.classList.remove('active');
      }
    }

    mobBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLang = currentLang === 'vi' ? 'en' : 'vi';
      updateAllTexts();
      updateLangButtonUI();    // cập nhật nút chính
      updateMobileBtnUI();     // cập nhật nút mobile

      // Đóng menu mobile nếu đang mở
      const ham = document.getElementById('ham');
      if (ham && ham.classList.contains('open')) {
        ham.classList.remove('open');
        mobNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Khởi tạo UI cho nút mobile
    updateMobileBtnUI();
  }

  // Khởi tạo UI cho nút chính
  updateLangButtonUI();
}


/* ═══════════════════════════════════════════════════════════════
   INTERACTIONS — Navbar, Slider, Reveal, Filters
═══════════════════════════════════════════════════════════════ */

function initNav() {
  const nav = document.getElementById('nav');
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mobNav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', scrollY > 60);
  }, { passive: true });

  ham?.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
    document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
  });
  mob?.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      ham.classList.remove('open');
      mob.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

function initSlider() {
  setTimeout(() => {
    const box    = document.getElementById('baSlider');
    const before = document.getElementById('baBefore');
    const handle = document.getElementById('baHandle');
    if (!box || !before || !handle) return;
    let drag = false;

    function move(x) {
      const r = box.getBoundingClientRect();
      const p = Math.min(95, Math.max(5, ((x - r.left) / r.width) * 100));
      before.style.clipPath = `inset(0 ${100-p}% 0 0)`;
      handle.style.left = p + '%';
    }
    before.style.clipPath = 'inset(0 50% 0 0)';

    handle.addEventListener('mousedown',  e => { drag = true; e.preventDefault(); });
    window.addEventListener('mouseup',    () => drag = false);
    window.addEventListener('mousemove',  e => { if (drag) move(e.clientX); });
    box.addEventListener('click',         e => move(e.clientX));
    handle.addEventListener('touchstart', e => { drag = true; e.preventDefault(); }, { passive: false });
    window.addEventListener('touchend',   () => drag = false);
    window.addEventListener('touchmove',  e => { if (drag) move(e.touches[0].clientX); }, { passive: true });
  }, 80);
}

function initReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
    { threshold: 0.08 }
  );
  setTimeout(() => document.querySelectorAll('.reveal').forEach(el => obs.observe(el)), 120);
}

function initFilters() {
  setTimeout(() => {
    document.querySelectorAll('.pf').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.pf').forEach(b => b.classList.remove('on'));
        this.classList.add('on');
        const f = this.dataset.f;
        document.querySelectorAll('.pi').forEach(pi => {
          pi.classList.toggle('hidden', f !== 'all' && pi.dataset.cat !== f);
        });
      });
    });
  }, 150);
}


/* ═══════════════════════════════════════════════════════════════
   MODAL DỰ ÁN — mở/đóng chi tiết, hỗ trợ chuyển ngữ
═══════════════════════════════════════════════════════════════ */
let _modalEl = null;
window._currentProjectIndex = null;

function initModal() {
  _modalEl = document.createElement('div');
  _modalEl.id = 'proj-modal-overlay';
  _modalEl.className = 'proj-modal-overlay';
  _modalEl.setAttribute('role', 'dialog');
  _modalEl.setAttribute('aria-modal', 'true');
  _modalEl.innerHTML = `
    <div class="proj-modal-box" id="proj-modal-box" tabindex="-1">
      <button class="proj-modal-close" id="proj-modal-close-btn" type="button" aria-label="Đóng">✕</button>
      <div class="proj-modal-img"    id="proj-modal-img"></div>
      <div class="proj-modal-body">
        <div class="proj-modal-cat"    id="proj-modal-cat"></div>
        <h2                            id="proj-modal-name"></h2>
        <div class="proj-modal-desc"   id="proj-modal-desc"></div>
        <div class="proj-modal-detail" id="proj-modal-detail"></div>
      </div>
    </div>
  `;
  document.body.appendChild(_modalEl);

  _modalEl.addEventListener('click', e => {
    if (e.target === _modalEl) closeModal();
  });
  document.getElementById('proj-modal-close-btn').addEventListener('click', e => {
    e.stopPropagation();
    closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && _modalEl.classList.contains('open')) closeModal();
  });

  setTimeout(() => {
    const grid = document.getElementById('proj-grid');
    if (grid) {
      grid.addEventListener('click', e => {
        const pi = e.target.closest('.pi');
        if (!pi) return;
        const idx = parseInt(pi.dataset.index ?? 0);
        window._currentProjectIndex = idx;
        openModal(DATA.projects[idx]);
      });
    }
  }, 400);
}

function openModal(project) {
  window._currentProjectIndex = DATA.projects.findIndex(p => p.name === project.name);
  updateModalContent(project);
  _modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('proj-modal-close-btn')?.focus(), 60);
}

function updateModalContent(project) {
  const isEn = currentLang === 'en';
  const L = DATA.ui_labels;

  const catEl    = document.getElementById('proj-modal-cat');
  const nameEl   = document.getElementById('proj-modal-name');
  const descEl   = document.getElementById('proj-modal-desc');
  const detailEl = document.getElementById('proj-modal-detail');
  const imgEl    = document.getElementById('proj-modal-img');
  const closeBtn = document.getElementById('proj-modal-close-btn');
  
  
  if (closeBtn) {
    closeBtn.setAttribute('aria-label', isEn ? 'Close' : 'Đóng');
    closeBtn.onclick = closeModal;   // thêm dòng này
  };
  if (catEl)  catEl.textContent  = isEn ? (project.cat_en  || project.cat)  : project.cat;
  if (nameEl) nameEl.textContent = isEn ? (project.name_en || project.name) : project.name;
  if (descEl) descEl.textContent = isEn ? (project.desc_en || project.desc) : project.desc;

  if (detailEl) {
    const detailHtml = (isEn && project.detail_en) ? project.detail_en
                      : project.detail ? project.detail
                      : `<p style="color:var(--muted);font-style:italic">
                           ${isEn ? L.modal_no_content_en : L.modal_no_content_vi}
                         </p>
                         <p style="margin-top:16px">
                           <a href="#contact" style="color:var(--gold);font-weight:600;text-decoration:underline;text-underline-offset:3px"
                              onclick="closeModal();return false;">
                             ${isEn ? L.modal_cta_en : L.modal_cta_vi}
                           </a>
                         </p>`;
    detailEl.innerHTML = detailHtml;
  }

  if (imgEl) {
    if (project.img) {
      imgEl.innerHTML = `<img src="${project.img}" alt="${project.name}" onerror="this.style.display='none'">`;
    } else {
      imgEl.style.background = project.bg || 'var(--dark)';
      imgEl.innerHTML = `<span style="font-size:80px;opacity:.12;position:relative;z-index:1">${project.icon}</span>`;
    }
  }
}

function closeModal() {
  if (!_modalEl) return;
  _modalEl.classList.remove('open');
  document.body.style.overflow = '';
  window._currentProjectIndex = null;
}


/* ═══════════════════════════════════════════════════════════════
   EMAILJS — GỬI FORM (giữ nguyên)
═══════════════════════════════════════════════════════════════ */
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

function getLang() {
  return document.documentElement.lang === 'en' ? 'en' : 'vi';
}

function showFormStatus(type, msg) {
  const el = document.getElementById('form-status');
  if (!el) return;
  const C = {
    sending: { bg:'rgba(200,152,30,.12)', border:'rgba(200,152,30,.3)', color:'var(--cream)' },
    success: { bg:'rgba(26,107,32,.15)',  border:'rgba(26,107,32,.4)',  color:'#6bcf7f' },
    error:   { bg:'rgba(180,40,40,.15)',  border:'rgba(180,40,40,.4)',  color:'#f87171' },
    warning: { bg:'rgba(200,152,30,.12)', border:'rgba(200,152,30,.3)', color:'var(--gold)' },
  };
  const c = C[type] || C.warning;
  el.style.cssText = `display:block;padding:13px 16px;margin-bottom:14px;border:1.5px solid ${c.border};background:${c.bg};color:${c.color};font-family:var(--font-ui);font-size:11px;letter-spacing:1.5px;line-height:1.6;`;
  el.textContent = msg || '';
}

function hideFormStatus() {
  const el = document.getElementById('form-status');
  if (el) el.style.display = 'none';
}

async function sendFormData(formData) {
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name: formData.name,
    phone:     formData.phone,
    reply_to:  formData.email,
    service:   formData.service  || '(không chọn)',
    material:  formData.material || '(không chọn)',
    message:   formData.message  || '(không có mô tả)',
    to_email:  'dotrongthientu@labheritage.com.vn',
  });
}

function initForm() {
  setTimeout(() => {
    const btn = document.getElementById('submitBtn');
    if (!btn) return;

    btn.addEventListener('click', async function() {
      const lang = getLang();
      const L    = DATA.ui_labels;
      const FMSG = {
        sending: { vi:'⏳ Đang gửi...', en:'⏳ Sending...' },
        success: { vi:'✓ Gửi thành công! Chúng tôi sẽ liên hệ trong 24 giờ.', en:'✓ Sent! We will contact you within 24 hours.' },
        error:   { vi:'✗ Gửi thất bại. Vui lòng thử lại hoặc liên hệ qua Zalo.', en:'✗ Failed. Please retry or contact us via Zalo.' },
        empty:   { vi:'⚠ Vui lòng điền đầy đủ họ tên, số điện thoại và email.', en:'⚠ Please fill in your name, phone, and email.' },
        email:   { vi:'⚠ Địa chỉ email không hợp lệ.', en:'⚠ Invalid email address.' },
      };

      const name     = (document.getElementById('cf_name')?.value     || '').trim();
      const phone    = (document.getElementById('cf_phone')?.value    || '').trim();
      const email    = (document.getElementById('cf_email')?.value    || '').trim();
      const service  = (document.getElementById('cf_service')?.value  || '').trim();
      const material = (document.getElementById('cf_material')?.value || '').trim();
      const message  = (document.getElementById('cf_message')?.value  || '').trim();

      if (!name || !phone || !email) { showFormStatus('warning', FMSG.empty[lang]); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showFormStatus('warning', FMSG.email[lang]); return; }

      this.disabled = true;
      this.style.opacity = '0.65';
      showFormStatus('sending', FMSG.sending[lang]);

      const isConfigured = EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID'
                        && EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID';

      if (!isConfigured) {
        await new Promise(r => setTimeout(r, 1200));
        showFormStatus('warning', lang === 'vi'
          ? '⚠ EmailJS chưa cấu hình. Xem hướng dẫn trong js/app.js.'
          : '⚠ EmailJS not configured. See guide in js/app.js.');
        this.disabled = false;
        this.style.opacity = '';
        return;
      }

      try {
        await sendFormData({ name, phone, email, service, material, message });
        showFormStatus('success', FMSG.success[lang]);
        this.textContent = lang === 'vi' ? '✓ Đã Gửi Thành Công!' : '✓ Successfully Sent!';
        this.style.background = '#1a6b20';
        this.style.color = '#fff';
        this.style.borderColor = '#1a6b20';
        setTimeout(() => {
          ['cf_name','cf_phone','cf_email','cf_service','cf_material','cf_message']
            .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
          this.setAttribute('data-vi', L.form_submit_vi);
          this.setAttribute('data-en', L.form_submit_en);
          this.textContent = lang === 'vi' ? L.form_submit_vi : L.form_submit_en;
          this.style.background = this.style.color = this.style.borderColor = '';
          hideFormStatus();
        }, 5000);
      } catch(err) {
        console.error('EmailJS error:', err);
        showFormStatus('error', FMSG.error[lang]);
        this.textContent = lang === 'vi' ? L.form_submit_vi : L.form_submit_en;
      } finally {
        this.disabled = false;
        this.style.opacity = '';
      }
    });
  }, 300);
}