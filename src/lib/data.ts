export const personal = {
  name: "Akmal Bintang Budiawan",
  tagline: "Software Engineer",
  subtitle: "Building clean, purposeful software — from Jakarta to the world.",
  description:
    "Software Developer bridging the gap between robust backend services and fluid, modern user interfaces. I specialize in the Next.js & .NET ecosystems, with a deep focus on quality-driven delivery and scalable architecture.",
  location: "Jakarta, Indonesia",
  email: "akmalbintang33@gmail.com",
  github: "https://github.com/akmal-bintang",
  linkedin: "https://www.linkedin.com/in/akmal-bintang-budiawan",
  instagram: "https://www.instagram.com/tw0ok_/", // Placeholder
  status: "Open to opportunities",
  philosophy: "Clean Code Evangelist & Growth Mindset Practitioner",
  goal: "Expert Software Engineer · Singapore Tech Ecosystem 2031",
};

export const experiences = [
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
];

export const projects = [
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
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    associatedWith: "PENS — Capstone Project",
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
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000",
    associatedWith: "SCI / Kalbe Farma",
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    associatedWith: "SCI / Kalbe Farma",
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
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000",
    associatedWith: "SCI / Kalbe Farma",
  },
];

export const skills = {
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
};

export const softSkills = [
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
];

export const milestones = [
  {
    date: "Apr 2026",
    title: "Dicoding Developer Conference",
    description: "Exploring modern Cloud architecture and emerging AI development patterns to stay ahead of the curve.",
    tag: "Continuous Learning",
    color: "accent",
  },
  {
    date: "Jan 2026",
    title: "Architecting SmartAttendance",
    description: "Engineered an automated presence tracking system for an external institution as my final-year capstone project. Focused on streamlining real-world operational workflows and ensuring high-fidelity data integrity.",
    tag: "Capstone Engineering",
    color: "purple",
  },
  {
    date: "2025 — Present",
    title: "Advancing to Kalbe’s IT Center (Bifarma)",
    description: "Handpicked to transition from SCI to PT. Bifarma Adiluhung—Kalbe’s centralized IT hub. After successfully delivering multidisciplinary systems for R&D, QA, and Production divisions at SCI, I now engineer group-wide enterprise projects, scaling my expertise from Frontend to Full-Stack architecture.",
    tag: "Strategic Career Advancement",
    color: "orange",
  },
  {
    date: "2025 — 2026",
    title: "Advanced Full-Stack Trainee (Asah & JIDA)",
    description: "Sharpened technical rigor through industry-aligned programs: Asah (Dicoding x Accenture) focused on AI-integrated backend and Jabar Digital Academy (JIDA) for scalable web fundamentals.",
    tag: "Competency Mastery",
    color: "green",
  },
  {
    date: "2024 — 2025",
    title: "11-Month Fullstack Internship (PGRI)",
    description: "Shipped end-to-end internal web applications, establishing a strong baseline in full-stack development and operational systems.",
    tag: "Building the Foundation",
    color: "accent",
  },
  {
    date: "2024",
    title: "Laravel Training at Gema Foundation",
    description: "Transitioned from static interfaces to server-side logic. Completed an intensive program where I built my very first database-driven web application.",
    tag: "Entering the Dynamic Web",
    color: "purple",
  },
  {
    date: "2023",
    title: "Mastering Web Fundamentals",
    description: "Initiated my software engineering journey during my first semester, mastering the core building blocks: HTML, CSS, and JavaScript.",
    tag: "The Starting Point",
    color: "green",
  },
];

export const certifications = [
  {
    name: "Certification",
    issuer: "— Coming Soon —",
    date: "",
    status: "upcoming",
    description:
      "Currently pursuing relevant certifications to strengthen the engineering profile.",
  },
];

export const moments = [
  {
    id: 1,
    title: "Deep Focus Workspace",
    description: "Where the magic happens. A minimal setup designed for long engineering sessions and deep focus.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    size: "large",
    category: "Productivity",
  },
  {
    id: 2,
    title: "Jakarta Golden Hour",
    description: "The city that never sleeps. Capturing the vibrant energy of Jakarta during sunset.",
    image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&q=80&w=800",
    size: "wide",
    category: "Life",
  },
  {
    id: 3,
    title: "Clean Code Philosophy",
    description: "Writing code for humans, not just machines. Constant refactoring and seeking elegance.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600",
    size: "small",
    category: "Engineering",
  },
  {
    id: 4,
    title: "Late Night Debugging",
    description: "Those quiet hours when the most complex bugs are finally solved.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
    size: "small",
    category: "Process",
  },
  {
    id: 5,
    title: "PENS Surabaya Campus",
    description: "The place where my engineering foundation was built. Proud to be part of the PENS community.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
    size: "tall",
    category: "Education",
  },
];
