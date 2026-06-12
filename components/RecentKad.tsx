"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "kad2025_recent";
const MAX_ITEMS = 5;

interface RecentItem {
  c: string;
  d: string;
}

function readRecent(): RecentItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw);
    return Array.isArray(list)
      ? list.filter((x) => x && typeof x.c === "string").slice(0, MAX_ITEMS)
      : [];
  } catch {
    return [];
  }
}

/** Καταγράφει την επίσκεψη σε σελίδα ΚΑΔ (mount στο app/kad/[code]). Δεν render-άρει τίποτα. */
export function RecentKadTracker({ code, desc }: { code: string; desc: string }) {
  useEffect(() => {
    try {
      const list = readRecent().filter((x) => x.c !== code);
      list.unshift({ c: code, d: (desc || "").slice(0, 52) });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, MAX_ITEMS)));
    } catch {
      /* private mode κ.λπ. — αδιάφορο */
    }
  }, [code, desc]);
  return null;
}

/** Chip row με τους τελευταίους ΚΑΔ που είδε ο χρήστης (homepage, /antistoixisi). */
export function RecentKadChips() {
  const [items, setItems] = useState<RecentItem[]>([]);

  useEffect(() => {
    setItems(readRecent());
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="card card-compact" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)", flexShrink: 0 }}>
        🕘 Πρόσφατοι ΚΑΔ:
      </span>
      {items.map((it) => (
        <Link key={it.c} href={`/kad/${it.c}`} style={{ textDecoration: "none" }} title={it.d}>
          <span className="chip" style={{ fontFamily: "monospace", fontWeight: 700 }}>{it.c}</span>
        </Link>
      ))}
    </div>
  );
}
