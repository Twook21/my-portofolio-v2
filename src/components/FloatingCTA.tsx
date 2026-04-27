"use client";

import { useState, useEffect } from "react";
import { personal } from "@/lib/data";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socials = [
    {
      id: "github",
      name: "GitHub",
      url: personal.github,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: personal.linkedin,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      id: "instagram",
      name: "Instagram",
      url: personal.instagram,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        right: "24px",
        bottom: "100px", // Higher than footer
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        zIndex: 100,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(20px)",
        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        pointerEvents: isVisible ? "auto" : "none",
      }}
      className="floating-cta"
    >
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-secondary)",
            boxShadow: "var(--shadow-md)",
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.transform = "scale(1.1) translateY(-4px)";
            el.style.color = "var(--accent)";
            el.style.borderColor = "var(--accent)";
            el.style.boxShadow = "0 8px 24px var(--accent-glow)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.transform = "scale(1) translateY(0)";
            el.style.color = "var(--text-secondary)";
            el.style.borderColor = "var(--border)";
            el.style.boxShadow = "var(--shadow-md)";
          }}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
      <style jsx>{`
        @media (max-width: 640px) {
          .floating-cta {
            right: 16px;
            bottom: 32px;
          }
          .floating-cta a {
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </div>
  );
}
