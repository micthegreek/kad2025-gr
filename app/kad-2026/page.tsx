import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: 'ΚΑΔ 2026 — Ο Νέος Πίνακας ΚΑΔ που Ισχύει από 1 Ιουνίου 2026 | kad2025.gr',
  description:
    'ΚΑΔ 2026: Ο νέος πίνακας ΚΑΔ που ισχύει υποχρεωτικά από την 1η Ιουνίου 2026 σύμφωνα με την Α.1003/2026. Βρες σε ποιον νέο ΚΑΔ αντιστοιχεί ο παλιός σου με δωρεάν εργαλείο αντιστοίχισης.',
  keywords: [
    'ΚΑΔ 2026',
    'καδ 2026',
    'kad 2026',
    'νέος ΚΑΔ',
    'πίνακας ΚΑΔ 2026',
    'αντιστοίχιση ΚΑΔ',
    'ΚΑΔ 1 Ιουνίου 2026',
    'Α.1003/2026',
  ],
  alternates: {
    canonical: 'https://www.kad2025.gr/kad-2026',
  },
  openGraph: {
    title: 'ΚΑΔ 2026 — Ο Νέος Πίνακας ΚΑΔ που Ισχύει από 1 Ιουνίου 2026',
    description:
      'Όλα όσα πρέπει να ξέρεις για τον νέο ΚΑΔ που ισχύει από 1 Ιουνίου 2026. Δωρεάν εργαλείο αντιστοίχισης.',
    url: 'https://www.kad2025.gr/kad-2026',
    siteName: 'kad2025.gr',
    locale: 'el_GR',
    type: 'website',
  },
};

export default function Kad2026Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Τι είναι ο ΚΑΔ 2026;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Με τον όρο "ΚΑΔ 2026" αναφέρονται πολλοί χρήστες στον νέο πίνακα Κωδικών Αριθμών Δραστηριότητας που ισχύει υποχρεωτικά από την 1η Ιουνίου 2026, σύμφωνα με την Απόφαση Α.1003/2026. Επίσημα ο πίνακας ονομάζεται "ΚΑΔ 2025" επειδή θεσμοθετήθηκε εντός του 2025, αλλά η εφαρμογή του ξεκινά μέσα στο 2026.',
        },
      },
      {
        '@type': 'Question',
        name: 'Πότε αρχίζει να ισχύει ο νέος ΚΑΔ;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ο νέος πίνακας ΚΑΔ ισχύει υποχρεωτικά από την 1η Ιουνίου 2026 για όλες τις επιχειρήσεις και τους ελεύθερους επαγγελματίες στην Ελλάδα.',
        },
      },
      {
        '@type': 'Question',
        name: 'Πώς βρίσκω σε ποιον ΚΑΔ 2026 αντιστοιχεί ο παλιός μου ΚΑΔ;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Μπορείς να χρησιμοποιήσεις δωρεάν το εργαλείο αντιστοίχισης του kad2025.gr που έχει 10.923 εγγραφές αντιστοιχίας μεταξύ ΚΑΔ 2008 και ΚΑΔ 2025/2026.',
        },
      },
      {
        '@type': 'Question',
        name: 'Είναι ο ΚΑΔ 2025 και ΚΑΔ 2026 το ίδιο πράγμα;',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ναι, πρόκειται για τον ίδιο πίνακα ΚΑΔ. Η ονομασία "ΚΑΔ 2025" αναφέρεται στο έτος θεσμοθέτησης ενώ η ονομασία "ΚΑΔ 2026" αναφέρεται στο έτος εφαρμογής (1η Ιουνίου 2026).',
        },
      },
    ],
  };

  // Styles inline για να μην εξαρτάται από Tailwind config
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '24px 20px',
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      lineHeight: 1.7,
      color: '#1f2937',
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 800,
      lineHeight: 1.25,
      margin: '0 0 20px 0',
      color: '#0f172a',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      margin: '32px 0 12px 0',
      color: '#0f172a',
      borderBottom: '2px solid #e5e7eb',
      paddingBottom: '8px',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700,
      margin: '0 0 12px 0',
      color: '#0f172a',
    },
    summaryBox: {
      background: '#eff6ff',
      borderLeft: '4px solid #2563eb',
      padding: '16px 20px',
      borderRadius: '6px',
      margin: '0 0 28px 0',
      fontSize: '1.05rem',
    },
    ctaBox: {
      textAlign: 'center' as const,
      margin: '32px 0',
      padding: '24px',
      background: '#f8fafc',
      borderRadius: '10px',
      border: '1px solid #e2e8f0',
    },
    ctaButton: {
      display: 'inline-block',
      background: '#2563eb',
      color: '#ffffff',
      fontWeight: 700,
      padding: '14px 28px',
      borderRadius: '8px',
      textDecoration: 'none',
      fontSize: '1.1rem',
      transition: 'background 0.2s',
    },
    ctaSubtext: {
      fontSize: '0.875rem',
      color: '#64748b',
      marginTop: '10px',
    },
    paragraph: {
      margin: '0 0 14px 0',
    },
    list: {
      margin: '0 0 14px 0',
      paddingLeft: '24px',
    },
    listItem: {
      margin: '0 0 8px 0',
    },
    faqItem: {
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '14px 18px',
      margin: '0 0 10px 0',
      background: '#ffffff',
    },
    faqSummary: {
      fontWeight: 700,
      cursor: 'pointer',
      color: '#0f172a',
    },
    faqAnswer: {
      marginTop: '10px',
      color: '#374151',
    },
    link: {
      color: '#2563eb',
      textDecoration: 'underline',
    },
    relatedNav: {
      borderTop: '1px solid #e5e7eb',
      marginTop: '40px',
      paddingTop: '24px',
    },
    relatedList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    relatedItem: {
      margin: '0 0 10px 0',
    },
    finalCta: {
      margin: '40px 0 24px 0',
      padding: '28px',
      background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
      borderRadius: '12px',
      textAlign: 'center' as const,
    },
    finalCtaText: {
      color: '#475569',
      margin: '0 0 16px 0',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main style={styles.container}>
        <article>
          <h1 style={styles.h1}>
            ΚΑΔ 2026 — Ο Νέος Πίνακας ΚΑΔ που Ισχύει από 1 Ιουνίου 2026
          </h1>

          <div style={styles.summaryBox}>
            <strong>Σύντομη απάντηση:</strong> Ο &quot;ΚΑΔ 2026&quot; είναι η
            κοινή ονομασία που χρησιμοποιούν λογιστές και επιχειρηματίες για
            τον επίσημο πίνακα ΚΑΔ που θεσμοθετήθηκε με την{' '}
            <strong>Α.1003/2026</strong> και τίθεται σε υποχρεωτική εφαρμογή
            από την <strong>1η Ιουνίου 2026</strong>. Επίσημα ονομάζεται
            &quot;ΚΑΔ 2025&quot;.
          </div>

          <div style={styles.ctaBox}>
            <Link href="/antistoixisi" style={styles.ctaButton}>
              🔍 Βρες σε ποιον νέο ΚΑΔ αντιστοιχείς →
            </Link>
            <p style={styles.ctaSubtext}>
              Δωρεάν εργαλείο · 10.923 αντιστοιχίες · Καμία εγγραφή
            </p>
          </div>

          <h2 style={styles.h2}>Τι είναι ο ΚΑΔ 2026 (και γιατί λέγεται έτσι)</h2>
          <p style={styles.paragraph}>
            Με τον όρο &quot;ΚΑΔ 2026&quot; αναφέρονται οι περισσότεροι χρήστες
            στον νέο πίνακα Κωδικών Αριθμών Δραστηριότητας που αντικαθιστά τον
            ΚΑΔ 2008. Ο επίσημος πίνακας θεσμοθετήθηκε μέσα στο 2025
            (γι&apos; αυτό το όνομά του είναι &quot;ΚΑΔ 2025&quot;), αλλά η{' '}
            <strong>υποχρεωτική εφαρμογή του</strong> ξεκινά την{' '}
            <strong>1η Ιουνίου 2026</strong> — γι&apos; αυτό πολλοί τον
            αναζητούν ως &quot;ΚΑΔ 2026&quot;.
          </p>
          <p style={styles.paragraph}>
            <strong>Είναι το ίδιο πράγμα:</strong> ΚΑΔ 2025 = ΚΑΔ 2026.
          </p>

          <h2 style={styles.h2}>Τι αλλάζει σε σχέση με τον ΚΑΔ 2008</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Νέοι κωδικοί δραστηριότητας με σύγχρονη ταξινόμηση
            </li>
            <li style={styles.listItem}>
              Καλύτερη ευθυγράμμιση με τα ευρωπαϊκά πρότυπα NACE Rev. 2.1
            </li>
            <li style={styles.listItem}>
              Νέες κατηγορίες για ψηφιακές υπηρεσίες, fintech και πράσινη
              οικονομία
            </li>
            <li style={styles.listItem}>
              Συγχωνεύσεις και διασπάσεις παλαιότερων κωδικών για μεγαλύτερη
              ακρίβεια
            </li>
          </ul>

          <h2 style={styles.h2}>Τι πρέπει να κάνεις πριν την 1η Ιουνίου 2026</h2>
          <ol style={styles.list}>
            <li style={styles.listItem}>
              Έλεγξε τους <strong>ισχύοντες ΚΑΔ</strong> της επιχείρησής σου
              (κύριο και δευτερεύοντες).
            </li>
            <li style={styles.listItem}>
              Χρησιμοποίησε το{' '}
              <Link href="/antistoixisi" style={styles.link}>
                εργαλείο αντιστοίχισης
              </Link>{' '}
              για να βρεις τους νέους ΚΑΔ που σου αντιστοιχούν.
            </li>
            <li style={styles.listItem}>
              Σε περίπτωση που υπάρχουν{' '}
              <Link href="/lathos-antistoixisi" style={styles.link}>
                πολλαπλές ή λάθος αντιστοιχίες
              </Link>
              , συμβουλεύσου τον λογιστή σου.
            </li>
            <li style={styles.listItem}>
              Ενημέρωσε τους ΚΑΔ σου στην ΑΑΔΕ μέσω της πλατφόρμας myAADE.
            </li>
          </ol>

          <h2 style={styles.h2}>Συχνές ερωτήσεις για τον ΚΑΔ 2026</h2>

          <details style={styles.faqItem}>
            <summary style={styles.faqSummary}>
              Είναι υποχρεωτική η αλλαγή ΚΑΔ;
            </summary>
            <p style={styles.faqAnswer}>
              Ναι, από την 1η Ιουνίου 2026 όλες οι επιχειρήσεις πρέπει να
              διαθέτουν ΚΑΔ από τον νέο πίνακα. Η μετάβαση γίνεται σε αρκετές
              περιπτώσεις αυτόματα από την ΑΑΔΕ, αλλά καλό είναι να ελέγξεις.
            </p>
          </details>

          <details style={styles.faqItem}>
            <summary style={styles.faqSummary}>
              Υπάρχει πρόστιμο αν δεν αλλάξω ΚΑΔ;
            </summary>
            <p style={styles.faqAnswer}>
              Δεν υπάρχει συγκεκριμένο πρόστιμο για τη μη αλλαγή, αλλά
              ενδέχεται να αντιμετωπίσεις προβλήματα σε εκδόσεις
              παραστατικών, υποβολές δηλώσεων και επιδοτήσεις.
            </p>
          </details>

          <details style={styles.faqItem}>
            <summary style={styles.faqSummary}>
              Πού μπορώ να βρω την επίσημη απόφαση Α.1003/2026;
            </summary>
            <p style={styles.faqAnswer}>
              Η απόφαση δημοσιεύθηκε στο ΦΕΚ. Μπορείς να την αναζητήσεις στην
              ιστοσελίδα της ΑΑΔΕ ή στο et.gr.
            </p>
          </details>

          <div style={styles.finalCta}>
            <h3 style={styles.h3}>Έτοιμος να δεις τους νέους σου ΚΑΔ;</h3>
            <p style={styles.finalCtaText}>
              Δωρεάν εργαλείο με 10.923 αντιστοιχίες ΚΑΔ 2008 → ΚΑΔ 2026.
            </p>
            <Link href="/antistoixisi" style={styles.ctaButton}>
              Ξεκίνα την αντιστοίχιση →
            </Link>
          </div>

          <nav style={styles.relatedNav}>
            <h3 style={styles.h3}>Σχετικές σελίδες</h3>
            <ul style={styles.relatedList}>
              <li style={styles.relatedItem}>
                <Link href="/kad-2025" style={styles.link}>
                  Πίνακας ΚΑΔ 2025
                </Link>
              </li>
              <li style={styles.relatedItem}>
                <Link href="/antistoixisi" style={styles.link}>
                  Εργαλείο Αντιστοίχισης ΚΑΔ 2008 → 2025
                </Link>
              </li>
              <li style={styles.relatedItem}>
                <Link href="/prothesmia-kad-2025" style={styles.link}>
                  Προθεσμία ΚΑΔ 2025: Όλες οι ημερομηνίες
                </Link>
              </li>
              <li style={styles.relatedItem}>
                <Link href="/odigies-logistes" style={styles.link}>
                  Οδηγίες για Λογιστές
                </Link>
              </li>
              <li style={styles.relatedItem}>
                <Link href="/ti-einai-kad" style={styles.link}>
                  Τι είναι ο ΚΑΔ;
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
