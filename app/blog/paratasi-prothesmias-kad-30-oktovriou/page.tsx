import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Παράταση Προθεσμίας ΚΑΔ: Έως 30 Οκτωβρίου 2026",
  description:
    "Νέα απόφαση ΑΑΔΕ Α.1113/2026: η προθεσμία για την επικαιροποίηση των ΚΑΔ 2025 παρατείνεται έως 30 Οκτωβρίου 2026. Τι ισχύει, ποιους αφορά και πώς να κάνετε τη μεταβολή.",
  alternates: { canonical: "https://www.kad2025.gr/blog/paratasi-prothesmias-kad-30-oktovriou" },
  openGraph: {
    title: "Παράταση ΚΑΔ: Νέα Προθεσμία 30 Οκτωβρίου 2026",
    description: "Με απόφαση Α.1113/2026, η ΑΑΔΕ παρατείνει την προθεσμία επικαιροποίησης ΚΑΔ 2025 έως 30/10/2026 χωρίς πρόστιμο.",
    images: [{ url: "https://www.kad2025.gr/blog-paratasi-kad-2026.svg", width: 1200, height: 630 }],
    type: "article",
    publishedTime: "2026-06-04",
    locale: "el_GR",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Παράταση Προθεσμίας ΚΑΔ: Έως 30 Οκτωβρίου 2026",
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
  description: "Νέα απόφαση ΑΑΔΕ Α.1113/2026 παρατείνει την προθεσμία επικαιροποίησης ΚΑΔ 2025 από 1η Ιουνίου στις 30 Οκτωβρίου 2026.",
  author: { "@type": "Organization", name: "kad2025.gr" },
  publisher: { "@type": "Organization", name: "kad2025.gr", url: "https://www.kad2025.gr" },
  image: "https://www.kad2025.gr/blog-paratasi-kad-2026.svg",
  inLanguage: "el-GR",
  about: { "@type": "Thing", name: "ΚΑΔ 2025 Επικαιροποίηση" },
};

export default function ParatasiProthesmiaPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none" }}>Οδηγοί</Link>
        {" → "}
        <span>Παράταση Προθεσμίας ΚΑΔ</span>
      </nav>

      {/* Meta info */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1.5rem", alignItems: "center" }}>
        <span>📅 4 Ιουνίου 2026</span>
        <span>·</span>
        <span>✍️ kad2025.gr</span>
        <span>·</span>
        <span>⏱️ 5 λεπτά</span>
        <span>·</span>
        <span style={{ background: "#22c55e", color: "#fff", padding: "0.1rem 0.5rem", borderRadius: 10, fontWeight: 700 }}>🔴 Επείγον</span>
      </div>

      <h1 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", lineHeight: 1.25, marginBottom: "1rem" }}>
        Παράταση Προθεσμίας Επικαιροποίησης ΚΑΔ: Νέα Ημερομηνία 30 Οκτωβρίου 2026
      </h1>

      {/* Hero image */}
      <div style={{ marginBottom: "1.75rem", borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)" }}>
        <img
          src="/blog-paratasi-kad-2026.svg"
          alt="Παράταση προθεσμίας επικαιροποίησης ΚΑΔ 2025 έως 30 Οκτωβρίου 2026 — ΑΑΔΕ Α.1113/2026"
          style={{ width: "100%", display: "block" }}
        />
      </div>

      {/* Summary box */}
      <div style={{ background: "var(--success-bg)", border: "2px solid #22c55e", borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: "1.3rem" }}>✅</span>
          <strong style={{ color: "#15803d", fontSize: "1.05rem" }}>Σε μία γραμμή</strong>
        </div>
        <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.7, color: "var(--success-strong)" }}>
          Με νέα απόφαση του Διοικητή ΑΑΔΕ (<strong>Α.1113/2026</strong>), η προθεσμία για την επισκόπηση
          και επικαιροποίηση των ΚΑΔ 2025 μετατίθεται από την <s>1η Ιουνίου</s> στις{" "}
          <strong>30 Οκτωβρίου 2026</strong> — χωρίς πρόστιμο.
        </p>
      </div>

      {/* Section 1 */}
      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>Τι ακριβώς αποφάσισε η ΑΑΔΕ</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η απόφαση <strong>Α.1113/2026</strong> του Διοικητή της Ανεξάρτητης Αρχής Δημοσίων Εσόδων
          εκδόθηκε στα τέλη Μαΐου 2026 και τροποποιεί την αρχική προθεσμία που είχε τεθεί με
          την εγκύκλιο για τους νέους ΚΑΔ 2025.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Συγκεκριμένα, κάθε επιχείρηση που έχει λάβει νέο ΚΑΔ 2025 μέσω της αυτόματης αντιστοίχισης
          της 9ης Μαρτίου 2026 μπορεί πλέον να ελέγξει και να διορθώσει τον ΚΑΔ της έως και{" "}
          <strong>30 Οκτωβρίου 2026</strong>, χωρίς την επιβολή οποιουδήποτε προστίμου εκπρόθεσμης
          μεταβολής.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Η μετάθεση της ημερομηνίας αναγνωρίζει την πολυπλοκότητα της διαδικασίας ελέγχου και
          διόρθωσης — ιδίως για λογιστές και φοροτεχνικούς που διαχειρίζονται μεγάλο αριθμό
          πελατών.
        </p>
      </section>

      {/* Section 2 */}
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>Ποιους αφορά η παράταση</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { icon: "🏢", title: "Επιχειρήσεις που δεν έχουν ελέγξει ακόμα τον ΚΑΔ τους", desc: "Αν δεν έχετε συνδεθεί στο myAADE για να δείτε τον νέο ΚΑΔ 2025 που σας αποδόθηκε, έχετε ακόμα χρόνο έως 30 Οκτωβρίου." },
            { icon: "⚠️", title: "Επιχειρήσεις με λανθασμένο ΚΑΔ από την αυτόματη αντιστοίχιση", desc: "Η αυτόματη διαδικασία δεν ήταν πάντα ακριβής. Αν ο νέος ΚΑΔ δεν αντικατοπτρίζει τη δραστηριότητά σας, διορθώστε τον εντός της προθεσμίας." },
            { icon: "👨‍💼", title: "Λογιστές και φοροτεχνικοί", desc: "Έχετε περισσότερο χρόνο για συστηματικό έλεγχο όλων των πελατών σας. Χρησιμοποιήστε εργαλεία μαζικής αντιστοίχισης για να επιταχύνετε τη διαδικασία." },
            { icon: "🚀", title: "Νέες επιχειρήσεις που ξεκίνησαν μετά 1/3/2026", desc: "Αν ξεκινήσατε νέα επιχείρηση και δηλώσατε ΚΑΔ 2025 απευθείας, η παράταση δεν επηρεάζει εσάς — ο ΚΑΔ σας είναι ήδη στο νέο σύστημα." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "0.75rem", padding: "0.75rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 - Important condition */}
      <section className="card" style={{ marginBottom: "1.5rem", background: "#fef9c3", border: "1.5px solid #fbbf24" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--warn-strong)" }}>⚠️ Σημαντική προϋπόθεση</h2>
        <p style={{ lineHeight: 1.8, color: "var(--warn-text)", marginBottom: "0.75rem", fontSize: "0.95rem" }}>
          Η δυνατότητα υποβολής δήλωσης μεταβολής χωρίς πρόστιμο ισχύει <strong>μόνο εφόσον δεν
          έχει ήδη υποβληθεί δήλωση μεταβολής ΚΑΔ για έδρα ή υποκατάστημα μετά την 1η Μαρτίου 2026</strong>.
        </p>
        <p style={{ lineHeight: 1.8, color: "var(--warn-text)", margin: 0, fontSize: "0.9rem" }}>
          Αν έχετε ήδη υποβάλει μεταβολή ΚΑΔ μετά τις 9 Μαρτίου 2026 (ημερομηνία αυτόματης
          αντιστοίχισης), η παράταση δεν σας αφορά για δεύτερη μεταβολή χωρίς πρόστιμο. Η
          επιπλέον διόρθωση θα επιβαρυνθεί με το κανονικό πρόστιμο εκπρόθεσμης μεταβολής.
        </p>
      </section>

      {/* Section 4 - How to */}
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.15rem", marginBottom: "1rem" }}>Πώς να κάνετε τη μεταβολή ΚΑΔ στο myAADE</h2>

        <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10, padding: "1rem 1.25rem", marginBottom: "1rem", fontFamily: "monospace", fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.9 }}>
          myaade.gov.gr<br/>
          → <strong>Μητρώο &amp; Επικοινωνία</strong><br/>
          → <strong>Αλλαγή Στοιχείων Μητρώου</strong><br/>
          → <strong>Στοιχεία Επιχείρησης</strong><br/>
          → <strong>Μεταβολή Στοιχείων Επιχείρησης και Στοιχεία Εγκατάστασης Εσωτερικού</strong><br/>
          → <strong>Αλλαγή Στοιχείων Εγκατάστασης Εσωτερικού</strong>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            "Συνδεθείτε στο myaade.gov.gr με τους κωδικούς TAXISnet",
            "Βρείτε και ελέγξτε πρώτα τον τρέχοντα ΚΑΔ σας (Μητρώο → Τρέχουσα Εικόνα Οντότητας)",
            "Συγκρίνετε τον νέο ΚΑΔ 2025 με αυτόν που αντικατοπτρίζει τη δραστηριότητά σας",
            "Αν υπάρχει διαφορά, ακολουθήστε τη διαδρομή παραπάνω για υποβολή μεταβολής",
            "Αποθηκεύστε τον αριθμό πρωτοκόλλου ως απόδειξη υποβολής",
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.5rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, fontSize: "0.875rem" }}>
              <span style={{ background: "var(--primary)", color: "white", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
              <span style={{ lineHeight: 1.6, color: "var(--text-muted)" }}>{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - Support */}
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Επικοινωνία με την ΑΑΔΕ για διευκρινίσεις</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
          <div style={{ padding: "1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10 }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>📞</div>
            <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>Τηλεφωνικά</div>
            <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              <strong>1521</strong> (χωρίς χρέωση)<br/>
              Δευτέρα – Παρασκευή<br/>
              7:00 – 20:00
            </div>
          </div>
          <div style={{ padding: "1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10 }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>💻</div>
            <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>Ψηφιακά — my1521</div>
            <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              <a href="https://webchannel.1521.aade.gr/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>webchannel.1521.aade.gr</a><br/>
              Διαθέσιμο 24/7<br/>
              Θέματα Μητρώου → Μεταβολή ΚΑΔ
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: "var(--info-bg)", border: "1.5px solid var(--info-border)", borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem", color: "var(--info-strong)" }}>🔍 Ελέγξτε τον ΚΑΔ σας πριν κάνετε μεταβολή</h3>
        <p style={{ fontSize: "0.875rem", color: "var(--info-text)", lineHeight: 1.7, marginBottom: "1rem" }}>
          Χρησιμοποιήστε τα εργαλεία του kad2025.gr για να βρείτε τον σωστό ΚΑΔ 2025
          που αντιστοιχεί στη δραστηριότητά σας, πριν υποβάλετε τη μεταβολή στο myAADE.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link href="/antistoixisi" className="btn btn-primary" style={{ fontSize: "0.875rem" }}>
            🔄 Αντιστοίχιση ΚΑΔ 2008→2025
          </Link>
          <Link href="/diorthosi-kad-2025" className="btn btn-ghost" style={{ fontSize: "0.875rem" }}>
            ✏️ Οδηγός Διόρθωσης
          </Link>
          <Link href="/lathos-antistoixisi" className="btn btn-ghost" style={{ fontSize: "0.875rem" }}>
            ⚠️ Λάθος Αντιστοίχιση
          </Link>
        </div>
      </div>

      <div style={{ background: "var(--warn-bg)", border: "1px solid var(--warn-border)", borderRadius: 8, padding: "0.75rem 1rem", fontSize: "0.82rem", color: "var(--warn-text)" }}>
        📋 <strong>Πηγή:</strong> Απόφαση Διοικητή ΑΑΔΕ Α.1113/2026 — Δελτίο Τύπου ΑΑΔΕ 29/5/2026.
        Το περιεχόμενο είναι ενημερωτικό. Για επίσημη ενημέρωση απευθυνθείτε στο myaade.gov.gr ή στο 1521.
      </div>
    </div>
  );
}
