"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryItem } from "@/types";
import { animationConfig } from "@/config/animation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface MasonryGalleryProps {
  items: GalleryItem[];
}

const aspectClasses: Record<string, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export function MasonryGallery({ items }: MasonryGalleryProps) {
  const reducedMotion = useReducedMotion();
  const hoverEnabled =
    animationConfig.hoverMotion &&
    !(animationConfig.reducedMotionFallback && reducedMotion);

  return (
    <div className="columns-2 gap-3 sm:columns-3 sm:gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          className="mb-3 break-inside-avoid sm:mb-4"
          initial={hoverEnabled ? { opacity: 0, y: 12 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          whileHover={hoverEnabled ? { y: -3 } : undefined}
        >
          <div
            className={cn(
              "relative overflow-hidden rounded-md bg-surface-elevated ring-1 ring-border-subtle",
              aspectClasses[item.aspectRatio ?? "landscape"],
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
