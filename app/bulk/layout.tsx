import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Μαζική Αναζήτηση ΚΑΔ | kad2025.gr",
};

export default function BulkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
