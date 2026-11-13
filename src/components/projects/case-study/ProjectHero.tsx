import type { CaseStudyMeta, ExplodedCompareContent } from "@/types/case-study";
import { BlueprintFrame } from "@/components/projects/case-study/BlueprintFrame";
import { HeroCollage } from "@/components/projects/case-study/HeroCollage";
import { ExplodedCompareSlider } from "@/components/projects/case-study/ExplodedCompareSlider";

interface ProjectHeroProps {
  meta: CaseStudyMeta;
  compact?: boolean;
  explodedCompare?: ExplodedCompareContent;
}

export function ProjectHero({ meta, compact, explodedCompare }: ProjectHeroProps) {
  return (
    <section
      className={
        compact
          ? "border-b border-accent-cyan/10 py-10 lg:py-12"
          : "border-b border-accent-cyan/10 py-12 lg:py-16"
      }
    >
      <div className="space-y-5">
        <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted/60">
          {meta.projectType}
        </p>

        <h1 className="text-2xl font-semibold leading-tight tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
          {meta.title}
        </h1>

        {meta.subtitle && (
          <p className="text-sm leading-relaxed text-text-muted sm:text-base">
            {meta.subtitle}
          </p>
        )}

        {meta.subtitleBullets && meta.subtitleBullets.length > 0 && (
          <ul className="space-y-1.5 text-sm leading-relaxed text-text-muted sm:text-base">
            {meta.subtitleBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-gold/70" />
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {meta.endEffectorTitle && (
          <h2 className="pt-1 font-display text-xl font-normal tracking-tight text-accent-gold sm:text-2xl">
            {meta.endEffectorTitle}
          </h2>
        )}

        {meta.toolsSummary && (
          <p className="text-sm leading-relaxed text-text-muted sm:text-base">
            {meta.toolsSummary}
          </p>
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
