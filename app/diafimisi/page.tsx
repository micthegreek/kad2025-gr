import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Διαφημιστείτε στο kad2025.gr — Στοιχεία & Θέσεις",
  description:
    "20.000+ προβολές τον μήνα από Έλληνες λογιστές και επιχειρηματίες, με μέση επίσκεψη 5,5 λεπτών. Διαθέσιμες διαφημιστικές θέσεις, πραγματικά στοιχεία επισκεψιμότητας και τιμοκατάλογος.",
  alternates: { canonical: "https://www.kad2025.gr/diafimisi" },
  robots: { index: true, follow: true },
};

const STATS = [
  { n: "20.000+", l: "προβολές σελίδων τον μήνα", s: "Cloudflare Web Analytics · Ελλάδα · τελευταίες 30 ημέρες" },
  { n: "5:29", l: "μέση διάρκεια επίσκεψης", s: "Google Analytics 4 · τελευταίο τρίμηνο" },
  { n: "4,6", l: "σελίδες ανά επίσκεψη", s: "Google Analytics 4 · τελευταίο τρίμηνο" },
  { n: "93%", l: "της ενεργής χρήσης από Ελλάδα", s: "GA4 · engaged sessions ανά χώρα" },
  { n: "24.000+", l: "αναζητήσεις ΚΑΔ σε 3 μήνες", s: "GA4 events · kad_search" },
  { n: "70%", l: "engagement από οργανική αναζήτηση", s: "GA4 · Traffic acquisition" },
];

const PACKS = [
  {
    name: "Κύρια θέση",
    tag: "Η πιο αποδοτική",
    price: "150",
    feat: true,
    where: "Αμέσως μετά τα αποτελέσματα αναζήτησης, στις 4 σελίδες με τη μεγαλύτερη κίνηση: Αντιστοίχιση, ΚΑΔ 2025, Αντιστοίχιση 2025 και Αρχική.",
    imp: "≈ 20.000 εμφανίσεις/μήνα",
  },
  {
    name: "Θέση περιεχομένου",
    tag: "",
    price: "100",
    feat: false,
    where: "Στις 63 σελίδες κλάδων και στους 24 οδηγούς του blog — εκεί όπου ο επισκέπτης διαβάζει, δεν αναζητά μόνο.",
    imp: "≈ 4.000 εμφανίσεις/μήνα",
  },
  {
    name: "Γραμμή υποσέλιδου",
    tag: "Είσοδος",
    price: "60",
    feat: false,
    where: "Διακριτική γραμμή σε κάθε σελίδα του site — συμπεριλαμβανομένων και των 9.400 σελίδων ΚΑΔ.",
    imp: "σε όλες τις σελίδες",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Διαφημιστείτε στο kad2025.gr",
  url: "https://www.kad2025.gr/diafimisi",
  inLanguage: "el-GR",
  description: "Διαθέσιμες διαφημιστικές θέσεις στο kad2025.gr με πραγματικά στοιχεία επισκεψιμότητας.",
};

export default function Page() {
  return (
    <main className="container" style={{ maxWidth: 940, margin: "0 auto", padding: "1.5rem 1rem 3rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <p style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)" }}>
        Συνεργασίες
      </p>
      <h1 style={{ fontSize: "clamp(1.7rem, 4.2vw, 2.4rem)", lineHeight: 1.15, margin: "0.5rem 0 0.8rem" }}>
        Το κοινό σας είναι ήδη εδώ
      </h1>
      <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "58ch", lineHeight: 1.6 }}>
        Το kad2025.gr χρησιμοποιείται καθημερινά από λογιστές, φοροτεχνικούς και επιχειρηματίες που ελέγχουν
        τους κωδικούς δραστηριότητάς τους — πριν από κάθε έναρξη, μεταβολή ή αίτηση επιδότησης.
        Αν η επιχείρησή σας απευθύνεται σε αυτούς, η θέση σας σας περιμένει.
      </p>

      {/* ── ΣΤΑΤΙΣΤΙΚΑ ── */}
      <h2 style={{ fontSize: "1.25rem", margin: "2.2rem 0 0.4rem" }}>Τα στοιχεία, με τις πηγές τους</h2>
      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: "0 0 1rem" }}>
        Κάθε αριθμός προέρχεται από ανεξάρτητο εργαλείο μέτρησης. Διατίθενται screenshots σε κάθε ενδιαφερόμενο.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.7rem" }}>
        {STATS.map((s) => (
          <div key={s.l} style={{ padding: "1rem 1.1rem", border: "1px solid var(--border)", borderRadius: 12, background: "var(--bg-card)" }}>
            <div style={{ fontSize: "1.75rem", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1, color: "var(--primary)" }}>{s.n}</div>
            <div style={{ fontSize: "0.92rem", fontWeight: 600, marginTop: "0.35rem" }}>{s.l}</div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.35rem", lineHeight: 1.4 }}>{s.s}</div>
          </div>
        ))}
      </div>

      {/* ── ΚΟΙΝΟ ── */}
      <h2 style={{ fontSize: "1.25rem", margin: "2.2rem 0 0.8rem" }}>Ποιοι μας επισκέπτονται</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "0.7rem" }}>
        {[
          { t: "Λογιστές & φοροτεχνικοί", d: "Ελέγχουν κωδικούς για τους πελάτες τους — καθημερινά, σε ώρα εργασίας." },
          { t: "Επιχειρήσεις σε μεταβολή", d: "Διορθώνουν ή προσθέτουν ΚΑΔ ενόψει της προθεσμίας της 30ής Οκτωβρίου 2026." },
          { t: "Νέοι επιχειρηματίες", d: "Επιλέγουν κωδικό πριν την έναρξη — τη στιγμή που παίρνουν αποφάσεις." },
          { t: "Υποψήφιοι για επιδοτήσεις", d: "Ελέγχουν αν ο ΚΑΔ τους είναι επιλέξιμος σε 9 ενεργές δράσεις χρηματοδότησης." },
        ].map((x) => (
          <div key={x.t} style={{ padding: "0.9rem 1.1rem", border: "1px solid var(--border)", borderRadius: 12 }}>
            <div style={{ fontWeight: 700, fontSize: "0.97rem" }}>{x.t}</div>
            <div style={{ fontSize: "0.87rem", color: "var(--text-muted)", marginTop: "0.25rem", lineHeight: 1.5 }}>{x.d}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", marginTop: "0.8rem" }}>
        Γεωγραφικά: Αθήνα, Θεσσαλονίκη, Πειραιάς και όλη η ελληνική περιφέρεια. Το 93% της ενεργής χρήσης
        προέρχεται από Ελλάδα.
      </p>

      {/* ── ΓΙΑΤΙ ΤΩΡΑ ── */}
      <div style={{ margin: "2.2rem 0 0", padding: "1.2rem 1.4rem", border: "1px solid var(--border)", borderLeft: "4px solid var(--primary)", borderRadius: 12, background: "var(--bg-card)" }}>
        <h2 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Γιατί τώρα</h2>
        <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-muted)" }}>
          Η προθεσμία διόρθωσης ΚΑΔ λήγει στις <strong style={{ color: "var(--text)" }}>30 Οκτωβρίου 2026</strong>.
          Κάθε επιχείρηση στην Ελλάδα οφείλει να ελέγξει τον κωδικό της μέχρι τότε — και η επισκεψιμότητα
          του site ανεβαίνει σταθερά από τα μέσα Αυγούστου, με την κορύφωση να αναμένεται Σεπτέμβριο–Οκτώβριο.
          Είναι το παράθυρο με τη μεγαλύτερη προσοχή του κοινού μέσα στη χρονιά.
        </p>
      </div>

      {/* ── ΘΕΣΕΙΣ ── */}
      <h2 style={{ fontSize: "1.25rem", margin: "2.2rem 0 0.4rem" }}>Διαθέσιμες θέσεις</h2>
      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: "0 0 1rem" }}>
        Ένας διαφημιζόμενος ανά θέση. Χωρίς διαφημιστικά δίκτυα, χωρίς αναδυόμενα παράθυρα —
        η θέση σας δεν ανταγωνίζεται τίποτα άλλο στη σελίδα.
      </p>
      <div style={{ display: "grid", gap: "0.7rem" }}>
        {PACKS.map((p) => (
          <div
            key={p.name}
            style={{
              display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "start",
              padding: "1.1rem 1.3rem", borderRadius: 12,
              border: p.feat ? "1.5px solid var(--primary)" : "1px solid var(--border)",
              background: p.feat ? "var(--bg-card)" : "transparent",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                <h3 style={{ fontSize: "1.05rem", margin: 0 }}>{p.name}</h3>
                {p.tag && (
                  <span style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
                    padding: "0.15rem 0.5rem", borderRadius: 20, background: "var(--primary)", color: "#fff" }}>{p.tag}</span>
                )}
              </div>
              <p style={{ margin: "0.35rem 0 0", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.55 }}>{p.where}</p>
              <p style={{ margin: "0.4rem 0 0", fontSize: "0.8rem", fontWeight: 700, color: "var(--primary)" }}>{p.imp}</p>
            </div>
            <div style={{ textAlign: "right", whiteSpace: "nowrap" }}>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.02em" }}>€{p.price}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>/ μήνα</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "0.9rem", padding: "1rem 1.2rem", border: "1px dashed var(--border)", borderRadius: 12, fontSize: "0.9rem", lineHeight: 1.6, color: "var(--text-muted)" }}>
        <strong style={{ color: "var(--text)" }}>Ιδρυτική τιμή:</strong> για τους δύο πρώτους συνεργάτες,
        <strong style={{ color: "var(--text)" }}> −30% για το πρώτο τρίμηνο</strong>.
        Επιπλέον έκπτωση 10% σε δέσμευση τριμήνου και 20% σε εξάμηνο.
        Κάθε μήνα λαμβάνετε αναφορά με εμφανίσεις, κλικ και σελίδες προέλευσης.
      </div>

      {/* ── ΤΙ ΔΕΝ ΚΑΝΟΥΜΕ ── */}
      <h2 style={{ fontSize: "1.25rem", margin: "2.2rem 0 0.6rem" }}>Τι δεν θα δείτε ποτέ εδώ</h2>
      <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.93rem", color: "var(--text-muted)", display: "grid", gap: "0.3rem", lineHeight: 1.6 }}>
        <li>Αναδυόμενα παράθυρα ή διαφημίσεις που καλύπτουν το περιεχόμενο</li>
        <li>Αυτόματα διαφημιστικά δίκτυα με άσχετο περιεχόμενο</li>
        <li>Περισσότερους από έναν διαφημιζόμενους στην ίδια θέση</li>
        <li>Διαφημίσεις πριν ο επισκέπτης βρει αυτό που ψάχνει</li>
      </ul>
      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.7rem", lineHeight: 1.6 }}>
        Ο λόγος είναι απλός: αυτό που πουλάμε είναι η προσοχή ενός κοινού που μένει 5,5 λεπτά στη σελίδα.
        Αν χαλάσει η εμπειρία, χάνεται και η αξία της θέσης σας.
      </p>

      {/* ── ΕΠΙΚΟΙΝΩΝΙΑ ── */}
      <div style={{ marginTop: "2.2rem", padding: "1.6rem", borderRadius: 14, border: "1px solid var(--border)", background: "var(--bg-card)", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.2rem", margin: "0 0 0.5rem" }}>Ενδιαφέρεστε;</h2>
        <p style={{ margin: "0 0 1rem", fontSize: "0.95rem", color: "var(--text-muted)", maxWidth: "48ch", marginInline: "auto", lineHeight: 1.6 }}>
          Στείλτε μας ένα μήνυμα με το αντικείμενό σας και τη θέση που σας ενδιαφέρει.
          Απαντάμε εντός 24 ωρών με διαθεσιμότητα και αναλυτικά στοιχεία.
        </p>
        <a
          href="mailto:info@kad2025.gr?subject=%CE%94%CE%B9%CE%B1%CF%86%CE%AE%CE%BC%CE%B9%CF%83%CE%B7%20%CF%83%CF%84%CE%BF%20kad2025.gr"
          style={{ display: "inline-block", padding: "0.85rem 1.8rem", borderRadius: 10, background: "var(--primary)", color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}
        >
          info@kad2025.gr
        </a>
      </div>

      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1.5rem", lineHeight: 1.6 }}>
        Το kad2025.gr είναι ανεξάρτητο ενημερωτικό εργαλείο και δεν συνδέεται με την ΑΑΔΕ ή άλλον δημόσιο φορέα.
        Οι διαφημιζόμενοι δεν επηρεάζουν με κανέναν τρόπο τα δεδομένα ή το περιεχόμενο του site.
        Σχετικά: <Link href="/about">Ποιοι είμαστε</Link> · <Link href="/methodology">Μεθοδολογία</Link> ·{" "}
        <Link href="/statistika">Στατιστικά χρήσης</Link>
      </p>
    </main>
  );
}
