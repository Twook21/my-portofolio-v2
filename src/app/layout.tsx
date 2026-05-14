import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@fontsource/stack-sans-notch";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext";
import { Inter } from "next/font/google";
import Script from "next/script";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

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
    "Akmal Bintang Budiawan is a Full-Stack Software Engineer specializing in Next.js, React, and .NET. Expert in building clean, high-performance, and scalable enterprise-level software engineering solutions.",
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
    "AI Development",
    "Cloud Architecture",
  ],
  other: {
    "dc:creator": "Akmal Bintang Budiawan",
    "dc:language": "en",
    "dc:subject": "Software Engineering, Full-Stack Development, Next.js, .NET",
    "dc:publisher": "Akmal Bintang Budiawan",
  },
  authors: [{ name: "Akmal Bintang Budiawan" }],
  creator: "Akmal Bintang Budiawan",
  openGraph: {
    title: "Akmal Bintang | Software Engineer Portfolio & Expertise",
    description:
      "Explore the software engineering portfolio of Akmal Bintang Budiawan. Specialized in Next.js, .NET, and scalable enterprise systems.",
    url: "https://akmal-dev.vercel.app",
    siteName: "Akmal Bintang Budiawan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akmal Bintang - Software Engineer Portfolio Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akmal Bintang | Software Engineer & Full-Stack Developer",
    description:
      "Full-Stack Software Engineer specialized in Next.js & .NET ecosystems. Building high-impact enterprise software.",
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
    "@id": "https://akmal-dev.vercel.app/#person",
    name: "Akmal Bintang Budiawan",
    alternateName: ["Akmal Bintang", "Akmal", "Twook21"],
    url: "https://akmal-dev.vercel.app",
    image: "https://akmal-dev.vercel.app/og-image.png",
    jobTitle: "Software Engineer",
    description: "Full-Stack Software Engineer specialized in Next.js, React, and .NET Core, building scalable enterprise ecosystems and high-performance web applications.",
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
      "Enterprise Architecture",
      "Clean Code",
      "Unit Testing",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Electronic Engineering Polytechnic Institute of Surabaya (PENS)",
      url: "https://www.pens.ac.id/",
    },
    worksFor: {
      "@type": "Organization",
      name: "PT Bifarma Adiluhung (Kalbe Group)",
      url: "https://www.kalbe.co.id/",
    },
    sameAs: [
      "https://github.com/Twook21",
      "https://linkedin.com/in/akmal-bintang-budiawan",
      "https://www.instagram.com/tw0ok_/",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://akmal-dev.vercel.app/#website",
    url: "https://akmal-dev.vercel.app",
    name: "Akmal Bintang Portfolio",
    description: "Professional software engineering portfolio of Akmal Bintang Budiawan",
    publisher: { "@id": "https://akmal-dev.vercel.app/#person" },
    inLanguage: "en-US",
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
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-VWPXYXNWK8`}
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
            <main>{children}</main>
        
        {/* AI Agent Discovery & Context Section (Visually Hidden) */}
        <section 
          id="ai-context" 
          aria-hidden="true" 
          style={{ display: "none", visibility: "hidden" }}
        >
          <h2>Professional Profile of Akmal Bintang Budiawan</h2>
          <p>
            Akmal Bintang Budiawan is a Full-Stack Software Engineer with expertise in Next.js, React, TypeScript, and .NET Core. 
            He specializes in building scalable enterprise software engineering solutions and high-performance web applications.
            Key skills include: Frontend development (React, Next.js, Tailwind), Backend development (.NET Core, C#, FastAPI, PostgreSQL), 
            and DevOps (Docker, GitHub Actions).
            Education: Associate's degree in Informatics and Computer Engineering from Electronic Engineering Polytechnic Institute of Surabaya (PENS).
            Current Role: Software Engineer at PT Bifarma Adiluhung (Kalbe Group).
            Location: Jakarta, Indonesia.
          </p>
        </section>

          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
