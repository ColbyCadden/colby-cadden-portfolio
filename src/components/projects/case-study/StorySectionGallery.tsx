import Image from "next/image";
import type { StorySection } from "@/types/case-study";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface StorySectionGalleryProps {
  section: StorySection;
}

export function StorySectionGallery({ section }: StorySectionGalleryProps) {
  return (
    <section className="py-10 lg:py-12">
      <SectionHeading
        title={section.title}
        subtitle={section.intro}
        level="subsection"
        className="mb-6"
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {section.images.map((image) => (
          <figure key={image.id} className="min-w-0">
            <div
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-md border border-border-subtle/70 bg-surface-elevated/15",
                image.objectFit === "contain" && "bg-surface-base/80",
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={
                  image.objectFit === "contain"
                    ? "object-contain p-3"
                    : "object-cover"
                }
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
