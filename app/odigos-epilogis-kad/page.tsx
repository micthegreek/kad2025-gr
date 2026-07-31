import type { Metadata } from "next";
import Link from "next/link";
import KadWizard from "@/components/KadWizard";

export const metadata: Metadata = {
  title: "Οδηγός Επιλογής ΚΑΔ 2026 σε 3 Ερωτήσεις",
  description:
    "Διαδραστικός οδηγός: απαντήστε 2-3 απλές ερωτήσεις για τη δραστηριότητά σας και δείτε τις σωστές τάξεις NACE 2.1 — με εξήγηση, παγίδες και σύνδεση στους 8ψήφιους ΚΑΔ.",
  alternates: { canonical: "https://www.kad2025.gr/odigos-epilogis-kad" },
};

const faq = [
  { q: "Πόσο ακριβής είναι ο οδηγός;", a: "Ο οδηγός καταλήγει σε τάξεις NACE 2.1 (4ψήφιο επίπεδο) — το σωστό σημείο εκκίνησης. Ο τελικός 8ψήφιος ΚΑΔ επιλέγεται μέσα από την τάξη, αφού διαβάσετε τις επίσημες επεξηγήσεις «Τι περιλαμβάνει» στη σελίδα κάθε κωδικού." },
  { q: "Η δραστηριότητά μου δεν ταιριάζει σε καμία επιλογή — τι κάνω;", a: "Χρησιμοποιήστε την αναζήτηση ΚΑΔ 2025 με λέξη-κλειδί, ενεργοποιώντας και την αναζήτηση στις επίσημες επεξηγήσεις (συνώνυμα NACE) — καλύπτει χιλιάδες όρους που δεν υπάρχουν στις τυπικές περιγραφές." },
  { q: "Μπορώ να επιλέξω περισσότερες από μία τάξεις;", a: "Ναι — δηλώνετε κύριο ΚΑΔ την κύρια δραστηριότητα και δευτερεύοντες τους υπόλοιπους, χωρίς κόστος. Δείτε τον οδηγό κύριου/δευτερεύοντος στο blog." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebApplication", name: "Οδηγός Επιλογής ΚΑΔ", url: "https://www.kad2025.gr/odigos-epilogis-kad", applicationCategory: "BusinessApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" } },
    { "@type": "WebPage", name: "Οδηγός Επιλογής ΚΑΔ", url: "https://www.kad2025.gr/odigos-epilogis-kad", inLanguage: "el-GR" },
    { "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function Page() {
  return (
    <main className="container" style={{ maxWidth: 900, margin: "0 auto", padding: "1.5rem 1rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>🧭 Οδηγός Επιλογής ΚΑΔ</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "1.25rem" }}>
        Απαντήστε 2-3 ερωτήσεις και δείτε τις σωστές τάξεις δραστηριότητας για την περίπτωσή σας — με τις
        κλασικές παγίδες σημειωμένες. Δωρεάν, χωρίς εγγραφή.
      </p>
      <KadWizard />
      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.05rem" }}>Συχνές ερωτήσεις</h2>
        {faq.map((f, i) => (
          <details key={i} style={{ margin: "0.5rem 0", padding: "0.5rem 0.8rem", border: "1px solid var(--border)", borderRadius: 8 }}>
            <summary style={{ cursor: "pointer", fontWeight: 600 }}>{f.q}</summary>
            <p style={{ margin: "0.5rem 0 0" }}>{f.a}</p>
          </details>
        ))}
        <p style={{ fontSize: "0.85rem", marginTop: "0.9rem" }}>
          Σχετικά εργαλεία: <Link href="/kad-2025">Αναζήτηση ΚΑΔ 2025</Link> ·{" "}
          <Link href="/sygkrisi-kad">Σύγκριση τάξεων</Link> · <Link href="/kad-epidotisi-espa">Έλεγχος
          επιδοτήσεων</Link> · <Link href="/epaggelma">ΚΑΔ ανά επάγγελμα</Link>
        </p>
      </section>
    
      <p style={{ marginTop: "1.25rem", padding: "0.6rem 0.9rem", border: "1px dashed var(--border)", borderRadius: 8, fontSize: "0.85rem" }}>💡 Προτιμάτε ερωτήσεις για συγκεκριμένο 8ψήφιο κωδικό; Δείτε και τον <Link href="/wizard">βήμα-βήμα οδηγό εύρεσης ΚΑΔ</Link>.</p>
</main>
  );
}
