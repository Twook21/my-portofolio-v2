"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import FloatingSymbols from "@/components/FloatingSymbols";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div style={{
      height: "100vh",
      width: "100%",
      background: "var(--bg-primary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
      padding: "20px"
    }}>
      {/* Background elements */}
      <div className="grid-pattern" style={{ opacity: 0.3 }} />
      <FloatingSymbols density={15} />

      {/* Decorative Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        height: "400px",
        background: "var(--accent-glow)",
        filter: "blur(120px)",
        borderRadius: "50%",
        opacity: 0.4,
        zIndex: 0
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "relative", zIndex: 5 }}
      >
        <motion.h1
          animate={{ 
            y: [0, -15, 0],
            rotateZ: [0, -2, 2, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            fontSize: "clamp(120px, 20vw, 220px)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            margin: 0,
            lineHeight: 0.8,
            background: "linear-gradient(135deg, var(--text-primary) 30%, var(--accent) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))"
          }}
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginTop: "20px",
            marginBottom: "16px",
            letterSpacing: "-0.02em"
          }}>
            {t.ui.notFoundTitle}
          </h2>
          
          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "var(--text-secondary)",
            maxWidth: "500px",
            margin: "0 auto 40px",
            lineHeight: 1.6
          }}>
            {t.ui.notFoundDesc}
          </p>

          <Link href="/" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                background: "var(--accent)",
                color: "#fff",
                borderRadius: "100px",
                fontSize: "15px",
                fontWeight: 700,
                boxShadow: "0 10px 30px var(--accent-glow)",
                transition: "all 0.3s ease"
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              {t.ui.backHome}
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @font-face {
          font-family: 'Stack Sans Notch';
          src: url('/fonts/StackSansNotch-Black.woff2') format('woff2');
          font-weight: 900;
          font-style: normal;
        }
      `}</style>
    </div>
  );
}
