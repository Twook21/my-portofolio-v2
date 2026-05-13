import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/stack-sans-notch";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://akmalbintang.vercel.app"),
  title: {
    default: "Akmal Bintang Budiawan — Software Engineer & Full-Stack Developer",
    template: "%s | Akmal Bintang Budiawan",
  },
  description:
    "Akmal Bintang Budiawan is a Software Engineer specializing in Next.js, .NET, and crafting purposeful digital experiences. Explore his projects and professional journey.",
  keywords: [
    "Akmal Bintang Budiawan",
    "Akmal Bintang",
    "Akmal",
    "Software Engineer Jakarta",
    "Full-Stack Developer Indonesia",
    "Next.js Developer",
    ".NET Developer",
    "PENS Surabaya",
    "Kalbe Group IT",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Akmal Bintang Budiawan" }],
  creator: "Akmal Bintang Budiawan",
  openGraph: {
    title: "Akmal Bintang Budiawan — Software Engineer Portfolio",
    description:
      "Full-Stack Software Engineer specializing in Next.js & .NET ecosystems. Building clean, high-performance, and purposeful software.",
    url: "https://akmalbintang.vercel.app",
    siteName: "Akmal Bintang Budiawan",
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
      "Full-Stack Software Engineer specialized in Next.js & .NET ecosystems.",
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
  alternates: {
    canonical: "https://akmalbintang.vercel.app",
    languages: {
      "en-US": "https://akmalbintang.vercel.app",
      "id-ID": "https://akmalbintang.vercel.app",
    },
  },
};

import Script from "next/script";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akmal Bintang Budiawan",
    alternateName: ["Akmal Bintang", "Akmal", "Twook21"],
    url: "https://akmalbintang.vercel.app",
    image: "https://akmalbintang.vercel.app/og-image.png",
    jobTitle: "Software Engineer",
    description: "Software Engineer specialized in Next.js, .NET, and building scalable enterprise ecosystems.",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      ".NET",
      "C#",
      "Oracle SQL",
      "PostgreSQL",
      "Software Engineering",
      "Web Development",
      "UI/UX Design",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Electronic Engineering Polytechnic Institute of Surabaya (PENS)",
    },
    worksFor: {
      "@type": "Organization",
      name: "PT Bifarma Adiluhung (Kalbe Group)",
    },
    sameAs: [
      "https://github.com/Twook21",
      "https://linkedin.com/in/akmal-bintang-budiawan",
      "https://www.instagram.com/tw0ok_/",
    ],
  };

  const navJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "SiteNavigationElement", "position": 1, "name": "Story", "url": "https://akmalbintang.vercel.app/#story" },
      { "@type": "SiteNavigationElement", "position": 2, "name": "Experience", "url": "https://akmalbintang.vercel.app/#experience" },
      { "@type": "SiteNavigationElement", "position": 3, "name": "Projects", "url": "https://akmalbintang.vercel.app/#projects" },
      { "@type": "SiteNavigationElement", "position": 4, "name": "Moments", "url": "https://akmalbintang.vercel.app/#moments" },
      { "@type": "SiteNavigationElement", "position": 5, "name": "Certifications", "url": "https://akmalbintang.vercel.app/#certifications" },
      { "@type": "SiteNavigationElement", "position": 6, "name": "Contact", "url": "https://akmalbintang.vercel.app/#contact" }
    ]
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navJsonLd) }}
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
