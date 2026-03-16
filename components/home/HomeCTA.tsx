"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HomeCTA() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 bg-charcoal" ref={ref}>
      <Container className="text-center">
        <div className="reveal-up">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-cream mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to stand out online?
          </h2>
        </div>
        <div className="reveal-up">
          <p className="text-cream/70 text-lg max-w-xl mx-auto mb-10">
            Let&apos;s build something that feels like you. Distinctive and
            built to grow your business.
          </p>
        </div>
        <div className="reveal-up">
          <Button href="/contact" variant="primary">
            Start Your Project
          </Button>
        </div>
      </Container>
    </section>
  );
}
