"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animationConfig } from "@/config/animation";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const isDesktop = useIsDesktop();
  const reducedMotion = useReducedMotion();

  const enabled =
    animationConfig.cursorGlow &&
    isDesktop &&
    !(animationConfig.reducedMotionFallback && reducedMotion);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: position.x,
          top: position.y,
          background:
            "radial-gradient(circle, rgba(107,127,150,0.04) 0%, transparent 68%)",
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.45 }}
      />
    </motion.div>
  );
}
