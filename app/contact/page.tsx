import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Your Concord Web Designer | Free Consultation",
  description:
    "Get a free consultation for your web design project. Lane Web Design serves small businesses in Concord, CA, the East Bay, and the greater Bay Area.",
  openGraph: {
    title: "Contact Lane Web Design | Concord, CA",
    description:
      "Get a free consultation for your web design project. Serving small businesses in Concord, CA and the Bay Area.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Lane Web Design | Concord, CA",
    description:
      "Get a free consultation for your web design project. Serving small businesses in Concord, CA and the Bay Area.",
  },
  alternates: {
    canonical: "https://clanewebdesign.com/contact",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://clanewebdesign.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://clanewebdesign.com/contact" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPage />
    </>
  );
}
