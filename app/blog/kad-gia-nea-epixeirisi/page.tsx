import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ΚΑΔ για Νέα Επιχείρηση 2026 — Πώς να Επιλέξετε τον Σωστό Κωδικό",
  description:
    "Αναλυτικός οδηγός για νέους επιχειρηματίες: πώς επιλέγετε τον σωστό ΚΑΔ 2025 κατά την έναρξη επιχείρησης, ποιες παγίδες να αποφύγετε και πώς επηρεάζει μελλοντικές επιδοτήσεις.",
  alternates: { canonical: "https://www.kad2025.gr/blog/kad-gia-nea-epixeirisi" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ΚΑΔ για Νέα Επιχείρηση 2026",
  datePublished: "2026-03-25",
  author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
  inLanguage: "el-GR",
};

export default function KadGiaNeoEpixeiriPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>ΚΑΔ για Νέα Επιχείρηση</span>
      </nav>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.5rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <span>📅 25 Μαρτίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 7 λεπτά ανάγνωση</span><span>·</span><span>🎯 Για νέες επιχειρήσεις</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        ΚΑΔ για Νέα Επιχείρηση 2026 — Πώς να Επιλέξετε τον Σωστό Κωδικό
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Αν ξεκινάτε νέα επιχείρηση ή ανοίγετε βιβλία το 2026, πρέπει να δηλώσετε απευθείας στο
        σύστημα ΚΑΔ 2025 — το παλιό σύστημα 2008 δεν χρησιμοποιείται πλέον. Αυτός ο οδηγός σας
        βοηθά να κάνετε τη σωστή επιλογή από την πρώτη στιγμή.
      </p>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι ισχύει από το 2026 για νέες επιχειρήσεις</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Από την 1η Μαρτίου 2026, όλες οι νέες ενάρξεις επιχειρηματικής δραστηριότητας στην Ελλάδα
          γίνονται <strong>αποκλειστικά με ΚΑΔ 2025</strong>. Το παλιό σύστημα ΚΑΔ 2008 δεν
          χρησιμοποιείται πλέον για νέες ενάρξεις.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Αυτό σημαίνει ότι αν πηγαίνετε σήμερα στη ΔΟΥ ή κάνετε έναρξη ηλεκτρονικά μέσω myAADE,
          θα δείτε τους νέους κωδικούς ΚΑΔ 2025 — οι οποίοι ακολουθούν το ευρωπαϊκό πρότυπο
          NACE Rev.2.1.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Σε αντίθεση με τις υπάρχουσες επιχειρήσεις που πέρασαν από αυτόματη αντιστοίχιση, εσείς
          ξεκινάτε από μηδενική βάση και επιλέγετε τον ΚΑΔ σας απευθείας.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πώς να βρείτε τον σωστό ΚΑΔ</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
          Η αναζήτηση ΚΑΔ δεν είναι πάντα εύκολη — οι κωδικοί είναι πολλοί και οι περιγραφές μπορεί
          να είναι τεχνικές. Χρησιμοποιήστε μία από τις παρακάτω μεθόδους:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { title: "Αναζήτηση με λέξη-κλειδί", desc: "Πληκτρολογήστε περιγραφή της δραστηριότητάς σας (π.χ. \"εστιατόριο\", \"ηλεκτρολόγος\", \"λογισμικό\") στο εργαλείο αναζήτησης ΚΑΔ 2025. Θα εμφανιστούν οι σχετικοί κωδικοί.", emoji: "🔍" },
            { title: "Ο AI Βοηθός ΚΑΔ", desc: "Αν δεν ξέρετε ακριβώς τι να αναζητήσετε, περιγράψτε με δικά σας λόγια τι θα κάνει η επιχείρησή σας και το AI θα προτείνει τον καταλληλότερο ΚΑΔ.", emoji: "✨" },
            { title: "Οδηγός 3 βημάτων (Wizard)", desc: "Αν ξεκινάτε εντελώς από την αρχή, ο οδηγός σας κατευθύνει βήμα-βήμα: επιλέγετε κλάδο → υποκλάδο → συγκεκριμένη δραστηριότητα.", emoji: "🧭" },
            { title: "Συμβουλή λογιστή", desc: "Για πολύπλοκες δραστηριότητες ή αν σχεδιάζετε ΕΣΠΑ, η επιβεβαίωση από λογιστή ή φοροτεχνικό συμβουλεύεται πριν την οριστική δήλωση.", emoji: "👨‍💼" },
          ].map((m) => (
            <div key={m.title} style={{ display: "flex", gap: "0.75rem", padding: "0.75rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{m.emoji}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{m.title}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Κύριος ΚΑΔ vs δευτερεύοντες</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Ο <strong>κύριος ΚΑΔ</strong> αντιπροσωπεύει τη βασική δραστηριότητα που αναμένεται να
          παράγει τα μεγαλύτερα έσοδα. Αυτός ορίζει την κύρια κατηγορία της επιχείρησης για
          φορολογικούς σκοπούς.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Οι <strong>δευτερεύοντες ΚΑΔ</strong> αντιπροσωπεύουν συμπληρωματικές δραστηριότητες. Δεν
          είναι υποχρεωτικό να τους δηλώσετε από την αρχή, αλλά αν σκοπεύετε να ασκήσετε
          διαφορετικές δραστηριότητες, είναι χρήσιμο να τους δηλώσετε εξ αρχής.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Σημαντικό: για ορισμένα προγράμματα ΕΣΠΑ, ο επιλέξιμος ΚΑΔ μπορεί να βρίσκεται στους
          δευτερεύοντες. Αν έχετε συγκεκριμένο πρόγραμμα στο μυαλό σας, ελέγξτε εκ των προτέρων τους
          επιλέξιμους ΚΑΔ και βεβαιωθείτε ότι κάποιος από αυτούς θα δηλωθεί.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Συνηθισμένα λάθη νέων επιχειρηματιών</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { err: "Επιλογή γενικού αντί για εξειδικευμένο ΚΑΔ", fix: "Προτιμήστε τον πιο εξειδικευμένο ΚΑΔ που περιγράφει ακριβώς τη δραστηριότητά σας. Οι γενικοί κωδικοί (π.χ. \"διάφορες υπηρεσίες\") μπορεί να δημιουργήσουν πρόβλημα σε μελλοντικές αιτήσεις επιδότησης." },
            { err: "Εισαγωγή παλαιού κωδικού ΚΑΔ 2008", fix: "Η ΔΟΥ πλέον χρησιμοποιεί ΚΑΔ 2025. Αν ο λογιστής σας ή εσείς αναζητάτε έναν κωδικό, βεβαιωθείτε ότι αναφέρεστε στο νέο σύστημα 2025." },
            { err: "Αγνόηση επίδρασης ΚΑΔ στο ΦΠΑ", fix: "Ορισμένες δραστηριότητες έχουν διαφορετικό συντελεστή ΦΠΑ (13%, 6% κλπ). Η επιλογή ΚΑΔ επηρεάζει αυτή τη ρύθμιση — ζητήστε διευκρίνιση από τον λογιστή σας." },
            { err: "Δήλωση ΚΑΔ χωρίς πρόβλεψη για ΕΣΠΑ", fix: "Αν σχεδιάζετε να υποβάλετε αίτηση σε πρόγραμμα επιδότησης τα επόμενα 1-2 χρόνια, ελέγξτε εκ των προτέρων τους επιλέξιμους ΚΑΔ και εξασφαλίστε ότι ο ΚΑΔ σας καλύπτεται." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "0.75rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid #dc2626", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#dc2626", marginBottom: "0.25rem" }}>⚠️ {item.err}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>→ {item.fix}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <Link href="/kad-2025" className="btn btn-primary">🆕 Αναζήτηση ΚΑΔ 2025</Link>
        <Link href="/ai-suggester" className="btn btn-ghost">✨ AI Βοηθός ΚΑΔ</Link>
        <Link href="/wizard" className="btn btn-ghost">🧭 Οδηγός 3 βημάτων</Link>
        <Link href="/enarxi-epixeirisis-kad" className="btn btn-ghost">🚀 ΚΑΔ Έναρξης</Link>
      </div>
    </div>
  );
}
