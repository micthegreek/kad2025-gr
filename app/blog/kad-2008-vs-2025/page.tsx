import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ΚΑΔ 2008 vs ΚΑΔ 2025: Τι Άλλαξε και Τι Παρέμεινε — Πλήρης Σύγκριση",
  description:
    "Σύγκριση ΚΑΔ 2008 και ΚΑΔ 2025 με πραγματικά δεδομένα: 66% των εγγραφών άλλαξαν, πίνακας αλλαγών ανά κλάδο, παραδείγματα συγχωνεύσεων και διαχωρισμών, πρακτικές συνέπειες.",
  alternates: { canonical: "https://www.kad2025.gr/blog/kad-2008-vs-2025" },
};

const faqItems = [
  {
    q: "Πόσοι ΚΑΔ άλλαξαν με τη μετάβαση στους ΚΑΔ 2025;",
    a: "Από τις 10.923 εγγραφές του επίσημου πίνακα αντιστοίχισης (Α.1004/2026), οι 7.240 (66,3%) προβλέπουν αλλαγή κωδικού και οι 3.683 (33,7%) διατηρούν τον ίδιο αριθμό. Επιπλέον, 906 κωδικοί κράτησαν τον αριθμό τους αλλά απέκτησαν επικαιροποιημένη περιγραφή.",
  },
  {
    q: "Ποιοι κλάδοι άλλαξαν περισσότερο;",
    a: "Οκτώ τομείς άλλαξαν στο 100% των κωδικών τους: Ένδυση (14), Έπιπλα (31), Κατασκευές κτιρίων (41), Εμπόριο οχημάτων (45), Πληροφορική (62), Υπηρεσίες πληροφορίας (63), Δημιουργικές τέχνες (90) και Άλλες υπηρεσίες (96). Το Λιανικό εμπόριο (47) άλλαξε κατά 98% — με διαφορά ο μεγαλύτερος σε απόλυτο αριθμό κωδικών.",
  },
  {
    q: "Υπάρχουν κλάδοι που δεν επηρεάστηκαν σχεδόν καθόλου;",
    a: "Ναι. Οι Πλωτές μεταφορές (50) δεν είχαν καμία αλλαγή κωδικού, ενώ το Δέρμα (15) και η Μεταλλουργία (24) άλλαξαν μόλις 2% και 3% αντίστοιχα. Ακόμη κι εκεί όμως ισχύει ο έλεγχος περιγραφών, καθώς μέρος των «αμετάβλητων» κωδικών απέκτησε νέο λεκτικό.",
  },
  {
    q: "Τι πρέπει να κάνω αν ο ΚΑΔ μου άλλαξε;",
    a: "Ελέγξτε στο myAADE (Μητρώο & Επικοινωνία → Βεβαιώσεις Μητρώου → Τρέχουσα Εικόνα Οντότητας) τον κωδικό που σας αποδόθηκε αυτόματα στις 9 Μαρτίου 2026. Αν δεν αποδίδει σωστά τη δραστηριότητά σας, διορθώνετε χωρίς πρόστιμο έως τις 30 Οκτωβρίου 2026 (Α.1113/2026) μέσω της εφαρμογής «Μεταβολή Εργασιών».",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "ΚΑΔ 2008 vs ΚΑΔ 2025: Τι Άλλαξε",
      datePublished: "2026-04-01",
      dateModified: "2026-06-10",
      author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
      publisher: { "@type": "Organization", name: "kad2025.gr", url: "https://www.kad2025.gr" },
      mainEntityOfPage: "https://www.kad2025.gr/blog/kad-2008-vs-2025",
      inLanguage: "el-GR",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const SECTOR_TABLE = [
  { p2: "14", name: "Κατασκευή Ενδυμάτων", changed: 129, total: 129, pct: 100 },
  { p2: "31", name: "Κατασκευή Επίπλων", changed: 52, total: 52, pct: 100 },
  { p2: "41", name: "Κατασκευές Κτιρίων", changed: 38, total: 38, pct: 100 },
  { p2: "45", name: "Εμπόριο Οχημάτων", changed: 298, total: 298, pct: 100 },
  { p2: "62", name: "Πληροφορική & Προγραμματισμός", changed: 31, total: 31, pct: 100 },
  { p2: "63", name: "Υπηρεσίες Πληροφορίας", changed: 37, total: 37, pct: 100 },
  { p2: "90", name: "Δημιουργικές Τέχνες", changed: 75, total: 75, pct: 100 },
  { p2: "96", name: "Άλλες Προσωπικές Υπηρεσίες", changed: 81, total: 81, pct: 100 },
  { p2: "47", name: "Λιανικό Εμπόριο", changed: 1639, total: 1666, pct: 98 },
  { p2: "70", name: "Συμβουλευτικές Υπηρεσίες", changed: 59, total: 60, pct: 98 },
];

const SECTOR_STABLE = [
  { p2: "50", name: "Πλωτές Μεταφορές", changed: 0, total: 54, pct: 0 },
  { p2: "15", name: "Βιομηχανία Δέρματος", changed: 1, total: 53, pct: 2 },
  { p2: "24", name: "Μεταλλουργία", changed: 6, total: 184, pct: 3 },
  { p2: "17", name: "Χαρτοβιομηχανία", changed: 7, total: 86, pct: 8 },
  { p2: "42", name: "Έργα Πολιτικού Μηχανικού", changed: 7, total: 62, pct: 11 },
];

export default function Kad2008vs2025Page() {
  return (
    <div className="post-layout">
      <article className="post-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>ΚΑΔ 2008 vs 2025</span>
      </nav>
      <div className="meta-row">
        <span>📅 Ενημέρωση: 10 Ιουνίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 10 λεπτά</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        ΚΑΔ 2008 vs ΚΑΔ 2025: Τι Άλλαξε, Τι Παρέμεινε και Γιατί
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Η μετάβαση από ΚΑΔ 2008 σε ΚΑΔ 2025 δεν είναι απλώς αλλαγή αριθμών — είναι αναδιάρθρωση
        της ταξινόμησης οικονομικών δραστηριοτήτων σε πανευρωπαϊκό επίπεδο. Εδώ θα βρείτε τα
        ακριβή μεγέθη της αλλαγής, ποιοι κλάδοι «ξαναγράφτηκαν» από το μηδέν, ποιοι έμειναν
        σχεδόν ανέγγιχτοι, και πραγματικά παραδείγματα από τον επίσημο πίνακα της ΑΑΔΕ.
      </p>

      <section id="s1" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Η βασική διαφορά: NACE Rev.2 vs NACE Rev.2.1</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Το σύστημα ΚΑΔ 2008 βασίζεται στο ευρωπαϊκό πρότυπο <strong>NACE Rev.2</strong> του 2008.
          Το σύστημα ΚΑΔ 2025 βασίζεται στο <strong>NACE Rev.2.1</strong>, την αναθεωρημένη έκδοση
          που εκδόθηκε από τη Eurostat το 2023 και εφαρμόζεται σταδιακά σε όλα τα κράτη-μέλη της ΕΕ.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η αναθεώρηση έγινε απαραίτητη κυρίως λόγω της ανάδυσης νέων τομέων: ψηφιακή οικονομία,
          πλατφόρμες, ανανεώσιμες πηγές ενέργειας, κυκλική οικονομία. Παράλληλα, παλαιοί
          κλάδοι αναδιαρθρώθηκαν ώστε η στατιστική απεικόνιση να αντικατοπτρίζει την
          πραγματικότητα της σύγχρονης αγοράς — χαρακτηριστικά, το λιανικό εμπόριο
          αναδιοργανώθηκε γύρω από το <em>τι</em> πωλείται και όχι το <em>πού</em>.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Η Ελλάδα εφάρμοσε την αλλαγή με τις αποφάσεις ΑΑΔΕ Α.1003/2026 (νέο σύστημα ΚΑΔ 2025)
          και Α.1004/2026 (πίνακας αντιστοίχισης), με ισχύ από 1η Μαρτίου 2026. Η ΑΑΔΕ
          πραγματοποίησε αυτόματη αντιστοίχιση όλων των μητρώων στις 9 Μαρτίου 2026, ενώ με
          την Α.1113/2026 η προθεσμία διόρθωσης παρατάθηκε έως τις 30 Οκτωβρίου 2026.
        </p>
      </section>

      <section id="s2" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Τα νούμερα: πόσα άλλαξαν πραγματικά</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
          {[
            { num: "10.923", label: "Εγγραφές αντιστοίχισης" },
            { num: "9.717", label: "Μοναδικοί ΚΑΔ 2008" },
            { num: "9.422", label: "Μοναδικοί ΚΑΔ 2025" },
            { num: "7.240", label: "Εγγραφές με αλλαγή κωδικού" },
            { num: "3.683", label: "Εγγραφές με ίδιο κωδικό" },
          ].map((s) => (
            <div key={s.label} className="card" style={{ textAlign: "center", padding: "0.75rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)" }}>{s.num}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Δηλαδή το <strong>66,3%</strong> των εγγραφών του πίνακα προβλέπει αλλαγή κωδικού —
          είτε απλή αντικατάσταση, είτε συγχώνευση με άλλους, είτε διαχωρισμό σε υποκατηγορίες —
          ενώ το <strong>33,7%</strong> διατηρεί τον ίδιο αριθμό. Το ότι οι 9.717 παλιοί
          κωδικοί καταλήγουν σε 9.422 νέους δείχνει και τη γενική κατεύθυνση της αναθεώρησης:
          ελαφρώς λιγότεροι, πιο ενοποιημένοι κωδικοί, με τις συγχωνεύσεις (721 νέοι κωδικοί
          «υποδοχείς») να υπερτερούν αριθμητικά των διαχωρισμών (685 παλιοί κωδικοί που
          αναλύθηκαν σε περισσότερους).
        </p>
      </section>

      <section id="s3" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Αλλαγές ανά κλάδο — ο πραγματικός πίνακας</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.9rem" }}>
          Υπολογίσαμε για κάθε διψήφιο τομέα το ποσοστό των κωδικών που άλλαξαν, απευθείας
          από τον πίνακα Α.1004/2026. Οκτώ τομείς «ξαναγράφτηκαν» στο 100%:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", marginBottom: "1rem" }}>
          {SECTOR_TABLE.map((s) => (
            <div key={s.p2} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.45rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, fontSize: "0.85rem" }}>
              <span className="kad-badge kad-badge-2008" style={{ fontSize: "0.75rem", flexShrink: 0 }}>{s.p2}</span>
              <span style={{ flex: 1 }}>{s.name}</span>
              <span style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>{s.changed}/{s.total}</span>
              <span style={{ fontWeight: 800, color: s.pct === 100 ? "var(--accent)" : "var(--primary)", minWidth: 44, textAlign: "right" }}>{s.pct}%</span>
            </div>
          ))}
        </div>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.9rem" }}>
          Στο άλλο άκρο, πέντε τομείς πέρασαν τη μετάβαση σχεδόν ανέπαφοι:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", marginBottom: "1rem" }}>
          {SECTOR_STABLE.map((s) => (
            <div key={s.p2} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.45rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, fontSize: "0.85rem" }}>
              <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.75rem", flexShrink: 0 }}>{s.p2}</span>
              <span style={{ flex: 1 }}>{s.name}</span>
              <span style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>{s.changed}/{s.total}</span>
              <span style={{ fontWeight: 800, color: "var(--success, #16a34a)", minWidth: 44, textAlign: "right" }}>{s.pct}%</span>
            </div>
          ))}
        </div>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Σε απόλυτους αριθμούς, ο μεγάλος πρωταγωνιστής είναι το <Link href="/klados/47" style={{ color: "var(--primary)" }}>Λιανικό
          Εμπόριο (47)</Link>: 1.639 από τους 1.666 κωδικούς του άλλαξαν — σχεδόν ένας στους τέσσερις
          αλλαγμένους ΚΑΔ ολόκληρης της οικονομίας ανήκει σε αυτόν τον τομέα. Αν έχετε
          κατάστημα λιανικής, η πιθανότητα να σας αφορά η μετάβαση είναι πρακτικά βέβαιη.
        </p>
      </section>

      <section id="s4" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τύποι αλλαγών με πραγματικά παραδείγματα</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Οι αλλαγές δεν είναι όλες ίδιες. Τρεις βασικοί τύποι εμφανίζονται στον πίνακα —
          δείτε τους μέσα από πραγματικές εγγραφές:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
            <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--primary)", marginBottom: "0.2rem" }}>Απλή αντικατάσταση (1 → 1)</div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Ο κωδικός αλλάζει, η δραστηριότητα μένει ίδια. Παράδειγμα: ο{" "}
              <Link href="/kad/62010000" style={{ color: "var(--primary)" }}>ΚΑΔ 62010000</Link>{" "}
              (Δραστηριότητες προγραμματισμού Η/Υ) έγινε 62100000 — ίδιο αντικείμενο,
              νέα θέση στην ιεραρχία της NACE 2.1. Η συντριπτική πλειονότητα των 7.240
              αλλαγών ανήκει εδώ.
            </div>
          </div>
          <div style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
            <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--primary)", marginBottom: "0.2rem" }}>Συγχώνευση (πολλά → 1)</div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Περισσότεροι παλιοί κωδικοί καταλήγουν σε έναν νέο, ευρύτερο. Η ακραία
              περίπτωση του πίνακα: <strong>96 διαφορετικοί ΚΑΔ 2008</strong> — από εξειδικευμένα
              σημεία λιανικής μέχρι πρατήρια — συγχωνεύονται στον{" "}
              <Link href="/kad/47922000" style={{ color: "var(--primary)" }}>νέο κωδικό 47922000</Link>{" "}
              (υπηρεσίες διαμεσολάβησης για εξειδικευμένη λιανική πώληση). Συνολικά 721 νέοι
              κωδικοί λειτουργούν ως «υποδοχείς» συγχωνεύσεων.
            </div>
          </div>
          <div style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
            <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--primary)", marginBottom: "0.2rem" }}>Διαχωρισμός (1 → πολλά)</div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Ένας παλιός κωδικός «σπάει» σε περισσότερους εξειδικευμένους — οι πιο απαιτητικές
              περιπτώσεις, γιατί η επιχείρηση πρέπει να διαλέξει. Ο μεγαλύτερος διαχωρισμός:
              ο <Link href="/kad/47891000" style={{ color: "var(--primary)" }}>ΚΑΔ 47891000</Link>{" "}
              (λιανικό εμπόριο άλλων ειδών σε υπαίθριους πάγκους) αναλύεται σε{" "}
              <strong>52 νέους κωδικούς</strong>, έναν για κάθε κατηγορία προϊόντος. Συνολικά
              685 παλιοί κωδικοί έχουν πολλαπλές αντιστοιχίσεις.
            </div>
          </div>
        </div>
      </section>

      <section id="s5" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--accent)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Οι 906 «αόρατες» αλλαγές: ίδιος αριθμός, νέα περιγραφή</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Υπάρχει και μια τέταρτη κατηγορία που σπάνια συζητιέται: <strong>906 κωδικοί
          διατήρησαν ακριβώς τον ίδιο αριθμό, αλλά η επίσημη περιγραφή τους άλλαξε</strong>.
          Η επιχείρηση δεν χρειάζεται καμία ενέργεια στο Μητρώο — ο αριθμός είναι ίδιος —
          όμως σε όποιο έγγραφο, σύμβαση ή αίτηση αναγράφεται το λεκτικό της δραστηριότητας,
          πρέπει πλέον να χρησιμοποιείται η νέα διατύπωση.
        </p>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Αυτές οι περιπτώσεις είναι και ο λόγος που στις σελίδες ΚΑΔ του kad2025.gr
          εμφανίζουμε πάντα και τις δύο περιγραφές δίπλα-δίπλα — ακόμη και όταν ο κωδικός
          δείχνει «αμετάβλητος», η σύγκριση των λεκτικών έχει αξία.
        </p>
      </section>

      <section id="s6" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι σημαίνει η αλλαγή στην πράξη</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Ο ΚΑΔ δεν είναι απλώς ένα στατιστικό πεδίο — καθορίζει ή επηρεάζει σειρά
          πρακτικών ζητημάτων:
        </p>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 2 }}>
          <li><strong>Επιδοτήσεις:</strong> Οι λίστες επιλέξιμων ΚΑΔ σε ΕΣΠΑ και Αναπτυξιακό Νόμο συντάσσονται πλέον με τους νέους κωδικούς — λάθος ΚΑΔ στο Μητρώο μπορεί να σημάνει αποκλεισμό από προκήρυξη. Δείτε τον <Link href="/kad-epidotisi-espa" style={{ color: "var(--primary)" }}>έλεγχο επιλεξιμότητας</Link>.</li>
          <li><strong>Τιμολόγηση & myDATA:</strong> Τα λογιστικά προγράμματα και οι πάροχοι ηλεκτρονικής τιμολόγησης χρειάζονται τον ενημερωμένο κωδικό για ορθή διαβίβαση. Περισσότερα στον οδηγό <Link href="/blog/kad-kai-fpa-2026" style={{ color: "var(--primary)" }}>ΚΑΔ και ΦΠΑ 2026</Link>.</li>
          <li><strong>Άδειες & μητρώα:</strong> ΓΕΜΗ, επιμελητήρια και κλαδικά μητρώα ευθυγραμμίζονται με το νέο σύστημα — η ασυμφωνία μεταξύ μητρώων δημιουργεί καθυστερήσεις σε αιτήσεις.</li>
          <li><strong>Δηλώσεις & βεβαιώσεις:</strong> Βεβαιώσεις έναρξης και μεταβολές εργασιών εκδίδονται πλέον με τους ΚΑΔ 2025.</li>
        </ul>
        <p style={{ lineHeight: 1.8, marginTop: "0.75rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Υπενθύμιση προθεσμίας: η αυτόματη αντιστοίχιση της ΑΑΔΕ (9 Μαρτίου 2026) διορθώνεται
          χωρίς πρόστιμο έως τις <strong>30 Οκτωβρίου 2026</strong>, σύμφωνα με την Α.1113/2026.
        </p>
      </section>

      <section id="s7" className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>❓ Συχνές ερωτήσεις</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--border)", paddingLeft: "1rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.3rem" }}>{faq.q}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/antistoixisi" className="btn btn-primary">🔄 Δείτε την αντιστοίχιση</Link>
        <Link href="/statistika" className="btn btn-ghost">📊 Πλήρη στατιστικά</Link>
        <Link href="/blog/metodologia-dedomenon" className="btn btn-ghost">🔍 Μεθοδολογία δεδομένων</Link>
      </div>
      </article>

      <aside className="post-toc">
        <div className="card post-toc-card">
          <div className="post-toc-title">Σε αυτό το άρθρο</div>
          <a href="#s1">Η βασική διαφορά: NACE Rev.2 vs NACE Rev.2.1</a>
          <a href="#s2">Τα νούμερα: πόσα άλλαξαν πραγματικά</a>
          <a href="#s3">Αλλαγές ανά κλάδο — ο πραγματικός πίνακας</a>
          <a href="#s4">Τύποι αλλαγών με πραγματικά παραδείγματα</a>
          <a href="#s5">Οι 906 «αόρατες» αλλαγές: ίδιος αριθμός, νέα περιγραφή</a>
          <a href="#s6">Τι σημαίνει η αλλαγή στην πράξη</a>
          <a href="#s7">Συχνές ερωτήσεις</a>
        </div>
      </aside>
    </div>
  );
}
