import type { CaptionedImage } from "@/types/case-study";
import { StoryImage } from "@/components/projects/case-study/StoryImage";

interface ProjectImageBlockProps {
  image: CaptionedImage;
  size?: "sm" | "md" | "lg";
  className?: string;
  featured?: boolean;
  gridCell?: boolean;
}

export function ProjectImageBlock({
  image,
  size = "md",
  className,
  featured,
  gridCell,
}: ProjectImageBlockProps) {
  return (
    <StoryImage
      image={image}
      size={featured ? "lg" : size}
      featured={featured}
      gridCell={gridCell}
      className={className}
    />
  );
}
