"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import LocalArea from "@/components/about/LocalArea";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/layout/PageTransition";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutPage() {
  const heroRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const localRef = useScrollAnimation();
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
              About Lane
            </h1>
            <div className="w-12 h-1 bg-terracotta rounded-full mb-6" />
            <p className="text-lg text-charcoal-light leading-relaxed">
              We believe every small business deserves a website that works
              for them, not against them.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder Story */}
      <section className="py-16 md:py-24 bg-cream">
        <Container>
          <Story />
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 bg-sand/40" ref={valuesRef}>
        <Container>
          <div className="reveal-up">
            <SectionHeading
              title="What We Believe"
              subtitle="The principles that guide every project we take on."
            />
          </div>
          <Values />
        </Container>
      </section>

      {/* Local */}
      <section className="py-24 bg-cream" ref={localRef}>
        <Container>
          <LocalArea />
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
              Want to work together?
            </h2>
          </div>
          <div className="reveal-up">
            <p className="text-cream/70 text-lg max-w-xl mx-auto mb-10">
              We&apos;d love to hear about your business and explore how we can help.
            </p>
          </div>
          <div className="reveal-up">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
