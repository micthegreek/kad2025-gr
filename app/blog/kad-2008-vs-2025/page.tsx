import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ΚΑΔ 2008 vs ΚΑΔ 2025: Τι Άλλαξε και Τι Παρέμεινε — Πλήρης Σύγκριση",
  description:
    "Αναλυτική σύγκριση ΚΑΔ 2008 και ΚΑΔ 2025: πόσοι κωδικοί άλλαξαν, πόσοι παρέμειναν ίδιοι, ποιοι κλάδοι επηρεάστηκαν περισσότερο και τι σημαίνει αυτό για επιχειρήσεις.",
  alternates: { canonical: "https://www.kad2025.gr/blog/kad-2008-vs-2025" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ΚΑΔ 2008 vs ΚΑΔ 2025: Τι Άλλαξε",
  datePublished: "2026-04-01",
  author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
  inLanguage: "el-GR",
};

export default function Kad2008vs2025Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>ΚΑΔ 2008 vs 2025</span>
      </nav>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.5rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <span>📅 1 Απριλίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 7 λεπτά</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        ΚΑΔ 2008 vs ΚΑΔ 2025: Τι Άλλαξε, Τι Παρέμεινε και Γιατί
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Η μετάβαση από ΚΑΔ 2008 σε ΚΑΔ 2025 δεν είναι απλώς αλλαγή αριθμών. Είναι βαθύτερη αναδιάρθρωση
        της ταξινόμησης οικονομικών δραστηριοτήτων σε πανευρωπαϊκό επίπεδο. Δείτε τι σημαίνει αυτό στην πράξη.
      </p>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Η βασική διαφορά: NACE Rev.2 vs NACE Rev.2.1</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Το σύστημα ΚΑΔ 2008 βασίζεται στο ευρωπαϊκό πρότυπο <strong>NACE Rev.2</strong> του 2008.
          Το σύστημα ΚΑΔ 2025 βασίζεται στο <strong>NACE Rev.2.1</strong>, την αναθεωρημένη έκδοση
          που εκδόθηκε από την Eurostat το 2023 και ισχύει σε όλα τα κράτη-μέλη της ΕΕ από το 2025.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η αναθεώρηση έγινε απαραίτητη κυρίως λόγω της ανάδυσης νέων τομέων: ψηφιακή οικονομία,
          πλατφόρμες, ανανεώσιμες πηγές ενέργειας, βιοτεχνολογία. Παράλληλα, ορισμένοι παλαιοί
          κλάδοι αναδιαρθρώθηκαν για να αντικατοπτρίζουν την πραγματικότητα της σύγχρονης αγοράς.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Η Ελλάδα εφάρμοσε την αλλαγή με τις αποφάσεις ΑΑΔΕ Α.1003/2026 (νέο σύστημα ΚΑΔ 2025)
          και Α.1004/2026 (πίνακας αντιστοίχισης), με ισχύ από 1η Μαρτίου 2026.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Τα νούμερα: πόσα άλλαξαν</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
          {[
            { num: "10.923", label: "Εγγραφές αντιστοίχισης" },
            { num: "9.717", label: "Μοναδικοί ΚΑΔ 2008" },
            { num: "9.422", label: "Μοναδικοί ΚΑΔ 2025" },
            { num: "7.240", label: "ΚΑΔ που άλλαξαν" },
            { num: "~2.477", label: "ΚΑΔ που παρέμειναν ίδιοι" },
          ].map((s) => (
            <div key={s.label} className="card" style={{ textAlign: "center", padding: "0.75rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)" }}>{s.num}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Δηλαδή, περίπου <strong>74%</strong> των ΚΑΔ άλλαξαν με κάποιον τρόπο — είτε αντικαταστάθηκαν
          από εντελώς νέο κωδικό, είτε συγχωνεύτηκαν με άλλους, είτε διαχωρίστηκαν σε υποκατηγορίες.
          Μόνο το ~26% παρέμεινε ταυτόσημο.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Κλάδοι που επηρεάστηκαν περισσότερο</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { kl: "Ψηφιακές υπηρεσίες & IT (62-63)", desc: "Εκτεταμένη αναδιάρθρωση. Νέες εξειδικευμένες κατηγορίες για cloud, cybersecurity, AI και platform economy." },
            { kl: "Ανανεώσιμες Πηγές Ενέργειας (35)", desc: "Νέοι κωδικοί για φωτοβολταϊκά, αιολική ενέργεια και μπαταρίες αποθήκευσης — αντικατοπτρίζουν την ανάπτυξη του κλάδου." },
            { kl: "Εστίαση & Καταλύματα (55-56)", desc: "Νέες υποκατηγορίες για delivery, cloud kitchens, short-term rentals και boutique καταλύματα." },
            { kl: "Κατασκευές (41-43)", desc: "Πολλές αναδιαρθρώσεις και νέες εξειδικευμένες κατηγορίες, κυρίως σε ειδικές κατασκευές και αναπλάσεις." },
            { kl: "Υγεία (86)", desc: "Σαφέστερος διαχωρισμός κατηγοριών: γενική ιατρική, ειδικότητες, ψυχική υγεία, τηλεϊατρική." },
          ].map((item) => (
            <div key={item.kl} style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.2rem" }}>{item.kl}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τύποι αλλαγών: 1 → 1, πολλά → 1, 1 → πολλά</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Οι αλλαγές δεν είναι όλες ίδιες. Υπάρχουν τρεις βασικοί τύποι:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { type: "Απλή αντικατάσταση (1 → 1)", desc: "Ένας ΚΑΔ 2008 αντικαταστάθηκε από έναν ΚΑΔ 2025. Η πιο απλή περίπτωση — ο κωδικός άλλαξε αλλά η περιγραφή δραστηριότητας παρέμεινε ουσιαστικά ίδια." },
            { type: "Συγχώνευση (πολλά → 1)", desc: "Δύο ή περισσότεροι ΚΑΔ 2008 συγχωνεύτηκαν σε έναν ΚΑΔ 2025. Αυτό σημαίνει ότι ο νέος κωδικός καλύπτει ευρύτερο φάσμα δραστηριοτήτων." },
            { type: "Διαχωρισμός (1 → πολλά)", desc: "Ένας ΚΑΔ 2008 χωρίστηκε σε δύο ή περισσότερους ΚΑΔ 2025. Αυτές είναι οι πιο δύσκολες περιπτώσεις — η επιχείρηση πρέπει να επιλέξει ποιος νέος ΚΑΔ ταιριάζει καλύτερα στη δραστηριότητά της." },
          ].map((t) => (
            <div key={t.type} style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--primary)", marginBottom: "0.2rem" }}>{t.type}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/antistoixisi" className="btn btn-primary">🔄 Δείτε την αντιστοίχιση</Link>
        <Link href="/statistika" className="btn btn-ghost">📊 Πλήρη στατιστικά</Link>
      </div>
    </div>
  );
}
