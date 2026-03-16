"use client";

import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaText: string;
  ctaHref: string;
  badge?: string;
  meta?: string;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  featured = false,
  ctaText,
  ctaHref,
  badge,
  meta,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
        featured
          ? "bg-charcoal text-cream shadow-xl scale-[1.02] ring-2 ring-terracotta"
          : "bg-warm-white text-charcoal shadow-sm hover:shadow-md border border-border/50"
      }`}
    >
      {badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-terracotta text-white tracking-wide uppercase">
          {badge}
        </span>
      )}

      <div className="mb-6">
        <h3
          className={`text-lg font-medium mb-3 ${featured ? "text-cream/70" : "text-charcoal-light"}`}
        >
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span
            className={`text-4xl md:text-5xl tracking-tight ${featured ? "text-cream" : "text-charcoal"}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {price}
          </span>
          {period && (
            <span className={`text-base ${featured ? "text-cream/50" : "text-charcoal-light/60"}`}>
              {period}
            </span>
          )}
        </div>
        {meta && (
          <p className={`text-sm mt-2 ${featured ? "text-cream/50" : "text-charcoal-light/60"}`}>
            {meta}
          </p>
        )}
      </div>

      <p className={`text-sm leading-relaxed mb-6 ${featured ? "text-cream/70" : "text-charcoal-light"}`}>
        {description}
      </p>

      <div className={`w-full h-px mb-6 ${featured ? "bg-cream/10" : "bg-border/50"}`} />

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${featured ? "text-terracotta-light" : "text-sage"}`}
            />
            <span className={featured ? "text-cream/80" : "text-charcoal-light"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href={ctaHref}
        className={`w-full text-center ${
          featured
            ? ""
            : "!bg-charcoal !text-cream hover:!bg-charcoal-dark"
        }`}
      >
        {ctaText}
      </Button>
    </div>
  );
}
