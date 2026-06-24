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
      <ul className="mt-1.5 space-y-1">
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

function TimelineImage({
  src,
  alt,
  objectFit,
  className,
}: {
  src: string;
  alt: string;
  objectFit?: "cover" | "contain";
  className?: string;
}) {
  const isContain = objectFit === "contain";

  return (
    <div
      className={cn(
        "relative h-36 w-full shrink-0 sm:h-40 lg:min-h-[9.5rem] lg:max-h-[12rem] lg:flex-1",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          isContain ? "object-contain object-center" : "object-cover object-center",
        )}
        sizes="(max-width: 1024px) 90vw, 360px"
      />
    </div>
  );
}

function VersionImages({
  version,
  className,
}: {
  version: DevelopmentVersion;
  className?: string;
}) {
  const images = [
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
  ].filter(Boolean) as { src: string; alt: string; objectFit?: "cover" | "contain" }[];

  if (images.length === 0) return null;

  const sideBySide = images.length > 1;

  return (
    <div
      className={cn(
        sideBySide
          ? cn(
              "grid gap-2 sm:gap-3",
              images.length >= 3 ? "grid-cols-3" : "grid-cols-2",
            )
          : "flex flex-col gap-3",
        className,
      )}
    >
      {images.map((image) => (
        <TimelineImage
          key={image.src}
          src={image.src}
          alt={image.alt}
          objectFit={image.objectFit}
          className={
            sideBySide
              ? "h-32 sm:h-36 lg:h-36 lg:min-h-0 lg:max-h-none"
              : undefined
          }
        />
      ))}
    </div>
  );
}

function versionHasImages(version: DevelopmentVersion) {
  return Boolean(
    version.image || version.secondaryImage || version.tertiaryImage,
  );
}

function versionImageCount(version: DevelopmentVersion) {
  return [version.image, version.secondaryImage, version.tertiaryImage].filter(
    Boolean,
  ).length;
}

function VersionDetail({ version }: { version: DevelopmentVersion }) {
  const hasImages = versionHasImages(version);
  const wideGallery = versionImageCount(version) >= 3;

  return (
    <div className="flex flex-col gap-4">
      {hasImages && wideGallery && <VersionImages version={version} />}

      <div
        className={cn(
          "flex flex-col gap-4",
          !wideGallery &&
            "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,36%)] lg:items-start lg:gap-5",
        )}
      >
        <div className="flex min-w-0 flex-col gap-3.5">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent-cyan/80">
              {version.label}
            </span>
            <h4 className="mt-0.5 text-[15px] font-medium text-text-primary">
              {version.title}
            </h4>
            <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">
              {version.summary}
            </p>
          </div>

          {hasImages && !wideGallery && (
            <div className="lg:hidden">
              <VersionImages version={version} />
            </div>
          )}

          <div className="grid gap-3.5 sm:grid-cols-2">
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

        {hasImages && !wideGallery && (
          <div className="hidden lg:block">
            <VersionImages version={version} />
          </div>
        )}
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

      {/* Active version detail, single panel, image inline with text */}
      <div className="mt-6 rounded-md border border-border-subtle bg-surface-elevated/15 lg:mt-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={motionEnabled ? { opacity: 0, y: 6 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={motionEnabled ? { opacity: 0, y: -4 } : undefined}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="p-4 sm:p-5"
          >
            <VersionDetail version={active} />
          </motion.div>
        </AnimatePresence>
      </div>
    </CaseStudySection>
  );
}
