"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { DevelopmentVersion } from "@/types/case-study";
import { animationConfig } from "@/config/animation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CaseStudySection } from "@/components/projects/case-study/CaseStudySection";
import { ProjectCallout } from "@/components/projects/case-study/ProjectCallout";
import { cn } from "@/lib/utils";

interface DevelopmentTimelineProps {
  versions: DevelopmentVersion[];
}

type VersionImage = {
  src: string;
  alt: string;
  objectFit?: "cover" | "contain";
};

function getVersionImages(version: DevelopmentVersion): VersionImage[] {
  return [
    version.image && {
      src: version.image,
      alt: version.imageAlt ?? version.title,
      objectFit: version.objectFit,
    },
    version.secondaryImage && {
      src: version.secondaryImage,
      alt: version.secondaryImageAlt ?? version.title,
      objectFit: version.secondaryObjectFit,
    },
    version.tertiaryImage && {
      src: version.tertiaryImage,
      alt: version.tertiaryImageAlt ?? version.title,
      objectFit: version.tertiaryObjectFit,
    },
  ].filter(Boolean) as VersionImage[];
}

function DetailList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone?: "default" | "issue";
}) {
  if (items.length === 0) return null;

  return (
    <div>
      <h4
        className={cn(
          "text-[10px] font-medium uppercase tracking-[0.12em]",
          tone === "issue" ? "text-accent-purple/70" : "text-text-subtle",
        )}
      >
        {title}
      </h4>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-[12px] leading-relaxed text-text-muted sm:text-[13px]"
          >
            <span
              className={cn(
                "mt-1.5 h-1 w-1 shrink-0 rounded-full",
                tone === "issue" ? "bg-accent-purple/50" : "bg-accent-cyan/45",
              )}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineImageCell({
  image,
  className,
  priority,
}: {
  image: VersionImage;
  className?: string;
  priority?: boolean;
}) {
  const isContain = image.objectFit === "contain";

  return (
    <div
      className={cn(
        "relative min-h-[200px] overflow-hidden rounded-md border border-border-subtle bg-[#121110] sm:min-h-[240px] lg:min-h-0",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        className={cn(
          isContain
            ? "object-contain object-center p-3 sm:p-4"
            : "object-cover object-center",
        )}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
      />
    </div>
  );
}

function VersionImageGallery({ version }: { version: DevelopmentVersion }) {
  const images = getVersionImages(version);
  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <TimelineImageCell
        image={images[0]}
        priority
        className="aspect-[16/10] min-h-[220px] sm:min-h-[280px] lg:aspect-[16/9] lg:min-h-[380px] xl:min-h-[440px]"
      />
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
        {images.map((image, index) => (
          <TimelineImageCell
            key={image.src}
            image={image}
            priority={index === 0}
            className="aspect-[4/3] min-h-[220px] sm:min-h-[260px] lg:aspect-[5/4] lg:min-h-[320px] xl:min-h-[380px]"
          />
        ))}
      </div>
    );
  }

  const [primary, ...rest] = images;

  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:gap-5 lg:min-h-[400px] xl:min-h-[480px]">
      <TimelineImageCell
        image={primary}
        priority
        className="aspect-[4/3] min-h-[220px] sm:min-h-[260px] lg:col-span-1 lg:row-span-2 lg:aspect-auto lg:min-h-full"
      />
      {rest.map((image) => (
        <TimelineImageCell
          key={image.src}
          image={image}
          className="aspect-[4/3] min-h-[200px] sm:min-h-[220px] lg:aspect-auto lg:min-h-0"
        />
      ))}
    </div>
  );
}

function VersionTextContent({ version }: { version: DevelopmentVersion }) {
  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-accent-cyan/80">
          {version.label}
        </span>
        <h4 className="mt-1 text-lg font-medium text-text-primary sm:text-xl">
          {version.title}
        </h4>
        <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-text-muted sm:text-[14px]">
          {version.summary}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        <DetailList title="What changed" items={version.changes} />
        <DetailList title="What improved" items={version.improvements} />
        <DetailList
          title="Issues & fixes"
          items={version.issues}
          tone="issue"
        />
      </div>

      <ProjectCallout label="Design lesson" tone="lesson">
        {version.lesson}
      </ProjectCallout>
    </div>
  );
}

function VersionDetail({ version }: { version: DevelopmentVersion }) {
  const hasImages = getVersionImages(version).length > 0;

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      {hasImages && (
        <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <VersionImageGallery version={version} />
          </div>
        </div>
      )}

      <div className="rounded-md border border-border-subtle bg-surface-elevated/15 p-4 sm:p-5 lg:p-7">
        <VersionTextContent version={version} />
      </div>
    </div>
  );
}

export function DevelopmentTimeline({ versions }: DevelopmentTimelineProps) {
  const [activeId, setActiveId] = useState(versions[0]?.id ?? "");
  const reducedMotion = useReducedMotion();
  const motionEnabled =
    animationConfig.scrollReveals &&
    !(animationConfig.reducedMotionFallback && reducedMotion);

  const active = versions.find((v) => v.id === activeId) ?? versions[0];

  return (
    <CaseStudySection
      id="development-timeline"
      title="Development Timeline"
      subtitle="Four major iterations from concept sketch to pool-validated prototype."
    >
      {/* Desktop horizontal stepper */}
      <div className="hidden md:block">
        <div className="relative flex items-start justify-between gap-2">
          <div
            className="absolute left-0 right-0 top-3 h-px bg-border-subtle"
            aria-hidden
          />
          {versions.map((version) => {
            const isActive = version.id === activeId;

            return (
              <button
                key={version.id}
                type="button"
                onClick={() => setActiveId(version.id)}
                className="group relative z-10 flex flex-1 flex-col items-center gap-1.5 px-1 text-center"
              >
                <span
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full border font-mono text-[10px] transition-all duration-200",
                    isActive
                      ? "border-accent-cyan/60 bg-accent-cyan/15 text-accent-cyan shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                      : "border-border-subtle bg-surface-base text-text-muted group-hover:border-accent-cyan/35 group-hover:text-text-primary",
                  )}
                >
                  {version.label.replace("V", "")}
                </span>
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-wider transition-colors",
                    isActive ? "text-accent-cyan" : "text-text-muted/60",
                  )}
                >
                  {version.label}
                </span>
                <span
                  className={cn(
                    "max-w-[9rem] text-[12px] leading-snug transition-colors",
                    isActive
                      ? "font-medium text-text-primary"
                      : "text-text-muted group-hover:text-text-muted/90",
                  )}
                >
                  {version.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile vertical stepper */}
      <div className="space-y-0 md:hidden">
        {versions.map((version, index) => {
          const isActive = version.id === activeId;
          const isLast = index === versions.length - 1;

          return (
            <button
              key={version.id}
              type="button"
              onClick={() => setActiveId(version.id)}
              className="group relative flex w-full gap-3 pb-4 text-left last:pb-0"
            >
              {!isLast && (
                <span className="absolute left-[11px] top-6 h-[calc(100%-12px)] w-px bg-border-subtle" />
              )}
              <span
                className={cn(
                  "relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] transition-colors",
                  isActive
                    ? "border-accent-cyan/60 bg-accent-cyan/15 text-accent-cyan"
                    : "border-border-subtle bg-surface-elevated text-text-muted",
                )}
              >
                {version.label.replace("V", "")}
              </span>
              <div className="flex-1 pt-0.5">
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-wider",
                    isActive ? "text-accent-cyan" : "text-text-muted/60",
                  )}
                >
                  {version.label}
                </span>
                <p
                  className={cn(
                    "mt-0.5 text-sm font-medium",
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

      <div className="mt-6 lg:mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={motionEnabled ? { opacity: 0, y: 8 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={motionEnabled ? { opacity: 0, y: -6 } : undefined}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <VersionDetail version={active} />
          </motion.div>
        </AnimatePresence>
      </div>
    </CaseStudySection>
  );
}
