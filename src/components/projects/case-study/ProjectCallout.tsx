import { cn } from "@/lib/utils";

interface ProjectCalloutProps {
  label: string;
  children: React.ReactNode;
  tone?: "default" | "lesson";
  className?: string;
}

export function ProjectCallout({
  label,
  children,
  tone = "default",
  className,
}: ProjectCalloutProps) {
  return (
    <aside
      className={cn(
        "rounded-md border px-4 py-3.5 sm:px-5",
        tone === "lesson"
          ? "border-accent-gold/25 bg-accent-gold/[0.06]"
          : "border-accent-cyan/15 bg-accent-cyan/[0.04]",
        className,
      )}
    >
      <p
        className={cn(
          "text-[10px] font-medium uppercase tracking-[0.12em]",
          tone === "lesson" ? "text-accent-gold/80" : "text-accent-cyan/70",
        )}
      >
        {label}
      </p>
      <div className="mt-2 text-[13px] leading-relaxed text-text-muted">
        {children}
      </div>
    </aside>
  );
}
