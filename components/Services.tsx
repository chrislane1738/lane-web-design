"use client";

import { Palette, Code, BarChart3, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Beautiful, user-focused designs that reflect your brand and engage your audience from the first click.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Clean, modern code built with the latest technologies. Fast load times, responsive layouts, and seamless functionality.",
  },
  {
    icon: BarChart3,
    title: "SEO & Performance",
    description:
      "Optimized for search engines and speed so your site ranks higher and converts more visitors into customers.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing updates, security patches, and technical support to keep your site running smoothly around the clock.",
  },
];

export default function Services() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="services" className="py-20 md:py-28 bg-muted" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Everything you need to establish and grow your online presence."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, i) => (
            <Card key={service.title} className={`text-center scroll-hidden-scale stagger-${i + 1}`}>
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary-light flex items-center justify-center">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
