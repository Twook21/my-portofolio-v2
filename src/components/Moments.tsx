"use client";

import { useLanguage } from "@/components/LanguageContext";
import { moments } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
            const isHovered = hoveredId === moment.id;
            
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
                onMouseEnter={() => setHoveredId(moment.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  ...spanStyle,
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  boxShadow: isHovered ? "var(--shadow-md)" : "var(--shadow-sm)",
                  opacity: inView ? 1 : 0,
                  transform: inView 
                    ? (isHovered ? "translateY(-4px) scale(1.02)" : "translateY(0) scale(1)") 
                    : "translateY(20px) scale(0.95)",
                  transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 0.1}s, transform 0.3s ease, box-shadow 0.3s ease`,
                  cursor: "pointer",
                }}
                className="bento-item"
              >
                {/* Image */}
                <Image
                  src={moment.image}
                  alt={`${translation?.title} - Akmal Bintang Budiawan`}
                  fill
                  sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s ease",
                    transform: isHovered ? "scale(1.18) rotate(-3deg)" : "scale(1) rotate(0deg)",
                    filter: isHovered ? "brightness(1.1) contrast(1.05)" : "brightness(0.9) contrast(1)",
                    willChange: "transform"
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
                    background: isHovered 
                      ? "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)"
                      : "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 40%, transparent 100%)",
                    transform: "translateY(0)",
                    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                    zIndex: 2
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
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1.2,
                      display: "block"
                    }}
                  >
                    {translation?.title}
                  </span>
                  <div 
                    className="bento-desc"
                    style={{ 
                      maxHeight: isHovered ? "120px" : "0", 
                      opacity: isHovered ? 1 : 0, 
                      overflow: "hidden", 
                      transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                      marginTop: isHovered ? "10px" : "0"
                    }}
                  >
                    <p
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.4,
                        fontWeight: 400,
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
            padding: 60px 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
