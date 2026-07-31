import type { Metadata } from "next";
import SmartNotFound from "@/components/SmartNotFound";

export const metadata: Metadata = {
  title: "Η σελίδα δεν βρέθηκε",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <SmartNotFound />;
}
