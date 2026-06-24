import type { VisualAsset } from "@/types/case-study";
import { ProjectMedia } from "@/components/projects/case-study/ProjectMedia";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface VisualBlockProps {
  asset: VisualAsset;
  className?: string;
}

const aspectClasses: Record<string, string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-video",
};

export function VisualBlock({ asset, className }: VisualBlockProps) {
  return (
    <ProjectMedia
      type={asset.type}
      src={asset.src}
      alt={asset.alt}
      label={asset.label}
      poster={asset.poster}
      objectFit={asset.objectFit}
      className={cn(aspectClasses[asset.aspectRatio ?? "landscape"], className)}
    />
  );
}

interface VisualGalleryProps {
  assets: VisualAsset[];
  label?: string;
}

export function VisualGallery({
  assets,
  label = "Visual Creation Journey",
}: VisualGalleryProps) {
  return (
    <section className="py-10 lg:py-12">
      <SectionHeading title={label} level="subsection" className="mb-5" />

      <div className="grid gap-4 sm:grid-cols-2">
        {assets.map((asset) => (
          <VisualBlock
            key={asset.id}
            asset={asset}
            className={
              asset.aspectRatio === "wide" || asset.type === "video"
                ? "sm:col-span-2"
                : undefined
            }
          />
        ))}
      </div>
    </section>
  );
}
