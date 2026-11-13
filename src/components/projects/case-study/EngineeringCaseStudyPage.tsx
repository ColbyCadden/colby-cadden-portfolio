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
              <p className="text-[14px] leading-relaxed text-text-muted sm:text-[15px]">
                {objective.body}
              </p>
            )}
            {objectiveImages.length > 0 && (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-[1.36fr_1.36fr_1.98fr]">
                {objectiveImages.map((image, index) => {
                  const isPool = index === objectiveImages.length - 1;

                  return (
                    <div
                      key={image.id}
                      className={isPool ? "col-span-2 lg:col-span-1" : undefined}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={isPool ? 1024 : 755}
                        height={isPool ? 517 : 555}
                        className={
                          isPool
                            ? "aspect-[1024/517] h-auto w-full rounded-md object-cover"
                            : "aspect-[755/555] h-auto w-full rounded-md object-cover"
                        }
                        sizes={
                          isPool
                            ? "(max-width: 1024px) 92vw, 520px"
                            : "(max-width: 1024px) 46vw, 360px"
                        }
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </CaseStudySection>
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
              <ProjectCallout label="Outcome">
                {logbook.statusNote}
              </ProjectCallout>
            )}
          </div>
        </CaseStudySection>
      )}

      {developmentVersions && developmentVersions.length > 0 && (
        <DevelopmentTimeline versions={developmentVersions} />
      )}

      <ProjectCTA
        previousProject={projectNav.previousProject}
        nextProject={projectNav.nextProject}
      />
    </CaseStudyShell>
  );
}
