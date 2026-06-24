import type { CaseStudyContent } from "@/types/case-study";
import { roboticArmCaseStudy } from "@/data/case-studies/robotic-arm";
import { waterborneRescueVesselCaseStudy } from "@/data/case-studies/waterborne-rescue-vessel";

const caseStudyRegistry: Record<string, CaseStudyContent> = {
  "robotic-arm": roboticArmCaseStudy,
  "waterborne-rescue-vessel": waterborneRescueVesselCaseStudy,
};

export function getCaseStudy(slug: string): CaseStudyContent | undefined {
  return caseStudyRegistry[slug];
}
