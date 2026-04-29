"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

function BentoGrid({ items }: { items: any[] }) {
  return (
    <div 
      style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)", 
        gridAutoRows: "200px", 
        gridAutoFlow: "dense", 
        gap: "20px" 
      }}
      className="another-me-grid"
    >
      {items.map((item: any, i: number) => {
        const spanStyle: React.CSSProperties = {};
        if (item.size === "large") {
          spanStyle.gridColumn = "span 2";
          spanStyle.gridRow = "span 2";
        } else if (item.size === "wide") {
          spanStyle.gridColumn = "span 2";
          spanStyle.gridRow = "span 1";
        } else if (item.size === "tall") {
          spanStyle.gridColumn = "span 1";
          spanStyle.gridRow = "span 2";
        } else {
          spanStyle.gridColumn = "span 1";
          spanStyle.gridRow = "span 1";
        }

        return (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="result-card"
            style={{ 
              ...spanStyle,
              position: "relative", 
              borderRadius: "24px", 
              overflow: "hidden", 
              background: "var(--bg-card)", 
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ position: "absolute", inset: 0 }}>
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.33, 1, 0.68, 1)" }} 
                className="result-image"
              />
            </div>
            
            <div className="card-overlay" style={{ 
              position: "absolute", 
              inset: 0, 
              background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)", 
              opacity: 0, 
              transition: "opacity 0.4s ease", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "flex-end", 
              padding: "24px" 
            }}>
              <h4 style={{ color: "white", fontSize: "18px", fontWeight: 800, marginBottom: "4px", lineHeight: 1.2 }}>{item.title}</h4>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", lineHeight: 1.4 }}>{item.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function AnotherMe() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const content = (t as any).anotherMe;

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text-primary)", position: "relative", overflow: "hidden" }}>
      <div className="grid-pattern" style={{ opacity: 0.1 }} />
      
      <div style={{ position: "absolute", width: "600px", height: "600px", top: "-200px", right: "-100px", background: "radial-gradient(circle, var(--orange-soft) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none", filter: "blur(60px)", opacity: 0.5 }} />
      <div style={{ position: "absolute", width: "400px", height: "400px", bottom: "-100px", left: "-100px", background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none", filter: "blur(60px)", opacity: 0.3 }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px 120px", position: "relative", zIndex: 1 }}>
        {/* Navigation */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/" className="back-link" style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)", fontSize: "14px", fontWeight: 700, marginBottom: "60px", padding: "8px 16px", borderRadius: "30px", background: "var(--bg-card)", border: "1px solid var(--border)", transition: "all 0.3s ease" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            {content.backButton}
          </Link>
        </motion.div>

        {/* Header */}
        <header style={{ marginBottom: "80px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
             <span className="section-label" style={{ background: "var(--orange-soft)", color: "var(--orange)", borderColor: "rgba(255, 244, 223, 0.3)", marginBottom: 0 }}>{content.label}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontFamily: '"Stack Sans Notch", sans-serif', fontSize: "clamp(48px, 10vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "32px" }}>
            {content.title1} <span style={{ color: "var(--orange)" }}>{content.title2}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: "18px", color: "var(--text-secondary)", maxWidth: "600px", lineHeight: 1.6 }}>
            {content.description}
          </motion.p>
        </header>

        {/* Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
          {/* 3D Modeling Section */}
          <section>
            <div style={{ marginBottom: "40px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>{content.categories.threeD.title}</h2>
              <p style={{ color: "var(--text-tertiary)", maxWidth: "600px", marginBottom: "24px" }}>{content.categories.threeD.description}</p>
              <div style={{ display: "flex", gap: "8px" }}>
                {content.categories.threeD.tools.map((tool: string) => (
                  <span key={tool} style={{ padding: "6px 14px", background: "var(--bg-tertiary)", border: "1px solid var(--border)", borderRadius: "100px", fontSize: "12px", fontWeight: 700, color: "var(--text-secondary)" }}>{tool}</span>
                ))}
              </div>
            </div>
            <BentoGrid items={content.categories.threeD.results} />
          </section>

          {/* Graphic Design Section */}
          <section>
            <div style={{ marginBottom: "40px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>{content.categories.design.title}</h2>
              <p style={{ color: "var(--text-tertiary)", maxWidth: "600px", marginBottom: "24px" }}>{content.categories.design.description}</p>
              <div style={{ display: "flex", gap: "8px" }}>
                {content.categories.design.tools.map((tool: string) => (
                  <span key={tool} style={{ padding: "6px 14px", background: "var(--bg-tertiary)", border: "1px solid var(--border)", borderRadius: "100px", fontSize: "12px", fontWeight: 700, color: "var(--text-secondary)" }}>{tool}</span>
                ))}
              </div>
            </div>
            <BentoGrid items={content.categories.design.results} />
          </section>
        </div>

        {/* Footer */}
        <footer style={{ marginTop: "120px", textAlign: "center", borderTop: "1px solid var(--border)", paddingTop: "60px" }}>
          <p style={{ color: "var(--text-tertiary)", fontSize: "14px" }}>{t.ui.rights} &copy; {new Date().getFullYear()} {t.personal.name}</p>
        </footer>
      </div>

      <style jsx>{`
        .back-link:hover { color: var(--text-primary) !important; transform: translateX(-4px); border-color: var(--accent) !important; }
        .result-card:hover .result-image { transform: scale(1.08); }
        .result-card:hover .card-overlay { opacity: 1 !important; }
        @media (max-width: 1024px) {
          .another-me-grid { grid-template-columns: repeat(2, 1fr) !important; grid-auto-rows: 180px !important; }
        }
        @media (max-width: 640px) {
          .another-me-grid { grid-template-columns: 1fr !important; grid-auto-rows: auto !important; display: flex !important; flex-direction: column !important; }
          .result-card { aspect-ratio: 16/10 !important; }
        }
      `}</style>
    </main>
  );
}
