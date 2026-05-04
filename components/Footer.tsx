import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--primary-dark)", color: "rgba(255,255,255,0.8)", padding: "2rem 1rem", marginTop: "3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>

          {/* Brand */}
          <div>
            <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "white", marginBottom: "0.5rem" }}>
              <span style={{ color: "#f5c842" }}>ΚΑΔ</span>2025.gr
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>
              Ανεξάρτητο ενημερωτικό εργαλείο αντιστοίχισης ΚΑΔ 2008 → ΚΑΔ 2025.
              Επίσημα δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026.
            </p>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
              Το kad2025.gr δεν είναι επίσημος ιστότοπος ΑΑΔΕ.
              Για επίσημες ενέργειες επισκεφθείτε{" "}
              <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.6)" }}>
                myaade.gov.gr
              </a>.
            </p>
          </div>

          {/* Tools */}
          <div>
            <div style={{ fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>Εργαλεία</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {[
                ["/kad-2008", "Αναζήτηση ΚΑΔ 2008"],
                ["/kad-2025", "Αναζήτηση ΚΑΔ 2025"],
                ["/antistoixisi", "Αντιστοίχιση 2008 → 2025"],
                ["/antistoixisi-2025", "Αντιστοίχιση 2025 → 2008"],
                ["/maziki-2008", "Μαζική Αντιστοίχιση"],
                ["/ai-suggester", "AI Βοηθός ΚΑΔ"],
                ["/wizard", "Οδηγός ΚΑΔ (3 βήματα)"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", textDecoration: "none" }}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Guides */}
          <div>
            <div style={{ fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>Οδηγοί & Πληροφορίες</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {[
                ["/blog", "Οδηγός Αλλαγών ΚΑΔ 2025"],
                ["/blog/syxna-lathi-antistoixisis", "Συχνά Λάθη Αντιστοίχισης"],
                ["/blog/kad-kai-logistes", "Οδηγός για Λογιστές"],
                ["/blog/kad-gia-nea-epixeirisi", "ΚΑΔ για Νέα Επιχείρηση"],
                ["/statistika", "Στατιστικά Αντιστοίχισης"],
                ["/klados", "Κατηγορίες ανά Κλάδο"],
                ["/faq", "Συχνές Ερωτήσεις ΑΑΔΕ"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", textDecoration: "none" }}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Trust */}
          <div>
            <div style={{ fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>Εταιρεία & Πολιτικές</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", marginBottom: "1rem" }}>
              {[
                ["/about", "Σχετικά με εμάς"],
                ["/contact", "Επικοινωνία"],
                ["/methodology", "Μεθοδολογία Δεδομένων"],
                ["/sources", "Πηγές & Αναφορές"],
                ["/privacy", "Πολιτική Απορρήτου"],
                ["/terms", "Όροι Χρήσης"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", textDecoration: "none" }}>{label}</Link>
              ))}
            </div>
            {/* Disclaimer box */}
            <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "0.6rem 0.75rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
              📅 Προθεσμία ελέγχου ΚΑΔ:{" "}
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>1η Ιουνίου 2026</strong>.{" "}
              Επαληθεύστε μέσω myAADE.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}>
          <div>
            © {new Date().getFullYear()} kad2025.gr — Ανεξάρτητο ενημερωτικό εργαλείο ·
            Δεδομένα ΑΑΔΕ Α.1003/2026 & Α.1004/2026 ·
            Ενημερώθηκε: {new Date().toLocaleDateString("el-GR", { month: "long", year: "numeric" })}
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
            {[
              ["/about", "Σχετικά"],
              ["/contact", "Επικοινωνία"],
              ["/privacy", "Απόρρητο"],
              ["/terms", "Όροι"],
              ["/methodology", "Μεθοδολογία"],
              ["/sources", "Πηγές"],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{label}</Link>
            ))}
            <span>info@kad2025.gr</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
