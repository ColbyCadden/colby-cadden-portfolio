import type { StorySection } from "@/types/case-study";
import {
  StoryImage,
  storyImagePlacement,
  storyImageSize,
} from "@/components/projects/case-study/StoryImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
      <div className="flex flex-col gap-7 sm:gap-8">
        {section.images.map((image, index) => (
          <StoryImage
            key={image.id}
            image={image}
            size={storyImageSize(index, image.featured)}
            className={storyImagePlacement(index, image.featured)}
          />
        ))}
      </div>
    </section>
  );
}
