"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn your business, goals, and audience to build a clear strategy.",
  },
  {
    number: "02",
    title: "Design",
    description: "Custom mockups that capture your brand personality and user needs.",
  },
  {
    number: "03",
    title: "Develop",
    description: "We build your site with clean, modern code. Fast, responsive, and SEO-ready.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Final review, testing, and launch, plus ongoing support to keep things running.",
  },
];

export default function ProcessSteps() {
  const ref = useScrollAnimation({ staggerDelay: 150 });

  return (
    <div ref={ref} className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

      <div className="space-y-12 md:space-y-16">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className={`reveal-up relative flex items-start gap-6 md:gap-12 ${
              i % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse md:text-right"
            }`}
          >
            {/* Content */}
            <div className="flex-1 md:w-1/2 pl-16 md:pl-0">
              <span className="text-xs font-medium text-terracotta uppercase tracking-widest">
                Step {step.number}
              </span>
              <h3
                className="text-xl md:text-2xl text-charcoal mt-1 mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-terracotta border-4 border-cream -translate-x-1.5 mt-1 z-10" />

            {/* Spacer for opposite side */}
            <div className="hidden md:block flex-1 md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
