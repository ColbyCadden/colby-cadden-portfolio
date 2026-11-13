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
    ...(version.extraImages ?? []),
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
        "relative min-h-[200px] overflow-hidden rounded-md sm:min-h-[240px] lg:min-h-0",
        !isContain && "border border-border-subtle",
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
            ? "object-contain object-center"
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

  if (images.length >= 4) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {images.map((image, index) => (
          <TimelineImageCell
            key={image.src}
            image={image}
            priority={index === 0}
            className="aspect-[4/3] min-h-0 sm:min-h-0"
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
        <p className="mt-2 text-[13px] leading-relaxed text-text-muted sm:text-[14px]">
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
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        {versions.map((version) => {
          const isActive = version.id === activeId;

          return (
            <button
              key={version.id}
              type="button"
              onClick={() => setActiveId(version.id)}
              aria-pressed={isActive}
              className={cn(
                "flex flex-col items-start rounded-lg border px-4 py-2 text-left transition-colors",
                isActive
                  ? "border-accent-cyan bg-accent-cyan/15 text-accent-cyan"
                  : "border-border-subtle bg-surface-elevated text-text-muted hover:border-accent-cyan/40 hover:text-text-primary",
              )}
            >
              <span className="font-mono text-xs uppercase tracking-wider">
                {version.label}
              </span>
              <span
                className={cn(
                  "mt-0.5 text-[12px] leading-snug",
                  isActive ? "text-text-primary" : "text-text-muted",
                )}
              >
                {version.title}
              </span>
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
