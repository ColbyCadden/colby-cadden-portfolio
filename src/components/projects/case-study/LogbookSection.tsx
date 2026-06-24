import type { LogbookContent } from "@/types/case-study";
import { BlueprintFrame } from "@/components/projects/case-study/BlueprintFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface LogbookSectionProps {
  logbook: LogbookContent;
}

export function LogbookSection({ logbook }: LogbookSectionProps) {
  return (
    <section className="py-10 lg:py-12">
      <SectionHeading title={logbook.label} level="subsection" className="mb-4" />

      <BlueprintFrame label="LOG, STATUS" variant="panel">
        <div className="space-y-4 px-5 py-5 sm:px-6 sm:py-6">
          {logbook.statusNote && (
            <p className="border-l-2 border-accent-purple/30 pl-4 text-sm leading-relaxed text-text-muted">
              {logbook.statusNote}
            </p>
          )}

          <ul className="space-y-2.5">
            {logbook.nextSteps.map((step) => (
              <li
                key={step}
                className="flex items-start gap-3 text-sm leading-relaxed text-text-muted"
              >
                <span className="mt-0.5 font-mono text-[10px] text-accent-cyan/50">
                  →
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </BlueprintFrame>
    </section>
  );
}
