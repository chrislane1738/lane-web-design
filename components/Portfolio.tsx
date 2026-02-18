"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  title: string;
  category: string;
  color: string;
}

const projects: Project[] = [
  { title: "Coastal Realty", category: "Real Estate", color: "from-green-600 to-emerald-400" },
  { title: "FreshBite Kitchen", category: "Restaurant", color: "from-gray-700 to-gray-400" },
  { title: "Summit Fitness", category: "Health & Fitness", color: "from-green-700 to-green-400" },
  { title: "Apex Legal Group", category: "Professional Services", color: "from-gray-800 to-gray-500" },
  { title: "Bloom Botanicals", category: "E-Commerce", color: "from-emerald-600 to-teal-400" },
  { title: "NovaTech Solutions", category: "Technology", color: "from-slate-700 to-slate-400" },
];

export default function Portfolio() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-muted" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Work"
          subtitle="A selection of projects we've brought to life for our clients."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative rounded-xl overflow-hidden cursor-pointer scroll-hidden-scale stagger-${i + 1}`}
            >
              {/* Placeholder image */}
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-105`}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
