import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-4xl font-semibold">Services</h1>
        <p className="text-zinc-400 mt-2">
          Choose a service to see details and request pricing.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="block rounded-lg border border-zinc-800 p-5 hover:bg-zinc-900 transition"
          >
            <h2 className="text-xl font-medium">{s.title}</h2>
            <p className="text-zinc-400 mt-1">{s.tagline}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

