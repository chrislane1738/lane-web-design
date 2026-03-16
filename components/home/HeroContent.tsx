"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import HeroAnimation from "./HeroAnimation";
import Button from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

const HEADLINE_PART1 = "Websites that feel like your business";
const HEADLINE_PART2 = ", so you can focus on running it.";

export default function HeroContent() {
  const [animationDone, setAnimationDone] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const handleAnimationComplete = useCallback(() => {
    setAnimationDone(true);
  }, []);

  const heading1 = useTypewriter(HEADLINE_PART1, {
    speed: 40,
    startDelay: 200,
    enabled: animationDone,
  });

  const heading2 = useTypewriter(HEADLINE_PART2, {
    speed: 40,
    startDelay: 0,
    enabled: heading1.isComplete,
  });

  const showSubtitle = heading2.isComplete;

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (heroRef.current) {
            const rect = heroRef.current.getBoundingClientRect();
            const progress = Math.min(
              1,
              Math.max(0, -rect.top / (rect.height * 0.6)),
            );
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgColor = `color-mix(in srgb, var(--charcoal) ${100 - scrollProgress * 100}%, var(--cream))`;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden -mt-16 md:-mt-18"
      style={{ background: bgColor }}
    >
      {/* Logo animation */}
      <div
        className="transition-all duration-300"
        style={{
          transform: `scale(${1 - scrollProgress * 0.4}) translateY(${-scrollProgress * 80}px)`,
          opacity: 1 - scrollProgress * 0.6,
        }}
      >
        <HeroAnimation onComplete={handleAnimationComplete} />
      </div>

      {/* Hero text */}
      <div
        className="text-center px-5 mt-8 max-w-4xl transition-all duration-700"
        style={{
          opacity: animationDone ? 1 - scrollProgress * 1.5 : 0,
          transform: animationDone
            ? `translateY(${scrollProgress * -40}px)`
            : "translateY(24px)",
        }}
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight min-h-[2.5em]"
          style={{
            fontFamily: "var(--font-display)",
            color: `color-mix(in srgb, var(--cream) ${100 - scrollProgress * 100}%, var(--charcoal))`,
          }}
        >
          {heading1.displayText}
          {heading1.isComplete && (
            <span className="text-terracotta">{heading2.displayText}</span>
          )}
          {(heading1.isTyping || heading2.isTyping) && (
            <span className="typewriter-cursor" />
          )}
        </h1>

        <div
          className="transition-all duration-700"
          style={{
            opacity: showSubtitle ? 1 : 0,
            transform: showSubtitle ? "translateY(0)" : "translateY(12px)",
          }}
        >
          <p
            className="text-lg sm:text-xl mb-10 max-w-xl mx-auto"
            style={{
              color: `color-mix(in srgb, var(--cream) ${Math.max(0, 80 - scrollProgress * 100)}%, var(--charcoal-light))`,
            }}
          >
            Handcrafted web design for small businesses in Concord and the Bay
            Area. Distinctive and built to grow with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Start Your Project
            </Button>
            <Button href="/work" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      {showSubtitle && scrollProgress < 0.1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-hint text-cream/60">
          <ChevronDown size={28} />
        </div>
      )}
    </section>
  );
}
