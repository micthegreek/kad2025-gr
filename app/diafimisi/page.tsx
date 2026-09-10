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

const AUDIENCE = [
  { t: "Λογιστές & φοροτεχνικοί", d: "Ελέγχουν κωδικούς για τους πελάτες τους — καθημερινά, σε ώρα εργασίας." },
  { t: "Υφιστάμενες επιχειρήσεις", d: "Διορθώνουν, προσθέτουν ή επαληθεύουν τους κωδικούς δραστηριότητάς τους." },
  { t: "Νέοι επιχειρηματίες", d: "Αναζητούν τους κατάλληλους ΚΑΔ για την επιχείρηση που θα συστήσουν." },
  { t: "Υποψήφιοι για επιδοτήσεις", d: "Ελέγχουν αν ο ΚΑΔ τους είναι επιλέξιμος σε ενεργές δράσεις χρηματοδότησης." },
];

const PACKS = [
  {
    name: "Κύρια θέση",
    tag: "Η πιο αποδοτική",
    price: "150",
    feat: true,
    color: "#1d4ed8",
    tint: "#eff6ff",
    anchor: "kyria",
    where: "Αμέσως μετά τα αποτελέσματα αναζήτησης, στις 4 σελίδες με τη μεγαλύτερη κίνηση: Αντιστοίχιση, ΚΑΔ 2025, Αντιστοίχιση 2025 και Αρχική. Σε ευρείες οθόνες εμφανίζεται και ως σταθερή δεξιά στήλη.",
    imp: "≈ 20.000 εμφανίσεις/μήνα",
  },
  {
    name: "Θέση περιεχομένου",
    tag: "Ισορροπία",
    price: "100",
    feat: false,
    color: "#0d9488",
    tint: "#f0fdfa",
    anchor: "periexomenou",
    where: "Στις 63 σελίδες κλάδων και στους 24 οδηγούς του blog — εκεί όπου ο επισκέπτης διαβάζει, δεν αναζητά μόνο.",
    imp: "≈ 4.000 εμφανίσεις/μήνα",
  },
  {
    name: "Γραμμή υποσέλιδου",
    tag: "Είσοδος",
    price: "60",
    feat: false,
    color: "#d97706",
    tint: "#fffbeb",
    anchor: "yposelidou",
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

const CARD: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 14,
  background: "var(--bg-card)",
  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
};

export default function Page() {
  return (
    <main className="container" style={{ maxWidth: 940, margin: "0 auto", padding: "1.5rem 1rem 3rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)" }}>
        Συνεργασίες
      </p>
      <h1 style={{ fontSize: "clamp(1.7rem, 4.2vw, 2.4rem)", lineHeight: 1.15, margin: "0.5rem 0 0.8rem" }}>
        Το κοινό σας είναι ήδη εδώ
      </h1>
      <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "58ch", lineHeight: 1.6 }}>
        Το kad2025.gr χρησιμοποιείται καθημερινά από λογιστές, φοροτεχνικούς και επιχειρηματίες που ελέγχουν
        τους κωδικούς δραστηριότητάς τους — πριν από κάθε έναρξη, μεταβολή ή αίτηση επιδότησης.
        Αν απευθύνεστε σε αυτό ακριβώς το κοινό, εδώ υπάρχει θέση για την επιχείρησή σας.
      </p>

      {/* ── ΣΤΑΤΙΣΤΙΚΑ ── */}
      <h2 style={{ fontSize: "1.3rem", margin: "2.4rem 0 0.4rem" }}>Στατιστικά στοιχεία επισκεψιμότητας www.kad2025.gr</h2>
      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: "0 0 1rem" }}>
        Κάθε αριθμός προέρχεται από ανεξάρτητο εργαλείο μέτρησης. Διατίθενται screenshots σε κάθε ενδιαφερόμενο.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.8rem" }}>
        {STATS.map((s) => (
          <div key={s.l} style={{ ...CARD, padding: "1.1rem 1.2rem" }}>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1, color: "var(--primary)" }}>{s.n}</div>
            <div style={{ fontSize: "0.94rem", fontWeight: 700, marginTop: "0.4rem" }}>{s.l}</div>
            <div style={{ fontSize: "0.73rem", color: "var(--text-muted)", marginTop: "0.4rem", lineHeight: 1.45 }}>{s.s}</div>
          </div>
        ))}
      </div>

      {/* ── ΚΟΙΝΟ ── */}
      <h2 style={{ fontSize: "1.3rem", margin: "2.4rem 0 0.8rem" }}>Ποιοι μας επισκέπτονται</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "0.8rem" }}>
        {AUDIENCE.map((x) => (
          <div key={x.t} style={{ ...CARD, padding: "1rem 1.2rem" }}>
            <div style={{ fontWeight: 800, fontSize: "0.99rem" }}>{x.t}</div>
            <div style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "0.3rem", lineHeight: 1.55 }}>{x.d}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", marginTop: "0.9rem" }}>
        Γεωγραφικά: Αθήνα, Θεσσαλονίκη, Πειραιάς και όλη η ελληνική περιφέρεια. Το 93% της ενεργής χρήσης
        προέρχεται από Ελλάδα.
      </p>

      {/* ── ΓΙΑΤΙ ΣΕ ΕΜΑΣ ── */}
      <div style={{ ...CARD, margin: "2.4rem 0 0", padding: "1.4rem 1.6rem", borderLeft: "5px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.25rem", margin: "0 0 0.6rem" }}>Γιατί σε εμάς</h2>
        <p style={{ margin: "0 0 0.8rem", fontSize: "0.97rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
          Δεν πουλάμε απλώς εμφανίσεις. Πουλάμε την προσοχή ενός κοινού που έρχεται εδώ με συγκεκριμένη
          πρόθεση: να λύσει ένα πρακτικό ζήτημα της επιχείρησής του. Ο επισκέπτης μας μένει κατά μέσο όρο
          <strong style={{ color: "var(--text)" }}> πάνω από πέντε λεπτά</strong> και βλέπει
          <strong style={{ color: "var(--text)" }}> σχεδόν πέντε σελίδες</strong> — νούμερα σπάνια για
          ελληνικό site.
        </p>
        <p style={{ margin: "0 0 0.8rem", fontSize: "0.97rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
          Η διαφήμισή σας δεν χάνεται ανάμεσα σε δεκάδες άλλες. Κάθε θέση ανήκει σε
          <strong style={{ color: "var(--text)" }}> έναν μόνο διαφημιζόμενο</strong>, εμφανίζεται σε καθαρό
          περιβάλλον χωρίς αυτόματα δίκτυα, και βρίσκεται ακριβώς εκεί όπου το βλέμμα του επισκέπτη είναι
          ήδη στραμμένο.
        </p>
        <p style={{ margin: 0, fontSize: "0.97rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
          Και κυρίως: το κοινό είναι <strong style={{ color: "var(--text)" }}>ακριβώς στοχευμένο</strong>.
          Αν η επιχείρησή σας απευθύνεται σε λογιστικά γραφεία, ελεύθερους επαγγελματίες ή μικρομεσαίες
          επιχειρήσεις, εδώ τους βρίσκετε συγκεντρωμένους — τη στιγμή που ασχολούνται με τα επαγγελματικά
          τους θέματα, όχι σε μια τυχαία περιήγηση.
        </p>
      </div>

      {/* ── ΘΕΣΕΙΣ ── */}
      <h2 style={{ fontSize: "1.3rem", margin: "2.4rem 0 0.4rem" }}>Διαθέσιμες θέσεις</h2>
      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: "0 0 1rem" }}>
        Ένας διαφημιζόμενος ανά θέση. Χωρίς διαφημιστικά δίκτυα, χωρίς αναδυόμενα παράθυρα —
        η θέση σας δεν ανταγωνίζεται τίποτα άλλο στη σελίδα.
      </p>
      <div style={{ display: "grid", gap: "0.9rem" }}>
        {PACKS.map((p) => (
          <div
            key={p.name}
            style={{
              ...CARD,
              padding: "1.2rem 1.4rem",
              border: `3px solid ${p.color}`,
              borderLeft: `9px solid ${p.color}`,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: "1.08rem", margin: 0 }}>{p.name}</h3>
                  {p.tag && (
                    <span style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
                      padding: "0.18rem 0.55rem", borderRadius: 20, background: p.color, color: "#fff" }}>{p.tag}</span>
                  )}
                </div>
                <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.55 }}>{p.where}</p>
                <p style={{ margin: "0.45rem 0 0", fontSize: "0.82rem", fontWeight: 800, color: p.color }}>{p.imp}</p>
              </div>
              <div style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                <div style={{ fontSize: "1.7rem", fontWeight: 800, letterSpacing: "-0.02em" }}>€{p.price}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>/ μήνα</div>
              </div>
            </div>
            <Link
              href={`/diafimisi/paradeigma#thesi-${p.anchor}`}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                marginTop: "1rem", padding: "0.75rem 1rem", borderRadius: 10,
                background: p.color, color: "#fff", fontSize: "0.9rem", fontWeight: 800,
                textDecoration: "none", textAlign: "center",
              }}
            >
              👁 Δείτε πραγματικό παράδειγμα σε αυτή τη θέση →
            </Link>
          </div>
        ))}
      </div>

      <div style={{ ...CARD, marginTop: "1rem", padding: "1.2rem 1.4rem", border: "2px dashed var(--primary)" }}>
        <p style={{ margin: "0 0 0.55rem", fontSize: "0.95rem", lineHeight: 1.65 }}>
          <strong>Περιορισμένη προσφορά:</strong> για τους δύο πρώτους συνεργάτες,
          <strong> −30% για το πρώτο τρίμηνο</strong>.
        </p>
        <p style={{ margin: "0 0 0.55rem", fontSize: "0.95rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
          Επιπλέον έκπτωση <strong style={{ color: "var(--text)" }}>10% για προπληρωμή 3μηνης διαφήμισης</strong> και{" "}
          <strong style={{ color: "var(--text)" }}>20% για προπληρωμή 6μηνης διαφήμισης</strong>.
        </p>
        <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
          Κάθε μήνα λαμβάνετε αναφορά με εμφανίσεις, κλικ και σελίδες προέλευσης.
        </p>
      </div>

      {/* ── ΤΙ ΔΕΝ ΚΑΝΟΥΜΕ ── */}
      <div style={{ ...CARD, marginTop: "2.4rem", padding: "1.4rem 1.6rem" }}>
        <h2 style={{ fontSize: "1.25rem", margin: "0 0 0.8rem" }}>Τι δεν θα δείτε ποτέ εδώ</h2>
        <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.94rem", color: "var(--text-muted)", display: "grid", gap: "0.4rem", lineHeight: 1.6 }}>
          <li>Αναδυόμενα παράθυρα ή διαφημίσεις που καλύπτουν το περιεχόμενο</li>
          <li>Αυτόματα διαφημιστικά δίκτυα με άσχετο περιεχόμενο</li>
          <li>Περισσότερους από έναν διαφημιζόμενους στην ίδια θέση</li>
          <li>Διαφημίσεις πριν ο επισκέπτης βρει αυτό που ψάχνει</li>
        </ul>
        <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginTop: "0.9rem", marginBottom: 0, lineHeight: 1.65 }}>
          Ο λόγος είναι απλός: αυτό που πουλάμε είναι η προσοχή ενός κοινού που μένει 5,5 λεπτά στη σελίδα.
          Αν χαλάσει η εμπειρία, χάνεται και η αξία της θέσης σας.
        </p>
      </div>

      {/* ── ΕΠΙΚΟΙΝΩΝΙΑ ── */}
      <div style={{ ...CARD, marginTop: "1.5rem", padding: "1.8rem", textAlign: "center", border: "2px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.25rem", margin: "0 0 0.5rem" }}>Ενδιαφέρεστε;</h2>
        <p style={{ margin: "0 auto 1.1rem", fontSize: "0.97rem", color: "var(--text-muted)", maxWidth: "48ch", lineHeight: 1.6 }}>
          Στείλτε μας ένα email με το αντικείμενό σας και τη θέση που σας ενδιαφέρει.
          Απαντάμε εντός 24 ωρών με διαθεσιμότητα και αναλυτικά στοιχεία.
        </p>
        <a
          href="mailto:info@kad2025.gr?subject=%CE%94%CE%B9%CE%B1%CF%86%CE%AE%CE%BC%CE%B9%CF%83%CE%B7%20%CF%83%CF%84%CE%BF%20kad2025.gr"
          style={{ display: "inline-block", padding: "0.9rem 1.9rem", borderRadius: 10, background: "var(--primary)", color: "#fff", fontWeight: 800, textDecoration: "none", fontSize: "1.02rem" }}
        >
          info@kad2025.gr
        </a>
      </div>

      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1.6rem", lineHeight: 1.6 }}>
        Το kad2025.gr είναι ανεξάρτητο ενημερωτικό εργαλείο και δεν συνδέεται με την ΑΑΔΕ ή άλλον δημόσιο φορέα.
        Οι διαφημιζόμενοι δεν επηρεάζουν με κανέναν τρόπο τα δεδομένα ή το περιεχόμενο του site.
        Σχετικά: <Link href="/about">Ποιοι είμαστε</Link> · <Link href="/methodology">Μεθοδολογία</Link> ·{" "}
        <Link href="/statistika">Στατιστικά χρήσης</Link>
      </p>
    </main>
  );
}
