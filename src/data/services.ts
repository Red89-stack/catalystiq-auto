export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "ai-forecasting",
    title: "AI Forecasting",
    tagline: "Predict demand, staffing, and maintenance windows.",
    description:
      "We use historical data + live signals to forecast jobs, inventory needs, and technician load. Integrates with your CRM and dispatch.",
  },
  {
    slug: "iot-integration",
    title: "IoT Integration",
    tagline: "Real-time monitoring for equipment & sites.",
    description:
      "Sensor selection, secure networking, and dashboards for uptime, energy usage, and alerts. Includes device onboarding and firmware strategy.",
  },
  {
    slug: "cybersecurity-consultation",
    title: "CyberSec Consultation",
    tagline: "Protect client data and field devices.",
    description:
      "Network hardening, zero-trust access, compliance audits, and incident playbooks tailored for HVAC & field ops.",
  },
  {
    slug: "inventory-tracking",
    title: "Inventory & Equipment Tracking",
    tagline: "Know where everything is—instantly.",
    description:
      "Barcode/RFID + mobile workflows to track parts, trucks, warranties, and returns across your operation.",
  },
  {
    slug: "cloud-platforms",
    title: "Cloud Platforms",
    tagline: "Dashboards, APIs, and automation pipelines.",
    description:
      "Design & build cloud dashboards for remote oversight, reporting, and automated workflows.",
  },
  {
    slug: "3d-scanning-modeling",
    title: "3D Scanning & Modeling",
    tagline: "Fast capture for documentation and fabrication.",
    description:
      "Scan-to-model pipelines for components and assemblies; organize and retrieve models for tech and sales teams.",
  },
];

