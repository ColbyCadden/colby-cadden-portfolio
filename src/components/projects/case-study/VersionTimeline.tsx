"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { VersionEntry } from "@/types/case-study";
import { animationConfig } from "@/config/animation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { BlueprintFrame } from "@/components/projects/case-study/BlueprintFrame";
import { VersionGalleryCollage } from "@/components/projects/case-study/VersionGalleryCollage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalSection } from "@/components/projects/case-study/TechnicalSection";
import { cn } from "@/lib/utils";

interface VersionTimelineProps {
  versions: VersionEntry[];
  label?: string;
}

export function VersionTimeline({
  versions,
  label = "Version Timeline",
}: VersionTimelineProps) {
  const [activeId, setActiveId] = useState(versions[0]?.id ?? "");
  const reducedMotion = useReducedMotion();
  const motionEnabled =
    animationConfig.scrollReveals &&
    !(animationConfig.reducedMotionFallback && reducedMotion);

  const active = versions.find((v) => v.id === activeId) ?? versions[0];

  return (
    <section className="py-10 lg:py-12">
      <SectionHeading title={label} level="subsection" className="mb-5" />

      <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:gap-10">
        <div className="relative space-y-0">
          {versions.map((version, index) => {
            const isActive = version.id === activeId;
            const isLast = index === versions.length - 1;

            return (
              <button
                key={version.id}
                type="button"
                onClick={() => setActiveId(version.id)}
                className="group relative flex w-full gap-4 pb-8 text-left last:pb-0"
              >
                {!isLast && (
                  <span className="absolute left-[11px] top-6 h-[calc(100%-8px)] w-px bg-accent-cyan/15" />
                )}

                <span
                  className={cn(
                    "relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] transition-colors",
                    isActive
                      ? "border-accent-cyan/60 bg-accent-cyan/15 text-accent-cyan"
                      : "border-border-subtle bg-surface-elevated text-text-muted group-hover:border-accent-cyan/30",
                  )}
                >
                  {version.version.replace("V", "")}
                </span>

                <div className="flex-1 pt-0.5">
                  <span
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-wider",
                      isActive ? "text-accent-cyan" : "text-text-muted/60",
                    )}
                  >
                    {version.version}
                  </span>
                  <p
                    className={cn(
                      "mt-0.5 text-sm font-medium transition-colors",
                      isActive ? "text-text-primary" : "text-text-muted",
                    )}
                  >
                    {version.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <BlueprintFrame label={`${active.version}, DETAIL`} variant="panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={motionEnabled ? { opacity: 0, y: 8 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={motionEnabled ? { opacity: 0, y: -8 } : undefined}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {active.gallery && active.gallery.length > 0 ? (
                <VersionGalleryCollage images={active.gallery} />
              ) : (
                active.image && (
                  <div className="relative aspect-[4/3] border-b border-accent-cyan/10">
                    <Image
                      src={active.image}
                      alt={active.imageAlt ?? active.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 600px"
                    />
                  </div>
                )
              )}

              <ul className="space-y-2.5 px-5 py-5 sm:px-6">
                {active.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/50" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {active.spec && active.spec.length > 0 && (
                <dl className="grid gap-px border-t border-accent-cyan/10 bg-accent-cyan/10 sm:grid-cols-2">
                  {active.spec.map((item) => (
                    <div
                      key={item.label}
                      className="bg-surface-blueprint/90 px-4 py-3.5 sm:px-5"
                    >
                      <dt className="text-[11px] font-medium uppercase tracking-wider text-text-subtle">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-[13px] leading-relaxed text-text-muted">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </motion.div>
          </AnimatePresence>
        </BlueprintFrame>
      </div>
    </section>
  );
}

interface V3DirectionProps {
  label: string;
  focus: string[];
}

export function V3DirectionPanel({ label, focus }: V3DirectionProps) {
  return (
    <TechnicalSection
      section={{
        id: "v3-direction",
        label,
        bullets: focus,
        variant: "direction",
      }}
    />
  );
}
