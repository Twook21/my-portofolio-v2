import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/stack-sans-notch";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://akmalbintang.vercel.app"),
  title: {
    default: "Akmal Bintang Budiawan — Software Engineer",
    template: "%s | Akmal Bintang Budiawan",
  },
  description:
    "Frontend-focused Software Engineer building toward world-class engineering. Specializing in Next.js, .NET, and crafting purposeful digital experiences.",
  keywords: [
    "Akmal Bintang Budiawan",
    "Software Engineer",
    "Frontend Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "PENS",
    "Portfolio",
    "Jakarta Tech",
  ],
  authors: [{ name: "Akmal Bintang Budiawan" }],
  creator: "Akmal Bintang Budiawan",
  openGraph: {
    title: "Akmal Bintang Budiawan — Software Engineer",
    description:
      "Building clean, purposeful software — from Jakarta to the world. Frontend-focused Software Engineer specialized in Next.js & .NET ecosystems.",
    url: "https://akmalbintang.vercel.app",
    siteName: "Akmal Bintang Budiawan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akmal Bintang Budiawan — Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akmal Bintang Budiawan — Software Engineer",
    description:
      "Frontend-focused Software Engineer specialized in Next.js & .NET ecosystems. Building toward world-class engineering.",
    images: ["/og-image.png"],
    creator: "@tw0ok_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Script from "next/script";
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
      </head>
      <body>
        {/* Inline script to prevent flash of wrong theme */}
        <Script
          id="theme-prevent-flash"
          strategy="beforeInteractive"
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
