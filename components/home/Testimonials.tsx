"use client";

import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Chris transformed our online presence completely. Our new site actually feels like us. Warm, welcoming, and professional.",
    name: "Sarah Mitchell",
    company: "Coastal Realty Group",
  },
  {
    quote:
      "Working with Lane Web Design was effortless. They listened, understood our vision, and delivered something better than we imagined.",
    name: "Marcus Chen",
    company: "FreshBite Kitchen",
  },
  {
    quote:
      "Our bookings increased 40% within three months of launching the new site. The investment paid for itself almost immediately.",
    name: "Jennifer Park",
    company: "Summit Wellness Studio",
  },
];

export default function Testimonials() {
  const ref = useScrollAnimation({ staggerDelay: 120 });

  return (
    <section className="py-24 bg-cream" ref={ref}>
      <Container>
        <div className="reveal-up">
          <SectionHeading
            title="Kind Words"
            subtitle="What our clients say about working together."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="reveal-up">
              <Card className="h-full flex flex-col">
                <Quote size={24} className="text-terracotta/30 mb-4" />
                <p
                  className="text-charcoal italic text-base leading-relaxed flex-1 mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-medium text-charcoal text-sm">{t.name}</p>
                  <p className="text-charcoal-light text-xs">{t.company}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
