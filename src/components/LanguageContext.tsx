"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { dictionary } from "@/lib/dictionary";

type Language = "en" | "id";
type Dictionary = typeof dictionary.en;

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    // Client-side initialization to avoid hydration mismatch
    const storedLang = localStorage.getItem("language") as Language | null;
    if (storedLang && (storedLang === "en" || storedLang === "id")) {
      setLang(storedLang);
    } else {
      // Default to ID if preferred language is ID
      if (navigator.language.startsWith("id")) {
        setLang("id");
      }
    }
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => {
      const nextLang = prev === "en" ? "id" : "en";
      localStorage.setItem("language", nextLang);
      return nextLang;
    });
  };

  const t = dictionary[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
