"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { BlueprintFrame } from "@/components/projects/case-study/BlueprintFrame";
import { cn } from "@/lib/utils";

interface ProjectMediaProps {
  type: "image" | "video";
  src: string;
  alt: string;
  label?: string;
  poster?: string;
  className?: string;
  objectFit?: "cover" | "contain";
  caption?: string;
}

export function ProjectMedia({
  type,
  src,
  alt,
  label,
  poster,
  className,
  objectFit = "cover",
  caption,
}: ProjectMediaProps) {
  const [videoError, setVideoError] = useState(false);
  const showVideo = type === "video" && !videoError;

  return (
    <BlueprintFrame label={label} className="w-full">
      <div className={cn("relative overflow-hidden", className ?? "aspect-[4/3]")}>
        {type === "image" && (
          <Image
            src={src}
            alt={alt}
            fill
            className={objectFit === "contain" ? "object-contain bg-surface-base" : "object-cover"}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        )}

        {showVideo && (
          <video
            src={src}
            controls
            muted
            playsInline
            preload="auto"
            poster={poster}
            onError={() => setVideoError(true)}
            className={cn(
              "h-full w-full bg-surface-base",
              objectFit === "contain" ? "object-contain" : "object-cover",
            )}
            aria-label={alt}
          />
        )}

        {type === "video" && videoError && (
          <>
            {poster ? (
              <Image
                src={poster}
                alt={alt}
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-surface-elevated" />
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-base/50">
              <Play className="h-8 w-8 text-accent-cyan/40" strokeWidth={1.5} />
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted/60">
                Video, replace {src.split("/").pop()}
              </span>
            </div>
          </>
        )}
      </div>
      {caption && (
        <p className="border-t border-accent-cyan/10 px-4 py-3 text-[13px] leading-relaxed text-text-muted sm:px-5">
          {caption}
        </p>
      )}
    </BlueprintFrame>
  );
}
