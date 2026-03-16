import type { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "Services | Lane Web Design",
  description:
    "Web design, development, SEO, and ongoing support for small businesses in Concord and the Bay Area.",
};

export default function Page() {
  return <ServicesPage />;
}
