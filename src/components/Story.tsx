"use client";

import { useLanguage } from "@/components/LanguageContext";
import { personal, milestones } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

const colorMap: Record<string, string> = {
  accent: "var(--accent)", green: "var(--green)",
  purple: "var(--purple)", orange: "var(--orange)",
};
const colorSoftMap: Record<string, string> = {
  accent: "var(--accent-soft)", green: "var(--green-soft)",
  purple: "var(--purple-soft)", orange: "var(--orange-soft)",
};

export default function Story() {
  const { t } = useLanguage();
  const { ref: leftRef, inView: leftIn } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();

  return (
    <section
      id="story"
      style={{
        padding: "100px 20px",
        background: "var(--bg-primary)",
        transition: "background 0.35s ease",
        position: "relative",
        overflow: "hidden",
      }}
      className="story-section"
    >
      <div className="grid-pattern" />
      <FloatingSymbols density={8} />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "60px" }}>
          <span className="section-label">{t.ui.storyLabel}</span>
          <h2
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(28px, 6vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            {t.ui.storyTitle1}
            <br />
            <span className="shimmer-text">{t.ui.storyTitle2}</span>
          </h2>
          <p style={{ fontSize: "clamp(15px, 4vw, 17px)", color: "var(--text-secondary)", lineHeight: 1.75, fontWeight: 400 }}>
            {t.ui.storyDesc}
          </p>
        </div>

        {/* Two column */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start" }}
          className="story-grid"
        >
          {/* Left */}
          <div
            ref={leftRef}
            style={{
              opacity: leftIn ? 1 : 0,
              transform: leftIn ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {/* Quote card */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                padding: "36px",
                marginBottom: "20px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
                transition: "box-shadow 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
              }}
            >
              {/* Top gradient line */}
              <div
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: "linear-gradient(90deg, var(--accent), var(--purple), var(--green))",
                  backgroundSize: "200% auto",
                  animation: "shimmer 4s linear infinite",
                }}
              />
              {/* Large quote mark */}
              <div
                style={{
                  fontSize: "80px", lineHeight: 1, color: "var(--accent-soft)",
                  fontWeight: 800, marginBottom: "-16px", userSelect: "none",
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: "20px", fontWeight: 700, lineHeight: 1.45,
                  letterSpacing: "-0.01em", color: "var(--text-primary)", marginBottom: "20px",
                }}
              >
                {t.ui.storyQuote}
              </p>
              <p style={{ fontSize: "13px", color: "var(--text-tertiary)", letterSpacing: "0.02em", fontWeight: 500 }}>
                {t.ui.storyQuoteAuthor}
              </p>
            </div>

            {/* Goal card */}
            {[
              {
                icon: "🎯", color: "accent",
                label: t.ui.goalLabel,
                title: t.personal.goal,
                sub: null,
              },
              {
                icon: <Image src="/pens.png" alt="PENS Logo - Akmal Bintang Budiawan Education" width={28} height={28} style={{ objectFit: "contain" }} />, color: "green",
                label: t.ui.eduLabel,
                title: t.ui.eduTitle,
                sub: t.ui.eduSub,
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px",
                  display: "flex", gap: "16px", alignItems: "flex-start",
                  marginBottom: i === 0 ? "14px" : 0,
                  boxShadow: "var(--shadow-sm)",
                  transition: "box-shadow 0.25s cubic-bezier(0.34,1.56,0.64,1), transform 0.25s cubic-bezier(0.34,1.56,0.64,1), border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "var(--shadow-md)";
                  el.style.transform = "translateY(-3px)";
                  el.style.borderColor = "var(--border-hover)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "var(--shadow-sm)";
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "var(--border)";
                }}
              >
                <div
                  style={{
                    width: "44px", height: "44px", borderRadius: "14px",
                    background: colorSoftMap[card.color],
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "20px", flexShrink: 0,
                    animation: "float 7s ease-in-out infinite",
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <p style={{ fontSize: "10px", fontWeight: 800, color: "var(--text-tertiary)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>
                    {card.label}
                  </p>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.4 }}>
                    {card.title}
                  </p>
                  {card.sub && (
                    <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>
                      {card.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Timeline */}
          <div
            ref={rightRef}
            style={{
              opacity: rightIn ? 1 : 0,
              transform: rightIn ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <p style={{ fontSize: "11px", fontWeight: 800, color: "var(--text-tertiary)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "28px" }}>
              {t.ui.milestones}
            </p>
            <div style={{ position: "relative" }}>
              {/* Timeline Line */}
              <div
                style={{
                  position: "absolute",
                  left: "12.5px",
                  top: "10px",
                  bottom: "10px",
                  width: "3px",
                  background: "rgba(144, 213, 255, 0.5)",
                  borderRadius: "4px"
                }}
              />

              {t.milestones.map((m, i) => (
                <div
                  key={m.title}
                  style={{
                    display: "flex", gap: "20px",
                    marginBottom: "28px", position: "relative",
                    opacity: rightIn ? 1 : 0,
                    transform: rightIn ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.1 + 0.15}s,
                                 transform 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.1 + 0.15}s`,
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      width: "28px", height: "28px", borderRadius: "50%",
                      background: colorSoftMap[m.color],
                      border: `2px solid ${colorMap[m.color]}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, zIndex: 1, marginTop: "2px",
                      boxShadow: `0 0 0 4px ${colorSoftMap[m.color]}`,
                    }}
                  >
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: colorMap[m.color] }} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-tertiary)" }}>
                        {m.date}
                      </span>
                      <span
                        style={{
                          padding: "2px 9px", borderRadius: "100px",
                          fontSize: "10px", fontWeight: 700,
                          color: colorMap[m.color], background: colorSoftMap[m.color],
                          letterSpacing: "0.05em",
                          animation: `badgePop 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.1 + 0.3}s both`,
                        }}
                      >
                        {m.tag}
                      </span>
                    </div>
                    <p style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px", lineHeight: 1.3 }}>
                      {m.title}
                    </p>
                    <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .story-section { padding: 80px 28px !important; }
          .story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
