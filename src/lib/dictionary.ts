export const dictionary = {
  en: {
    personal: {
      name: "Akmal Bintang Budiawan",
      tagline: "Software Engineer",
      subtitle: "Building clean, purposeful software — from Jakarta to the world.",
      description:
        "Final-year Informatics Engineering student at PENS. I architect enterprise-grade frontends and chase meaningful problems — currently contributing to healthcare tech at Kalbe Farma, and aiming for the global tech stage.",
      location: "Jakarta, Indonesia",
      email: "akmalbintang33@gmail.com",
      github: "https://github.com/akmal-bintang",
      linkedin: "https://linkedin.com/in/akmal-bintang",
      status: "Open to opportunities",
      philosophy: "Clean Code Evangelist & Growth Mindset Practitioner",
      goal: "World-class Software Engineer · Singapore Tech Ecosystem 2031",
    },
    experiences: [
      {
        id: "bifarma",
        role: "Full-Stack Developer",
        company: "PT Bifarma Adiluhung",
        parent: "Kalbe Farma Tbk",
        period: "Mar 2026 — Present",
        location: "Pulogadung, East Jakarta",
        type: "Internship",
        highlight: true,
        logo: "/logo-experience/bfa.png",
        description:
          "Developed scalable backend services and modernized internal dashboards within an enterprise financial management ecosystem at one of Indonesia's largest pharma conglomerates.",
        projects: [
          {
            name: "Fullstack Development",
            tech: ".NET / Oracle SQL",
            impact:
              "Developed and optimized scalable backend services and APIs to support enterprise-level financial management systems.",
          },
          {
            name: "UI/UX Modernization",
            tech: "Next.js / Blazor",
            impact:
              "Led the redesign and modernization of internal dashboards, significantly improving user navigation and mobile responsiveness.",
          },
          {
            name: "Quality-Driven Delivery",
            tech: "Clean Code / Jest",
            impact:
              "Consistently delivered high-quality features by implementing Clean Code principles and ensuring reliability through Unit Testing.",
          },
          {
            name: "System Optimization",
            tech: "Auth & Session",
            impact:
              "Identified and resolved critical technical issues, including authentication and session management, to ensure system stability.",
          },
        ],
        tags: [".NET Core", "Oracle SQL", "Next.js", "Blazor", "Jest", "Clean Code"],
      },
      {
        id: "sci",
        role: "Front-End Developer",
        company: "Stem Cell and Cancer Institute (SCI)",
        parent: "Kalbe Farma Tbk",
        period: "Sep 2025 — Mar 2026",
        location: "Pulomas, East Jakarta",
        type: "Internship",
        highlight: false,
        logo: "/logo-experience/sci.png",
        description:
          "Built robust R&D-focused web applications with modular architecture and interactive analytical dashboards for healthcare research.",
        projects: [
          {
            name: "R&D Web Application",
            tech: "Next.js 15 / Redux",
            impact:
              "Developed a robust R&D-focused application using Tailwind CSS and Shadcn UI to support integrated data management.",
          },
          {
            name: "Modular Architecture",
            tech: "Scalability",
            impact:
              "Implemented a feature-based, modular architecture to ensure scalability and long-term maintainability.",
          },
          {
            name: "Analytical Dashboards",
            tech: "TanStack Table",
            impact:
              "Built interactive and efficient data tables to support analytical dashboards and operational insights.",
          },
          {
            name: "Cross-Functional Collab",
            tech: "SCI & Kalgen DNA",
            impact:
              "Collaborated with teams to deliver an integrated system supporting research, quality analysis, and operations.",
          },
        ],
        tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Redux", "TanStack Table"],
      },
      {
        id: "dicoding",
        role: "Full‑Stack Web Developer Trainee",
        company: "Asah led by Dicoding",
        parent: "Accenture Collaboration",
        period: "Aug 2025 — Jan 2026",
        location: "Remote",
        type: "Trainee",
        highlight: false,
        logo: "/logo-experience/asah.png",
        description:
          "Intensive industry-aligned training focused on Front-End, Back-End with AI, and Cloud fundamentals in collaboration with Accenture.",
        projects: [
          {
            name: "AI Learning Path",
            tech: "Front-End & Back-End",
            impact:
              "Completed the Front‑End Web & Back‑End with AI learning path mentored by Accenture.",
          },
          {
            name: "Modern JS Stack",
            tech: "Node.js / AI",
            impact:
              "Built web and back-end components using modern JavaScript tools and integrated AI/Cloud fundamentals.",
          },
        ],
        tags: ["Node.js", "Git", "JavaScript", "AI", "Cloud"],
      },
      {
        id: "jabar-digital",
        role: "Full‑Stack Web Developer Trainee",
        company: "Jabar Istimewa Digital Academy",
        parent: "BNSP Certification",
        period: "Mar 2025 — Aug 2025",
        location: "Remote",
        type: "Trainee",
        highlight: false,
        logo: "/logo-experience/jida.png",
        description:
          "Completed a structured full-stack program with industry-oriented learning and earned BNSP competency recognition.",
        projects: [
          {
            name: "Full-Stack Program",
            tech: "Project-Based",
            impact:
              "Completed a structured full‑stack web development program with industry‑oriented learning.",
          },
          {
            name: "Competency Recognition",
            tech: "BNSP Certification",
            impact:
              "Earned formal competency recognition as a BNSP Web Junior Programmer.",
          },
        ],
        tags: ["JavaScript", "TypeScript", "BNSP", "Fullstack"],
      },
      {
        id: "pgri",
        role: "Full-Stack Web Developer",
        company: "PGRI",
        parent: "Education Sector",
        period: "Oct 2024 — Aug 2025",
        location: "Bandung, West Java",
        type: "Internship",
        highlight: false,
        logo: "/logo-experience/pgri.png",
        description:
          "Developed and maintained the main organization website and built internal efficiency tools using the Laravel framework.",
        projects: [
          {
            name: "Website Maintenance",
            tech: "Performance",
            impact:
              "Developed and maintained the main website, ensuring optimal performance and user experience.",
          },
          {
            name: "Internal Applications",
            tech: "Laravel",
            impact:
              "Built systems like attendance and document management using Laravel, enhancing work efficiency.",
          },
        ],
        tags: ["Laravel", "PHP", "MySQL", "Git"],
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
        associatedWith: "PENS — Capstone Project",
        associatedLogo: "/logo-experience/jida.png",
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
        associatedWith: "SCI / Kalbe Farma",
        associatedLogo: "/logo-experience/sci.png",
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
        associatedWith: "SCI / Kalbe Farma",
        associatedLogo: "/logo-experience/bfa.png",
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
        associatedWith: "SCI / Kalbe Farma",
        associatedLogo: "/logo-experience/sci.png",
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
        name: "Industry Professional Credentials Track – IBM Front-End Developer",
        issuer: "Arizona State University",
        date: "Feb 2026",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Arizona_State_University_logo.svg/1200px-Arizona_State_University_logo.svg.png",
        skills: ["Front-End Development"],
        link: "#"
      },
      {
        name: "Front-End Web & Back-end Developer",
        issuer: "Asah led by Dicoding",
        date: "Jan 2026",
        id: "ASAH/GRAD/XXVI-01/F123D5Y0133",
        logo: "/logo-experience/asah.png",
        skills: ["JavaScript", "Front-End Development"],
        link: "#"
      },
      {
        name: "IBM Front-End Developer",
        issuer: "IBM",
        date: "Jan 2026",
        id: "DTKKFQCJQIFI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
        skills: ["React.js", "Front-End Development"],
        link: "#"
      },
      {
        name: "Cloud Native, DevOps, Agile & NoSQL Essentials",
        issuer: "Coursera",
        date: "Jan 2026",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png",
        skills: ["Cloud Native", "DevOps"],
        link: "#"
      },
      {
        name: "React JS - Web Frontend Development",
        issuer: "SanberCode",
        date: "Dec 2025",
        id: "48732/828/SNBR/BOOTCAMP/XII/2025",
        logo: "https://sanbercode.com/assets/img/logo-sanber-transparent.png",
        skills: ["JavaScript", "React.js"],
        link: "#"
      },
      {
        name: "Certificate Of Competence - Web Developer",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        date: "Nov 2024 — Nov 2027",
        id: "13231353",
        logo: "https://upload.wikimedia.org/wikipedia/id/thumb/a/a2/Logo_BNSP.png/220px-Logo_BNSP.png",
        skills: ["Tailwind CSS", "Debugging"],
        link: "#"
      },
      {
        name: "Certificate Of Competence - Junior Web Programmer",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        date: "Sep 2025 — Sep 2028",
        id: "14357791",
        logo: "https://upload.wikimedia.org/wikipedia/id/thumb/a/a2/Logo_BNSP.png/220px-Logo_BNSP.png",
        skills: ["User Interface Design", "Structured Programming"],
        link: "#"
      },
      {
        name: "Fullstack Web Programming",
        issuer: "Jabar Istimewa Digital Academy",
        date: "Aug 2025",
        logo: "/logo-experience/jida.png",
        skills: ["NextAuth", "Redux.js"],
        link: "#"
      },
      {
        name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
        issuer: "Amazon Web Services (AWS)",
        date: "Jun 2025",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
        skills: ["Cloud Computing"],
        link: "#"
      }
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
        id: "findme-app",
        name: "FindMe-App",
        role: "Frontend Lead",
        teamSize: 4,
        description: "A location-based community application designed to connect people with local services and real-time community updates. Built with a focus on high-performance map integration and real-time data sync.",
        contribution: "Developed the core map interface and state management for real-time location updates.",
        logo: "📍",
        tags: ["React Native", "Google Maps API", "Firebase"],
        period: "2025",
        members: [
          { name: "Team Member 1", github: "#" },
          { name: "Team Member 2", github: "#" }
        ],
        demo: "#",
        github: "#"
      },
      {
        id: "insomnia-space",
        name: "Insomnia-Space",
        role: "Core Contributor",
        teamSize: 6,
        logo: "🌌",
        description: "A collaborative workspace for developers to share API collections and documentation. Active collaborator on 5 repositories within the organization, maintaining core utility libraries.",
        contribution: "Implemented the collaborative real-time editor and organized organization-wide documentation standards.",
        tags: ["Next.js", "Socket.io", "Redis"],
        period: "2024 — 2025",
        members: [
          { name: "Project Lead", github: "#" },
          { name: "Backend Engineer", github: "#" }
        ],
        demo: "#",
        github: "#"
      },
      {
        id: "kala-esok",
        name: "Kala-Esok",
        role: "Frontend Developer",
        teamSize: 3,
        logo: "⏳",
        description: "A productivity and time-management application focused on long-term goal tracking and visual timeline planning. Features a unique 'future-vision' dashboard.",
        contribution: "Crafted the complex timeline visualization components and interactive goal-setting UI.",
        tags: ["Vue.js", "D3.js", "Tailwind CSS"],
        period: "2024",
        members: [
          { name: "Designer", github: "#" },
          { name: "DevOps", github: "#" }
        ],
        demo: "#",
        github: "#"
      },
      {
        id: "wastego",
        name: "WasteGo",
        role: "Fullstack Developer",
        teamSize: 5,
        logo: "♻️",
        description: "An eco-tech platform aimed at optimizing waste collection and recycling workflows. Connects households with local recycling centers through a gamified interface.",
        contribution: "Built the rewards system backend and integrated the mobile-responsive user dashboard.",
        tags: ["React", "Node.js", "PostgreSQL"],
        period: "2024",
        members: [
          { name: "Contributor 1", github: "#" },
          { name: "Contributor 2", github: "#" }
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
      issued: "Issued",
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
      email: "akmalbintang33@gmail.com",
      github: "https://github.com/akmal-bintang",
      linkedin: "https://linkedin.com/in/akmal-bintang",
      status: "Terbuka untuk peluang",
      philosophy: "Penggiat Clean Code & Praktisi Growth Mindset",
      goal: "Software Engineer Kelas Dunia · Ekosistem Teknologi Singapura 2031",
    },
    experiences: [
      {
        id: "bifarma",
        role: "Full-Stack Developer",
        company: "PT Bifarma Adiluhung",
        parent: "Kalbe Farma Tbk",
        period: "Mar 2026 — Sekarang",
        location: "Pulogadung, Jakarta Timur",
        type: "Magang",
        highlight: true,
        logo: "/logo-experience/bfa.png",
        description:
          "Mengembangkan layanan backend yang skalabel dan memodernisasi dasbor internal dalam ekosistem manajemen keuangan perusahaan di salah satu konglomerat farmasi terbesar di Indonesia.",
        projects: [
          {
            name: "Fullstack Development",
            tech: ".NET / Oracle SQL",
            impact:
              "Mengembangkan dan mengoptimalkan layanan backend dan API yang skalabel untuk mendukung sistem manajemen keuangan perusahaan.",
          },
          {
            name: "Modernisasi UI/UX",
            tech: "Next.js / Blazor",
            impact:
              "Memimpin desain ulang dan modernisasi dasbor internal, secara signifikan meningkatkan navigasi pengguna dan responsivitas seluler.",
          },
          {
            name: "Pengiriman Berorientasi Kualitas",
            tech: "Clean Code / Jest",
            impact:
              "Konsisten mengirimkan fitur berkualitas tinggi dengan menerapkan prinsip Clean Code dan memastikan keandalan melalui Unit Testing.",
          },
          {
            name: "Optimalisasi Sistem",
            tech: "Autentikasi & Sesi",
            impact:
              "Mengidentifikasi dan menyelesaikan masalah teknis kritis, termasuk manajemen autentikasi dan sesi, untuk memastikan stabilitas sistem.",
          },
        ],
        tags: [".NET Core", "Oracle SQL", "Next.js", "Blazor", "Jest", "Clean Code"],
      },
      {
        id: "sci",
        role: "Front-End Developer",
        company: "Stem Cell and Cancer Institute (SCI)",
        parent: "Kalbe Farma Tbk",
        period: "Sep 2025 — Mar 2026",
        location: "Pulomas, Jakarta Timur",
        type: "Magang",
        highlight: false,
        logo: "/logo-experience/sci.png",
        description:
          "Membangun aplikasi web yang berfokus pada Litbang (R&D) dengan arsitektur modular dan dasbor analitik interaktif untuk penelitian kesehatan.",
        projects: [
          {
            name: "Aplikasi Web R&D",
            tech: "Next.js 15 / Redux",
            impact:
              "Mengembangkan aplikasi berfokus R&D yang tangguh menggunakan Tailwind CSS dan Shadcn UI untuk mendukung manajemen data terintegrasi.",
          },
          {
            name: "Arsitektur Modular",
            tech: "Skalabilitas",
            impact:
              "Mengimplementasikan arsitektur modular berbasis fitur untuk memastikan skalabilitas dan kemudahan pemeliharaan jangka panjang.",
          },
          {
            name: "Dasbor Analitik",
            tech: "TanStack Table",
            impact:
              "Membangun tabel data yang interaktif dan efisien untuk mendukung dasbor analitik dan wawasan operasional.",
          },
          {
            name: "Kolaborasi Lintas Fungsi",
            tech: "SCI & Kalgen DNA",
            impact:
              "Berkolaborasi dengan tim untuk menghadirkan sistem terintegrasi yang mendukung penelitian, analisis kualitas, dan operasi.",
          },
        ],
        tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Redux", "TanStack Table"],
      },
      {
        id: "dicoding",
        role: "Full‑Stack Web Developer Trainee",
        company: "Asah led by Dicoding",
        parent: "Kolaborasi Accenture",
        period: "Agu 2025 — Jan 2026",
        location: "Daring (Remote)",
        type: "Trainee",
        highlight: false,
        logo: "/logo-experience/asah.png",
        description:
          "Pelatihan intensif yang selaras dengan industri yang berfokus pada Front-End, Back-End dengan AI, dan dasar-dasar Cloud bekerja sama dengan Accenture.",
        projects: [
          {
            name: "Jalur Belajar AI",
            tech: "Front-End & Back-End",
            impact:
              "Menyelesaikan jalur belajar Front‑End Web & Back‑End dengan AI yang dimentori oleh Accenture.",
          },
          {
            name: "Stack JS Modern",
            tech: "Node.js / AI",
            impact:
              "Membangun komponen web dan backend menggunakan alat JavaScript modern dan mengintegrasikan dasar-dasar AI/Cloud.",
          },
        ],
        tags: ["Node.js", "Git", "JavaScript", "AI", "Cloud"],
      },
      {
        id: "jabar-digital",
        role: "Full‑Stack Web Developer Trainee",
        company: "Jabar Istimewa Digital Academy",
        parent: "Sertifikasi BNSP",
        period: "Mar 2025 — Agu 2025",
        location: "Daring (Remote)",
        type: "Trainee",
        highlight: false,
        logo: "/logo-experience/jida.png",
        description:
          "Menyelesaikan program full-stack terstruktur dengan pembelajaran berorientasi industri dan mendapatkan pengakuan kompetensi BNSP.",
        projects: [
          {
            name: "Program Full-Stack",
            tech: "Berbasis Proyek",
            impact:
              "Menyelesaikan program pengembangan web full-stack terstruktur dengan pembelajaran berorientasi industri.",
          },
          {
            name: "Pengakuan Kompetensi",
            tech: "Sertifikasi BNSP",
            impact:
              "Mendapatkan pengakuan kompetensi formal sebagai BNSP Web Junior Programmer.",
          },
        ],
        tags: ["JavaScript", "TypeScript", "BNSP", "Fullstack"],
      },
      {
        id: "pgri",
        role: "Full-Stack Web Developer",
        company: "PGRI",
        parent: "Sektor Pendidikan",
        period: "Okt 2024 — Agu 2025",
        location: "Bandung, Jawa Barat",
        type: "Magang",
        highlight: false,
        logo: "/logo-experience/pgri.png",
        description:
          "Mengembangkan dan mengelola situs web utama organisasi serta membangun alat efisiensi internal menggunakan framework Laravel.",
        projects: [
          {
            name: "Pemeliharaan Situs Web",
            tech: "Performa",
            impact:
              "Mengembangkan dan mengelola situs web utama, memastikan performa dan pengalaman pengguna yang optimal.",
          },
          {
            name: "Aplikasi Internal",
            tech: "Laravel",
            impact:
              "Membangun sistem seperti absensi dan manajemen dokumen menggunakan Laravel, meningkatkan efisiensi kerja.",
          },
        ],
        tags: ["Laravel", "PHP", "MySQL", "Git"],
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
        associatedWith: "PENS — Proyek Akhir",
        associatedLogo: "/logo-experience/jida.png",
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
        associatedWith: "SCI / Kalbe Farma",
        associatedLogo: "/logo-experience/sci.png",
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
        associatedWith: "SCI / Kalbe Farma",
        associatedLogo: "/logo-experience/bfa.png",
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
        associatedWith: "SCI / Kalbe Farma",
        associatedLogo: "/logo-experience/sci.png",
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
        name: "Industry Professional Credentials Track – IBM Front-End Developer",
        issuer: "Arizona State University",
        date: "Feb 2026",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Arizona_State_University_logo.svg/1200px-Arizona_State_University_logo.svg.png",
        skills: ["Front-End Development"],
        link: "#"
      },
      {
        name: "Front-End Web & Back-end Developer",
        issuer: "Asah led by Dicoding",
        date: "Jan 2026",
        id: "ASAH/GRAD/XXVI-01/F123D5Y0133",
        logo: "/logo-experience/asah.png",
        skills: ["JavaScript", "Front-End Development"],
        link: "#"
      },
      {
        name: "IBM Front-End Developer",
        issuer: "IBM",
        date: "Jan 2026",
        id: "DTKKFQCJQIFI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
        skills: ["React.js", "Front-End Development"],
        link: "#"
      },
      {
        name: "Cloud Native, DevOps, Agile & NoSQL Essentials",
        issuer: "Coursera",
        date: "Jan 2026",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png",
        skills: ["Cloud Native", "DevOps"],
        link: "#"
      },
      {
        name: "React JS - Web Frontend Development",
        issuer: "SanberCode",
        date: "Des 2025",
        id: "48732/828/SNBR/BOOTCAMP/XII/2025",
        logo: "https://sanbercode.com/assets/img/logo-sanber-transparent.png",
        skills: ["JavaScript", "React.js"],
        link: "#"
      },
      {
        name: "Certificate Of Competence - Web Developer",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        date: "Nov 2024 — Nov 2027",
        id: "13231353",
        logo: "https://upload.wikimedia.org/wikipedia/id/thumb/a/a2/Logo_BNSP.png/220px-Logo_BNSP.png",
        skills: ["Tailwind CSS", "Debugging"],
        link: "#"
      },
      {
        name: "Certificate Of Competence - Junior Web Programmer",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        date: "Sep 2025 — Sep 2028",
        id: "14357791",
        logo: "https://upload.wikimedia.org/wikipedia/id/thumb/a/a2/Logo_BNSP.png/220px-Logo_BNSP.png",
        skills: ["User Interface Design", "Structured Programming"],
        link: "#"
      },
      {
        name: "Fullstack Web Programming",
        issuer: "Jabar Istimewa Digital Academy",
        date: "Agu 2025",
        logo: "/logo-experience/jida.png",
        skills: ["NextAuth", "Redux.js"],
        link: "#"
      },
      {
        name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
        issuer: "Amazon Web Services (AWS)",
        date: "Jun 2025",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
        skills: ["Cloud Computing"],
        link: "#"
      }
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
        id: "findme-app",
        name: "FindMe-App",
        role: "Frontend Lead",
        teamSize: 4,
        description: "Aplikasi komunitas berbasis lokasi yang dirancang untuk menghubungkan orang dengan layanan lokal dan pembaruan komunitas secara real-time. Dibangun dengan fokus pada integrasi peta berperforma tinggi dan sinkronisasi data real-time.",
        contribution: "Mengembangkan antarmuka peta inti dan manajemen state untuk pembaruan lokasi secara real-time.",
        logo: "📍",
        tags: ["React Native", "Google Maps API", "Firebase"],
        period: "2025",
        members: [
          { name: "Anggota Tim 1", github: "#" },
          { name: "Anggota Tim 2", github: "#" }
        ],
        demo: "#",
        github: "#"
      },
      {
        id: "insomnia-space",
        name: "Insomnia-Space",
        role: "Kontributor Inti",
        teamSize: 6,
        logo: "🌌",
        description: "Ruang kerja kolaboratif bagi pengembang untuk berbagi koleksi API dan dokumentasi. Kolaborator aktif di 5 repositori dalam organisasi, memelihara pustaka utilitas inti.",
        contribution: "Mengimplementasikan editor kolaboratif real-time dan mengatur standar dokumentasi di seluruh organisasi.",
        tags: ["Next.js", "Socket.io", "Redis"],
        period: "2024 — 2025",
        members: [
          { name: "Project Lead", github: "#" },
          { name: "Backend Engineer", github: "#" }
        ],
        demo: "#",
        github: "#"
      },
      {
        id: "kala-esok",
        name: "Kala-Esok",
        role: "Frontend Developer",
        teamSize: 3,
        logo: "⏳",
        description: "Aplikasi produktivitas dan manajemen waktu yang berfokus pada pelacakan tujuan jangka panjang dan perencanaan garis waktu visual. Menampilkan dasbor 'future-vision' yang unik.",
        contribution: "Membangun komponen visualisasi garis waktu yang kompleks dan UI pengaturan tujuan yang interaktif.",
        tags: ["Vue.js", "D3.js", "Tailwind CSS"],
        period: "2024",
        members: [
          { name: "Desainer", github: "#" },
          { name: "DevOps", github: "#" }
        ],
        demo: "#",
        github: "#"
      },
      {
        id: "wastego",
        name: "WasteGo",
        role: "Fullstack Developer",
        teamSize: 5,
        logo: "♻️",
        description: "Platform teknologi ramah lingkungan yang bertujuan untuk mengoptimalkan pengumpulan sampah dan alur kerja daur ulang. Menghubungkan rumah tangga dengan pusat daur ulang lokal melalui antarmuka yang digamifikasi.",
        contribution: "Membangun backend sistem poin dan mengintegrasikan dasbor pengguna yang responsif seluler.",
        tags: ["React", "Node.js", "PostgreSQL"],
        period: "2024",
        members: [
          { name: "Kontributor 1", github: "#" },
          { name: "Kontributor 2", github: "#" }
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
      issued: "Diterbitkan",
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
