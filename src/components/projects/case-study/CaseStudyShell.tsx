"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyShellProps {
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
}

export function CaseStudyShell({
  children,
  backHref = "/#projects",
  backLabel = "Back to Projects",
}: CaseStudyShellProps) {
  return (
    <div className="min-h-screen bg-surface-blueprint text-text-primary">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-accent-purple/[0.02] via-transparent to-transparent" />

      <header className="sticky top-0 z-40 border-b border-accent-cyan/10 bg-surface-blueprint/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-text-muted transition-colors hover:text-accent-cyan"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {backLabel}
          </Link>
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-text-muted transition-colors hover:text-accent-cyan"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
        </div>
      </header>

      <main className={cn("relative z-10 mx-auto max-w-5xl px-6 lg:px-8")}>
        {children}
      </main>
    </div>
  );
}
