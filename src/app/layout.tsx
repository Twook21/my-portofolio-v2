import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/stack-sans-notch";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  title: "Akmal's Thing",
  description:
    "Final-year Informatics Engineering student at PENS. Frontend-focused Software Engineer with enterprise internship experience at Kalbe Farma. Building toward world-class engineering.",
  keywords: [
    "Akmal Bintang Budiawan",
    "Software Engineer",
    "Frontend Developer",
    "Next.js",
    "React",
    "PENS",
    "Portfolio",
  ],
  authors: [{ name: "Akmal Bintang Budiawan" }],
  openGraph: {
    title: "Akmal Bintang Budiawan — Software Engineer",
    description:
      "Frontend-focused Software Engineer building toward world-class engineering.",
    type: "website",
  },
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;1,14..32,400&display=swap"
          rel="stylesheet"
        />
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('portfolio-theme') || 'light';
                  document.documentElement.setAttribute('data-theme', t);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <CustomCursor />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
