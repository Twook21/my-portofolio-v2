"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingSymbols from "./FloatingSymbols";

function useInView(threshold = 0.08) {
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

function use3DTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
    el.style.boxShadow = "var(--shadow-lg)";
  };
  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
    el.style.boxShadow = "var(--shadow-sm)";
  };
  return { ref, handleMouseMove, handleMouseLeave };
}

const statusColorMap: Record<string, string> = {
  green: "var(--green)", blue: "var(--accent)", orange: "var(--orange)",
};
const statusSoftMap: Record<string, string> = {
  green: "var(--green-soft)", blue: "var(--accent-soft)", orange: "var(--orange-soft)",
};

function ProjectCard({ project, idx, inView }: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any; idx: number; inView: boolean;
}) {
  const { t } = useLanguage();
  const { ref, handleMouseMove, handleMouseLeave } = use3DTilt();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMouseMove(e);
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      onClick={() => {
        if (isMobile) {
          setIsExpanded(!isExpanded);
        }
      }}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: 0, // No padding on outer card
        marginBottom: "20px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "var(--shadow-md)",
        display: "flex", flexDirection: "column",
        opacity: inView ? 1 : 0,
        animation: inView
          ? `fadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) ${idx * 0.12}s both`
          : "none",
        willChange: "transform",
        transition: "box-shadow 0.2s, border-color 0.2s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease",
        height: "100%",
        cursor: "pointer"
      }}
      className={`project-card-inner ${isExpanded ? 'is-expanded' : ''}`}
    >
      {/* Spotlight Effect Removed */}

      {/* Image Header */}
      <div className="project-image-container" style={{ 
        position: "relative", 
        height: "260px", 
        overflow: "hidden", 
        background: "var(--bg-tertiary)", 
        flexShrink: 0,
        width: "100%",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      }}>
        <img 
          src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"} 
          alt={project.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
            transform: isHovered ? "scale(1.08)" : "scale(1)",
            filter: isHovered ? "brightness(1.05)" : "brightness(0.95)",
          }}
        />
        {/* Gradient Overlay Removed */}

        {/* Status Badge - Floating */}
        <div className="project-status-badge" style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "6px 14px",
          borderRadius: "100px",
          fontSize: "11px",
          fontWeight: 800,
          color: "#fff",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          zIndex: 2,
        }}>
          <span style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: statusColorMap[project.statusColor],
            boxShadow: `0 0 10px ${statusColorMap[project.statusColor]}`,
            animation: project.status === "In Development" ? "pulse 2s infinite" : "none",
          }} />
          <span className="status-text">{project.status === "In Development" ? t.ui.inDevelopment : project.status === "Shipped" ? t.ui.shipped : project.status}</span>
        </div>

        {/* Year Label */}
        <div className="project-year" style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          color: "rgba(255,255,255,0.9)",
          fontSize: "12px",
          fontWeight: 700,
          zIndex: 2,
          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
        }}>
          {project.period}
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: "36px", display: "flex", flexDirection: "column", flex: 1, position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="project-header-row">
          {project.associatedLogo && (
            <div className="mobile-project-logo" style={{ display: "none" }}>
              <img 
                src={project.associatedLogo} 
                alt="" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + (project.associatedWith || "Org") + "&background=random";
                }}
                style={{ width: "100%", height: "100%", objectFit: "contain" }} 
              />
            </div>
          )}
          <div style={{ flex: 1 }}>
            {project.associatedWith && (
              <div style={{ 
                fontSize: "12px", 
                fontWeight: 700, 
                color: "var(--text-tertiary)", 
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }} className="associated-label">
                {project.associatedLogo && (
                  <div style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "4px",
                    background: "white",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border)",
                  }}>
                    <img 
                      src={project.associatedLogo} 
                      alt="" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + (project.associatedWith || "Org") + "&background=random";
                      }}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                    />
                  </div>
                )}
                {project.associatedWith}
              </div>
            )}
            <h3 style={{
              fontSize: "24px", fontWeight: 800,
              letterSpacing: "-0.03em", color: "var(--text-primary)",
              marginBottom: "8px", lineHeight: 1.1,
            }}>
              {project.name}
            </h3>
            
            <div style={{ 
              fontSize: "14px", 
              color: "var(--accent)", 
              fontWeight: 700, 
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }} className="tagline-row">
              <span style={{ opacity: 0.8 }}>✦</span> {project.tagline}
            </div>
          </div>
          
          <div className="expand-icon" style={{ display: "none", color: "var(--text-tertiary)", transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)", transform: isExpanded ? "rotate(180deg)" : "rotate(0)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <AnimatePresence>
          {(!isMobile || isExpanded) && (
            <motion.div 
              className="project-expandable-content"
              initial={isMobile ? { height: 0, opacity: 0 } : {}}
              animate={isMobile ? { height: "auto", opacity: 1 } : {}}
              exit={isMobile ? { height: 0, opacity: 0 } : {}}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <p style={{ 
                fontSize: "15px", 
                color: "var(--text-secondary)", 
                lineHeight: 1.6, 
                marginBottom: "24px",
                marginTop: window.innerWidth <= 640 ? "20px" : "0"
              }}>
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    style={{
                      padding: "5px 12px",
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      fontSize: "11px", 
                      fontWeight: 600, 
                      color: "var(--text-secondary)",
                      transition: "all 0.3s ease",
                    }}
                    className="tech-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: "auto", display: "flex", gap: "12px" }}>
                {project.github ? (
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="project-link github"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "12px",
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border)",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      transition: "all 0.3s ease",
                      textDecoration: "none"
                    }}
                  >
                    GitHub ↗
                  </a>
                ) : (
                  <div style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "12px",
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--text-tertiary)",
                    opacity: 0.7
                  }}>
                    {t.ui.projPrivate}
                  </div>
                )}
                
                {project.demo && (
                  <a
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
                    className="project-link demo"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "12px",
                      background: "var(--accent)",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#fff",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 12px var(--accent-glow)",
                      textDecoration: "none"
                    }}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .project-link.github:hover {
          background: var(--bg-secondary) !important;
          border-color: var(--accent) !important;
          color: var(--accent) !important;
          transform: translateY(-2px);
        }
        .project-link.demo:hover {
          background: var(--accent-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px var(--accent-glow) !important;
        }
        .tech-tag:hover {
          border-color: var(--accent) !important;
          color: var(--accent) !important;
          background: var(--accent-soft) !important;
        }
        @media (max-width: 640px) {
          .project-card-inner {
            flex-direction: column !important;
            padding: 24px 20px !important;
            border-radius: 20px !important;
            border: 1px solid var(--border) !important;
            background: var(--bg-secondary) !important;
            box-shadow: var(--shadow-sm) !important;
            height: auto !important;
            margin-bottom: 12px !important;
            transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1) !important;
          }
          .project-card-inner {
            padding: 20px !important;
            border-radius: 20px !important;
            border: 1px solid var(--border) !important;
            background: var(--bg-card) !important;
            box-shadow: var(--shadow-sm) !important;
            margin-bottom: 12px !important;
          }
          .project-header-row {
            gap: 16px !important;
          }
          .associated-label {
            display: flex !important;
            margin-bottom: 0 !important;
            font-size: 11px !important;
            order: 2; /* Move place name below title */
          }
          .associated-label div {
            display: none !important; /* Hide small logo in label, we'll show a bigger one */
          }
          /* Custom Logo on Left for Mobile */
          .mobile-project-logo {
             display: flex !important;
             width: 44px !important;
             height: 44px !important;
             border-radius: 8px !important;
             background: white !important;
             border: 1px solid var(--border) !important;
             padding: 6px !important;
             flex-shrink: 0 !important;
          }
          .project-card-inner h3 {
            font-size: 15px !important;
            margin-bottom: 2px !important;
          }
          .tagline-row {
            display: none !important;
          }
          .project-card-inner.is-expanded .tagline-row {
            display: flex !important;
            margin-top: 12px !important;
          }
          .expand-icon {
            display: block !important;
            margin-left: auto !important;
          }
          .project-image-container {
            display: none !important;
          }
          .project-card-inner.is-expanded .project-image-container {
            display: block !important;
            width: 100% !important;
            height: 200px !important;
            border-radius: 14px !important;
            margin-top: 24px !important;
            margin-bottom: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}



export default function Projects() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();
  const [showAll, setShowAll] = useState(false);
  
  const INITIAL_LIMIT = 4;
  const displayedProjects = showAll ? t.projects : t.projects.slice(0, INITIAL_LIMIT);

  return (
    <section
      id="projects"
      style={{
        padding: "100px 20px",
        background: "var(--bg-primary)",
        transition: "background 0.35s ease",
        position: "relative",
        overflow: "hidden",
      }}
      className="projects-section"
    >
      <div className="grid-pattern" style={{ opacity: 0.4 }} />
      <FloatingSymbols density={10} />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "60px" }}>
          <span className="section-label">{t.ui.projects}</span>
          <h2
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(28px, 6vw, 52px)",
              fontWeight: 800, letterSpacing: "-0.03em",
              lineHeight: 1.1, color: "var(--text-primary)", maxWidth: "560px",
            }}
          >
            {t.ui.projTitle1}
            <br />
            <span style={{ color: "var(--text-tertiary)", fontWeight: 700 }}>
              {t.ui.projTitle2}
            </span>
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "32px",
          }}
          className="projects-grid"
        >
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} inView={inView} />
          ))}
        </div>

        {t.projects.length > INITIAL_LIMIT && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                padding: "12px 28px",
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                fontSize: "14px", fontWeight: 700,
                color: "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--text-primary)";
                el.style.borderColor = "var(--border-hover)";
                el.style.background = "var(--bg-tertiary)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--text-secondary)";
                el.style.borderColor = "var(--border)";
                el.style.background = "transparent";
              }}
            >
              {showAll ? t.ui.showLess : t.ui.showMore}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.88)} }
        @media (max-width: 768px) {
          .projects-section { padding: 80px 16px !important; }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .project-card-inner { padding: 28px 24px !important; }
        }
      `}</style>
    </section>
  );
}
