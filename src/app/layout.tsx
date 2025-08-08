import "./globals.css";
import { ReactNode } from "react";
import NavBar from "@/components/ui/NavBar";

export const metadata = {
  title: "CatalystIQ",
  description: "Integrations",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        <NavBar />
        {/* Add top padding equivalent to nav height (e.g. 64px) */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
