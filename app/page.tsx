import type { Metadata } from "next";
import Link from "next/link";
import CountdownBanner from "@/components/CountdownBanner";
import PopularKad from "@/components/PopularKad";

export const metadata: Metadata = {
  title: "ΚΑΔ 2025 — Αντιστοίχιση & Αναζήτηση ΚΑΔ",
  description: "Βρείτε τον νέο ΚΑΔ 2025 άμεσα. Πλήρης αντιστοίχιση ΚΑΔ 2008→2025 βάσει ΑΑΔΕ Α.1004/2026. Εργαλεία, Excel εξαγωγή, AI εύρεση ΚΑΔ.",
  keywords: ["καδ", "καδ 2025", "καδ 2026", "νέοι καδ", "νέοι καδ 2025", "νέοι καδ 2026", "αντιστοίχιση καδ", "λίστα καδ", "ευρετήριο καδ", "καδ 2025 excel", "καδ 2026 excel", "καδ 2025 ααδε", "καδ 2026 ααδε", "κωδικοί δραστηριότητας 2025"],
  alternates: { canonical: "https://www.kad2025.gr/" },
};

const tools = [
  { href: "/kad-2008", icon: "📋", title: "Αναζήτηση ΚΑΔ 2008", desc: "Αναζητήστε παλιούς κωδικούς δραστηριότητας", color: "#1e40af", badge: "Παλιοί ΚΑΔ", highlight: false },
  { href: "/kad-2025", icon: "🆕", title: "Αναζήτηση ΚΑΔ 2025", desc: "Νέοι κωδικοί που ισχύουν από 1/3/2026", color: "#166534", badge: "Νέοι ΚΑΔ", highlight: false },
  { href: "/antistoixisi", icon: "🔄", title: "Αντιστοίχιση ΚΑΔ 2008 → 2025", desc: "Βρείτε ποιος νέος ΚΑΔ 2025 αντικαθιστά τον παλιό σας", color: "#7c3aed", badge: "2008 → 2025", highlight: true },
  { href: "/antistoixisi-2025", icon: "🔄", title: "Αντιστοίχιση ΚΑΔ 2025 → 2008", desc: "Βρείτε ποιος παλιός ΚΑΔ 2008 αντιστοιχεί στον νέο", color: "#0891b2", badge: "2025 → 2008", highlight: true },
  { href: "/enarxi-epixeirisis-kad", icon: "🚀", title: "ΚΑΔ Έναρξης Επιχείρησης", desc: "Βρείτε τον ΚΑΔ που πρέπει να δηλώσετε στην εφορία για νέα επιχείρηση", color: "#059669", badge: "Νέα Επιχείρηση", highlight: false },
  { href: "/maziki-2008", icon: "📦", title: "Μαζική Αντιστοίχιση 2008 → 2025", desc: "Λίστα παλιών ΚΑΔ → ομαδική αντιστοίχιση σε Excel & CSV", color: "#b45309", badge: "Για Λογιστές", highlight: false },
  { href: "/maziki-2025", icon: "📦", title: "Μαζική Αντιστοίχιση 2025 → 2008", desc: "Λίστα νέων ΚΑΔ → εύρεση παλιών κωδικών σε Excel & CSV", color: "#b45309", badge: "Για Λογιστές", highlight: false },
  { href: "/ai-suggester", icon: "✨", title: "AI Βοηθός ΚΑΔ", desc: "Περιγράψτε τη δραστηριότητά σας και το AI σας προτείνει τον σωστό ΚΑΔ", color: "#7c3aed", badge: "AI", highlight: true },
  { href: "/wizard", icon: "🧭", title: "Wizard — Βρες τον ΚΑΔ σου", desc: "3 εύκολα βήματα για να βρείτε τον κατάλληλο ΚΑΔ για νέα επιχείρηση", color: "#059669", badge: "Οδηγός", highlight: false },
  { href: "/sygkrisi", icon: "⚖️", title: "Σύγκριση ΚΑΔ", desc: "Συγκρίνετε δύο ΚΑΔ δίπλα-δίπλα για να δείτε τις διαφορές τους", color: "#0891b2", badge: "Εργαλείο", highlight: false },
  { href: "/kad-epidotisi-espa", icon: "💰", title: "Επιλεξιμότητα Επιδοτήσεων", desc: "Ελέγξτε αν ο ΚΑΔ σας είναι επιλέξιμος σε Αναπτυξιακό Νόμο & ΕΣΠΑ", color: "#dc2626", badge: "Επιδοτήσεις", highlight: false },
];

const stats = [
  { label: "Εγγραφές Αντιστοίχισης", value: "10.923", icon: "📊" },
  { label: "Μοναδικοί ΚΑΔ 2008", value: "9.717", icon: "📂" },
  { label: "Μοναδικοί ΚΑΔ 2025", value: "9.422", icon: "🆕" },
  { label: "Αλλαγμένοι ΚΑΔ", value: "7.240", icon: "🔄" },
];

const faqs = [
  { q: "Πώς βρίσκω τον νέο ΚΑΔ 2025 της επιχείρησής μου;", a: "Χρησιμοποιήστε το εργαλείο αντιστοίχισης: πληκτρολογήστε τον παλιό ΚΑΔ 2008 και λαμβάνετε άμεσα τον νέο ΚΑΔ 2025. Έχετε έως 1/6/2026 να διορθώσετε τυχόν λάθη χωρίς πρόστιμο." },
  { q: "Πώς αλλάζω τον ΚΑΔ μου;", a: "Μέσω της εφαρμογής «Μεταβολή Εργασιών» στο myaade.gov.gr. Αν δεν μπορεί να ολοκληρωθεί ψηφιακά, υποβάλλετε αίτηση μέσω «Τα Αιτήματά μου» με έντυπο Δ211." },
  { q: "Τι γίνεται αν δεν αλλάξω ΚΑΔ;", a: "Η ΑΑΔΕ ολοκλήρωσε αυτόματη αντιστοίχιση στις 9 Μαρτίου 2026. Αν δεν συμφωνείτε με το αποτέλεσμα, διορθώστε έως 1/6/2026 χωρίς πρόστιμο." },
  { q: "Γιατί αλλάζουν οι ΚΑΔ;", a: "Εναρμόνιση με το ευρωπαϊκό πρότυπο NACE Rev.2.1 που ισχύει σε όλη την ΕΕ, σύμφωνα με τις αποφάσεις ΑΑΔΕ Α.1003/2026 & Α.1004/2026." },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)", color: "white", padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", padding: "0.3rem 0.9rem", borderRadius: 20, fontSize: "0.85rem", fontWeight: 600, marginBottom: "1rem", border: "1px solid rgba(255,255,255,0.3)" }}>
            📅 Επίσημα δεδομένα ΑΑΔΕ — Α.1003/2026 & Α.1004/2026
          </div>
          <h1 style={{ color: "white", marginBottom: "1rem" }}>
            Αντιστοίχιση & Αναζήτηση <span style={{ color: "#f5c842" }}>ΚΑΔ 2025</span>
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem", lineHeight: 1.7 }}>
            Πλήρες ευρετήριο & λίστα ΚΑΔ 2025 (νέοι ΚΑΔ 2026 ΑΑΔΕ) — Αντιστοίχιση ΚΑΔ και προς τις δύο κατευθύνσεις — Εξαγωγή σε Excel & CSV
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/antistoixisi" style={{ background: "#f5c842", color: "#1a1a1a", padding: "0.9rem 2rem", borderRadius: 10, fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
              🔄 ΚΑΔ 2008 → 2025
            </Link>
            <Link href="/antistoixisi-2025" style={{ background: "rgba(255,255,255,0.15)", color: "white", padding: "0.9rem 2rem", borderRadius: 10, fontWeight: 600, fontSize: "1rem", textDecoration: "none", border: "1px solid rgba(255,255,255,0.4)" }}>
              🔄 ΚΑΔ 2025 → 2008
            </Link>
          </div>
          {/* Secondary CTA for accountants */}
          <div style={{ marginTop: "1rem" }}>
            <Link href="/maziki-2008" style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", textDecoration: "none", fontWeight: 500 }}>
              👨‍💼 Λογιστής; Αντιστοίχισε πολλούς ΚΑΔ ταυτόχρονα → <span style={{ textDecoration: "underline" }}>Μαζική Αντιστοίχιση</span>
            </Link>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Tools FIRST */}
        <h2 style={{ marginBottom: "1rem" }}>Εργαλεία Αναζήτησης & Αντιστοίχισης</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
          {tools.map((t) => (
            <Link key={t.href} href={t.href} className="tool-card" style={{ borderTop: `3px solid ${t.color}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.8rem" }}>{t.icon}</span>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.5rem", borderRadius: 20, background: t.color + "20", color: t.color, border: `1px solid ${t.color}40` }}>{t.badge}</span>
              </div>
              <h3 style={{ color: "var(--text)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>{t.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{t.desc}</p>
            </Link>
          ))}
        </div>

        {/* Stats SECOND */}
        <h2 style={{ marginBottom: "1rem" }}>Στατιστικά Αντιστοίχισης</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
          {stats.map((s) => (
            <div key={s.label} className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>{s.icon}</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--primary)", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Popular KAD */}
        <PopularKad />

        {/* FAQ */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>Συχνές Ερωτήσεις για τους ΚΑΔ 2025</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 style={{ color: "var(--primary)", marginBottom: "0.4rem", fontSize: "1rem" }}>❓ {faq.q}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.9rem" }}>{faq.a}</p>
                {i < faqs.length - 1 && <hr style={{ marginTop: "1.25rem", borderColor: "var(--border)" }} />}
              </div>
            ))}
          </div>
        </div>

        {/* Email Capture */}
        <div style={{ marginBottom: "2rem" }}>
        </div>

        {/* Countdown + Urgency */}
        <CountdownBanner />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />


      {/* === EDITORIAL SECTIONS === */}

      {/* What is KAD 2025 */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
          <div className="card" style={{ borderLeft: "4px solid var(--primary)" }}>
            <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι είναι οι ΚΑΔ 2025</h2>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "0.75rem" }}>
              Οι <strong>ΚΑΔ 2025</strong> (Κωδικοί Αριθμών Δραστηριότητας) είναι το νέο σύστημα ταξινόμησης
              επαγγελματικών δραστηριοτήτων που ισχύει από <strong>1η Μαρτίου 2026</strong>, σε εναρμόνιση
              με το ευρωπαϊκό πρότυπο NACE Rev.2.1. Αντικαθιστά το παλιό σύστημα ΚΑΔ 2008.
            </p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
              Κάθε επιχείρηση και ελεύθερος επαγγελματίας στην Ελλάδα υποχρεούται να διαθέτει
              έναν ή περισσότερους ΚΑΔ που περιγράφουν τη δραστηριότητά της.
            </p>
            <Link href="/ti-einai-kad" style={{ color: "var(--primary)", fontSize: "0.85rem", fontWeight: 600 }}>
              Μάθετε περισσότερα →
            </Link>
          </div>
          <div className="card" style={{ borderLeft: "4px solid var(--success)" }}>
            <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τα δεδομένα μας</h2>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "0.75rem" }}>
              Όλα τα δεδομένα αντιστοίχισης προέρχονται <strong>αποκλειστικά</strong> από τις επίσημες
              αποφάσεις ΑΑΔΕ <strong>Α.1003/2026</strong> (νέοι ΚΑΔ 2025) και <strong>Α.1004/2026</strong>{" "}
              (πίνακας αντιστοίχισης). Δεν χρησιμοποιούμε ανεπίσημες πηγές.
            </p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
              Το kad2025.gr είναι <strong>ανεξάρτητο ενημερωτικό εργαλείο</strong> — δεν συνδέεται
              με την ΑΑΔΕ ή άλλη κυβερνητική αρχή.
            </p>
            <Link href="/sources" style={{ color: "var(--primary)", fontSize: "0.85rem", fontWeight: 600 }}>
              Δείτε τις πηγές →
            </Link>
          </div>
        </div>
      </section>

      {/* Guides section */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 1rem 2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>📚 Οδηγοί & Άρθρα</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.75rem", marginBottom: "0.75rem" }}>
          {[
            { href: "/blog/syxna-lathi-antistoixisis", title: "5 Συχνά Λάθη στην Αντιστοίχιση ΚΑΔ", tag: "Για όλους" },
            { href: "/blog/kad-kai-logistes", title: "Οδηγός ΚΑΔ 2025 για Λογιστές", tag: "Λογιστές" },
            { href: "/blog/kad-gia-nea-epixeirisi", title: "ΚΑΔ για Νέα Επιχείρηση 2026", tag: "Νέες Επιχειρήσεις" },
            { href: "/blog/kad-kai-epidotiseis", title: "ΚΑΔ και ΕΣΠΑ: Τι να Προσέξετε", tag: "ΕΣΠΑ" },
            { href: "/blog/kad-2008-vs-2025", title: "ΚΑΔ 2008 vs 2025: Τι Άλλαξε", tag: "Ανάλυση" },
            { href: "/blog/pos-na-vro-ton-sosto-kad", title: "Πώς να Βρείτε τον Σωστό ΚΑΔ", tag: "Οδηγός" },
          ].map((article) => (
            <Link key={article.href} href={article.href} style={{ textDecoration: "none" }}>
              <div style={{ padding: "0.75rem 1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--primary)", background: "var(--bg)", padding: "0.1rem 0.4rem", borderRadius: 10, border: "1px solid var(--border)", marginBottom: "0.3rem", display: "inline-block" }}>
                  {article.tag}
                </span>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)", lineHeight: 1.4 }}>
                  {article.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/blog" style={{ color: "var(--primary)", fontSize: "0.875rem", fontWeight: 600 }}>
          Δείτε όλους τους οδηγούς →
        </Link>
      </section>

      {/* Trust/disclaimer */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 1rem 2rem" }}>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1rem 1.25rem", fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
          <strong>ℹ️ Σχετικά με το kad2025.gr:</strong> Ανεξάρτητο ενημερωτικό εργαλείο αντιστοίχισης ΚΑΔ.
          Δεν αποτελεί επίσημο ιστότοπο ΑΑΔΕ ή δημόσιας αρχής. Τα δεδομένα βασίζονται στις δημόσιες
          αποφάσεις Α.1003/2026 & Α.1004/2026 και παρέχονται για διευκόλυνση αναζήτησης.
          Για οριστικές ενέργειες ελέγξτε το{" "}
          <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>
            myaade.gov.gr
          </a>.{" "}
          <Link href="/about" style={{ color: "var(--primary)" }}>Σχετικά με εμάς</Link> ·{" "}
          <Link href="/methodology" style={{ color: "var(--primary)" }}>Μεθοδολογία</Link> ·{" "}
          <Link href="/sources" style={{ color: "var(--primary)" }}>Πηγές</Link>
        </div>
      </section>
      {/* Hub links - replacing keyword stuffing with genuine navigation */}
      <section style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", padding: "2rem 1rem", marginTop: "2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>
            Εξερευνήστε τους ΚΑΔ 2025
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
            {[
              { href: "/klados/56", label: "🍽️ ΚΑΔ Εστίασης", desc: "Εστιατόρια, καφέ, ταβέρνες" },
              { href: "/klados/55", label: "🏨 ΚΑΔ Τουρισμού", desc: "Ξενοδοχεία, καταλύματα" },
              { href: "/klados/62", label: "💻 ΚΑΔ Πληροφορικής", desc: "IT, software, τεχνολογία" },
              { href: "/klados/47", label: "🛒 ΚΑΔ Εμπορίου", desc: "Λιανική, καταστήματα" },
              { href: "/klados/69", label: "⚖️ ΚΑΔ Λογιστών", desc: "Λογιστές, δικηγόροι" },
              { href: "/kad-epidotisi-espa", label: "💶 ΚΑΔ για ΕΣΠΑ", desc: "Επιλεξιμότητα επιδοτήσεων" },
              { href: "/kad-dypa", label: "👷 ΚΑΔ για ΔΥΠΑ", desc: "Επιδοτούμενη απασχόληση" },
              { href: "/klados", label: "📂 Όλοι οι Κλάδοι", desc: "Πλήρης κατηγοριοποίηση" },
            ].map((item) => (
              <a key={item.href} href={item.href} style={{ display: "block", padding: "0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, textDecoration: "none", transition: "border-color 0.2s" }}>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--primary)", marginBottom: "0.2rem" }}>{item.label}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{item.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
