import "./globals.css";
import type { ReactNode } from "react";
import NavBar from "../components/ui/NavBar";

export const metadata = {
  title: "CatalystIQ",
  description: "Integrations",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
