import { getNace21ForKad, type Nace21Entry } from "@/lib/nace21";

interface NaceDescriptionProps {
  kad2025?: string;
  naceData?: { division?: Nace21Entry; group?: Nace21Entry; class_?: Nace21Entry };
}

export function NaceDescription({ kad2025, naceData }: NaceDescriptionProps) {
  const data = naceData ?? (kad2025 ? getNace21ForKad(kad2025) : null);
  if (!data) return null;

  const entry = data.class_ ?? data.group ?? data.division;
  if (!entry) return null;

  return (
    <div className="card" style={{ marginBottom: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
      <h2 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
        📋 Περιγραφή δραστηριότητας (NACE 2.1)
      </h2>
      <p style={{ fontWeight: 600, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{entry.title}</p>

      {entry.description && (
        <div style={{ marginTop: "0.5rem" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--success, #16a34a)", marginBottom: "0.25rem" }}>
            Περιλαμβάνει:
          </p>
          {entry.description.length > 400 ? (
            <details>
              <summary style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text)", cursor: "pointer" }}>
                {entry.description.slice(0, 350)}... <span style={{ color: "var(--primary)", fontWeight: 600 }}>[Περισσότερα]</span>
              </summary>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text)", marginTop: "0.25rem" }}>
                {entry.description}
              </p>
            </details>
          ) : (
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text)" }}>
              {entry.description}
            </p>
          )}
        </div>
      )}

      {entry.excludes && (
        <div style={{ marginTop: "0.75rem" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent, #dc2626)", marginBottom: "0.25rem" }}>
            Εξαιρούνται:
          </p>
          {entry.excludes.length > 300 ? (
            <details>
              <summary style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--text-muted)", cursor: "pointer" }}>
                {entry.excludes.slice(0, 250)}... <span style={{ color: "var(--primary)", fontWeight: 600 }}>[Περισσότερα]</span>
              </summary>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--text-muted)", marginTop: "0.25rem" }}>
                {entry.excludes}
              </p>
            </details>
          ) : (
            <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--text-muted)" }}>
              {entry.excludes}
            </p>
          )}
        </div>
      )}

      <p style={{ marginTop: "0.75rem", fontSize: "0.7rem", color: "var(--text-muted)" }}>
        Πηγή: Επεξηγηματικές σημειώσεις ΣΤΑΚΟΔ/NACE Αναθ. 2.1 (ΕΛΣΤΑΤ)
      </p>
    </div>
  );
}
