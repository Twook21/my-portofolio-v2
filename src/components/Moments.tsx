"use client";

import { useLanguage } from "@/components/LanguageContext";
import { moments } from "@/lib/data";
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

export default function Moments() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section
      id="moments"
      style={{
        padding: "100px 20px",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
      className="moments-section"
    >
      <div className="grid-pattern" />
      <FloatingSymbols density={10} />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "50px" }}>
          <span className="section-label">{t.ui.moments}</span>
          <h2
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(28px, 6vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            {t.ui.momentsTitle1}
            <br />
            <span style={{ color: "var(--text-tertiary)", fontWeight: 700 }}>
              {t.ui.momentsTitle2}
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          ref={ref}
          className="bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "180px",
            gridAutoFlow: "dense",
            gap: "16px",
          }}
        >
          {moments.map((moment, idx) => {
            const translation = t.moments.find((m) => m.id === moment.id);
            
            // Map size to grid spans
            const spanStyle: React.CSSProperties = {};
            if (moment.size === "large") {
              spanStyle.gridColumn = "span 2";
              spanStyle.gridRow = "span 2";
            } else if (moment.size === "wide") {
              spanStyle.gridColumn = "span 2";
              spanStyle.gridRow = "span 1";
            } else if (moment.size === "tall") {
              spanStyle.gridColumn = "span 1";
              spanStyle.gridRow = "span 2";
            } else {
              spanStyle.gridColumn = "span 1";
              spanStyle.gridRow = "span 1";
            }

            return (
              <div
                key={moment.id}
                style={{
                  ...spanStyle,
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                  transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 0.1}s`,
                }}
                className="bento-item"
              >
                {/* Image */}
                <img
                  src={moment.image}
                  alt={`${translation?.title} - Akmal Bintang Budiawan`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  className="bento-img"
                />

                {/* Overlay Card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    padding: "24px 16px 16px",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 40%, transparent 100%)",
                    transform: "translateY(0)",
                    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  className="bento-content-card"
                >
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: 800,
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {translation?.category}
                  </span>
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1.2,
                    }}
                  >
                    {translation?.title}
                  </h3>
                  <div 
                    className="bento-desc"
                    style={{ 
                      maxHeight: "0", 
                      opacity: 0, 
                      overflow: "hidden", 
                      transition: "all 0.4s ease" 
                    }}
                  >
                    <p
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.4,
                        fontWeight: 400,
                        marginTop: "8px",
                      }}
                    >
                      {translation?.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .bento-item {
          border: 1px solid var(--border) !important;
          background: var(--bg-card);
        }
        .bento-item:hover .bento-img {
          transform: scale(1.08) rotate(1deg);
        }
        .bento-item:hover .bento-content-card {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%) !important;
        }
        .bento-item:hover .bento-desc {
          max-height: 120px !important;
          opacity: 1 !important;
          margin-top: 10px !important;
        }
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 180px !important;
          }
        }
        @media (max-width: 600px) {
          .bento-grid {
            grid-auto-rows: 140px !important;
            gap: 12px !important;
          }
          .bento-content-card {
            padding: 20px 12px 12px !important;
          }
          .bento-content-card h3 {
            font-size: 13px !important;
            letter-spacing: -0.01em !important;
          }
          .moments-section {
            padding: 60px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
