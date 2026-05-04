import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου & Cookies — kad2025.gr",
  description:
    "Πλήρης πολιτική απορρήτου του kad2025.gr. Πώς χρησιμοποιούμε cookies, Google Analytics, Google AdSense και πώς προστατεύουμε τα δεδομένα σας (GDPR).",
  alternates: { canonical: "https://www.kad2025.gr/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    id: "eisagogi",
    title: "1. Εισαγωγή",
    content: null,
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>

      {/* Breadcrumb */}
      <nav style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>Αρχική</Link>
        {" → "}
        <span>Πολιτική Απορρήτου</span>
      </nav>

      <h1 style={{ marginBottom: "0.4rem" }}>Πολιτική Απορρήτου & Cookies</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
        Τελευταία ενημέρωση: <strong>Απρίλιος 2026</strong>
      </p>
      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "2rem" }}>
        Ισχύει για: <strong>www.kad2025.gr</strong>
      </p>

      {/* Quick summary box */}
      <div style={{
        background: "#eff6ff",
        border: "1px solid #bfdbfe",
        borderRadius: "var(--radius)",
        padding: "1.25rem 1.5rem",
        marginBottom: "2rem",
      }}>
        <h2 style={{ fontSize: "1rem", color: "#1e40af", marginBottom: "0.75rem" }}>
          📋 Σύνοψη (απλά λόγια)
        </h2>
        <ul style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "#1e3a5f", paddingLeft: "1.25rem" }}>
          <li>Δεν συλλέγουμε ονόματα, email ή άλλα προσωπικά δεδομένα κατά τη χρήση των εργαλείων μας.</li>
          <li>Χρησιμοποιούμε <strong>Google Analytics</strong> για ανώνυμα στατιστικά επισκεψιμότητας.</li>
          <li>Χρησιμοποιούμε <strong>Google AdSense</strong> για εμφάνιση διαφημίσεων — η Google ενδέχεται να χρησιμοποιεί cookies για εξατομίκευση.</li>
          <li>Μπορείτε να αρνηθείτε τα διαφημιστικά cookies οποτεδήποτε.</li>
          <li>Δεν πωλούμε δεδομένα σε τρίτους.</li>
        </ul>
      </div>

      {/* Table of contents */}
      <div className="card" style={{ marginBottom: "2rem", padding: "1rem 1.25rem" }}>
        <h2 style={{ fontSize: "0.95rem", marginBottom: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Περιεχόμενα
        </h2>
        <ol style={{ fontSize: "0.88rem", lineHeight: 2, paddingLeft: "1.25rem", margin: 0 }}>
          <li><a href="#eisagogi" style={{ color: "var(--primary)" }}>Εισαγωγή & Πεδίο Εφαρμογής</a></li>
          <li><a href="#dedomena" style={{ color: "var(--primary)" }}>Δεδομένα που Συλλέγουμε</a></li>
          <li><a href="#analytics" style={{ color: "var(--primary)" }}>Google Analytics</a></li>
          <li><a href="#adsense" style={{ color: "var(--primary)" }}>Google AdSense & Διαφημιστικά Cookies</a></li>
          <li><a href="#cookies" style={{ color: "var(--primary)" }}>Πολιτική Cookies</a></li>
          <li><a href="#localStorage" style={{ color: "var(--primary)" }}>Τοπική Αποθήκευση (localStorage)</a></li>
          <li><a href="#diabivasei" style={{ color: "var(--primary)" }}>Διαβίβαση Δεδομένων σε Τρίτους</a></li>
          <li><a href="#gdpr" style={{ color: "var(--primary)" }}>Δικαιώματά σας (GDPR)</a></li>
          <li><a href="#asfalia" style={{ color: "var(--primary)" }}>Ασφάλεια Δεδομένων</a></li>
          <li><a href="#allages" style={{ color: "var(--primary)" }}>Αλλαγές στην Πολιτική</a></li>
          <li><a href="#epikoinonia" style={{ color: "var(--primary)" }}>Επικοινωνία</a></li>
        </ol>
      </div>

      <div style={{ lineHeight: 1.8 }}>

        {/* 1. Εισαγωγή */}
        <section id="eisagogi" className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>1. Εισαγωγή & Πεδίο Εφαρμογής</h2>
          <p style={{ marginBottom: "0.75rem" }}>
            Το <strong>kad2025.gr</strong> (εφεξής «η Ιστοσελίδα» ή «εμείς») είναι ανεξάρτητο
            ενημερωτικό εργαλείο αντιστοίχισης Κωδικών Αριθμών Δραστηριότητας (ΚΑΔ) 2008 → 2025,
            βάσει επίσημων αποφάσεων ΑΑΔΕ (Α.1003/2026 & Α.1004/2026).
          </p>
          <p style={{ marginBottom: "0.75rem" }}>
            Η παρούσα Πολιτική Απορρήτου περιγράφει τον τρόπο με τον οποίο συλλέγουμε, χρησιμοποιούμε
            και προστατεύουμε πληροφορίες όταν επισκέπτεστε την Ιστοσελίδα μας. Ισχύει για όλες τις
            σελίδες του <strong>www.kad2025.gr</strong>.
          </p>
          <p>
            Η Ιστοσελίδα συμμορφώνεται με τον <strong>Γενικό Κανονισμό Προστασίας Δεδομένων
            (GDPR — Κανονισμός ΕΕ 2016/679)</strong> και την ελληνική νομοθεσία για την
            προστασία δεδομένων προσωπικού χαρακτήρα (Ν. 4624/2019).
          </p>
        </section>

        {/* 2. Δεδομένα */}
        <section id="dedomena" className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>2. Δεδομένα που Συλλέγουμε</h2>
          <p style={{ marginBottom: "1rem" }}>
            <strong>Δεν συλλέγουμε απευθείας προσωπικά δεδομένα</strong> (όπως ονόματα, email,
            αριθμοί τηλεφώνου) κατά τη χρήση των εργαλείων αναζήτησης ΚΑΔ.
          </p>
          <p style={{ marginBottom: "0.75rem" }}>Τα δεδομένα που ενδέχεται να συλλεχθούν:</p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ background: "var(--bg)", borderBottom: "2px solid var(--border)" }}>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "left", fontWeight: 700 }}>Κατηγορία</th>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "left", fontWeight: 700 }}>Τύπος δεδομένων</th>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "left", fontWeight: 700 }}>Σκοπός</th>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "left", fontWeight: 700 }}>Νομική βάση</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Τεχνικά", "Διεύθυνση IP (ανωνυμοποιημένη), browser, λειτουργικό σύστημα", "Ανάλυση επισκεψιμότητας", "Έννομο συμφέρον"],
                  ["Συμπεριφορά", "Σελίδες που επισκεφθήκατε, χρόνος παραμονής, ανάζητηση ΚΑΔ (ανώνυμα)", "Βελτίωση υπηρεσίας", "Έννομο συμφέρον"],
                  ["Διαφήμιση", "Cookies Google AdSense για στόχευση διαφημίσεων", "Εμφάνιση σχετικών διαφημίσεων", "Συγκατάθεση"],
                  ["Επικοινωνία", "Email (μόνο αν επικοινωνήσετε μαζί μας)", "Απάντηση σε αιτήματα", "Συγκατάθεση"],
                ].map(([cat, type, purpose, legal]) => (
                  <tr key={cat} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "0.6rem 0.8rem", fontWeight: 600 }}>{cat}</td>
                    <td style={{ padding: "0.6rem 0.8rem", color: "var(--text-muted)" }}>{type}</td>
                    <td style={{ padding: "0.6rem 0.8rem" }}>{purpose}</td>
                    <td style={{ padding: "0.6rem 0.8rem" }}>{legal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Google Analytics */}
        <section id="analytics" className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>3. Google Analytics</h2>
          <p style={{ marginBottom: "0.75rem" }}>
            Χρησιμοποιούμε <strong>Google Analytics 4 (GA4)</strong> της Google LLC για να κατανοούμε
            πώς οι επισκέπτες χρησιμοποιούν την Ιστοσελίδα. Το GA4 συλλέγει:
          </p>
          <ul style={{ marginBottom: "0.75rem", paddingLeft: "1.25rem" }}>
            <li>Ανώνυμα δεδομένα επισκεψιμότητας (πλήθος επισκεπτών, σελίδες, διάρκεια παραμονής)</li>
            <li>Γεωγραφική περιοχή σε επίπεδο χώρας/πόλης (χωρίς ακριβή τοποθεσία)</li>
            <li>Τύπο συσκευής και browser</li>
            <li>Πηγή επισκεψιμότητας (π.χ. Google Search, direct)</li>
          </ul>
          <p style={{ marginBottom: "0.75rem" }}>
            Έχουμε ενεργοποιήσει <strong>ανωνυμοποίηση IP</strong> — δεν αποθηκεύεται η πλήρης
            διεύθυνση IP σας. Τα δεδομένα GA4 δεν χρησιμοποιούνται για εξατομίκευση διαφημίσεων.
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Περισσότερες πληροφορίες:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>
              Πολιτική Απορρήτου Google
            </a>{" "}|{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>
              Opt-out Google Analytics
            </a>
          </p>
        </section>


        {/* 4. Google AdSense — CRITICAL SECTION */}
        <section id="adsense" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid #f59e0b" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>4. Google AdSense & Διαφημιστικά Cookies</h2>

          <p style={{ marginBottom: "0.75rem" }}>
            Η Ιστοσελίδα <strong>δεν προβάλλει διαφημίσεις αυτή τη στιγμή</strong>. Έχει υποβληθεί
            αίτημα ένταξης στο <strong>Google AdSense</strong> (Google LLC, 1600 Amphitheatre Parkway,
            Mountain View, CA 94043, ΗΠΑ) και ενδέχεται να ενεργοποιηθεί μετά την έγκριση.
          </p>

          <p style={{ marginBottom: "0.75rem" }}>
            Εφόσον ενεργοποιηθεί, η Google AdSense ενδέχεται να χρησιμοποιεί{" "}
            <strong>cookies και τεχνολογίες web beacon</strong> για να:
          </p>
          <ul style={{ marginBottom: "1rem", paddingLeft: "1.25rem" }}>
            <li>Εμφανίζει διαφημίσεις σχετικές με τα ενδιαφέροντά σας («εξατομικευμένες διαφημίσεις»)</li>
            <li>Μετράει την αποτελεσματικότητα των διαφημίσεων</li>
            <li>Αποτρέπει την εμφάνιση της ίδιας διαφήμισης πολλές φορές</li>
            <li>Ανιχνεύει και αποτρέπει δόλιες κλικ</li>
          </ul>

          <div style={{
            background: "#fef3c7",
            border: "1px solid #f59e0b",
            borderRadius: 8,
            padding: "1rem",
            marginBottom: "1rem",
          }}>
            <p style={{ fontWeight: 700, marginBottom: "0.5rem", color: "#92400e" }}>
              ⚠️ Cookies τρίτων μερών (Third-party cookies)
            </p>
            <p style={{ fontSize: "0.875rem", color: "#78350f", lineHeight: 1.7 }}>
              Η Google, ως πάροχος τρίτου μέρους, χρησιμοποιεί cookies (συμπεριλαμβανομένου
              του <strong>DoubleClick cookie</strong>) για να εμφανίζει διαφημίσεις βάσει
              προηγούμενων επισκέψεών σας στην Ιστοσελίδα μας και σε άλλες ιστοσελίδες στο
              διαδίκτυο. Η χρήση αυτών των cookies από τη Google διέπεται από την{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 600 }}>
                Πολιτική Απορρήτου της Google
              </a>.
            </p>
          </div>

          <p style={{ marginBottom: "0.75rem", fontWeight: 600 }}>Επιλογές εξαίρεσης (Opt-out):</p>
          <ul style={{ marginBottom: "0.75rem", paddingLeft: "1.25rem" }}>
            <li>
              <strong>Google Ad Settings:</strong>{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>
                www.google.com/settings/ads
              </a>{" "}
              — Διαχείριση εξατομικευμένων διαφημίσεων Google
            </li>
            <li>
              <strong>Network Advertising Initiative:</strong>{" "}
              <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>
                optout.networkadvertising.org
              </a>{" "}
              — Opt-out από πολλαπλούς διαφημιστές
            </li>
            <li>
              <strong>Your Online Choices (EU):</strong>{" "}
              <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>
                www.youronlinechoices.eu
              </a>{" "}
              — Ευρωπαϊκή πλατφόρμα διαχείρισης διαφημιστικών cookies
            </li>
          </ul>

          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Οι μη-εξατομικευμένες διαφημίσεις εξακολουθούν να εμφανίζονται, αλλά δεν βασίζονται
            στο ιστορικό περιήγησής σας.
          </p>
        </section>

        {/* 5. Cookies */}
        <section id="cookies" className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>5. Πολιτική Cookies</h2>
          <p style={{ marginBottom: "1rem" }}>
            Cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στον browser σας. Κατηγοριοποιούμε
            τα cookies ως εξής:
          </p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.83rem" }}>
              <thead>
                <tr style={{ background: "var(--bg)", borderBottom: "2px solid var(--border)" }}>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "left" }}>Κατηγορία</th>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "left" }}>Πάροχος</th>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "left" }}>Σκοπός</th>
                  <th style={{ padding: "0.6rem 0.8rem", textAlign: "left" }}>Συγκατάθεση</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["✅ Απαραίτητα", "kad2025.gr", "Λειτουργία site (theme, γλώσσα)", "Δεν απαιτείται"],
                  ["📊 Ανάλυσης", "Google Analytics 4", "Ανώνυμα στατιστικά χρήσης", "Απαιτείται"],
                  ["📢 Διαφήμισης", "Google AdSense / DoubleClick", "Εξατομικευμένες διαφημίσεις", "Απαιτείται"],
                  ["☁️ Cloudflare", "Cloudflare", "Ασφάλεια, CDN, ανώνυμα στατιστικά", "Απαιτείται"],
                ].map(([cat, provider, purpose, consent]) => (
                  <tr key={cat} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "0.6rem 0.8rem", fontWeight: 600 }}>{cat}</td>
                    <td style={{ padding: "0.6rem 0.8rem", color: "var(--text-muted)" }}>{provider}</td>
                    <td style={{ padding: "0.6rem 0.8rem" }}>{purpose}</td>
                    <td style={{ padding: "0.6rem 0.8rem", color: consent === "Δεν απαιτείται" ? "var(--success)" : "var(--accent)" }}>{consent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Μπορείτε να διαχειριστείτε ή να διαγράψετε cookies μέσω των ρυθμίσεων του browser σας.
            Σημειώστε ότι απενεργοποίηση cookies ενδέχεται να επηρεάσει τη λειτουργία ορισμένων
            τμημάτων της Ιστοσελίδας.
          </p>
        </section>

        {/* 6. localStorage */}
        <section id="localStorage" className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>6. Τοπική Αποθήκευση (localStorage)</h2>
          <p style={{ marginBottom: "0.75rem" }}>
            Η Ιστοσελίδα χρησιμοποιεί <strong>localStorage</strong> του browser σας για να αποθηκεύει
            τοπικά (στη συσκευή σας) τις εξής πληροφορίες:
          </p>
          <ul style={{ marginBottom: "0.75rem", paddingLeft: "1.25rem" }}>
            <li><strong>Αποθηκευμένοι ΚΑΔ:</strong> ΚΑΔ που έχετε σημειώσει ως "αποθηκευμένους" μέσω της λειτουργίας "Αποθήκευση ΚΑΔ"</li>
            <li><strong>Προτίμηση theme:</strong> Σκοτεινό (dark) ή ανοιχτό (light) θέμα εμφάνισης</li>
          </ul>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Αυτά τα δεδομένα παραμένουν <strong>αποκλειστικά στη συσκευή σας</strong> και δεν
            διαβιβάζονται σε κανέναν διακομιστή. Μπορείτε να τα διαγράψετε μέσω των Developer
            Tools του browser σας (Application → Local Storage).
          </p>
        </section>

        {/* 7. Διαβίβαση */}
        <section id="diabivasei" className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>7. Διαβίβαση Δεδομένων σε Τρίτους</h2>
          <p style={{ marginBottom: "0.75rem" }}>
            <strong>Δεν πωλούμε, δεν ενοικιάζουμε και δεν εμπορευόμαστε</strong> προσωπικά δεδομένα.
          </p>
          <p style={{ marginBottom: "0.75rem" }}>
            Ενδέχεται να διαβιβάζουμε δεδομένα στους ακόλουθους <strong>εκτελούντες την επεξεργασία</strong>:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "0.75rem" }}>
            {[
              { name: "Google LLC", role: "Analytics (GA4), Διαφήμιση (AdSense)", location: "ΗΠΑ", basis: "SCC / Adequacy Decision" },
              { name: "Cloudflare Inc.", role: "Hosting (Pages), CDN, Ασφάλεια, Web Analytics", location: "ΗΠΑ", basis: "SCC" },
              { name: "Groq Inc.", role: "AI API (εργαλείο AI Βοηθός ΚΑΔ)", location: "ΗΠΑ", basis: "SCC" },
            ].map((p) => (
              <div key={p.name} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr 1fr", gap: "0.5rem", padding: "0.5rem 0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 6, fontSize: "0.82rem" }}>
                <span style={{ fontWeight: 700 }}>{p.name}</span>
                <span style={{ color: "var(--text-muted)" }}>{p.role}</span>
                <span>{p.location}</span>
                <span style={{ color: "var(--text-muted)" }}>{p.basis}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.83rem", color: "var(--text-muted)" }}>
            SCC = Standard Contractual Clauses (Τυποποιημένες Συμβατικές Ρήτρες ΕΕ)
          </p>
        </section>

        {/* 8. GDPR */}
        <section id="gdpr" className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--success)" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>8. Δικαιώματά σας (GDPR)</h2>
          <p style={{ marginBottom: "1rem" }}>
            Βάσει του GDPR (Κανονισμός ΕΕ 2016/679), έχετε τα ακόλουθα δικαιώματα:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
            {[
              { right: "Δικαίωμα πρόσβασης", desc: "Να λάβετε αντίγραφο των δεδομένων σας" },
              { right: "Δικαίωμα διόρθωσης", desc: "Να διορθωθούν ανακριβή δεδομένα" },
              { right: "Δικαίωμα διαγραφής", desc: "«Δικαίωμα στη λήθη» — διαγραφή υπό προϋποθέσεις" },
              { right: "Δικαίωμα εναντίωσης", desc: "Εναντίωση στην επεξεργασία για σκοπούς marketing" },
              { right: "Δικαίωμα περιορισμού", desc: "Περιορισμός επεξεργασίας υπό προϋποθέσεις" },
              { right: "Δικαίωμα φορητότητας", desc: "Λήψη δεδομένων σε δομημένο μορφότυπο" },
            ].map((item) => (
              <div key={item.right} style={{ padding: "0.75rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.25rem" }}>{item.right}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ marginBottom: "0.5rem" }}>
            Για άσκηση δικαιωμάτων, επικοινωνήστε:{" "}
            <a href="mailto:info@kad2025.gr" style={{ color: "var(--primary)", fontWeight: 600 }}>
              info@kad2025.gr
            </a>
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Έχετε επίσης δικαίωμα υποβολής καταγγελίας στην <strong>Αρχή Προστασίας Δεδομένων
            Προσωπικού Χαρακτήρα (ΑΠΔΠΧ)</strong>:{" "}
            <a href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>
              www.dpa.gr
            </a>
          </p>
        </section>

        {/* 9. Ασφάλεια */}
        <section id="asfalia" className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>9. Ασφάλεια Δεδομένων</h2>
          <p style={{ marginBottom: "0.75rem" }}>
            Λαμβάνουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων:
          </p>
          <ul style={{ paddingLeft: "1.25rem" }}>
            <li>Αποκλειστική λειτουργία μέσω <strong>HTTPS/TLS</strong> (κρυπτογραφημένη επικοινωνία)</li>
            <li>Χρήση <strong>Cloudflare</strong> για προστασία από DDoS και κακόβουλη κυκλοφορία</li>
            <li>Δεν αποθηκεύουμε κωδικούς, αριθμούς καρτών ή ευαίσθητα προσωπικά δεδομένα</li>
            <li>Περιορισμένη πρόσβαση στα δεδομένα analytics — μόνο για διαχειριστές</li>
          </ul>
        </section>

        {/* 10. Αλλαγές */}
        <section id="allages" className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>10. Αλλαγές στην Πολιτική</h2>
          <p style={{ marginBottom: "0.75rem" }}>
            Ενδέχεται να ενημερώνουμε την παρούσα Πολιτική Απορρήτου για να αντικατοπτρίζει αλλαγές
            στις πρακτικές μας ή στη νομοθεσία. Κάθε αλλαγή αναρτάται σε αυτή τη σελίδα με
            ενημερωμένη ημερομηνία στην κορυφή.
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Για σημαντικές αλλαγές που επηρεάζουν τα δικαιώματά σας, θα προσπαθήσουμε να σας
            ενημερώσουμε με εμφανή τρόπο στην Ιστοσελίδα.
          </p>
        </section>

        {/* 11. Επικοινωνία */}
        <section id="epikoinonia" className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>11. Επικοινωνία</h2>
          <p style={{ marginBottom: "0.75rem" }}>
            Για οποιαδήποτε ερώτηση σχετικά με αυτή την Πολιτική Απορρήτου ή την επεξεργασία
            των δεδομένων σας:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@kad2025.gr" style={{ color: "var(--primary)", fontWeight: 600 }}>
              info@kad2025.gr
            </a>
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
            Θα απαντήσουμε εντός 30 ημερών, όπως προβλέπεται από τον GDPR.
          </p>
        </section>

      </div>

      {/* Footer links */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
        <Link href="/terms" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>📄 Όροι Χρήσης</Link>
        <Link href="/about" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>ℹ️ Σχετικά με εμάς</Link>
        <Link href="/contact" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>✉️ Επικοινωνία</Link>
      </div>
    </div>
  );
}
