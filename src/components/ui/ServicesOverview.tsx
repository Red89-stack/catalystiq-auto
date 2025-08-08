import React from "react";

export default function ServicesOverview() {
  return (
    <section className="py-16 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">IoT Integration</h3>
            <p className="text-gray-700">Smart monitoring and connectivity for HVAC and industrial systems.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">AI Forecasting</h3>
            <p className="text-gray-700">Predictive analytics for maintenance and supply chain planning.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
            <p className="text-gray-700">Tailored apps and dashboards to streamline field operations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}