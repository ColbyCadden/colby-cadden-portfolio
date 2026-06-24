import type { ProcessBlock, ProcessImageGroup, CaptionedImage } from "@/types/case-study";
import Image from "next/image";
import { ProjectImageBlock } from "@/components/projects/case-study/ProjectImageBlock";
import { cn } from "@/lib/utils";

interface ProcessBlockSectionProps {
  block: ProcessBlock;
  reverse?: boolean;
  layout?: "split" | "strip";
  compactImages?: boolean;
}

function GroupPanelImage({
  image,
  fillCell = false,
}: {
  image: CaptionedImage;
  fillCell?: boolean;
}) {
  const isPortrait = image.aspectRatio === "portrait";

  const gridStyle = image.gridCell
    ? {
        ...(image.gridCell.colSpan
          ? {
              gridColumn: `${image.gridCell.colStart ?? "auto"} / span ${image.gridCell.colSpan}`,
            }
          : image.gridCell.colStart
            ? { gridColumnStart: image.gridCell.colStart }
            : {}),
        ...(image.gridCell.rowSpan
          ? {
              gridRow: `${image.gridCell.rowStart ?? "auto"} / span ${image.gridCell.rowSpan}`,
            }
          : image.gridCell.rowStart
            ? { gridRowStart: image.gridCell.rowStart }
            : {}),
      }
    : undefined;

  return (
    <figure
      className={cn("min-w-0", fillCell && "h-full")}
      style={gridStyle}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-md border border-border-subtle/70 bg-[#f4f4f4] p-2 sm:p-2.5",
          fillCell ? "h-full min-h-28" : "h-28 sm:h-32",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={isPortrait ? 769 : 800}
          height={isPortrait ? 1024 : 600}
          className="h-full w-full object-contain object-center"
          sizes="(max-width: 640px) 30vw, 200px"
        />
      </div>
    </figure>
  );
}

function ImageGroupPanel({ group }: { group: ProcessImageGroup }) {
  const imageCount = group.images.length;
  const useCustomGrid = Boolean(group.grid);

  return (
    <div className="rounded-md border border-border-subtle/80 bg-surface-elevated/10 p-4 sm:p-5">
      <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-subtle">
        {group.title}
      </p>

      <div
        className={cn(
          "mt-3 grid gap-3",
          !useCustomGrid &&
            (imageCount <= 3 ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-4"),
        )}
        style={
          useCustomGrid
            ? {
                gridTemplateColumns: `repeat(${group.grid!.columns}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${group.grid!.rows}, minmax(7rem, 8rem))`,
              }
            : undefined
        }
      >
        {group.images.map((image) => (
          <GroupPanelImage
            key={image.id}
            image={{ ...image, caption: "" }}
            fillCell={useCustomGrid}
          />
        ))}
      </div>

      {group.bullets && group.bullets.length > 0 && (
        <ul className="mt-3 space-y-1 border-t border-border-subtle/50 pt-3">
          {group.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-[11px] leading-relaxed text-text-muted sm:text-[12px]"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/50" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ProcessBlockSection({
  block,
  reverse = false,
  layout = "split",
  compactImages = false,
}: ProcessBlockSectionProps) {
  const images = block.images ?? [];
  const imageGroups = block.imageGroups ?? [];
  const featuredImages = block.featuredImages ?? [];

  if (layout === "strip") {
    return (
      <div className="space-y-5">
        {featuredImages.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featuredImages.map((image) => (
              <ProjectImageBlock key={image.id} image={image} featured />
            ))}
          </div>
        )}
        {block.intro && (
          <p className="max-w-2xl text-[13px] leading-relaxed text-text-muted sm:text-[14px]">
            {block.intro}
          </p>
        )}
        {block.bullets && (
          <ul className="flex max-w-2xl flex-col gap-2">
            {block.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2.5 text-[13px] leading-relaxed text-text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/50" />
                {bullet}
              </li>
            ))}
          </ul>
        )}
        {imageGroups.length > 0 && (
          <div className="flex flex-col gap-4">
            {imageGroups.map((group) => (
              <ImageGroupPanel key={group.id} group={group} />
            ))}
          </div>
        )}
        {imageGroups.length === 0 && images.length > 0 && (
          <div
            className={cn(
              "grid gap-2 sm:gap-2.5",
              compactImages
                ? images.length >= 4
                  ? "grid-cols-2 items-start sm:grid-cols-4"
                  : "grid-cols-2 items-start sm:grid-cols-3"
                : images.length >= 4
                  ? "sm:grid-cols-2"
                  : "sm:grid-cols-3",
            )}
          >
            {images.map((image) => (
              <ProjectImageBlock
                key={image.id}
                image={image}
                gridCell={compactImages}
                size="sm"
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid items-start gap-8 lg:grid-cols-2 lg:gap-12",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div className="space-y-4">
        {block.intro && (
          <p className="text-[13px] leading-relaxed text-text-muted sm:text-[14px]">
            {block.intro}
          </p>
        )}
        {block.bullets && (
          <ul className="space-y-2.5">
            {block.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2.5 text-[13px] leading-relaxed text-text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/50" />
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>

      {images.length > 0 && (
        <div
          className={cn(
            "grid gap-4",
            images.length === 1 ? "max-w-md" : "items-start sm:grid-cols-2",
          )}
        >
          {images.map((image) => (
            <ProjectImageBlock
              key={image.id}
              image={image}
              size="sm"
            />
          ))}
        </div>
      )}
    </div>
  );
}
