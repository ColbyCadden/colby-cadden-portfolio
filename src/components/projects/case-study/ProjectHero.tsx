import type { CaseStudyMeta, ExplodedCompareContent } from "@/types/case-study";
import { BlueprintFrame } from "@/components/projects/case-study/BlueprintFrame";
import { HeroCollage } from "@/components/projects/case-study/HeroCollage";
import { ExplodedCompareSlider } from "@/components/projects/case-study/ExplodedCompareSlider";
import { cn } from "@/lib/utils";

interface ProjectHeroProps {
  meta: CaseStudyMeta;
  compact?: boolean;
  explodedCompare?: ExplodedCompareContent;
}

const statusBadgeStyles = {
  success: {
    badge:
      "border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-400/90",
    dot: "bg-emerald-400/70",
  },
  default: {
    badge:
      "border-accent-purple/25 bg-accent-purple/[0.06] text-accent-purple/80",
    dot: "bg-accent-purple/60",
  },
};

export function ProjectHero({ meta, compact, explodedCompare }: ProjectHeroProps) {
  const statusStyle =
    statusBadgeStyles[meta.statusTone === "success" ? "success" : "default"];

  return (
    <section
      className={
        compact
          ? "border-b border-accent-cyan/10 py-10 lg:py-12"
          : "border-b border-accent-cyan/10 py-12 lg:py-16"
      }
    >
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-md border px-2.5 py-1 font-mono text-[10px] tracking-wider",
              meta.statusTone === "success" ? "normal-case" : "uppercase",
              statusStyle.badge,
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full animate-pulse",
                statusStyle.dot,
              )}
            />
            {meta.status}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted/60">
            {meta.projectType}
          </span>
        </div>

        <h1 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
          {meta.title}
        </h1>

        {meta.subtitle && (
          <p className="max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
            {meta.subtitle}
          </p>
        )}

        {meta.subtitleBullets && meta.subtitleBullets.length > 0 && (
          <ul className="max-w-2xl space-y-1.5 text-sm leading-relaxed text-text-muted sm:text-base">
            {meta.subtitleBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-gold/70" />
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {meta.endEffectorTitle ? (
          <h2 className="pt-1 font-display text-xl font-normal tracking-tight text-accent-gold sm:text-2xl">
            {meta.endEffectorTitle}
          </h2>
        ) : (
          meta.tags &&
          meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-accent-cyan/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-cyan/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          )
        )}
      </div>

      {explodedCompare ? (
        <ExplodedCompareSlider {...explodedCompare} embedded />
      ) : (
        !meta.hideHeroImage && (
          <BlueprintFrame label="FIG.01, HERO" className={compact ? "mt-8" : "mt-10"}>
            <HeroCollage meta={meta} compact={compact} />
          </BlueprintFrame>
        )
      )}
    </section>
  );
}
