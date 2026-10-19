import Container from "../../../components/ui/Container";

export default function ContactMap() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <Container>
        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            title="Software Flux Solution Location"
            src="https://www.google.com/maps?q=Software+Flux+Solution+Wah+Cantt+Pakistan&output=embed"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </Container>
    </section>
  );
}