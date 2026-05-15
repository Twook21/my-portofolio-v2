"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/components/LanguageContext";

const navLinks = [
  { key: "story", href: "#story" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme]             = useState<"light" | "dark">("light");
  const [themeAnimating, setThemeAnimating] = useState(false);

  // Read initial theme
  useEffect(() => {
    const saved = (localStorage.getItem("portfolio-theme") || "light") as "light" | "dark";
    setTheme(saved);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeAnimating(true);
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    document.documentElement.setAttribute("data-theme", next);
    setTimeout(() => setThemeAnimating(false), 400);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = theme === "dark";

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        background: scrolled
          ? isDark
            ? "rgba(0, 0, 0, 0.82)"
            : "rgba(250, 250, 250, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? `1px solid var(--border)` : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "80px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <span style={{ fontSize: "18px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              Akmal{" "}
              <span style={{ color: "var(--text-tertiary)", fontWeight: 500 }}>
                Bintang B.
              </span>
            </span>
          </button>
        </div>

        {/* Desktop Nav - Center */}
        <ul className="desktop-nav" style={{ display: "flex", gap: "4px", listStyle: "none", alignItems: "center", justifyContent: "center" }}>
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            const label = t.ui.nav[link.key];
            return (
              <li key={link.key}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: isActive ? "var(--accent-soft)" : "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px 18px",
                    borderRadius: "20px",
                    fontSize: "15px",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget).style.color = "var(--text-primary)";
                      (e.currentTarget).style.background = "var(--bg-tertiary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget).style.color = "var(--text-secondary)";
                      (e.currentTarget).style.background = "none";
                    }
                  }}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop Controls - Right */}
        <div className="desktop-nav" style={{ display: "flex", gap: "8px", listStyle: "none", alignItems: "center", justifyContent: "flex-end" }}>
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            title={`Switch to ${lang === "en" ? "Indonesian" : "English"}`}
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-secondary)",
              transition: "all 0.3s ease",
              fontWeight: 700,
              fontSize: "13px",
              textTransform: "uppercase"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.color = "var(--accent)";
              (e.currentTarget).style.borderColor = "var(--accent)";
              (e.currentTarget).style.background = "var(--accent-soft)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.color = "var(--text-secondary)";
              (e.currentTarget).style.borderColor = "var(--border)";
              (e.currentTarget).style.background = "var(--bg-tertiary)";
            }}
          >
            {lang}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-secondary)",
              transition: "all 0.3s ease",
              transform: themeAnimating ? "rotate(180deg) scale(0.85)" : "rotate(0deg) scale(1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.color = "var(--accent)";
              (e.currentTarget).style.borderColor = "var(--accent)";
              (e.currentTarget).style.background = "var(--accent-soft)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.color = "var(--text-secondary)";
              (e.currentTarget).style.borderColor = "var(--border)";
              (e.currentTarget).style.background = "var(--bg-tertiary)";
            }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* CTA */}
          <a
            href={`mailto:${t.personal.email}`}
            style={{
              padding: "10px 22px",
              background: "var(--accent)",
              borderRadius: "20px",
              fontSize: "15px",
              fontWeight: 700,
              color: "var(--accent-contrast)",
              transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
              display: "inline-block",
              boxShadow: "0 2px 8px var(--accent-glow)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.background = "var(--accent-hover)";
              (e.currentTarget).style.transform = "translateY(-2px) scale(1.04)";
              (e.currentTarget).style.boxShadow = "var(--shadow-accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.background = "var(--accent)";
              (e.currentTarget).style.transform = "translateY(0) scale(1)";
              (e.currentTarget).style.boxShadow = "0 2px 8px var(--accent-glow)";
            }}
          >
            Say Hello ✦
          </a>
        </div>

        {/* Mobile right controls */}
        <div className="mobile-controls" style={{ display: "none", alignItems: "center", gap: "8px" }}>
          <button
            onClick={toggleLanguage}
            style={{
              width: "34px", height: "34px", borderRadius: "50%",
              background: "var(--bg-tertiary)", border: "1px solid var(--border)",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--text-secondary)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase",
              transition: "transform 0.3s ease",
            }}
          >
            {lang}
          </button>
          <button
            onClick={toggleTheme}
            style={{
              width: "34px", height: "34px", borderRadius: "50%",
              background: "var(--bg-tertiary)", border: "1px solid var(--border)",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--text-secondary)",
              transition: "transform 0.3s ease",
              transform: themeAnimating ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "var(--text-primary)", fontSize: "18px" }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="mobile-menu-container"
        style={{
          display: menuOpen ? "block" : "none",
          position: "absolute",
          top: "100%", // Exactly below the 80px nav
          left: 0,
          right: 0,
          height: "calc(100vh - 80px)",
          background: isDark ? "#0a0a0a" : "#ffffff",
          zIndex: 200,
          borderTop: `1px solid var(--border)`,
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div style={{ padding: "10px 0", height: "100%", overflowY: "auto" }}>
          {navLinks.map((link, i) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.href)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                background: "none", border: "none", cursor: "pointer",
                padding: "20px 24px",
                fontSize: "19px", fontWeight: 600,
                color: activeSection === link.href.replace("#", "") ? "var(--accent)" : "var(--text-secondary)",
                borderBottom: `1px solid var(--border)`,
                animation: menuOpen ? `slideInLeft 0.5s ease ${i * 0.08}s both` : "none",
              }}
            >
              {t.ui.nav[link.key]}
            </button>
          ))}
          <div style={{ padding: "40px 24px" }}>
            <a
              href={`mailto:${t.personal.email}`}
              style={{
                display: "block",
                textAlign: "center",
                padding: "18px",
                background: "var(--accent)",
                borderRadius: "16px",
                color: "var(--accent-contrast)",
                fontWeight: 700,
                fontSize: "17px",
                boxShadow: "var(--shadow-accent)",
                animation: menuOpen ? `slideInLeft 0.5s ease ${navLinks.length * 0.08}s both` : "none",
              }}
            >
              Say Hello ✦
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
          nav { 
            display: flex !important; 
            justify-content: space-between !important;
            grid-template-columns: none !important;
            height: 64px !important;
          }
          .mobile-menu-container {
            top: 64px !important;
            height: calc(100vh - 64px) !important;
          }
        }
        @media (max-width: 480px) {
          nav { padding: 0 16px !important; }
        }
      `}</style>
    </header>
  );
}
