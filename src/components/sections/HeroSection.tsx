"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/data/content";
import { animationConfig } from "@/config/animation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { HeroPortraitFrame } from "@/components/sections/HeroPortraitFrame";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HeroSection() {
  const reducedMotion = useReducedMotion();
  const motionEnabled =
    animationConfig.scrollReveals &&
    !(animationConfig.reducedMotionFallback && reducedMotion);

  const fade = (delay: number) =>
    motionEnabled
      ? {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.55,
            ease: [0.25, 0.1, 0.25, 1] as const,
            delay,
          },
        }
      : {};

  const programsLine = heroContent.programs.join(" + ");

  return (
    <section id="home" className="border-b border-border-subtle pt-32 pb-16 lg:pt-36 lg:pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
          <motion.div {...fade(0)} className="min-w-0 flex-1">
            <h1 className="font-display text-[2.25rem] font-normal uppercase tracking-[0.03em] text-text-primary sm:text-[2.65rem] lg:text-[2.9rem]">
              {heroContent.name}
            </h1>

            <div className="mt-5 h-px w-12 bg-border-strong" />

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-text-muted">
              {programsLine}
              <span className="mx-2 text-text-subtle">·</span>
              {heroContent.school}
            </p>

            <p className="mt-3 font-display text-lg leading-snug text-text-primary sm:text-xl">
              {heroContent.distinction}
            </p>
          </motion.div>

          <motion.div
            {...fade(0.08)}
            className="flex shrink-0 justify-center sm:justify-end"
          >
            <HeroPortraitFrame
              src={heroContent.portrait}
              alt="Portrait of Colby Cadden"
            />
          </motion.div>
        </div>

        <motion.div
          {...fade(0.14)}
          className="mt-16 max-w-xl border-t border-border-subtle pt-12 lg:mt-20 lg:max-w-2xl lg:pt-14"
        >
          <p className="text-[15px] leading-[1.9] text-text-muted sm:text-[16px] sm:leading-[1.85]">
            {heroContent.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 lg:mt-12">
            <ButtonLink href={heroContent.ctaProjects.href} magnetic={false}>
              {heroContent.ctaProjects.label}
            </ButtonLink>
            <ButtonLink
              href={heroContent.ctaAbout.href}
              variant="secondary"
              magnetic={false}
            >
              {heroContent.ctaAbout.label}
            </ButtonLink>
            <ButtonLink
              href={heroContent.ctaLinkedIn.href}
              variant="secondary"
              magnetic={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              {heroContent.ctaLinkedIn.label}
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
