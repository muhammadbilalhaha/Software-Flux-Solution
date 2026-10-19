import Container from "../../../components/ui/Container";
import TestimonialCarousel from "./TestimonialCarousel";
import { testimonials } from "../data/testimonials";

export default function Testimonial() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <Container>
        <TestimonialCarousel testimonials={testimonials} />
      </Container>
    </section>
  );
}