'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const leftCards = [
  { title: 'Self Assurance' },
  { title: 'Authenticated Process' },
  { title: 'Well Defined Milestone' },
  { title: 'Impetus to Grow' },
  { title: 'Recognizes & Reinstates' },
  { title: 'Allows Gradual Progression' },
  { title: 'Strength through Faith' },
  { title: 'Harmony in Devotion' },
];

const bottomCards = [
  { title: 'Sraddhavan', subtitle: '1 Round of JAPA a day' },
  { title: 'Krishna Sevaka', subtitle: '4 Rounds & No Meat-Eating' },
  { title: 'Krishna Sadhaka', subtitle: '8 Rounds, Altar at home, and Four Principles' },
  { title: 'Srila Prabhupada Asraya', subtitle: '16 Rounds & Four Regulative Principles' },
  { title: 'Sri Guru Carana Asraya', subtitle: '6 Months of Prabhupada-Asraya + Guru Initiation' },
  { title: 'Bhakti Sevaka', subtitle: 'Dedicated service and participation in temple programs' },
  { title: 'Bhakti Sadhaka', subtitle: 'Commitment to daily sadhana and community growth' },
];

const DISPLAY_TIME = 3000; 
const FADE_TIME = 1000; 

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  const [currentBottomIndex, setCurrentBottomIndex] = useState(0);
  const [fadeTop, setFadeTop] = useState(false);
  const [fadeBottom, setFadeBottom] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const topInterval = setInterval(() => {
      setFadeTop(true);
      setTimeout(() => {
        setCurrentTopIndex((prev) => (prev + 1) % leftCards.length);
        setFadeTop(false);
      }, FADE_TIME);
    }, DISPLAY_TIME + FADE_TIME);

    const bottomInterval = setInterval(() => {
      setFadeBottom(true);
      setTimeout(() => {
        setCurrentBottomIndex((prev) => (prev + 1) % bottomCards.length);
        setFadeBottom(false);
      }, FADE_TIME);
    }, DISPLAY_TIME + FADE_TIME + 1000);

    return () => {
      clearInterval(topInterval);
      clearInterval(bottomInterval);
    };
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
      {/* Inline fade animation styles */}
      <style jsx>{`
        .fade {
          opacity: 1;
          transition: opacity ${FADE_TIME}ms ease-in-out;
        }
        .fade-out {
          opacity: 0;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1566915682737-3e97a7eed93b?w=1920"
          alt="Temple Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">

          {/* LEFT SIDE */}
          <div
            className={`space-y-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            {/* Top Card */}
            <div className="relative h-[150px] flex items-center justify-center bg-gray-800/70 backdrop-blur-md border-2 border-white/30 rounded-lg shadow-2xl overflow-hidden">
              <div
                key={currentTopIndex}
                className={`fade absolute inset-0 flex items-center justify-center ${
                  fadeTop ? 'fade-out' : ''
                }`}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight px-4">
                  {leftCards[currentTopIndex].title}
                </h3>
              </div>

              {/* Arrows */}
              <button
                onClick={handleTopPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white hover:scale-125 transition duration-300"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={handleTopNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white hover:scale-125 transition duration-300"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Bottom Card */}
            <div className="relative h-[180px] flex flex-col items-center justify-center bg-gray-800/70 backdrop-blur-md border-2 border-white/30 rounded-lg shadow-2xl overflow-hidden">
              <div
                key={currentBottomIndex}
                className={`fade absolute inset-0 flex flex-col items-center justify-center text-center ${
                  fadeBottom ? 'fade-out' : ''
                }`}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 px-4">
                  {bottomCards[currentBottomIndex].title}
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed px-4">
                  {bottomCards[currentBottomIndex].subtitle}
                </p>
              </div>

              {/* Arrows */}
              <button
                onClick={handleBottomPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white hover:scale-125 transition duration-300"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={handleBottomNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white hover:scale-125 transition duration-300"
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
            <div className="bg-[#e8d7c3]/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
                Bhakti Steps
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                A System for Encouraging Devotees by Recognizing
                <br />
                their Chanting and Spiritual Standards
              </p>
            </div>

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
