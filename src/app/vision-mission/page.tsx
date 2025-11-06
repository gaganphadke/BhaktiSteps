'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VisionMissionPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      {/* Background Image with Overlay */}
      <div className="relative flex-grow flex items-center justify-center text-center">
        <Image
          src="/vrindavana.jpg" // replace with your background image path if needed
          alt="Vision & Mission Background"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-blue-100/60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Vision & Mission
          </h1>

          <hr className="w-3/4 mx-auto border-t-2 border-white/70 mb-6" />

          <h2 className="text-2xl md:text-3xl font-serif text-orange-300 font-semibold mb-8">
            Recognize &amp; Revitalize Devotee Communities
          </h2>

          <p className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed">
            To provide resources and tools for devotees <br />
            to measure and advance with their practices <br />
            step by step.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
