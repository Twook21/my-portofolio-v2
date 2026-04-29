"use client";

import { useState, useEffect } from "react";
import { personal } from "@/lib/data";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    
    const handleScroll = () => {
      // Show immediately on mobile, 300px on desktop
      const threshold = window.innerWidth <= 640 ? 0 : 300;
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(window.innerWidth <= 640); // Always visible on mobile
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    
    // Initial check in case they are already scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  interface SocialItem {
    id: string;
    name: string;
    url: string;
    icon: React.ReactNode;
    isInternal?: boolean;
  }

  const socials: SocialItem[] = [
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
    // {
    //   id: "another",
    //   name: "Another Me",
    //   url: "/another",
    //   icon: (
    //     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //       <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    //       <path d="M5 3l1.4 1.4" />
    //       <path d="M19 3l-1.4 1.4" />
    //       <path d="M5 21l1.4-1.4" />
    //       <path d="M19 21l-1.4-1.4" />
    //     </svg>
    //   ),
    //   isInternal: true,
    // },
  ];

  return (
    <div
      style={{
        position: "fixed",
        right: "24px",
        bottom: "40px",
        display: "flex",
        flexDirection: "column-reverse",
        gap: "12px",
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        pointerEvents: isVisible ? "auto" : "none",
      }}
      className="floating-cta"
    >
      {/* Toggle Button (Mobile Only) */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="cta-toggle"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "var(--accent)",
          border: "none",
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--accent-contrast)",
          boxShadow: "0 10px 25px rgba(95, 165, 249, 0.4)",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          zIndex: 10,
          transform: isExpanded ? "rotate(135deg)" : "rotate(0deg)",
        }}
        aria-label="Toggle Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>

      {socials.map((social, i) => (
        <a
          key={social.id}
          href={social.url}
          target={social.isInternal ? "_self" : "_blank"}
          rel={social.isInternal ? "" : "noopener noreferrer"}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: social.id === "another" ? "var(--accent)" : "var(--text-secondary)",
            boxShadow: "var(--shadow-md)",
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            position: "relative",
            transitionDelay: `${i * 0.05}s`,
          }}
          className={`cta-button ${isExpanded ? "expanded" : ""}`}
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
            el.style.color = social.id === "another" ? "var(--accent)" : "var(--text-secondary)";
            el.style.borderColor = "var(--border)";
            el.style.boxShadow = "var(--shadow-md)";
          }}
          aria-label={social.name}
        >
          {social.icon}
          <span className="tooltip">{social.name}</span>
        </a>
      ))}

      <style jsx>{`
        .floating-cta {
          position: fixed !important;
          right: 24px !important;
          bottom: 40px !important;
          display: flex !important;
          flex-direction: column-reverse !important;
          gap: 12px !important;
          z-index: 99999 !important;
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }

        .cta-button {
          position: relative;
        }
        .tooltip {
          position: absolute;
          right: 60px;
          top: 50%;
          transform: translateY(-50%) translateX(10px);
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.2s ease;
          box-shadow: var(--shadow-md);
        }
        .cta-button:hover .tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        @media (max-width: 640px) {
          .floating-cta {
            right: 20px !important;
            bottom: 30px !important;
          }
          .cta-toggle {
            display: flex !important;
            width: 54px !important;
            height: 54px !important;
          }
          .cta-button {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
            pointer-events: none;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            width: 46px !important;
            height: 46px !important;
          }
          .cta-button.expanded {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: auto;
          }
          .tooltip {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
