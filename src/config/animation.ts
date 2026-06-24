export const animationConfig = {
  cursorGlow: true,
  magneticButtons: true,
  scrollReveals: true,
  blueprintLines: true,
  hoverMotion: true,
  reducedMotionFallback: true,
} as const;

export type AnimationConfig = typeof animationConfig;
