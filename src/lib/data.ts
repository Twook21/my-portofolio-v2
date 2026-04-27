export const personal = {
  name: "Akmal Bintang Budiawan",
  tagline: "Software Engineer",
  subtitle: "Building clean, purposeful software — from Jakarta to the world.",
  description:
    "Final-year Informatics Engineering student at PENS. I architect enterprise-grade frontends and chase meaningful problems — currently contributing to healthcare tech at Kalbe Farma, and aiming for the global tech stage.",
  location: "Jakarta, Indonesia",
  email: "akmal@example.com",
  github: "https://github.com/akmal-bintang",
  linkedin: "https://linkedin.com/in/akmal-bintang",
  instagram: "https://instagram.com/akmalbintang_", // Placeholder
  status: "Open to opportunities",
  philosophy: "Clean Code Evangelist & Growth Mindset Practitioner",
  goal: "World-class Software Engineer · Singapore Tech Ecosystem 2031",
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
