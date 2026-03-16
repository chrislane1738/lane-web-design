import HeroContent from "@/components/home/HeroContent";
import ServicesTease from "@/components/home/ServicesTease";
import FeaturedWork from "@/components/home/FeaturedWork";
// import Testimonials from "@/components/home/Testimonials";  // Hidden until real testimonials
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HeroContent />
      <ServicesTease />
      <FeaturedWork />
      {/* <Testimonials /> */}
      <HomeCTA />
    </>
  );
}
