"use client";

import { Palette, Code, BarChart3 } from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Palette,
    title: "Design",
    description:
      "Beautiful, intuitive designs that capture your brand personality and connect with your customers.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Fast, responsive websites built with modern technology that works flawlessly on every device.",
  },
  {
    icon: BarChart3,
    title: "SEO & Support",
    description:
      "Get found online and stay running smoothly with ongoing optimization and maintenance.",
  },
];

export default function ServicesTease() {
  const ref = useScrollAnimation({ staggerDelay: 120 });

  return (
    <section className="py-24 bg-cream" ref={ref}>
      <Container>
        <div className="reveal-up">
          <SectionHeading
            title="What We Do"
            subtitle="Everything you need to stand out online, from first sketch to ongoing growth."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.title} className="reveal-up">
              <Card hover className="text-center h-full">
                <div className="w-14 h-14 bg-terracotta/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <service.icon size={28} className="text-terracotta" />
                </div>
                <h3
                  className="text-xl text-charcoal mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center reveal-up">
          <Button href="/services" variant="outline">
            Explore All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
