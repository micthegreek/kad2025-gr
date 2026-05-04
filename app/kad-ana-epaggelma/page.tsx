import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ΚΑΔ ανά Επάγγελμα 2025 | Λίστα Κωδικών",
  description:
    "Βρείτε τον ΚΑΔ 2025 για κάθε επάγγελμα. Εστιατόριο, κομμωτήριο, IT, κατασκευές, λιανικό, ιατρός, λογιστής και 50+ επαγγελματικές δραστηριότητες.",
  alternates: { canonical: "https://www.kad2025.gr/kad-ana-epaggelma" },
};

type ProfessionItem = { label: string; kad: string; desc: string; searchMode?: boolean };
type Category = { title: string; color: string; items: ProfessionItem[] };

const CATEGORIES: Category[] = [
  {
    title: "🍽️ Εστίαση & Τρόφιμα",
    color: "#dc2626",
    items: [
      { label: "Εστιατόριο", kad: "56101000", desc: "Υπηρεσίες εστιατορίου" },
      { label: "Καφετέρια / Καφέ", kad: "56301000", desc: "Υπηρεσίες καφετέριας" },
      { label: "Ταβέρνα / Ψητοπωλείο", kad: "56101000", desc: "Υπηρεσίες εστιατορίων και κινητών μονάδων εστίασης" },
      { label: "Ζαχαροπλαστείο", kad: "56101101", desc: "Υπηρεσίες καφεζαχαροπλαστείου" },
      { label: "Delivery φαγητού", kad: "56290000", desc: "Άλλες υπηρεσίες εστίασης" },
      { label: "Σούπερ μάρκετ", kad: "47110000", desc: "Λιανικό εμπόριο σε μη εξειδικευμένα καταστήματα" },
      { label: "Φούρνος / Αρτοποιείο", kad: "10710000", desc: "Παραγωγή άρτου, αρτοσκευασμάτων" },
      { label: "Κρεοπωλείο", kad: "47220000", desc: "Λιανικό εμπόριο κρέατος" },
    ],
  },
  {
    title: "💇 Ομορφιά & Περιποίηση",
    color: "#db2777",
    items: [
      { label: "Κομμωτήριο", kad: "96021000", desc: "Υπηρεσίες κομμωτηρίου" },
      { label: "Κουρείο", kad: "96021000", desc: "Υπηρεσίες κομμωτηρίου & κουρείου" },
      { label: "Αισθητικός / Spa", kad: "96022000", desc: "Υπηρεσίες αισθητικής και αδυνατίσματος" },
      { label: "Μανικιούρ / Νύχια", kad: "96022000", desc: "Υπηρεσίες περιποίησης νυχιών" },
      { label: "Τατουάζ / Piercing", kad: "96090000", desc: "Άλλες υπηρεσίες προσωπικής περιποίησης" },
    ],
  },
  {
    title: "🏗️ Κατασκευές & Τεχνικά",
    color: "#d97706",
    items: [
      { label: "Εργολάβος κτιρίων", kad: "41200000", desc: "Κατασκευή κατοικιών και άλλων κτιρίων" },
      { label: "Ηλεκτρολόγος", kad: "43211000", desc: "Εργασίες ηλεκτρολογικών εγκαταστάσεων" },
      { label: "Υδραυλικός", kad: "43220000", desc: "Υδραυλικές, θερμικές και κλιματιστικές εγκαταστάσεις", searchMode: true },
      { label: "Ελαιοχρωματιστής", kad: "43340000", desc: "Χρωματισμοί και υαλοτεχνικές εργασίες", searchMode: true },
      { label: "Αρχιτέκτονας", kad: "71112100", desc: "Υπηρεσίες αρχιτεκτόνων" },
      { label: "Πολιτικός μηχανικός", kad: "42990000", desc: "Έργα πολιτικού μηχανικού" },
    ],
  },
  {
    title: "💻 Τεχνολογία & IT",
    color: "#2563eb",
    items: [
      { label: "Ανάπτυξη λογισμικού", kad: "62010000", desc: "Δραστηριότητες προγραμματισμού" },
      { label: "Σχεδιασμός ιστοσελίδων", kad: "62010000", desc: "Ανάπτυξη εφαρμογών λογισμικού" },
      { label: "IT συντήρηση / Support", kad: "62020000", desc: "Δραστηριότητες παροχής συμβουλών πληροφορικής" },
      { label: "Επισκευή υπολογιστών", kad: "95110000", desc: "Επισκευή υπολογιστών και περιφερειακού εξοπλισμού" },
      { label: "Φωτογράφος", kad: "74200000", desc: "Φωτογραφικές δραστηριότητες" },
    ],
  },
  {
    title: "🚗 Μεταφορές & Οχήματα",
    color: "#7c3aed",
    items: [
      { label: "Ταξί / VTC", kad: "49320000", desc: "Εκμετάλλευση ταξί" },
      { label: "Φορτηγό / Μεταφορές", kad: "49410000", desc: "Οδικές εμπορευματικές μεταφορές" },
      { label: "Συνεργείο αυτοκινήτων", kad: "45200000", desc: "Συντήρηση και επισκευή μηχανοκίνητων οχημάτων" },
      { label: "Βουλκανιζατέρ", kad: "45200000", desc: "Επισκευή ελαστικών" },
      { label: "Αντιπρόσωπος αυτοκινήτων", kad: "45110000", desc: "Εμπόριο αυτοκινήτων" },
    ],
  },
  {
    title: "🏥 Υγεία & Ιατρική",
    color: "#059669",
    items: [
      { label: "Γενικός ιατρός", kad: "86211000", desc: "Υπηρεσίες γενικής ιατρικής" },
      { label: "Ειδικός ιατρός", kad: "86221000", desc: "Υπηρεσίες ειδικής ιατρικής" },
      { label: "Οδοντίατρος", kad: "86231000", desc: "Οδοντιατρικές υπηρεσίες" },
      { label: "Φυσιοθεραπευτής", kad: "86901000", desc: "Δραστηριότητες φυσιοθεραπείας" },
      { label: "Φαρμακείο", kad: "47730000", desc: "Λιανικό εμπόριο φαρμακευτικών ειδών" },
      { label: "Ψυχολόγος", kad: "86902000", desc: "Δραστηριότητες ψυχολόγου", searchMode: true },
    ],
  },
  {
    title: "📊 Οικονομικές & Νομικές",
    color: "#1e3a5f",
    items: [
      { label: "Λογιστής", kad: "69201000", desc: "Δραστηριότητες λογιστικής", searchMode: true },
      { label: "Φοροτεχνικός", kad: "69201000", desc: "Φοροτεχνικές δραστηριότητες", searchMode: true },
      { label: "Δικηγόρος", kad: "69101000", desc: "Νομικές υπηρεσίες (δικηγόρου)" },
      { label: "Σύμβουλος επιχειρήσεων", kad: "70220000", desc: "Συμβουλευτικές δραστηριότητες διαχείρισης" },
      { label: "Ασφαλιστικός πράκτορας", kad: "66221000", desc: "Δραστηριότητες ασφαλιστικών πρακτόρων" },
    ],
  },
  {
    title: "🏠 Ακίνητα & Τουρισμός",
    color: "#0891b2",
    items: [
      { label: "Μεσίτης ακινήτων", kad: "68311000", desc: "Υπηρεσίες μεσιτικού γραφείου ακινήτων" },
      { label: "Ξενοδοχείο", kad: "55101000", desc: "Υπηρεσίες παροχής καταλύματος" },
      { label: "Ενοικίαση διαμερισμάτων (Airbnb)", kad: "55201901", desc: "Υπηρεσίες εκμίσθωσης επιπλωμένων διαμερισμάτων" },
      { label: "Τουριστικό γραφείο", kad: "79110000", desc: "Δραστηριότητες ταξιδιωτικών γραφείων" },
      { label: "Διαχείριση ακινήτων", kad: "68321000", desc: "Υπηρεσίες διαχείρισης ακινήτων" },
    ],
  },
  {
    title: "📚 Εκπαίδευση & Κατάρτιση",
    color: "#7c3aed",
    items: [
      { label: "Φροντιστήριο", kad: "85520000", desc: "Εκπαίδευση στο πλαίσιο πολιτιστικών δραστηριοτήτων", searchMode: true },
      { label: "Σχολή οδήγησης", kad: "85531000", desc: "Υπηρεσίες σχολών οδηγών" },
      { label: "Γυμναστήριο / Fitness", kad: "93130000", desc: "Δραστηριότητες γυμναστηρίων" },
      { label: "Διδασκαλία μουσικής", kad: "85520000", desc: "Διδασκαλία μουσικής & καλλιτεχνικών", searchMode: true },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
        { "@type": "ListItem", position: 2, name: "Οδηγοί", item: "https://www.kad2025.gr/odigoi" },
        { "@type": "ListItem", position: 3, name: "ΚΑΔ ανά Επάγγελμα", item: "https://www.kad2025.gr/kad-ana-epaggelma" },
      ],
    },
    {
      "@type": "ItemList",
      name: "ΚΑΔ 2025 ανά Επάγγελμα",
      numberOfItems: CATEGORIES.reduce((sum, c) => sum + c.items.length, 0),
      itemListElement: CATEGORIES.flatMap((cat, ci) =>
        cat.items.map((item, ii) => ({
          "@type": "ListItem",
          position: ci * 10 + ii + 1,
          name: item.label,
          description: `ΚΑΔ ${item.kad}: ${item.desc}`,
          url: item.searchMode
            ? `https://www.kad2025.gr/kad-2025?q=${item.kad}`
            : `https://www.kad2025.gr/kad/${item.kad}`,
        }))
      ),
    },
  ],
};

export default function KadAnaEpaggelmaPaPage() {
  const totalItems = CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>{" → "}
        <Link href="/odigoi" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>{" → "}
        <span>ΚΑΔ ανά Επάγγελμα</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem" }}>ΚΑΔ 2025 ανά Επάγγελμα</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
        Λίστα με τους πιο συχνούς ΚΑΔ 2025 για <strong>{totalItems}+ επαγγέλματα</strong> και δραστηριότητες.
        Ιδανικό για νέες επιχειρήσεις που ψάχνουν τον σωστό κωδικό για δήλωση στην εφορία.
      </p>
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
        💡 Κλικ σε οποιονδήποτε ΚΑΔ για πλήρη πληροφορίες και αντιστοίχιση 2008→2025.
      </p>

      {/* Search CTA */}
      <div className="card" style={{ marginBottom: "2rem", borderLeft: "4px solid var(--primary)", display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>🔍 Δεν βρίσκετε αυτό που ψάχνετε;</div>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Χρησιμοποιήστε την αναζήτηση ΚΑΔ για να βρείτε οποιαδήποτε δραστηριότητα</div>
        </div>
        <Link href="/enarxi-epixeirisis-kad" className="btn btn-primary" style={{ fontSize: "0.875rem", whiteSpace: "nowrap" }}>
          Αναζήτηση ΚΑΔ →
        </Link>
      </div>

      {/* Categories */}
      {CATEGORIES.map((cat) => (
        <section key={cat.title} style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem", borderLeft: `4px solid ${cat.color}`, paddingLeft: "0.75rem" }}>
            {cat.title}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.6rem" }}>
            {cat.items.map((item) => (
              <Link key={`${item.label}-${item.kad}`} href={item.searchMode ? `/kad-2025?q=${item.kad}` : `/kad/${item.kad}`} style={{ textDecoration: "none" }}>
                <div className="card" style={{ padding: "0.75rem", borderLeft: `3px solid ${cat.color}` }}>
                  <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.2rem", color: "var(--text)" }}>{item.label}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "0.3rem", lineHeight: 1.4 }}>{item.desc}</div>
                  <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.7rem" }}>{item.kad}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* Footer CTA */}
      <div className="card">
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Χρήσιμα Εργαλεία</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { href: "/enarxi-epixeirisis-kad", label: "🚀 ΚΑΔ για Έναρξη Επιχείρησης" },
            { href: "/kad-2025", label: "🔍 Πλήρης Αναζήτηση ΚΑΔ 2025" },
            { href: "/klados", label: "📂 ΚΑΔ ανά Κλάδο Δραστηριότητας" },
            { href: "/ti-einai-kad", label: "❓ Τι είναι ΚΑΔ" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "var(--primary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>{l.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
