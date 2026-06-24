"use client";

import Image from "next/image";
import Link from "next/link";
import type { ProjectHomePreview } from "@/types";
import { FadeIn } from "@/components/ui/Reveal";
import { FirstPlaceMedal } from "@/components/ui/FirstPlaceMedal";

interface ProjectPreviewProps {
  project: ProjectHomePreview;
  index: number;
}

export function ProjectPreview({ project, index }: ProjectPreviewProps) {
  if (project.layout === "portfolio") {
    return (
      <FadeIn className="border-t border-border-subtle py-10 lg:py-12">
        <Link
          href={project.href}
          className="group flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-subtle">
              {String(index + 1).padStart(2, "0")}
            </p>
            {project.resultLine && (
              <p className="mt-3 text-[13px] font-medium tracking-wide text-accent-gold">
                {project.resultLine}
              </p>
            )}
            <h3 className="mt-2 font-display text-xl font-normal tracking-tight text-text-primary sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-text-muted sm:text-[15px]">
              {project.shortText}
            </p>
            <p className="mt-2 text-[12px] text-text-subtle">{project.metadata}</p>
          </div>
          <span className="shrink-0 text-[13px] font-medium text-text-muted transition-colors group-hover:text-text-primary">
            View project →
          </span>
        </Link>
      </FadeIn>
    );
  }

  const imageFirst = index % 2 === 1;
  const variant =
    project.layout === "hackathon"
      ? "split"
      : project.secondaryImage
        ? "featured"
        : "single";

  return (
    <FadeIn className="border-t border-border-subtle py-14 first:border-t-0 lg:py-20">
      <Link href={project.href} className="group block transition-transform duration-500 hover:-translate-y-0.5">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14 xl:gap-16">
          {imageFirst ? (
            <>
              <div className="order-2 md:order-1">
                <ProjectVisual project={project} variant={variant} />
              </div>
              <div className="order-1 md:order-2">
                <ProjectCopy project={project} index={index} />
              </div>
            </>
          ) : (
            <>
              <div className="order-1">
                <ProjectCopy project={project} index={index} />
              </div>
              <div className="order-2">
                <ProjectVisual project={project} variant={variant} />
              </div>
            </>
          )}
        </div>
      </Link>
    </FadeIn>
  );
}

function ProjectCopy({
  project,
  index,
}: {
  project: ProjectHomePreview;
  index: number;
}) {
  return (
    <div className="min-w-0 md:py-2">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-subtle">
        {String(index + 1).padStart(2, "0")}
      </p>
      {project.resultLine && (
        <p className="mt-3 text-[13px] font-medium tracking-wide text-accent-gold">
          {project.resultLine}
        </p>
      )}
      <h3 className="mt-2 font-display text-2xl font-normal tracking-[-0.01em] text-text-primary sm:text-[1.75rem]">
        {project.title}
      </h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-text-muted">
        {project.shortText}
      </p>
      <p className="mt-4 text-[13px] leading-relaxed text-text-subtle">
        {project.metadata}
      </p>
      <p className="mt-6 text-[13px] font-medium text-text-muted transition-colors group-hover:text-text-primary">
        View project →
      </p>
    </div>
  );
}

function ProjectVisual({
  project,
  variant,
}: {
  project: ProjectHomePreview;
  variant: "featured" | "split" | "single";
}) {
  if (variant === "split") {
    return (
      <div className="overflow-hidden rounded-lg border border-border-subtle transition-shadow duration-500 group-hover:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.65)]">
        <div className="grid grid-cols-2">
          <div className="relative aspect-[4/3] border-r border-border-subtle bg-surface-elevated">
            <Image
              src={project.thumbnail}
              alt="GeoHacks GNSS project"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 28vw"
            />
            <div
              className="absolute left-3 top-3 rounded-md bg-background/75 p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-sm"
              title="GeoHacks 2026, 1st Place"
            >
              <FirstPlaceMedal size="sm" />
              <span className="sr-only">GeoHacks 2026 first place</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-surface-elevated">
            <Image
              src={project.splitImage ?? project.thumbnail}
              alt="Hackathon team"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 28vw"
            />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <div className="relative overflow-hidden rounded-lg border border-border-subtle bg-surface-elevated transition-shadow duration-500 group-hover:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.65)]">
        <div className="relative aspect-[16/10]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
        {project.secondaryImage && (
          <div className="absolute bottom-4 right-4 w-[38%] overflow-hidden rounded-md shadow-[0_12px_40px_rgba(0,0,0,0.45)] ring-2 ring-background sm:bottom-5 sm:right-5 lg:w-[34%]">
            <div className="relative aspect-[4/3]">
              <Image
                src={project.secondaryImage}
                alt={`${project.title} detail`}
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border-subtle bg-surface-elevated transition-shadow duration-500 group-hover:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.65)]">
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.015]"
        sizes="(max-width: 768px) 100vw, 45vw"
      />
    </div>
  );
}
