import type { Metadata } from "next";
import Link from "next/link";
import KadSearch from "@/components/KadSearch";
import { getKadData } from "@/lib/kadData";

export const metadata: Metadata = {
  title: "ΚΑΔ Έναρξης Επιχείρησης 2025 | Σωστός ΚΑΔ",
  description:
    "Βρείτε τον ΚΑΔ 2025 για έναρξη επιχείρησης. Αναζήτηση με λέξη-κλειδί (π.χ. εστιατόριο, κομμωτήριο). Σωστός κωδικός εφορίας.",
  alternates: { canonical: "https://www.kad2025.gr/enarxi-epixeirisis-kad" },
  openGraph: {
    title: "ΚΑΔ για Έναρξη Επιχείρησης 2025",
    description: "Βρείτε τον ΚΑΔ που πρέπει να δηλώσετε στην εφορία κατά την έναρξη επιχείρησης.",
  },
};

const POPULAR: Array<{ term: string; kad: string; desc: string; searchMode?: boolean }> = [
  { term: "εστιατόριο", kad: "56101000", desc: "Υπηρεσίες εστιατορίου" },
  { term: "καφέ", kad: "56301000", desc: "Υπηρεσίες καφετέριας" },
  { term: "κομμωτήριο", kad: "96021000", desc: "Υπηρεσίες κομμωτηρίου" },
  { term: "supermarket", kad: "47110000", desc: "Λιανικό εμπόριο τροφίμων" },
  { term: "κατασκευές", kad: "41200000", desc: "Κατασκευή κτιρίων" },
  { term: "μεταφορές", kad: "49410000", desc: "Οδικές εμπορευματικές μεταφορές" },
  { term: "λογιστής", kad: "69201000", desc: "Υπηρεσίες λογιστικής", searchMode: true },
  { term: "IT / software", kad: "62010000", desc: "Ανάπτυξη λογισμικού" },
  { term: "ακίνητα", kad: "68311000", desc: "Υπηρεσίες μεσιτικού γραφείου" },
  { term: "ιατρός", kad: "86211000", desc: "Υπηρεσίες γενικής ιατρικής" },
  { term: "φαρμακείο", kad: "47730000", desc: "Φαρμακεία" },
  { term: "τουρισμός", kad: "79110000", desc: "Ταξιδιωτικά γραφεία" },
];

const STEPS = [
  { n: "1", title: "Βρείτε τον ΚΑΔ σας", desc: "Αναζητήστε με λέξη-κλειδί την επαγγελματική σας δραστηριότητα παρακάτω. Επιλέξτε τον ΚΑΔ που περιγράφει καλύτερα αυτό που θα κάνετε." },
  { n: "2", title: "Σημειώστε τον κωδικό", desc: "Κρατήστε τον 8ψήφιο κωδικό ΚΑΔ. Θα τον χρειαστείτε κατά την υποβολή της αίτησης έναρξης στο myAADE." },
  { n: "3", title: "Υποβολή έναρξης στο myAADE", desc: "Συνδεθείτε στο myAADE → \"Έναρξη Εργασιών\" → δηλώστε τον ΚΑΔ σας μαζί με τα υπόλοιπα στοιχεία. Εναλλακτικά επισκεφτείτε τη ΔΟΥ σας." },
  { n: "4", title: "Κύριος vs Δευτερεύων ΚΑΔ", desc: "Μπορείτε να δηλώσετε έναν κύριο ΚΑΔ (η βασική δραστηριότητά σας) και πολλούς δευτερεύοντες. Δεν υπάρχει όριο δευτερευόντων ΚΑΔ." },
];

const FAQS = [
  { q: "Πρέπει να ξέρω τον κωδικό ΚΑΔ για να κάνω έναρξη;", a: "Ναι — κατά την έναρξη επιχείρησης στη ΔΟΥ ή στο myAADE πρέπει να δηλώσετε τον ΚΑΔ που αντιστοιχεί στη δραστηριότητά σας. Χρησιμοποιήστε την αναζήτηση παραπάνω για να τον βρείτε." },
  { q: "Μπορώ να έχω πολλούς ΚΑΔ;", a: "Ναι. Μπορείτε να έχετε έναν κύριο ΚΑΔ και απεριόριστους δευτερεύοντες. Ο κύριος ΚΑΔ είναι αυτός που αντιστοιχεί στη βασική σας δραστηριότητα." },
  { q: "Μπορώ να αλλάξω ΚΑΔ μετά την έναρξη;", a: "Ναι — μπορείτε να αλλάξετε ή να προσθέσετε ΚΑΔ οποιαδήποτε στιγμή μέσω Μεταβολής Εργασιών στο myAADE ή στη ΔΟΥ σας." },
  { q: "Οι ΚΑΔ του 2025 είναι διαφορετικοί από αυτούς που ίσχυαν παλιά;", a: "Ναι. Από 1η Μαρτίου 2026 ισχύουν οι νέοι ΚΑΔ 2025 σύμφωνα με την ευρωπαϊκή ταξινόμηση NACE Rev.2.1. Αν κάνετε έναρξη τώρα, δηλώνετε απευθείας τον νέο ΚΑΔ 2025." },
  { q: "Τι γίνεται αν δεν βρω τον κατάλληλο ΚΑΔ;", a: "Αναζητήστε με διαφορετικές λέξεις-κλειδιά ή ρωτήστε τον λογιστή σας. Μπορείτε επίσης να δείτε τους ΚΑΔ ανά κλάδο δραστηριότητας στη σελίδα Κλάδοι." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
        { "@type": "ListItem", position: 2, name: "ΚΑΔ για Έναρξη Επιχείρησης", item: "https://www.kad2025.gr/enarxi-epixeirisis-kad" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function EnarxiPage() {
  const data = getKadData();
  const totalKads = new Set(data.map((r) => r.kad2025)).size;

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<span>ΚΑΔ για Έναρξη Επιχείρησης</span>
      </nav>

      <div style={{ display: "inline-block", background: "var(--success)", color: "white", fontSize: "0.78rem", padding: "0.2rem 0.6rem", borderRadius: 4, marginBottom: "0.75rem", fontWeight: 600 }}>
        ΓΙΑ ΝΕΟΥΣ ΕΠΙΧΕΙΡΗΜΑΤΙΕΣ & ΛΟΓΙΣΤΕΣ
      </div>
      <h1 style={{ marginBottom: "0.5rem" }}>ΚΑΔ για Έναρξη Επιχείρησης από 1/3/2026</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Βρείτε τον σωστό ΚΑΔ που πρέπει να δηλώσετε στην εφορία κατά την έναρξη επιχείρησης.
        Αναζητήστε με λέξη-κλειδί (π.χ. <em>εστιατόριο</em>, <em>κομμωτήριο</em>, <em>μεταφορές</em>)
        και βρείτε αμέσως τον κωδικό από τη βάση <strong>{totalKads.toLocaleString("el-GR")} ΚΑΔ 2025</strong>.
      </p>

      {/* SEARCH FIRST */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>🔍 Αναζητήστε ΚΑΔ με Λέξη-Κλειδί</h2>
        <KadSearch mode="kad2025" />
      </section>

      {/* Popular categories */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>⭐ Δημοφιλείς ΚΑΔ για Νέες Επιχειρήσεις</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.6rem" }}>
          {POPULAR.map((p) => (
            <Link key={p.kad + (p.searchMode ? "-s" : "")} href={p.searchMode ? `/kad-2025?q=${p.kad}` : `/kad/${p.kad}`} style={{ textDecoration: "none" }}>
              <div className="card" style={{ padding: "0.75rem", borderLeft: "3px solid var(--success)" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>{p.term}</div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.15rem" }}>{p.desc}</div>
                <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.72rem" }}>{p.kad}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Πώς να Βρείτε και να Δηλώσετε τον ΚΑΔ σας</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {STEPS.map((s) => (
            <div key={s.n} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ background: "var(--success)", color: "white", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>
                {s.n}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Συχνές Ερωτήσεις — ΚΑΔ & Έναρξη</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {FAQS.map((f, i) => (
            <div key={i} className="card">
              <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.4rem" }}>❓ {f.q}</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related links */}
      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Χρήσιμα Εργαλεία</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { href: "/kad-2025", label: "🔍 Αναζήτηση ΚΑΔ 2025 — Πλήρης Βάση" },
            { href: "/klados", label: "📂 ΚΑΔ ανά Κλάδο Δραστηριότητας" },
            { href: "/odigies-logistes", label: "📋 Οδηγός για Λογιστές" },
            { href: "/antistoixisi", label: "🔄 Αντιστοίχιση ΚΑΔ 2008 → 2025 (για υπάρχουσες επιχειρήσεις)" },
            { href: "/blog", label: "📖 Πλήρης Οδηγός ΚΑΔ 2025" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "var(--primary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
