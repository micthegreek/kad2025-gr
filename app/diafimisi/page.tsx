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
  { t: "Σύμβουλοι επιχειρήσεων", d: "Ελέγχουν αν ο ΚΑΔ των πελατών τους είναι επιλέξιμος σε ενεργές δράσεις χρηματοδότησης." },
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
    imp: "≈ 20.000 εμφανίσεις/μήνα *",
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
    imp: "≈ 4.000 εμφανίσεις/μήνα *",
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
    imp: "σε όλες τις σελίδες *",
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
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", lineHeight: 1.18, margin: "0.5rem 0 0.9rem" }}>
        Προβάλετε την επιχείρησή σας τη στιγμή που οι επαγγελματίες αναζητούν λύσεις
      </h1>
      <p style={{ fontSize: "1.03rem", color: "var(--text-muted)", maxWidth: "62ch", lineHeight: 1.65 }}>
        Το kad2025.gr χρησιμοποιείται από λογιστές, φοροτεχνικούς, ελεύθερους επαγγελματίες και επιχειρήσεις
        για αναζήτηση ΚΑΔ, μεταβολές δραστηριότητας, νέα επιχειρηματικά σχέδια και προγράμματα χρηματοδότησης.
      </p>
      <p style={{ fontSize: "1.03rem", color: "var(--text-muted)", maxWidth: "62ch", lineHeight: 1.65, marginTop: "0.7rem" }}>
        Αν τα προϊόντα ή οι υπηρεσίες σας απευθύνονται σε αυτό το κοινό, μπορείτε να προβάλλεστε ακριβώς
        τη στιγμή που ασχολείται με μια πραγματική επιχειρηματική ανάγκη.
      </p>

      {/* ── ΓΙΑ ΠΟΙΕΣ ΕΠΙΧΕΙΡΗΣΕΙΣ ── */}
      <div style={{ ...CARD, marginTop: "1.8rem", padding: "1.4rem 1.6rem", border: "2px solid var(--ad-accent)" }}>
        <h2 style={{ fontSize: "1.2rem", margin: "0 0 1rem" }}>
          Για ποιες επιχειρήσεις είναι κατάλληλη η προβολή στο www.kad2025.gr
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.2rem" }}>
          <div>
            <p style={{ margin: "0 0 0.5rem", fontWeight: 800, fontSize: "0.97rem" }}>
              ✅ Ιδανικό για λογιστές &amp; φοροτεχνικούς
            </p>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              που αναζητούν νέους πελάτες, τη στιγμή που άλλοι επαγγελματίες και επιχειρήσεις
              ψάχνουν λύσεις σε φορολογικά και διαδικαστικά θέματα.
            </p>
          </div>
          <div>
            <p style={{ margin: "0 0 0.5rem", fontWeight: 800, fontSize: "0.97rem" }}>
              ✅ Ιδανικό για επιχειρήσεις που απευθύνονται σε επαγγελματίες &amp; ΜμΕ
            </p>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "0.88rem", color: "var(--text-muted)",
              lineHeight: 1.7, columns: 1 }}>
              <li>ERP και λογιστικά προγράμματα</li>
              <li>ηλεκτρονική τιμολόγηση</li>
              <li>payroll / HR software</li>
              <li>επαγγελματικές τραπεζικές υπηρεσίες</li>
              <li>ασφαλιστικές υπηρεσίες επιχειρήσεων</li>
              <li>business software / SaaS</li>
              <li>εταιρική τηλεφωνία και internet</li>
              <li>υπηρεσίες σύστασης / εταιρικής υποστήριξης</li>
              <li>επαγγελματικό εξοπλισμό</li>
              <li>συμβουλευτικές υπηρεσίες</li>
            </ul>
          </div>
        </div>
      </div>

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

      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.9rem", lineHeight: 1.6,
        padding: "0.7rem 0.95rem", border: "1px dashed var(--border)", borderRadius: 10 }}>
        <strong style={{ color: "var(--text)" }}>Ημερομηνία δημοσίευσης στατιστικών: 10/09/2026.</strong>{" "}
        Αναλυτικά screenshots από GA4 και Cloudflare παρέχονται πριν από κάθε συνεργασία.
      </p>

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
          Ο επισκέπτης δεν βρίσκεται εδώ τυχαία. Έρχεται για να λύσει ένα συγκεκριμένο ζήτημα της
          επιχείρησής του — και μένει. Ο μέσος χρόνος επίσκεψης ξεπερνά τα{" "}
          <strong style={{ color: "var(--text)" }}>πέντε λεπτά</strong> και βλέπει{" "}
          <strong style={{ color: "var(--text)" }}>σχεδόν πέντε σελίδες</strong>.
        </p>
        <p style={{ margin: "0 0 0.8rem", fontSize: "0.97rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
          Η προβολή σας δεν χάνεται ανάμεσα σε δεκάδες άλλες. Κάθε θέση ανήκει σε{" "}
          <strong style={{ color: "var(--text)" }}>έναν μόνο συνεργάτη</strong>, εμφανίζεται σε καθαρό
          περιβάλλον χωρίς αυτόματα διαφημιστικά δίκτυα, και βρίσκεται εκεί όπου το βλέμμα του
          επισκέπτη είναι ήδη στραμμένο.
        </p>
        <p style={{ margin: 0, fontSize: "0.97rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
          Και κυρίως, το κοινό είναι <strong style={{ color: "var(--text)" }}>στοχευμένο εξ ορισμού</strong>:
          λογιστικά γραφεία, ελεύθεροι επαγγελματίες, μικρομεσαίες επιχειρήσεις και σύμβουλοι —
          τη στιγμή που ασχολούνται με τα επαγγελματικά τους θέματα.
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

      <p style={{ margin: "0.7rem 0 0", fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
        <strong style={{ color: "var(--ad-accent-dark)" }}>*</strong> Ο ακριβής αριθμός εμφανίσεων μπορεί να
        αυξομειωθεί, σύμφωνα με την επισκεψιμότητα του κάθε μήνα.
      </p>

      <div style={{ ...CARD, marginTop: "1.2rem", padding: "1.3rem 1.5rem", border: "2px solid var(--ad-accent)" }}>
        <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.9rem", letterSpacing: "0.02em" }}>
          🎯 Έκπτωση μακροχρόνιας συνεργασίας
        </h3>
        <div style={{ display: "grid", gap: "0.6rem" }}>
          {[
            { d: "10%", t: "για προπληρωμή 3 μηνών διαφημιστικής προβολής" },
            { d: "25%", t: "για προπληρωμή 6 μηνών διαφημιστικής προβολής" },
            { d: "50%", t: "για προπληρωμή 12 μηνών διαφημιστικής προβολής" },
          ].map((x) => (
            <div key={x.d} style={{ display: "flex", alignItems: "center", gap: "0.9rem",
              padding: "0.7rem 0.9rem", borderRadius: 10, background: "var(--ad-tint)",
              border: "1px solid var(--border)" }}>
              <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--ad-accent-dark)",
                minWidth: "3.2rem" }}>−{x.d}</span>
              <span style={{ fontSize: "0.93rem", color: "var(--text)" }}>{x.t}</span>
            </div>
          ))}
        </div>
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

      {/* ── ΠΟΛΙΤΙΚΗ ΑΠΟΔΕΚΤΩΝ ── */}
      <div style={{ ...CARD, marginTop: "1.5rem", padding: "1.3rem 1.5rem", borderLeft: "5px solid var(--text-muted)" }}>
        <h2 style={{ fontSize: "1.1rem", margin: "0 0 0.6rem" }}>Ποιες διαφημίσεις δεν γίνονται δεκτές</h2>
        <p style={{ margin: 0, fontSize: "0.93rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
          Δεν γίνονται δεκτές διαφημίσεις για τυχερά παιχνίδια, καπνικά προϊόντα, μη εγκεκριμένες
          χρηματοοικονομικές υπηρεσίες, adult content ή προϊόντα και υπηρεσίες που ενδέχεται να
          παραβιάζουν την ελληνική νομοθεσία ή τις πολιτικές του site.
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
