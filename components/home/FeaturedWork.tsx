"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Payback Brazilian Jiu-Jitsu",
    category: "Martial Arts & Fitness",
    image: "/work-payback-bjj.png",
    url: "https://paybackjiujitsu.com",
  },
  {
    title: "Stralane",
    category: "Finance & Technology",
    image: "/work-stralane.png",
    url: "https://stralane.com/",
  },
  {
    title: "Flying Squid Drones",
    category: "Media & Photography",
    image: "/work-flying-squid.png",
    url: "https://flyingsquiddrones.com/",
  },
  {
    title: "Lorenzo Jackson for Student Trustee",
    category: "Political Campaign",
    image: "/work-lorenzo-jackson.png",
    url: "#",
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
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal-up group block ${
                i === projects.length - 1 && projects.length % 2 === 1
                  ? "md:col-start-1 md:col-end-3 md:w-[calc(50%-1rem)] md:mx-auto"
                  : ""
              }`}
            >
              {/* Browser chrome frame */}
              <div className="rounded-t-xl overflow-hidden">
                {/* Tab bar */}
                <div className="bg-[#202124] px-3 pt-2.5 pb-0">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F4BF4F]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#61C554]" />
                    </div>
                    <div className="flex items-center bg-[#35363A] rounded-t-md px-3 py-1.5 ml-1">
                      <span className="text-[10px] text-white/50 truncate">{project.title}</span>
                    </div>
                  </div>
                </div>
                {/* Address bar */}
                <div className="bg-[#202124] px-3 pb-2.5 pt-1.5">
                  <div className="bg-[#35363A] rounded-full px-3 py-1.5 flex items-center">
                    <div className="w-2.5 h-2.5 rounded-full border border-white/20 mr-2 shrink-0" />
                    <span className="text-[10px] text-white/35 truncate">{project.url === "#" ? "coming-soon.com" : project.url.replace("https://", "")}</span>
                  </div>
                </div>
                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden">
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
              <div className="bg-[#202124] px-5 py-4 rounded-b-xl -mt-[1px]">
                <p className="text-xs font-medium text-terracotta-light uppercase tracking-wider mb-1">
                  {project.category}
                </p>
                <h3
                  className="text-lg text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </Container>
    </section>
  );
}
