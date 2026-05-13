"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, AnimatePresence, Variants } from "framer-motion";
import FloatingSymbols from "./FloatingSymbols";

export default function Experience() {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 90%", "start 25%"]
  });
  
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const INITIAL_LIMIT = 3;
  const experiences = t.experiences;
  const displayedExp = showAll ? experiences : experiences.slice(0, INITIAL_LIMIT);

  return (
    <section
      id="experience"
      style={{
        padding: "140px 20px",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
      className="experience-section"
    >
      <div className="grid-pattern" style={{ opacity: 0.5 }} />
      <FloatingSymbols density={6} />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        <header style={{ marginBottom: "100px", textAlign: "center" }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-label"
          >
            {t.ui.experience}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 900, letterSpacing: "-0.04em",
              lineHeight: 1.1, color: "var(--text-primary)",
              marginTop: "16px"
            }}
          >
            {t.ui.expTitle1}
            <br />
            <span className="shimmer-text">{t.ui.expTitle2}</span>
          </motion.h2>
        </header>

        <div ref={timelineRef} style={{ position: "relative", paddingLeft: "80px" }} className="timeline-container">
          {/* The Path */}
          <div 
            style={{ 
              position: "absolute", left: "36px", top: "10px", bottom: "0", 
              width: "4px", background: "var(--bg-tertiary)", borderRadius: "10px",
              opacity: 0.5 
            }} 
          />
          <motion.div 
            style={{ 
              position: "absolute", left: "36px", top: "10px", bottom: "0", 
              width: "4px", background: "#00d2ff",
              borderRadius: "10px", scaleY: pathLength, originY: 0, zIndex: 1,
              opacity: 0.9,
            }} 
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
            <AnimatePresence mode="popLayout">
              {displayedExp.map((exp, idx) => (
                <TimelineItem 
                  key={exp.id} 
                  exp={exp} 
                  idx={idx} 
                  isLast={idx === displayedExp.length - 1} 
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {experiences.length > INITIAL_LIMIT && (
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
    </section>
  );
}

function TimelineItem({ exp, idx, isLast }: { exp: any; idx: number; isLast: boolean }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    },
    exit: { 
      opacity: 0, 
      x: -20, 
      transition: { duration: 0.4, ease: "easeIn" } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  const logoVariants: Variants = {
    hidden: { scale: 0, rotate: -20 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.1 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, margin: "-100px" }}
      style={{ position: "relative", zIndex: 2 }}
    >
      {/* Logo Node */}
      <motion.div 
        variants={logoVariants}
        whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
        style={{ 
          position: "absolute", 
          left: "-72px", 
          top: "0", 
          width: "56px", height: "56px", borderRadius: "16px", 
          background: "white", border: "2px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "8px", zIndex: 10,
          boxShadow: "var(--shadow-sm)",
          cursor: "pointer"
        }}
        className="experience-logo-node"
      >
        <Image 
          src={exp.logo} 
          alt={`${exp.company} - Akmal Bintang Budiawan Experience`} 
          width={56}
          height={56}
          style={{ width: "100%", height: "100%", objectFit: "contain" }} 
        />
      </motion.div>

      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "12px" }}>
          <motion.div variants={itemVariants}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
              <span style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em", display: "block" }}>
                {exp.role}
              </span>
              {exp.highlight && (
                <motion.span 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  style={{ 
                    fontSize: "10px", fontWeight: 900, color: "var(--accent)", 
                    padding: "3px 10px", background: "var(--accent-soft)", 
                    borderRadius: "100px", textTransform: "uppercase" 
                  }}
                >
                  {t.ui.expCurrent}
                </motion.span>
              )}
            </div>
            <p style={{ fontSize: "16px", fontWeight: 700, color: "var(--accent)" }}>
              {exp.company}
            </p>
          </motion.div>
          <motion.div variants={itemVariants} style={{ textAlign: "right" }} className="meta">
            <p style={{ fontSize: "15px", fontWeight: 800, color: "var(--text-primary)" }}>{exp.period}</p>
            <p style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>{exp.location} • {exp.type}</p>
          </motion.div>
        </div>

        <motion.p 
          variants={itemVariants}
          style={{ marginTop: "16px", fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "700px" }}
        >
          {exp.description}
        </motion.p>

        <motion.div 
          variants={itemVariants}
          style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}
        >
          {exp.tags.map((tag: string) => (
            <span 
              key={tag}
              style={{ 
                padding: "4px 12px", background: "var(--bg-secondary)", 
                border: "1px solid var(--border)", borderRadius: "6px",
                fontSize: "12px", fontWeight: 600, color: "var(--text-tertiary)",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-tertiary)";
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {exp.projects.length > 0 && (
          <motion.button
            variants={itemVariants}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              marginTop: "24px", background: "none", border: "none", cursor: "pointer",
              color: "var(--accent)", fontSize: "13px", fontWeight: 700,
              display: "flex", alignItems: "center", gap: "6px"
            }}
          >
            <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>↓</motion.span>
            {isOpen ? t.ui.expHide : t.ui.expShow} {t.ui.expSub} ({exp.projects.length})
          </motion.button>
        )}

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ 
                marginTop: "20px", display: "grid", gridTemplateColumns: "1fr", 
                gap: "12px", paddingLeft: "12px", borderLeft: "2px solid var(--border)" 
              }}>
                {exp.projects.map((p: any, pi: number) => (
                  <motion.div 
                    key={p.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: pi * 0.05 }}
                    style={{ padding: "8px 0" }}
                  >
                    <p style={{ fontSize: "14px", fontWeight: 800, color: "var(--text-primary)" }}>{p.name}</p>
                    <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600 }}>{p.tech}</p>
                    <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>{p.impact}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .experience-section { padding: 80px 16px !important; }
          .timeline-container { padding-left: 44px !important; }
          .timeline-container > div:first-child, 
          .timeline-container > div:nth-child(2) { left: 16px !important; }
          .meta { text-align: left !important; margin-top: 10px; width: 100%; }
          .experience-logo-node { 
            left: -36px !important; 
            width: 36px !important; 
            height: 36px !important; 
            padding: 5px !important;
          }
        }
        @media (max-width: 480px) {
          .timeline-container { padding-left: 36px !important; }
          .timeline-container > div:first-child, 
          .timeline-container > div:nth-child(2) { left: 12px !important; }
          .experience-logo-node { 
            left: -30px !important;
            width: 32px !important;
            height: 32px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

