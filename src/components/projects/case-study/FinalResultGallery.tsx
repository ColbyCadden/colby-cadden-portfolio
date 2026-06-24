import type { FinalResultContent } from "@/types/case-study";
import {
  StoryImage,
  storyImagePlacement,
} from "@/components/projects/case-study/StoryImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FinalResultGalleryProps {
  content: FinalResultContent;
}

export function FinalResultGallery({ content }: FinalResultGalleryProps) {
  return (
    <section className="py-10 lg:py-12">
      <SectionHeading title="Final Result" level="subsection" className="mb-6" />

      <div className="flex flex-col gap-7 sm:gap-8">
        <StoryImage
          image={content.featured}
          size="lg"
          className="sm:mx-auto sm:max-w-[min(100%,36rem)]"
        />

        {content.supporting.map((image, index) => (
          <StoryImage
            key={image.id}
            image={image}
            size="sm"
            className={storyImagePlacement(index)}
          />
        ))}
      </div>
    </section>
  );
}
