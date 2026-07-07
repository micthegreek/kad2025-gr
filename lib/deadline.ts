// Κοινή πηγή αλήθειας για την προθεσμία διορθώσεων ΚΑΔ.
// Η 30/10/2026 είναι διαθέσιμη ημέρα υποβολής → deadline = τέλος ημέρας (Ελλάδα +02:00, DST λήγει 25/10).
export const KAD_DEADLINE_MS = new Date("2026-10-30T23:59:59+02:00").getTime();

export function daysToDeadline(now: number = Date.now()): number {
  return Math.max(0, Math.floor((KAD_DEADLINE_MS - now) / 86400000));
}
