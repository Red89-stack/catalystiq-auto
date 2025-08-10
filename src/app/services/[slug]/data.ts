export type Service = {
  title: string;
  slug: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "AI Forecasting",
    slug: "ai-forecasting",
    description: "Use AI analytics to forecast operation of your business",
  },
  {
    title: "IoT Integration",
    slug: "iot-integration",
    description: "Deploy sensors and edge devices for remote monitoring and alerts",
  },
  {
    title: "CyberSec Consultation",
    slug: "cybersec-consultation",
    description: "Protect client data, secure IoT networks, audit network compliance",
  },
  {
    title: "Cloud Platforms",
    slug: "cloud-platforms",
    description: "Cloud dashboards for oversight and remote HVAC system monitoring",
  },
  {
    title: "Inventory & Equipment Tracking",
    slug: "inventory-tracking",
    description: "3D scanned parts inventory, asset tracking, and warranty records",
  },
  {
    title: "3D Scanning & Modeling",
    slug: "3d-scanning-modeling",
    description: "Capture and manage 3D models for manufacturing and field service",
  },
];
