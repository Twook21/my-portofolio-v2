"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const INITIAL_LIMIT = 6;
  const certifications = t.certifications || [];
  const displayedCerts = showAll ? certifications : certifications.slice(0, INITIAL_LIMIT);

  return (
    <section
      id="certifications"
      style={{
        padding: "140px 20px",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="grid-pattern" style={{ opacity: 0.4 }} />
      <FloatingSymbols density={4} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <header style={{ marginBottom: "80px", textAlign: "center" }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-label"
            style={{
              display: "inline-block",
              padding: "6px 16px",
              background: "var(--accent-soft)",
              color: "var(--accent)",
              borderRadius: "100px",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "20px"
            }}
          >
            {t.ui.certifications}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            {t.ui.certTitle1}
            <br />
            <span className="shimmer-text">{t.ui.certTitle2}</span>
          </motion.h2>
        </header>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert: any, idx: number) => (
              <CertCard key={cert.name + idx} cert={cert} idx={idx} inView={inView} />
            ))}
          </AnimatePresence>
        </div>

        {certifications.length > INITIAL_LIMIT && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                padding: "14px 36px",
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                fontSize: "14px", fontWeight: 800,
                color: "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "var(--accent-soft)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {showAll ? t.ui.showLess : t.ui.showMore}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .shimmer-text {
          background: linear-gradient(90deg, var(--text-primary), var(--accent), var(--text-primary));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}

function CertCard({ cert, idx, inView }: { cert: any; idx: number; inView: boolean }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid var(--border)",
        borderRadius: "24px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", gap: "20px", alignItems: "center", marginBottom: "24px" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "14px",
            background: "white",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            flexShrink: 0,
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}
        >
          {cert.logo ? (
            <img src={cert.logo} alt={cert.issuer} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          ) : (
            <span style={{ fontSize: "24px" }}>🏅</span>
          )}
        </div>
        <div style={{ overflow: "hidden" }}>
          <h3
            style={{
              fontSize: "17px",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.3,
              letterSpacing: "-0.01em"
            }}
          >
            {cert.name}
          </h3>
          <p style={{ fontSize: "14px", color: "var(--accent)", fontWeight: 700, marginTop: "2px" }}>
            {cert.issuer}
          </p>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
          <span style={{ fontSize: "14px", opacity: 0.6 }}>🗓️</span>
          <span style={{ fontSize: "13px", color: "var(--text-tertiary)", fontWeight: 600 }}>{cert.date}</span>
        </div>
        
        {cert.id && (
          <div style={{ 
            fontSize: "11px", 
            color: "var(--text-tertiary)", 
            fontFamily: "monospace",
            marginBottom: "20px",
            padding: "6px 12px",
            background: "rgba(0,0,0,0.1)",
            borderRadius: "8px",
            width: "fit-content",
            border: "1px solid rgba(255,255,255,0.05)"
          }}>
            ID: {cert.id}
          </div>
        )}

        {cert.skills && cert.skills.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
            {cert.skills.map((skill: string) => (
              <span 
                key={skill}
                style={{ 
                  fontSize: "11px", 
                  fontWeight: 700, 
                  color: "var(--text-secondary)",
                  padding: "4px 12px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "100px",
                  border: "1px solid var(--border)"
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      <a
        href={cert.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "32px",
          fontSize: "13px",
          fontWeight: 800,
          color: "var(--text-primary)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 0",
          transition: "gap 0.3s ease"
        }}
        onMouseEnter={(e) => { e.currentTarget.style.gap = "10px"; }}
        onMouseLeave={(e) => { e.currentTarget.style.gap = "6px"; }}
      >
        View Credential <span style={{ fontSize: "16px" }}>→</span>
      </a>
    </motion.div>
  );
}
