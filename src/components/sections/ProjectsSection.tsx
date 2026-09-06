"use client";

import { useRef } from "react";
import { homeProjectPreviews } from "@/data/projects";
import { projectsContent } from "@/data/content";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Reveal";

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section id="projects" ref={ref} className="relative border-t border-border-subtle pt-8 lg:pt-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title={projectsContent.title} />
        </FadeIn>

        <div className="pt-4 lg:pt-6">
          {homeProjectPreviews.map((project, index) => (
            <ProjectPreview key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
