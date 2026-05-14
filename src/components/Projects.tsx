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

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.name,
    "description": project.description,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web",
    "author": { "@id": "https://akmal-dev.vercel.app/#person" },
    "image": project.image,
    "url": project.demo || "https://akmal-dev.vercel.app"
  };

  return (
    <motion.div
      layout="position"
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
        willChange: "transform, opacity"
      }}
      className="project-card-v2"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      {/* Image Section */}
      <div style={{
        position: "relative",
        height: "220px",
        overflow: "hidden",
        background: "var(--bg-tertiary)"
      }}>
        <a 
          href={project.demo || project.github || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: "block", width: "100%", height: "100%", cursor: project.demo || project.github ? "pointer" : "default" }}
          onClick={(e) => { if (!project.demo && !project.github) e.preventDefault(); }}
        >
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
        </a>

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

        <a 
          href={project.demo || project.github || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          onClick={(e) => { if (!project.demo && !project.github) e.preventDefault(); }}
        >
          <span style={{
            display: "block",
            fontSize: "22px", fontWeight: 800,
            letterSpacing: "-0.02em", color: "var(--text-primary)",
            marginBottom: "6px", lineHeight: 1.2,
            transition: "color 0.2s ease"
          }}
          className="project-title-link"
          >
            {project.name}
          </span>
        </a>

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
        </div>        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub repository for ${project.name}`}
              style={{
                width: "44px", height: "44px", borderRadius: "12px",
                background: "var(--bg-tertiary)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text-secondary)", transition: "all 0.2s ease"
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          ) : (
            <div style={{
              width: "44px", height: "44px", borderRadius: "12px",
              background: "var(--bg-secondary)", border: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--text-tertiary)", opacity: 0.6
            }} title="Private Repo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          )}
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.name}`}
              style={{
                flex: 1, height: "44px", borderRadius: "12px",
                background: "var(--accent)", border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "8px", color: "white", fontSize: "14px", fontWeight: 700,
                textDecoration: "none", transition: "all 0.2s ease",
                boxShadow: "0 4px 12px var(--accent-glow)"
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.filter = "brightness(1.1)";
                e.currentTarget.style.boxShadow = "0 8px 20px var(--accent-glow)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.filter = "brightness(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px var(--accent-glow)";
              }}
            >
              {t.ui.projDemo}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
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
        .project-title-link:hover {
          color: var(--accent) !important;
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
