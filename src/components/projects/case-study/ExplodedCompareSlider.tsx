"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { ExplodedCompareContent } from "@/types/case-study";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface ExplodedCompareSliderProps extends ExplodedCompareContent {
  embedded?: boolean;
}

export function ExplodedCompareSlider({
  assembledSrc,
  explodedSrc,
  assembledAlt,
  explodedAlt,
  label = "Assembly vs exploded view",
  versionTitle,
  embedded = false,
}: ExplodedCompareSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (event: React.PointerEvent) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(event.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <Wrapper className={embedded ? "mt-10" : "py-10 lg:py-12"}>
      {!embedded && (
        <SectionHeading
          title={label}
          subtitle="Drag the slider to compare assembled and exploded views."
          level="subsection"
          className="mb-5"
        />
      )}

      <div
        className={cn(
          "overflow-hidden rounded-xl",
          "border border-accent-gold/20 bg-surface-elevated/40",
          "shadow-[0_20px_48px_-28px_rgba(0,0,0,0.55)]",
        )}
      >
        {embedded && (
          <p className="border-b border-border-subtle px-4 py-3 text-[13px] text-text-muted sm:px-5">
            Drag to compare assembled and exploded views
          </p>
        )}

        <div
          ref={containerRef}
          className="relative aspect-[16/10] cursor-ew-resize select-none bg-[#ece8e2]"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <Image
            src={explodedSrc}
            alt={explodedAlt}
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 900px"
            draggable={false}
          />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src={assembledSrc}
              alt={assembledAlt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 900px"
              draggable={false}
            />
          </div>

          <div
            className="absolute inset-y-0 z-10 w-0.5 bg-accent-gold/70 shadow-[0_0_12px_rgba(168,149,106,0.35)]"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          />

          <div
            className="absolute top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-accent-gold/50 bg-background/95 text-accent-gold shadow-lg backdrop-blur-sm"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          >
            <span className="text-sm leading-none">↔</span>
          </div>

          <span className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-accent-gold/25 bg-background/85 px-3 py-1 text-[12px] font-medium text-text-primary backdrop-blur-sm">
            Assembled
          </span>
          <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-accent-gold/25 bg-background/85 px-3 py-1 text-[12px] font-medium text-text-primary backdrop-blur-sm">
            Exploded
          </span>

          {versionTitle && (
            <span className="pointer-events-none absolute left-4 top-4 rounded-md border border-accent-gold/30 bg-background/90 px-3 py-1.5 font-display text-lg font-normal tracking-tight text-text-primary shadow-sm backdrop-blur-sm sm:text-xl">
              {versionTitle}
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

function Wrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <section className={className}>{children}</section>;
}
