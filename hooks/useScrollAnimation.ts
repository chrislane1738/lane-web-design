"use client";

import { useEffect, useRef } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  staggerDelay?: number;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {},
) {
  const { threshold = 0.15, staggerDelay = 100 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealSelector =
      ".reveal-up, .reveal-left, .reveal-right, .reveal-scale";

    if (prefersReducedMotion) {
      // Reveal the element itself if it has a reveal class
      if (el.matches(revealSelector)) {
        el.classList.add("revealed");
      }
      el.querySelectorAll(revealSelector).forEach((child) =>
        child.classList.add("revealed"),
      );
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let index = 0;

          // Check the ref element itself
          if (el.matches(revealSelector)) {
            (el as HTMLElement).style.transitionDelay = `${index * staggerDelay}ms`;
            el.classList.add("revealed");
            index++;
          }

          // Check descendants
          const children = el.querySelectorAll(revealSelector);
          children.forEach((child) => {
            (child as HTMLElement).style.transitionDelay = `${index * staggerDelay}ms`;
            child.classList.add("revealed");
            index++;
          });

          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, staggerDelay]);

  return ref;
}
