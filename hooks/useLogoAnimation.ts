"use client";

import { useState, useEffect, useCallback } from "react";

export function useLogoAnimation(duration = 3800) {
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const start = useCallback(() => {
    setHasStarted(true);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      setIsComplete(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [hasStarted, duration]);

  return { isComplete, hasStarted, start };
}
