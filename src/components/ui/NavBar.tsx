import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">CatalystIQ</Link>
        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/security">Security</Link>
        </div>
      </div>
    </nav>
  );
}
