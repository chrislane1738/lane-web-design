"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Card from "@/components/ui/Card";

const values = [
  {
    title: "Craft Over Templates",
    description:
      "Every site is built from scratch. No themes, no page builders. Just clean, custom code tailored to your brand.",
  },
  {
    title: "Partnership Over Transactions",
    description:
      "We're not a vendor, we're a partner. We take the time to understand your business and stay involved after launch.",
  },
  {
    title: "Results Over Vanity",
    description:
      "A beautiful site that doesn't convert is a failure. We measure success by your growth, not just aesthetics.",
  },
];

export default function Values() {
  const ref = useScrollAnimation({ staggerDelay: 120 });

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value) => (
          <div key={value.title} className="reveal-up">
            <Card className="h-full">
              <h3
                className="text-xl text-charcoal mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {value.title}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                {value.description}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
