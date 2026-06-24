import type { TechnicalSectionContent } from "@/types/case-study";
import { BlueprintFrame } from "@/components/projects/case-study/BlueprintFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface TechnicalSectionProps {
  section: TechnicalSectionContent;
}

export function TechnicalSection({ section }: TechnicalSectionProps) {
  const isDirection = section.variant === "direction";

  return (
    <section className="py-10 lg:py-12">
      <SectionHeading title={section.label} level="subsection" className="mb-4" />

      <BlueprintFrame
        variant="panel"
        className={cn(isDirection && "border-accent-purple/20")}
        label={isDirection ? "IN PROGRESS" : undefined}
      >
        <div className="space-y-4 px-5 py-5 sm:px-6 sm:py-6">
          {section.body && (
            <p className="text-sm leading-relaxed text-text-muted sm:text-[15px]">
              {section.body}
            </p>
          )}

          {section.bullets && (
            <ul className="space-y-2.5">
              {section.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm leading-relaxed text-text-muted"
                >
                  <span
                    className={cn(
                      "mt-2 h-1 w-1 shrink-0 rounded-full",
                      isDirection ? "bg-accent-purple/60" : "bg-accent-cyan/50",
                    )}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </BlueprintFrame>
    </section>
  );
}
