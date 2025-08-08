import React from "react";

export default function ContactSection() {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-300">
          Reach out to see how CatalystIQ can power your transformation.
        </p>
        <a href="mailto:catalystiq@proton.me" className="text-blue-400 hover:underline">
          catalystiq@proton.me
        </a>
      </div>
    </section>
  );
}
