import { MetadataRoute } from "next";
import professionsRaw from "@/public/data/professions.json";
import programsRaw from "@/public/data/programs_pages.json";

const PROGRAM_SLUGS: string[] = (programsRaw as { slug: string }[]).map((p) => p.slug);

const PROFESSION_SLUGS: string[] = (professionsRaw as { slug: string }[]).map((p) => p.slug);

const SECTION_CODES = ["01","02","03","10","11","14","20","21","25","41","43","45","46","47","49","55","56","62","68","69","70","71","85","86","93","96","50","63"];

const LAST_UPDATED = "2026-06-10T12:00:00.000Z"; // Update only when content changes

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.kad2025.gr";

  // v95: single klados block — v94 had the identical array spread TWICE
  // (kladosPages + kladosSectionUrls) → 28 duplicate URLs in sitemap.xml
  const kladosSectionUrls: MetadataRoute.Sitemap = SECTION_CODES.map((s) => ({
    url: `${base}/klados/${s}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // v97: σελίδες επαγγελμάτων (43 curated)
  const professionUrls: MetadataRoute.Sitemap = PROFESSION_SLUGS.map((slug) => ({
    url: `${base}/epaggelma/${slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    ...kladosSectionUrls,
    ...professionUrls,
    { url: `${base}/epaggelma`, lastModified: LAST_UPDATED, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/kad-2025-excel`, lastModified: LAST_UPDATED, changeFrequency: "weekly" as const, priority: 0.92 },
    { url: `${base}/widget`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/programma`, lastModified: LAST_UPDATED, changeFrequency: "weekly" as const, priority: 0.9 },
    ...PROGRAM_SLUGS.map((slug) => ({ url: `${base}/programma/${slug}`, lastModified: LAST_UPDATED, changeFrequency: "weekly" as const, priority: 0.88 })),
    { url: `${base}/en`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.6, alternates: { languages: { el: `${base}/`, en: `${base}/en` } } },
    { url: `${base}/blog/lathos-kad-prostima`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/blog/kad-gia-eshop`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/blog/kad-airbnb-vraxychronia`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: base, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 1.0 , alternates: { languages: { el: `${base}/`, en: `${base}/en` } } },
    { url: `${base}/antistoixisi`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/antistoixisi-2025`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/kad-2008`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kad-2025`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/maziki-2008`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/maziki-2025`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/odigoi`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/ti-einai-kad`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/pos-allazw-kad`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/prothesmia-kad-2025`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.88 },
    { url: `${base}/kad-ana-epaggelma`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/enarxi-epixeirisis-kad`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/odigies-logistes`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/kad-epidotisi-espa`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/kad-dypa`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/ai-suggester`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/faq`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/about`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/contact`, lastModified: LAST_UPDATED, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${base}/privacy`, lastModified: LAST_UPDATED, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: LAST_UPDATED, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/klados`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    // Blog articles
    { url: `${base}/blog/paratasi-prothesmias-kad-30-oktovriou`, lastModified: LAST_UPDATED, changeFrequency: "weekly" as const, priority: 0.98 },
    { url: `${base}/blog/psifiaki-vevaiosi-kad-2025`, lastModified: LAST_UPDATED, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${base}/blog/syxna-lathi-antistoixisis`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/blog/kad-kai-logistes`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/blog/kad-gia-nea-epixeirisi`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/blog/metodologia-dedomenon`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.8 },
    // Trust pages
    { url: `${base}/methodology`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/blog/kad-2008-vs-2025`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/blog/pos-na-vro-ton-sosto-kad`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/blog/kad-kai-epidotiseis`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/blog/anoixta-programmata-epidotisis`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/blog/pos-na-diorthoso-kad-myaade`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/blog/kad-kai-fpa-2026`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/blog/nace-rev21-explainer`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/pollapli-antistoixisi-kad`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.87 },
    { url: `${base}/diorthosi-kad-2025`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.87 },
    { url: `${base}/sources`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.65 },
    { url: `${base}/wizard`, lastModified: LAST_UPDATED, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${base}/sygkrisi`, lastModified: LAST_UPDATED, changeFrequency: "weekly" as const, priority: 0.82 },
    { url: `${base}/statistika`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/lathos-antistoixisi`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.87 },
    { url: `${base}/den-xreiazetai-allagi`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/kad-2026`, lastModified: LAST_UPDATED, changeFrequency: "monthly" as const, priority: 0.9 },
  ];
}
