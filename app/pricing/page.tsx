import type { Metadata } from "next";
import PricingPage from "./PricingPage";

export const metadata: Metadata = {
  title: "Affordable Web Design Pricing | Concord, CA",
  description:
    "Affordable web design pricing for small businesses in Concord, CA and the Bay Area. Launch pricing: custom websites from $595. Monthly plans from $29/mo. No hidden fees.",
  openGraph: {
    title: "Web Design Pricing | Lane Web Design, Concord CA",
    description:
      "Affordable web design pricing for small businesses. Launch pricing: custom websites from $595 and monthly plans from $29/mo. No hidden fees.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Pricing | Lane Web Design, Concord CA",
    description:
      "Affordable web design pricing for small businesses. Launch pricing: custom websites from $595 and monthly plans from $29/mo. No hidden fees.",
  },
  alternates: {
    canonical: "https://clanewebdesign.com/pricing",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://clanewebdesign.com" },
        { "@type": "ListItem", position: 2, name: "Pricing", item: "https://clanewebdesign.com/pricing" },
      ],
    },
    {
      "@type": "Offer",
      name: "Starter Website Package",
      description: "Up to 6 page custom website with mobile-responsive design and basic SEO",
      price: "595",
      priceCurrency: "USD",
      offeredBy: { "@id": "https://clanewebdesign.com/#business" },
    },
    {
      "@type": "Offer",
      name: "Standard Website Package",
      description: "Up to 10 page custom website with contact form, Google Business setup, analytics, and SEO",
      price: "1360",
      priceCurrency: "USD",
      offeredBy: { "@id": "https://clanewebdesign.com/#business" },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <PricingPage />
    </>
  );
}
