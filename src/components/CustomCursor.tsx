"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trailingPos, setTrailingPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onMouseMove = (e: MouseEvent) => {
      // Use raw coordinates as we will normalize the zoom on the component itself
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsHidden(false);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  // Trailing effect logic
  useEffect(() => {
    let animationFrame: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15,
      }));
      animationFrame = requestAnimationFrame(updateTrailing);
    };
    animationFrame = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos]);

  if (!mounted) return null;

  return (
    <>
      {/* Trailing Ring Follower */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          border: "1.5px solid var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: `translate3d(${trailingPos.x - 20}px, ${trailingPos.y - 20}px, 0) scale(${isPointer ? 1.5 : 1})`,
          backgroundColor: isPointer ? "var(--accent-soft)" : "color-mix(in srgb, var(--accent) 5%, transparent)",
          transition: "transform 0.15s ease-out, background-color 0.3s ease, opacity 0.3s ease",
          opacity: isHidden ? 0 : 0.5,
        }}
      />

      <style jsx global>{`
        @media (max-width: 1024px) {
          div[style*="position: fixed"] {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
