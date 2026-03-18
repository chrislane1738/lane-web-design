"use client";

import { Palette, Code, Search, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TypewriterServiceCard from "@/components/services/TypewriterServiceCard";
import ProcessSteps from "@/components/services/ProcessSteps";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/layout/PageTransition";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Every project starts with understanding your brand. We create custom designs that look beautiful, feel intuitive, and genuinely represent who you are.",
    features: [
      "Custom layouts tailored to your brand",
      "Mobile-first responsive design",
      "User experience strategy",
      "Brand-aligned color and typography",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "We build with modern frameworks that deliver blazing-fast load times, smooth interactions, and rock-solid reliability.",
    features: [
      "Next.js & React development",
      "Performance-optimized builds",
      "Content management integration",
      "Secure, scalable hosting setup",
    ],
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description:
      "Being found online is just as important as looking great. We make sure your site ranks well and you can track what matters.",
    features: [
      "On-page SEO optimization",
      "Google Business Profile setup",
      "Analytics & conversion tracking",
      "Local search optimization",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Your site should keep working for you long after launch. We handle updates, security, and tweaks so you can focus on running your business.",
    features: [
      "Regular updates & backups",
      "Security monitoring",
      "Content updates on request",
      "Performance monitoring",
    ],
  },
];

export default function ServicesPage() {
  const heroRef = useScrollAnimation();
  const processRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-cream" ref={heroRef}>
        <Container>
          <div className="max-w-2xl reveal-up">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What We Offer
            </h1>
            <div className="w-12 h-1 bg-terracotta rounded-full mb-6" />
            <p className="text-lg text-charcoal-light leading-relaxed">
              From first concept to ongoing growth. Everything your small business
              needs to thrive online.
            </p>
          </div>
        </Container>
      </section>

      {/* Services with typewriter */}
      <section className="py-16 md:py-24 bg-cream">
        <Container>
          <div className="space-y-20 md:space-y-28">
            {services.map((service, i) => (
              <TypewriterServiceCard
                key={service.title}
                {...service}
                reversed={i % 2 === 1}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 bg-sand/40" ref={processRef}>
        <Container>
          <div className="reveal-up">
            <SectionHeading
              title="How We Work"
              subtitle="A simple, transparent process from start to finish."
            />
          </div>
          <ProcessSteps />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal" ref={ctaRef}>
        <Container className="text-center">
          <div className="reveal-up">
            <h2
              className="text-3xl md:text-4xl text-cream mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s build something great together.
            </h2>
          </div>
          <div className="reveal-up">
            <p className="text-cream/70 text-lg max-w-xl mx-auto mb-10">
              Every project starts with a conversation. Tell us about your business
              and we&apos;ll show you what&apos;s possible.
            </p>
          </div>
          <div className="reveal-up flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Get in Touch</Button>
            <Button href="/pricing" variant="outline">
              View Pricing
            </Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
