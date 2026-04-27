export const dictionary = {
  en: {
    personal: {
      name: "Akmal Bintang Budiawan",
      tagline: "Software Engineer",
      subtitle: "Building clean, purposeful software — from Jakarta to the world.",
      description:
        "Final-year Informatics Engineering student at PENS. I architect enterprise-grade frontends and chase meaningful problems — currently contributing to healthcare tech at Kalbe Farma, and aiming for the global tech stage.",
      location: "Jakarta, Indonesia",
      email: "akmal@example.com",
      github: "https://github.com/akmal-bintang",
      linkedin: "https://linkedin.com/in/akmal-bintang",
      status: "Open to opportunities",
      philosophy: "Clean Code Evangelist & Growth Mindset Practitioner",
      goal: "World-class Software Engineer · Singapore Tech Ecosystem 2031",
    },
    experiences: [
      {
        id: "sci",
        role: "Frontend Developer Intern",
        company: "SCI (Stem Cell and Cancer Institute)",
        parent: "PT Bifarma Adiluhung · Kalbe Farma Tbk",
        period: "2025 — Present",
        location: "Jakarta, Indonesia",
        type: "Internship",
        highlight: true,
        description:
          "Operating inside one of Indonesia's largest pharmaceutical conglomerates, I manage a complex multi-project ecosystem — simultaneously shipping features across four enterprise products in healthcare and biotech.",
        projects: [
          {
            name: "Bifarma",
            tech: ".NET / Oracle API",
            impact:
              "Architected .NET-based financial modules with automated Oracle API reporting pipelines.",
          },
          {
            name: "KDNA — KlikGen",
            tech: "Next.js / Tailwind CSS",
            impact:
              "Led full UI/UX revamp. Rebuilt enterprise dashboards with a focus on clarity, speed, and developer experience.",
          },
          {
            name: "PML — Tracklab",
            tech: "Auth & Session",
            impact:
              "Resolved critical authentication and session-refresh vulnerabilities in laboratory tracking systems.",
          },
          {
            name: "SCI — Strand",
            tech: "Jest / Performance",
            impact:
              "Implemented unit testing (Jest) from scratch and elevated home page performance score.",
          },
        ],
        tags: ["Next.js", "TypeScript", ".NET", "Oracle SQL", "Jest", "CI/CD"],
      },
      {
        id: "pgri",
        role: "Fullstack Developer Intern",
        company: "PGRI Office",
        parent: "Government / Education Sector",
        period: "2023 — 2024",
        location: "Indonesia",
        type: "Internship · 11 months",
        highlight: false,
        description:
          "An 11-month deep dive into full-stack development. Built internal tools and web applications end-to-end — from database schema to deployed UI — establishing a rigorous engineering foundation.",
        projects: [],
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
      },
    ],
    projects: [
      {
        id: "smart-attendance",
        name: "SmartAttendance",
        tagline: "AI-powered presence tracking for the modern campus",
        description:
          "Capstone project — an intelligent student attendance system leveraging AI for real-time face recognition and behavioral analytics. Built with a focus on accuracy, privacy, and institutional scalability.",
        status: "In Development",
        statusColor: "green",
        period: "Jan 2026 — Apr 2026",
        tags: ["AI / ML", "Next.js", "FastAPI", "PostgreSQL", "Python"],
        highlights: [
          "Real-time face recognition via computer vision",
          "Behavioral pattern analytics dashboard",
          "Multi-role access: admin, lecturer, student",
          "RESTful API with FastAPI backend",
        ],
        github: "#",
        demo: "#",
      },
      {
        id: "klikgen",
        name: "KlikGen — Dashboard Revamp",
        tagline: "Enterprise genomics dashboard, redesigned",
        description:
          "Led the complete UI/UX overhaul of a genomics-focused enterprise dashboard at KDNA under Kalbe Farma. Transformed legacy interfaces into clean, high-performance data experiences.",
        status: "Shipped",
        statusColor: "blue",
        period: "2025",
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
        highlights: [
          "Full UI/UX revamp from legacy system",
          "Enterprise-grade data table architecture",
          "Improved load performance by restructuring component tree",
          "Implemented design system from scratch",
        ],
        github: null,
        demo: null,
      },
      {
        id: "bifarma",
        name: "Bifarma Financial Module",
        tagline: ".NET services with Oracle API integration",
        description:
          "Designed and implemented backend financial modules for PT Bifarma Adiluhung. Integrated Oracle APIs to automate complex financial reporting pipelines, reducing manual overhead.",
        status: "Shipped",
        statusColor: "blue",
        period: "2025",
        tags: [".NET Core", "C#", "Oracle SQL", "REST API"],
        highlights: [
          "Automated financial reporting pipeline",
          "Oracle API integration layer",
          "Data validation & audit trail modules",
        ],
        github: null,
        demo: null,
      },
      {
        id: "tracklab",
        name: "Tracklab — Auth Hardening",
        tagline: "Security overhaul for laboratory tracking",
        description:
          "Diagnosed and resolved critical authentication & session-refresh vulnerabilities in PML's Tracklab system — a mission-critical application tracking laboratory samples in a biotech environment.",
        status: "Shipped",
        statusColor: "blue",
        period: "2025",
        tags: ["Auth", "Session Management", "Security", "Next.js"],
        highlights: [
          "Identified & patched auth token leakage",
          "Implemented silent token refresh flow",
          "Hardened middleware layer with role-based guards",
        ],
        github: null,
        demo: null,
      },
    ],
    skills: {
      frontend: [
        { name: "Next.js", level: 90 },
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Shadcn UI", level: 85 },
        { name: "Alpine.js", level: 70 },
        { name: ".NET Blazor", level: 65 },
      ],
      backend: [
        { name: ".NET Core (C#)", level: 72 },
        { name: "FastAPI", level: 68 },
        { name: "PostgreSQL", level: 70 },
        { name: "Oracle SQL", level: 65 },
      ],
      devops: [
        { name: "Git / GitHub", level: 88 },
        { name: "Docker", level: 68 },
        { name: "CI/CD", level: 72 },
        { name: "Ubuntu / Linux", level: 75 },
      ],
      testing: [
        { name: "Jest", level: 80 },
        { name: "Unit Testing", level: 78 },
        { name: "ESLint", level: 85 },
      ],
    },
    softSkills: [
      {
        title: "Growth Mindset",
        description:
          "Actively seeks challenges. Attended Dicoding Developer Conference 2026 and continuously upskills in Cloud and AI.",
        icon: "🌱",
      },
      {
        title: "Cross-Platform Adaptability",
        description:
          "Proven track record switching between .NET enterprise stacks and modern JS/React ecosystems without losing momentum.",
        icon: "⚡",
      },
      {
        title: "Challenge-Based Learning",
        description:
          "Solves real-world corporate problems independently in high-stakes healthcare environments at SCI/Kalbe.",
        icon: "🎯",
      },
      {
        title: "Minimalist Aesthetic",
        description:
          "Deeply values Human Interface Guidelines and purposeful design — reflected in every UI decision.",
        icon: "✦",
      },
      {
        title: "Quality Obsession",
        description:
          "Enforces strict ESLint, unit testing (Jest), and code review standards. 'Ship clean or don't ship.'",
        icon: "◎",
      },
      {
        title: "Async Collaboration",
        description:
          "Comfortable managing multiple concurrent projects (4 simultaneous) across distributed enterprise teams.",
        icon: "🔗",
      },
    ],
    milestones: [
      {
        date: "Apr 2026",
        title: "Dicoding Developer Conference",
        description:
          "Attended in Bandung to stay on the leading edge of Cloud architecture and emerging AI development patterns.",
        tag: "Learning",
        color: "accent",
      },
      {
        date: "Apr 2026",
        title: "KBIC Psychological Screening",
        description:
          "Completed internal screening at Kalbe Business Innovation Center — identified as a high-potential talent candidate.",
        tag: "Recognition",
        color: "green",
      },
      {
        date: "Jan 2026",
        title: "SmartAttendance Capstone Kickoff",
        description:
          "Began building an AI-driven student presence tracking system as final-year capstone project.",
        tag: "Project",
        color: "purple",
      },
      {
        date: "2025",
        title: "Joined Kalbe Farma Ecosystem",
        description:
          "Started as Frontend Developer Intern at SCI (Stem Cell and Cancer Institute), entering enterprise biotech engineering.",
        tag: "Career",
        color: "orange",
      },
      {
        date: "2023 — 2024",
        title: "11-Month Fullstack Internship",
        description:
          "Built end-to-end web applications at a PGRI office — laying a solid fullstack engineering foundation.",
        tag: "Career",
        color: "accent",
      },
    ],
    certifications: [
      {
        name: "Certification",
        issuer: "— Coming Soon —",
        date: "",
        status: "upcoming",
        description:
          "Currently pursuing relevant certifications to strengthen the engineering profile.",
      },
    ],
    moments: [
      { id: 1, title: "Deep Focus Workspace", category: "Productivity", description: "Minimal setup designed for long engineering sessions and deep focus." },
      { id: 2, title: "Jakarta Golden Hour", category: "Life", description: "The vibrant energy of Jakarta during sunset." },
      { id: 3, title: "Clean Code Philosophy", category: "Engineering", description: "Writing code for humans, not just machines. Constant refactoring." },
      { id: 4, title: "Late Night Debugging", category: "Process", description: "Quiet hours when complex bugs are finally solved." },
      { id: 5, title: "PENS Surabaya Campus", category: "Education", description: "Where my engineering foundation was built." },
    ],
    teamProjects: [
      {
        id: "team-1",
        name: "Enterprise Resource Planner",
        role: "Frontend Lead",
        teamSize: 5,
        description: "Collaborated with a cross-functional team of 5 to build a modular ERP system. Led the frontend architecture and established coding standards for the React application.",
        contribution: "Designed the state management architecture and core UI components.",
        tags: ["React", "Redux", "Material UI", "Team Lead"],
        period: "2024",
        members: [
          { name: "Alex Jones", github: "https://github.com/example1" },
          { name: "Sarah Miller", github: "https://github.com/example2" },
          { name: "Michael Chen", github: "https://github.com/example3" }
        ],
        demo: "#",
        github: "#"
      }
    ],
    ui: {
      viewWork: "View My Work →",
      getInTouch: "Get in Touch",
      scroll: "SCROLL",
      experience: "Experience",
      projects: "Selected Projects",
      skills: "Core Competencies",
      softSkills: "Soft Skills",
      milestones: "Milestones",
      certifications: "Certifications",
      contact: "Get in Touch",
      nav: {
        story: "Story",
        experience: "Experience",
        projects: "Projects",
        collaborations: "Collaborations",
        skills: "Skills",
        certifications: "Certifications",
        moments: "Moments",
        contact: "Contact"
      },
      contactDesc: "Have a question or a project in mind? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.",
      sendEmail: "Send an Email",
      connectLinkedin: "Connect on LinkedIn",
      rights: "All rights reserved.",
      comingSoon: "Coming Soon",
      inDevelopment: "In Development",
      shipped: "Shipped",
      heroGreeting1: "Hi",
      heroGreeting2: "I'm",
      heroGreeting3: "Akmal .",
      storyLabel: "The Journey",
      storyTitle1: "Building toward",
      storyTitle2: "world-class.",
      storyDesc: "Crafting code, chasing meaningful impact.",
      storyQuote: "Ship clean code, build lasting systems, and never stop growing.",
      storyQuoteAuthor: "— Core engineering philosophy",
      goalLabel: "Long-term Goal",
      eduLabel: "Education",
      eduTitle: "D3 Informatics Engineering · Semester 6",
      eduSub: "Politeknik Elektronika Negeri Surabaya (PENS)",
      expTitle1: "Where I've built,",
      expTitle2: "and what I've shipped.",
      expCurrent: "Current",
      expHide: "Hide",
      expShow: "Show",
      expSub: "sub-projects",
      projTitle1: "Things I've designed,",
      projTitle2: "built, and shipped.",
      projPrivate: "Private Repo",
      projDemo: "Live Demo ↗",
      skillsTitle1: "The craft behind",
      skillsTitle2: "the product.",
      skillsCat1: "Frontend",
      skillsCat2: "Backend",
      skillsCat3: "DevOps & Tools",
      skillsCat4: "Testing & Quality",
      contactTitle1: "Let's build",
      contactTitle2: "something great.",
      contactDesc1: "Whether you're a recruiter, a team looking for a frontend engineer, or just want to talk tech — my inbox is always open.",
      contactCopy: "Copy",
      contactCopied: "✓ Copied!",
      contactSend: "Send Email ↗",
      certTitle1: "Credentials & ",
      certTitle2: "Recognition",
      certSoon: "Soon",
      showMore: "Show More",
      showLess: "Show Less",
      collaborations: "Collaborations",
      collabTitle1: "Building in sync,",
      collabTitle2: "with great teams.",
      roleLabel: "Role",
      teamLabel: "Team size",
      membersLabel: "Team Members",
      moments: "Moments",
      momentsTitle1: "Capturing life,",
      momentsTitle2: "one frame at a time.",
    }
  },
  id: {
    personal: {
      name: "Akmal Bintang Budiawan",
      tagline: "Software Engineer",
      subtitle: "Membangun perangkat lunak yang bersih dan bermakna — dari Jakarta untuk dunia.",
      description:
        "Mahasiswa tingkat akhir Teknik Informatika di PENS. Saya merancang frontend tingkat perusahaan dan memecahkan masalah yang berarti — saat ini berkontribusi di bidang teknologi kesehatan di Kalbe Farma, dan menargetkan panggung teknologi global.",
      location: "Jakarta, Indonesia",
      email: "akmal@example.com",
      github: "https://github.com/akmal-bintang",
      linkedin: "https://linkedin.com/in/akmal-bintang",
      status: "Terbuka untuk peluang",
      philosophy: "Penggiat Clean Code & Praktisi Growth Mindset",
      goal: "Software Engineer Kelas Dunia · Ekosistem Teknologi Singapura 2031",
    },
    experiences: [
      {
        id: "sci",
        role: "Frontend Developer Intern",
        company: "SCI (Stem Cell and Cancer Institute)",
        parent: "PT Bifarma Adiluhung · Kalbe Farma Tbk",
        period: "2025 — Sekarang",
        location: "Jakarta, Indonesia",
        type: "Magang",
        highlight: true,
        description:
          "Beroperasi di dalam salah satu konglomerat farmasi terbesar di Indonesia, saya mengelola ekosistem multi-proyek yang kompleks — secara bersamaan merilis fitur di empat produk perusahaan di bidang kesehatan dan bioteknologi.",
        projects: [
          {
            name: "Bifarma",
            tech: ".NET / Oracle API",
            impact:
              "Merancang modul keuangan berbasis .NET dengan jalur pelaporan Oracle API otomatis.",
          },
          {
            name: "KDNA — KlikGen",
            tech: "Next.js / Tailwind CSS",
            impact:
              "Memimpin perombakan UI/UX penuh. Membangun ulang dasbor perusahaan dengan fokus pada kejelasan, kecepatan, dan pengalaman pengembang.",
          },
          {
            name: "PML — Tracklab",
            tech: "Auth & Session",
            impact:
              "Menyelesaikan kerentanan autentikasi dan penyegaran sesi kritis pada sistem pelacakan laboratorium.",
          },
          {
            name: "SCI — Strand",
            tech: "Jest / Performance",
            impact:
              "Mengimplementasikan pengujian unit (Jest) dari awal dan meningkatkan skor performa beranda.",
          },
        ],
        tags: ["Next.js", "TypeScript", ".NET", "Oracle SQL", "Jest", "CI/CD"],
      },
      {
        id: "pgri",
        role: "Fullstack Developer Intern",
        company: "Kantor PGRI",
        parent: "Sektor Pemerintahan / Pendidikan",
        period: "2023 — 2024",
        location: "Indonesia",
        type: "Magang · 11 bulan",
        highlight: false,
        description:
          "Terjun mendalam selama 11 bulan dalam pengembangan full-stack. Membangun alat internal dan aplikasi web dari awal hingga akhir — dari skema database hingga UI yang diterapkan — membangun fondasi rekayasa yang ketat.",
        projects: [],
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
      },
    ],
    projects: [
      {
        id: "smart-attendance",
        name: "SmartAttendance",
        tagline: "Pelacakan kehadiran bertenaga AI untuk kampus modern",
        description:
          "Proyek akhir — sistem kehadiran mahasiswa cerdas yang memanfaatkan AI untuk pengenalan wajah real-time dan analitik perilaku. Dibangun dengan fokus pada akurasi, privasi, dan skalabilitas institusional.",
        status: "Dalam Pengembangan",
        statusColor: "green",
        period: "Jan 2026 — Apr 2026",
        tags: ["AI / ML", "Next.js", "FastAPI", "PostgreSQL", "Python"],
        highlights: [
          "Pengenalan wajah real-time via computer vision",
          "Dasbor analitik pola perilaku",
          "Akses multi-peran: admin, dosen, mahasiswa",
          "RESTful API dengan backend FastAPI",
        ],
        github: "#",
        demo: "#",
      },
      {
        id: "klikgen",
        name: "KlikGen — Perombakan Dasbor",
        tagline: "Dasbor genomik perusahaan, didesain ulang",
        description:
          "Memimpin perombakan UI/UX secara menyeluruh pada dasbor perusahaan berfokus genomik di KDNA di bawah Kalbe Farma. Mengubah antarmuka lama menjadi pengalaman data yang bersih dan berperforma tinggi.",
        status: "Dirilis",
        statusColor: "blue",
        period: "2025",
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
        highlights: [
          "Perombakan penuh UI/UX dari sistem lama",
          "Arsitektur tabel data tingkat perusahaan",
          "Peningkatan performa muat dengan restrukturisasi pohon komponen",
          "Implementasi sistem desain dari awal",
        ],
        github: null,
        demo: null,
      },
      {
        id: "bifarma",
        name: "Modul Keuangan Bifarma",
        tagline: "Layanan .NET dengan integrasi Oracle API",
        description:
          "Merancang dan mengimplementasikan modul keuangan backend untuk PT Bifarma Adiluhung. Mengintegrasikan Oracle API untuk mengotomatisasi jalur pelaporan keuangan yang kompleks, mengurangi pekerjaan manual.",
        status: "Dirilis",
        statusColor: "blue",
        period: "2025",
        tags: [".NET Core", "C#", "Oracle SQL", "REST API"],
        highlights: [
          "Jalur pelaporan keuangan otomatis",
          "Lapisan integrasi Oracle API",
          "Modul validasi data & jejak audit",
        ],
        github: null,
        demo: null,
      },
      {
        id: "tracklab",
        name: "Tracklab — Penguatan Keamanan",
        tagline: "Perombakan keamanan untuk pelacakan laboratorium",
        description:
          "Mendiagnosis dan menyelesaikan kerentanan autentikasi & penyegaran sesi di sistem Tracklab PML — aplikasi kritis yang melacak sampel laboratorium di lingkungan bioteknologi.",
        status: "Dirilis",
        statusColor: "blue",
        period: "2025",
        tags: ["Auth", "Session Management", "Security", "Next.js"],
        highlights: [
          "Mengidentifikasi & menambal kebocoran token auth",
          "Mengimplementasikan alur penyegaran token tanpa suara",
          "Memperkuat lapisan middleware dengan penjagaan berbasis peran",
        ],
        github: null,
        demo: null,
      },
    ],
    skills: {
      frontend: [
        { name: "Next.js", level: 90 },
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Shadcn UI", level: 85 },
        { name: "Alpine.js", level: 70 },
        { name: ".NET Blazor", level: 65 },
      ],
      backend: [
        { name: ".NET Core (C#)", level: 72 },
        { name: "FastAPI", level: 68 },
        { name: "PostgreSQL", level: 70 },
        { name: "Oracle SQL", level: 65 },
      ],
      devops: [
        { name: "Git / GitHub", level: 88 },
        { name: "Docker", level: 68 },
        { name: "CI/CD", level: 72 },
        { name: "Ubuntu / Linux", level: 75 },
      ],
      testing: [
        { name: "Jest", level: 80 },
        { name: "Unit Testing", level: 78 },
        { name: "ESLint", level: 85 },
      ],
    },
    softSkills: [
      {
        title: "Growth Mindset",
        description:
          "Aktif mencari tantangan. Menghadiri Dicoding Developer Conference 2026 dan terus meningkatkan keahlian di bidang Cloud dan AI.",
        icon: "🌱",
      },
      {
        title: "Kemampuan Adaptasi Lintas Platform",
        description:
          "Rekam jejak terbukti beralih antara tumpukan perusahaan .NET dan ekosistem JS/React modern tanpa kehilangan momentum.",
        icon: "⚡",
      },
      {
        title: "Pembelajaran Berbasis Tantangan",
        description:
          "Memecahkan masalah korporat dunia nyata secara mandiri di lingkungan kesehatan berisiko tinggi di SCI/Kalbe.",
        icon: "🎯",
      },
      {
        title: "Estetika Minimalis",
        description:
          "Sangat menghargai Panduan Antarmuka Manusia dan desain yang bermakna — tercermin dalam setiap keputusan UI.",
        icon: "✦",
      },
      {
        title: "Obsesi Kualitas",
        description:
          "Menerapkan standar ESLint yang ketat, pengujian unit (Jest), dan ulasan kode. 'Rilis dengan bersih atau tidak sama sekali.'",
        icon: "◎",
      },
      {
        title: "Kolaborasi Asinkron",
        description:
          "Nyaman mengelola berbagai proyek serentak (4 sekaligus) di seluruh tim perusahaan yang terdistribusi.",
        icon: "🔗",
      },
    ],
    milestones: [
      {
        date: "Apr 2026",
        title: "Dicoding Developer Conference",
        description:
          "Hadir di Bandung untuk tetap berada di garis depan arsitektur Cloud dan pola pengembangan AI yang muncul.",
        tag: "Pembelajaran",
        color: "accent",
      },
      {
        date: "Apr 2026",
        title: "Skrining Psikologis KBIC",
        description:
          "Menyelesaikan skrining internal di Kalbe Business Innovation Center — diidentifikasi sebagai kandidat talenta berpotensi tinggi.",
        tag: "Penghargaan",
        color: "green",
      },
      {
        date: "Jan 2026",
        title: "Mulai Proyek Akhir SmartAttendance",
        description:
          "Mulai membangun sistem pelacakan kehadiran mahasiswa berbasis AI sebagai proyek capstone tahun terakhir.",
        tag: "Proyek",
        color: "purple",
      },
      {
        date: "2025",
        title: "Bergabung dengan Ekosistem Kalbe Farma",
        description:
          "Memulai sebagai Frontend Developer Intern di SCI (Stem Cell and Cancer Institute), memasuki rekayasa bioteknologi perusahaan.",
        tag: "Karir",
        color: "orange",
      },
      {
        date: "2023 — 2024",
        title: "Magang Fullstack 11-Bulan",
        description:
          "Membangun aplikasi web dari awal hingga akhir di kantor PGRI — meletakkan fondasi rekayasa fullstack yang kuat.",
        tag: "Karir",
        color: "accent",
      },
    ],
    certifications: [
      {
        name: "Sertifikasi",
        issuer: "— Segera Hadir —",
        date: "",
        status: "upcoming",
        description:
          "Saat ini sedang mengejar sertifikasi relevan untuk memperkuat profil rekayasa.",
      },
    ],
    moments: [
      { id: 1, title: "Ruang Kerja Fokus", category: "Produktivitas", description: "Setup minimalis yang dirancang untuk sesi rekayasa panjang dan fokus mendalam." },
      { id: 2, title: "Senja di Jakarta", category: "Kehidupan", description: "Energi Jakarta yang bersemangat saat matahari terbenam." },
      { id: 3, title: "Filosofi Kode Bersih", category: "Rekayasa", description: "Menulis kode untuk manusia, bukan sekadar mesin. Refactoring konstan." },
      { id: 4, title: "Debugging Larut Malam", category: "Proses", description: "Jam-jam tenang saat bug yang kompleks akhirnya terpecahkan." },
      { id: 5, title: "Kampus PENS Surabaya", category: "Pendidikan", description: "Tempat di mana fondasi rekayasa saya dibangun." },
    ],
    teamProjects: [
      {
        id: "team-1",
        name: "Enterprise Resource Planner",
        role: "Frontend Lead",
        teamSize: 5,
        description: "Berkolaborasi dengan tim lintas fungsi beranggotakan 5 orang untuk membangun sistem ERP modular. Memimpin arsitektur frontend dan menetapkan standar coding untuk aplikasi React.",
        contribution: "Merancang arsitektur manajemen state dan komponen UI inti.",
        tags: ["React", "Redux", "Material UI", "Team Lead"],
        period: "2024",
        members: [
          { name: "Alex Jones", github: "https://github.com/example1" },
          { name: "Sarah Miller", github: "https://github.com/example2" },
          { name: "Michael Chen", github: "https://github.com/example3" }
        ],
        demo: "#",
        github: "#"
      }
    ],
    ui: {
      viewWork: "Lihat Karya Saya →",
      getInTouch: "Hubungi Saya",
      scroll: "GULIR",
      experience: "Pengalaman",
      projects: "Proyek Pilihan",
      skills: "Kompetensi Inti",
      softSkills: "Keterampilan Non-Teknis",
      milestones: "Pencapaian",
      certifications: "Sertifikasi",
      contact: "Hubungi Saya",
      nav: {
        story: "Cerita",
        experience: "Pengalaman",
        projects: "Proyek",
        collaborations: "Kolaborasi",
        skills: "Keahlian",
        certifications: "Sertifikasi",
        moments: "Momen",
        contact: "Kontak"
      },
      contactDesc: "Punya pertanyaan atau proyek dalam pikiran? Jangan ragu untuk menghubungi. Saya selalu terbuka untuk mendiskusikan peluang dan kolaborasi baru.",
      sendEmail: "Kirim Email",
      connectLinkedin: "Terhubung di LinkedIn",
      rights: "Hak cipta dilindungi.",
      comingSoon: "Segera Hadir",
      inDevelopment: "Dalam Pengembangan",
      shipped: "Dirilis",
      heroGreeting1: "Halo,",
      heroGreeting2: "Saya",
      heroGreeting3: "Akmal .",
      storyLabel: "Perjalanan",
      storyTitle1: "Membangun menuju",
      storyTitle2: "kelas dunia.",
      storyDesc: "Merakit kode, mengejar dampak yang bermakna.",
      storyQuote: "Rilis kode bersih, bangun sistem yang bertahan lama, dan jangan pernah berhenti berkembang.",
      storyQuoteAuthor: "— Filosofi inti rekayasa",
      goalLabel: "Tujuan Jangka Panjang",
      eduLabel: "Pendidikan",
      eduTitle: "D3 Teknik Informatika · Semester 6",
      eduSub: "Politeknik Elektronika Negeri Surabaya (PENS)",
      expTitle1: "Tempat saya membangun,",
      expTitle2: "dan apa yang saya rilis.",
      expCurrent: "Saat Ini",
      expHide: "Sembunyikan",
      expShow: "Tampilkan",
      expSub: "sub-proyek",
      projTitle1: "Hal yang saya desain,",
      projTitle2: "bangun, dan rilis.",
      projPrivate: "Repositori Pribadi",
      projDemo: "Demo Langsung ↗",
      skillsTitle1: "Keahlian di balik",
      skillsTitle2: "produk yang dibuat.",
      skillsCat1: "Frontend",
      skillsCat2: "Backend",
      skillsCat3: "DevOps & Alat",
      skillsCat4: "Pengujian & Kualitas",
      contactTitle1: "Mari bangun",
      contactTitle2: "sesuatu yang hebat.",
      contactDesc1: "Apakah Anda seorang perekrut, tim yang mencari frontend engineer, atau sekadar ingin ngobrol seputar teknologi — kotak masuk saya selalu terbuka.",
      contactCopy: "Salin",
      contactCopied: "✓ Tersalin!",
      contactSend: "Kirim Email ↗",
      certTitle1: "Kredensial & ",
      certTitle2: "Penghargaan",
      certSoon: "Segera",
      showMore: "Tampilkan Lebih Banyak",
      showLess: "Tampilkan Lebih Sedikit",
      collaborations: "Kolaborasi Tim",
      collabTitle1: "Membangun dalam harmoni,",
      collabTitle2: "bersama tim hebat.",
      roleLabel: "Peran",
      teamLabel: "Ukuran tim",
      membersLabel: "Anggota Tim",
      moments: "Momen",
      momentsTitle1: "Mengabadikan hidup,",
      momentsTitle2: "frame demi frame.",
    }
  }
};
