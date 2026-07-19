import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ΚΑΔ για Freelancers 2026: Οι 12 Πιο Συχνές Τάξεις για Ελεύθερους Επαγγελματίες",
  description:
    "Σύμβουλοι, developers, γραφίστες, λογιστές, εκπαιδευτές: οι 12 τάξεις NACE 2.1 όπου δηλώνεται η συντριπτική πλειονότητα των ελεύθερων επαγγελματιών — με τα όρια κάθε τάξης από τις επίσημες επεξηγήσεις.",
  alternates: { canonical: "https://www.kad2025.gr/blog/kad-eleftheroi-epaggelmaties-2026" },
};

const CLASSES = [
  { c: "70.20", t: "Σύμβουλοι επιχειρήσεων & διοίκησης", n: "Στρατηγική, οργάνωση, marketing συμβουλευτική — η «default» τάξη των consultants." },
  { c: "62.10", t: "Προγραμματισμός (custom software)", n: "Ανάπτυξη λογισμικού κατά παραγγελία· το τυποποιημένο λογισμικό που εκδίδετε ανήκει στο 58.2." },
  { c: "62.20", t: "Σύμβουλοι πληροφορικής", n: "Συμβουλές για συστήματα, υποδομές, ασφάλεια — χωρίς hands-on ανάπτυξη." },
  { c: "69.20", t: "Λογιστές & φοροτεχνικοί", n: "Λογιστικές, ελεγκτικές και φορολογικές υπηρεσίες." },
  { c: "69.10", t: "Δικηγόροι & νομικές υπηρεσίες", n: "Κάθε νομική πράξη — ακόμα κι όταν σχετίζεται με ακίνητα ή εταιρικές συναλλαγές." },
  { c: "71.12", t: "Μηχανικοί", n: "Υπηρεσίες μηχανικών και συναφείς τεχνικές μελέτες." },
  { c: "71.11", t: "Αρχιτέκτονες", n: "Αρχιτεκτονικός σχεδιασμός και επίβλεψη." },
  { c: "73.11", t: "Διαφημιστικές υπηρεσίες", n: "Δημιουργία και διαχείριση καμπανιών, full-service γραφεία." },
  { c: "74.1", t: "Σχεδιαστές (design)", n: "Γραφιστική, βιομηχανικός & εσωτερικός σχεδιασμός — η ομάδα του σύγχρονου creative freelancer." },
  { c: "74.3", t: "Μεταφραστές & διερμηνείς", n: "Γραπτή μετάφραση και διερμηνεία." },
  { c: "85.5", t: "Εκπαιδευτές & ιδιαίτερα", n: "Ιδιωτική διδασκαλία, αθλητική & πολιτιστική εκπαίδευση — εδώ και οι personal trainers (85.51)." },
  { c: "86.9", t: "Λοιποί επαγγελματίες υγείας", n: "Φυσικοθεραπευτές, ψυχολόγοι, διαιτολόγοι κ.ά. — εκτός ιατρών (86.2)." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "ΚΑΔ για Freelancers 2026: Οι 12 Πιο Συχνές Τάξεις για Ελεύθερους Επαγγελματίες",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  author: { "@type": "Organization", name: "kad2025.gr" },
  mainEntityOfPage: "https://www.kad2025.gr/blog/kad-eleftheroi-epaggelmaties-2026",
};

export default function Post() {
  return (
    <article className="container" style={{ maxWidth: 860, margin: "0 auto", padding: "1.5rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Οδηγός · 6 Ιουλίου 2026 · 6 λεπτά</p>
      <h1>ΚΑΔ για Freelancers: Οι 12 Πιο Συχνές Τάξεις του 2026</h1>

      <p>
        Οι περισσότεροι ελεύθεροι επαγγελματίες στην Ελλάδα δηλώνονται μέσα σε <strong>δώδεκα τάξεις</strong>{" "}
        της NACE 2.1. Παρακάτω θα βρείτε την τάξη, το ποιον αφορά, και το λεπτό σημείο κάθε μίας — με τον
        8ψήφιο ελληνικό κωδικό να επιλέγεται μέσα από την τάξη, αφού διαβάσετε τι επίσημα περιλαμβάνει.
      </p>

      <div style={{ display: "grid", gap: "0.55rem", margin: "0.9rem 0" }}>
        {CLASSES.map((x) => (
          <section key={x.c} style={{ padding: "0.7rem 0.95rem", border: "1px solid var(--border)", borderRadius: 10 }}>
            <h2 style={{ margin: "0 0 0.2rem", fontSize: "0.98rem" }}>
              <Link href={`/kad-2025?q=${x.c.replace(".", "")}`}>{x.c}</Link> — {x.t}
            </h2>
            <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-muted)" }}>{x.n}</p>
          </section>
        ))}
      </div>

      <h2>Πώς κλειδώνετε τον σωστό 8ψήφιο</h2>
      <p>
        Πατήστε την τάξη σας παραπάνω για να δείτε όλους τους ελληνικούς 8ψήφιους κωδικούς της — και στη σελίδα
        κάθε κωδικού, την ενότητα «Τι περιλαμβάνει η τάξη» με τις επίσημες επεξηγήσεις ΕΛΣΤΑΤ (τι καλύπτεται,
        τι εξαιρείται με παραπομπή). Δύο κλασικές παγίδες:{" "}
        <Link href="/blog/parexigimenes-taksinomiseis-kad">personal trainer ≠ γυμναστήριο, custom software ≠
        εκδόσεις</Link>. Συγκρίνετέ τες <Link href="/sygkrisi-kad?a=6210&b=5829">δίπλα-δίπλα</Link>. Και πριν την έναρξη, δείτε τον οδηγό{" "}
        <Link href="/blog/kyrios-defterevon-kad-odigos">κύριου/δευτερεύοντος</Link> και τα{" "}
        <Link href="/epaggelma">έτοιμα πακέτα ΚΑΔ ανά επάγγελμα</Link>.
      </p>
    </article>
  );
}
