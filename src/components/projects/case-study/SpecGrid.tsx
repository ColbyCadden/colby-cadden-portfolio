import type { SpecItem } from "@/types/case-study";
import { BlueprintFrame } from "@/components/projects/case-study/BlueprintFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface SpecGridProps {
  items: SpecItem[];
}

export function SpecGrid({ items }: SpecGridProps) {
  return (
    <section className="py-12 lg:py-14">
      <SectionHeading title="Technical Review" level="subsection" className="mb-5" />

      <BlueprintFrame label="SPEC PANEL" variant="panel">
        <dl className="grid gap-px bg-white/[0.06] sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-black/20 px-4 py-4 sm:px-5 sm:py-5"
            >
              <dt className="text-[12px] font-medium text-white/45">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-text-muted">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </BlueprintFrame>
    </section>
  );
}
