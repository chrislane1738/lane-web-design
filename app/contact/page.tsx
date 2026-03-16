import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact | Lane Web Design",
  description:
    "Get in touch with Lane Web Design. Let's talk about your next web project. Serving Concord and the Bay Area.",
};

export default function Page() {
  return <ContactPage />;
}
