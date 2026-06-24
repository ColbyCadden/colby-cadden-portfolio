"use client";

import { useEffect, useState } from "react";

function getIsDesktop(breakpoint: number): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
}

export function useIsDesktop(breakpoint = 1024): boolean {
  const [isDesktop, setIsDesktop] = useState(() => getIsDesktop(breakpoint));

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const update = () => setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, [breakpoint]);

  return isDesktop;
}
