import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "Claude-Webview", "Google-Extended", "CCBot", "Omgilibot"],
        allow: "/",
      }
    ],
    sitemap: "https://akmal-dev.vercel.app/sitemap.xml",
  };
}
