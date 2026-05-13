"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useEffect, useRef, useState } from "react";
import FloatingSymbols from "./FloatingSymbols";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function SkillBadge({ name, color }: { name: string; color: string }) {
  return (
    <div
      style={{
        padding: "8px 16px",
        background: "var(--bg-tertiary)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        cursor: "default",
      }}
      className="skill-badge"
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = color;
        el.style.background = `color-mix(in srgb, ${color} 8%, var(--bg-tertiary))`;
        el.style.transform = "translateY(-2px)";
        el.style.boxShadow = `0 4px 12px color-mix(in srgb, ${color} 15%, transparent)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "var(--border)";
        el.style.background = "var(--bg-tertiary)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: color }} />
      <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-secondary)" }}>{name}</span>
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();
  const softRef = useRef<HTMLDivElement>(null);
  const [softInView, setSoftInView] = useState(false);

  useEffect(() => {
    if (!softRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSoftInView(true); },
      { threshold: 0.1 }
    );
    observer.observe(softRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    { label: t.ui.skillsCat1, data: t.skills.frontend, color: "var(--accent)" },
    { label: t.ui.skillsCat2, data: t.skills.backend, color: "var(--green)" },
    { label: t.ui.skillsCat3, data: t.skills.devops, color: "var(--orange)" },
    { label: t.ui.skillsCat4, data: t.skills.testing, color: "var(--purple)" },
  ];

  const techLogos = [
    { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: ".NET Core", url: "https://cdn.simpleicons.org/dotnet/512BD4" },
    { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Docker", url: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Jest", url: "https://cdn.simpleicons.org/jest/C21325" },
    { name: "GitHub", url: "https://cdn.simpleicons.org/github/white" },
    { name: "FastAPI", url: "https://cdn.simpleicons.org/fastapi/05998B" },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "120px 20px",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
      className="skills-section"
    >
      <div className="grid-pattern" />
      <FloatingSymbols density={10} />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <span className="section-label">{t.ui.skills}</span>
          <h2
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginTop: "16px"
            }}
          >
            {t.ui.skillsTitle1}
            <br />
            <span style={{ color: "var(--text-tertiary)", fontWeight: 700 }}>
              {t.ui.skillsTitle2}
            </span>
          </h2>
        </div>

        {/* Infinite Tech Marquee */}
        <div
          className="marquee-container"
          style={{
            marginBottom: "100px",
            opacity: inView ? 1 : 0,
            transition: "opacity 1s ease",
            background: "rgba(128, 128, 128, 0.03)",
            border: "1px solid rgba(128, 128, 128, 0.08)",
            borderRadius: "100px",
            padding: "20px 0",
          }}
        >
          <div className="marquee-content">
            {[...techLogos, ...techLogos].map((logo, i) => (
              <div key={i} className="marquee-item">
                <img
                  src={logo.url}
                  alt={logo.name}
                  style={{
                    height: "32px",
                    width: "auto",
                    filter: "grayscale(1) brightness(1.5)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0) brightness(1)";
                    e.currentTarget.style.transform = "scale(1.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(1) brightness(1.5)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-tertiary)", letterSpacing: "0.05em" }}>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical skill cards */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "100px",
          }}
          className="skills-grid"
        >
          {categories.map((cat, catIdx) => (
            <div
              key={cat.label}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "28px",
                padding: "36px",
                boxShadow: "var(--shadow-sm)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(30px) scale(0.96)",
                transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${catIdx * 0.1}s`,
              }}
              className="skill-category-card"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
                <div
                  style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    background: `color-mix(in srgb, ${cat.color} 12%, transparent)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
                </div>
                <span
                  style={{
                    fontSize: "12px", fontWeight: 800,
                    color: "var(--text-tertiary)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.label}
                </span>
              </div>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {cat.data.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    color={cat.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "80px" }}>
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            <span className="section-label">{t.ui.softSkills}</span>
          </div>
          
          <div
            ref={softRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "20px",
            }}
            className="soft-skills-grid"
          >
            {t.softSkills.map((skill, idx) => (
              <div
                key={skill.title}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "24px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  boxShadow: "var(--shadow-sm)",
                  opacity: softInView ? 1 : 0,
                  transform: softInView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${idx * 0.08}s`,
                }}
                className="soft-skill-card"
              >
                <div style={{ 
                  width: "56px", height: "56px", 
                  borderRadius: "16px", 
                  background: "var(--bg-tertiary)", 
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "32px",
                  boxShadow: "inset 0 0 12px rgba(0,0,0,0.05)"
                }}>
                  {skill.icon}
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "18px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "10px", letterSpacing: "-0.01em" }}>
                    {skill.title}
                  </span>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 500 }}>
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .skill-category-card:hover {
          border-color: var(--border-hover) !important;
          box-shadow: var(--shadow-lg) !important;
          transform: translateY(-4px) scale(1.02) !important;
        }
        .soft-skill-card:hover {
          border-color: var(--accent-soft) !important;
          box-shadow: var(--shadow-md) !important;
          transform: translateY(-4px) !important;
        }
        .marquee-container {
          overflow: hidden;
          user-select: none;
          display: flex;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .marquee-content {
          display: flex;
          gap: 80px;
          animation: scroll 45s linear infinite;
          padding: 10px 0;
        }
        .marquee-item {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .skills-section { padding: 80px 16px !important; }
          .marquee-content { gap: 40px; animation-duration: 35s; }
        }
        @media (max-width: 640px) {
          .skills-grid, .soft-skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
