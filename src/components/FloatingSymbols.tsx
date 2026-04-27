"use client";

import React, { useEffect, useState } from 'react';

interface SymbolData {
  id: number;
  text: string;
  top: string;
  left: string;
  size: string;
  opacity: number;
  duration: string;
  delay: string;
}

const symbolsList = ["</>", "{ }", "( )", "[ ]", "=>", "&&", "||", "!=", ";", "const", "git", "npm", "py", "js", "ts", "cs"];

export default function FloatingSymbols({ density = 10 }: { density?: number }) {
  const [symbols, setSymbols] = useState<SymbolData[]>([]);

  useEffect(() => {
    const newSymbols: SymbolData[] = [];
    for (let i = 0; i < density; i++) {
      newSymbols.push({
        id: i,
        text: symbolsList[Math.floor(Math.random() * symbolsList.length)],
        top: `${Math.random() * 90 + 5}%`,
        left: `${Math.random() * 90 + 5}%`,
        size: `${Math.random() * 6 + 10}px`,
        opacity: Math.random() * 0.2 + 0.1,
        duration: `${Math.random() * 10 + 10}s`,
        delay: `${Math.random() * 5}s`,
      });
    }
    setSymbols(newSymbols);
  }, [density]);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {symbols.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            fontSize: s.size,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "var(--text-tertiary)",
            opacity: s.opacity,
            animation: `float ${s.duration} ease-in-out infinite ${s.delay}`,
            userSelect: "none",
          }}
          className="decorative-element"
        >
          {s.text}
        </div>
      ))}
    </div>
  );
}
