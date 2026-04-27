"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
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

/** 3D tilt on mouse move */
function use3DTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-4px)`;
  };
  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
  };
  return { ref, handleMouseMove, handleMouseLeave };
}

export default function Experience() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();
  const [activeExp, setActiveExp] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const INITIAL_LIMIT = 3;
  const displayedExp = showAll ? t.experiences : t.experiences.slice(0, INITIAL_LIMIT);

  return (
    <section
      id="experience"
      style={{
        padding: "100px 20px",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.35s ease",
      }}
      className="experience-section"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "60px" }}>
          <span className="section-label">{t.ui.experience}</span>
          <h2
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(28px, 6vw, 52px)",
              fontWeight: 800, letterSpacing: "-0.03em",
              lineHeight: 1.1, color: "var(--text-primary)", maxWidth: "560px",
            }}
          >
            {t.ui.expTitle1}
            <br />
            <span style={{ color: "var(--text-tertiary)", fontWeight: 700 }}>
              {t.ui.expTitle2}
            </span>
          </h2>
        </div>

        <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {displayedExp.map((exp, idx) => (
            <ExpCard
              key={exp.id}
              exp={exp}
              idx={idx}
              inView={inView}
              activeExp={activeExp}
              setActiveExp={setActiveExp}
            />
          ))}
        </div>

        {t.experiences.length > INITIAL_LIMIT && (
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
    </section>
  );
}

function ExpCard({
  exp, idx, inView, activeExp, setActiveExp,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exp: any; idx: number; inView: boolean;
  activeExp: string | null; setActiveExp: (id: string | null) => void;
}) {
  const { t } = useLanguage();
  const { ref, handleMouseMove, handleMouseLeave } = use3DTilt();
  const isOpen = activeExp === exp.id;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setActiveExp(isOpen ? null : exp.id)}
      style={{
        background: "var(--bg-card)",
        border: exp.highlight
          ? "1px solid color-mix(in srgb, var(--accent) 30%, transparent)"
          : "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: "36px",
        cursor: "pointer",
        boxShadow: exp.highlight ? "var(--shadow-md)" : "var(--shadow-sm)",
        opacity: inView ? 1 : 0,
        animation: inView
          ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${idx * 0.12}s both`
          : "none",
        position: "relative",
        overflow: "hidden",
        willChange: "transform",
        transition: "transition 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s ease",
      }}
      className="exp-card-inner"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)";
      }}
    >
      {/* Gradient top border */}
      {exp.highlight && (
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "3px",
            background: "linear-gradient(90deg, var(--accent), var(--green), var(--purple))",
            backgroundSize: "200% auto",
            animation: "shimmer 4s linear infinite",
          }}
        />
      )}

      {/* Hover shimmer overlay */}
      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, var(--accent-soft) 0%, transparent 60%)",
          opacity: 0, pointerEvents: "none",
          transition: "opacity 0.3s ease",
        }}
        className="card-shimmer"
      />

      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }} className="exp-header">
        {/* Icon */}
        <div
          style={{
            width: "56px", height: "56px", borderRadius: "16px",
            background: exp.highlight ? "var(--accent-soft)" : "var(--bg-tertiary)",
            border: "1px solid var(--border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "24px", flexShrink: 0,
            animation: "float 8s ease-in-out infinite",
          }}
        >
          {exp.highlight ? "🧬" : "🏛️"}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }} className="exp-title-row">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px", flexWrap: "wrap" }}>
                <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  {exp.role}
                </h3>
                {exp.highlight && (
                  <span
                    style={{
                      padding: "3px 10px",
                      background: "var(--accent-soft)",
                      borderRadius: "100px",
                      fontSize: "11px", fontWeight: 700, color: "var(--accent)",
                      letterSpacing: "0.05em",
                      animation: "borderGlow 3s ease-in-out infinite",
                    }}
                  >
                    {t.ui.expCurrent}
                  </span>
                )}
              </div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "2px" }}>
                {exp.company}
              </p>
              <p style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>
                {exp.parent}
              </p>
            </div>
            <div style={{ textAlign: "right" }} className="exp-meta">
              <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-tertiary)", marginBottom: "4px" }}>
                {exp.period}
              </p>
              <p style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
                {exp.location}
              </p>
            </div>
          </div>

          <p style={{ marginTop: "16px", fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.75 }}>
            {exp.description}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
            {exp.tags.map((tag: string, ti: number) => (
              <span
                key={tag}
                style={{
                  padding: "4px 12px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border)",
                  borderRadius: "100px",
                  fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                  animation: inView ? `badgePop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${0.3 + ti * 0.05}s both` : "none",
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

          {exp.projects.length > 0 && (
            <button
              style={{
                marginTop: "20px",
                background: "none", border: "none", cursor: "pointer",
                color: "var(--accent)", fontSize: "13px", fontWeight: 700,
                display: "flex", alignItems: "center", gap: "6px",
                transition: "gap 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.gap = "10px"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.gap = "6px"; }}
            >
              <span
                style={{
                  display: "inline-block",
                  transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                ↓
              </span>
              {isOpen ? t.ui.expHide : t.ui.expShow} {t.ui.expSub} ({exp.projects.length})
            </button>
          )}
        </div>
      </div>

      {/* Sub-projects */}
      <div
        style={{
          maxHeight: isOpen ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {isOpen && (
          <div
            style={{
              marginTop: "28px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
              gap: "14px",
              animation: "scaleIn 0.4s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {exp.projects.map((p: { name: string; tech: string; impact: string }, pi: number) => (
              <div
                key={p.name}
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "20px",
                  transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                  animation: `fadeInUp 0.4s cubic-bezier(0.22,1,0.36,1) ${pi * 0.08}s both`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--accent)";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <p style={{ fontSize: "14px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "4px" }}>{p.name}</p>
                <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, marginBottom: "10px" }}>{p.tech}</p>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.65 }}>{p.impact}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .experience-section { padding: 80px 16px !important; }
        }
        @media (max-width: 640px) {
          .exp-header { flex-direction: column !important; gap: 16px !important; }
          .exp-card-inner { padding: 28px 24px !important; }
          .exp-meta { text-align: left !important; margin-top: 4px; }
          .exp-title-row { flex-direction: column !important; align-items: flex-start !important; gap: 4px !important; }
        }
      `}</style>
    </div>
  );
}
