"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

/**
 * v137 — Search-state URLs (?q=…) δεν πρέπει να ανταγωνίζονται τις canonical landing pages.
 * Προσθέτει δυναμικά noindex,follow + καθαρό canonical όταν υπάρχει query parameter.
 * Λειτουργεί επειδή η Google εκτελεί JavaScript· το robots.txt disallow ΔΕΝ θα δούλευε,
 * γιατί τότε ο crawler δεν θα έβλεπε ποτέ το noindex.
 */
function QueryNoindexInner() {
  const pathname = usePathname();
  const sp = useSearchParams();

  useEffect(() => {
    const hasQuery = Boolean(sp.get("q"));
    const ID = "dyn-robots-noindex";
    const existing = document.getElementById(ID);

    if (hasQuery) {
      if (!existing) {
        const m = document.createElement("meta");
        m.id = ID;
        m.name = "robots";
        m.content = "noindex,follow";
        document.head.appendChild(m);
      }
      const canon = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (canon) {
        canon.dataset.orig = canon.dataset.orig || canon.href;
        canon.href = `https://www.kad2025.gr${pathname}`;
      }
    } else {
      existing?.remove();
      const canon = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (canon?.dataset.orig) canon.href = canon.dataset.orig;
    }
  }, [pathname, sp]);

  return null;
}

export default function QueryNoindex() {
  return (
    <Suspense fallback={null}>
      <QueryNoindexInner />
    </Suspense>
  );
}
