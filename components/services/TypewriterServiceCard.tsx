"use client";

import { useState, useEffect } from "react";
import { type LucideIcon } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useInView } from "@/hooks/useInView";

interface TypewriterServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  reversed?: boolean;
}

export default function TypewriterServiceCard({
  icon: Icon,
  title,
  description,
  features,
  reversed = false,
}: TypewriterServiceCardProps) {
  const { ref: cardRef, isInView } = useInView(0.2, "0px 0px -15% 0px");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(true);
      window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enabled = isInView && hasScrolled;

  const titleTyper = useTypewriter(title, {
    speed: 50,
    startDelay: 200,
    enabled,
  });

  const descTyper = useTypewriter(description, {
    speed: 15,
    startDelay: 200,
    enabled: titleTyper.isComplete,
  });

  const feature0 = useTypewriter(features[0] ?? "", {
    speed: 20,
    startDelay: 150,
    enabled: descTyper.isComplete,
  });

  const feature1 = useTypewriter(features[1] ?? "", {
    speed: 20,
    startDelay: 100,
    enabled: feature0.isComplete,
  });

  const feature2 = useTypewriter(features[2] ?? "", {
    speed: 20,
    startDelay: 100,
    enabled: feature1.isComplete,
  });

  const feature3 = useTypewriter(features[3] ?? "", {
    speed: 20,
    startDelay: 100,
    enabled: feature2.isComplete,
  });

  const featureTypers = [feature0, feature1, feature2, feature3];
  const allDone = feature3.isComplete;
  const activeTyper = [titleTyper, descTyper, ...featureTypers].find(
    (t) => t.isTyping,
  );

  return (
    <div
      ref={cardRef}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
        reversed ? "md:[direction:rtl]" : ""
      }`}
    >
      {/* Image placeholder */}
      <div className={reversed ? "md:[direction:ltr]" : ""}>
        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sand to-terracotta/20 flex items-center justify-center">
          <Icon
            size={64}
            className="text-terracotta/40 transition-opacity duration-500"
            style={{ opacity: enabled ? 1 : 0.2 }}
          />
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? "md:[direction:ltr]" : ""}>
        <h3
          className="text-2xl md:text-3xl text-charcoal mb-4 min-h-[1.3em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {titleTyper.displayText}
          {titleTyper.isTyping && (
            <span className="typewriter-cursor" />
          )}
        </h3>

        <p className="text-charcoal-light leading-relaxed mb-6 min-h-[3em]">
          {descTyper.displayText}
          {descTyper.isTyping && (
            <span className="typewriter-cursor" />
          )}
        </p>

        <ul className="space-y-2.5">
          {featureTypers.map((ft, i) => {
            if (!ft.displayText && !ft.isTyping) return null;
            return (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-charcoal-light"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-1.5 shrink-0" />
                <span>
                  {ft.displayText}
                  {ft.isTyping && (
                    <span className="typewriter-cursor" />
                  )}
                </span>
              </li>
            );
          })}
        </ul>

        {allDone && !activeTyper && (
          <div className="mt-4 w-0 h-0.5 bg-terracotta/30 rounded-full animate-[expand_0.5s_ease-out_forwards]" />
        )}
      </div>
    </div>
  );
}
