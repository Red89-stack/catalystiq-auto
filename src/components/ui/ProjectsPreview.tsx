import React from "react";

export default function ProjectsPreview() {
  return (
    <section className="py-16 px-6 bg-zinc-100 text-black">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center">Recent Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded p-4 shadow">
            <h4 className="font-bold mb-2">3D Scanned Inventory System</h4>
            <p>Database and dashboard pipeline for STL uploads and categorization.</p>
          </div>
          <div className="bg-white rounded p-4 shadow">
            <h4 className="font-bold mb-2">HVAC Locator Module</h4>
            <p>Arduino-based GPS device with mobile and dashboard integration.</p>
          </div>
          <div className="bg-white rounded p-4 shadow">
            <h4 className="font-bold mb-2">AI powered chat bot</h4>
            <p>AI powered chatbot integrated into social media and website</p>
          </div>
        </div>
      </div>
    </section>
  );
}
