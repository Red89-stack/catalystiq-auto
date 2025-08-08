"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-zinc-800 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-20">
      <Link href="/" className="text-xl font-bold">
        Catalyst IQ
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-blue-400">
            Services
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
