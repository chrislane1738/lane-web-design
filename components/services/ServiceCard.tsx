"use client";

import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  reversed?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  reversed = false,
}: ServiceCardProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
        reversed ? "md:[direction:rtl]" : ""
      }`}
    >
      {/* Image placeholder */}
      <div className={reversed ? "md:[direction:ltr]" : ""}>
        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sand to-terracotta/20 flex items-center justify-center">
          <Icon size={64} className="text-terracotta/40" />
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? "md:[direction:ltr]" : ""}>
        <h3
          className="text-2xl md:text-3xl text-charcoal mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
        <p className="text-charcoal-light leading-relaxed mb-6">{description}</p>
        <ul className="space-y-2.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-charcoal-light">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-1.5 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
