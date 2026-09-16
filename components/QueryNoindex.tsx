"use client";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * v148 (S02) — Search-state URLs (?q=…) δεν πρέπει να ανταγωνίζονται τις canonical σελίδες.
 *
 * ΠΡΟΣΟΧΗ (διόρθωση v143): η προηγούμενη υλοποίηση ΠΡΟΣΘΕΤΕ δεύτερο <meta name="robots">,
 * με αποτέλεσμα στο DOM να συνυπάρχουν "index,follow" και "noindex,follow" — αντιφατικές
 * δηλώσεις που ο crawler δεν μπορεί να ερμηνεύσει αξιόπιστα.
 * Τώρα ΑΝΤΙΚΑΘΙΣΤΑΤΑΙ το περιεχόμενο του υπάρχοντος tag και επαναφέρεται όταν φύγει το query.
 */
function QueryNoindexInner() {
  const pathname = usePathname();
  const sp = useSearchParams();

  useEffect(() => {
    const hasQuery = Boolean(sp.get("q"));
    const head = document.head;

    // Ένα και μόνο robots meta ανά έγγραφο
    let tag = head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "robots";
      tag.dataset.dyn = "1";
      head.appendChild(tag);
    }
    if (tag.dataset.orig === undefined) tag.dataset.orig = tag.content || "index,follow";

    tag.content = hasQuery ? "noindex,follow" : tag.dataset.orig;

    // Καθαρισμός τυχόν διπλών tags από προηγούμενες εκδόσεις
    head.querySelectorAll('meta[name="robots"]').forEach((el) => {
      if (el !== tag) el.remove();
    });

    // Canonical πάντα στη σελίδα χωρίς query
    const canon = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canon) {
      if (canon.dataset.orig === undefined) canon.dataset.orig = canon.href;
      canon.href = hasQuery ? `https://www.kad2025.gr${pathname}` : canon.dataset.orig;
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
