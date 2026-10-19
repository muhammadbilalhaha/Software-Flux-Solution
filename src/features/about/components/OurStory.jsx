import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";

export default function OurStory() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Photo */}
          <div className="rounded-2xl overflow-hidden bg-brand-cream aspect-square max-w-lg mx-auto lg:mx-0">
            <img
              src="/images/illustrations/team.webp"
              alt="Team working together"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-brand-navy leading-tight mb-6">
              Software Flux Solution, Built for SaaS
            </h2>

            <div className="space-y-4 text-brand-gray leading-relaxed">
              <p>
                Software Flux Solution is a dedicated saas app development
                company founded with one mission, to help businesses build SaaS
                products that work, scale, and succeed.
              </p>
              <p>
                We are not a generalist agency. Our entire team, engineers,
                designers, and product strategists, focuses exclusively on SaaS.
                That specialization is what makes us different from every other
                saas software development company out there.
              </p>
              <p>
                From early-stage startups needing their first MVP to established
                businesses looking for a reliable saas based product development
                company to extend their platform, we bring deep technical
                expertise and genuine product thinking to every engagement.
              </p>
            </div>

            <div className="mt-8">
              <Button
                href="/contact"
                variant="primary"
                className="!bg-gradient-to-r !from-[#b044c0] !to-[#7e2a9f] !text-white !px-8 !py-3 !font-semibold shadow-lg"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}