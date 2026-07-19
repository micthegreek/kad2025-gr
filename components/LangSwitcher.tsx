"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangSwitcher() {
  const path = usePathname() || "/";
  const isEn = path === "/en" || path.startsWith("/en/");
  return (
    <Link
      href={isEn ? "/" : "/en"}
      aria-label={isEn ? "Ελληνικά" : "English version"}
      style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", padding: "0.3rem 0.7rem", border: "1.5px solid var(--border)", borderRadius: 18, fontSize: "0.8rem", fontWeight: 800, textDecoration: "none", whiteSpace: "nowrap" }}
    >
      🌐 {isEn ? "ΕΛ" : "EN"}
    </Link>
  );
}
