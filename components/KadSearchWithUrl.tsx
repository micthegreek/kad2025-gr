"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import KadSearch from "./KadSearch";

type Props = Omit<React.ComponentProps<typeof KadSearch>, "initialQuery">;

function Inner(props: Props) {
  const sp = useSearchParams();
  return <KadSearch {...props} initialQuery={sp.get("q") || ""} />;
}

export default function KadSearchWithUrl(props: Props) {
  return (
    <Suspense fallback={<KadSearch {...props} initialQuery="" />}>
      <Inner {...props} />
    </Suspense>
  );
}
