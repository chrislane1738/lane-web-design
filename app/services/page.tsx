import type { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "Web Design Services in Concord, CA",
  description:
    "Web design, development, SEO, and maintenance for small businesses in Concord, CA and the Bay Area. Custom websites that help your business grow online.",
  openGraph: {
    title: "Web Design Services | Lane Web Design, Concord CA",
    description:
      "Web design, development, SEO, and maintenance for small businesses in Concord, CA and the Bay Area. Custom websites that help your business grow online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Services | Lane Web Design, Concord CA",
    description:
      "Web design, development, SEO, and maintenance for small businesses in Concord, CA and the Bay Area. Custom websites that help your business grow online.",
  },
  alternates: {
    canonical: "https://clanewebdesign.com/services",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://clanewebdesign.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://clanewebdesign.com/services" },
      ],
    },
    {
      "@type": "Service",
      name: "Web Design",
      description: "Custom website design for small businesses. Mobile-first responsive layouts tailored to your brand.",
      provider: { "@id": "https://clanewebdesign.com/#business" },
      areaServed: { "@type": "Place", name: "Bay Area, California" },
      serviceType: "Web Design",
    },
    {
      "@type": "Service",
      name: "Web Development",
      description: "Modern Next.js and React development with performance-optimized builds and secure hosting.",
      provider: { "@id": "https://clanewebdesign.com/#business" },
      areaServed: { "@type": "Place", name: "Bay Area, California" },
      serviceType: "Web Development",
    },
    {
      "@type": "Service",
      name: "SEO & Analytics",
      description: "On-page SEO optimization, Google Business Profile setup, and local search optimization for small businesses.",
      provider: { "@id": "https://clanewebdesign.com/#business" },
      areaServed: { "@type": "Place", name: "Bay Area, California" },
      serviceType: "Search Engine Optimization",
    },
    {
      "@type": "Service",
      name: "Maintenance & Support",
      description: "Ongoing website maintenance including updates, security monitoring, and content changes.",
      provider: { "@id": "https://clanewebdesign.com/#business" },
      areaServed: { "@type": "Place", name: "Bay Area, California" },
      serviceType: "Website Maintenance",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesPage />
    </>
  );
}
