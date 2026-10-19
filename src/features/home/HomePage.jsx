import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyDifferent from "./components/WhyDifferent";
import TrustedBy from "./components/TrustedBy";
import Industries from "./components/Industries";
import Testimonial from "./components/Testimonial";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import LatestBlogs from "./components/LatestBlogs";
import CTA from "./components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyDifferent />
      <TrustedBy />
      <Industries />
      <Testimonial />
      <Portfolio />
      <WhyChooseUs />
      <LatestBlogs />
      <CTA />
    </>
  );
}