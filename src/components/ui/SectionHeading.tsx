interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  level?: "section" | "subsection";
  tone?: "dark" | "light";
}

export function SectionHeading({
  title,
  subtitle,
  className = "",
  level = "section",
  tone = "dark",
}: SectionHeadingProps) {
  const isSection = level === "section";
  const titleClass =
    tone === "light" ? "text-text-on-light" : "text-text-primary";
  const subtitleClass =
    tone === "light" ? "text-text-on-light-muted" : "text-text-muted";

  return (
    <div className={`max-w-2xl ${className}`.trim()}>
      {isSection ? (
        <h2
          className={`font-display text-2xl font-normal tracking-[-0.01em] sm:text-3xl ${titleClass}`}
        >
          {title}
        </h2>
      ) : (
        <h3
          className={`text-[13px] font-medium uppercase tracking-[0.12em] ${titleClass}`}
        >
          {title}
        </h3>
      )}
      {subtitle && (
        <p
          className={
            isSection
              ? `mt-3 text-[14px] leading-relaxed sm:text-[15px] ${subtitleClass}`
              : `mt-2 text-[13px] leading-relaxed ${subtitleClass}`
          }
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
