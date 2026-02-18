import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Us" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white/80 text-lg font-medium">
                Team Photo
              </span>
            </div>
          </div>

          {/* Text content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Crafting Digital Experiences That Drive Results
            </h3>
            <p className="text-secondary leading-relaxed mb-4">
              At Lane Web Design, we believe every business deserves a website
              that works as hard as they do. We combine thoughtful design with
              modern development practices to create sites that look great and
              perform even better.
            </p>
            <p className="text-secondary leading-relaxed mb-8">
              From small businesses to growing brands, we partner with our
              clients to understand their goals and deliver solutions that make a
              real impact. No templates, no shortcuts — just quality work
              tailored to you.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
