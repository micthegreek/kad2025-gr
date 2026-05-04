import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Νέα Ψηφιακή Βεβαίωση ΚΑΔ 2025 — Ειδικές Κατηγορίες & Υπαίθριο Εμπόριο",
  description:
    "Η ΑΑΔΕ εξέδωσε ψηφιακή βεβαίωση αντιστοίχισης ΚΑΔ (Α.1004/2026 & Α.1090/2026). Ειδικές κατηγορίες για υπαίθριο εμπόριο και e-shop. Τι πρέπει να γνωρίζετε σήμερα.",
  alternates: { canonical: "https://www.kad2025.gr/blog/psifiaki-vevaiosi-kad-2025" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Νέα Ψηφιακή Βεβαίωση ΚΑΔ 2025 — ΑΑΔΕ Δελτίο Τύπου 27/04/2026",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: { "@type": "Organization", name: "Ομάδα kad2025.gr", url: "https://www.kad2025.gr" },
  publisher: { "@type": "Organization", name: "kad2025.gr" },
  inLanguage: "el-GR",
  about: [
    { "@type": "Thing", name: "ΚΑΔ 2025" },
    { "@type": "Thing", name: "ΑΑΔΕ ψηφιακή βεβαίωση" },
  ],
};

export default function PsifiaikiVevaiosiPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}
        <span>Ψηφιακή Βεβαίωση ΚΑΔ</span>
      </nav>

      {/* Breaking news badge */}
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.72rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: 20, background: "#dc2626", color: "white" }}>🔴 ΝΕΟ</span>
        <span style={{ fontSize: "0.72rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: 20, background: "#1d4ed8", color: "white" }}>Δελτίο Τύπου ΑΑΔΕ</span>
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>📅 27 Απριλίου 2026</span>
      </div>

      <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.3 }}>
        Νέα Ψηφιακή Βεβαίωση ΚΑΔ 2025 από την ΑΑΔΕ — Ειδικές Κατηγορίες για Υπαίθριο Εμπόριο και E-Shop
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem", borderLeft: "3px solid #dc2626", paddingLeft: "1rem" }}>
        Η ΑΑΔΕ εξέδωσε σήμερα (27/4/2026) επίσημο Δελτίο Τύπου με σημαντικές εξελίξεις για τη μετάβαση
        στους νέους ΚΑΔ 2025. Νέα ψηφιακή βεβαίωση, ειδικές κατηγορίες για υπαίθριο εμπόριο και e-shop,
        και ανοιχτή η πόρτα για παράταση προθεσμίας.
      </p>

      {/* Key info boxes */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", marginBottom: "2rem" }}>
        {[
          { label: "ΑΦΜ με 1→1 αντιστοίχιση", value: "1.400.000", color: "#059669", note: "Καμία ενέργεια απαιτείται" },
          { label: "ΑΦΜ με 1→πολλά (one-to-many)", value: "510.000", color: "#dc2626", note: "Χρειάζεται έλεγχος" },
          { label: "Προθεσμία (προς το παρόν)", value: "1/6/2026", color: "#d97706", note: "Πιθανή παράταση" },
        ].map(s => (
          <div key={s.label} style={{ padding: "0.875rem 1rem", background: "var(--bg-card)", border: `2px solid ${s.color}`, borderRadius: 10, textAlign: "center" }}>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: "0.78rem", fontWeight: 600, marginTop: "0.2rem" }}>{s.label}</div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{s.note}</div>
          </div>
        ))}
      </div>

      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid #1d4ed8" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Νέα Ψηφιακή Βεβαίωση Αντιστοίχισης ΚΑΔ</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Με απόφαση Διοικητή ΑΑΔΕ (<strong>Α.1004/2026 όπως τροποποιήθηκε με την Α.1090/2026</strong>),
          εκδίδεται πλέον <strong>ψηφιακή βεβαίωση</strong> που αποτυπώνει:
        </p>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 2, marginBottom: "0.75rem" }}>
          <li>Όλους τους ενεργούς κωδικούς της επιχείρησης την <strong>28/2/2026</strong></li>
          <li>Την αυτόματη αντιστοίχισή τους με τους νέους ΚΑΔ (ημερομηνία έναρξης <strong>1/3/2026</strong>)</li>
          <li>Σαφή διαχωρισμό <strong>κύριων και δευτερευουσών</strong> δραστηριοτήτων</li>
        </ul>
        <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "0.75rem 1rem", fontSize: "0.875rem" }}>
          <strong>✅ Πού βρίσκεται:</strong> myAADE → myBusinessSupport → Ψηφιακή Βεβαίωση ΚΑΔ<br />
          <strong>📋 Νομική ισχύς:</strong> Φέρει εγκεκριμένη ηλεκτρονική σφραγίδα και γίνεται
          υποχρεωτικά αποδεκτή για κάθε νόμιμη χρήση.
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Ειδικές Κατηγορίες: Υπαίθριο Εμπόριο & E-Shop</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Οι κατηγορίες υπαίθριου εμπορίου (<strong>47.8</strong>) και πωλήσεων μέσω διαδικτύου
          (<strong>47.91</strong>) <strong>αναδιαρθρώθηκαν πλήρως</strong> στο νέο σύστημα.
          Αυτό σημαίνει ότι επιχειρήσεις σε αυτές τις κατηγορίες θα δουν ειδική ένδειξη
          <strong> «Υπαίθρια»</strong> ή <strong>«e-shop»</strong> στο Μητρώο τους.
        </p>
        <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: 8, padding: "0.75rem 1rem", fontSize: "0.875rem", color: "#92400e" }}>
          <strong>⏰ Προσοχή:</strong> Μέχρι την <strong>Τρίτη 28/4/2026</strong> θα ολοκληρωθεί
          η εμφάνιση στη εικόνα Μητρώου της νέας τιμής τρόπου άσκησης δραστηριότητας
          για τις επιχειρήσεις αυτής της κατηγορίας. Αναμένετε ενημέρωση στη θυρίδα σας.
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πιθανή Παράταση Προθεσμίας</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Σημαντική εξέλιξη: η ΑΑΔΕ δήλωσε ρητά ότι <strong>παρακολουθεί την πορεία προσαρμογής</strong>{" "}
          των επιχειρήσεων και ότι <strong>εφόσον απαιτηθεί, θα δώσει επιπλέον χρόνο</strong> για
          τον έλεγχο της αυτόματης μετάπτωσης.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Αυτό σημαίνει ότι η προθεσμία της <strong>1ης Ιουνίου 2026</strong> ενδέχεται να παραταθεί.
          Ωστόσο, συνιστούμε να <strong>μην υπολογίζετε σε παράταση</strong> και να ελέγξετε τον ΚΑΔ
          σας έγκαιρα.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Η Μεθοδολογία της Αντιστοίχισης — Τι Αποκαλύπτει η ΑΑΔΕ</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Το Δελτίο Τύπου επιβεβαιώνει τη μεθοδολογία που ακολούθησε η ΑΑΔΕ:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            {
              icon: "✅",
              title: "1.400.000 ΑΦΜ — Άμεση αντιστοίχιση (1→1)",
              desc: "Ένας παλιός ΚΑΔ → ένας νέος ΚΑΔ. Η αντιστοίχιση έγινε αυτόματα χωρίς να απαιτείται καμία ενέργεια από την επιχείρηση.",
              color: "#059669",
            },
            {
              icon: "⚠️",
              title: "510.000 ΑΦΜ — Πολλαπλή αντιστοίχιση (1→πολλά)",
              desc: "Ένας παλιός ΚΑΔ αντιστοιχεί σε πολλούς νέους. Η ΑΑΔΕ επέλεξε αυτόματα έναν κύριο ΚΑΔ και κατέταξε τους υπόλοιπους ως δευτερεύοντες. Αυτές οι επιχειρήσεις χρειάζονται έλεγχο.",
              color: "#dc2626",
            },
          ].map(item => (
            <div key={item.title} style={{ display: "flex", gap: "0.75rem", padding: "0.75rem", background: "var(--bg)", border: `1px solid ${item.color}`, borderRadius: 8 }}>
              <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem", color: item.color }}>{item.title}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Πού να Απευθυνθείτε</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
          {[
            { icon: "💻", title: "myBusinessSupport", desc: "Ψηφιακή Βεβαίωση ΚΑΔ — 24/7", href: "https://myaade.gov.gr" },
            { icon: "📞", title: "Τηλεφωνικά: 1521", desc: "Δευτ–Παρ 07:00–20:00, χωρίς χρέωση", href: "tel:1521" },
            { icon: "🌐", title: "my1521 (ψηφιακά)", desc: "Θέματα Μητρώου → Μεταβολή ΚΑΔ", href: "https://myaade.gov.gr" },
          ].map(c => (
            <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer"
              style={{ padding: "0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, textDecoration: "none", color: "inherit" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>{c.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--primary)", marginBottom: "0.2rem" }}>{c.title}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{c.desc}</div>
            </a>
          ))}
        </div>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <Link href="/antistoixisi" className="btn btn-primary">🔍 Ελέγξτε τον ΚΑΔ σας</Link>
        <Link href="/pollapli-antistoixisi-kad" className="btn btn-ghost">🔀 Πολλαπλή Αντιστοίχιση</Link>
        <Link href="/diorthosi-kad-2025" className="btn btn-ghost">✏️ Πώς να Διορθώσετε</Link>
      </div>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "#78350f" }}>
        ⚠️ Πηγή: Επίσημο Δελτίο Τύπου ΑΑΔΕ, 27/4/2026. Το kad2025.gr είναι ανεξάρτητο ενημερωτικό εργαλείο
        — δεν αποτελεί επίσημο ιστότοπο ΑΑΔΕ. Για επίσημες ενέργειες:{" "}
        <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 600 }}>myaade.gov.gr</a>.
      </div>
    </div>
  );
}
