import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ΚΑΔ 2025 και ΦΠΑ: Τι Αλλάζει το 2026 για Επιχειρήσεις",
  description:
    "Πώς ο νέος ΚΑΔ 2025 επηρεάζει τον συντελεστή ΦΠΑ της επιχείρησής σας, ποιες κατηγορίες επιχειρήσεων πρέπει να δώσουν ιδιαίτερη προσοχή και πώς να ελέγξετε αν κάτι άλλαξε.",
  alternates: { canonical: "https://www.kad2025.gr/blog/kad-kai-fpa-2026" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ΚΑΔ 2025 και ΦΠΑ: Τι Αλλάζει",
  datePublished: "2026-04-25",
  author: { "@type": "Organization", name: "Ομάδα kad2025.gr" },
  inLanguage: "el-GR",
};

export default function KadFpaPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}<Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}<span>ΚΑΔ και ΦΠΑ</span>
      </nav>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.5rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--text-muted)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <span>📅 25 Απριλίου 2026</span><span>·</span><span>✍️ Ομάδα kad2025.gr</span><span>·</span><span>⏱️ 6 λεπτά</span>
      </div>
      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        ΚΑΔ 2025 και ΦΠΑ: Τι Αλλάζει το 2026 για Επιχειρήσεις
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
        Η αλλαγή ΚΑΔ δεν αφορά μόνο έναν αριθμό στα χαρτιά — σε ορισμένες περιπτώσεις, μπορεί να
        επηρεάσει τον συντελεστή ΦΠΑ που υποχρεούστε να χρεώνετε. Δείτε τι πρέπει να γνωρίζετε.
      </p>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "1rem", marginBottom: "1.5rem" }}>
        <strong style={{ color: "#92400e" }}>⚠️ Σημαντική επισήμανση:</strong>
        <p style={{ fontSize: "0.875rem", color: "#78350f", lineHeight: 1.7, margin: "0.5rem 0 0" }}>
          Το άρθρο αυτό είναι καθαρά ενημερωτικό. Οι κανόνες ΦΠΑ έχουν πολλές εξαιρέσεις και
          ιδιαιτερότητες. Για την ακριβή φορολογική αντιμετώπιση της δραστηριότητάς σας, απαραίτητη
          η συμβουλή λογιστή ή φοροτεχνικού.
        </p>
      </div>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Η σχέση ΚΑΔ και ΦΠΑ</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Στην Ελλάδα, ο συντελεστής ΦΠΑ δεν εξαρτάται άμεσα από τον ΚΑΔ — εξαρτάται από το
          <strong> είδος του αγαθού ή της υπηρεσίας</strong> που παρέχεται. Ωστόσο, ο ΚΑΔ χρησιμεύει
          ως έμμεσος δείκτης: ορίζει τη φύση της επιχειρηματικής δραστηριότητας, η οποία καθορίζει
          τον εφαρμοστέο συντελεστή.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Συνεπώς, αν ο νέος ΚΑΔ 2025 περιγράφει διαφορετική δραστηριότητα από την πραγματική σας,
          μπορεί να εφαρμόζεται λανθασμένος συντελεστής ΦΠΑ — χωρίς να το αντιληφθείτε άμεσα.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Αυτό έχει πρακτικές συνέπειες: αν η ΑΑΔΕ εντοπίσει ασυμφωνία μεταξύ ΚΑΔ, τιμολογίων
          και δηλωμένου ΦΠΑ, μπορεί να υπάρχουν φορολογικές επιπλοκές. Γι' αυτό η ορθότητα του
          ΚΑΔ είναι σημαντική και για φορολογικούς σκοπούς.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Οι τρεις βασικοί συντελεστές ΦΠΑ</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
          {[
            { rate: "24%", label: "Κανονικός", desc: "Γενική εφαρμογή — εμπόριο, βιομηχανία, τεχνολογία, διαφήμιση, μηχανικοί", color: "#dc2626" },
            { rate: "13%", label: "Μειωμένος", desc: "Τρόφιμα, εστίαση, ξενοδοχεία, αγροτικά προϊόντα, θεατρικά εισιτήρια", color: "#d97706" },
            { rate: "6%", label: "Υπερμειωμένος", desc: "Φαρμακευτικά προϊόντα, βιβλία, ορισμένες κατηγορίες ιατρικού εξοπλισμού", color: "#059669" },
          ].map((s) => (
            <div key={s.rate} style={{ padding: "0.75rem", background: "var(--bg)", border: `2px solid ${s.color}`, borderRadius: 10, textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: s.color }}>{s.rate}</div>
              <div style={{ fontWeight: 700, fontSize: "0.8rem", marginBottom: "0.25rem" }}>{s.label}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
          Υπάρχει επίσης απαλλαγή ΦΠΑ (0%) για ορισμένες δραστηριότητες: εκπαίδευση, ιατρικές
          υπηρεσίες, ασφαλιστικές εργασίες, ορισμένες χρηματοπιστωτικές υπηρεσίες.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Κλάδοι με αυξημένο κίνδυνο λανθασμένου ΦΠΑ λόγω ΚΑΔ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { kl: "Εστίαση (ΚΑΔ 56xx)", issue: "Η μεταβολή ΚΑΔ σε πιο εξειδικευμένη κατηγορία δεν αλλάζει τον συντελεστή (13%), αλλά πρέπει να εξακριβωθεί ότι ο νέος κωδικός αντικατοπτρίζει πλήρως το αντικείμενο." },
            { kl: "Τρόφιμα και αγροδιατροφή (ΚΑΔ 01, 10xx)", issue: "Τα αγροτικά προϊόντα και τρόφιμα έχουν διαφορετικούς συντελεστές ανάλογα με το στάδιο επεξεργασίας. Μια λανθασμένη αντιστοίχιση μπορεί να δημιουργήσει σύγχυση στη φορολογική αντιμετώπιση." },
            { kl: "Υγεία και Ιατρικές Υπηρεσίες (ΚΑΔ 86xx)", issue: "Οι ιατρικές υπηρεσίες είναι ΦΠΑ-απαλλαγμένες, αλλά παραϊατρικές ή αισθητικές υπηρεσίες μπορεί να υπόκεινται σε ΦΠΑ 24%. Λανθασμένος ΚΑΔ μπορεί να επηρεάσει αυτή τη διάκριση." },
            { kl: "Εκπαίδευση (ΚΑΔ 85xx)", issue: "Επίσης ΦΠΑ-απαλλαγμένη κατηγορία. Αν ο νέος ΚΑΔ 2025 παρεκτραπεί σε άλλη κατηγορία (π.χ. εκδηλώσεις ή ψυχαγωγία), μπορεί να επέλθει υποχρέωση ΦΠΑ." },
            { kl: "Ψηφιακές Υπηρεσίες (ΚΑΔ 62-63)", issue: "Κανονικός 24%. Η εξειδίκευση στο νέο NACE Rev.2.1 δεν αλλάζει συντελεστή, αλλά επηρεάζει πώς αντιμετωπίζεται ο τόπος παροχής (ιδιαίτερα σε διασυνοριακές συναλλαγές εντός ΕΕ)." },
          ].map((item) => (
            <div key={item.kl} style={{ padding: "0.65rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", borderRadius: 8 }}>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.2rem" }}>{item.kl}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.issue}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι πρέπει να κάνετε;</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            "Ελέγξτε τον τρέχοντα ΚΑΔ 2025 στο myAADE και βεβαιωθείτε ότι αντικατοπτρίζει την πραγματική σας δραστηριότητα",
            "Συζητήστε με τον λογιστή σας αν ο νέος ΚΑΔ μπορεί να επηρεάζει τη φορολογική αντιμετώπισή σας",
            "Αν υπάρχει αμφιβολία, διορθώστε τον ΚΑΔ έως 1/6/2026 χωρίς πρόστιμο",
            "Για νέες επιχειρήσεις: επιλέξτε τον ΚΑΔ με προσοχή, καθώς ορίζει και τη φορολογική σας κατηγορία",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.875rem", padding: "0.45rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 6 }}>
              <span style={{ color: "var(--success)", fontWeight: 700, flexShrink: 0 }}>☑</span>
              <span style={{ lineHeight: 1.6, color: "var(--text-muted)" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/antistoixisi" className="btn btn-primary">🔄 Ελέγξτε τον ΚΑΔ σας</Link>
        <Link href="/blog/pos-na-diorthoso-kad-myaade" className="btn btn-ghost">✏️ Πώς να διορθώσετε</Link>
      </div>
    </div>
  );
}
