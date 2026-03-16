"use client";

import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function LocalArea() {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className="text-center max-w-2xl mx-auto">
      <div className="reveal-up">
        <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <MapPin size={28} className="text-sage" />
        </div>
        <h2
          className="text-3xl md:text-4xl text-charcoal mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Proudly Serving the Bay Area
        </h2>
        <div className="w-12 h-1 bg-terracotta rounded-full mx-auto mb-6" />
        <p className="text-charcoal-light leading-relaxed">
          Based in <strong className="text-charcoal">Concord, California</strong>,
          we work with small businesses throughout the East Bay and greater Bay
          Area. Whether you&apos;re a neighborhood shop or serve clients across the
          region, we bring local understanding with world-class web expertise.
        </p>
      </div>
    </div>
  );
}
