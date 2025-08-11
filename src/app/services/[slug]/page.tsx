import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/data/services";

// Pre-render all slugs
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Metadata (note Promise in params)
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return { title: "Service" };
  return {
    title: `${svc.title} — Services`,
    description: svc.tagline,
  };
}

// Page (note Promise in params)
export default async function ServiceDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
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


