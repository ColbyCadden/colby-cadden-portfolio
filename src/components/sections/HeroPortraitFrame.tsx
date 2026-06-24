"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { animationConfig } from "@/config/animation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsDesktop } from "@/hooks/useIsDesktop";

interface HeroPortraitFrameProps {
  src: string;
  alt: string;
}

export function HeroPortraitFrame({ src, alt }: HeroPortraitFrameProps) {
  const reducedMotion = useReducedMotion();
  const isDesktop = useIsDesktop();
  const motionEnabled =
    animationConfig.hoverMotion &&
    isDesktop &&
    !(animationConfig.reducedMotionFallback && reducedMotion);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 140, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 140, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-2, 2]);
  const lightLeft = useTransform(springX, [-0.5, 0.5], ["30%", "70%"]);
  const lightTop = useTransform(springY, [-0.5, 0.5], ["25%", "75%"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!motionEnabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="relative w-[190px] [perspective:900px] sm:w-[210px] lg:w-[230px]"
      style={motionEnabled ? { rotateX, rotateY } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-xl border border-border-strong shadow-[0_16px_40px_-20px_rgba(0,0,0,0.7),0_0_32px_-14px_rgba(107,127,150,0.15)]">
        <div className="relative aspect-[678/744]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            priority
            sizes="230px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          <motion.div
            className="pointer-events-none absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-2xl"
            style={
              motionEnabled
                ? { left: lightLeft, top: lightTop, opacity: 1 }
                : { left: "50%", top: "40%", opacity: 0 }
            }
          />
        </div>
      </div>
    </motion.div>
  );
}
