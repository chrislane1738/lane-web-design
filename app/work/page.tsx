import type { Metadata } from "next";
import WorkPage from "./WorkPage";

export const metadata: Metadata = {
  title: "Web Design Portfolio | Concord, CA",
  description:
    "Browse our portfolio of custom websites built for small businesses in Concord, CA and the Bay Area. See what Lane Web Design can build for you.",
  openGraph: {
    title: "Web Design Portfolio | Lane Web Design, Concord CA",
    description:
      "Browse our portfolio of custom websites built for small businesses in Concord, CA and the Bay Area.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Portfolio | Lane Web Design, Concord CA",
    description:
      "Browse our portfolio of custom websites built for small businesses in Concord, CA and the Bay Area.",
  },
  alternates: {
    canonical: "https://clanewebdesign.com/work",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://clanewebdesign.com" },
    { "@type": "ListItem", position: 2, name: "Our Work", item: "https://clanewebdesign.com/work" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WorkPage />
    </>
  );
}
