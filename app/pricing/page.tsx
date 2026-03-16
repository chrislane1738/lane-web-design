import type { Metadata } from "next";
import PricingPage from "./PricingPage";

export const metadata: Metadata = {
  title: "Pricing | Lane Web Design",
  description:
    "Transparent pricing for custom web design. Project packages from $700 and monthly plans from $29/mo. No hidden fees.",
};

export default function Page() {
  return <PricingPage />;
}
