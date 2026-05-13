import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Other Side | Creative Portfolio",
  description: "Beyond the code: Akmal Bintang Budiawan explores 3D modeling, architectural visualization, and graphic design.",
  openGraph: {
    title: "Akmal Bintang Budiawan — Creative Portfolio",
    description: "Exploring the intersections of 3D art, spatial design, and visual communication.",
    url: "https://akmal-dev.vercel.app/another",
    siteName: "Akmal Bintang Budiawan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Other Side — Akmal Bintang Budiawan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akmal Bintang Budiawan — Creative Portfolio",
    description: "Beyond the code: 3D modeling, spatial design, and visual communication.",
    images: ["/og-image.png"],
    creator: "@tw0ok_",
  },
};

export default function AnotherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
