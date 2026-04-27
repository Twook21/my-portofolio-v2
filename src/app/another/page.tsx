"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnotherMe() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text-primary)", position: "relative", overflow: "hidden" }}>
      {/* Technical grid from the main site for consistency */}
      <div className="grid-pattern" style={{ opacity: 0.1 }} />
      
      {/* Soft artistic orbs */}
      <div style={{ position: "absolute", width: "600px", height: "600px", top: "-200px", right: "-100px", background: "radial-gradient(circle, var(--orange-soft) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none", filter: "blur(40px)", opacity: 0.6 }} />
      <div style={{ position: "absolute", width: "400px", height: "400px", bottom: "-100px", left: "-100px", background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none", filter: "blur(40px)", opacity: 0.4 }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1 }}>
        {/* Navigation */}
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)", fontSize: "14px", fontWeight: 700, marginBottom: "60px", transition: "all 0.2s ease" }} className="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Header */}
        <header style={{ marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
             <span className="section-label" style={{ background: "var(--orange-soft)", color: "var(--orange)", borderColor: "rgba(255, 244, 223, 0.3)", marginBottom: 0 }}>THE OTHER SIDE</span>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
             </svg>
          </div>
          <h1 style={{ fontFamily: '"Stack Sans Notch", sans-serif', fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "24px" }}>
            Beyond the <span style={{ color: "var(--orange)" }}>Code</span>.
          </h1>
          <p style={{ fontSize: "clamp(18px, 4vw, 22px)", color: "var(--text-secondary)", maxWidth: "650px", lineHeight: 1.6 }}>
            When I'm not architecting software, I'm exploring the intersections of art, design, and human stories. 
          </p>
        </header>

        {/* Content Placeholder */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {[
            { title: "Digital Exploration", desc: "Experimenting with generative art and creative coding.", category: "ART", color: "var(--purple)" },
            { title: "Photography", desc: "Capturing the raw urban life and minimalist architecture.", category: "VISUAL", color: "var(--accent)" },
            { title: "Tech Writing", desc: "Breaking down complex systems into simple human stories.", category: "STORY", color: "var(--green)" },
          ].map((item, i) => (
            <div key={i} className="card-hover" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
               <span style={{ fontSize: "11px", fontWeight: 800, color: item.color, letterSpacing: "0.1em" }}>{item.category}</span>
               <h3 style={{ fontSize: "24px", fontWeight: 800, letterSpacing: "-0.02em" }}>{item.title}</h3>
               <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Empty state message */}
        <div style={{ marginTop: "100px", textAlign: "center", padding: "60px", background: "var(--bg-secondary)", borderRadius: "var(--radius-xl)", border: "1px dashed var(--border)" }}>
           <p style={{ fontSize: "15px", color: "var(--text-tertiary)", fontWeight: 600 }}>
             This space is currently under construction as I curate my non-technical works.
             <br />
             Check back soon for the full gallery.
           </p>
        </div>
      </div>

      <style jsx>{`
        .back-link:hover {
          color: var(--text-primary) !important;
          transform: translateX(-4px);
        }
      `}</style>
    </main>
  );
}
