import type { CaseStudyContent } from "@/types/case-study";
import Image from "next/image";
import { CaseStudyShell } from "@/components/projects/case-study/CaseStudyShell";
import { ProjectHero } from "@/components/projects/case-study/ProjectHero";
import { CaseStudySection } from "@/components/projects/case-study/CaseStudySection";
import { DevelopmentTimeline } from "@/components/projects/case-study/DevelopmentTimeline";
import { ProcessBlockSection } from "@/components/projects/case-study/ProcessBlockSection";
import { ProjectCallout } from "@/components/projects/case-study/ProjectCallout";
import { getProjectNavigation } from "@/data/projects";
import { ProjectCTA } from "@/components/projects/case-study/ProjectCTA";

interface EngineeringCaseStudyPageProps {
  content: CaseStudyContent;
}

export function EngineeringCaseStudyPage({ content }: EngineeringCaseStudyPageProps) {
  const {
    meta,
    sections,
    developmentVersions,
    processBlocks,
    overviewImages,
    logbook,
  } = content;

  const objective = sections.find((s) => s.id === "engineering-problem");
  const objectiveImages = overviewImages ?? [];
  const designBlock = processBlocks?.find((b) => b.id === "design-planning");
  const buildBlock = processBlocks?.find((b) => b.id === "build-process");
  const testingBlock = processBlocks?.find((b) => b.id === "testing-validation");
  const projectNav = getProjectNavigation(meta.slug);

  return (
    <CaseStudyShell>
      <ProjectHero meta={meta} compact />

      {objective && (
        <CaseStudySection
          id="objective"
          title="Objective"
          bordered={false}
        >
          <div className="flex flex-col gap-5">
            {objective.body && (
              <p className="max-w-2xl text-[14px] leading-relaxed text-text-muted sm:text-[15px]">
                {objective.body}
              </p>
            )}
            {objectiveImages.length > 0 && (
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                {objectiveImages.map((image, index) => {
                  const isPool = index === objectiveImages.length - 1;

                  return (
                    <div
                      key={image.id}
                      className={
                        isPool
                          ? "w-full min-w-0 flex-1"
                          : "w-full shrink-0 sm:w-[min(22%,190px)]"
                      }
                    >
                      <div className="overflow-hidden rounded-md border border-border-subtle/70 bg-white">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={isPool ? 1024 : 755}
                          height={isPool ? 517 : 555}
                          className="h-auto w-full object-contain"
                          sizes={
                            isPool
                              ? "(max-width: 640px) 90vw, 480px"
                              : "(max-width: 640px) 90vw, 190px"
                          }
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </CaseStudySection>
      )}

      {developmentVersions && developmentVersions.length > 0 && (
        <DevelopmentTimeline versions={developmentVersions} />
      )}

      {designBlock && (
        <CaseStudySection
          id="design-planning"
          title={designBlock.title}
          subtitle="Early CAD and planning before committing to prints."
        >
          <ProcessBlockSection block={designBlock} layout="strip" />
        </CaseStudySection>
      )}

      {buildBlock && (
        <CaseStudySection
          id="build-process"
          title={buildBlock.title}
          subtitle="From printed parts to wired, assembled prototype."
        >
          <ProcessBlockSection block={buildBlock} layout="strip" />
        </CaseStudySection>
      )}

      {testingBlock && (
        <CaseStudySection
          id="testing"
          title={testingBlock.title}
          subtitle="Pool validation and iteration feedback loops."
        >
          <div className="space-y-6">
            <ProcessBlockSection
              block={testingBlock}
              layout="strip"
              compactImages
            />
            {logbook?.statusNote && (
              <ProjectCallout label="Outcome" className="max-w-2xl">
                {logbook.statusNote}
              </ProjectCallout>
            )}
          </div>
        </CaseStudySection>
      )}

      <ProjectCTA
        previousProject={projectNav.previousProject}
        nextProject={projectNav.nextProject}
      />
    </CaseStudyShell>
  );
}
