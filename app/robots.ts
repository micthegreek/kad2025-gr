import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow everything except internal paths
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/data/", "/antistoixisi?*", "/antistoixisi-2025?*", "/kad-2008?*", "/kad-2025?*"],
      },
      // Explicitly allow all AI crawlers (override Cloudflare managed block)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "Amazonbot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
    ],
    sitemap: [
      "https://www.kad2025.gr/sitemap.xml",
      "https://www.kad2025.gr/sitemap-kad-1.xml",
      "https://www.kad2025.gr/sitemap-kad-2.xml",
      "https://www.kad2025.gr/sitemap-kad-3.xml",
      "https://www.kad2025.gr/sitemap-kad-4.xml",
      "https://www.kad2025.gr/sitemap-kad-5.xml",
    ],
  };
}
