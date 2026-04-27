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

export default function Collaborations() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section
      id="collaborations"
      style={{
        padding: "100px 20px",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        transition: "background 0.35s ease",
        position: "relative",
        overflow: "hidden",
      }}
      className="collaborations-section"
    >
      <div className="grid-pattern" />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "60px" }}>
          <span className="section-label">{t.ui.collaborations}</span>
          <h2
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(28px, 6vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              maxWidth: "600px",
            }}
          >
            {t.ui.collabTitle1}
            <br />
            <span style={{ color: "var(--text-tertiary)", fontWeight: 700 }}>
              {t.ui.collabTitle2}
            </span>
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
          className="collaborations-grid"
        >
          {t.teamProjects.map((collab, idx) => (
            <div
              key={collab.id}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                padding: "40px",
                position: "relative",
                overflow: "hidden",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 0.15}s`,
                display: "flex",
                flexDirection: "column",
              }}
              className="collab-card"
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border-hover)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "var(--shadow-md)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Top info */}
              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                   <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {collab.period}
                  </span>
                  <div style={{ 
                    padding: "4px 10px", 
                    borderRadius: "100px", 
                    background: "var(--accent-soft)",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "var(--accent)"
                  }}>
                    {t.ui.teamLabel}: {collab.teamSize}
                  </div>
                </div>
                <h3 style={{ fontSize: "24px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px", letterSpacing: "-0.02em" }}>
                  {collab.name}
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>
                    {t.ui.roleLabel}:
                  </span>
                  <span style={{ 
                    fontSize: "13px", 
                    fontWeight: 700, 
                    color: "var(--text-primary)",
                    padding: "2px 8px",
                    background: "var(--bg-tertiary)",
                    borderRadius: "6px"
                  }}>
                    {collab.role}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: "24px" }}>
                {collab.description}
              </p>

              {/* Specific contribution */}
              <div style={{ 
                marginTop: "auto", 
                padding: "20px", 
                background: "var(--bg-primary)", 
                borderRadius: "16px",
                border: "1px dashed var(--border)",
                marginBottom: "24px"
              }}>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "var(--text-tertiary)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Key Contribution
                </p>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.5 }}>
                  {collab.contribution}
                </p>
              </div>

              {/* Team Members */}
              {collab.members && collab.members.length > 0 && (
                <div style={{ marginBottom: "24px" }}>
                   <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-tertiary)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {t.ui.membersLabel}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {collab.members.map((member: { name: string; github: string }) => (
                      <a
                        key={member.name}
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "6px 12px",
                          background: "var(--bg-tertiary)",
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                          transition: "all 0.2s ease",
                          border: "1px solid transparent"
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget;
                          el.style.color = "var(--text-primary)";
                          el.style.borderColor = "var(--border-hover)";
                          el.style.background = "var(--bg-card)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.color = "var(--text-secondary)";
                          el.style.borderColor = "transparent";
                          el.style.background = "var(--bg-tertiary)";
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        {member.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                {collab.demo && (
                  <a
                    href={collab.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      padding: "10px 16px",
                      background: "var(--accent)",
                      borderRadius: "12px",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#fff",
                      textAlign: "center",
                      transition: "all 0.25s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget).style.background = "var(--accent-hover)";
                      (e.currentTarget).style.transform = "translateY(-2px)";
                      (e.currentTarget).style.boxShadow = "var(--shadow-accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget).style.background = "var(--accent)";
                      (e.currentTarget).style.transform = "translateY(0)";
                      (e.currentTarget).style.boxShadow = "none";
                    }}
                  >
                    {t.ui.projDemo}
                  </a>
                )}
                {collab.github && (
                  <a
                    href={collab.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "10px 16px",
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border)",
                      borderRadius: "12px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget).style.background = "var(--bg-card)";
                      (e.currentTarget).style.borderColor = "var(--border-hover)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget).style.background = "var(--bg-tertiary)";
                      (e.currentTarget).style.borderColor = "var(--border)";
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" }}>
                {collab.tags.map(tag => (
                  <span key={tag} style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-tertiary)" }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .collaborations-section { padding: 80px 16px !important; }
        }
        @media (max-width: 640px) {
          .collaborations-grid { grid-template-columns: 1fr !important; }
          .collab-card { padding: 28px 24px !important; }
        }
      `}</style>
    </section>
  );
}
