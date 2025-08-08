// src/app/services/page.tsx
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Catalyst IQ",
  description: "Detailed overview of all services offered by Catalyst IQ",
};

const services = [
  {
    title: "ChatBot Integration",
    description:
      "Integrate a powerful ChatBot into social media outlets: SEO analytics, lead generation, automate sales, increase advertising/promotions & so much more",
  },
  {
    title: "AI Forecasting",
    description: 
      "Use AI analytics to forecast operation of your business",
    description: "Use AI analytics to forecast operation of your business",
  },
  {
    title: "IoT Integration",
    description:
      "Smart thermostat setup, Remote Diagnostics, Predictive Maintenance/Inventory Management",
  },
  {
    title: "Custom CRM/Database Systems",
    description:
      "Track customers, Jobs, Equipment History, Warranty Data, Invoices",
  },
  {
    title: "CyberSec Consultation",
    description:"Protect Client Data, Secure IoT networks, Audit Network Compliance",
  },
  {
    title: "Inventory and Equipment Tracking Systems",
    description:"RFID or barcode systems to track tools, truck stock, and parts",
  },
  {
    title: "Cloud Platforms",
    description:"Cloud Dashboards for oversight and monitoring HVAC systems remotely",

    description: "Cloud Dashboards for oversight and monitoring HVAC systems remotely",
  },
  {
    title: "3D Scanning and Modeling",
    description:"Use 3D tech to scan mechanical rooms, equipment placement for quoting and planning.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-zinc-800 rounded-lg shadow-lg hover:bg-zinc-700 transition cursor-pointer"
              onClick={() => window.scrollTo(0, 0)} // placeholder for future detail
              className="p-6 bg-zinc-800 rounded-lg shadow-lg hover:bg-zinc-700 transition"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {service.title}
              </h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
