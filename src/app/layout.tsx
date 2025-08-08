// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "CatalystIQ",
  description: "Bringing Technology to Industry",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

