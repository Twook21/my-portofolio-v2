"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useEffect, useRef, useState } from "react";
import FloatingSymbols from "./FloatingSymbols";

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

export default function Certifications() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();
  const [showAll, setShowAll] = useState(false);

  const INITIAL_LIMIT = 4;
  const displayedCerts = showAll ? t.certifications : t.certifications.slice(0, INITIAL_LIMIT);

  return (
    <section
      id="certifications"
      style={{
        padding: "80px 20px",
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
      className="certifications-section"
    >
      <div className="grid-pattern" />
      <FloatingSymbols density={8} />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "40px" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            {t.ui.certifications}
          </p>
          <h2
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(24px, 5vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            {t.ui.certTitle1}
            <span style={{ color: "var(--text-tertiary)" }}>{t.ui.certTitle2}</span>
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "16px",
          }}
        >
          {displayedCerts.map((cert, idx) => (
            <div
              key={cert.name}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "28px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${idx * 0.1}s, transform 0.5s ease ${idx * 0.1}s`,
              }}
              className="cert-card"
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: cert.status === "upcoming" ? "rgba(255,255,255,0.04)" : "var(--accent-soft)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                {cert.status === "upcoming" ? "⏳" : "🏅"}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "8px",
                    marginBottom: "4px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: cert.status === "upcoming" ? "var(--text-tertiary)" : "var(--text-primary)",
                    }}
                  >
                    {cert.name}
                  </p>
                  {cert.status === "upcoming" && (
                    <span
                      style={{
                        padding: "2px 8px",
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: "100px",
                        fontSize: "11px",
                        color: "var(--text-tertiary)",
                        fontWeight: 500,
                        flexShrink: 0,
                      }}
                    >
                      {t.ui.certSoon}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-tertiary)",
                    marginBottom: "8px",
                  }}
                >
                  {cert.issuer}
                  {cert.date ? ` · ${cert.date}` : ""}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {t.certifications.length > INITIAL_LIMIT && (
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
        @media (max-width: 768px) {
          .certifications-section { padding: 60px 16px !important; }
        }
        @media (max-width: 640px) {
          .cert-card { flex-direction: column !important; gap: 12px !important; padding: 24px !important; }
        }
      `}</style>
    </section>
  );
}
