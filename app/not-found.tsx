import type { Metadata } from "next";
import SmartNotFound from "@/components/SmartNotFound";

export const metadata: Metadata = {
  title: "Η σελίδα δεν βρέθηκε | kad2025.gr",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <SmartNotFound />;
}
