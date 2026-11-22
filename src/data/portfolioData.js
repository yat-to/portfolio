export const personalInfo = {
  name: "Muhammad Hidayat Darmawan",
  shortName: "Hidayat",
  brandName: "Hidayat.dev",
  monogram: "MHD",
  role: "Full-Stack Software Engineer & System Architect",
  tagline: "Membangun Sistem Informasi & Aplikasi Web yang Tangguh, Terintegrasi, dan Siap Skalabilitas.",
  subTagline:
    "Full-Stack Software Engineer & System Architect yang berdedikasi membangun sistem informasi tangguh, aplikasi web bisnis (SaaS), dan integrasi API efisien dari alur bisnis hingga server produksi.",
  location: "Indonesia",
  experienceYears: "5+ Tahun",
  whatsappNumber: "6282188131296",
  whatsappDisplay: "+62 821-8813-1296",
  email: "mhidayatdarmawan@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  status: "Tersedia untuk Proyek Baru & Konsultasi Sistem",
  stats: [
    { value: "5+ Thn", label: "Pengalaman" },
    { value: "10+", label: "Sistem & Proyek" },
    { value: "100%", label: "Komitmen Kualitas" },
  ],
};

export const services = [
  {
    id: "custom-saas",
    title: "Custom Web & SaaS Development",
    tagline: "Aplikasi Bisnis & Operasional Kustom",
    description:
      "Pengembangan aplikasi web bisnis khusus seperti Point of Sale (POS), sistem inventori multi-cabang, reservasi, dan platform operasional dengan arsitektur scalable.",
    deliverables: [
      "Arsitektur modular, efisien, dan siap skalabilitas",
      "UI/UX modern, intuitif, dan responsif di semua perangkat",
      "Otomatisasi kalkulasi keuangan dan rekap transaksi akurat",
    ],
    techStack: ["Next.js", "React", "NestJS / Node.js", "PostgreSQL", "Prisma"],
    badge: "UMKM & Bisnis",
  },
  {
    id: "enterprise-public-sector",
    title: "Enterprise & Public Sector Systems",
    tagline: "Tata Kelola & Monitoring Berbasis Data",
    description:
      "Sistem informasi instansi dan korporasi untuk monitoring pengadaan LKPP (SiRUP & LPSE), inventarisasi aset daerah berbasis GIS, dan dashboard analitik eksekutif real-time.",
    deliverables: [
      "Integrasi otomatis dengan API LKPP (SiRUP & LPSE)",
      "Pemetaan spasial Web-GIS & visualisasi data dinamis",
      "Sistem audit trail dan hak akses berjenjang (RBAC)",
    ],
    techStack: ["Vue.js / React", "Node.js", "MySQL / PostgreSQL", "GIS Mapping"],
    badge: "Instansi & Korporasi",
  },
  {
    id: "integration-server-security",
    title: "System Integration & Server Security",
    tagline: "Konektivitas API & Infrastruktur VPS Tangguh",
    description:
      "Pemasangan payment gateway QRIS dinamis, WhatsApp gateway otomatis, sinkronisasi antar-database, serta konfigurasi server VPS Linux (Nginx, SSL, dan hardening).",
    deliverables: [
      "Payment Gateway QRIS & WhatsApp notification otomatis",
      "Konfigurasi Linux VPS, Nginx Reverse Proxy, dan SSL/TLS",
      "Proteksi firewall server, monitoring uptime, dan automasi backup",
    ],
    techStack: ["RESTful API", "QRIS Gateway", "WhatsApp API", "Ubuntu VPS", "Nginx"],
    badge: "Infrastruktur & API",
  },
];

export const caseStudies = [
  {
    id: "perak-konsel",
    title: "PERAK KONSEL",
    subtitle: "Monitoring Pengadaan & API LKPP",
    category: "Enterprise & Sektor Publik",
    categoryKey: "enterprise",
    client: "Bagian Pengadaan Barang & Jasa Daerah",
    tech: ["Vue.js", "Node.js", "MySQL", "LKPP API"],
    badge: "Integrasi API Nasional",
    image: "/images/project/perak.png",
    summary:
      "Sistem monitoring pengadaan barang/jasa daerah yang terintegrasi otomatis dengan API SiRUP & LPSE LKPP.",
    problem:
      "Monitoring paket lelang sebelumnya dilakukan manual dari dokumen terpisah, menimbulkan risiko keterlambatan laporan dan inkonsistensi data anggaran.",
    solution:
      "Membangun dashboard terpusat dengan scheduler otomatis penarik data API LKPP secara real-time dan rekapitulasi instan.",
    keyFeatures: [
      "Sinkronisasi data otomatis dengan API SiRUP & LPSE LKPP",
      "Dashboard analitik real-time progress anggaran pengadaan",
      "Filter status tender dan ekspor laporan format evaluasi",
    ],
    architecture:
      "Backend Node.js dengan cron scheduler yang memetakan data API LKPP ke database MySQL tanpa membebani interaksi pengguna.",
    impact:
      "Mempersingkat rekapitulasi data pengadaan dari 3 hari menjadi hitungan detik serta mencegah duplikasi paket lelang.",
  },
  {
    id: "sikola-pindara",
    title: "SIKOLA PINDARA",
    subtitle: "Inventarisasi Aset Daerah & Web-GIS",
    category: "Enterprise & Sektor Publik",
    categoryKey: "enterprise",
    client: "Dinas Pendidikan & Kebudayaan Daerah",
    tech: ["React", "Redux", "Express", "GIS Mapping"],
    badge: "Sistem GIS & Inventaris",
    image: "/images/project/sikola-pindara.png",
    summary:
      "Digitalisasi inventaris aset dan sarana sekolah daerah dengan pemetaan spasial dan status kondisi fisik real-time.",
    problem:
      "Pendataan ribuan aset gedung dan sarana sekolah di pelosok rawan usang dan tumpang tindih kepemilikan.",
    solution:
      "Membangun platform aset berbasis Web-GIS dengan titik koordinat terverifikasi dan riwayat kelayakan fasilitas.",
    keyFeatures: [
      "Peta interaktif koordinat fasilitas pendidikan dengan clustering dinamis",
      "Klasifikasi kondisi fisik aset (baik, rusak ringan, rusak berat)",
      "Alur verifikasi berjenjang dari operator sekolah hingga dinas",
    ],
    architecture:
      "Aplikasi React dengan manajemen state Redux untuk performa peta yang responsif, dipadukan Express API query spasial.",
    impact:
      "Meningkatkan akurasi penyaluran bantuan renovasi gedung hingga 95% berbasis data faktual lapangan.",
  },
  {
    id: "flexpos-saas",
    title: "FlexPOS",
    subtitle: "SaaS Point of Sale & Multi-Cabang",
    category: "SaaS & Bisnis Komersial",
    categoryKey: "saas",
    client: "UMKM F&B & Ritel Modern",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    badge: "Cloud SaaS Ready",
    summary:
      "Aplikasi kasir cloud multi-cabang dengan manajemen resep bahan baku (HPP) dan laporan laba-rugi otomatis.",
    problem:
      "Pemilik UMKM kesulitan memantau stok bahan baku di banyak cabang dan sering mengalami selisih kas harian.",
    solution:
      "Mengembangkan aplikasi kasir web responsif dengan transfer stok antar-outlet, resep HPP otomatis, dan hak akses kasir aman.",
    keyFeatures: [
      "Mode kasir cepat dengan barcode scanner dan struk thermal",
      "Manajemen stok multi-cabang dan mutasi antar-outlet",
      "Perhitungan HPP otomatis dan laporan laba-rugi harian",
    ],
    architecture:
      "Frontend Next.js App Router berkecepatan tinggi, didukung backend NestJS modular dengan caching PostgreSQL + Redis.",
    impact:
      "Menekan kebocoran bahan baku hingga 80% dan memangkas waktu tutup buku harian dari 2 jam menjadi 5 menit.",
  },
  {
    id: "scandine-qr",
    title: "ScanDine",
    subtitle: "QR Self-Order & Pembayaran QRIS",
    category: "SaaS & Bisnis Komersial",
    categoryKey: "saas",
    client: "Restoran, Kafe & Food Court",
    tech: ["Next.js", "Node.js", "QRIS API", "Socket.io"],
    badge: "Fintech & Smart Order",
    summary:
      "Sistem pemesanan mandiri via scan QR meja tanpa unduh aplikasi, terintegrasi Kitchen Display dan QRIS dinamis.",
    problem:
      "Antrean kasir menumpuk di jam sibuk dan pelayan rawan salah mencatat pesanan tamu.",
    solution:
      "Pemesanan langsung via QR meja dengan token dinamis anti-fiktif, order terkirim otomatis ke layar dapur, dan bayar QRIS instan.",
    keyFeatures: [
      "Akses menu langsung via browser ponsel tanpa install aplikasi",
      "Token sesi dinamis pada QR meja untuk keamanan pemesanan",
      "Kitchen Display System (KDS) real-time dan pembayaran QRIS otomatis",
    ],
    architecture:
      "Komunikasi full-duplex WebSocket Socket.io untuk sinkronisasi seketika antara tamu, kasir, dan dapur.",
    impact:
      "Meningkatkan perputaran meja restoran hingga 35% dan menghilangkan kesalahan pencatatan menu.",
  },
  {
    id: "gali-integral",
    title: "GaLi Integral",
    subtitle: "Platform Matematika Interaktif",
    category: "Edukasi & Web Interaktif",
    categoryKey: "edtech",
    client: "Institusi Pendidikan & Siswa",
    tech: ["Vue.js", "Tailwind CSS", "Canvas API"],
    badge: "Visual Interaktif",
    image: "/images/project/gali-integral.png",
    summary:
      "Aplikasi web interaktif untuk memvisualisasikan kurva kalkulus dan partisi integral secara dinamis.",
    problem:
      "Konsep luas daerah integral terasa abstrak dan sulit dipahami siswa bila hanya menggunakan buku teks cetak.",
    solution:
      "Menghadirkan grafik kalkulus dinamis dengan slider fungsi di mana partisi Riemann terkalkulasi otomatis.",
    keyFeatures: [
      "Plotting grafik kurva matematika dengan parameter dinamis",
      "Visualisasi interaktif jumlah partisi Riemann 60fps",
      "Modul latihan soal dengan umpan balik langkah bertahap",
    ],
    architecture:
      "Rendering kurva berbasis HTML5 Canvas dengan reaktivitas Vue.js untuk performa visual ringan dan mulus.",
    impact:
      "Mempermudah pemahaman konsep logika integral secara visual bagi ratusan pelajar.",
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Analisis Alur Bisnis & Kebutuhan",
    phase: "Discovery & Blueprint",
    description:
      "Membedah alur operasional dan kebutuhan spesifik bisnis Anda untuk merumuskan spesifikasi fungsional yang tepat sasaran.",
    deliverables: [
      "Dokumen Alur Bisnis & Scope of Work (SOW)",
      "Daftar Kebutuhan Fungsional Sistem",
      "Estimasi Timeline & Milestones Realistis",
    ],
  },
  {
    step: "02",
    title: "Perancangan Arsitektur & UI/UX",
    phase: "Architecture & Design",
    description:
      "Merancang skema database, struktur REST API, pemetaan keamanan, dan antarmuka modern yang nyaman dipakai pengguna.",
    deliverables: [
      "Skema Database Ternormalisasi (ERD)",
      "Dokumentasi Endpoint API & Autentikasi",
      "Wireframe & Desain Antarmuka Responsif",
    ],
  },
  {
    step: "03",
    title: "Pengembangan Terstruktur (Sprint)",
    phase: "Iterative Development",
    description:
      "Eksekusi kode frontend dan backend modular standar industri dengan demo progres berkala pada setiap fase sprint.",
    deliverables: [
      "Struktur kode rapi, modular, dan teruji",
      "Integrasi komponen antarmuka dengan API backend",
      "Pembaruan berkala via staging demo privat",
    ],
  },
  {
    step: "04",
    title: "Pengujian & Deployment Server Aman",
    phase: "QA, Security & Launch",
    description:
      "Pengujian menyeluruh, konfigurasi VPS Linux produksi, Nginx reverse proxy, SSL, firewall, dan migrasi domain.",
    deliverables: [
      "Uji fungsionalitas & proteksi keamanan dasar",
      "Setup Production Server (Nginx, PM2/Docker, SSL)",
      "Monitoring uptime dan prosedur backup berkala",
    ],
  },
  {
    step: "05",
    title: "Garansi & Pemeliharaan",
    phase: "Post-Launch Warranty",
    description:
      "Pendampingan pasca-peluncuran, panduan operasional admin, dan garansi perbaikan bug agar sistem berjalan stabil.",
    deliverables: [
      "Buku Panduan Operasional Sistem untuk Tim Anda",
      "Garansi perbaikan bug pasca-rilis",
      "Dukungan teknis dan konsultasi pengembangan fitur",
    ],
  },
];

export const valuePropositions = [
  {
    title: "Orientasi Solusi Nyata",
    description:
      "Membangun sistem yang menyelesaikan masalah riil di lapangan, bukan sekadar menulis baris kode.",
    metric: "100%",
    metricLabel: "Fokus Solusi",
  },
  {
    title: "Arsitektur Full-Stack",
    description:
      "Satu pintu keahlian dari frontend intuitif, backend tangguh, hingga server Linux yang aman.",
    metric: "End-to-End",
    metricLabel: "Single Contact",
  },
  {
    title: "Transparan & Terukur",
    description:
      "Pengerjaan bertahap dengan laporan progres sprint berkala tanpa spekulasi.",
    metric: "Sprint",
    metricLabel: "Demo Berkala",
  },
  {
    title: "Garansi Pasca Launch",
    description:
      "Garansi fungsionalitas dan pendampingan memastikan sistem beroperasi tanpa cemas.",
    metric: "Garansi",
    metricLabel: "Bebas Cemas",
  },
];
