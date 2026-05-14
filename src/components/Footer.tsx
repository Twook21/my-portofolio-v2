"use client";

import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const sections = [
    { name: t.ui.nav.story, href: "/#story" },
    { name: t.ui.nav.experience, href: "/#experience" },
    { name: t.ui.nav.projects, href: "/#projects" },
    { name: t.ui.nav.contact, href: "/#contact" },
    { name: "The Other Side", href: "/another" },
  ];

  return (
    <footer style={{ 
      padding: "80px 20px 40px", 
      background: "var(--bg-primary)", 
      borderTop: "1px solid var(--border)",
      position: "relative",
      zIndex: 10
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "40px",
          marginBottom: "60px"
        }}>
          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "16px", color: "var(--text-primary)" }}>
              Akmal Bintang B<span style={{ color: "var(--accent)" }}>.</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.6, maxWidth: "300px" }}>
              {t.personal.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 800, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-primary)" }}>
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {sections.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 800, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-primary)" }}>
              Socials
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <a href="https://linkedin.com/in/akmal-bintang-budiawan" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none" }}>LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/Twook21" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none" }}>GitHub</a>
              </li>
              <li>
                <a href="https://instagram.com/tw0ok_" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none" }}>Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ 
          borderTop: "1px solid var(--border)", 
          paddingTop: "40px", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <p style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
            &copy; {currentYear} Akmal Bintang Budiawan. {t.ui.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
