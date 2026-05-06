/**
 * LAB héritage — js/app.js
 * Reads DATA from data/content.js → renders entire page
 * No need to touch this file when updating content
 */

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initNav();
  initSlider();
  initReveal();
  initFilters();
  initForm();
});

/* ═══════════════════════════════════════════
   RENDER ENGINE
═══════════════════════════════════════════ */
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

/* ── Hero ── */
function renderHero() {
  const h = DATA.hero;
  const statsHtml = h.stats.map(s =>
    `<div><div class="stat-num">${s.num}<sup style="font-size:.45em">${s.sup}</sup></div><div class="stat-label">${s.label}</div></div>`
  ).join('');
  const tickerItems = [...h.ticker, ...h.ticker]
    .map(t => `<span class="ticker-item">${t} <span class="ticker-dot">✦</span></span>`)
    .join('');

  document.getElementById('hero').innerHTML = `
    <div class="hero-lines"><span></span><span></span><span></span><span></span></div>
    <div class="hero-accent"></div>
    <div class="hero-body">
      <div class="hero-eyebrow">${h.eyebrow}</div>
      <h1>${h.h1_line1}<br/><em>${h.h1_em}</em><br/>${h.h1_line3}</h1>
      <div class="hero-tagline">${DATA.company.slogan}</div>
      <p class="hero-desc">${h.desc}</p>
      <div class="hero-btns">
        <a href="#contact" class="btn-primary">${h.btn1}</a>
        <a href="#projects" class="btn-outline">${h.btn2}</a>
      </div>
    </div>
    <div class="hero-stats">${statsHtml}</div>
    <div class="ticker-row"><div class="ticker-track">${tickerItems}</div></div>
  `;
}

/* ── Before / After ── */
function renderBA() {
  const ba = DATA.before_after;
  const afterContent  = ba.img_after  ? `<img src="${ba.img_after}"  alt="${ba.label_after}"  onerror="this.style.display='none'"><div class="ba-ph" style="position:absolute;z-index:1"><span>🏛️</span><p>Sau phục chế</p></div>` : `<div class="ba-ph"><span>🏛️</span><p>Sau phục chế<br/>Thêm ảnh thực tế</p></div>`;
  const beforeContent = ba.img_before ? `<img src="${ba.img_before}" alt="${ba.label_before}" onerror="this.style.display='none'"><div class="ba-ph" style="position:absolute;z-index:1;filter:grayscale(85%) brightness(.55)"><span>🏚️</span><p>Trước phục chế</p></div>` : `<div class="ba-ph" style="filter:grayscale(85%) brightness(.55)"><span>🏚️</span><p>Trước phục chế<br/>Thêm ảnh thực tế</p></div>`;

  document.getElementById('ba-section').innerHTML = `
    <div class="ba-wrap">
      <div class="ba-header reveal">
        <div class="label center">Trước &amp; Sau Phục Chế</div>
        <h2 class="headline" style="text-align:center;margin-top:16px">Phục Chế Đúng Phương Pháp<br/><em>Không Làm Mất Tính Lịch Sử</em></h2>
        <p>Kéo thanh trượt để cảm nhận sự khác biệt — nguyên bản được giữ gìn, hư hại được loại trừ.</p>
      </div>
      <div class="ba-slider reveal" id="baSlider">
        <div class="ba-label l">${ba.label_before}</div>
        <div class="ba-label r">${ba.label_after}</div>
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
      <p class="ba-note reveal">← Kéo để so sánh →</p>
    </div>
  `;
}

/* ── About ── */
function renderAbout() {
  const a = DATA.about;
  const imgHtml = a.img
    ? `<img src="${a.img}" alt="LAB héritage đội ngũ" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  const parasHtml = a.paragraphs.map(p => `<p>${p}</p>`).join('');
  const statsHtml  = a.stats.map(s   => `<div class="stat-box"><div class="n">${s.n}</div><div class="l">${s.l}</div></div>`).join('');
  const tagsHtml   = a.products.map(p => `<span class="prod-tag">${p}</span>`).join('');

  document.getElementById('about-section').innerHTML = `
    <div class="about-image reveal">
      ${imgHtml}
      <div class="about-img-ph" ${a.img ? 'style="display:none"' : ''}>
        <span>🏺</span>
        <p>Thay bằng<br/>ảnh đội ngũ / xưởng sản xuất</p>
      </div>
    </div>
    <div class="reveal delay1">
      <div class="label" style="margin-bottom:20px">Về LAB héritage</div>
      <h2 class="headline" style="margin-bottom:24px">Tiên Phong<br/><em>Phục Dựng Nguyên Bản</em></h2>
      <div class="about-text">${parasHtml}</div>
      <div class="stats-4">${statsHtml}</div>
      <div class="prod-strip">
        <div class="prod-strip-label">Sản Phẩm Sử Dụng — 100% Nguồn Gốc Châu Âu</div>
        <div class="prod-tags">${tagsHtml}</div>
      </div>
    </div>
  `;
}

/* ── Services ── */
function renderServices() {
  const el = document.getElementById('svc-grid');
  if (!el) return;
  el.innerHTML = DATA.services.map((s, i) => `
    <div class="svc-card reveal${i % 2 === 1 ? ' delay1' : ''}">
      <div class="svc-num">${s.num}</div>
      <span class="svc-icon">${s.icon}</span>
      <div class="svc-title">${s.title}</div>
      <div class="svc-sub">${s.sub}</div>
      <p class="svc-desc">${s.desc}</p>
      <div class="svc-mats">${s.mats.map(m => `<span class="mat-chip">${m}</span>`).join('')}</div>
    </div>
  `).join('');
}

/* ── Process ── */
function renderProcess() {
  const el = document.getElementById('proc-grid');
  if (!el) return;
  el.innerHTML = DATA.process.map((p, i) => `
    <div class="proc-step reveal${i > 0 ? ` delay${i}` : ''}">
      <div class="proc-num">${p.num}</div>
      <div class="proc-title">${p.title}</div>
      <p class="proc-desc">${p.desc}</p>
    </div>
  `).join('');
}

/* ── Projects ── */
function renderProjects() {
  const el = document.getElementById('proj-grid');
  if (!el) return;
  el.innerHTML = DATA.projects.map((p, i) => {
    const imgHtml = p.img ? `<img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'">` : '';
    return `
      <div class="pi${p.featured ? ' featured' : ''} reveal${i === 1 ? ' delay1' : i === 4 ? ' delay2' : ''}"
           data-cat="${p.filter}">
        <div class="pi-bg" style="background:${p.bg}">
          ${imgHtml}
          <span class="pi-icon">${p.icon}</span>
        </div>
        <div class="pi-overlay">
          <div class="pi-cat">${p.cat}</div>
          <div class="pi-name">${p.name}</div>
          <div class="pi-desc">${p.desc}</div>
        </div>
      </div>
    `;
  }).join('');
}

/* ── Proof ── */
function renderProof() {
  const el = document.getElementById('proof-section');
  if (!el) return;
  const pr = DATA.proof;
  const parasHtml  = pr.paragraphs.map(p => `<p class="proof-p">${p}</p>`).join('');
  const mosaicHtml = pr.images.map((img, i) => {
    const content = img.img
      ? `<img src="${img.img}" alt="" onerror="this.style.display='none'">${img.icon}`
      : img.icon;
    return `<div class="pm">${content}</div>`;
  }).join('');

  el.innerHTML = `
    <div class="proof-inner">
      <div class="reveal">
        <div class="label" style="margin-bottom:20px">Câu Chuyện Minh Chứng</div>
        <h2 class="headline" style="margin-bottom:20px">${pr.title1}<br/><em>${pr.title2}</em></h2>
        <blockquote class="proof-quote">${pr.quote}</blockquote>
        ${parasHtml}
      </div>
      <div class="reveal delay1">
        <div class="proof-mosaic">${mosaicHtml}</div>
        <p style="margin-top:14px;font-family:var(--font-ui);font-size:9px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);text-align:center">Thay bằng ảnh thực tế Château de la Mercerie</p>
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
          ${p.sub ? `<span class="prt-sub">${p.sub}</span>` : ''}
        </div>
      </div>
    `).join('');
  }
  if (note) note.textContent = DATA.partners_note;
}

/* ── CTA Banner ── */
function renderCTA() {
  const el = document.getElementById('cta-banner');
  if (!el) return;
  el.innerHTML = `
    <h2>${DATA.cta.line1}<br/><em>${DATA.cta.line2}</em></h2>
    <a href="#contact" class="btn-black">${DATA.cta.btn}</a>
  `;
}

/* ── Standards ── */
function renderStandards() {
  const stdList  = document.getElementById('std-list');
  const brandDiv = document.getElementById('brand-cards');
  if (stdList) {
    stdList.innerHTML = DATA.standards.map(s => `
      <div class="std-item">
        <span class="std-code">${s.code}</span>
        <span class="std-desc">${s.desc}</span>
      </div>
    `).join('');
  }
  if (brandDiv) {
    brandDiv.innerHTML = DATA.brands.map(b => `
      <div class="brand-card">
        <div class="brand-card-name">${b.name}</div>
        <p class="brand-card-desc">${b.desc}</p>
        <span class="brand-badge">${b.badge}</span>
      </div>
    `).join('');
  }
}

/* ── Insights ── */
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
          <div class="ins-tag">${ins.tag}</div>
          <div class="ins-title">${ins.title}</div>
          <p class="ins-excerpt">${ins.excerpt}</p>
        </div>
      </div>
    `;
  }).join('');
}

/* ── Contact ── */
function renderContact() {
  const c = DATA.company;
  const infoEl = document.getElementById('contact-info');
  const formEl = document.getElementById('contact-form');

  if (infoEl) {
    const mapHtml = c.map_embed
      ? `<iframe class="map-iframe" src="${c.map_embed}" allowfullscreen loading="lazy"></iframe>`
      : `<div class="map-ph"><span style="font-size:28px;opacity:.25">🗺️</span><p>${c.address}</p></div>`;

    infoEl.innerHTML = `
      <div class="label" style="margin-bottom:20px">Liên Hệ</div>
      <div class="ci-title">Bắt Đầu Hành Trình<br/><em>Phục Hồi</em> Của Bạn</div>
      <p class="ci-sub">${c.name} sẵn sàng khảo sát và tư vấn miễn phí. Liên hệ trực tiếp ${c.contact} — phản hồi trong 24 giờ.</p>
      <div class="ci-items">
        <div class="ci-item">
          <div class="ci-icon">📞</div>
          <div class="ci-text"><strong>Hotline — ${c.contact}</strong><a href="tel:${c.phone.replace(/\s/g,'')}"><span>${c.phone}</span></a></div>
        </div>
        <div class="ci-item">
          <div class="ci-icon">✉️</div>
          <div class="ci-text"><strong>Email</strong><a href="mailto:${c.email}"><span>${c.email}</span></a></div>
        </div>
        <div class="ci-item">
          <div class="ci-icon">📍</div>
          <div class="ci-text"><strong>Địa Chỉ</strong><span>${c.address}</span></div>
        </div>
        <div class="ci-item">
          <div class="ci-icon">🏭</div>
          <div class="ci-text"><strong>Xưởng Sản Xuất</strong><span>${c.workshop}</span></div>
        </div>
      </div>
      ${mapHtml}
    `;
  }

  if (formEl) {
    const svcOpts = DATA.form_services.map(s => `<option>${s}</option>`).join('');
    const matOpts = DATA.form_materials.map(m => `<option>${m}</option>`).join('');
    formEl.innerHTML = `
      <div class="form-wrap">
        <div class="fg-2">
          <div class="fg"><label>Họ &amp; Tên</label><input type="text" placeholder="Nguyễn Văn A"/></div>
          <div class="fg"><label>Số Điện Thoại / Zalo</label><input type="tel" placeholder="0901 234 567"/></div>
        </div>
        <div class="fg"><label>Email</label><input type="email" placeholder="ban@email.com"/></div>
        <div class="fg">
          <label>Lĩnh Vực Dự Án</label>
          <select><option value="">— Chọn lĩnh vực —</option>${svcOpts}</select>
        </div>
        <div class="fg">
          <label>Vật Liệu Cần Xử Lý</label>
          <select><option value="">— Chọn vật liệu —</option>${matOpts}</select>
        </div>
        <div class="fg">
          <label>Mô Tả Công Trình / Vật Phẩm</label>
          <textarea placeholder="Ví dụ: Biệt thự Pháp 1935 tại Đà Lạt, diện tích 400m², sàn gỗ bị mối và mái xuống cấp..."></textarea>
        </div>
        <button class="btn-submit" id="submitBtn">Gửi Yêu Cầu Tư Vấn →</button>
      </div>
    `;
  }
}

/* ── Footer ── */
function renderFooter() {
  const el = document.getElementById('ft-inner');
  if (!el) return;
  const c = DATA.company;
  el.innerHTML = `
    <div class="ft-logo">
      <img src="images/logo.svg" alt="${c.name}" onerror="this.style.display='none'"/>
      <div class="ft-logo-txt">
        <div class="brand">LAB <b>héritage</b></div>
        <div class="tag">${c.tagline}</div>
      </div>
    </div>
    <div class="ft-links">
      <a href="#about">Về Chúng Tôi</a>
      <a href="#services">Dịch Vụ</a>
      <a href="#projects">Dự Án</a>
      <a href="#partners">Đối Tác</a>
      <a href="#insights">Kiến Thức</a>
      <a href="#contact">Liên Hệ</a>
    </div>
    <div class="ft-copy">© 2025 ${c.name} · Di Sản · Kiến Trúc · Du Thuyền · Thời Trang</div>
  `;
  // Zalo link
  const zBtn = document.querySelector('.zalo-btn');
  if (zBtn) zBtn.href = c.zalo;
}

/* ═══════════════════════════════════════════
   INTERACTIONS
═══════════════════════════════════════════ */

/* Navbar scroll + mobile menu */
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

/* Before/After slider */
function initSlider() {
  setTimeout(() => {
    const box    = document.getElementById('baSlider');
    const before = document.getElementById('baBefore');
    const handle = document.getElementById('baHandle');
    if (!box) return;
    let drag = false;

    function move(x) {
      const r = box.getBoundingClientRect();
      const p = Math.min(95, Math.max(5, ((x - r.left) / r.width) * 100));
      before.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
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

/* Scroll reveal */
function initReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
    { threshold: 0.08 }
  );
  setTimeout(() => document.querySelectorAll('.reveal').forEach(el => obs.observe(el)), 120);
}

/* Project filter tabs */
function initFilters() {
  setTimeout(() => {
    document.querySelectorAll('.pf').forEach(btn => {
      btn.addEventListener('click', function () {
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

/* Form submit */
function initForm() {
  setTimeout(() => {
    document.getElementById('submitBtn')?.addEventListener('click', function () {
      const inputs = document.querySelectorAll('#contact-form input[type=text], #contact-form input[type=tel], #contact-form input[type=email]');
      let ok = true;
      inputs.forEach(i => { if (!i.value.trim()) ok = false; });

      if (!ok) {
        this.textContent = '⚠ Vui lòng điền đầy đủ thông tin';
        this.style.background = 'transparent'; this.style.color = 'var(--gold)';
        setTimeout(() => { this.textContent = 'Gửi Yêu Cầu Tư Vấn →'; this.style.background = ''; this.style.color = ''; }, 2500);
        return;
      }
      this.textContent = '✓ Đã Gửi — Chúng Tôi Sẽ Liên Hệ Sớm!';
      this.style.background = '#1a6b20'; this.style.color = '#fff'; this.style.borderColor = '#1a6b20';
      setTimeout(() => {
        this.textContent = 'Gửi Yêu Cầu Tư Vấn →';
        this.style.background = this.style.color = this.style.borderColor = '';
      }, 4000);
    });
  }, 250);
}
