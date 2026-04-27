"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read saved theme or default to "light"
    const saved = localStorage.getItem("portfolio-theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  // Avoid flash of wrong theme
  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>{children}</div>
    );
  }

  return <>{children}</>;
}
