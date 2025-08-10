import "./globals.css";
import type { ReactNode } from "react";
import NavBar from "../components/ui/NavBar";
import Script from "next/script";

export const metadata = {
  title: "CatalystIQ",
  description: "Integrations",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Script
        id="fww-chat-widget"
        src="https://app.freewebsitewidget.com/widget.js"
        strategy="afterInteractive"
        data-config='%7B%22bubbleColor%22%3A%22%23FFFFFF%22%2C%22iconColor%22%3A%22%23968f8f%22%2C%22message%22%3A%22Welcome!%20How%20can%20I%20automate%20you%20today%3F%22%2C%22subMessage%22%3A%22%22%2C%22platforms%22%3A%7B%22messenger%22%3A%22https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CVDTyTc43%2F%22%2C%22instagram%22%3Afalse%2C%22whatsapp%22%3A%22https%3A%2F%2Fwa.me%2Fqr%2FFLNXKYTWP3N5O1%22%2C%22telegram%22%3A%22t.me%2FCatalystIQ%22%7D%2C%22defaultOpen%22%3A%7B%22mobile%22%3Atrue%2C%22desktop%22%3Atrue%7D%2C%22chatIframeUrl%22%3A%22%22%2C%22allowedDomains%22%3A%5B%5D%2C%22useCustomImage%22%3Atrue%2C%22customImageUrl%22%3A%22https%3A%2F%2Fapp.freewebsitewidget.com%2Fwidget-images%2F915cd0f2-38ae-4062-aab4-aff735b32f2c.png%22%2C%22responsive%22%3A%7B%22mobile%22%3A%7B%22size%22%3A%22small%22%2C%22position%22%3A%22bottom-right%22%2C%22offset%22%3A%7B%22x%22%3A12%2C%22y%22%3A12%7D%7D%2C%22desktop%22%3A%7B%22size%22%3A%22medium%22%2C%22position%22%3A%22bottom-right%22%2C%22offset%22%3A%7B%22x%22%3A20%2C%22y%22%3A20%7D%7D%7D%7D'
      />
      <body>
        <NavBar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
