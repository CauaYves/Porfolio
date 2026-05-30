"use client";

import { animate, stagger } from "animejs";
import { useEffect } from "react";

export function PortfolioAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      document.documentElement.classList.add("motion-ready");
      return;
    }

    document.documentElement.classList.add("motion-ready");

    animate(".reveal", {
      opacity: [0, 1],
      translateY: [18, 0],
      delay: stagger(75),
      duration: 850,
      ease: "outCubic",
    });

    animate(".signal-line", {
      scaleX: [0.2, 1],
      opacity: [0.2, 0.9, 0.25],
      delay: stagger(120),
      duration: 2200,
      loop: true,
      alternate: true,
      ease: "inOutSine",
    });

    animate(".orbit-dot", {
      translateY: [-6, 6],
      delay: stagger(180),
      duration: 1800,
      loop: true,
      alternate: true,
      ease: "inOutSine",
    });
  }, []);

  return null;
}
