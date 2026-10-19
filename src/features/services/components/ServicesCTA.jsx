import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";

export default function ServicesCTA() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-blue-900 leading-tight mb-6">
              Ready to Start Your SaaS
              <br />
              Project?
            </h2>

            <p className="text-brand-gray leading-relaxed mb-8 max-w-md">
              Let's discuss your requirements and build something great
              together.
            </p>

            <Button
              href="/contact"
              variant="primary"
              className="!bg-gradient-to-r !from-[#b044c0] !to-[#7e2a9f] !text-white !px-8 !py-3 !font-semibold shadow-lg"
            >
              Get in Touch
            </Button>
          </div>

          {/* RIGHT: Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/images/illustrations/services-cta.png"
              alt="Start your SaaS project"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}