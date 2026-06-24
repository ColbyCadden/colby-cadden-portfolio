"use client";

import { animationConfig } from "@/config/animation";
import { cn } from "@/lib/utils";

interface BlueprintFrameProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  variant?: "default" | "panel";
}

export function BlueprintFrame({
  children,
  className,
  label,
  variant = "default",
}: BlueprintFrameProps) {
  const isPanel = variant === "panel";
  const showLines = animationConfig.blueprintLines && !isPanel;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg",
        isPanel
          ? "spec-panel-metallic"
          : "border border-accent-cyan/20 bg-surface-blueprint",
        className,
      )}
    >
      {showLines && (
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34,211,238,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />
          <div className="pointer-events-none absolute left-2.5 top-2.5 h-3.5 w-3.5 border-l border-t border-accent-cyan/25" />
          <div className="pointer-events-none absolute right-2.5 top-2.5 h-3.5 w-3.5 border-r border-t border-accent-cyan/25" />
          <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-3.5 w-3.5 border-b border-l border-accent-cyan/25" />
          <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-3.5 w-3.5 border-b border-r border-accent-cyan/25" />
        </>
      )}
      {label &&
        (isPanel ? (
          <div className="spec-panel-metallic-header relative z-10 px-5 py-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/35">
              {label}
            </span>
          </div>
        ) : (
          <span className="absolute left-3.5 top-3.5 z-10 font-mono text-[9px] uppercase tracking-[0.18em] text-accent-cyan/45">
            {label}
          </span>
        ))}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
