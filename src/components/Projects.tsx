"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
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
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-2px)`;
    el.style.boxShadow = "var(--shadow-lg)";
  };
  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    el.style.boxShadow = "var(--shadow-sm)";
  };
  return { ref, handleMouseMove, handleMouseLeave };
}

const statusColorMap: Record<string, string> = {
  green: "var(--green)", blue: "var(--accent)", orange: "var(--orange)",
};

function ProjectCard({ project, inView }: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any; inView: boolean;
}) {
  const { t } = useLanguage();
  const { ref, handleMouseMove, handleMouseLeave } = use3DTilt();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "24px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "var(--shadow-md)",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      className="project-card-v2"
    >
      {/* Image Section */}
      <div style={{
        position: "relative",
        height: "220px",
        overflow: "hidden",
        background: "var(--bg-tertiary)"
      }}>
        <Image
          src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"}
          alt={`${project.name} - Project by Akmal Bintang Budiawan`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="project-image-v2"
          style={{
            objectFit: "cover",
            transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            filter: isHovered ? "brightness(1.05)" : "brightness(0.9)",
          }}
        />

        {/* Status & Date Badges */}
        <div style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          display: "flex",
          gap: "8px",
          zIndex: 2
        }}>
          <div style={{
            padding: "5px 12px",
            borderRadius: "100px",
            fontSize: "10px",
            fontWeight: 800,
            color: "#fff",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: statusColorMap[project.statusColor] || "var(--accent)",
              boxShadow: `0 0 8px ${statusColorMap[project.statusColor] || "var(--accent)"}`,
            }} />
            {project.status === "In Development" ? t.ui.inDevelopment : project.status === "Shipped" ? t.ui.shipped : project.status}
          </div>

          <div style={{
            padding: "5px 12px",
            borderRadius: "100px",
            fontSize: "10px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.8)",
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            {project.period}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
        {project.associatedWith && (
          <div style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            {project.associatedLogo && (
              <Image src={project.associatedLogo} alt={`${project.associatedWith} Logo`} width={16} height={16} style={{ objectFit: "contain" }} />
            )}
            {project.associatedWith}
          </div>
        )}

        <span style={{
          display: "block",
          fontSize: "22px", fontWeight: 800,
          letterSpacing: "-0.02em", color: "var(--text-primary)",
          marginBottom: "6px", lineHeight: 1.2,
        }}>
          {project.name}
        </span>

        <p style={{
          fontSize: "13px",
          color: "var(--text-tertiary)",
          fontWeight: 600,
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "6px"
        }}>
          <span style={{ color: "var(--accent)" }}>✦</span> {project.tagline}
        </p>

        <p style={{
          fontSize: "14px",
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          marginBottom: "24px",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "28px", marginTop: "auto" }}>
          {project.tags.slice(0, 4).map((tag: string) => (
            <span
              key={tag}
              style={{
                padding: "4px 10px",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "10px",
                fontWeight: 700,
                color: "var(--text-tertiary)",
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span style={{ fontSize: "10px", color: "var(--text-tertiary)", alignSelf: "center", fontWeight: 600 }}>
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-btn github"
              style={{
                flex: 1,
                padding: "10px",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--text-primary)",
                textAlign: "center",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
            >
              GitHub
            </a>
          ) : (
            <div style={{
              flex: 1,
              padding: "10px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--text-tertiary)",
              textAlign: "center",
              opacity: 0.6
            }}>
              {t.ui.projPrivate}
            </div>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-btn demo"
              style={{
                flex: 1,
                padding: "10px",
                background: "var(--accent)",
                borderRadius: "12px",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--accent-contrast)",
                textAlign: "center",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px var(--accent-glow)"
              }}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        .proj-btn.github:hover {
          background: var(--bg-secondary) !important;
          border-color: var(--accent) !important;
          color: var(--accent) !important;
        }
        .proj-btn.demo:hover {
          background: var(--accent-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px var(--accent-glow) !important;
        }
        .project-card-v2:hover {
          border-color: var(--accent-soft) !important;
          box-shadow: var(--shadow-lg) !important;
        }
      `}</style>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "Next.js", "Laravel", "React"];

  const filteredProjects = t.projects.filter((p: any) => {
    if (filter === "All") return true;
    return p.tags.some((tag: string) => tag.includes(filter));
  });

  const INITIAL_LIMIT = 6;
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_LIMIT);

  return (
    <section id="projects" className="projects-section" style={{
      padding: "120px 20px",
      background: "var(--bg-primary)",
      position: "relative",
      overflow: "hidden"
    }}>
      <div className="grid-pattern" style={{ opacity: 0.3 }} />
      <FloatingSymbols density={8} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 5 }}>
        {/* Header */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-label"
          >
            {t.ui.projects}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: '"Stack Sans Notch", sans-serif',
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 900, letterSpacing: "-0.04em",
              lineHeight: 1.1, color: "var(--text-primary)",
              marginTop: "16px"
            }}
          >
            {t.ui.projTitle1}
            <br />
            <span className="shimmer-text">{t.ui.projTitle2}</span>
          </motion.h2>
        </div>

        {/* Filters */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "50px",
          flexWrap: "wrap"
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
              style={{
                padding: "8px 20px",
                background: filter === cat ? "var(--accent)" : "var(--bg-card)",
                border: "1px solid",
                borderColor: filter === cat ? "var(--accent)" : "var(--border)",
                borderRadius: "100px",
                fontSize: "14px",
                fontWeight: 700,
                color: filter === cat ? "var(--accent-contrast)" : "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                boxShadow: filter === cat ? "0 4px 12px var(--accent-glow)" : "none"
              }}
              onMouseEnter={(e) => {
                if (filter !== cat) {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== cat) {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={ref} style={{ position: "relative" }}>
          <LayoutGroup>
            <motion.div
              layout
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "24px",
              }}
              className="projects-grid-bento"
            >
              <AnimatePresence mode="popLayout">
                {displayedProjects.map((project: any) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    inView={inView}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>

        {/* Load More */}
        {filteredProjects.length > INITIAL_LIMIT && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                padding: "14px 40px",
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
                e.currentTarget.style.background = "var(--bg-tertiary)";
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

      <style jsx>{`
        .shimmer-text {
          background: linear-gradient(90deg, var(--text-tertiary), var(--text-primary), var(--text-tertiary));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }
        @media (max-width: 768px) {
          .projects-section { padding: 80px 16px !important; }
          .projects-grid-bento { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
