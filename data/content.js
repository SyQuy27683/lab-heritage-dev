/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║        LAB héritage — data/content.js                            ║
 * ║                                                                  ║
 * ║ ⭐ ĐÂY LÀ FILE DUY NHẤT CẦN SỬA ĐỂ CẬP NHẬT TOÀN BỘ WEB          ║
 * ║                                                                  ║
 * ║  CÁCH THÊM ẢNH:                                                  ║
 * ║   1. Bỏ file ảnh vào thư mục  images/                            ║
 * ║   2. Điền đường dẫn:  "images/ten-file.jpg"                      ║
 * ║   3. Để chuỗi rỗng ""  nếu chưa có ảnh → web tự hiển thị         ║
 * ║      placeholder, không bị lỗi                                   ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const DATA = {

  /* ─────────────────────────────────────────────
     THÔNG TIN CÔNG TY
  ───────────────────────────────────────────── */
  company: {
    name:      "LAB héritage",
    tagline:   "Conserver la beauté",
    slogan:    "Di Sản · Kiến Trúc · Du Thuyền & Ô Tô · Thời Trang Cao Cấp",
    phone:     "+84 862043042",
    contact:   "Mr. Tú Đỗ - PM LAB hé riatage",
    email:     "dotrongthientu@labheritage.com.vn",
    address:   "37/20 Nguyễn Minh Hoàng, Phường Bảy Hiền, TP. Hồ Chí Minh",
    workshop:  "Củ Chi, TP. Hồ Chí Minh — 2.000m²",
    zalo:      "https://zalo.me/0862043042",
    map_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320.627991685336!2d106.64886664581906!3d10.80056448780865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529ad1e974f91%3A0x985dafff847a3e24!2zU3BhIMSQ4buTIEhp4buHdSBMQUIr!5e0!3m2!1svi!2s!4v1777871394068!5m2!1svi!2s",
  },

  /* ─────────────────────────────────────────────
     HERO
  ───────────────────────────────────────────── */
  hero: {
    eyebrow:    "LAB héritage — Conserver la beauté",
    h1_line1:   "Phục Dựng",
    h1_em:      "Ký Ức",
    h1_line3:   "Kiến Trúc",
    desc:       "Giải pháp tổng thể phục dựng và phục chế — nơi nghệ thuật thủ công tinh xảo kết hợp công nghệ hiện đại từ tập đoàn Châu Âu, giữ nguyên từng giá trị lịch sử nguyên bản.",
    btn1:       "Đặt Lịch Khảo Sát Cùng LAB hériatge",
    btn2:       "Xem Dự Án Tiêu Biểu",
    stats: [
      { num: "10.000", sup: "+", label: "Vật Phẩm Đã Xử Lý" },
      { num: "5",      sup: "+", label: "Năm Kinh Nghiệm" },
      { num: "50",     sup: "+", label: "Nhân Sự Chuyên Môn" },
      { num: "5.000",  sup: "+", label: "Khách Hàng Tin Tưởng" },
    ],
    ticker: [
      "Di Sản Văn Hoá", "Công Trình Kiến Trúc",
      "Building · Resort · Villa", "Du Thuyền & Ô Tô",
      "Thời Trang Cao Cấp", "Conserver la beauté",
    ],
  },

  /* ─────────────────────────────────────────────
     BEFORE / AFTER SLIDER
     Đặt ảnh vào images/ rồi điền tên file bên dưới
  ───────────────────────────────────────────── */
  before_after: {
    img_before: "images/before-chateau.jpg",   // ← VD: "images/before-chateau.jpg"
    img_after:  "images/after-chateau.jpg",   // ← VD: "images/after-chateau.jpg"
    label_before: "Trước Phục Chế",
    label_after:  "Sau Phục Chế",
  },

  /* ─────────────────────────────────────────────
     VỀ CHÚNG TÔI
  ───────────────────────────────────────────── */
  about: {
    img: "images/team.svg",          // ← VD: "images/team.jpg" hoặc "images/workshop.jpg"
    paragraphs: [
      `Với hơn <strong>5 năm kinh nghiệm</strong> và hơn <strong>10.000 vật phẩm cao cấp</strong> đã được xử lý, LAB héritage là đơn vị tiên phong kết hợp nghệ thuật thủ công và công nghệ hiện đại trong phục dựng — phục chế.`,
      `Cam kết giữ nguyên <strong>kiến trúc – kết cấu – vật liệu – màu sắc</strong>. Đặc biệt, "màu thời gian" (Patina) — dấu tích vô giá của lịch sử — phải được tôn trọng tuyệt đối.`,
      `Toàn bộ quy trình được <strong>tư vấn và đào tạo bởi chuyên gia Châu Âu</strong>. Xưởng sản xuất tại Củ Chi rộng hơn <strong>2.000m²</strong> với đội ngũ 50+ nhân sự.`,
    ],
    stats: [
      { n: "10.000+", l: "Vật phẩm xử lý" },
      { n: "50+",     l: "Nhân sự chuyên môn" },
      { n: "5+",      l: "Năm kinh nghiệm" },
      { n: "2.000m²", l: "Xưởng tại Củ Chi" },
    ],
    products: [
      "ALMA F.R.C. — EPV Award",
      "KEIM — Sơn Khoáng Đức",
      "Phân Phối Bởi Cleanco",
      "Bền Trên 100 Năm",
    ],
  },

  /* ─────────────────────────────────────────────
     DỊCH VỤ — 4 lĩnh vực
  ───────────────────────────────────────────── */
  services: [
    {
      num: "01", icon: "🏛️",
      title: "Di Sản Văn Hoá",
      sub:   "Heritage Conservation",
      desc:  `Tôn vinh bản sắc, định hình di sản. Cam kết giữ nguyên kiến trúc — kết cấu — vật liệu — màu sắc. Chỉ lấy chất bẩn, phục hồi cấu trúc hư hại, tuyệt đối không xóa "màu thời gian — Patina".`,
      mats:  ["Gỗ", "Đá", "Kim Loại", "Vữa Truyền Thống", "Vải Cổ"],
    },
    {
      num: "02", icon: "🏨",
      title: "Công Trình Kiến Trúc",
      sub:   "Building · Resort · Villa",
      desc:  `Tối ưu phục dựng / phục chế — nâng tầm trải nghiệm. Ứng dụng kỹ thuật từ ALMA F.R.C và KEIM kéo dài tuổi thọ vật liệu, giảm chi phí bảo trì, khôi phục "tính cốt lõi" kiến trúc.`,
      mats:  ["Bề Mặt Đá", "Sơn Khoáng KEIM", "Nội Thất Gỗ", "Kim Loại"],
    },
    {
      num: "03", icon: "🛥️",
      title: "Du Thuyền & Ô Tô",
      sub:   "Yacht & Luxury Vehicles",
      desc:  `Bảo toàn giá trị bản thể giữa mọi chuyển động. Xử lý tác động của môi trường biển, bụi bẩn, ẩm ướt, ánh nắng. Chống oxy hóa, ăn mòn, lão hóa — giữ trọn vẹn cấu trúc và tính nguyên bản.`,
      mats:  ["Nhựa Composite", "Gỗ Teak", "Kim Loại", "Da & Vải"],
    },
    {
      num: "04", icon: "👜",
      title: "Thời Trang Cao Cấp",
      sub:   "Luxury Fashion Restoration",
      desc:  `Tinh chỉnh từng chi tiết. Không làm mới hoàn toàn, không xóa dấu thời gian — khôi phục có chọn lọc. Từng vết xước, mép túi, khóa kim loại đều được xử lý bằng tay với tay nghề thủ công cao cấp.`,
      mats:  ["Da", "Vải", "Kim Loại", "Vệ Sinh Sâu"],
    },
  ],

  /* ─────────────────────────────────────────────
     QUY TRÌNH — 4 bước
  ───────────────────────────────────────────── */
  process: [
    {
      num: "I", title: "Vệ Sinh",
      desc: "Làm sạch chuyên sâu theo từng loại vật liệu — loại bỏ chất bẩn, rêu mốc, lớp bảo vệ cũ hư hại mà không xâm hại cấu trúc gốc.",
    },
    {
      num: "II", title: "Phục Dựng / Phục Chế",
      desc: "Can thiệp kỹ thuật phục hồi cấu trúc hư hại, bổ sung vật liệu nguyên bản theo tiêu chuẩn EN, ICOMOS, ISO quốc tế.",
    },
    {
      num: "III", title: "Bảo Dưỡng",
      desc: "Xử lý và dưỡng bề mặt bằng sản phẩm 100% Châu Âu từ ALMA F.R.C. và KEIM — kéo dài tuổi thọ vật liệu lên đến hàng thập kỷ.",
    },
    {
      num: "IV", title: "Bảo Vệ",
      desc: "Áp dụng lớp bảo vệ chuyên biệt chống oxy hóa, ẩm, UV. Bàn giao kèm hướng dẫn chăm sóc và cam kết bảo hành dài hạn.",
    },
  ],

  /* ─────────────────────────────────────────────
     DỰ ÁN TIÊU BIỂU
     - img: để "" nếu chưa có ảnh, web dùng placeholder
     - filter: dùng để lọc theo tab (all / di-san / resort-villa / du-thuyen / thoi-trang)
     - featured: true = ô lớn chiếm 2 cột (chỉ 1 dự án)
  ───────────────────────────────────────────── */
  projects: [
    {
      cat: "Di Sản Văn Hoá", filter: "di-san",
      name: "Đình Làng Cổ — Đồng Nai",
      desc: "Phục hồi kết cấu gỗ & mái ngói truyền thống",
      icon: "🏯", img: "images/lang-DN.png",   // ← "images/dinh-lang.jpg"
      featured: true,
      bg: "linear-gradient(135deg,#1a1408,#261c0c)",
    },
    {
      cat: "Resort Cao Cấp", filter: "resort-villa",
      name: "Resort Fly Up — Phú Quốc",
      desc: "Phục chế ngoại thất & vật liệu bị oxy hóa bởi biển",
      icon: "🌴", img: "images/flyup2.jpg",
      featured: false,
      bg: "linear-gradient(135deg,#100e08,#1c1a0e)",
    },
    {
      cat: "Villa Cao Cấp", filter: "resort-villa",
      name: "Villa Đông Dương — Đà Lạt",
      desc: "Phục hồi kiến trúc thuộc địa Pháp thập niên 1930",
      icon: "🏰", img: "images/dong-duong DL.jpg",
      featured: false,
      bg: "linear-gradient(135deg,#14110a,#201c10)",
    },
    {
      cat: "Du Thuyền", filter: "du-thuyen",
      name: "Superyacht — Cảng Bến Đình",
      desc: "Phục chế composites, gỗ teak & nội thất da",
      icon: "🛥️", img: "images/du-thuyen.png",
      featured: false,
      bg: "linear-gradient(135deg,#0e0c08,#1a1812)",
    },
    {
      cat: "Thời Trang Cao Cấp", filter: "thoi-trang",
      name: "Bộ Sưu Tập Sản Phẩm Da — LAB Team",
      desc: "Phục hồi túi, giày da — khách hàng cá nhân cao cấp",
      icon: "👜", img: "images/bst.jpg",
      featured: false,
      bg: "linear-gradient(135deg,#121008,#1e1c0e)",
    },
  ],

  /* ─────────────────────────────────────────────
     MINH CHỨNG — Château de la Mercerie
     images: mảng 6 ảnh mosaic, để "" nếu chưa có
  ───────────────────────────────────────────── */
  proof: {
    title1: "Château de la",
    title2: "Mercerie — Pháp",
    quote: `"Versailles Charentais nhỏ" — kỷ lục Guinness tòa lâu đài có chiều ngang dài nhất thế kỷ 20, thuộc Di Sản Văn Hóa Thế Giới.`,
    paragraphs: [
      `Sau gần <strong>30 năm bỏ hoang</strong>, năm 2011, Tập đoàn <strong>ALMA F.R.C.</strong> — đối tác công nghệ của LAB héritage — xin cấp phép và triển khai phục chế.`,
      `Sau <strong>3 năm</strong> thực hiện với 100% sản phẩm và công nghệ từ ALMA F.R.C., Château de la Mercerie được phục chế hoàn toàn về nguyên bản — minh chứng cho đẳng cấp công nghệ mà LAB héritage mang đến Việt Nam.`,
    ],
    // 6 ảnh mosaic: [0] chiếm toàn hàng trên (featured)
    images: [
      { img: "", icon: "🏰" },  // ← "images/chateau-1.jpg"
      { img: "", icon: "🏛️" },
      { img: "", icon: "🎨" },
      { img: "", icon: "🪟" },
      { img: "", icon: "🌿" },
      { img: "", icon: "✨" },
    ],
  },

  /* ─────────────────────────────────────────────
     ĐỐI TÁC & KHÁCH HÀNG
  ───────────────────────────────────────────── */
  partners: [
    { name: "SAPHIR®",       sub: "Medaille d'Or 1925 · Paris", style: "font-family:var(--font-ui);letter-spacing:3px;font-size:20px;font-weight:300" },
    { name: "Louis XIII°",   sub: "Avel",                        style: "font-size:16px;letter-spacing:1px" },
    { name: "SONKIM LAND",   sub: "",                            style: "font-family:var(--font-ui);letter-spacing:3px;font-size:17px;font-weight:300" },
    { name: "HILTON.",       sub: "",                            style: "font-family:var(--font-ui);letter-spacing:4px;font-size:20px;font-weight:200" },
    { name: "Đại Quang Minh",sub: "",                            style: "font-style:italic;font-size:20px" },
    { name: "MASTERISE HOMES",sub: "",                           style: "font-family:var(--font-ui);font-size:13px;letter-spacing:2px;font-weight:300" },
    { name: "LV",            sub: "Louis Vuitton",               style: "font-size:28px;letter-spacing:4px" },
    { name: "HERMÈS",        sub: "Paris",                       style: "font-family:var(--font-ui);letter-spacing:4px;font-size:18px;font-weight:200" },
  ],
  partners_note: "Cùng với 5.000+ khách hàng cá nhân khác trên toàn quốc",

  /* ─────────────────────────────────────────────
     CTA BANNER (nền vàng)
  ───────────────────────────────────────────── */
  cta: {
    line1: "Công trình của bạn xứng đáng được",
    line2: "phục chế về đúng giá trị nguyên bản",
    btn:   "Đặt Lịch Khảo Sát",
  },

  /* ─────────────────────────────────────────────
     TIÊU CHUẨN QUỐC TẾ
  ───────────────────────────────────────────── */
  standards: [
    { code: "EN 16096 / 16095 / 16163", desc: "Tiêu chuẩn Châu Âu về bảo tồn di sản văn hóa" },
    { code: "ICOMOS Guidelines",         desc: "Hướng dẫn bảo tồn quốc tế — ICOMOS Wood Guidelines" },
    { code: "ISO 15686-3 / 11844-1",     desc: "Tuổi thọ vật liệu và kiểm soát ăn mòn" },
    { code: "UNI 11182 / 11119",         desc: "Tiêu chuẩn Ý về bảo tồn và mô tả hiện trạng" },
    { code: "ICOM-CC Metals / Textiles", desc: "Hướng dẫn xử lý kim loại và vải trong bảo tồn" },
    { code: "ASTM G1 / ISO 8407",        desc: "Làm sạch mẫu kim loại bị ăn mòn" },
    { code: "AIC Leather Guidelines",    desc: "Hướng dẫn bảo tồn da — tiêu chuẩn Mỹ" },
  ],
  brands: [
    {
      name: "Tập Đoàn ALMA F.R.C.",
      desc: "Hơn 100 năm lịch sử — được trao tặng giải thưởng EPV (Công Ty Di Sản). Đạt các tiêu chuẩn 1907/2006/CE, LCP 1272/2008/CE, ICPE, REACH. Hiện phân phối độc quyền tại Việt Nam bởi Cleanco.",
      badge: "EPV Award · Phân Phối Độc Quyền VN",
    },
    {
      name: "KEIM — Sơn Khoáng Đức",
      desc: "Số 1 thế giới về sơn khoáng — gần 150 năm lịch sử. Cam kết độ bền trên 100 năm nhờ khả năng thoát ẩm tự nhiên. Thành phần khoáng tự nhiên an toàn.",
      badge: "150 Năm · Độ Bền 100+ Năm",
    },
  ],

  /* ─────────────────────────────────────────────
     KIẾN THỨC & TƯ LIỆU
     img: để "" nếu chưa có ảnh thumbnail
  ───────────────────────────────────────────── */
  insights: [
    {
      icon: "🎨", img: "",
      tag: "Góc Kỹ Thuật",
      title: `Patina — "Màu Thời Gian": Vì Sao Không Được Xóa Bỏ?`,
      excerpt: `Hiểu đúng về Patina — lớp bề mặt tích tụ theo năm tháng — và lý do đây là giá trị vô giá của di sản cần được bảo tồn, không phải loại bỏ...`,
    },
    {
      icon: "🪵", img: "",
      tag: "Hướng Dẫn Chăm Sóc",
      title: "Bảo Quản Kết Cấu Gỗ Sau Phục Hồi: Quy Trình Chuẩn Châu Âu",
      excerpt: "Chế độ kiểm tra định kỳ, sản phẩm dưỡng gỗ từ ALMA F.R.C. phù hợp với từng loại gỗ và cách nhận biết sớm dấu hiệu hư hại...",
    },
    {
      icon: "🏛️", img: "",
      tag: "Nghiên Cứu Di Sản",
      title: "Sơn Khoáng KEIM: Tại Sao Bền Hơn 100 Năm?",
      excerpt: "Phân tích khoa học về cơ chế kết dính của sơn khoáng vào bề mặt đá và vữa — tại sao KEIM từ Đức được xem là giải pháp duy nhất cho công trình di sản...",
    },
  ],

  /* ─────────────────────────────────────────────
     FORM LIÊN HỆ — options
  ───────────────────────────────────────────── */
  form_services: [
    "Di Sản Văn Hoá",
    "Công Trình Kiến Trúc (Building / Resort / Villa)",
    "Du Thuyền & Ô Tô",
    "Thời Trang Cao Cấp",
    "Tư Vấn & Đánh Giá",
  ],
  form_materials: [
    "Gỗ", "Đá / Vữa", "Kim Loại", "Da",
    "Vải", "Nhựa / Composite", "Kính", "Nhiều loại",
  ],

};
