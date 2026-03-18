"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/pricing/PricingCard";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/layout/PageTransition";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projectTiers = [
  {
    name: "Starter",
    price: "$595",
    description:
      "A polished, professional site to establish your online presence. Perfect for new businesses or a focused landing page.",
    features: [
      "Up to 6 custom-designed pages",
      "Mobile-responsive layout",
      "Basic on-page SEO",
      "1 round of revisions",
      "Launch-ready in ~1 week",
    ],
    ctaText: "Get Started",
    ctaHref: "/contact",
    meta: "Up to 6 pages",
  },
  {
    name: "Standard",
    price: "$1,360",
    description:
      "Everything your small business needs to compete online. The full package for businesses ready to grow.",
    features: [
      "Up to 10 custom-designed pages",
      "Mobile-responsive layout",
      "Contact form integration",
      "Google Business Profile setup",
      "Analytics & conversion tracking",
      "On-page SEO optimization",
      "2 rounds of revisions",
      "Launch-ready in ~2-3 weeks",
    ],
    featured: true,
    badge: "Most Popular",
    ctaText: "Get Started",
    ctaHref: "/contact",
    meta: "Up to 10 pages",
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description:
      "For larger or more complex projects that need a tailored approach. We'll scope it together and quote based on your needs.",
    features: [
      "11+ pages, fully custom",
      "CMS integration",
      "Advanced SEO strategy",
      "Custom functionality",
      "3+ rounds of revisions",
      "Dedicated project timeline",
    ],
    ctaText: "Get a Quote",
    ctaHref: "/contact",
    meta: "11+ pages",
  },
];

const monthlyPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description:
      "Keep your site live and running smoothly. Hosting, security, and peace of mind included.",
    features: [
      "Fast, reliable hosting",
      "SSL certificate included",
      "Uptime monitoring",
      "Monthly backups",
      "Security updates",
    ],
    ctaText: "Add to Project",
    ctaHref: "/contact",
  },
  {
    name: "Growth",
    price: "$79",
    period: "/mo",
    description:
      "For businesses that want their site to keep improving. Regular updates and insights on how your site performs.",
    features: [
      "Everything in Starter",
      "Monthly content updates",
      "Performance reports",
      "Basic design tweaks",
      "Email support",
    ],
    featured: true,
    badge: "Best Value",
    ctaText: "Add to Project",
    ctaHref: "/contact",
  },
  {
    name: "Full Support",
    price: "$149",
    period: "/mo",
    description:
      "Your site, fully managed. Priority access, regular design updates, and a quarterly call to align on strategy.",
    features: [
      "Everything in Growth",
      "Priority support",
      "Ongoing design updates",
      "Quarterly strategy call",
      "Analytics deep-dive",
    ],
    ctaText: "Add to Project",
    ctaHref: "/contact",
  },
];

export default function PricingPage() {
  const heroRef = useScrollAnimation();
  const projectRef = useScrollAnimation();
  const monthlyRef = useScrollAnimation();
  const compareRef = useScrollAnimation();
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
              Honest Pricing, No Surprises
            </h1>
            <div className="w-12 h-1 bg-terracotta rounded-full mb-6" />
            <p className="text-lg text-charcoal-light leading-relaxed">
              Most agencies hide their pricing behind a consultation. We
              don&apos;t. Custom design, modern tech, and ongoing support at a
              fraction of the typical cost.
            </p>
          </div>
        </Container>
      </section>

      {/* Project Tiers */}
      <section className="py-16 md:py-24 bg-cream" ref={projectRef}>
        <Container>
          <div className="reveal-up">
            <SectionHeading
              title="Project Packages"
              subtitle="One-time investment to get your site designed, built, and launched."
            />
            <p className="text-terracotta font-semibold text-center -mt-10 md:-mt-12 mb-0">
              Launch pricing: 15% off all packages as we build our portfolio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-8 mt-12 md:mt-16">
            {projectTiers.map((tier, i) => (
              <div key={tier.name} className={`reveal-up`} style={{ animationDelay: `${i * 100}ms` }}>
                <PricingCard {...tier} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Monthly Plans */}
      <section className="py-16 md:py-24 bg-sand/40" ref={monthlyRef}>
        <Container>
          <div className="reveal-up">
            <SectionHeading
              title="Monthly Plans"
              subtitle="Hosting, maintenance, and support bundled into one simple monthly price. No hidden fees."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-8 mt-12 md:mt-16">
            {monthlyPlans.map((plan, i) => (
              <div key={plan.name} className={`reveal-up`} style={{ animationDelay: `${i * 100}ms` }}>
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24 bg-cream" ref={compareRef}>
        <Container>
          <div className="reveal-up">
            <SectionHeading
              title="How We Compare"
              subtitle="Custom quality at near-DIY prices. Here's how we stack up."
            />
          </div>
          <div className="mt-12 md:mt-16 reveal-up">
            <ComparisonTable />
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
              Ready to get started?
            </h2>
          </div>
          <div className="reveal-up">
            <p className="text-cream/70 text-lg max-w-xl mx-auto mb-10">
              Every project begins with a free consultation. Tell us about your
              business, and we&apos;ll put together a plan that fits your budget.
            </p>
          </div>
          <div className="reveal-up flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Get in Touch</Button>
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
