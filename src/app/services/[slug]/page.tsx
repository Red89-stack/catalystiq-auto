import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services"; // <-- keep this
// ❌ remove any "export const services = ..." in this file

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

export default function ServiceDetail({ params }: { params: { slug: string } }) {
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
    </article>
  );
}

