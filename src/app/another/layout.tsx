import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Other Side",
  description: "Beyond the code: exploring 3D modeling, architectural visualization, and graphic design.",
  openGraph: {
    title: "Akmal Bintang Budiawan — The Other Side",
    description: "Exploring the intersections of 3D art, spatial design, and visual communication.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Other Side — Akmal Bintang Budiawan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akmal Bintang Budiawan — The Other Side",
    description: "Beyond the code: 3D modeling, spatial design, and visual communication.",
    images: ["/og-image.png"],
  },
};

export default function AnotherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
