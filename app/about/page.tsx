import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About | Lane Web Design",
  description:
    "Learn about Lane Web Design. A Concord-based studio crafting distinctive websites for small businesses in the Bay Area.",
};

export default function Page() {
  return <AboutPage />;
}
