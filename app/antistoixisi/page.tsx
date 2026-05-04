import type { Metadata } from "next";
import Link from "next/link";
import { getSampleChanged, getKadData } from "@/lib/kadData";
import KadSearch from "@/components/KadSearch";
import TrackPageTool from "@/components/TrackPageTool";

export const metadata: Metadata = {
  title: "Αντιστοίχιση ΚΑΔ 2008 → 2025 | Νέος ΚΑΔ",
  description:
    "Αντιστοίχιση ΚΑΔ 2008→2025. Βρείτε ποιος νέος ΚΑΔ αντικαθιστά τον παλιό σας. 10.923 κωδικοί, εξαγωγή Excel & CSV.",
  keywords: ["αντιστοίχιση καδ", "καδ 2025", "καδ 2026", "καδ 2025 ααδε", "καδ 2026 ααδε", "νέοι καδ 2025", "νέοι καδ 2026", "αντιστοίχιση καδ 2008 2025"],
  alternates: { canonical: "https://www.kad2025.gr/antistoixisi" },
  openGraph: {
    title: "Αντιστοίχιση ΚΑΔ 2008 → 2025 | Νέος ΚΑΔ Άμεσα",
    description: "Αντιστοίχιση ΚΑΔ 2008→2025 (νέοι ΚΑΔ 2026 ΑΑΔΕ). Instant αναζήτηση 10.923 κωδικών. Εξαγωγή Excel & CSV.",
  },
};

export default function AntistoixisiPage() {
  const samples = getSampleChanged(24);
  const data = getKadData();
  const changed = data.filter((r) => r.kad2008 !== r.kad2025).length;
  const total = data.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
          { "@type": "ListItem", position: 2, name: "Αντιστοίχιση ΚΑΔ 2008 → 2025", item: "https://www.kad2025.gr/antistoixisi" },
        ],
      },
      {
        "@type": "WebPage",
        name: "Αντιστοίχιση ΚΑΔ 2008 → 2025",
        description: "Εργαλείο αντιστοίχισης παλιών ΚΑΔ 2008 με νέους ΚΑΔ 2025",
        url: "https://www.kad2025.gr/antistoixisi",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Πώς βρίσκω τον νέο ΚΑΔ 2025 από τον παλιό ΚΑΔ 2008;", acceptedAnswer: { "@type": "Answer", text: "Πληκτρολογήστε τον παλιό ΚΑΔ 2008 στο πεδίο αναζήτησης και θα δείτε άμεσα τον αντίστοιχο νέο ΚΑΔ 2025 βάσει του επίσημου πίνακα αντιστοίχισης ΑΑΔΕ (Α.1004/2026)." } },
          { "@type": "Question", name: "Από πότε ισχύουν οι νέοι ΚΑΔ 2025;", acceptedAnswer: { "@type": "Answer", text: "Οι νέοι ΚΑΔ 2025 ισχύουν από 1η Μαρτίου 2026. Η ΑΑΔΕ ολοκλήρωσε την αυτόματη αντιστοίχιση στις 9 Μαρτίου 2026." } },
          { "@type": "Question", name: "Μπορώ να κατεβάσω την αντιστοίχιση ΚΑΔ σε Excel;", acceptedAnswer: { "@type": "Answer", text: "Ναι, μετά από κάθε αναζήτηση μπορείτε να εξαγάγετε τα αποτελέσματα σε Excel (.xlsx) ή CSV δωρεάν." } },
          { "@type": "Question", name: "Τι γίνεται αν δεν συμφωνώ με την αυτόματη αντιστοίχιση της ΑΑΔΕ;", acceptedAnswer: { "@type": "Answer", text: "Μπορείτε να διορθώσετε τον ΚΑΔ σας μέσω της εφαρμογής Μεταβολή Εργασιών στο myaade.gov.gr έως 1η Ιουνίου 2026 χωρίς πρόστιμο." } },
        ],
      },
    ],
  };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1rem" }}>
      <TrackPageTool toolName="antistoixisi_2008" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>Αντιστοίχιση ΚΑΔ 2008 → 2025</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem" }}>Αντιστοίχιση ΚΑΔ 2008 → 2025</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
        Βάση <strong>{total.toLocaleString("el-GR")} κωδικών</strong> — <strong>{changed.toLocaleString("el-GR")}</strong> άλλαξαν από 1/3/2026.
        Βάσει ΑΑΔΕ <Link href="/blog" style={{ color: "var(--primary)" }}>Α.1003/2026 & Α.1004/2026</Link>.
        Δείτε επίσης: <Link href="/antistoixisi-2025" style={{ color: "var(--primary)" }}>ΚΑΔ 2025 → 2008</Link> ·{" "}
        <Link href="/maziki-2008" style={{ color: "var(--primary)" }}>Μαζική αντιστοίχιση</Link>.
      </p>

      {/* ===== SEARCH FIRST ===== */}
      <section style={{ marginBottom: "3rem" }}>
        <KadSearch mode="antistoixisi-2008" initialData={data} />
      </section>

      {/* Examples after search */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
          Παραδείγματα Αντιστοίχισης ΚΑΔ 2008 → 2025
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
          Ενδεικτική αντιστοίχιση από διαφορετικούς κλάδους. Κλικ για πλήρη ανάλυση.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "0.55rem", marginBottom: "0.75rem" }}>
          {samples.map((r) => (
            <Link key={r.kad2008} href={`/kad/${r.kad2008}`} style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", gap: "0.4rem", alignItems: "center", padding: "0.6rem 0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", borderRadius: 8, fontSize: "0.82rem", flexWrap: "wrap" }}>
                <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.75rem" }}>{r.kad2008}</span>
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>→</span>
                <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.75rem" }}>{r.kad2025}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.78rem", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {r.desc2008.slice(0, 38)}{r.desc2008.length > 38 ? "..." : ""}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/klados" style={{ color: "var(--primary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>📂 Όλοι οι κλάδοι →</Link>
          <Link href="/statistika" style={{ color: "var(--primary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>📊 Στατιστικά →</Link>
          <Link href="/maziki-2008" style={{ color: "var(--primary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>📦 Μαζική αντιστοίχιση →</Link>
        </div>
      </section>

      {/* Editorial content — AdSense quality signal */}
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι είναι η Αντιστοίχιση ΚΑΔ 2008 → 2025</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Από <strong>1η Μαρτίου 2026</strong>, η Ελλάδα υιοθέτησε νέο σύστημα Κωδικών Αριθμών Δραστηριότητας
          (ΚΑΔ 2025) σε εναρμόνιση με το ευρωπαϊκό πρότυπο NACE Rev.2.1. Οι παλιοί κωδικοί ΚΑΔ 2008 παύουν
          να ισχύουν και αντικαθίστανται από νέους — σε ορισμένες περιπτώσεις ο κωδικός παραμένει ίδιος,
          ενώ σε άλλες αλλάζει εντελώς ή χωρίζεται σε πολλαπλούς νέους κωδικούς.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η ΑΑΔΕ πραγματοποίησε <strong>αυτόματη αντιστοίχιση</strong> για περίπου 1,9 εκατομμύρια επιχειρήσεις
          και ελεύθερους επαγγελματίες στις 9 Μαρτίου 2026, βάσει της απόφασης Α.1004/2026. Ωστόσο, η
          αυτόματη αντιστοίχιση δεν είναι πάντα σωστή για κάθε επιχείρηση — ιδιαίτερα σε περιπτώσεις
          όπου ένας παλιός ΚΑΔ 2008 αντιστοιχεί σε <strong>πολλαπλούς νέους ΚΑΔ 2025</strong>.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Έχετε έως <strong>1η Ιουνίου 2026</strong> να διορθώσετε τυχόν λανθασμένη αντιστοίχιση χωρίς
          πρόστιμο, μέσω της εφαρμογής «Μεταβολή Εργασιών» στο{" "}
          <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>myaade.gov.gr</a>.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πώς λειτουργεί το εργαλείο αντιστοίχισης</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Το εργαλείο αντιστοίχισης του kad2025.gr χρησιμοποιεί τον επίσημο πίνακα αντιστοίχισης
          της ΑΑΔΕ (απόφαση Α.1004/2026) για να σας δείξει ακριβώς ποιος νέος ΚΑΔ 2025 αντικαθιστά
          κάθε παλιό ΚΑΔ 2008. Μπορείτε να αναζητήσετε:
        </p>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 2, marginBottom: "0.75rem" }}>
          <li>Με <strong>αριθμό κωδικού</strong> — πληκτρολογήστε τον ΚΑΔ 2008 (ή τμήμα του)</li>
          <li>Με <strong>λέξη-κλειδί</strong> — γράψτε την επαγγελματική δραστηριότητα στα ελληνικά</li>
          <li>Με <strong>prefix</strong> — για εύρεση όλων των κωδικών μιας κατηγορίας</li>
        </ul>
        <p style={{ lineHeight: 1.8 }}>
          Σε περιπτώσεις <strong>πολλαπλής αντιστοίχισης</strong> (ένας ΚΑΔ 2008 → πολλοί ΚΑΔ 2025),
          εμφανίζονται όλες οι εναλλακτικές επιλογές ώστε να επιλέξετε αυτή που ταιριάζει στη
          δραστηριότητά σας. Τα αποτελέσματα μπορούν να εξαχθούν σε <strong>Excel ή CSV</strong>.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι να προσέξετε κατά την αντιστοίχιση</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.75rem" }}>
          {[
            { icon: "⚠️", title: "Πολλαπλές αντιστοιχίσεις", desc: "Αν ο ΚΑΔ σας έχει 2+ εναλλακτικές, ελέγξτε ποια περιγράφει ακριβέστερα τη δραστηριότητά σας." },
            { icon: "✅", title: "Αμετάβλητοι ΚΑΔ", desc: "Αν ο κωδικός παρέμεινε ίδιος, δεν απαιτείται καμία ενέργεια — η ΑΑΔΕ το επιβεβαιώνει." },
            { icon: "📋", title: "Δευτερεύοντες ΚΑΔ", desc: "Ελέγξτε και τους δευτερεύοντες ΚΑΔ σας, όχι μόνο τον κύριο." },
            { icon: "🏛️", title: "Επίσημη επαλήθευση", desc: "Για οριστικές αποφάσεις, ελέγξτε πάντα το myAADE και συμβουλευτείτε τον λογιστή σας." },
          ].map((item) => (
            <div key={item.title} style={{ padding: "0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <div style={{ fontSize: "1.25rem", marginBottom: "0.3rem" }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.25rem" }}>{item.title}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Συχνές Ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { q: "Από πότε ισχύει η αντιστοίχιση ΚΑΔ;", a: "Από 1η Μαρτίου 2026. Η ΑΑΔΕ ολοκλήρωσε την αυτόματη αντιστοίχιση στις 9 Μαρτίου 2026." },
            { q: "Μέχρι πότε μπορώ να διορθώσω τον ΚΑΔ χωρίς πρόστιμο;", a: "Έως 1η Ιουνίου 2026, μέσω της εφαρμογής Μεταβολή Εργασιών στο myaade.gov.gr." },
            { q: "Πόσοι ΚΑΔ 2008 άλλαξαν;", a: "Περίπου 7.240 από τους 9.717 μοναδικούς ΚΑΔ 2008 απέκτησαν νέο κωδικό 2025." },
            { q: "Μπορώ να εξάγω τα αποτελέσματα;", a: "Ναι, τα αποτελέσματα εξάγονται σε Excel και CSV για οποιαδήποτε αναζήτηση." },
          ].map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--primary)", marginBottom: "0.25rem" }}>{faq.q}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "#78350f" }}>
        ⚠️ <strong>Αποποίηση:</strong> Το kad2025.gr είναι ανεξάρτητο εργαλείο — δεν είναι επίσημος ιστότοπος ΑΑΔΕ.
        Τα δεδομένα βασίζονται στις αποφάσεις Α.1003/2026 & Α.1004/2026 και παρέχονται για ενημερωτικούς σκοπούς.
        Για επίσημες ενέργειες επισκεφθείτε το{" "}
        <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 600 }}>myaade.gov.gr</a>.
      </div>
    </div>
  );
}
