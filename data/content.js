/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  LAB héritage — data/content.js                             ║
 * ║  Dữ liệu nội dung song ngữ, không chứa logic xử lý         ║
 * ║                                                              ║
 * ║  ⭐ ĐÂY LÀ FILE DUY NHẤT CẦN SỬA ĐỂ CẬP NHẬT NỘI DUNG   ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  CÁCH THÊM ẢNH:                                             ║
 * ║   Đặt file vào images/ → điền đường dẫn vào trường img     ║
 * ║   Để rỗng "" nếu chưa có → tự hiện placeholder             ║
 * ║                                                              ║
 * ║  CÁCH THÊM BẢN DỊCH TIẾNG ANH:                             ║
 * ║   Thêm trường _en song song, ví dụ:                         ║
 * ║     title:    "Di Sản Văn Hoá",                             ║
 * ║     title_en: "Cultural Heritage",                          ║
 * ║                                                              ║
 * ║  CÁCH THÊM MODAL CHI TIẾT DỰ ÁN:                           ║
 * ║   Thêm trường detail và detail_en vào từng project          ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const DATA = {

  /* ─────────────────────────────────────────────────────────────
     THÔNG TIN CÔNG TY
  ───────────────────────────────────────────────────────────── */
  company: {
    name:      "PM LAB héritage Thiên Tú",
    tagline:   "Conserver la beauté",
    slogan:    "Di Sản · Kiến Trúc · Du Thuyền & Ô Tô · Thời Trang Cao Cấp",
    slogan_en: "Heritage · Architecture · Yacht & Auto · Luxury Fashion",
    phone:     "+84 862 043 042",
    contact:   "PM LAB héritage Thiên Tú",
    email:     "dotrongthientu@labheritage.com.vn",
    address:   "37/20 Nguyễn Minh Hoàng, P. Bảy Hiền, TP. Hồ Chí Minh",
    workshop:  "Củ Chi, TP. Hồ Chí Minh — 2.000m²",
    zalo:      "https://zalo.me/0862043042",
    map_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.561324459686!2d106.63887676297509!3d10.800562329593577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752900738897a5%3A0x1db482764c2bb725!2sLAB%20h%C3%A9ritage%20-%20Conserver%20la%20beaut%C3%A9!5e0!3m2!1svi!2sus!4v1778132886641!5m2!1svi!2sus",
  },

  /* ─────────────────────────────────────────────────────────────
     UI LABELS — tất cả text cứng trong app.js
     Thêm _en để có bản tiếng Anh; nếu thiếu → dùng bản Vi
  ───────────────────────────────────────────────────────────── */
  ui_labels: {
    /* Navbar */
    nav_about_vi:    "Về Chúng Tôi",    nav_about_en:    "About Us",
    nav_services_vi: "Dịch Vụ",         nav_services_en: "Services",
    nav_projects_vi: "Dự Án",           nav_projects_en: "Projects",
    nav_partners_vi: "Đối Tác",         nav_partners_en: "Partners",
    nav_insights_vi: "Kiến Thức",       nav_insights_en: "Insights",
    nav_contact_vi:  "Liên Hệ",         nav_contact_en:  "Contact",
    nav_cta_vi:      "Đặt Lịch Khảo Sát", nav_cta_en:   "Book Inspection",
    ft_tagline_en:   "Conserver la beauté",

    /* Before / After section */
    ba_label_vi:      "Trước & Sau Phục Chế",  ba_label_en:      "Before & After Restoration",
    ba_h2_line1_vi:   "Phục Chế Đúng Phương Pháp", ba_h2_line1_en: "Professional Restoration",
    ba_h2_line2_vi:   "Không Làm Mất Tính Lịch Sử", ba_h2_line2_en: "Preserving Historical Integrity",
    ba_desc_vi:       "Kéo thanh trượt để cảm nhận sự khác biệt — nguyên bản được giữ gìn, hư hại được loại trừ.",
    ba_desc_en:       "Drag the slider to see the difference — the original is preserved, the damage is removed.",
    ba_note_vi:       "← Kéo để so sánh →",    ba_note_en:      "← Drag to compare →",
    ba_before_vi:     "Trước phục chế",          ba_before_en:    "Before restoration",
    ba_after_vi:      "Sau phục chế",            ba_after_en:     "After restoration",

    /* About section */
    about_label_vi:       "Về LAB héritage",        about_label_en:       "About LAB héritage",
    about_h2_line1_vi:    "Tiên Phong",              about_h2_line1_en:    "Pioneering",
    about_h2_em_vi:       "Phục Dựng Nguyên Bản",   about_h2_em_en:       "Authentic Restoration",
    about_prod_label_vi:  "Sản Phẩm Sử Dụng — 100% Nguồn Gốc Châu Âu",
    about_prod_label_en:  "Products Used — 100% European Origin",
    about_img_ph_vi:      "Thay bằng\nảnh đội ngũ / xưởng sản xuất",
    about_img_ph_en:      "Replace with\nteam / Warehouse photo",

    /* Proof section */
    proof_label_vi:       "Câu Chuyện Minh Chứng",  proof_label_en:       "Proof Story",
    proof_mosaic_note_vi: "Château de la Mercerie",
    proof_mosaic_note_en: "Château de la Mercerie",

    /* Contact section */
    contact_label_vi:        "Liên Hệ",              contact_label_en:        "Contact",
    contact_title_line1_vi:  "Bắt Đầu Hành Trình",   contact_title_line1_en:  "Start Your",
    contact_title_em_vi:     "Phục Hồi",              contact_title_em_en:     "Restoration",
    contact_title_line2_vi:  "Của Bạn",               contact_title_line2_en:  "Journey",
    contact_sub_vi:          "sẵn sàng khảo sát và tư vấn. Phản hồi trong 24 giờ.",
    contact_sub_en:          "is ready for a site inspection. Response within 24 hours.",
    label_address_vi:        "Địa Chỉ",               label_address_en:        "Address",
    label_workshop_vi:       "Xưởng Sản Xuất",        label_workshop_en:       "Warehouse",

    /* Form labels + placeholders */
    form_name_vi:        "Họ & Tên",                       form_name_en:        "Full Name",
    form_name_ph_vi:     "Nguyễn Văn A",                   form_name_ph_en:     "Your full name",
    form_phone_vi:       "Số Điện Thoại / Zalo",           form_phone_en:       "Phone / Zalo",
    form_phone_ph_vi:    "0901 234 567",                    form_phone_ph_en:    "0901 234 567",
    form_email_vi:       "Email",                           form_email_en:       "Email",
    form_email_ph_vi:    "ban@email.com",                   form_email_ph_en:    "your@email.com",
    form_service_vi:     "Lĩnh Vực Dự Án",                 form_service_en:     "Project Field",
    form_service_ph_vi:  "Chọn lĩnh vực",                  form_service_ph_en:  "Select field",
    form_material_vi:    "Vật Liệu Cần Xử Lý",             form_material_en:    "Material to Treat",
    form_material_ph_vi: "Chọn vật liệu",                  form_material_ph_en: "Select material",
    form_message_vi:     "Mô Tả Công Trình / Vật Phẩm",   form_message_en:     "Project / Item Description",
    form_message_ph_vi:  "Ví dụ: Biệt thự Pháp 1935 tại Đà Lạt, diện tích 400m², sàn gỗ bị mối và mái xuống cấp...",
    form_message_ph_en:  "Example: 1935 French villa in Đà Lạt, 400m², termite-damaged floors and deteriorated roof...",
    form_submit_vi:      "Gửi Yêu Cầu Tư Vấn →",          form_submit_en:      "Send Consultation Request →",

    

    /* Modal */
    modal_no_content_vi: "Nội dung chi tiết đang được cập nhật. Vui lòng liên hệ để biết thêm.",
    modal_no_content_en: "Detailed content coming soon. Please contact us for more information.",
    modal_cta_vi:        "→ Liên hệ tư vấn",               modal_cta_en:        "→ Contact for consultation",
  },

  /* ─────────────────────────────────────────────────────────────
     HERO
  ───────────────────────────────────────────────────────────── */
  hero: {
    eyebrow:    "LAB héritage — Conserver la beauté",
    eyebrow_en: "LAB héritage — Conserver la beauté",

    h1_line1: "Phục Dựng", 
    h1_line1_en: "Restoring",
    h1_em:    "Ký Ức",    
    h1_em_en:    "Memory",
    h1_line3: "Di sản - Kiến Trúc", 
    h1_line3_en: "Heritage - Architecture",

    desc:    "Giải pháp tổng thể phục dựng và phục chế — nơi nghệ thuật thủ công tinh xảo kết hợp công nghệ hiện đại từ tập đoàn Châu Âu, giữ nguyên từng giá trị lịch sử nguyên bản.",
    desc_en: "Comprehensive restoration solutions — where exquisite craftsmanship meets cutting-edge European technology, preserving every original historical value.",

    btn1:    "Đặt Lịch Khảo Sát", btn1_en: "Book an Inspection",
    btn2:    "Xem Dự Án Tiêu Biểu",         btn2_en: "View Featured Projects",

    stats: [
      { num:"10.000", sup:"+", label:"Vật Phẩm Đã Xử Lý",   label_en:"Items Restored"    },
      { num:"5",      sup:"+", label:"Năm Kinh Nghiệm",      label_en:"Years Experience"  },
      { num:"50",     sup:"+", label:"Nhân Sự Chuyên Môn",   label_en:"Specialists"        },
      { num:"5.000",  sup:"+", label:"Khách Hàng Tin Tưởng", label_en:"Satisfied Clients"  },
    ],
    ticker: ["Di Sản Văn Hoá","Công Trình Kiến Trúc","Building · Resort · Villa","Du Thuyền & Ô Tô","Thời Trang Cao Cấp","Conserver la beauté"],
    ticker_en: ["Cultural Heritage","Architectural Works","Building · Resort · Villa","Yachts & Automobiles","Luxury Fashion","Conserver la beauté"],
  },

  /* ─────────────────────────────────────────────────────────────
     BEFORE / AFTER SLIDER
  ───────────────────────────────────────────────────────────── */
  before_after: {
    img_before: "images/du-an-1.jpg", img_after: "images/du-an-1.jpg",
    label_before: "Trước Phục Chế", label_before_en: "Before",
    label_after:  "Sau Phục Chế",   label_after_en:  "After",
  },

  /* ─────────────────────────────────────────────────────────────
     VỀ CHÚNG TÔI
  ───────────────────────────────────────────────────────────── */
  about: {
    img: "images/team.svg",
    paragraphs: [
      `Với hơn <strong>5 năm kinh nghiệm</strong> và hơn <strong>10.000 vật phẩm cao cấp</strong> đã được xử lý, LAB héritage là đơn vị tiên phong kết hợp nghệ thuật thủ công và công nghệ hiện đại trong phục dựng — phục chế.`,
      `Cam kết giữ nguyên <strong>kiến trúc – kết cấu – vật liệu – màu sắc. "Màu thời gian" (Patina)</strong> — dấu tích vô giá của lịch sử — phải được tôn trọng tuyệt đối.`,
      `Toàn bộ quy trình được <strong>tư vấn và đào tạo bởi chuyên gia Châu Âu</strong>. Xưởng sản xuất tại Củ Chi rộng hơn <strong>2.000m²</strong> với đội ngũ 50+ nhân sự.`,
    ],
    paragraphs_en: [
      `With over <strong>5 years of experience</strong> and more than <strong>10,000 premium items</strong> treated, LAB héritage pioneers the fusion of fine craftsmanship and modern European technology in restoration.`,
      `We commit to preserving <strong>architecture – structure – materials – color. "Patina"</strong> — the invaluable trace of time — must be absolutely respected.`,
      `All processes are <strong>advised and trained by European experts</strong>. Our warehouse in Củ Chi spans <strong>2,000m²</strong> with 50+ specialists.`,
    ],
    stats: [
      { n:"10.000+", l:"Vật phẩm xử lý",    l_en:"Items restored"     },
      { n:"50+",     l:"Nhân sự chuyên môn", l_en:"Specialists"        },
      { n:"5+",      l:"Năm kinh nghiệm",    l_en:"Years experience"   },
      { n:"2.000m²", l:"Xưởng tại Củ Chi",   l_en:"Warehouse in Củ Chi" },
    ],
    products: ["ALMA F.R.C. — EPV Award", "KEIM — Sơn Khoáng Đức", "Phân Phối Bởi Cleanco", "Bền Trên 100 Năm"],
    products_en: ["ALMA F.R.C. — EPV Award", "KEIM — German Mineral Paint", "Distributed by Cleanco", "Over 100 Years Durability"],
  },

  /* ─────────────────────────────────────────────────────────────
     DỊCH VỤ
  ───────────────────────────────────────────────────────────── */
  services: [
    {
      num:"01", icon:"🏛️",
      title:"Di Sản Văn Hoá",       title_en:"Cultural Heritage",
      sub:"Heritage Conservation",
      desc:"Tôn vinh bản sắc, định hình di sản. Chỉ lấy chất bẩn, phục hồi cấu trúc hư hại, tuyệt đối không xóa Patina.",
      desc_en:"Honoring identity, defining heritage. Removing only dirt and restoring damaged structures, never erasing the Patina.",
      mats: ["Gỗ","Đá","Kim Loại","Vữa Truyền Thống","Vải Cổ"],
      mats_en: ["Wood","Stone","Metal","Traditional Mortar","Antique Fabric"],
    },
    {
      num:"02", icon:"🏨",
      title:"Công Trình Kiến Trúc",  title_en:"Architecture & Hospitality",
      sub:"Building · Resort · Villa",
      desc:"Ứng dụng kỹ thuật từ ALMA F.R.C và KEIM kéo dài tuổi thọ vật liệu, giảm chi phí bảo trì, khôi phục tính cốt lõi kiến trúc.",
      desc_en:"Leveraging ALMA F.R.C. and KEIM technology to extend material lifespan, reduce maintenance costs, and restore the core character of architecture.",
      mats: ["Bề Mặt Đá","Tường Gạch","Nội Thất Gỗ","Kim Loại"],
      mats_en: ["Stone Surfaces","Brick Wall","Wood Interiors","Metal"],
    },
    {
      num:"03", icon:"🛥️",
      title:"Du Thuyền & Ô Tô",     title_en:"Yacht & Luxury Vehicles",
      sub:"Yacht & Luxury Vehicles",
      desc:"Xử lý tác động của môi trường biển, bụi bẩn, ẩm ướt, ánh nắng. Chống oxy hóa, ăn mòn, lão hóa.",
      desc_en:"Combating the effects of marine environments, dust, moisture, and UV. Preventing oxidation, corrosion, and aging.",
      mats: ["Nhựa Composite","Gỗ Teak","Kim Loại","Da & Vải"],
      mats_en: ["Composite / Fiberglass","Teak Wood","Metal","Leather & Fabric"],
    },
    {
      num:"04", icon:"👜",
      title:"Thời Trang Cao Cấp",   title_en:"Luxury Fashion Restoration",
      sub:"Luxury Fashion Restoration",
      desc:"Không làm mới hoàn toàn — khôi phục có chọn lọc. Từng vết xước, mép túi, khóa kim loại đều được xử lý bằng tay.",
      desc_en:"Not a complete overhaul — selective restoration. Every scratch, edge, and metal clasp is handled by hand.",
      mats: ["Da","Vải","Kim Loại","Vệ Sinh Sâu"],
      mats_en: ["Leather","Fabric","Metal","Deep Cleaning"],
    },
  ],

  /* ─────────────────────────────────────────────────────────────
     QUY TRÌNH
  ───────────────────────────────────────────────────────────── */
  process: [
    { num:"I",   title:"Vệ Sinh",            title_en:"Cleaning",
      desc:"Làm sạch chuyên sâu theo từng loại vật liệu, loại bỏ chất bẩn mà không xâm hại cấu trúc gốc.",
      desc_en:"Deep cleaning tailored to each material, removing dirt without compromising the original structure." },
    { num:"II",  title:"Phục Dựng / Phục Chế", title_en:"Restoration",
      desc:"Phục hồi cấu trúc hư hại, bổ sung vật liệu nguyên bản theo tiêu chuẩn EN, ICOMOS, ISO.",
      desc_en:"Repairing damaged structures and replenishing original materials to EN, ICOMOS, and ISO standards." },
    { num:"III", title:"Bảo Dưỡng",          title_en:"Treatment",
      desc:"Xử lý và dưỡng bề mặt bằng sản phẩm 100% Châu Âu từ ALMA F.R.C. và KEIM.",
      desc_en:"Surface treatment and conditioning with 100% European products from ALMA F.R.C. and KEIM." },
    { num:"IV",  title:"Bảo Vệ",             title_en:"Protection",
      desc:"Áp dụng lớp bảo vệ chống oxy hóa, ẩm, UV. Bàn giao kèm hướng dẫn chăm sóc và bảo hành dài hạn.",
      desc_en:"Applying protective coatings against oxidation, moisture, UV. Handover with care guidelines and warranty." },
  ],

  /* ─────────────────────────────────────────────────────────────
     DỰ ÁN TIÊU BIỂU
     detail / detail_en: HTML hiển thị trong modal khi click vào dự án
  ───────────────────────────────────────────────────────────── */
  projects: [
    {
      cat:"Di Sản Thế Giới", cat_en:"World Heritage",
      filter:"di-san",
      name:"Nhà Hát Opera Sydney",         name_en:"Sydney Opera House",
      desc:"Bảo trì & phục hồi bề mặt — Tập đoàn KEIM",
      desc_en:"Surface maintenance & restoration — KEIM Group",
      icon:"🎭", img:"images/sydney.png", featured:true,
      bg:"linear-gradient(135deg,#0e1018,#1a1c28)",
      detail:`
        <p style="color:var(--gold);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">Tập đoàn KEIM</p>
        <p>Dự án bảo trì và phục hồi bề mặt Nhà hát Opera Sydney — Di Sản UNESCO. Sơn khoáng KEIM thẩm thấu và liên kết hóa học vĩnh cửu với bê tông và đá, đảm bảo bề mặt thoáng khí, bền màu, không bong tróc.</p>
        <ul style="margin:12px 0 12px 18px;color:var(--muted-lt)">
          <li>Vật liệu: <strong>KEIM Soldalit® & Granital®</strong></li>
          <li>Phạm vi: <strong>Bê tông, đá ốp lát ngoại thất</strong></li>
          <li>Tiêu chuẩn: <strong>UNESCO World Heritage Conservation</strong></li>
        </ul>
        <p style="color:var(--gold);font-weight:600">Kết quả: Bề mặt phục hồi hoàn toàn, duy trì màu sắc nguyên bản.</p>
      `,
      detail_en:`
        <p style="color:var(--gold);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">KEIM Group</p>
        <p>Surface maintenance and restoration for the Sydney Opera House — UNESCO World Heritage. KEIM mineral paint penetrates and permanently bonds to concrete and stone, ensuring breathability, colorfast durability, and no peeling.</p>
        <ul style="margin:12px 0 12px 18px;color:var(--muted-lt)">
          <li>Materials: <strong>KEIM Soldalit® & Granital®</strong></li>
          <li>Scope: <strong>Concrete, exterior stone cladding</strong></li>
          <li>Standards: <strong>UNESCO World Heritage Conservation</strong></li>
        </ul>
        <p style="color:var(--gold);font-weight:600">Result: Surfaces fully restored, original color maintained.</p>
      `,
    },
    {
      cat:"Di Sản Văn Hoá", cat_en:"Cultural Heritage",
      filter:"di-san",
      name:"Château de la Mercerie — Pháp", name_en:"Château de la Mercerie — France",
      desc:"Bảo tồn đá & vữa cổ — Tập đoàn ALMA F.R.C.",
      desc_en:"Stone & mortar conservation — ALMA F.R.C. Group",
      icon:"🏰", img:"images/chateau-1.jpg", featured:false,
      bg:"linear-gradient(135deg,#1a1408,#261c0c)",
      detail:`
        <p style="color:var(--gold);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">Tập đoàn ALMA F.R.C.</p>
        <p><strong>"Versailles Charentais nhỏ"</strong> — kỷ lục Guinness mặt tiền lâu đài dài nhất thế kỷ 20. Sau 30 năm bỏ hoang, ALMA F.R.C. phục chế toàn diện đá và vữa cổ theo tiêu chuẩn ICOMOS, giữ nguyên Patina.</p>
        <ul style="margin:12px 0 12px 18px;color:var(--muted-lt)">
          <li>Phạm vi: <strong>Mặt đứng đá vôi, mái, chi tiết điêu khắc</strong></li>
          <li>Tiêu chuẩn: <strong>ICOMOS / EN 16096:2012 / UNI 11182</strong></li>
          <li>Thời gian: <strong>3 năm</strong></li>
        </ul>
        <p style="color:var(--gold);font-weight:600">Minh chứng cho công nghệ ALMA F.R.C. tại Việt Nam.</p>
      `,
      detail_en:`
        <p style="color:var(--gold);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">ALMA F.R.C. Group</p>
        <p><strong>"Little Versailles of Charente"</strong> — Guinness record for the longest château facade of the 20th century. After 30 years of abandonment, ALMA F.R.C. restored all ancient stone and mortar per ICOMOS standards, preserving the Patina.</p>
        <ul style="margin:12px 0 12px 18px;color:var(--muted-lt)">
          <li>Scope: <strong>Limestone facades, roof, sculptural details</strong></li>
          <li>Standards: <strong>ICOMOS / EN 16096:2012 / UNI 11182</strong></li>
          <li>Duration: <strong>3 years</strong></li>
        </ul>
        <p style="color:var(--gold);font-weight:600">Proof of ALMA F.R.C. technology brought to Vietnam.</p>
      `,
    },
    {
      cat:"Di Sản Quốc Gia", cat_en:"National Heritage",
      filter:"di-san",
      name:"Chùa Cầu — Hội An, Việt Nam",  name_en:"Japanese Covered Bridge — Hội An",
      desc:"Trùng tu tổng thể — LAB héritage & ALMA F.R.C.",
      desc_en:"Comprehensive restoration — LAB héritage & ALMA F.R.C.",
      icon:"🏯", img:"images/chua-cau.jpg", featured:false,
      bg:"linear-gradient(135deg,#180e06,#2a1a08)",
      detail:`
        <p style="color:var(--gold);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">LAB héritage / Tập đoàn ALMA F.R.C.</p>
        <p>Trùng tu tổng thể Chùa Cầu — Di Sản UNESCO Hội An. Xử lý mối mọt, sơn son thếp vàng theo kỹ thuật truyền thống kết hợp giải pháp bảo tồn hiện đại từ ALMA F.R.C.</p>
        <ul style="margin:12px 0 12px 18px;color:var(--muted-lt)">
          <li>Kết cấu gỗ: <strong>Xử lý mối mọt, gia cố, phục hồi nguyên trạng</strong></li>
          <li>Trang trí: <strong>Sơn son thếp vàng truyền thống</strong></li>
          <li>Tiêu chuẩn: <strong>ICOMOS Wood Guidelines / ISO 15686</strong></li>
        </ul>
      `,
      detail_en:`
        <p style="color:var(--gold);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">LAB héritage / ALMA F.R.C. Group</p>
        <p>Comprehensive restoration of the Japanese Covered Bridge — UNESCO Heritage, Hội An. Termite treatment, traditional lacquer and gold-leaf gilding combined with ALMA F.R.C. conservation solutions.</p>
        <ul style="margin:12px 0 12px 18px;color:var(--muted-lt)">
          <li>Timber structure: <strong>Termite treatment, reinforcement, original restoration</strong></li>
          <li>Decoration: <strong>Traditional lacquer and gold-leaf gilding</strong></li>
          <li>Standards: <strong>ICOMOS Wood Guidelines / ISO 15686</strong></li>
        </ul>
      `,
    },
    {
      cat:"Resort & Villa", cat_en:"Resort & Villa",
      filter:"resort-villa",
      name:"Resort Fly Up",                 name_en:"Fly Up Resort",
      desc:"Giải pháp kiểm soát nhiệt toàn diện — LAB héritage",
      desc_en:"Comprehensive thermal control solutions — LAB héritage",
      icon:"🌡️", img:"images/flyup2.jpg", featured:false,
      bg:"linear-gradient(135deg,#0a100e,#101e1a)",
      detail:`
        <p style="color:var(--gold);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">LAB héritage / Giải Pháp Kiểm Soát Nhiệt</p>
        <p>Giải pháp kiểm soát nhiệt toàn diện theo nguyên lý <strong>"Cool Roof & Cool Wall"</strong> — giảm nhiệt độ bề mặt tới 8–12°C, tiết kiệm 20–35% năng lượng làm mát.</p>
        <ul style="margin:12px 0 12px 18px;color:var(--muted-lt)">
          <li>Công nghệ: <strong>Vật liệu phản xạ nhiệt SRI cao</strong></li>
          <li>Hiệu quả: <strong>Giảm 8–12°C, tiết kiệm 20–35% điện</strong></li>
          <li>Tiêu chuẩn: <strong>ENERGY STAR® / LEED / ISO 16818</strong></li>
        </ul>
        <p style="color:var(--gold);font-weight:600">Bảo hành: 10 năm bề mặt ngoại thất.</p>
      `,
      detail_en:`
        <p style="color:var(--gold);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">LAB héritage / Thermal Control Solutions</p>
        <p>Comprehensive thermal control following the <strong>"Cool Roof & Cool Wall"</strong> principle — reducing surface temperatures by 8–12°C, saving 20–35% on cooling energy.</p>
        <ul style="margin:12px 0 12px 18px;color:var(--muted-lt)">
          <li>Technology: <strong>High-SRI heat-reflective materials</strong></li>
          <li>Performance: <strong>8–12°C reduction, 20–35% energy savings</strong></li>
          <li>Standards: <strong>ENERGY STAR® / LEED / ISO 16818</strong></li>
        </ul>
        <p style="color:var(--gold);font-weight:600">Warranty: 10 years on exterior surfaces.</p>
      `,
    },
    {
      cat:"Thời Trang Cao Cấp", cat_en:"Luxury Fashion",
      filter:"thoi-trang",
      name:"Sản Phẩm Da — LAB héritage / LAB+", name_en:"Leather Artifacts — LAB héritage / LAB+",
      desc:"Nghiên cứu & phục chế hiện vật da — tiêu chuẩn AIC",
      desc_en:"Research & restoration of leather artifacts — AIC standards",
      icon:"👜", img:"images/bst.jpg", featured:false,
      bg:"linear-gradient(135deg,#120a06,#1e1008)",
      detail:`
        <p style="color:var(--gold);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">LAB héritage / LAB+</p>
        <p>Nghiên cứu và phục chế chuyên sâu <strong>hiện vật da thuộc</strong> theo tiêu chuẩn AIC Leather Guidelines và công nghệ độc quyền LAB+. Mỗi hiện vật được phân tích và lập phương án phục chế cá nhân hóa.</p>
        <ul style="margin:12px 0 12px 18px;color:var(--muted-lt)">
          <li>Phân tích: <strong>Thành phần da, pigment, lớp phủ</strong></li>
          <li>Phục chế: <strong>Làm sạch sâu, phục hồi màu, gia cố cấu trúc</strong></li>
          <li>Tiêu chuẩn: <strong>AIC Leather / ICOM-CC Modern Materials WG</strong></li>
        </ul>
        <p style="color:var(--gold);font-weight:600">Cam kết: Phục chế có chọn lọc — giữ linh hồn từng hiện vật.</p>
      `,
      detail_en:`
        <p style="color:var(--gold);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">LAB héritage / LAB+</p>
        <p>In-depth research and restoration of <strong>leather artifacts</strong> per AIC Leather Guidelines and proprietary LAB+ technology. Each artifact is analyzed and a personalized restoration plan developed.</p>
        <ul style="margin:12px 0 12px 18px;color:var(--muted-lt)">
          <li>Analysis: <strong>Leather composition, pigments, coatings</strong></li>
          <li>Restoration: <strong>Deep cleaning, color recovery, structural reinforcement</strong></li>
          <li>Standards: <strong>AIC Leather / ICOM-CC Modern Materials WG</strong></li>
        </ul>
        <p style="color:var(--gold);font-weight:600">Commitment: Selective restoration — preserving the soul of each artifact.</p>
      `,
    },
  ],

  /* ─────────────────────────────────────────────────────────────
     MINH CHỨNG: ALMA F.R.C.
  ───────────────────────────────────────────────────────────── */
  proof: {
    title1:"Château de la",
    title2:"Mercerie — Pháp",
    title2_en:"Mercerie — France",
    quote:`"Versailles Charentais nhỏ" — kỷ lục Guinness tòa lâu đài có chiều ngang dài nhất thế kỷ 20, thuộc Di Sản Văn Hóa Thế Giới.`,
    quote_en:`"Little Versailles of Charente" — Guinness record for the longest château facade of the 20th century, a UNESCO World Heritage Site.`,
    paragraphs: [
      `Sau gần <strong>30 năm bỏ hoang</strong>, năm 2011, Tập đoàn <strong>ALMA F.R.C.</strong> triển khai phục chế toàn diện.`,
      `Sau <strong>3 năm</strong> với 100% sản phẩm ALMA F.R.C., Château de la Mercerie được phục chế về nguyên bản — minh chứng cho đẳng cấp công nghệ mà LAB héritage mang đến Việt Nam.`,
    ],
    paragraphs_en: [
      `After nearly <strong>30 years of abandonment</strong>, in 2011, <strong>ALMA F.R.C.</strong> undertook a comprehensive restoration.`,
      `After <strong>3 years</strong> using 100% ALMA F.R.C. products, Château de la Mercerie was fully restored to its original state — testament to the technology LAB héritage brings to Vietnam.`,
    ],
    images:[
      {img:"images/1.png"},{img:"images/2.png"},{img:"images/3.png"},
      {img:"",icon:"🪟"},{img:"",icon:"🌿"},{img:"",icon:"✨"},
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     ĐỐI TÁC
  ───────────────────────────────────────────────────────────── */
  partners: [
    { name:"SAPHIR®",         sub:"Medaille d'Or 1925 · Paris",  style:"font-family:var(--font-ui);letter-spacing:3px;font-size:20px;font-weight:300" },
    { name:"Louis XIII°",     sub:"Avel",                         style:"font-size:16px;letter-spacing:1px" },
    { name:"SONKIM LAND",     sub:"",                             style:"font-family:var(--font-ui);letter-spacing:3px;font-size:17px;font-weight:300" },
    { name:"HILTON.",         sub:"",                             style:"font-family:var(--font-ui);letter-spacing:4px;font-size:20px;font-weight:200" },
    { name:"Đại Quang Minh",  sub:"",                             style:"font-style:italic;font-size:20px" },
    { name:"MASTERISE HOMES", sub:"",                             style:"font-family:var(--font-ui);font-size:13px;letter-spacing:2px;font-weight:300" },
    { name:"LV",              sub:"Louis Vuitton",                style:"font-size:28px;letter-spacing:4px" },
    { name:"HERMÈS",          sub:"Paris",                        style:"font-family:var(--font-ui);letter-spacing:4px;font-size:18px;font-weight:200" },
  ],
  partners_note:    "Cùng với 5.000+ khách hàng cá nhân khác trên toàn quốc",
  partners_note_en: "Together with 5,000+ individual clients nationwide",

  /* ─────────────────────────────────────────────────────────────
     CTA BANNER
  ───────────────────────────────────────────────────────────── */
  cta: {
    line1:    "Công trình của bạn xứng đáng được",
    line1_en: "Your property deserves to be",
    line2:    "phục chế về đúng giá trị nguyên bản",
    line2_en: "restored to its authentic original value",
    btn:      "Đặt Lịch Khảo Sát",
    btn_en:   "Book an Inspection",
  },

  /* ─────────────────────────────────────────────────────────────
     TIÊU CHUẨN QUỐC TẾ
  ───────────────────────────────────────────────────────────── */
  standards: [
    { code:"EN 16096:2012 / EN 16095\nEN 16163 / EN 15458",  desc:"Tiêu chuẩn Châu Âu về bảo tồn di sản văn hóa",     desc_en:"European Standards for Conservation of Cultural Property" },
    { code:"ICOMOS Guidelines\nICOMOS Wood Guidelines",       desc:"Hướng dẫn bảo tồn quốc tế và bảo tồn kết cấu gỗ",  desc_en:"International conservation guidelines & heritage timber structures" },
    { code:"ISO 15686-3 / ISO 11844-1:2020\nISO 16818",      desc:"Tuổi thọ vật liệu, kiểm soát ăn mòn, đánh giá bề mặt", desc_en:"Material service life, corrosion control and surface assessment" },
    { code:"UNI 11182 / UNI 11119",                           desc:"Tiêu chuẩn Ý về bảo tồn di sản",                  desc_en:"Italian standards for heritage conservation" },
    { code:"ICOM-CC Metals WG\nICOM-CC Textiles WG",          desc:"Hướng dẫn xử lý kim loại và vải",                  desc_en:"ICOM-CC guidelines for metals and textiles conservation" },
    { code:"ASTM G1 / ISO 8407",                              desc:"Làm sạch mẫu kim loại bị ăn mòn",                  desc_en:"Standards for cleaning corroded metal samples" },
    { code:"AIC Leather Guidelines",                          desc:"Hướng dẫn bảo tồn da — tiêu chuẩn AIC",           desc_en:"Leather conservation guidelines by AIC" },
    { code:"ICOM-CC Modern Materials WG",                     desc:"Bảo tồn vật liệu hiện đại (nhựa, composite)",       desc_en:"Conservation of modern materials: plastics, composites" },
    { code:"ICOM-CC Paintings WG",                            desc:"Hướng dẫn bảo tồn và phục chế tranh",              desc_en:"ICOM-CC guidelines for paintings conservation" },
  ],

  /* ─────────────────────────────────────────────────────────────
     THƯƠNG HIỆU SẢN PHẨM
  ───────────────────────────────────────────────────────────── */
  brands: [
    {
      name:"Tập Đoàn ALMA F.R.C.",
      desc:"Hơn 100 năm lịch sử — giải thưởng EPV (Công Ty Di Sản). Phân phối độc quyền tại Việt Nam bởi Cleanco.",
      desc_en:"Over 100 years of history — EPV (Heritage Company) Award. Exclusive distributor in Vietnam by Cleanco.",
      badge: "EPV Award · Phân Phối Độc Quyền VN",
      badge_en: "EPV Award · Exclusive Vietnam Distribution",
    },
    {
      name:"KEIM — Sơn Khoáng Đức",
      desc:"Số 1 thế giới về sơn khoáng — gần 150 năm lịch sử. Bền trên 100 năm, thoáng khí tự nhiên, không VOC.",
      desc_en:"World's #1 mineral paint — nearly 150 years. Durable 100+ years, naturally breathable, zero VOC.",
      badge: "150 Năm · Độ Bền 100+ Năm",
      badge_en: "150 Years · 100+ Years Durability",
    },
  ],

  /* ─────────────────────────────────────────────────────────────
     INSIGHTS / KIẾN THỨC
     Thêm title_en, excerpt_en, tag_en để dịch
  ───────────────────────────────────────────────────────────── */
  insights: [
    {
      icon:"🎨", img:"",
      tag:"Góc Kỹ Thuật",            tag_en:"Technical Corner",
      title:`Patina — "Màu Thời Gian": Vì Sao Không Được Xóa Bỏ?`,
      title_en:`Patina — "The Color of Time": Why It Must Never Be Erased`,
      excerpt:`Hiểu đúng về Patina và lý do đây là giá trị vô giá của di sản cần được bảo tồn, không phải loại bỏ...`,
      excerpt_en:`Understanding Patina and why it represents an invaluable heritage value that must be preserved, not removed...`,
    },
    {
      icon:"🪵", img:"",
      tag:"Hướng Dẫn Chăm Sóc",     tag_en:"Care Guide",
      title:"Bảo Quản Kết Cấu Gỗ Sau Phục Hồi: Quy Trình Chuẩn Châu Âu",
      title_en:"Preserving Timber Structures After Restoration: European Standard Process",
      excerpt:"Chế độ kiểm tra định kỳ, sản phẩm dưỡng gỗ ALMA F.R.C. phù hợp với từng loại gỗ...",
      excerpt_en:"Periodic inspection schedule, ALMA F.R.C. wood conditioning products suited to each timber type...",
    },
    {
      icon:"🏛️", img:"",
      tag:"Nghiên Cứu Di Sản",       tag_en:"Heritage Research",
      title:"Sơn Khoáng KEIM: Tại Sao Bền Hơn 100 Năm?",
      title_en:"KEIM Mineral Paint: Why Does It Last Over 100 Years?",
      excerpt:"Phân tích khoa học về cơ chế kết dính của sơn khoáng vào đá và vữa...",
      excerpt_en:"Scientific analysis of the bonding mechanism of mineral paint to stone and mortar...",
    },
  ],

/* ─────────────────────────────────────────────────────────────
   FORM DROPDOWNS —
───────────────────────────────────────────────────────────── */
form_services:  ["Di Sản Văn Hoá","Công Trình Kiến Trúc (Building / Resort / Villa)","Du Thuyền & Ô Tô","Thời Trang Cao Cấp","Tư Vấn & Đánh Giá"],
form_services_en: ["Cultural Heritage","Architectural Works (Building / Resort / Villa)","Yacht & Luxury Vehicles","Luxury Fashion","Consulting & Assessment"],
form_materials: ["Gỗ","Đá / Vữa","Kim Loại","Da","Vải","Nhựa / Composite","Kính","Nhiều loại"],
form_materials_en: ["Wood","Stone / Mortar","Metal","Leather","Fabric","Plastic / Composite","Glass","Multiple"],

};
