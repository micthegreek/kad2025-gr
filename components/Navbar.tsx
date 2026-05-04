"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useMemo, useRef } from "react";

const allLinks = [
  { href: "/", label: "Αρχική" },
  { href: "/kad-2008", label: "Λίστα ΚΑΔ 2008" },
  { href: "/kad-2025", label: "Λίστα ΚΑΔ 2025" },
  { href: "/antistoixisi", label: "Αντιστοίχιση 08→25" },
  { href: "/antistoixisi-2025", label: "Αντιστοίχιση 25→08" },
  { href: "/maziki-2008", label: "Μαζική 08→25" },
  { href: "/maziki-2025", label: "Μαζική 25→08" },
  { href: "/blog", label: "📖 Οδηγοί" },
  { href: "/faq", label: "❓ FAQ" },
];

const toolsLinks: Array<{ href?: string; label?: string; isHeader?: boolean; badge?: string; divider?: boolean }> = [
  { href: "/blog", label: "📖 Οδηγοί — Όλα τα Άρθρα  ·  1 Μαΐου '26", isHeader: true },
  { href: "/ai-suggester", label: "✨ AI Εύρεση ΚΑΔ" },
  { href: "/wizard", label: "🧭 Οδηγός Επιλογής" },
  { href: "/kad-epidotisi-espa", label: "💰 Επιλεξιμότητα Επιδοτήσεων" },
  { href: "/sygkrisi", label: "⚖️ Σύγκριση ΚΑΔ" },
  { href: "/statistika", label: "📊 Στατιστικά" },
  { href: "/saved", label: "★ Αποθηκευμένα" },
];

// Site pages for search
const SITE_PAGES = [
  { href: "/antistoixisi", label: "Αντιστοίχιση ΚΑΔ 2008→2025", keywords: "αντιστοίχιση παλιός νέος" },
  { href: "/antistoixisi-2025", label: "Αντιστοίχιση ΚΑΔ 2025→2008", keywords: "αντίστροφη" },
  { href: "/kad-2008", label: "Αναζήτηση ΚΑΔ 2008", keywords: "παλιοί κωδικοί" },
  { href: "/kad-2025", label: "Αναζήτηση ΚΑΔ 2025", keywords: "νέοι κωδικοί" },
  { href: "/ai-suggester", label: "AI Εύρεση ΚΑΔ", keywords: "τεχνητή νοημοσύνη πρόταση δραστηριότητα" },
  { href: "/wizard", label: "Οδηγός Επιλογής ΚΑΔ", keywords: "wizard βήμα βήμα" },
  { href: "/maziki-2008", label: "Μαζική Αντιστοίχιση 2008→2025", keywords: "μαζική bulk excel" },
  { href: "/maziki-2025", label: "Μαζική Αντιστοίχιση 2025→2008", keywords: "μαζική bulk excel" },
  { href: "/sygkrisi", label: "Σύγκριση ΚΑΔ", keywords: "σύγκριση compare" },
  { href: "/klados", label: "ΚΑΔ ανά Κλάδο", keywords: "κλάδος κατηγορία τομέας" },
  { href: "/klados/56", label: "ΚΑΔ Εστίασης", keywords: "εστιατόριο καφέ ταβέρνα" },
  { href: "/klados/55", label: "ΚΑΔ Τουρισμού", keywords: "ξενοδοχείο κατάλυμα airbnb τουρισμός" },
  { href: "/klados/62", label: "ΚΑΔ Πληροφορικής", keywords: "IT software τεχνολογία πληροφορική" },
  { href: "/klados/47", label: "ΚΑΔ Εμπορίου", keywords: "λιανικό εμπόριο κατάστημα" },
  { href: "/klados/69", label: "ΚΑΔ Λογιστών", keywords: "λογιστής δικηγόρος λογιστικά" },
  { href: "/kad-epidotisi-espa", label: "ΚΑΔ για ΕΣΠΑ & Επιδοτήσεις", keywords: "εσπα επιδότηση χρηματοδότηση επιλεξιμότητα" },
  { href: "/kad-dypa", label: "ΚΑΔ για ΔΥΠΑ", keywords: "δυπα οαεδ απασχόληση επιδοτούμενη" },
  { href: "/kad-ana-epaggelma", label: "ΚΑΔ ανά Επάγγελμα", keywords: "επάγγελμα δραστηριότητα" },
  { href: "/enarxi-epixeirisis-kad", label: "ΚΑΔ για Έναρξη Επιχείρησης", keywords: "έναρξη νέα επιχείρηση" },
  { href: "/prothesmia-kad-2025", label: "Προθεσμία ΚΑΔ 2025", keywords: "προθεσμία 1 ιουνίου 2026 πρόστιμο" },
  { href: "/lathos-antistoixisi", label: "Λάθος Αντιστοίχιση ΚΑΔ", keywords: "λάθος λανθασμένη διόρθωση" },
  { href: "/pos-allazw-kad", label: "Πώς Αλλάζω ΚΑΔ", keywords: "αλλαγή myaade taxisnet" },
  { href: "/den-xreiazetai-allagi", label: "Δεν Χρειάζεται Αλλαγή ΚΑΔ", keywords: "αμετάβλητος ίδιος" },
  { href: "/odigies-logistes", label: "Οδηγός για Λογιστές", keywords: "λογιστές οδηγός" },
  { href: "/statistika", label: "Στατιστικά Αντιστοίχισης", keywords: "στατιστικά αριθμοί" },
  { href: "/saved", label: "Αποθηκευμένοι ΚΑΔ", keywords: "αποθηκευμένοι favorites" },
  { href: "/faq", label: "Συχνές Ερωτήσεις FAQ ΑΑΔΕ", keywords: "ερωτήσεις απαντήσεις faq" },
  { href: "/blog", label: "Οδηγός Αλλαγών ΚΑΔ", keywords: "οδηγός αλλαγές blog" },
  { href: "/ti-einai-kad", label: "Τι είναι ο ΚΑΔ", keywords: "τι είναι ορισμός" },
  { href: "/about", label: "Σχετικά με το kad2025.gr", keywords: "σχετικά about" },
  { href: "/contact", label: "Επικοινωνία", keywords: "επικοινωνία contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const theme = localStorage.getItem("kad-theme") || "light";
    setDark(theme === "dark");
  }, []);
  useEffect(() => { setMenuOpen(false); setToolsOpen(false); }, [pathname]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);
  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus();
  }, [searchOpen]);

  // Close tools dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close search on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return SITE_PAGES.filter(p =>
      p.label.toLowerCase().includes(q) || p.keywords.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [searchQuery]);

  const toggleTheme = () => {
    const next = dark ? "light" : "dark";
    setDark(!dark);
    localStorage.setItem("kad-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const linkStyles = useMemo(() => {
    const active = {
      color: "#1a1a1a", textDecoration: "none", padding: "0.3rem 0.65rem",
      borderRadius: 20, fontSize: "0.72rem", fontWeight: 700,
      background: "#f5c842", whiteSpace: "nowrap" as const,
      flexShrink: 0, letterSpacing: "0.01em",
      border: "2px solid #f5c842",
    };
    const inactive = {
      color: "rgba(255,255,255,0.9)", textDecoration: "none", padding: "0.3rem 0.65rem",
      borderRadius: 20, fontSize: "0.72rem", fontWeight: 500,
      background: "rgba(255,255,255,0.1)", whiteSpace: "nowrap" as const,
      flexShrink: 0, letterSpacing: "0.01em",
      border: "1px solid rgba(255,255,255,0.25)",
    };
    return Object.fromEntries(allLinks.map(l => [l.href, pathname === l.href ? active : inactive]));
  }, [pathname]);

  return (
    <nav style={{ background: "var(--primary-dark)", color: "white", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 3px 10px rgba(0,0,0,0.3)" }}>
      <div style={{ maxWidth: 1900, margin: "0 auto", padding: "0 0.5rem", height: 60, display: "flex", alignItems: "center", gap: "0" }}>

        {/* FULL LOGO — big, far left */}
        <Link href="/" aria-label="ΚΑΔ 2025 αρχική" style={{ textDecoration: "none", flexShrink: 0, marginRight: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Icon boxes - pure HTML, no SVG text */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <span style={{ background: "rgba(255,255,255,0.15)", color: "#f5c842", fontWeight: 900, fontSize: "15px", padding: "5px 7px", borderRadius: "8px", fontFamily: "Arial,sans-serif", lineHeight: 1 }}>08</span>
            <span style={{ color: "#f5c842", fontSize: "15px", fontWeight: 700, lineHeight: 1 }}>→</span>
            <span style={{ background: "rgba(255,255,255,0.15)", color: "#f5c842", fontWeight: 900, fontSize: "15px", padding: "5px 7px", borderRadius: "8px", fontFamily: "Arial,sans-serif", lineHeight: 1 }}>25</span>
          </div>
          {/* Wordmark as HTML - renders consistently across all browsers */}
          <span style={{ display: "flex", alignItems: "baseline", gap: "0", lineHeight: 1 }}>
            <span style={{ fontSize: "1.45rem", fontWeight: 700, color: "#ffffff", fontFamily: "Inter,Arial,sans-serif", letterSpacing: "-0.5px" }}>ΚΑΔ</span>
            <span style={{ fontSize: "1.45rem", fontWeight: 900, color: "#ffffff", fontFamily: "Inter,Arial,sans-serif", letterSpacing: "-0.5px" }}>2025</span>
            <sup style={{ fontSize: "0.65rem", fontWeight: 800, color: "#f5c842", fontFamily: "Inter,Arial,sans-serif", marginLeft: "1px", verticalAlign: "super", lineHeight: 0 }}>.gr</sup>
          </span>
        </Link>

        {/* All links + Εργαλεία dropdown — centered */}
        <div className="desktop-links" style={{ display: "flex", alignItems: "center", flex: 1, justifyContent: "center", gap: "0.3rem", flexWrap: "nowrap", overflow: "visible", position: "relative" }}>
          {allLinks.map(l => (
            <Link key={l.href} href={l.href} style={linkStyles[l.href]}>{l.label}</Link>
          ))}

          {/* Εργαλεία dropdown */}
          <div ref={toolsRef} style={{ position: "relative", flexShrink: 0 }}>
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              style={{
                color: toolsOpen ? "#1a1a1a" : "rgba(255,255,255,0.9)",
                padding: "0.3rem 0.65rem",
                borderRadius: 20,
                fontSize: "0.72rem",
                fontWeight: toolsOpen ? 700 : 500,
                background: toolsOpen ? "#f5c842" : "rgba(255,255,255,0.1)",
                whiteSpace: "nowrap",
                border: toolsOpen ? "2px solid #f5c842" : "1px solid rgba(255,255,255,0.25)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              🛠️ Εργαλεία
              <span style={{ fontSize: "0.65rem", opacity: 0.7 }}>{toolsOpen ? "▲" : "▾"}</span>
            </button>

            {toolsOpen && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: "50%",
                transform: "translateX(-50%)",
                background: "var(--primary-dark, #0f2347)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 12,
                minWidth: 200,
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                zIndex: 200,
                overflow: "hidden",
              }}>
                {toolsLinks.map((t, idx) => {
                  if ((t as any).divider) return (
                    <div key={`div-${idx}`} style={{ height: 1, background: "rgba(255,255,255,0.15)", margin: "0.2rem 0" }} />
                  );
                  if ((t as any).isHeader) return (
                    <Link
                      key={t.href}
                      href={t.href!}
                      onClick={() => setToolsOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem 0.3rem",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        color: "#f5c842",
                        textDecoration: "none",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        borderBottom: "1px solid rgba(255,255,255,0.12)",
                        marginBottom: "0.1rem",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    >
                      {t.label}
                    </Link>
                  );
                  return (
                    <Link
                      key={t.href}
                      href={t.href!}
                      onClick={() => setToolsOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.45rem 1rem",
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.9)",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                    >
                      <span style={{ flex: 1 }}>{t.label}</span>
                      {(t as any).badge && <span style={{ fontSize: "0.65rem", padding: "0.1rem 0.3rem", borderRadius: 4, background: "#dc2626", color: "white", fontWeight: 700 }}>{(t as any).badge}</span>}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right side: site search + dark mode + mobile */}
        <div style={{ marginLeft: "auto", flexShrink: 0, display: "flex", gap: "0.3rem", alignItems: "center" }}>

          {/* Site search */}
          <div ref={searchRef} style={{ position: "relative" }}>
            <button
              onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(""); }}
              title="Αναζήτηση σελίδων site"
              aria-label="Αναζήτηση στο site"
              style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "white", width: 32, height: 32, borderRadius: 7, cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              🔍
            </button>
            {searchOpen && (
              <div style={{ position: "absolute", right: 0, top: 38, background: "var(--primary-dark, #0f2347)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, width: 280, boxShadow: "0 8px 24px rgba(0,0,0,0.4)", zIndex: 200 }}>
                <div style={{ padding: "0.5rem" }}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === "Enter" && searchResults.length > 0) {
                        router.push(searchResults[0].href);
                        setSearchOpen(false);
                        setSearchQuery("");
                      }
                      if (e.key === "Escape") { setSearchOpen(false); setSearchQuery(""); }
                    }}
                    placeholder="Αναζήτηση στο site... (π.χ. ΕΣΠΑ, ΔΥΠΑ)"
                    style={{ width: "100%", padding: "0.5rem 0.75rem", borderRadius: 6, border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)", color: "white", fontSize: "0.85rem", outline: "none", boxSizing: "border-box" }}
                  />
                </div>
                {searchResults.length > 0 && (
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", maxHeight: 280, overflowY: "auto" }}>
                    {searchResults.map(r => (
                      <Link key={r.href} href={r.href}
                        onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                        style={{ display: "block", padding: "0.6rem 0.75rem", color: "rgba(255,255,255,0.9)", textDecoration: "none", fontSize: "0.85rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                      >
                        <span style={{ color: "#f5c842", marginRight: 6 }}>→</span>{r.label}
                      </Link>
                    ))}
                  </div>
                )}
                {searchQuery && searchResults.length === 0 && (
                  <div style={{ padding: "0.75rem", color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", textAlign: "center" }}>
                    Δεν βρέθηκε σελίδα
                  </div>
                )}
                {!searchQuery && (
                  <div style={{ padding: "0.5rem 0.75rem 0.75rem", color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>
                    💡 Δοκιμάστε: "ΕΣΠΑ", "ΔΥΠΑ", "λογιστές", "τουρισμός"
                  </div>
                )}
              </div>
            )}
          </div>
          <button onClick={toggleTheme} title={dark ? "Φωτεινό" : "Σκοτεινό"}
            style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "white", width: 32, height: 32, borderRadius: 7, cursor: "pointer", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {dark ? "☀️" : "🌙"}
          </button>
          <button className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "white", width: 32, height: 32, borderRadius: 7, cursor: "pointer", fontSize: "1rem", display: "none", alignItems: "center", justifyContent: "center" }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "#0f2347", borderTop: "1px solid rgba(255,255,255,0.1)", maxHeight: "80vh", overflowY: "auto" }}>
          {allLinks.map(l => (
            <Link key={l.href} href={l.href} style={{ display: "block", color: pathname === l.href ? "#f5c842" : "rgba(255,255,255,0.9)", textDecoration: "none", padding: "0.7rem 1.2rem", fontSize: "0.9rem", fontWeight: pathname === l.href ? 700 : 400, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              {l.label}
            </Link>
          ))}
          <div style={{ padding: "0.4rem 1.2rem", fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>🛠️ Εργαλεία & Οδηγοί</div>
          {toolsLinks.map((t, idx) => {
            if (t.divider) return <div key={`mdiv-${idx}`} style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "0.1rem 0" }} />;
            if (t.isHeader) return (
              <Link key={t.href} href={t.href!} onClick={() => setMenuOpen(false)}
                style={{ display: "block", color: "#f5c842", textDecoration: "none", padding: "0.5rem 1.2rem 0.3rem", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                {t.label}
              </Link>
            );
            return (
              <Link key={t.href} href={t.href!} onClick={() => setMenuOpen(false)}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.8)", textDecoration: "none", padding: "0.55rem 1.5rem", fontSize: "0.875rem", fontWeight: 400, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <span style={{ flex: 1 }}>{t.label}</span>
                {t.badge && <span style={{ fontSize: "0.65rem", padding: "0.1rem 0.3rem", borderRadius: 4, background: "#dc2626", color: "white", fontWeight: 700 }}>{t.badge}</span>}
              </Link>
            );
          })}
          <div style={{ height: "0.5rem" }} />
        </div>
      )}

      <style>{`
        @media (max-width: 1000px) {
          .desktop-links { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
        nav a:hover { opacity: 1; background: rgba(255,255,255,0.1) !important; color: white !important; }
      `}</style>
    </nav>
  );
}
