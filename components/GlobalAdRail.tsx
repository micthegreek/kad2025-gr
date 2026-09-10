"use client";
import { usePathname } from "next/navigation";
import AdSlotBanner from "./AdSlotBanner";

/**
 * v134 — Το rail banner σε ΟΛΟ το site (μόνο ευρείες οθόνες ≥1400px).
 * Εξαιρούνται οι σελίδες της ίδιας της διαφήμισης και οι noindex utility σελίδες.
 */
const EXCLUDE = ["/diafimisi", "/bulk", "/saved", "/widget"];

export default function GlobalAdRail() {
  const path = usePathname() || "";
  if (EXCLUDE.some((p) => path === p || path.startsWith(p + "/"))) return null;
  return <AdSlotBanner variant="rail" />;
}
