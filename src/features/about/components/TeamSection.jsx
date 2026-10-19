import Container from "../../../components/ui/Container";
import { team } from "../data/team";

export default function TeamSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.25em] text-brand-purple uppercase mb-3">
            Meet Our Team
          </p>
          <p className="text-brand-gray leading-relaxed">
            Our saas development services team is made up of senior engineers,
            product managers, and designers, all passionate about building great
            SaaS products.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {team.map((member) => (
            <div key={member.id} className="text-center">
              {/* Photo with soft blob behind */}
              <div className="relative mb-5">
                {/* Blob background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-brand-cream" />
                </div>

                {/* Portrait */}
                <div className="relative rounded-3xl overflow-hidden w-56 h-64 mx-auto bg-brand-purple/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name + role */}
              <h3 className="text-xl font-bold text-brand-navy mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-brand-purple">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}