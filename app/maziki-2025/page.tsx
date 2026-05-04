import type { Metadata } from "next";
import Link from "next/link";
import { getKadData, getSafeKadUrlForCode, getSsgCodes } from "@/lib/kadData";
import MazikiTool2025 from "@/components/tools/MazikiTool2025";
import TrackPageTool from "@/components/TrackPageTool";

export const metadata: Metadata = {
  title: "Μαζική Αντιστοίχιση ΚΑΔ 2025 → 2008",
  description:
    "Μαζική εύρεση ΚΑΔ 2008 από νέους ΚΑΔ 2025. Έως 500 κωδικοί. Δείτε συγχωνεύσεις δραστηριοτήτων. Εξαγωγή Excel & CSV.",
  alternates: { canonical: "https://www.kad2025.gr/maziki-2025" },
  openGraph: {
    title: "Μαζική Αντιστοίχιση ΚΑΔ 2025 → 2008",
    description: "Βρείτε ποιοι παλιοί ΚΑΔ 2008 αντιστοιχούν σε νέους ΚΑΔ 2025. Μέχρι 500 κωδικούς.",
  },
};

export default function Maziki2025Page() {
  const data = getKadData();
  const ssg = getSsgCodes();

  const map2025 = new Map<string, typeof data>();
  data.forEach((r) => {
    if (!map2025.has(r.kad2025)) map2025.set(r.kad2025, []);
    map2025.get(r.kad2025)!.push(r);
  });

  // v60b: Only show merges that link to SSG-safe pages (avoid 404s)
  const mergedSamples = Array.from(map2025.entries())
    .filter(([kad2025, v]) => {
      if (v.length < 2) return false;
      return ssg.has(kad2025) || v.some((r) => ssg.has(r.kad2008));
    })
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 8)
    .map(([kad2025, records]) => ({
      kad2025, desc2025: records[0].desc2025, count: records.length, sample: records.slice(0, 3),
    }));

  const WHEN_USEFUL = [
    "Γνωρίζετε τον νέο ΚΑΔ 2025 και θέλετε να δείτε ποιοι παλιοί κωδικοί τον αντικατέστησαν",
    "Θέλετε να κατανοήσετε αν ένας νέος ΚΑΔ προέκυψε από συγχώνευση πολλών παλιών κωδικών",
    "Κάνετε audit πελατών που έλαβαν νέους ΚΑΔ και θέλετε να επαληθεύσετε την αντιστοίχιση",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Αρχική", item: "https://www.kad2025.gr" },
      { "@type": "ListItem", position: 2, name: "Αντιστοίχιση", item: "https://www.kad2025.gr/antistoixisi-2025" },
      { "@type": "ListItem", position: 3, name: "Μαζική ΚΑΔ 2025 → 2008", item: "https://www.kad2025.gr/maziki-2025" },
    ],
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <TrackPageTool toolName="maziki_2025" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <Link href="/antistoixisi-2025" style={{ color: "var(--primary)", textDecoration: "none" }}>Αντιστοίχιση 2025→2008</Link>
        {" → "}
        <span>Μαζική</span>
      </nav>

      <h1 style={{ marginBottom: "0.5rem" }}>📦 Μαζική Αντιστοίχιση ΚΑΔ 2025 → 2008</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
        Επικολλήστε λίστα νέων ΚΑΔ 2025 και δείτε ποιοι παλιοί ΚΑΔ 2008 αντιστοιχούν σε αυτούς.
        Εξαγωγή σε <strong>Excel & CSV</strong>.
        Δείτε επίσης: <Link href="/maziki-2008" style={{ color: "var(--primary)" }}>Μαζική ΚΑΔ 2008 → 2025</Link>.
      </p>

      {/* ===== TOOL FIRST ===== */}
      <MazikiTool2025 />

      {/* Content after tool */}
      <section style={{ marginTop: "3rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Πότε χρησιμοποιείται;</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {WHEN_USEFUL.map((text, i) => (
            <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.875rem" }}>
              <span style={{ color: "var(--success)", flexShrink: 0, fontWeight: 700 }}>✅</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>ΚΑΔ 2025 με τις Περισσότερες Συγχωνεύσεις</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
          Νέοι ΚΑΔ που προέκυψαν από συγχώνευση πολλών παλιών κωδικών 2008.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {mergedSamples.map((m) => {
            const safeKad2025Url = getSafeKadUrlForCode(m.kad2025);
            const safeKad2008 = m.sample.find(s => getSafeKadUrlForCode(s.kad2008))?.kad2008;
            const href = safeKad2025Url || (safeKad2008 ? `/kad/${safeKad2008}` : `/kad-2025?q=${m.kad2025}`);
            return (
              <Link key={m.kad2025} href={href} style={{ textDecoration: "none" }}>
                <div style={{ padding: "0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderLeft: "3px solid var(--primary)", borderRadius: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                    <span className="kad-badge kad-badge-2025" style={{ fontSize: "0.8rem" }}>{m.kad2025}</span>
                    <span style={{ fontWeight: 600, fontSize: "0.875rem", flex: 1 }}>
                      {m.desc2025.slice(0, 55)}{m.desc2025.length > 55 ? "..." : ""}
                    </span>
                    <span style={{ background: "var(--accent)", color: "#1a1a1a", fontSize: "0.75rem", fontWeight: 700, padding: "0.15rem 0.5rem", borderRadius: 10, flexShrink: 0 }}>
                      ← {m.count} παλιοί ΚΑΔ
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                    {m.sample.map((s) => (
                      <span key={s.kad2008} className="kad-badge kad-badge-2008" style={{ fontSize: "0.72rem" }}>{s.kad2008}</span>
                    ))}
                    {m.count > 3 && <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>+{m.count - 3} ακόμα</span>}
                  </div>
              </div>
            </Link>
            );
          })}
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <Link href="/statistika" style={{ color: "var(--primary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>
            📊 Όλες οι συγχωνεύσεις στα Στατιστικά →
          </Link>
        </div>
      </section>

      {/* Editorial content */}
      <section className="card" style={{ marginBottom: "1.5rem", marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Τι είναι η Μαζική Αντιστοίχιση ΚΑΔ 2025 → 2008</h2>
        <p style={{ lineHeight: 1.8, marginBottom: "0.75rem" }}>
          Η μαζική αντίστροφη αντιστοίχιση επιτρέπει την επεξεργασία μεγάλου αριθμού νέων ΚΑΔ 2025
          για εύρεση των αντίστοιχων παλαιών ΚΑΔ 2008. Χρησιμοποιείται κυρίως από <strong>λογιστές
          και ελεγκτές</strong> που χρειάζονται να συγκρίνουν ιστορικά δεδομένα, από <strong>εταιρείες
          συμβούλων ΕΣΠΑ</strong> που ελέγχουν επιλεξιμότητα, και από <strong>ερευνητικές ομάδες</strong>{" "}
          που αναλύουν κλαδικές αλλαγές.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Τα αποτελέσματα εξάγονται σε <strong>Excel ή CSV</strong> με πλήρη αντιστοίχιση,
          έτοιμα για αρχειοθέτηση ή περαιτέρω ανάλυση.
        </p>
      </section>

      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Βήμα-βήμα Χρήση</h2>
        <ol style={{ paddingLeft: "1.25rem", lineHeight: 2.2 }}>
          <li><strong>Συγκεντρώστε τους ΚΑΔ 2025</strong> — αντιγράψτε από το myAADE ή άλλη πηγή</li>
          <li><strong>Επικολλήστε</strong> στο πεδίο (ένας κωδικός ανά γραμμή, έως 500)</li>
          <li><strong>Εκτελέστε</strong> — άμεσο αποτέλεσμα χωρίς αναμονή</li>
          <li><strong>Ελέγξτε</strong> τους κωδικούς με πολλαπλές αντιστοιχίσεις</li>
          <li><strong>Εξάγετε</strong> σε Excel ή CSV με αναφορά πηγής</li>
        </ol>
      </section>

      <div style={{ background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "var(--radius)", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "#78350f", marginBottom: "1rem" }}>
        ⚠️ Ανεξάρτητο ενημερωτικό εργαλείο — δεν είναι επίσημος ιστότοπος ΑΑΔΕ.
        Επαλήθευση στο{" "}
        <a href="https://myaade.gov.gr" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 600 }}>myaade.gov.gr</a>.
      </div>
    </div>
  );
}
