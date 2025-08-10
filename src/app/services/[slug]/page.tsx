import Link from "next/link";
import { services } from "./data";

export const metadata = {
  title: "Services — CatalystIQ",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="p-6 bg-zinc-800 rounded-lg shadow-lg hover:bg-zinc-700 transition block"
          >
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-zinc-300">{service.description}</p>
            <span className="inline-block mt-4 underline">Learn more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
