"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useEffect, useRef, useState } from "react";
import FloatingSymbols from "./FloatingSymbols";
import { motion, AnimatePresence } from "framer-motion";

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
        padding: "140px 20px",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
      className="collaborations-section"
    >
      <div className="grid-pattern" style={{ opacity: 0.4 }} />
      <FloatingSymbols density={4} />
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <header style={{ marginBottom: "80px", textAlign: "center" }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-label"
          >
            {t.ui.collaborations}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(32px, 6vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            {t.ui.collabTitle1}
            <br />
            <span className="shimmer-text">{t.ui.collabTitle2}</span>
          </motion.h2>
        </header>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "20px",
          }}
          className="collaborations-grid"
        >
          {t.teamProjects.map((collab: any, idx: number) => (
            <CollabCard key={collab.id} collab={collab} idx={idx} inView={inView} />
          ))}
        </div>
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
          .collaborations-section { padding: 80px 16px !important; }
        }
        @media (max-width: 640px) {
          .collaborations-grid { grid-template-columns: 1fr !important; }
          .collab-member-avatar { width: 28px !important; height: 28px !important; fontSize: 13px !important; }
        }
      `}</style>
    </section>
  );
}

function CollabCard({ collab, idx, inView }: { collab: any; idx: number; inView: boolean }) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
      onClick={() => {
        if (isMobile) setIsExpanded(!isExpanded);
      }}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: "36px",
        marginBottom: "20px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "var(--shadow-md)",
        display: "flex", 
        flexDirection: "column",
        height: "100%",
        transition: "box-shadow 0.2s, border-color 0.2s",
        cursor: "pointer",
      }}
      className={`collab-card-inner ${isExpanded ? 'is-expanded' : ''}`}
      onMouseEnter={(e) => { 
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      }}
      onMouseLeave={(e) => { 
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
    >
      {/* Mini Header */}
      <div style={{ display: "flex", gap: "14px", alignItems: "center" }} className="collab-header">
        <div style={{
          width: "44px",
          height: "44px",
          borderRadius: "10px",
          background: "white",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          flexShrink: 0
        }} className="collab-logo">
          {collab.logo ? (
            <img 
              src={collab.logo} 
              alt={collab.name} 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + collab.name + "&background=random";
              }}
              style={{ width: "100%", height: "100%", objectFit: "contain" }} 
            />
          ) : (
            <span style={{ fontSize: "20px" }}>🤝</span>
          )}
        </div>
        <div style={{ flex: 1, overflow: "hidden" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.01em", marginBottom: "2px" }}>
            {collab.name}
          </h3>
          <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 700 }} className="collab-role">
            {collab.role}
          </p>
        </div>
        <div className="expand-icon" style={{ display: "none", color: "var(--text-tertiary)", transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)", transform: isExpanded ? "rotate(180deg)" : "rotate(0)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      <AnimatePresence>
        {(!isMobile || isExpanded) && (
          <motion.div 
            className="collab-expandable-content"
            initial={isMobile ? { height: 0, opacity: 0 } : {}}
            animate={isMobile ? { height: "auto", opacity: 1 } : {}}
            exit={isMobile ? { height: 0, opacity: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as any }}
            style={{ flex: 1, overflow: "hidden" }}
          >
            <p style={{ fontSize: "14px", lineHeight: 1.5, color: "var(--text-secondary)", marginBottom: "16px", marginTop: "16px" }}>
              {collab.description}
            </p>

            {/* Essential Info Tags */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
               <span style={{ fontSize: "11px", color: "var(--text-tertiary)", display: "flex", alignItems: "center", gap: "4px" }}>
                 <span style={{ opacity: 0.5 }}>📅</span> {collab.period}
               </span>
               <span style={{ fontSize: "11px", color: "var(--text-tertiary)", display: "flex", alignItems: "center", gap: "4px" }}>
                 <span style={{ opacity: 0.5 }}>👥</span> {collab.teamSize} members
               </span>
            </div>

            {/* Tech Tags - Minimalist */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {collab.tags.map((tag: string) => (
                <span key={tag} style={{ fontSize: "10px", fontWeight: 600, color: "var(--text-tertiary)", padding: "2px 8px", background: "rgba(0,0,0,0.05)", borderRadius: "4px" }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Link & Members */}
            <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                {collab.members?.slice(0, 3).map((m: any, i: number) => (
                  <a key={i} href={m.github} target="_blank" rel="noopener noreferrer" title={m.name} className="collab-member-avatar" style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--bg-tertiary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "var(--text-tertiary)", border: "1px solid var(--border)" }}>
                    {m.name[0]}
                  </a>
                ))}
              </div>
              <a
                href={collab.github || collab.demo || "#"}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  transition: "gap 0.2s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.gap = "6px"; }}
                onMouseLeave={(e) => { e.currentTarget.style.gap = "4px"; }}
              >
                View Project <span>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 640px) {
          .collab-card-inner {
            padding: 20px !important;
            border-radius: 20px !important;
            border: 1px solid var(--border) !important;
            background: var(--bg-card) !important;
            box-shadow: var(--shadow-sm) !important;
            margin-bottom: 12px !important;
          }
          .collab-header {
            gap: 16px !important;
          }
          .collab-logo {
            display: flex !important;
            width: 44px !important;
            height: 44px !important;
            border-radius: 8px !important;
            padding: 6px !important;
          }
          .collab-card-inner h3 {
            font-size: 15px !important;
            margin-bottom: 2px !important;
          }
          .collab-info {
            font-size: 13px !important;
            color: var(--text-secondary) !important;
          }
          .expand-icon {
            display: block !important;
            padding-bottom: 16px !important;
            border-bottom: 1px solid var(--border) !important;
          }
        }
      `}</style>

    </motion.div>
  );
}

