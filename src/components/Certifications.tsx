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
        @media (max-width: 768px) {
          #certifications { padding: 80px 16px !important; }
        }
        @media (max-width: 640px) {
          #certifications > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function CertCard({ cert, idx, inView }: { cert: any; idx: number; inView: boolean }) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => {
        if (window.innerWidth <= 640) setIsExpanded(!isExpanded);
      }}
      style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--border)",
        borderRadius: "24px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        cursor: "pointer"
      }}
      className={`cert-card-inner ${isExpanded ? 'is-expanded' : ''}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.background = "var(--bg-card-hover)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.background = "var(--bg-secondary)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }} className="cert-header">
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
          className="cert-logo"
        >
          {cert.logo ? (
            <img src={cert.logo} alt={cert.issuer} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          ) : (
            <span style={{ fontSize: "24px" }}>🏅</span>
          )}
        </div>
        <div style={{ flex: 1, overflow: "hidden" }}>
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
          <p style={{ fontSize: "14px", color: "var(--accent)", fontWeight: 700, marginTop: "2px" }} className="cert-issuer">
            {cert.issuer}
          </p>
        </div>
        <div className="expand-icon" style={{ display: "none", color: "var(--text-tertiary)", transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)", transform: isExpanded ? "rotate(180deg)" : "rotate(0)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      <AnimatePresence>
        {(!window || window.innerWidth > 640 || isExpanded) && (
          <motion.div 
            className="cert-expandable-content"
            initial={window.innerWidth <= 640 ? { height: 0, opacity: 0 } : {}}
            animate={window.innerWidth <= 640 ? { height: "auto", opacity: 1 } : {}}
            exit={window.innerWidth <= 640 ? { height: 0, opacity: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: 1, overflow: "hidden" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px", marginTop: "16px" }}>
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

            <a
              href={cert.link || "#"}
              onClick={(e) => e.stopPropagation()}
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
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 640px) {
          .cert-card-inner {
            padding: 24px 20px !important;
            background: var(--bg-card) !important;
            border: 1px solid var(--border) !important;
            border-radius: 20px !important;
            height: auto !important;
            transform: none !important;
            margin-bottom: 12px !important;
          }
          .cert-card-inner.is-expanded {
            background: var(--bg-secondary) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            border-color: var(--accent) !important;
            box-shadow: var(--shadow-lg) !important;
          }
          .cert-logo {
            display: none !important;
          }
          .cert-card-inner.is-expanded .cert-logo {
            display: flex !important;
            margin-bottom: 16px !important;
          }
          .cert-issuer {
            display: none !important;
          }
          .cert-card-inner.is-expanded .cert-issuer {
            display: block !important;
          }
          .cert-card-inner h3 {
            font-size: 17px !important;
            font-weight: 800 !important;
          }
          .expand-icon {
            display: block !important;
            opacity: 0.6;
          }
          .cert-card-inner.is-expanded .cert-header {
            padding-bottom: 16px !important;
            border-bottom: 1px solid var(--border) !important;
          }
        }
      `}</style>
    </motion.div>
  );
}


