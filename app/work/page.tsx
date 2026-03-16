import type { Metadata } from "next";
import WorkPage from "./WorkPage";

export const metadata: Metadata = {
  title: "Our Work | Lane Web Design",
  description:
    "Browse our portfolio of handcrafted websites for small businesses in Concord and the Bay Area.",
};

export default function Page() {
  return <WorkPage />;
}
