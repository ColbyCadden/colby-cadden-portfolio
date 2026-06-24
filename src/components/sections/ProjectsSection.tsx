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
    <section id="projects" ref={ref} className="relative border-t border-border-subtle pt-12 lg:pt-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="projects-intro-panel">
          <FadeIn>
            <SectionHeading
              title={projectsContent.title}
              subtitle={projectsContent.subtitle}
              tone="light"
            />
          </FadeIn>
        </div>

        <div className="pt-10 lg:pt-14">
          {homeProjectPreviews.map((project, index) => (
            <ProjectPreview key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
