import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import type { Project } from "@/types";
import { getProjectNavigation } from "@/data/projects";
import { BlueprintFrame } from "@/components/projects/case-study/BlueprintFrame";
import { ProjectCTA } from "@/components/projects/case-study/ProjectCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface PortfolioProjectPageProps {
  project: Project;
}

export function PortfolioProjectPage({ project }: PortfolioProjectPageProps) {
  const specs = project.specs ?? [];
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
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-accent-cyan"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
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

        <div className="mt-12 max-w-3xl space-y-10">
          <section>
            <SectionHeading title="Writeup" level="subsection" className="mb-4" />
            {project.writeup ? (
              <p className="text-[15px] leading-relaxed text-text-muted lg:text-base lg:leading-[1.8]">
                {project.writeup}
              </p>
            ) : (
              <div className="rounded-lg border border-dashed border-border-strong bg-surface-elevated/30 px-5 py-6">
                <p className="text-[14px] leading-relaxed text-text-subtle">
                  Your project writeup goes here, a short paragraph on why you
                  rebuilt the site, what you optimized for, and what you learned.
                </p>
              </div>
            )}
          </section>

          <section>
            <SectionHeading title="Site Architecture" level="subsection" className="mb-4" />
            <BlueprintFrame variant="panel">
              {project.architectureIntro && (
                <p className="spec-panel-intro">{project.architectureIntro}</p>
              )}
              <dl className="spec-panel-rows divide-y divide-white/[0.06]">
                {specs.map((item) => (
                  <div
                    key={item.label}
                    className="spec-panel-row grid gap-1 sm:grid-cols-[minmax(0,11rem)_1fr] sm:items-baseline sm:gap-6"
                  >
                    <dt className="text-[10px] font-medium uppercase tracking-[0.1em] text-accent-gold/70">
                      {item.label}
                    </dt>
                    <dd className="text-[14px] leading-[1.6] text-text-primary/92">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </BlueprintFrame>
          </section>

          <section>
            <SectionHeading title="Stack" level="subsection" className="mb-4" />
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/[0.09] bg-white/[0.04] px-3 py-1.5 text-[12px] tracking-[0.01em] text-text-primary/78"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        <ProjectCTA
          previousProject={projectNav.previousProject}
          nextProject={projectNav.nextProject}
        />
      </main>
    </div>
  );
}
