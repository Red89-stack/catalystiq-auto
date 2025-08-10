import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const svc = services.find((s) => s.slug === params.slug);
  return {
    title: svc ? `${svc.title} — Services` : "Service",
    description: svc?.tagline ?? "Service details",
  };
}

export default function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const svc = services.find((s) => s.slug === params.slug);
  if (!svc) return notFound();

  return (
    <article className="max-w-3xl mx-auto p-6 space-y-6">
      <Link href="/services" className="text-sm text-zinc-400 hover:underline">
        ← Back to all services
      </Link>

      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">{svc.title}</h1>
        <p className="text-zinc-400">{svc.tagline}</p>
      </header>

      <p className="text-zinc-200 leading-relaxed">{svc.description}</p>

      {/* Example sections – customize per service */}
      <section className="space-y-2">
        <h2 className="text-xl font-medium">What you get</h2>
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>Discovery workshop & requirements</li>
          <li>Architecture & implementation plan</li>
          <li>Deploy, train, and handoff</li>
          <li>Optional managed support</li>
        </ul>
      </section>

      <div className="pt-2">
        <Link
          href="/#book"
          className="inline-block rounded-md bg-white/10 px-4 py-2 hover:bg-white/20"
        >
          Inquire for pricing / Book a call
        </Link>
      </div>
    </article>
  );
}

