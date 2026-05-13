import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@fontsource/stack-sans-notch";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext";
import { Inter } from "next/font/google";
import Script from "next/script";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://akmal-dev.vercel.app"),
  title: {
    default: "Akmal Bintang | Software Engineer - Next.js & .NET Expert",
    template: "%s | Akmal Bintang",
  },
  description:
    "Akmal Bintang Budiawan is a Full-Stack Software Engineer specialized in Next.js, React, and .NET ecosystems. Building clean, high-performance, and scalable enterprise-level software solutions.",
  keywords: [
    "Akmal Bintang Budiawan",
    "Akmal Bintang",
    "Software Engineer Jakarta",
    "Full-Stack Developer Indonesia",
    "Next.js Expert",
    "React Developer",
    ".NET Core Developer",
    "Software Engineering Portfolio",
    "Enterprise Software Solutions",
    "Web Development Jakarta",
  ],
  authors: [{ name: "Akmal Bintang Budiawan" }],
  creator: "Akmal Bintang Budiawan",
  openGraph: {
    title: "Akmal Bintang | Software Engineer Portfolio",
    description:
      "Explore the portfolio of Akmal Bintang Budiawan, a Software Engineer specializing in Next.js & .NET. Building clean, purposeful, and high-performance software.",
    url: "https://akmal-dev.vercel.app",
    siteName: "Akmal Bintang Budiawan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akmal Bintang - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akmal Bintang | Software Engineer",
    description:
      "Full-Stack Software Engineer specialized in Next.js & .NET ecosystems. Delivering high-impact software solutions.",
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
    canonical: "https://akmal-dev.vercel.app",
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
      "x-default": "https://akmal-dev.vercel.app",
    },
  },
  verification: {
    google: "fa465e72bfc35bee",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akmal Bintang Budiawan",
    alternateName: ["Akmal Bintang", "Akmal", "Twook21"],
    url: "https://akmal-dev.vercel.app",
    image: "https://akmal-dev.vercel.app/og-image.png",
    jobTitle: "Software Engineer",
    description: "Software Engineer specialized in Next.js, React, and .NET, building scalable enterprise ecosystems and high-performance web applications.",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      ".NET Core",
      "C#",
      "Oracle SQL",
      "PostgreSQL",
      "Software Architecture",
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
      { "@type": "SiteNavigationElement", "position": 1, "name": "Story", "url": "https://akmal-dev.vercel.app/#story" },
      { "@type": "SiteNavigationElement", "position": 2, "name": "Experience", "url": "https://akmal-dev.vercel.app/#experience" },
      { "@type": "SiteNavigationElement", "position": 3, "name": "Projects", "url": "https://akmal-dev.vercel.app/#projects" },
      { "@type": "SiteNavigationElement", "position": 4, "name": "Moments", "url": "https://akmal-dev.vercel.app/#moments" },
      { "@type": "SiteNavigationElement", "position": 5, "name": "Certifications", "url": "https://akmal-dev.vercel.app/#certifications" },
      { "@type": "SiteNavigationElement", "position": 6, "name": "Contact", "url": "https://akmal-dev.vercel.app/#contact" }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-VWPXYXNWK8`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VWPXYXNWK8', {
                page_path: window.location.pathname,
              });
            `,
          }}
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
