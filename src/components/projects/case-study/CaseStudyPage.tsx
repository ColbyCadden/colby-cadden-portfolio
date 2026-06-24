import type { CaseStudyContent } from "@/types/case-study";
import { CaseStudyShell } from "@/components/projects/case-study/CaseStudyShell";
import { EngineeringCaseStudyPage } from "@/components/projects/case-study/EngineeringCaseStudyPage";
import { ProjectHero } from "@/components/projects/case-study/ProjectHero";
import { SpecGrid } from "@/components/projects/case-study/SpecGrid";
import { TechnicalSection } from "@/components/projects/case-study/TechnicalSection";
import {
  VersionTimeline,
  V3DirectionPanel,
} from "@/components/projects/case-study/VersionTimeline";
import { VisualGallery } from "@/components/projects/case-study/VisualBlock";
import { LogbookSection } from "@/components/projects/case-study/LogbookSection";
import { getProjectNavigation } from "@/data/projects";
import { ProjectCTA } from "@/components/projects/case-study/ProjectCTA";
import { StorySectionGallery } from "@/components/projects/case-study/StorySectionGallery";
import { FinalResultGallery } from "@/components/projects/case-study/FinalResultGallery";
import { StoryImage } from "@/components/projects/case-study/StoryImage";

interface CaseStudyPageProps {
  content: CaseStudyContent;
}

export function CaseStudyPage({ content }: CaseStudyPageProps) {
  if (content.developmentVersions && content.developmentVersions.length > 0) {
    return <EngineeringCaseStudyPage content={content} />;
  }

  const {
    meta,
    spec,
    sections,
    versions,
    v3Direction,
    visuals,
    logbook,
    explodedCompare,
    overviewImages,
    storySections,
    finalResult,
  } = content;

  const projectNav = getProjectNavigation(meta.slug);

  const engineeringProblem = sections.find((s) => s.id === "engineering-problem");
  const overviewSection = sections.find((s) => s.id === "project-overview");
  const cadSection = sections.find((s) => s.id === "cad-fabrication");
  const embeddedSection = sections.find((s) => s.id === "embedded-control");

  const hasVersionTimeline = versions.length > 0;
  const hasV3Direction = v3Direction.focus.length > 0;
  const hasLogbook =
    Boolean(logbook?.statusNote) || (logbook?.nextSteps.length ?? 0) > 0;

  return (
    <CaseStudyShell>
      <ProjectHero meta={meta} explodedCompare={explodedCompare} />
      <SpecGrid items={spec} />

      {engineeringProblem && <TechnicalSection section={engineeringProblem} />}
      {overviewSection && <TechnicalSection section={overviewSection} />}

      {overviewImages && overviewImages.length > 0 && (
        <section className="py-8 lg:py-10">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:gap-10">
            {overviewImages.map((image, index) => (
              <StoryImage
                key={image.id}
                image={image}
                size="sm"
                className={index === 0 ? "sm:max-w-[min(100%,24rem)]" : "sm:ml-auto sm:max-w-[min(100%,20rem)]"}
              />
            ))}
          </div>
        </section>
      )}

      {hasVersionTimeline && (
        <VersionTimeline versions={versions} label="V1 → V2 Timeline" />
      )}

      {hasV3Direction && (
        <V3DirectionPanel label={v3Direction.label} focus={v3Direction.focus} />
      )}

      {cadSection && <TechnicalSection section={cadSection} />}
      {embeddedSection && <TechnicalSection section={embeddedSection} />}

      {visuals.length > 0 && <VisualGallery assets={visuals} />}

      {storySections?.map((section) => (
        <StorySectionGallery key={section.id} section={section} />
      ))}

      {finalResult && <FinalResultGallery content={finalResult} />}

      {hasLogbook && logbook && <LogbookSection logbook={logbook} />}

      <ProjectCTA
        previousProject={projectNav.previousProject}
        nextProject={projectNav.nextProject}
      />
    </CaseStudyShell>
  );
}
