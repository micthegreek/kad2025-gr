"use client";
import { useEffect } from "react";
import { trackPageToolUsed } from "@/lib/ga4";

export default function TrackPageTool({ toolName }: { toolName: string }) {
  useEffect(() => {
    trackPageToolUsed(toolName);
  }, [toolName]);
  return null; // renders nothing
}
