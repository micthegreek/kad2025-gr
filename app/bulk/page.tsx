import type { Metadata } from "next";
import BulkClient from "./BulkClient";

export const metadata: Metadata = {
  title: "Μαζική Αντιστοίχιση ΚΑΔ 2008 → 2025 | Εργαλείο",
  description: "Εργαλείο μαζικής αντιστοίχισης ΚΑΔ 2008 σε ΚΑΔ 2025. Επικολλήστε έως 500 κωδικούς και λάβετε άμεσα αποτελέσματα σε Excel ή CSV.",
  alternates: { canonical: "https://www.kad2025.gr/bulk" },
  robots: { index: false, follow: true },
};

export default function BulkPage() {
  return <BulkClient />;
}
