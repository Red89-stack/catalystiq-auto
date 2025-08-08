// src/components/ui/HeroSection.tsx

<<<<<<< HEAD
=======
"use client";

>>>>>>> 6ea3d6b (Restore navbar, fix HeroSection navigation, update services page layout)
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push("/services");
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-white text-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Logo at top center */}
      <div className="absolute top-8">
        <Image
          src="/images/logo.png"
          alt="Catalyst IQ Logo"
          width={150}
          height={150}
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main content */}
      <div className="relative z-10 p-10 rounded-xl max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Catalyst IQ
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering Industry with IoT, AI, and Real-Time Insights.
        </p>
        <button
          onClick={handleExploreClick}
          className="bg-blue-600 hover:bg-blue-700 text-white text-base px-6 py-2 rounded-lg"
        >
          Explore Solutions
        </button>
      </div>
    </section>
  );
}

