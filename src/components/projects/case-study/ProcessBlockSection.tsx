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
  const cell = image.gridCell;
  const gridStyle = cell
    ? ({
        "--gc": cell.colSpan
          ? `${cell.colStart ?? "auto"} / span ${cell.colSpan}`
          : `${cell.colStart ?? "auto"}`,
        "--gr": cell.rowSpan
          ? `${cell.rowStart ?? "auto"} / span ${cell.rowSpan}`
          : `${cell.rowStart ?? "auto"}`,
      } as React.CSSProperties)
    : undefined;

  // Renders and drawings sit directly on the page at their natural shape.
  // Photos fill a portrait tile.
  const isRender = image.objectFit === "contain";

  if (isRender && !fillCell) {
    return (
      <figure
        className={cn(
          "min-w-0 self-center",
          cell && "sm:[grid-column:var(--gc)] sm:[grid-row:var(--gr)]",
        )}
        style={gridStyle}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={600}
          className="h-auto w-full rounded-md"
          sizes="(max-width: 640px) 50vw, 400px"
        />
      </figure>
    );
  }

  if (isRender && fillCell) {
    return (
      <figure
        className={cn(
          "min-w-0 self-center sm:h-full",
          (cell?.colSpan ?? 1) >= 2 && "col-span-2",
          cell && "sm:[grid-column:var(--gc)] sm:[grid-row:var(--gr)]",
        )}
        style={gridStyle}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={600}
          className="h-auto w-full rounded-md sm:h-full sm:object-contain"
          sizes="(max-width: 640px) 50vw, 400px"
        />
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "min-w-0",
        fillCell && "h-full",
        cell && "sm:[grid-column:var(--gc)] sm:[grid-row:var(--gr)]",
      )}
      style={gridStyle}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-md",
          !isRender && "border border-border-subtle/70",
          fillCell ? "h-full min-h-32" : "aspect-[3/4]",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={cn(
            "object-center",
            isRender ? "object-contain" : "object-cover",
          )}
          sizes="(max-width: 640px) 50vw, 320px"
        />
      </div>
    </figure>
  );
}

function ImageGroupPanel({ group }: { group: ProcessImageGroup }) {
  const imageCount = group.images.length;
  const useCustomGrid = Boolean(group.grid);
  const allRenders = group.images.every((img) => img.objectFit === "contain");

  return (
    <div className="rounded-md border border-border-subtle/80 bg-surface-elevated/10 p-4 sm:p-5">
      <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-subtle">
        {group.title}
      </p>

      <div
        className={cn(
          "mt-3 grid items-center gap-3",
          useCustomGrid
            ? "grid-cols-2 sm:[grid-template-columns:var(--cols)] sm:[grid-template-rows:var(--rows)]"
            : imageCount <= 3
              ? allRenders
                ? "grid-cols-1 sm:grid-cols-3"
                : "grid-cols-2 sm:grid-cols-3"
              : "grid-cols-2 sm:grid-cols-4",
        )}
        style={
          useCustomGrid
            ? ({
                "--cols": `repeat(${group.grid!.columns}, minmax(0, 1fr))`,
                "--rows": `repeat(${group.grid!.rows}, minmax(8rem, 11rem))`,
              } as React.CSSProperties)
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
          <p className="text-[13px] leading-relaxed text-text-muted sm:text-[14px]">
            {block.intro}
          </p>
        )}
        {block.bullets && (
          <ul className="flex flex-col gap-2">
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
