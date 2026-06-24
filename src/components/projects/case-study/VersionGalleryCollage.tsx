import Image from "next/image";
import type { HeroImage } from "@/types/case-study";
import { cn } from "@/lib/utils";

interface VersionGalleryCollageProps {
  images: HeroImage[];
}

function CollageCell({
  image,
  className,
  priority,
}: {
  image: HeroImage;
  className?: string;
  priority?: boolean;
}) {
  const isContain = image.objectFit === "contain";

  return (
    <div
      className={cn(
        "relative min-h-0 overflow-hidden bg-[#121110]",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        className={isContain ? "object-contain p-2" : "object-cover"}
        sizes="(max-width: 1024px) 50vw, 320px"
      />
    </div>
  );
}

export function VersionGalleryCollage({ images }: VersionGalleryCollageProps) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="relative aspect-[4/3] border-b border-accent-cyan/10">
        <CollageCell image={images[0]} priority className="absolute inset-0" />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid aspect-[4/3] grid-cols-2 gap-px border-b border-accent-cyan/10 bg-accent-cyan/10">
        <CollageCell image={images[0]} priority className="h-full" />
        <CollageCell image={images[1]} className="h-full" />
      </div>
    );
  }

  if (images.length === 3) {
    const [primary, ...rest] = images;

    return (
      <div className="grid aspect-[4/3] grid-cols-2 grid-rows-2 gap-px border-b border-accent-cyan/10 bg-accent-cyan/10">
        <CollageCell
          image={primary}
          priority
          className="col-span-1 row-span-2 h-full"
        />
        {rest.map((image) => (
          <CollageCell key={image.src} image={image} className="h-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid aspect-[4/3] grid-cols-2 grid-rows-2 gap-px border-b border-accent-cyan/10 bg-accent-cyan/10">
      {images.slice(0, 4).map((image, index) => (
        <CollageCell
          key={image.src}
          image={image}
          priority={index === 0}
          className="h-full"
        />
      ))}
    </div>
  );
}
