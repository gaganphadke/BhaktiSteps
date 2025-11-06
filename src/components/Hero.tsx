'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const leftCards = [
  { title: 'Self Assurance', subtitle: '' },
  { title: 'Authenticated Process', subtitle: '' },
  { title: 'Well Defined Milestone', subtitle: '' },
  { title: 'Impetus to Grow', subtitle: '' },
  { title: 'Recognizes & Reinstates', subtitle: '' },
  { title: 'Allows Gradual Progression', subtitle: '' },
  { title: 'Strength through Faith', subtitle: '' },
  { title: 'Harmony in Devotion', subtitle: '' },
];

const bottomCards = [
  { title: 'Sraddhavan', subtitle: '1 Round of JAPA a day' },
  { title: 'Krishna Sevaka', subtitle: '4 Rounds & No Meat-Eating' },
  { title: 'Krishna Sadhaka', subtitle: '8 Rounds, Altar at home, and Four Principles' },
  { title: 'Srila Prabhupada Asraya', subtitle: '16 Rounds & Four Regulative Principles' },
  { title: 'Sri Guru Carana Asraya', subtitle: 'At least Six Months of Prabhupada-Asraya + Guru Initiation' },
  { title: 'Bhakti Sevaka', subtitle: 'Dedicated service and participation in temple programs' },
  { title: 'Bhakti Sadhaka', subtitle: 'Commitment to daily sadhana and community growth' },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  const [currentBottomIndex, setCurrentBottomIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleTopPrev = () =>
    setCurrentTopIndex((prev) => (prev === 0 ? leftCards.length - 1 : prev - 1));
  const handleTopNext = () =>
    setCurrentTopIndex((prev) => (prev === leftCards.length - 1 ? 0 : prev + 1));

  const handleBottomPrev = () =>
    setCurrentBottomIndex((prev) => (prev === 0 ? bottomCards.length - 1 : prev - 1));
  const handleBottomNext = () =>
    setCurrentBottomIndex((prev) => (prev === bottomCards.length - 1 ? 0 : prev + 1));

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1566915682737-3e97a7eed93b?w=1920"
          alt="Temple Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">

          {/* LEFT SIDE */}
          <div
            className={`space-y-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            {/* Top Card */}
            <div className="relative bg-gray-800/70 backdrop-blur-md border-2 border-white/30 p-8 rounded-lg shadow-2xl hover:scale-105 transition-all duration-500">
              <h3 className="heading-serif text-4xl md:text-5xl font-bold text-white text-center leading-tight min-h-[120px] flex items-center justify-center">
                {leftCards[currentTopIndex].title}
              </h3>

              {/* Transparent Arrows */}
              <button
                onClick={handleTopPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white hover:scale-125 transition-transform duration-300"
                aria-label="Previous top card"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={handleTopNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white hover:scale-125 transition-transform duration-300"
                aria-label="Next top card"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Bottom Card */}
            <div className="relative bg-gray-800/70 backdrop-blur-md border-2 border-white/30 p-8 rounded-lg shadow-2xl hover:scale-105 transition-all duration-500">
              <h3 className="heading-serif text-4xl md:text-5xl font-bold text-white text-center mb-4 leading-tight">
                {bottomCards[currentBottomIndex].title}
              </h3>
              <p className="body-text text-white/90 text-center text-sm md:text-base leading-relaxed min-h-[60px]">
                {bottomCards[currentBottomIndex].subtitle}
              </p>

              {/* Transparent Arrows */}
              <button
                onClick={handleBottomPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white hover:scale-125 transition-transform duration-300"
                aria-label="Previous bottom card"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={handleBottomNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white hover:scale-125 transition-transform duration-300"
                aria-label="Next bottom card"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`space-y-8 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Title */}
            <div className="bg-[#e8d7c3]/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl">
              <h1 className="heading-serif text-5xl md:text-7xl font-bold text-gray-800 mb-4 text-center">
                Bhakti Steps
              </h1>
              <p className="body-text text-lg md:text-xl text-gray-700 text-center leading-relaxed italic">
                A System for Encouraging Devotees by Recognizing
                <br />
                their Chanting and Spiritual Standards
              </p>
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.pexels.com/photos/13724077/pexels-photo-13724077.jpeg?w=800"
                alt="Devotional Scene"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
