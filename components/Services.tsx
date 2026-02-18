"use client";

import { useState } from "react";
import { Palette, Code, BarChart3, Wrench, ChevronDown } from "lucide-react";
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
  const [expanded, setExpanded] = useState(false);

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

        {/* Read More dropdown */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors cursor-pointer"
          >
            {expanded ? "Read Less" : "Read More"}
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}`}
          >
            <div className="max-w-3xl mx-auto bg-card-bg rounded-xl p-6 md:p-8 shadow-sm border border-border text-left">
              <p className="text-secondary leading-relaxed mb-4">
                We build beautiful, high-performing websites with significantly
                lower overhead costs passed on to you. We understand how important
                online visibility is — and how much it can cost — which is why our
                monthly web hosting runs around 25% cheaper than larger firms.
              </p>
              <p className="text-secondary leading-relaxed">
                We offer full integration with donation platforms, payment
                processors, and custom forms to fit your business needs. All data
                is stored securely with modern encryption and best practices to
                prevent any data leaks or breaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
