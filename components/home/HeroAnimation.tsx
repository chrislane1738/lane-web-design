"use client";

import { useEffect, useState } from "react";
import CLLogoSVG from "@/components/icons/CLLogoSVG";

interface HeroAnimationProps {
  onComplete: () => void;
}

export default function HeroAnimation({ onComplete }: HeroAnimationProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const startTimer = setTimeout(() => setActive(true), 100);
    const completeTimer = setTimeout(() => onComplete(), 4600);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`relative flex items-center justify-center ${active ? "logo-animation-active" : ""}`}
    >
      <CLLogoSVG
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
        color="var(--warm-white)"
        animated
        showCursor={active}
      />
    </div>
  );
}
