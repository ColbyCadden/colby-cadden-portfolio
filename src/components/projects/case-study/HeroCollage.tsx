import Image from "next/image";
import type { CaseStudyMeta, HeroImage } from "@/types/case-study";
import { cn } from "@/lib/utils";

interface HeroCollageProps {
  meta: CaseStudyMeta;
  compact?: boolean;
}

function CollageCell({
  image,
  priority,
}: {
  image: HeroImage;
  priority?: boolean;
}) {
  const isContain = image.objectFit === "contain";

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      priority={priority}
      className={isContain ? "object-contain p-1.5" : "object-cover"}
      sizes="(max-width: 768px) 45vw, 320px"
    />
  );
}

export function HeroCollage({ meta, compact }: HeroCollageProps) {
  const extras = meta.heroGallery ?? [];

  if (extras.length === 0) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden",
          compact
            ? "aspect-[16/10] max-h-72 sm:max-h-80"
            : "aspect-[16/9] sm:aspect-[2/1]",
        )}
      >
        <Image
          src={meta.heroImage}
          alt={meta.heroAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>
    );
  }

  const [controller, hullCad, poolAction, propulsion] = extras as HeroImage[];

  const heightClass = compact
    ? "h-[21rem] sm:h-[23rem]"
    : "h-[23rem] sm:h-[27rem]";

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-1.5 sm:grid-cols-12",
        "grid-rows-[minmax(0,1.35fr)_minmax(0,0.85fr)_minmax(0,0.85fr)]",
        heightClass,
      )}
    >
      {/* Main, full-height left on desktop */}
      <div className="relative col-span-2 row-span-1 min-h-0 overflow-hidden sm:col-span-7 sm:row-span-3">
        <Image
          src={meta.heroImage}
          alt={meta.heroAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, 55vw"
        />
      </div>

      {controller && (
        <div
          className={cn(
            "relative min-h-0 overflow-hidden sm:col-span-5 sm:row-span-1",
            !hullCad && "col-span-2",
          )}
        >
          <CollageCell image={controller} priority />
        </div>
      )}

      {hullCad && (
        <div className="relative min-h-0 overflow-hidden bg-surface-base/80 sm:col-span-5 sm:row-span-1">
          <CollageCell image={hullCad} />
        </div>
      )}

      {poolAction && (
        <div className="relative min-h-0 overflow-hidden sm:col-span-6 sm:row-span-1">
          <CollageCell image={poolAction} />
        </div>
      )}

      {propulsion && (
        <div className="relative min-h-0 overflow-hidden bg-surface-base/80 sm:col-span-6 sm:row-span-1">
          <CollageCell image={propulsion} />
        </div>
      )}
    </div>
  );
}
