import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Μαζική Αναζήτηση ΚΑΔ",
};

export default function BulkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
