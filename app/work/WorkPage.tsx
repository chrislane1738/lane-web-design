"use client";

import Container from "@/components/ui/Container";
import ProjectCard from "@/components/work/ProjectCard";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/layout/PageTransition";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Coastal Realty Group",
    category: "Real Estate",
    gradient: "from-sky-300 to-blue-600",
    large: true,
  },
  {
    title: "FreshBite Kitchen",
    category: "Restaurant",
    gradient: "from-orange-300 to-amber-500",
    large: false,
  },
  {
    title: "Summit Fitness",
    category: "Health & Wellness",
    gradient: "from-emerald-300 to-teal-500",
    large: false,
  },
  {
    title: "Apex Legal Group",
    category: "Professional Services",
    gradient: "from-slate-300 to-slate-600",
    large: true,
  },
  {
    title: "Bloom Botanicals",
    category: "Retail",
    gradient: "from-rose-300 to-pink-500",
    large: false,
  },
  {
    title: "NovaTech Solutions",
    category: "Technology",
    gradient: "from-violet-300 to-indigo-500",
    large: false,
  },
];

export default function WorkPage() {
  const heroRef = useScrollAnimation();
  const gridRef = useScrollAnimation({ staggerDelay: 100 });
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
              Our Work
            </h1>
            <div className="w-12 h-1 bg-terracotta rounded-full mb-6" />
            <p className="text-lg text-charcoal-light leading-relaxed">
              Every project is a partnership. Here&apos;s a sample of the websites
              we&apos;ve crafted for businesses like yours.
            </p>
          </div>
        </Container>
      </section>

      {/* Project Grid */}
      <section className="py-16 md:py-24 bg-cream" ref={gridRef}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`reveal-up ${project.large ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
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
              Like what you see?
            </h2>
          </div>
          <div className="reveal-up">
            <p className="text-cream/70 text-lg max-w-xl mx-auto mb-10">
              Let&apos;s create something just as distinctive for your business.
            </p>
          </div>
          <div className="reveal-up">
            <Button href="/contact">Start Your Project</Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
