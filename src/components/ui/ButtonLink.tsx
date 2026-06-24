"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { animationConfig } from "@/config/animation";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  target?: string;
  rel?: string;
  className?: string;
  magnetic?: boolean;
}

const variants = {
  primary:
    "bg-text-primary text-background border-border-strong hover:bg-text-primary/88",
  secondary:
    "bg-transparent text-text-muted border-border-strong hover:border-accent-blue/30 hover:bg-surface-elevated hover:text-text-primary",
  ghost:
    "bg-transparent text-text-muted border-border-strong hover:border-accent-blue/30 hover:bg-surface-elevated hover:text-text-primary",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  target,
  rel,
  className,
  magnetic = true,
}: ButtonLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isDesktop = useIsDesktop();
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22 });
  const springY = useSpring(y, { stiffness: 260, damping: 22 });

  const magneticEnabled =
    magnetic &&
    animationConfig.magneticButtons &&
    isDesktop &&
    !(animationConfig.reducedMotionFallback && reducedMotion);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!magneticEnabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={magneticEnabled ? { x: springX, y: springY } : undefined}
      className="inline-flex"
    >
      <Link
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "inline-flex items-center justify-center rounded-[5px] border px-4 py-2",
          "text-[13px] font-medium tracking-tight transition-colors duration-250",
          animationConfig.hoverMotion &&
            !reducedMotion &&
            "hover:-translate-y-px",
          variants[variant],
          className,
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-[13px] font-medium text-text-primary",
        className,
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-px left-0 h-px w-0 bg-accent-blue transition-all duration-300 group-hover:w-full" />
      </span>
      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
