import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Σχετικά με το kad2025.gr — Ποιοι Είμαστε & Πώς Λειτουργούμε",
  description:
    "Το kad2025.gr είναι ανεξάρτητο ενημερωτικό εργαλείο αντιστοίχισης ΚΑΔ 2008→2025 για επιχειρήσεις και λογιστές. Δεδομένα αποκλειστικά από επίσημες αποφάσεις ΑΑΔΕ.",
  alternates: { canonical: "https://www.kad2025.gr/about" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "kad2025.gr",
      url: "https://www.kad2025.gr",
      description:
        "Ανεξάρτητο ενημερωτικό εργαλείο αντιστοίχισης ΚΑΔ 2008→2025 βάσει επίσημων αποφάσεων ΑΑΔΕ",
      foundingDate: "2026",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@kad2025.gr",
        contactType: "customer support",
        availableLanguage: "Greek",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      name: "kad2025.gr",
      url: "https://www.kad2025.gr",
      description: "Εργαλείο αντιστοίχισης ΚΑΔ 2008→2025",
      publisher: {
        "@type": "Organization",
        name: "kad2025.gr",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
        { "@type": "ListItem", position: 2, name: "Σχετικά με εμάς", item: "https://www.kad2025.gr/about" },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <span>Σχετικά με εμάς</span>
      </nav>

      <h1 style={{ marginBottom: "0.4rem" }}>Σχετικά με το kad2025.gr</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>
        Τελευταία ενημέρωση: Απρίλιος 2026
      </p>

      {/* Mission statement */}
      <div
        style={{
          background: "linear-gradient(135deg, var(--primary-dark), var(--primary))",
          color: "white",
          borderRadius: "var(--radius)",
          padding: "1.75rem 2rem",
          marginBottom: "2rem",
          lineHeight: 1.7,
        }}
      >
        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "white" }}>
          Η αποστολή μας
        </h2>
        <p style={{ margin: 0, fontSize: "1rem" }}>
          Να κάνουμε την αλλαγή ΚΑΔ <strong>κατανοητή και προσβάσιμη</strong> για κάθε επιχείρηση
          και λογιστή στην Ελλάδα — δωρεάν, χωρίς γραφειοκρατία, με επίσημα δεδομένα.
        </p>
      </div>

      {/* What we are */}
      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Τι είναι το kad2025.gr</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
          Το <strong>kad2025.gr</strong> είναι ανεξάρτητο, <strong>μη κυβερνητικό ενημερωτικό εργαλείο</strong>{" "}
          που δημιουργήθηκε αποκλειστικά για να βοηθήσει τις ελληνικές επιχειρήσεις να πλοηγηθούν
          στην αλλαγή των Κωδικών Αριθμών Δραστηριότητας (ΚΑΔ) από το σύστημα ΚΑΔ 2008 στο νέο
          σύστημα ΚΑΔ 2025.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
          Η μετάβαση στο νέο σύστημα NACE Rev.2.1 αφορά <strong>1,9 εκατομμύρια επιχειρήσεις</strong>{" "}
          και ελεύθερους επαγγελματίες που δραστηριοποιούνται στην Ελλάδα. Το kad2025.gr παρέχει
          πλήρη αντιστοίχιση των <strong>10.923 κωδικών</strong> με εργαλεία αναζήτησης, μαζική
          επεξεργασία και ενημερωτικούς οδηγούς — όλα δωρεάν.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Απευθύνεται κυρίως σε <strong>λογιστές και φοροτεχνικούς</strong> που χειρίζονται
          δεκάδες ή εκατοντάδες πελάτες, αλλά και σε κάθε επιχειρηματία που θέλει να καταλάβει
          τι αλλάζει στην επιχείρησή του.
        </p>
      </section>

      {/* Editorial standards */}
      <section className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--success)" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          📋 Πρότυπα ακρίβειας & επαλήθευσης
        </h2>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
          Η ομάδα του kad2025.gr ακολουθεί αυστηρά πρότυπα για να διασφαλίσει την ακρίβεια
          των πληροφοριών που δημοσιεύουμε:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
          {[
            {
              icon: "🏛️",
              title: "Επίσημες πηγές μόνο",
              desc: "Όλα τα δεδομένα αντιστοίχισης προέρχονται αποκλειστικά από τις επίσημες αποφάσεις ΑΑΔΕ. Δεν χρησιμοποιούμε ανεπίσημες ή μη επαληθευμένες πηγές.",
            },
            {
              icon: "🔄",
              title: "Συνεχής ενημέρωση",
              desc: "Παρακολουθούμε τον Κυβερνητικό Ιστότοπο ΑΑΔΕ και τα ΦΕΚ για τυχόν τροποποιήσεις. Κάθε αλλαγή αντικατοπτρίζεται άμεσα στα δεδομένα μας.",
            },
            {
              icon: "⚠️",
              title: "Διαφάνεια ορίων",
              desc: "Το kad2025.gr είναι ενημερωτικό εργαλείο. Για επίσημες φορολογικές ενέργειες, συνιστούμε πάντα συνεργασία με εξειδικευμένο λογιστή.",
            },
            {
              icon: "✅",
              title: "Τεκμηριωμένο περιεχόμενο",
              desc: "Κάθε άρθρο και οδηγός παραπέμπει σε επίσημα κείμενα νόμου και αποφάσεις. Δεν δημοσιεύουμε απόψεις χωρίς επίσημη τεκμηρίωση.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "1rem",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
              <div style={{ fontWeight: 700, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{item.title}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Data sources */}
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>🏛️ Πηγές δεδομένων</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
          Τα δεδομένα αντιστοίχισης ΚΑΔ προέρχονται <strong>αποκλειστικά από επίσημες κυβερνητικές πηγές</strong>:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
          {[
            {
              code: "Α.1003/2026",
              desc: "Απόφαση ΑΑΔΕ — Νέοι ΚΑΔ 2025 βάσει NACE Rev.2.1",
              detail: "Ορίζει το πλήρες σύστημα ΚΑΔ 2025 με 10.923 κωδικούς σε εναρμόνιση με το ευρωπαϊκό πρότυπο NACE Rev.2.1.",
            },
            {
              code: "Α.1004/2026",
              desc: "Απόφαση ΑΑΔΕ — Πίνακας αντιστοίχισης ΚΑΔ 2008 → ΚΑΔ 2025",
              detail: "Περιέχει τον επίσημο πίνακα μετάβασης από το παλιό σύστημα ΚΑΔ 2008 (NACE Rev.2) στο νέο ΚΑΔ 2025. Βάση όλων των αντιστοιχίσεών μας.",
            },
            {
              code: "NACE Rev.2.1",
              desc: "Ευρωπαϊκό πρότυπο ταξινόμησης οικονομικών δραστηριοτήτων (Eurostat)",
              detail: "Το διεθνές πλαίσιο στο οποίο βασίζεται το νέο σύστημα ΚΑΔ 2025. Ισχύει σε όλα τα κράτη-μέλη της ΕΕ.",
            },
          ].map((src) => (
            <div
              key={src.code}
              style={{
                display: "flex",
                gap: "1rem",
                padding: "0.75rem 1rem",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--primary)",
                borderRadius: 8,
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--primary)", marginBottom: "0.2rem" }}>
                  {src.code}
                </div>
                <div style={{ fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.2rem" }}>{src.desc}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{src.detail}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
          <strong>Σημείωση:</strong> Το kad2025.gr δεν είναι κυβερνητικός ιστότοπος και δεν
          συνδέεται με την ΑΑΔΕ ή οποιαδήποτε κυβερνητική αρχή. Είναι ανεξάρτητο εργαλείο
          που χρησιμοποιεί δημόσια διαθέσιμα επίσημα δεδομένα.
        </p>
      </section>

      {/* Tools overview */}
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>🛠️ Τα εργαλεία μας</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
          Το kad2025.gr παρέχει σειρά από <strong>δωρεάν εργαλεία</strong> που καλύπτουν
          διαφορετικές ανάγκες — από τον μεμονωμένο επαγγελματία μέχρι το λογιστικό γραφείο
          με εκατοντάδες πελάτες:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {[
            { href: "/antistoixisi", icon: "🔍", title: "Αντιστοίχιση ΚΑΔ 2008 → 2025", desc: "Αναζητήστε οποιονδήποτε παλιό ΚΑΔ και βρείτε αμέσως τον νέο ΚΑΔ 2025. Υποστηρίζει αναζήτηση με κωδικό ή περιγραφή δραστηριότητας." },
            { href: "/maziki-2008", icon: "📦", title: "Μαζική Αντιστοίχιση (MazikiTool)", desc: "Ειδικά σχεδιασμένο για λογιστές. Επικολλήστε λίστα ΚΑΔ και λάβετε αμέσως όλες τις αντιστοιχίσεις σε Excel ή CSV." },
            { href: "/ai-suggester", icon: "✨", title: "AI Βοηθός ΚΑΔ", desc: "Περιγράψτε την επιχειρηματική δραστηριότητα σε απλά ελληνικά και το AI προτείνει τον πιο κατάλληλο ΚΑΔ 2025." },
            { href: "/wizard", icon: "🧭", title: "Βήμα-βήμα Οδηγός ΚΑΔ", desc: "3-βήμα διαδραστικός οδηγός για νέους επαγγελματίες που δεν ξέρουν από πού να ξεκινήσουν." },
            { href: "/sygkrisi", icon: "⚖️", title: "Σύγκριση ΚΑΔ", desc: "Συγκρίνετε δύο ΚΑΔ παράλληλα για να δείτε διαφορές στην περιγραφή και τον κλάδο." },
          ].map((tool) => (
            <Link key={tool.href} href={tool.href} style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  transition: "border-color 0.2s",
                }}
              >
                <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{tool.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--primary)", marginBottom: "0.2rem" }}>
                    {tool.title}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{tool.desc}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why we built this */}
      <section className="card" style={{ marginBottom: "1.5rem", background: "#eff6ff", border: "1px solid #bfdbfe" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "#1e40af" }}>
          💡 Γιατί δημιουργήσαμε το kad2025.gr
        </h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem", color: "#1e3a5f" }}>
          Όταν η ΑΑΔΕ ανακοίνωσε την αλλαγή ΚΑΔ τον Ιανουάριο του 2026, διαπιστώσαμε ότι
          δεν υπήρχε <strong>ευχρηστο, δωρεάν εργαλείο</strong> που να βοηθά επιχειρήσεις και
          λογιστές να κατανοήσουν τι αλλάζει για τον κάθε κωδικό.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem", color: "#1e3a5f" }}>
          Η επίσημη απόφαση Α.1004/2026 περιέχει <strong>χιλιάδες γραμμές δεδομένων</strong> σε
          μη φιλικό προς τον χρήστη μορφότυπο. Στόχος μας ήταν να μετατρέψουμε αυτά τα δεδομένα
          σε εύχρηστο εργαλείο αναζήτησης προσβάσιμο από οποιονδήποτε.
        </p>
        <p style={{ lineHeight: 1.8, color: "#1e3a5f" }}>
          Σήμερα, το kad2025.gr εξυπηρετεί <strong>χιλιάδες λογιστές και επιχειρήσεις</strong>{" "}
          σε όλη την Ελλάδα κάθε μήνα, παραμένοντας 100% δωρεάν.
        </p>
      </section>

      {/* Disclaimer */}
      <section
        style={{
          background: "#fef3c7",
          border: "1px solid #f59e0b",
          borderRadius: "var(--radius)",
          padding: "1rem 1.25rem",
          marginBottom: "1.5rem",
        }}
      >
        <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem", color: "#92400e" }}>
          ⚠️ Σημαντική αποποίηση ευθύνης
        </h2>
        <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#78350f", margin: 0 }}>
          Το kad2025.gr παρέχει πληροφορίες <strong>αποκλειστικά για ενημερωτικούς σκοπούς</strong>.
          Δεν αποτελεί νομική ή φορολογική συμβουλή. Για οποιαδήποτε επίσημη ενέργεια σχετικά
          με τον ΚΑΔ σας (αλλαγή, διόρθωση αντιστοίχισης, δήλωση έναρξης), παρακαλούμε
          επικοινωνήστε με <strong>εξουσιοδοτημένο λογιστή-φοροτεχνικό</strong> ή επισκεφθείτε
          απευθείας το{" "}
          <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 700 }}>
            myaade.gov.gr
          </a>.
        </p>
      </section>


      {/* Geographic location */}
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>📍 Έδρα & Νομικές Πληροφορίες</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem", lineHeight: 1.8 }}>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <span style={{ color: "var(--text-muted)", minWidth: 120 }}>Τοποθεσία:</span>
            <span><strong>Θεσσαλονίκη, Ελλάδα</strong></span>
          </div>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <span style={{ color: "var(--text-muted)", minWidth: 120 }}>Τύπος:</span>
            <span>Ανεξάρτητο ψηφιακό εργαλείο, φυσικό πρόσωπο</span>
          </div>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <span style={{ color: "var(--text-muted)", minWidth: 120 }}>Email:</span>
            <a href="mailto:info@kad2025.gr" style={{ color: "var(--primary)" }}>info@kad2025.gr</a>
          </div>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <span style={{ color: "var(--text-muted)", minWidth: 120 }}>Χώρα:</span>
            <span>Ελλάδα (ΕΕ) — GDPR applicable</span>
          </div>
        </div>
        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.75rem", lineHeight: 1.6 }}>
          Το kad2025.gr λειτουργεί ως ανεξάρτητο ψηφιακό εργαλείο από φυσικό πρόσωπο με έδρα
          τη Θεσσαλονίκη, Ελλάδα. Δεν αποτελεί νομικό πρόσωπο ούτε εταιρεία. Για κάθε επικοινωνία
          ή αίτημα GDPR, χρησιμοποιήστε το email επικοινωνίας.
        </p>
      </section>

      {/* Contact */}
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>📬 Επικοινωνία</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Για ερωτήσεις, αναφορά σφαλμάτων ή προτάσεις βελτίωσης, επικοινωνήστε μαζί μας:
        </p>
        <p style={{ marginBottom: "0.5rem" }}>
          📧{" "}
          <a href="mailto:info@kad2025.gr" style={{ color: "var(--primary)", fontWeight: 600 }}>
            info@kad2025.gr
          </a>
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
          Αν εντοπίσετε λανθασμένη αντιστοίχιση ή ελλιπή δεδομένα, παρακαλούμε ενημερώστε μας
          αναφέροντας τον ΚΑΔ 2008 και τον ΚΑΔ 2025 που θεωρείτε σωστό. Ελέγχουμε και
          διορθώνουμε άμεσα.
        </p>
      </section>

      {/* Related pages */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Link href="/privacy" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>🔒 Πολιτική Απορρήτου</Link>
        <Link href="/terms" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>📄 Όροι Χρήσης</Link>
        <Link href="/contact" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>✉️ Επικοινωνία</Link>
        <Link href="/blog" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>📚 Οδηγοί ΚΑΔ</Link>
      </div>
    </div>
  );
}
