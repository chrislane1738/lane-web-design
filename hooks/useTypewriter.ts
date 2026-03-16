"use client";

import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  speed?: number;
  startDelay?: number;
  enabled?: boolean;
}

export function useTypewriter(
  text: string,
  options: UseTypewriterOptions = {},
) {
  const { speed = 40, startDelay = 0, enabled = true } = options;
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    if (!enabled) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setCharIndex(text.length);
      setStarted(true);
      return;
    }

    const delayTimer = setTimeout(() => {
      setStarted(true);
      intervalRef.current = setInterval(() => {
        setCharIndex((prev) => {
          if (prev >= text.length) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(delayTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, speed, startDelay, enabled]);

  return {
    displayText: started ? text.slice(0, charIndex) : "",
    isComplete: charIndex >= text.length,
    isTyping: started && charIndex < text.length,
  };
}
