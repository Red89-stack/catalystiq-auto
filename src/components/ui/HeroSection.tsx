"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Tech + HVAC, Integrated.
      </h1>
      <p className="text-zinc-300 max-w-2xl mx-auto mb-10">
        IoT monitoring, AI forecasting, cybersecurity audits, and cloud dashboards—
        built for real-world operations.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/services"
          className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:opacity-90 transition"
        >
          Explore Solutions
        </Link>
        <Link
          href="/book"
          className="px-6 py-3 rounded-lg border border-zinc-600 font-semibold hover:bg-zinc-900 transition"
        >
          Book a Call
        </Link>
      </div>
    </section>
  );
}
