export default function ClientLogo({ client }) {
  return (
    <div className="flex items-center justify-center px-8 py-4 rounded-full border-2 border-dashed border-brand-navy/15 min-w-[160px] h-[80px] bg-white">
      <img
        src={client.logo}
        alt={client.name}
        className="max-h-10 w-auto object-contain"
      />
    </div>
  );
}