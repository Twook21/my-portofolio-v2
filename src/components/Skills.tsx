"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useEffect, useRef, useState } from "react";

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

/** Animates a number from 0 → target when `trigger` becomes true */
function useCounter(target: number, trigger: boolean, duration = 900, delay = 0) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start: number | null = null;
    let raf: number;
    const delayTimer = setTimeout(() => {
      const step = (ts: number) => {
        if (!start) start = ts;
        const elapsed = ts - start;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out-expo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setVal(Math.round(eased * target));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(delayTimer); cancelAnimationFrame(raf); };
  }, [trigger, target, duration, delay]);
  return val;
}

function SkillBar({
  name, level, color, inView, delay,
}: {
  name: string; level: number; color: string; inView: boolean; delay: number;
}) {
  const count = useCounter(level, inView, 900, delay * 1000);

  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)" }}>
          {name}
        </span>
        <span
          style={{
            fontSize: "12px", fontWeight: 700, color: color,
            fontVariantNumeric: "tabular-nums",
            minWidth: "32px", textAlign: "right",
          }}
        >
          {count}%
        </span>
      </div>
      <div
        style={{
          height: "5px",
          background: "var(--bg-tertiary)",
          borderRadius: "3px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: inView ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, color-mix(in srgb, ${color} 60%, transparent))`,
            borderRadius: "3px",
            transition: `width 0.9s cubic-bezier(0.34, 1.10, 0.64, 1) ${delay}s`,
            boxShadow: inView ? `0 0 8px color-mix(in srgb, ${color} 33%, transparent)` : "none",
          }}
        />
      </div>
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
    { label: t.ui.skillsCat2, data: t.skills.backend,  color: "var(--green)" },
    { label: t.ui.skillsCat3, data: t.skills.devops,   color: "var(--orange)" },
    { label: t.ui.skillsCat4, data: t.skills.testing,  color: "var(--purple)" },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "100px 20px",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        transition: "background 0.35s ease",
      }}
      className="skills-section"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "60px", animation: "fadeInUp 0.7s ease both" }}>
          <span className="section-label">{t.ui.skills}</span>
          <h2
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(28px, 6vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              maxWidth: "560px",
            }}
          >
            {t.ui.skillsTitle1}
            <br />
            <span style={{ color: "var(--text-tertiary)", fontWeight: 700 }}>
              {t.ui.skillsTitle2}
            </span>
          </h2>
        </div>

        {/* Technical skill cards */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "20px",
            marginBottom: "80px",
          }}
          className="skills-grid"
        >
          {categories.map((cat, catIdx) => (
            <div
              key={cat.label}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                padding: "32px",
                boxShadow: "var(--shadow-sm)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
                transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${catIdx * 0.1}s,
                             transform 0.55s cubic-bezier(0.22,1,0.36,1) ${catIdx * 0.1}s,
                             box-shadow 0.2s ease, border-color 0.2s ease`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
                <div
                  style={{
                    width: "28px", height: "28px", borderRadius: "8px",
                    background: `color-mix(in srgb, ${cat.color} 9%, transparent)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: cat.color }} />
                </div>
                <span
                  style={{
                    fontSize: "11px", fontWeight: 800,
                    color: "var(--text-tertiary)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.label}
                </span>
              </div>
              {cat.data.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  inView={inView}
                  delay={catIdx * 0.1 + skillIdx * 0.06}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div>
          <p
            style={{
              fontSize: "11px", fontWeight: 800,
              color: "var(--text-tertiary)", letterSpacing: "0.12em",
              textTransform: "uppercase", marginBottom: "28px",
            }}
          >
            {t.ui.softSkills}
          </p>
          <div
            ref={softRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
              gap: "16px",
            }}
            className="soft-skills-grid"
          >
            {t.softSkills.map((skill, idx) => (
              <div
                key={skill.title}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px",
                  display: "flex",
                  gap: "16px",
                  boxShadow: "var(--shadow-sm)",
                  opacity: softInView ? 1 : 0,
                  transform: softInView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${idx * 0.07}s,
                               transform 0.5s cubic-bezier(0.22,1,0.36,1) ${idx * 0.07}s,
                               box-shadow 0.2s ease, border-color 0.2s ease`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "var(--shadow-md)";
                  el.style.borderColor = "var(--border-hover)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "var(--shadow-sm)";
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <span
                  style={{
                    fontSize: "26px", flexShrink: 0,
                    animation: softInView ? `float ${6 + idx}s ease-in-out infinite ${idx * 0.3}s` : "none",
                  }}
                >
                  {skill.icon}
                </span>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                    {skill.title}
                  </p>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .skills-section { padding: 80px 16px !important; }
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
