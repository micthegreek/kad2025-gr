import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Πώς να Βρείτε τον Σωστό ΚΑΔ 2025 — 3 Μέθοδοι για Κάθε Περίπτωση",
  description:
    "Τρεις πρακτικές μέθοδοι για να βρείτε τον σωστό ΚΑΔ 2025: αναζήτηση με λέξη-κλειδί, AI βοηθός και οδηγός βήμα-βήμα. Παραδείγματα και συμβουλές για συνηθισμένες δραστηριότητες.",
  alternates: { canonical: "https://www.kad2025.gr/blog/pos-na-vro-ton-sosto-kad" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Πώς να Βρείτε τον Σωστό ΚΑΔ 2025",
  datePublished: "2026-04-05",
  author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
  inLanguage: "el-GR",
};

export default function PosNaVroPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>Πώς να Βρείτε ΚΑΔ</span>
      </nav>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.5rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <span>📅 5 Απριλίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 6 λεπτά</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        Πώς να Βρείτε τον Σωστό ΚΑΔ 2025 — 3 Μέθοδοι για Κάθε Περίπτωση
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Δεν ξέρετε ποιος ΚΑΔ 2025 ταιριάζει στη δραστηριότητά σας; Ανάλογα με την περίπτωσή σας,
        υπάρχουν τρεις διαφορετικές προσεγγίσεις. Διαβάστε ποια σας ταιριάζει και πώς να τη χρησιμοποιήσετε.
      </p>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid #7c3aed" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: "1.8rem" }}>🔍</span>
          <h2 style={{ fontSize: "1.1rem", margin: 0 }}>Μέθοδος 1 — Αναζήτηση με λέξη-κλειδί</h2>
        </div>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η πιο άμεση μέθοδος: πληκτρολογήστε τη δραστηριότητά σας στη μηχανή αναζήτησης ΚΑΔ και
          θα εμφανιστούν οι αντίστοιχοι κωδικοί με τις περιγραφές τους.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Παραδείγματα αποτελεσματικών αναζητήσεων: «εστιατόριο», «κομμωτήριο», «ηλεκτρολόγος»,
          «web design», «μεταφορές φορτίων». Αποφύγετε γενικές λέξεις όπως «εμπόριο» ή «υπηρεσίες»
          — θα επιστρέψουν εκατοντάδες αποτελέσματα.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Αν η δραστηριότητα είναι εξειδικευμένη, δοκιμάστε και αγγλικούς όρους ή επίσημες
          ονομασίες (π.χ. «cloud computing», «cybersecurity», «drone services»).
        </p>
        <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.75rem 1rem" }}>
          <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Κατάλληλη για:</div>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Δραστηριότητες με σαφή, κοινή ονομασία — κατάλληλη για την πλειοψηφία των περιπτώσεων</div>
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <Link href="/kad-2025" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>Αναζήτηση ΚΑΔ 2025 →</Link>
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid #7c3aed" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: "1.8rem" }}>✨</span>
          <h2 style={{ fontSize: "1.1rem", margin: 0 }}>Μέθοδος 2 — AI Βοηθός ΚΑΔ</h2>
        </div>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Αν δεν ξέρετε ακριβώς τι να αναζητήσετε — ή αν η περιγραφή της δραστηριότητάς σας είναι
          σύνθετη — ο AI Βοηθός είναι η πιο αποτελεσματική επιλογή.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Περιγράψτε με δικά σας λόγια τι κάνει η επιχείρησή σας: «φτιάχνω ιστοσελίδες για μικρές
          επιχειρήσεις», «πουλάω χειροποίητα κοσμήματα online», «κάνω φυσιοθεραπεία σε ιδιωτικό
          χώρο». Το AI αναλύει την περιγραφή και προτείνει τον πλέον κατάλληλο ΚΑΔ με αιτιολόγηση.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η μέθοδος αυτή είναι ιδιαίτερα χρήσιμη σε δραστηριότητες της νέας οικονομίας (platform
          workers, creators, remote services) που δεν έχουν εύκολα αντίστοιχο στην παραδοσιακή
          ονοματολογία.
        </p>
        <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.75rem 1rem" }}>
          <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Κατάλληλη για:</div>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Σύνθετες ή πολυδιάστατες δραστηριότητες, ψηφιακές υπηρεσίες, νέοι επιχειρηματίες χωρίς τεχνική γνώση</div>
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <Link href="/ai-suggester" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>AI Βοηθός ΚΑΔ →</Link>
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid #059669" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: "1.8rem" }}>🧭</span>
          <h2 style={{ fontSize: "1.1rem", margin: 0 }}>Μέθοδος 3 — Οδηγός Βήμα-βήμα (Wizard)</h2>
        </div>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Αν ξεκινάτε εντελώς από μηδέν και δεν έχετε ιδέα από ποια κατηγορία να ξεκινήσετε, ο
          Οδηγός σας καθοδηγεί σε 3 απλά βήματα: επιλέγετε τον γενικό τομέα (π.χ. εμπόριο,
          κατασκευές, υπηρεσίες), μετά τον κλάδο και τέλος τη συγκεκριμένη δραστηριότητα.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Κάθε βήμα εμφανίζει μόνο τις σχετικές επιλογές, χωρίς να χρειάζεται να γνωρίζετε εκ
          των προτέρων τεχνική ορολογία ή κωδικούς. Στο τέλος, βλέπετε 3-5 πιθανούς ΚΑΔ με
          σύντομη περιγραφή.
        </p>
        <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.75rem 1rem" }}>
          <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Κατάλληλη για:</div>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Νέοι επιχειρηματίες, απλές ατομικές δραστηριότητες, επαγγέλματα με σαφή κατηγορία</div>
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <Link href="/wizard" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>Wizard — Βρες τον ΚΑΔ σου →</Link>
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Παραδείγματα συνηθισμένων δραστηριοτήτων</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
          {[
            { act: "Εστιατόριο", kad: "56101000" },
            { act: "Κομμωτήριο", kad: "96020000" },
            { act: "Ηλεκτρολόγος", kad: "43210000" },
            { act: "Λογιστής", kad: "69201000" },
            { act: "Ανάπτυξη λογισμικού", kad: "62010000" },
            { act: "Λιανικό e-shop", kad: "47910000" },
            { act: "Φυσιοθεραπεία", kad: "86901000" },
            { act: "Κατασκευή κτιρίων", kad: "41200000" },
          ].map((ex) => (
            <Link key={ex.kad} href={`/kad/${ex.kad}`} style={{ textDecoration: "none" }}>
              <div style={{ padding: "0.6rem 0.9rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, fontSize: "0.85rem", transition: "border-color 0.2s" }}>
                <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.15rem" }}>{ex.act}</div>
                <div style={{ fontFamily: "monospace", fontSize: "0.78rem", color: "var(--primary)" }}>{ex.kad}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "#78350f" }}>
        💡 Σε περίπτωση αμφιβολίας, πάντα επαληθεύστε με τον λογιστή σας ή με την αρμόδια ΔΟΥ.
        Η επιλογή ΚΑΔ επηρεάζει φορολογική κατάταξη, ΦΠΑ και επιλεξιμότητα σε επιδοτήσεις.
      </div>
    </div>
  );
}
