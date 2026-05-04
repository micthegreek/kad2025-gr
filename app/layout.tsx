import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kad2025.gr"),
  other: {
    "google-adsense-account": "ca-pub-8450100137851566",
  },
  title: {
    default: "ΚΑΔ 2025: Αντιστοίχιση 2008→2025 | 10.923 Κωδικοί ΑΑΔΕ",
    template: "%s | kad2025.gr",
  },
  description:
    "Πλήρης αντιστοίχιση ΚΑΔ 2008 με ΚΑΔ 2025. 10.923 κωδικοί, αναζήτηση, εξαγωγή Excel & CSV. Επίσημα δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026. Ισχύς από 1/3/2026.",
  authors: [{ name: "kad2025.gr" }],
  creator: "kad2025.gr",
  publisher: "kad2025.gr",
  manifest: "/manifest.json",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://www.kad2025.gr",
    siteName: "kad2025.gr",
    title: "ΚΑΔ 2025 - Πλήρης Αντιστοίχιση & Αναζήτηση",
    description: "Αναζητήστε και συγκρίνετε 10.923 κωδικούς ΚΑΔ. Εξαγωγή Excel & CSV. Επίσημα δεδομένα ΑΑΔΕ.",
    images: [
      {
        url: "https://www.kad2025.gr/og-image.png",
        width: 1200,
        height: 630,
        alt: "ΚΑΔ 2025 - Αντιστοίχιση Κωδικών Δραστηριότητας",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ΚΑΔ 2025 - Αντιστοίχιση & Αναζήτηση",
    description: "Πλήρης αντιστοίχιση 10.923 ΚΑΔ. Ισχύς από 1/3/2026.",
    images: [{ url: "https://www.kad2025.gr/og-image.png", width: 1200, height: 630, alt: "ΚΑΔ 2025 - Αντιστοίχιση ΚΑΔ" }],
  },
  alternates: {
    canonical: "https://www.kad2025.gr",
    languages: { "el-GR": "https://www.kad2025.gr" },
  },
  verification: { google: ["w6cpKZQQb9cuwLuIpcYD2uqxbhgoAKxyBgGfL8du48E", "T8H6yncU2HvSmNcAg9V0GnXF19HGh32IsvfA4-dpUcM"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.kad2025.gr/#website",
      name: "kad2025.gr",
      url: "https://www.kad2025.gr",
      description: "Πλήρης αντιστοίχιση ΚΑΔ 2008 με ΚΑΔ 2025 - Επίσημα δεδομένα ΑΑΔΕ",
      inLanguage: "el-GR",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.kad2025.gr/kad-2008?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.kad2025.gr/#organization",
      name: "kad2025.gr",
      url: "https://www.kad2025.gr",
      description: "Πλήρης αντιστοίχιση ΚΑΔ 2008 → 2025. Επίσημα δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026.",
      logo: {
        "@type": "ImageObject",
        url: "https://www.kad2025.gr/og-image.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@kad2025.gr",
        availableLanguage: ["Greek"],
      },
      knowsAbout: ["ΚΑΔ 2025", "NACE Rev. 2.1", "ΑΑΔΕ", "Κωδικοί Αριθμοί Δραστηριότητας"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Static deadline - no dynamic Date.now() in server layout (can become stale in static deploy)
  const showBanner = new Date() < new Date("2026-06-01T00:00:00+03:00");

  return (
    <html lang="el" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="el-GR" href="https://www.kad2025.gr/" />
        <link rel="alternate" hrefLang="el" href="https://www.kad2025.gr/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.kad2025.gr/" />
        {/* AI training signal removed — not actively opted in */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Theme init — must be sync to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('kad-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />

        {/* Google Consent Mode v2 — MUST be set before gtag/GA/AdSense load.
            Defaults: all denied. Will be updated by CookieConsent component
            after user makes a choice (or if consent was previously saved). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  analytics_storage:'denied',
  wait_for_update:500
});
// Restore consent from localStorage if previously set
(function(){try{
  var c=localStorage.getItem('kad-cookie-consent');
  if(c==='accepted'){
    gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});
  }
}catch(e){}})();
`,
          }}
        />
      </head>
      <body>
        {/* GA4 — loads after hydration */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BSSB8F33SV" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
gtag('js',new Date());
gtag('config','G-BSSB8F33SV',{anonymize_ip:true});
`}</Script>

        {/* Google AdSense — Auto Ads */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8450100137851566"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* Cloudflare Analytics — lazyOnload */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="lazyOnload"
          data-cf-beacon='{"token": "0031f53f240b4e6497056b40f5417625"}'
        />

        {/* Informational deadline reminder — neutral tone, not pressure */}
        {showBanner && (
          <div
            role="note"
            style={{
              background: "#1e3a5f",
              color: "rgba(255,255,255,0.92)",
              padding: "0.55rem 1rem",
              textAlign: "center",
              fontSize: "0.85rem",
              minHeight: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
            }}
          >
            <span>📅</span>
            <span>
              Υπενθύμιση: Ελέγξτε εγκαίρως την αντιστοίχιση ΚΑΔ σας σύμφωνα με τις{" "}
              <a
                href="https://myaade.gov.gr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#93c5fd", fontWeight: 700 }}
              >
                επίσημες οδηγίες ΑΑΔΕ
              </a>{" "}
              έως{" "}
              <strong style={{ color: "white" }}>1η Ιουνίου 2026</strong>
.
            </span>
          </div>
        )}

        <Navbar />
        <main style={{ minHeight: "calc(100vh - 200px)" }}>{children}</main>
        <Footer />

        {/* Cookie consent banner — client component, shown on first visit */}
        <CookieConsent />
      </body>
    </html>
  );
}
