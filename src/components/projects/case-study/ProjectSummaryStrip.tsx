import type { SpecItem } from "@/types/case-study";

interface ProjectSummaryStripProps {
  specs: SpecItem[];
  highlights?: string[];
}

export function ProjectSummaryStrip({
  specs,
  highlights,
}: ProjectSummaryStripProps) {
  const featured = specs.slice(0, 4);

  return (
    <div className="border-y border-border-subtle bg-surface-elevated/20 py-6 lg:py-7">
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {featured.map((item) => (
          <div key={item.label}>
            <dt className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent-gold/70">
              {item.label}
            </dt>
            <dd className="mt-1.5 text-[13px] leading-snug text-text-primary/90">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      {highlights && highlights.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border-subtle/80 pt-5">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[12px] text-text-muted"
            >
              <span className="h-1 w-1 rounded-full bg-accent-cyan/60" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
