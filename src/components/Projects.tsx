"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.08) {
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

function use3DTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
    el.style.boxShadow = "var(--shadow-lg)";
  };
  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
    el.style.boxShadow = "var(--shadow-sm)";
  };
  return { ref, handleMouseMove, handleMouseLeave };
}

const statusColorMap: Record<string, string> = {
  green: "var(--green)", blue: "var(--accent)", orange: "var(--orange)",
};
const statusSoftMap: Record<string, string> = {
  green: "var(--green-soft)", blue: "var(--accent-soft)", orange: "var(--orange-soft)",
};

function ProjectCard({ project, idx, inView }: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any; idx: number; inView: boolean;
}) {
  const { t } = useLanguage();
  const { ref, handleMouseMove, handleMouseLeave } = use3DTilt();

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: "36px",
        display: "flex", flexDirection: "column",
        boxShadow: "var(--shadow-sm)",
        opacity: inView ? 1 : 0,
        animation: inView
          ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${idx * 0.12}s both`
          : "none",
        willChange: "transform",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        position: "relative",
        overflow: "hidden",
      }}
      className="project-card-inner"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-hover)";
      }}
      onMouseLeave={(e) => {
        handleMouseLeave();
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Status */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
        <span
          style={{
            padding: "5px 12px",
            borderRadius: "100px",
            fontSize: "11px", fontWeight: 700,
            color: statusColorMap[project.statusColor],
            background: statusSoftMap[project.statusColor],
            letterSpacing: "0.05em",
            display: "flex", alignItems: "center", gap: "6px",
          }}
        >
          {project.status === "In Development" && (
            <span
              style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: "var(--green)", display: "inline-block",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
          )}
          {project.status === "In Development" ? t.ui.inDevelopment : project.status === "Shipped" ? t.ui.shipped : project.status}
        </span>
        <span style={{ fontSize: "12px", color: "var(--text-tertiary)", fontWeight: 600 }}>
          {project.period}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "22px", fontWeight: 800,
          letterSpacing: "-0.02em", color: "var(--text-primary)",
          marginBottom: "6px", lineHeight: 1.2,
        }}
      >
        {project.name}
      </h3>
      <p style={{ fontSize: "14px", color: "var(--accent)", fontWeight: 600, marginBottom: "16px" }}>
        {project.tagline}
      </p>
      <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "22px" }}>
        {project.description}
      </p>

      {/* Highlights */}
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", marginBottom: "24px" }}>
        {project.highlights.map((h: string, hi: number) => (
          <li
            key={h}
            style={{
              fontSize: "13px", color: "var(--text-secondary)",
              display: "flex", gap: "10px", alignItems: "flex-start",
              opacity: inView ? 1 : 0,
              animation: inView ? `slideInLeft 0.4s ease ${idx * 0.1 + hi * 0.06 + 0.3}s both` : "none",
            }}
          >
            <span
              style={{
                color: "var(--green)", flexShrink: 0, marginTop: "1px",
                fontWeight: 700,
              }}
            >
              ✓
            </span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "28px", flex: 1 }}>
        {project.tags.map((tag: string, ti: number) => (
          <span
            key={tag}
            style={{
              padding: "4px 12px",
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border)",
              borderRadius: "100px",
              fontSize: "11px", fontWeight: 600, color: "var(--text-secondary)",
              transition: "all 0.2s ease",
              animation: inView ? `badgePop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${idx * 0.1 + ti * 0.05 + 0.4}s both` : "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLSpanElement).style.background = "var(--accent-soft)";
              (e.currentTarget as HTMLSpanElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLSpanElement).style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLSpanElement).style.background = "var(--bg-tertiary)";
              (e.currentTarget as HTMLSpanElement).style.color = "var(--text-secondary)";
              (e.currentTarget as HTMLSpanElement).style.borderColor = "var(--border)";
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "12px" }}>
        {project.github ? (
          <a
            href={project.github}
            style={{
              padding: "10px 20px",
              background: "var(--bg-tertiary)", border: "1px solid var(--border)",
              borderRadius: "100px", fontSize: "13px", fontWeight: 700,
              color: "var(--text-secondary)",
              transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = "var(--text-primary)";
              el.style.borderColor = "var(--border-hover)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = "var(--text-secondary)";
              el.style.borderColor = "var(--border)";
              el.style.transform = "translateY(0)";
            }}
          >
            GitHub ↗
          </a>
        ) : (
          <span
            style={{
              padding: "10px 20px",
              background: "var(--bg-tertiary)", border: "1px solid var(--border)",
              borderRadius: "100px", fontSize: "13px", fontWeight: 600,
              color: "var(--text-tertiary)",
            }}
          >
            {t.ui.projPrivate}
          </span>
        )}
        {project.demo && (
          <a
            href={project.demo}
            style={{
              padding: "10px 20px", background: "var(--accent)",
              borderRadius: "100px", fontSize: "13px", fontWeight: 700,
              color: "#fff", transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
              boxShadow: "var(--shadow-accent)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--accent-hover)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--accent)";
              el.style.transform = "translateY(0)";
            }}
          >
            {t.ui.projDemo}
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();
  const [showAll, setShowAll] = useState(false);
  
  const INITIAL_LIMIT = 4;
  const displayedProjects = showAll ? t.projects : t.projects.slice(0, INITIAL_LIMIT);

  return (
    <section
      id="projects"
      style={{
        padding: "100px 20px",
        background: "var(--bg-primary)",
        transition: "background 0.35s ease",
      }}
      className="projects-section"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "60px" }}>
          <span className="section-label">{t.ui.projects}</span>
          <h2
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(28px, 6vw, 52px)",
              fontWeight: 800, letterSpacing: "-0.03em",
              lineHeight: 1.1, color: "var(--text-primary)", maxWidth: "560px",
            }}
          >
            {t.ui.projTitle1}
            <br />
            <span style={{ color: "var(--text-tertiary)", fontWeight: 700 }}>
              {t.ui.projTitle2}
            </span>
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
            gap: "20px",
          }}
          className="projects-grid"
        >
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} inView={inView} />
          ))}
        </div>

        {t.projects.length > INITIAL_LIMIT && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                padding: "12px 28px",
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                fontSize: "14px", fontWeight: 700,
                color: "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--text-primary)";
                el.style.borderColor = "var(--border-hover)";
                el.style.background = "var(--bg-tertiary)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--text-secondary)";
                el.style.borderColor = "var(--border)";
                el.style.background = "transparent";
              }}
            >
              {showAll ? t.ui.showLess : t.ui.showMore}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.88)} }
        @media (max-width: 768px) {
          .projects-section { padding: 80px 16px !important; }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .project-card-inner { padding: 28px 24px !important; }
        }
      `}</style>
    </section>
  );
}
