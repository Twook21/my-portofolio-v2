"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useState } from "react";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied]         = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(t.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const socialLinks = [
    { 
      id: "github",   
      label: "GitHub",   
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      href: t.personal.github 
    },
    { 
      id: "linkedin", 
      label: "LinkedIn", 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: t.personal.linkedin 
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px 60px",
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.35s ease",
      }}
      className="contact-section"
    >
      <div className="grid-pattern" />
      {/* Animated background orbs */}
      <div
        className="orb"
        style={{
          width: "500px", height: "500px",
          bottom: "-100px", left: "50%", transform: "translateX(-50%)",
          background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 65%)",
          animation: "orb1 20s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        className="orb"
        style={{
          width: "300px", height: "300px",
          top: "10%", left: "5%",
          background: "radial-gradient(circle, var(--purple-soft) 0%, transparent 70%)",
          animation: "orb2 15s ease-in-out infinite 2s",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <span className="section-label" style={{ justifyContent: "center" }}>
            {t.ui.contact}
          </span>

          <h2
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(36px, 7vw, 72px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "var(--text-primary)",
              marginBottom: "20px",
              animation: "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both",
            }}
          >
            {t.ui.contactTitle1}
            <br />
            <span className="shimmer-text">{t.ui.contactTitle2}</span>
          </h2>

          <p
            style={{
              fontSize: "17px", color: "var(--text-secondary)", lineHeight: 1.75,
              marginBottom: "52px",
              animation: "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both",
            }}
          >
            {t.ui.contactDesc1}
          </p>

          {/* Email copy row */}
          <div
            onClick={handleCopy}
            style={{
              display: "inline-flex", alignItems: "center", gap: "12px",
              background: "var(--bg-card)",
              border: `1px solid ${copied ? "var(--green)" : "var(--border)"}`,
              borderRadius: "100px",
              padding: "8px 8px 8px 24px",
              marginBottom: "32px",
              cursor: "pointer",
              boxShadow: copied ? "0 0 0 4px var(--green-soft)" : "var(--shadow-sm)",
              transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              animation: "scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.3s both",
            }}
            className="email-row"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = copied ? "0 0 0 4px var(--green-soft)" : "var(--shadow-sm)";
            }}
          >
            <span style={{ fontSize: "15px", color: "var(--text-primary)", fontWeight: 500 }}>
              {t.personal.email}
            </span>
            <button
              style={{
                padding: "9px 18px",
                background: copied ? "var(--green)" : "var(--bg-tertiary)",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                fontSize: "13px", fontWeight: 700,
                color: copied ? "#fff" : "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                transform: copied ? "scale(1.05)" : "scale(1)",
              }}
            >
              {copied ? t.ui.contactCopied : t.ui.contactCopy}
            </button>
          </div>

          {/* Social + Email */}
          <div
            style={{
              display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap",
              animation: "fadeInUp 0.6s ease 0.4s both",
            }}
            className="social-ctas"
          >
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  padding: "12px 24px",
                  background: hoveredLink === link.id ? "var(--bg-tertiary)" : "var(--bg-card)",
                  border: `1px solid ${hoveredLink === link.id ? "var(--border-hover)" : "var(--border)"}`,
                  borderRadius: "100px",
                  fontSize: "14px", fontWeight: 700,
                  color: hoveredLink === link.id ? "var(--text-primary)" : "var(--text-secondary)",
                  transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                  display: "flex", alignItems: "center", gap: "8px",
                  boxShadow: hoveredLink === link.id ? "var(--shadow-md)" : "var(--shadow-sm)",
                  transform: hoveredLink === link.id ? "translateY(-3px)" : "translateY(0)",
                }}
              >
                <span>{link.icon}</span> {link.label}
              </a>
            ))}

            <a
              href={`mailto:${t.personal.email}`}
              style={{
                padding: "12px 28px",
                background: "var(--accent)",
                borderRadius: "100px",
                fontSize: "14px", fontWeight: 700, color: "#fff",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                boxShadow: "var(--shadow-accent)",
                display: "flex", alignItems: "center", gap: "8px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--accent-hover)";
                el.style.transform = "translateY(-3px) scale(1.04)";
                el.style.boxShadow = "0 12px 40px var(--accent-glow)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--accent)";
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "var(--shadow-accent)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {t.ui.contactSend}
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="footer-inner"
        style={{
          maxWidth: "1100px", margin: "80px auto 0",
          paddingTop: "36px",
          borderTop: "1px solid var(--border)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "16px",
        }}
      >
        <p style={{ fontSize: "13px", color: "var(--text-tertiary)", fontWeight: 500 }}>
          © 2026 Akmal Bintang Budiawan
        </p>
        <p style={{ fontSize: "13px", color: "var(--text-tertiary)", fontWeight: 500 }}>
          {t.personal.location}
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-section { padding: 80px 16px 40px !important; }
          .footer-inner { flex-direction: column !important; text-align: center !important; gap: 12px !important; }
        }
        @media (max-width: 480px) {
          .email-row { flex-direction: column !important; border-radius: 20px !important; padding: 20px !important; width: 100% !important; }
          .email-row button { width: 100% !important; margin-top: 12px !important; }
          .social-ctas { flex-direction: column !important; width: 100% !important; }
          .social-ctas a { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
