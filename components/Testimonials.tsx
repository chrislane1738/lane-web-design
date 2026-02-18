import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Lane Web Design completely transformed our online presence. Our new site looks incredible and has doubled our lead generation in just three months.",
    name: "Sarah Mitchell",
    company: "Coastal Realty",
  },
  {
    quote:
      "Professional, responsive, and incredibly talented. They took our vision and turned it into a website that truly represents our brand. Highly recommend.",
    name: "James Chen",
    company: "FreshBite Kitchen",
  },
  {
    quote:
      "The team at Lane Web Design delivered beyond our expectations. Our site is fast, beautiful, and our customers love it. Best investment we've made.",
    name: "Emily Rodriguez",
    company: "Summit Fitness",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — hear from the businesses we've helped."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-secondary leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-secondary">
                  {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
