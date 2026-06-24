import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import type { Project } from "@/types";
import type { HackathonEntry } from "@/types/hackathon";
import { hackathons } from "@/data/hackathons";
import { getProjectNavigation } from "@/data/projects";
import { ProjectCTA } from "@/components/projects/case-study/ProjectCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FirstPlaceMedal } from "@/components/ui/FirstPlaceMedal";

interface HackathonsProjectPageProps {
  project: Project;
}

function HackathonBadge({ entry }: { entry: HackathonEntry }) {
  if (entry.badgeVariant !== "award") {
    return null;
  }

  return (
    <div className="flex shrink-0 flex-col items-center" title={entry.badge}>
      <FirstPlaceMedal
        size="lg"
        className="drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)]"
      />
      <span className="sr-only">{entry.badge}</span>
    </div>
  );
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent-gold/70">
        {title}
      </h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function HackathonCard({ entry }: { entry: HackathonEntry }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border-subtle bg-surface-elevated/25">
      <header className="border-b border-border-subtle px-5 py-4 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2 className="text-lg font-semibold tracking-tight text-text-primary sm:text-xl">
              {entry.name}
            </h2>
            <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">
              {entry.event}
            </p>
            <p className="mt-1 text-[12px] text-text-subtle">{entry.year}</p>
          </div>
          {entry.badgeVariant === "award" && <HackathonBadge entry={entry} />}
        </div>
        {entry.sponsors && (
          <p className="mt-3 text-[12px] leading-relaxed text-text-subtle">
            {entry.sponsors}
          </p>
        )}
      </header>

      <div className="flex flex-1 flex-col gap-5 px-5 py-5 sm:px-6">
        <DetailBlock title="Project">
          <p className="text-[14px] font-medium text-text-primary">
            {entry.projectName}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
            {entry.summary}
          </p>
        </DetailBlock>

        <DetailBlock title="Role">
          <ul className="space-y-1.5">
            {entry.role.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[13px] leading-relaxed text-text-muted"
              >
                <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                {item}
              </li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock title="Team">
          <p className="text-[13px] leading-relaxed text-text-muted">
            {entry.team.join(" · ")}
          </p>
        </DetailBlock>

        <DetailBlock title="Technical Focus">
          <div className="flex flex-wrap gap-2">
            {entry.technicalFocus.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-text-primary/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </DetailBlock>

        <DetailBlock title="Key Contributions">
          <ul className="space-y-1.5">
            {entry.contributions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[13px] leading-relaxed text-text-muted"
              >
                <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
                {item}
              </li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock title="Result">
          <p className="text-[13px] leading-relaxed text-text-primary/90">
            {entry.result}
          </p>
        </DetailBlock>
      </div>
    </article>
  );
}

export function HackathonsProjectPage({ project }: HackathonsProjectPageProps) {
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
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
        </div>

        <section className="mt-10" aria-label="Hackathon entries">
          <SectionHeading
            title="Competitions"
            level="subsection"
            className="mb-6"
          />
          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {hackathons.map((entry) => (
              <HackathonCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>

        <ProjectCTA
          previousProject={projectNav.previousProject}
          nextProject={projectNav.nextProject}
        />
      </main>
    </div>
  );
}
