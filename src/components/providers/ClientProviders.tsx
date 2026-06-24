"use client";

import { CursorGlow } from "@/components/ui/CursorGlow";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CursorGlow />
      {children}
    </>
  );
}
