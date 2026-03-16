"use client";

import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import PageTransition from "@/components/layout/PageTransition";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactPage() {
  const heroRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ staggerDelay: 200 });

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
              Get in Touch
            </h1>
            <div className="w-12 h-1 bg-terracotta rounded-full mb-6" />
            <p className="text-lg text-charcoal-light leading-relaxed">
              Ready to start your project? Drop us a line and we&apos;ll get back to
              you within 24 hours.
            </p>
          </div>
        </Container>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-cream" ref={contentRef}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
            <div className="md:col-span-3 reveal-left">
              <ContactForm />
            </div>
            <div className="md:col-span-2 reveal-right">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
