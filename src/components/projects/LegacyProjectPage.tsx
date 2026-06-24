import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/types";
import { getProjectNavigation } from "@/data/projects";
import { BlueprintFrame } from "@/components/projects/case-study/BlueprintFrame";
import { ProjectCTA } from "@/components/projects/case-study/ProjectCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface LegacyProjectPageProps {
  project: Project;
  children?: React.ReactNode;
}

export function LegacyProjectPage({
  project,
  children,
}: LegacyProjectPageProps) {
  const projectNav = getProjectNavigation(project.slug);

  return (
    <div className="min-h-screen bg-surface-blueprint">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <header className="relative z-10 border-b border-accent-cyan/10 bg-surface-blueprint/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-accent-cyan"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-cyan/40">
            Case Study
          </span>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg text-text-muted">{project.tagline}</p>

          <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-text-muted">
            <span>
              Role: <span className="text-accent-cyan">{project.role}</span>
            </span>
            <span className="text-border-subtle">|</span>
            <span>
              Year: <span className="text-accent-cyan">{project.year}</span>
            </span>
          </div>
        </div>

        {!project.textOnly && (
          <BlueprintFrame label="FIG.01, HERO" className="mt-10">
            <div className="relative aspect-[16/9]">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </BlueprintFrame>
        )}

        <div className={project.textOnly ? "mt-10" : "mt-16 grid gap-12 lg:grid-cols-3"}>
          <div className={project.textOnly ? "max-w-3xl space-y-8" : "space-y-8 lg:col-span-2"}>
            <section>
              <SectionHeading title="Overview" level="subsection" className="mb-4" />
              <p className="leading-relaxed text-text-muted">{project.overview}</p>
            </section>

            <section>
              <SectionHeading title="Highlights" level="subsection" className="mb-4" />
              <ul className="space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm text-text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            {children}
          </div>

          {!project.textOnly && (
          <aside className="space-y-8">
            <BlueprintFrame label="SPEC">
              <div className="space-y-4 p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-cyan/60">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-accent-cyan/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-cyan/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </BlueprintFrame>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-surface-elevated px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>
          )}

          {project.textOnly && (
            <div className="mt-8 border-t border-border-subtle pt-8">
              <SectionHeading title="Tech Stack" level="subsection" className="mb-4" />
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-accent-cyan/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-cyan/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface-elevated px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {!project.textOnly && project.images.length > 1 && (
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {project.images.slice(1).map((image, i) => (
              <BlueprintFrame key={image} label={`FIG.0${i + 2}`}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`${project.title} detail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </BlueprintFrame>
            ))}
          </div>
        )}
        <ProjectCTA
          previousProject={projectNav.previousProject}
          nextProject={projectNav.nextProject}
        />
      </main>
    </div>
  );
}
