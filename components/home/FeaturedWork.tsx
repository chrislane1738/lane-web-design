"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Flying Squid Drones",
    category: "Media & Photography",
    image: "/work-flying-squid.png",
    url: "https://flyingsquiddrones.com/",
  },
  {
    title: "Stralane",
    category: "Finance & Technology",
    image: "/work-stralane.png",
    url: "https://stralane.com/",
  },
];

export default function FeaturedWork() {
  const ref = useScrollAnimation({ staggerDelay: 150 });

  return (
    <section className="py-24 bg-sand/40" ref={ref}>
      <Container>
        <div className="reveal-up">
          <SectionHeading
            title="Recent Work"
            subtitle="A glimpse of what we've been building for businesses like yours."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-up group block"
            >
              <div className="relative rounded-2xl overflow-hidden bg-warm-white shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                {/* Screenshot */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-4 sm:inset-6 rounded-lg overflow-hidden border-2 border-charcoal/10">
                    <Image
                      src={project.image}
                      alt={`${project.title} website screenshot`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                {/* Info */}
                <div className="p-6">
                  <p className="text-xs font-medium text-terracotta uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3
                    className="text-xl text-charcoal"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

      </Container>
    </section>
  );
}
