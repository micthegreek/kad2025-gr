"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * v143 (S04) — Το <html lang> είναι σταθερά "el" στο root layout, οπότε οι αγγλικές
 * σελίδες δήλωναν λάθος γλώσσα. Διορθώνεται δυναμικά ανά διαδρομή, για screen readers,
 * μηχανές μετάφρασης και σωστά γλωσσικά σήματα.
 */
export default function HtmlLang() {
  const path = usePathname() || "";
  useEffect(() => {
    const isEn = path === "/en" || path.startsWith("/en/");
    document.documentElement.lang = isEn ? "en" : "el";
  }, [path]);
  return null;
}
