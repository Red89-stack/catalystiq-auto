// src/components/ui/ContactSection.tsx
import Link from "next/link";
import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-300">
          Reach out to see how CatalystIQ can power your transformation.
        </p>

        {/* Email (prefilled subject/body) */}
        <a
          href={`mailto:catalystiq@proton.me?subject=${encodeURIComponent(
            "Consultation Inquiry"
          )}&body=${encodeURIComponent(
            "Hi CatalystIQ,\n\nI'd like to talk about automation/IoT for my business.\n\nCompany:\nPreferred date/time:\nNotes:\n"
          )}`}
          className="inline-block text-blue-400 hover:underline"
        >
          catalystiq@proton.me
        </a>

        {/* Call to action buttons */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <Link
            href="/#book"
            className="rounded-md border border-white/20 px-4 py-2 hover:bg-white/10"
          >
            Book a call
          </Link>
          <a
            href="tel:+1-000-000-0000"
            className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/20"
          >
            Call us
          </a>
        </div>
      </div>
    </section>
  );
}

