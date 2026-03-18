import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Your Concord, CA Web Designer",
  description:
    "Meet Chris Lane, the web designer behind Lane Web Design in Concord, CA. Building affordable, custom websites for small businesses across the East Bay and greater Bay Area.",
  openGraph: {
    title: "About Lane Web Design | Concord, CA Web Designer",
    description:
      "Meet Chris Lane, the web designer behind Lane Web Design in Concord, CA. Building affordable, custom websites for small businesses across the Bay Area.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lane Web Design | Concord, CA Web Designer",
    description:
      "Meet Chris Lane, the web designer behind Lane Web Design in Concord, CA. Building affordable, custom websites for small businesses across the Bay Area.",
  },
  alternates: {
    canonical: "https://clanewebdesign.com/about",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://clanewebdesign.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://clanewebdesign.com/about" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutPage />
    </>
  );
}
