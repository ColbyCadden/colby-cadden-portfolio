import Image from "next/image";
import type { CaptionedImage } from "@/types/case-study";
import { cn } from "@/lib/utils";

const aspectClasses: Record<string, string> = {
  landscape: "aspect-[3/2]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[16/10]",
};

interface StoryImageProps {
  image: CaptionedImage;
  className?: string;
  size?: "sm" | "md" | "lg";
  /** Equal-height grid cell, aspect-driven, no max-height cap */
  gridCell?: boolean;
  /** Full-width hero image in a gallery */
  featured?: boolean;
}

const sizeClasses = {
  sm: "max-h-40 sm:max-h-44",
  md: "max-h-48 sm:max-h-52",
  lg: "max-h-56 sm:max-h-60",
};

export function StoryImage({
  image,
  className,
  size = "md",
  gridCell,
  featured,
}: StoryImageProps) {
  const aspect = aspectClasses[image.aspectRatio ?? "landscape"];

  const frameClass = featured
    ? "aspect-[16/10] w-full"
    : gridCell
      ? "aspect-[4/3] w-full max-h-24 sm:max-h-28"
      : cn(aspect, sizeClasses[size]);

  return (
    <figure className={cn("min-w-0", className)}>
      <div className="overflow-hidden rounded-md border border-border-subtle/70 bg-surface-elevated/15">
        <div
          className={cn(
            "relative",
            frameClass,
            image.objectFit === "contain" && "bg-surface-base/80",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={
              image.objectFit === "contain"
                ? "object-contain p-2 sm:p-2.5"
                : "object-cover"
            }
            sizes={
              featured
                ? "(max-width: 768px) 92vw, 720px"
                : gridCell
                  ? "(max-width: 768px) 92vw, 240px"
                  : "(max-width: 768px) 88vw, 320px"
            }
          />
        </div>
        {image.caption ? (
          <figcaption className="border-t border-border-subtle/50 px-2 py-2 text-[10px] leading-relaxed text-text-subtle sm:px-2.5 sm:text-[11px]">
            {image.caption}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}

/** Alternating editorial offsets, breaks the rigid 2-column grid */
export function storyImagePlacement(index: number, featured?: boolean) {
  if (featured) {
    return "sm:mx-auto sm:max-w-[min(100%,34rem)]";
  }

  const placements = [
    "sm:mr-auto sm:max-w-[min(100%,26rem)]",
    "sm:ml-auto sm:max-w-[min(100%,22rem)]",
    "sm:mr-auto sm:max-w-[min(100%,24rem)]",
    "sm:ml-auto sm:max-w-[min(100%,28rem)]",
  ];

  return placements[index % placements.length];
}

export function storyImageSize(index: number, featured?: boolean): "sm" | "md" | "lg" {
  if (featured) return "lg";
  return index % 3 === 0 ? "md" : "sm";
}
