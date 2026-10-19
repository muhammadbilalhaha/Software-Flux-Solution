import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";

const checklist = [
  "Custom SaaS Application Development",
  "SaaS Platform & Software Development",
  "SaaS Development Consulting & Strategy",
];

export default function CTA() {
  return (
    <section className="relative bg-white py-20 lg:py-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-navy leading-tight mb-6">
              Let's Build Your SaaS Product Together.
            </h2>

            <p className="text-brand-gray leading-relaxed mb-8 max-w-xl">
              Contact us and we'll set up a video call to discuss your saas
              development requirements in detail.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mb-10">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-navy">
                  {/* Purple check icon */}
                  <span className="shrink-0 w-5 h-5 rounded-full bg-brand-purple flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Button
              href="/contact"
              variant="primary"
              className="!bg-brand-gradient !text-white !px-8 !py-3 !font-semibold shadow-lg"
            >
              Get in Touch
            </Button>
          </div>

          {/* RIGHT: Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/images/illustrations/ctaPhone.webp"
              alt="Let's build your SaaS product together"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}