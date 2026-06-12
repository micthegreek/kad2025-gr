"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SmartNotFound() {
  const [kadCode, setKadCode] = useState<string | null>(null);

  useEffect(() => {
    try {
      const m = window.location.pathname.match(/^\/kad\/0*(\d{1,8})\/?$/);
      if (m && m[1]) setKadCode(m[1]);
    } catch {
      /* noop */
    }
  }, []);

  if (kadCode) {
    return (
      <div style={{ maxWidth: 640, margin: "4rem auto", padding: "2rem 1rem", textAlign: "center" }}>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🔢</div>
        <h1 style={{ marginBottom: "0.5rem", fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}>
          Ο ΚΑΔ {kadCode} δεν έχει ξεχωριστή σελίδα
        </h1>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "0.5rem" }}>
          Οι μόνιμες σελίδες καλύπτουν τους 7.000 συχνότερους κωδικούς — η αναζήτηση όμως
          καλύπτει <strong>και τις 10.923 αντιστοιχίσεις</strong> του επίσημου πίνακα ΑΑΔΕ.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>
          Δείτε την αντιστοίχιση του κωδικού σας με ένα κλικ:
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          <Link href={`/antistoixisi?q=${kadCode}`} className="btn btn-primary" style={{ fontSize: "1rem" }}>
            🔄 Δες την αντιστοίχιση του {kadCode}
          </Link>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/epaggelma" style={{ textDecoration: "none" }}>
            <span className="chip">👥 ΚΑΔ ανά επάγγελμα</span>
          </Link>
          <Link href="/kad-2025-excel" style={{ textDecoration: "none" }}>
            <span className="chip">📥 Δωρεάν Excel ΚΑΔ 2025</span>
          </Link>
          <Link href="/wizard" style={{ textDecoration: "none" }}>
            <span className="chip">🧭 Οδηγός βήμα-βήμα</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 640, margin: "4rem auto", padding: "2rem 1rem", textAlign: "center" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🔍</div>
      <h1 style={{ marginBottom: "0.5rem" }}>Η σελίδα δεν βρέθηκε</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "0.5rem", lineHeight: 1.7 }}>
        Ο σύνδεσμος που ακολουθήσατε δεν υπάρχει ή έχει αλλάξει.
      </p>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>
        Αν ψάχνετε συγκεκριμένο ΚΑΔ, η αναζήτηση καλύπτει και τις 10.923 αντιστοιχίσεις:
      </p>
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <Link href="/antistoixisi" className="btn btn-primary">🔍 Αναζήτηση ΚΑΔ</Link>
        <Link href="/" className="btn btn-ghost">🏠 Αρχική</Link>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/epaggelma" style={{ textDecoration: "none" }}>
          <span className="chip">👥 ΚΑΔ ανά επάγγελμα</span>
        </Link>
        <Link href="/kad-2025-excel" style={{ textDecoration: "none" }}>
          <span className="chip">📥 Δωρεάν Excel</span>
        </Link>
        <Link href="/blog" style={{ textDecoration: "none" }}>
          <span className="chip">📚 Οδηγοί</span>
        </Link>
      </div>
    </div>
  );
}
