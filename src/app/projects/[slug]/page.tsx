import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import { getCaseStudy } from "@/data/case-studies/registry";
import { CaseStudyPage } from "@/components/projects/case-study/CaseStudyPage";
import { LegacyProjectPage } from "@/components/projects/LegacyProjectPage";
import { PortfolioProjectPage } from "@/components/projects/PortfolioProjectPage";
import { HackathonsProjectPage } from "@/components/projects/HackathonsProjectPage";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (caseStudy) {
    return {
      title: `${caseStudy.meta.title}, Colby Cadden`,
      description: caseStudy.meta.subtitle,
    };
  }

  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title}, Colby Cadden`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (caseStudy) {
    return <CaseStudyPage content={caseStudy} />;
  }

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  if (project.textOnly) {
    return <PortfolioProjectPage project={project} />;
  }

  if (project.home.layout === "hackathon") {
    return <HackathonsProjectPage project={project} />;
  }

  return <LegacyProjectPage project={project} />;
}
