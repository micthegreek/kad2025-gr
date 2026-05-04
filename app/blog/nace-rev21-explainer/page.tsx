import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NACE Rev.2.1: Η Ευρωπαϊκή Ταξινόμηση που Άλλαξε τους ΚΑΔ στην Ελλάδα",
  description:
    "Τι είναι το NACE Rev.2.1, γιατί η Eurostat το εισήγαγε, πώς εφαρμόστηκε στην Ελλάδα ως ΚΑΔ 2025 και τι σημαίνει πρακτικά για επιχειρήσεις και λογιστές.",
  alternates: { canonical: "https://www.kad2025.gr/blog/nace-rev21-explainer" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NACE Rev.2.1: Η Ευρωπαϊκή Ταξινόμηση πίσω από τους ΚΑΔ 2025",
  datePublished: "2026-04-20",
  author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
  inLanguage: "el-GR",
};

export default function NaceRev21Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>NACE Rev.2.1</span>
      </nav>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.5rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <span>📅 20 Απριλίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 7 λεπτά</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        NACE Rev.2.1: Η Ευρωπαϊκή Ταξινόμηση που Άλλαξε τους ΚΑΔ στην Ελλάδα
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Η αλλαγή ΚΑΔ το 2026 δεν ήταν ελληνική απόφαση. Ήταν η εφαρμογή ενός πανευρωπαϊκού
        προτύπου ταξινόμησης που εκδόθηκε από την Eurostat. Κατανοώντας τι είναι το NACE Rev.2.1,
        καταλαβαίνετε γιατί έγιναν αυτές οι συγκεκριμένες αλλαγές.
      </p>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι είναι το NACE;</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Το <strong>NACE</strong> (Nomenclature statistique des activités économiques dans la Communauté
          européenne) είναι το επίσημο ευρωπαϊκό σύστημα ταξινόμησης οικονομικών δραστηριοτήτων.
          Χρησιμοποιείται από όλα τα κράτη-μέλη της ΕΕ για να καταγράφουν, να συγκρίνουν και να
          αναλύουν στατιστικά δεδομένα για επιχειρήσεις.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Κάθε χώρα της ΕΕ προσαρμόζει το NACE στο εθνικό της σύστημα — στην Ελλάδα αυτό είναι ο
          Κωδικός Αριθμός Δραστηριότητας (ΚΑΔ). Ουσιαστικά, ο ΚΑΔ είναι η ελληνική εκδοχή του NACE,
          με μικρές εθνικές προσαρμογές.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Η ίδια λογική ισχύει σε άλλες χώρες με διαφορετικά ονόματα: SIC στη Βρετανία, WZ στη
          Γερμανία, NAF στη Γαλλία. Όλα βασίζονται στο ίδιο ευρωπαϊκό πρότυπο.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Γιατί εκδόθηκε το NACE Rev.2.1;</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Το παλαιό NACE Rev.2 εκδόθηκε το 2008. Μέσα σε 15 χρόνια, η οικονομία άλλαξε δραματικά:
          αναδύθηκαν ολόκληροι τομείς που δεν υπήρχαν το 2008 — platform economy, cloud computing,
          ηλεκτρικά οχήματα, τηλεϊατρική, influencer marketing, ανανεώσιμες πηγές ενέργειας.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Παράλληλα, ορισμένες παλαιές κατηγορίες ήταν είτε πολύ γενικές (συμπεριλάμβαναν πολύ
          διαφορετικές δραστηριότητες) ή απαρχαιωμένες. Η Eurostat ξεκίνησε τη διαδικασία
          αναθεώρησης το 2019 και εξέδωσε το NACE Rev.2.1 επίσημα το 2023.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Η αναθεώρηση δεν ήταν ριζική αλλαγή — διατήρησε τη βασική δομή του NACE Rev.2, αλλά
          πρόσθεσε νέες κατηγορίες, αναδιάρθρωσε ορισμένους κλάδους και ενημέρωσε τις περιγραφές
          ώστε να αντικατοπτρίζουν τη σύγχρονη οικονομία.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πώς εφαρμόστηκε στην Ελλάδα;</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η Ελλάδα υποχρεούταν να εφαρμόσει το NACE Rev.2.1 ως μέλος της ΕΕ. Η ΑΑΔΕ εξέδωσε
          δύο βασικές αποφάσεις:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
          {[
            { apof: "Α.1003/2026", desc: "Ορίζει το πλήρες σύστημα ΚΑΔ 2025 — 9.422 μοναδικούς κωδικούς βασισμένους στο NACE Rev.2.1. Ισχύει από 1η Μαρτίου 2026." },
            { apof: "Α.1004/2026", desc: "Περιέχει τον επίσημο πίνακα αντιστοίχισης ΚΑΔ 2008 → ΚΑΔ 2025 για κάθε υπάρχοντα κωδικό. Βάσει αυτού, η ΑΑΔΕ εκτέλεσε αυτόματη αντιστοίχιση για 1,9 εκατ. επιχειρήσεις." },
          ].map((a) => (
            <div key={a.apof} style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--primary)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.2rem", color: "var(--primary)" }}>ΑΑΔΕ {a.apof}</div>
              <div style={{ fontSize: "0.84rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{a.desc}</div>
            </div>
          ))}
        </div>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Η αυτόματη αντιστοίχιση έγινε στις 9 Μαρτίου 2026 και έδωσε σε κάθε επιχείρηση έναν νέο
          ΚΑΔ 2025. Οι επιχειρήσεις που διαφωνούν με το αποτέλεσμα μπορούν να το διορθώσουν έως
          1η Ιουνίου 2026 χωρίς πρόστιμο.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι άλλαξε συγκεκριμένα στο NACE Rev.2.1;</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { change: "Νέος τομέας J+: Ψηφιακές υπηρεσίες", desc: "Ο τομέας J (Πληροφορίες & Επικοινωνίες) επεκτάθηκε σημαντικά με νέες κατηγορίες: cloud, SaaS, cybersecurity, AI services, streaming, influencer marketing." },
            { change: "Ανανεώσιμες Πηγές Ενέργειας", desc: "Νέες εξειδικευμένες υποκατηγορίες στον τομέα D (Παροχή Ηλεκτρικής Ενέργειας) για φωτοβολταϊκά, αιολική ενέργεια, υδρογόνο και αποθήκευση ενέργειας." },
            { change: "Platform Economy", desc: "Νέοι κωδικοί για πλατφόρμες διαμεσολάβησης, gig economy, ride-hailing, food delivery και short-term rental — τομείς που δεν υπήρχαν το 2008." },
            { change: "Αναδιάρθρωση Υγείας", desc: "Σαφέστερος διαχωρισμός ανάμεσα σε γενική ιατρική, ειδικότητες, ψυχική υγεία, τηλεϊατρική και παραϊατρικές επαγγελματικές κατηγορίες." },
            { change: "Εκσυγχρονισμός Κατασκευών", desc: "Νέες εξειδικευμένες κατηγορίες για έξυπνα κτίρια, ενεργειακές αναβαθμίσεις και ειδικές κατασκευές υποδομής." },
          ].map((c) => (
            <div key={c.change} style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--primary)", marginBottom: "0.2rem" }}>→ {c.change}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/antistoixisi" className="btn btn-primary">🔄 Δείτε την αντιστοίχιση</Link>
        <Link href="/methodology" className="btn btn-ghost">📋 Μεθοδολογία δεδομένων</Link>
      </div>
    </div>
  );
}
