"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FloatingSymbols from "./FloatingSymbols";

export default function Hero() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  const roles = [
    t.personal.tagline, // Software Engineer (translated)
    "Long Life Learner",
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const currentRole = roles[roleIndex];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Reset when language changes or role changes
  useEffect(() => {
    setDisplayText("");
    setIsDeleting(false);
    setTypingSpeed(100);
  }, [roleIndex, t.personal.tagline]);

  useEffect(() => {
    if (!visible) return;
    
    const handleTyping = () => {
      setDisplayText(prev => {
        if (!isDeleting) {
          if (prev.length < currentRole.length) {
            return currentRole.slice(0, prev.length + 1);
          } else {
            setTypingSpeed(2000); // Wait at end
            setIsDeleting(true);
            return prev;
          }
        } else {
          if (prev.length > 0) {
            setTypingSpeed(50); // Faster delete
            return currentRole.slice(0, prev.length - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((prevIdx) => (prevIdx + 1) % roles.length);
            setTypingSpeed(500); // Wait before restart
            return "";
          }
        }
      });
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [visible, displayText, isDeleting, typingSpeed, currentRole, roles.length]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      heroRef.current.style.setProperty('--mouse-x', `${x}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y}%`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "140px 20px 100px",
        overflow: "hidden",
        "--mouse-x": "50%",
        "--mouse-y": "40%"
      } as React.CSSProperties}
      className="hero-section"
    >
      {/* ── Animated background orbs ── */}
      <div
        className="orb hero-orb-1"
        style={{
          width: "max(300px, 40vw)", height: "max(300px, 40vw)",
          top: "5%", left: "-10%",
          background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)",
          animation: "orb1 18s ease-in-out infinite",
        }}
      />
      <div
        className="orb hero-orb-2"
        style={{
          width: "max(260px, 35vw)", height: "max(260px, 35vw)",
          top: "20%", right: "-8%",
          background: "radial-gradient(circle, var(--purple-soft) 0%, transparent 70%)",
          animation: "orb2 22s ease-in-out infinite",
        }}
      />
      <div
        className="orb hero-orb-3"
        style={{
          width: "max(200px, 25vw)", height: "max(200px, 25vw)",
          bottom: "10%", left: "30%",
          background: "radial-gradient(circle, var(--green-soft) 0%, transparent 70%)",
          animation: "orb3 15s ease-in-out infinite",
        }}
      />

      {/* ── Mouse-tracking spotlight ── */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(ellipse 60% 50% at var(--mouse-x) var(--mouse-y), var(--accent-soft) 0%, transparent 65%)`,
          transition: "background 0.15s ease-out",
        }}
        className="mouse-spotlight"
      />

      {/* ── Grid pattern overlay ── */}
      <div className="grid-pattern" />

      {/* ── Content ── */}
      <div
        style={{
          maxWidth: "800px", width: "100%",
          textAlign: "center", position: "relative", zIndex: 1,
        }}
      >
        {/* Status pill */}
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderRadius: "100px", padding: "6px 16px 6px 10px",
            marginBottom: "32px", boxShadow: "var(--shadow-sm)",
            opacity: visible ? 1 : 0,
            animation: visible ? "badgePop 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s both" : "none",
          }}
          className="hero-status"
        >
          <span
            style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: "var(--green)", display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.03em" }}>
            {t.personal.status}
          </span>
        </div>

        {/* Hidden SEO H1 */}
        <h1 style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", border: 0 }}>
          {t.personal.name} — {t.personal.tagline}
        </h1>

        {/* Name — staggered word reveal */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(8px, 2.5vw, 20px)",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
          className="hero-name-container"
        >
          <span
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(32px, 8vw, 72px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--text-primary)",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both" : "none",
            }}
          >
            {t.ui.heroGreeting1}
          </span>
          <span
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(32px, 8vw, 72px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--text-secondary)",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both" : "none",
            }}
          >
            {t.ui.heroGreeting2}
          </span>
          <span
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(32px, 8vw, 72px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both" : "none",
            }}
          >
            {t.ui.heroGreeting3}
          </span>
          <Image
            src="/mals.png"
            alt="Akmal Bintang Budiawan Portrait Emoji"
            width={100}
            height={100}
            priority
            sizes="(max-width: 768px) 50px, 100px"
            style={{
              width: "clamp(50px, 12vw, 100px)",
              height: "clamp(50px, 12vw, 100px)",
              objectFit: "contain",
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.5s both, float 6s ease-in-out infinite" : "none",
              filter: "drop-shadow(0 15px 30px var(--accent-glow))",
              marginLeft: "-10px",
              cursor: "pointer",
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              userSelect: "none",
              willChange: "transform, opacity"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15) rotate(12deg)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
          />
        </div>

        {/* Shimmer role badge */}
        <p
          style={{
            fontSize: "clamp(14px, 3vw, 20px)",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "24px",
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both" : "none",
            minHeight: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2px",
          }}
          className="shimmer-text hero-role"
        >
          {displayText}
          <span className="typewriter-cursor">|</span>
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(15px, 3.5vw, 18px)",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            maxWidth: "560px",
            margin: "0 auto 44px",
            fontWeight: 400,
            padding: "0 10px",
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.5s both" : "none",
          }}
          className="hero-description"
        >
          {t.personal.description}
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap",
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.62s both" : "none",
          }}
          className="hero-ctas"
        >
          <a
            href="#experience"
            onClick={(e) => { e.preventDefault(); document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              padding: "14px 30px",
              background: "var(--accent)",
              borderRadius: "100px",
              fontSize: "15px", fontWeight: 700,
              color: "var(--accent-contrast)",
              transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              display: "inline-block",
              boxShadow: "var(--shadow-accent)",
              minWidth: "160px",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-3px) scale(1.04)";
              el.style.boxShadow = "0 12px 40px var(--accent-glow)";
              el.style.background = "var(--accent-hover)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0) scale(1)";
              el.style.boxShadow = "var(--shadow-accent)";
              el.style.background = "var(--accent)";
            }}
          >
            {t.ui.viewWork}
          </a>
          <a
            href={`mailto:${t.personal.email}`}
            style={{
              padding: "14px 30px",
              background: "var(--bg-card)",
              borderRadius: "100px",
              fontSize: "15px", fontWeight: 700,
              color: "var(--text-primary)",
              border: "1.5px solid var(--border)",
              transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              display: "inline-block",
              boxShadow: "var(--shadow-sm)",
              minWidth: "160px",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-3px) scale(1.04)";
              el.style.borderColor = "var(--accent)";
              el.style.boxShadow = "var(--shadow-md)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0) scale(1)";
              el.style.borderColor = "var(--border)";
              el.style.boxShadow = "var(--shadow-sm)";
            }}
          >
            {t.ui.getInTouch}
          </a>
        </div>

        {/* Philosophy */}
        <p
          style={{
            marginTop: "64px",
            fontSize: "11px", color: "var(--text-tertiary)",
            letterSpacing: "0.05em",
            opacity: visible ? 0.7 : 0,
            animation: visible ? "fadeIn 1.2s ease 1s both" : "none",
            padding: "0 20px",
          }}
          className="hero-philosophy"
        >
          ✦ {t.personal.philosophy}
        </p>
      </div>

      {/* Floating decorative elements */}
      <FloatingSymbols density={12} />

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute", bottom: "24px", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          opacity: visible ? 0.5 : 0,
          animation: visible ? "fadeIn 1s ease 1.4s both" : "none",
        }}
      >
        <span style={{ fontSize: "9px", fontWeight: 700, color: "var(--text-tertiary)", letterSpacing: "0.15em" }}>
          {t.ui.scroll}
        </span>
        <div
          style={{
            width: "1px", height: "30px",
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .typewriter-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          color: var(--accent);
        }
        @media (max-width: 768px) {
          .hero-section { 
            height: 100svh !important;
            padding: 72px 28px env(safe-area-inset-bottom, 20px) !important; 
            overflow: hidden !important;
          }
          .hero-status { margin-bottom: 12px !important; }
          .hero-name-container { margin-bottom: 16px !important; gap: 8px !important; }
          .hero-role { margin-bottom: 12px !important; }
          .hero-description { margin-bottom: 24px !important; font-size: 14px !important; }
          .hero-philosophy { margin-top: 24px !important; font-size: 10px !important; }
          .hero-ctas { gap: 8px !important; }
          .hero-ctas a { padding: 12px 20px !important; min-width: 140px !important; font-size: 14px !important; }
          .hero-orb-1, .hero-orb-2, .hero-orb-3 { opacity: 0.6; }
          .mouse-spotlight { display: none; }
          .decorative-element { display: none; }
        }
        @media (max-width: 480px) {
          .hero-ctas { flex-direction: column !important; align-items: stretch !important; width: 100% !important; max-width: 300px !important; margin: 0 auto !important; }
          .hero-ctas a { width: 100% !important; text-align: center !important; }
        }
      `}</style>
    </section>
  );
}
