import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface CaseStudySectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

export function CaseStudySection({
  id,
  title,
  subtitle,
  children,
  className,
  bordered = true,
}: CaseStudySectionProps) {
  return (
    <section
      id={id}
      className={cn(
        bordered && "border-t border-border-subtle",
        "py-11 lg:py-14",
        className,
      )}
    >
      <SectionHeading
        title={title}
        subtitle={subtitle}
        level="subsection"
        className="mb-6"
      />
      {children}
    </section>
  );
}
