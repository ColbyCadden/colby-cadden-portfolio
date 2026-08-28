import type { CaseStudyContent } from "@/types/case-study";
import { roboticArmCaseStudy } from "@/data/case-studies/robotic-arm";
import { waterborneRescueVesselCaseStudy } from "@/data/case-studies/waterborne-rescue-vessel";
import { bearSprayQuickReleaseCaseStudy } from "@/data/case-studies/bear-spray-quick-release";

const caseStudyRegistry: Record<string, CaseStudyContent> = {
  "robotic-arm": roboticArmCaseStudy,
  "bear-spray-quick-release": bearSprayQuickReleaseCaseStudy,
  "waterborne-rescue-vessel": waterborneRescueVesselCaseStudy,
};

export function getCaseStudy(slug: string): CaseStudyContent | undefined {
  return caseStudyRegistry[slug];
}
