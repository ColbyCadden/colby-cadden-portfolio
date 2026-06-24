import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavProject {
  slug: string;
  title: string;
  href: string;
}

interface ProjectCTAProps {
  previousProject?: NavProject;
  nextProject?: NavProject;
}

export function ProjectCTA({ previousProject, nextProject }: ProjectCTAProps) {
  if (!previousProject && !nextProject) return null;

  return (
    <section className="border-t border-accent-cyan/10 py-12 lg:py-14">
      <div className="flex flex-col items-stretch justify-between gap-6 sm:flex-row sm:items-center">
        {previousProject ? (
          <Link
            href={previousProject.href}
            className="group flex items-center gap-3 rounded-lg border border-accent-cyan/20 bg-surface-elevated/30 px-5 py-3 transition-colors hover:border-accent-cyan/40"
          >
            <ArrowLeft className="h-4 w-4 text-accent-cyan/60 transition-transform group-hover:-translate-x-0.5" />
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-text-muted/60">
                Previous Case File
              </span>
              <span className="text-sm font-medium text-text-primary transition-colors group-hover:text-accent-cyan">
                {previousProject.title}
              </span>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block sm:flex-1" />
        )}

        {nextProject && (
          <Link
            href={nextProject.href}
            className="group ml-auto flex items-center gap-3 rounded-lg border border-accent-cyan/20 bg-surface-elevated/30 px-5 py-3 transition-colors hover:border-accent-cyan/40"
          >
            <div className="text-right">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-text-muted/60">
                Next Case File
              </span>
              <span className="text-sm font-medium text-text-primary transition-colors group-hover:text-accent-cyan">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-accent-cyan/60 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </section>
  );
}
