'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const levels = [
  {
    title: 'Sraddhavan',
    rounds: '1 Round of JAPA a day',
    image: 'https://images.unsplash.com/photo-1616435577207-ca90abc6b732?w=600',
    bgColor: 'from-green-100 to-emerald-100',
  },
  {
    title: 'Krishna Sevaka',
    rounds: '4 Rounds & No Meat-Eating',
    image: 'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?w=600',
    bgColor: 'from-blue-100 to-cyan-100',
  },
  {
    title: 'Krishna Sadhaka',
    rounds: '8 Rounds, Altar at home and Fundamental Elements of the Four principles',
    image: 'https://images.unsplash.com/photo-1716649109499-1a3fe561ca1d?w=600',
    bgColor: 'from-purple-100 to-pink-100',
  },
  {
    title: 'Srila Prabhupada Asraya',
    rounds: '16 Rounds & Four Regulative Principles',
    image: 'https://images.unsplash.com/photo-1572945015532-741f8c49a7b2?w=600',
    bgColor: 'from-orange-100 to-red-100',
  },
  {
    title: 'Sri Guru Carana Asraya',
    rounds: 'Srila Prabhupada-Asraya level for at least Six Months plus a choice of any ISKCON Guru',
    image: 'https://images.pexels.com/photos/1583244/pexels-photo-1583244.jpeg?w=600',
    bgColor: 'from-yellow-100 to-amber-100',
  },
];

const Levels = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id="levels" ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8d7c3] to-[#f5ebe0]"></div>

      <div className="relative z-10 section-container">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="heading-serif text-5xl md:text-6xl font-bold mb-4 text-gray-800">
              Bhakti Steps
            </h2>
            <p className="body-text text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A System for Encouraging Devotees by Recognizing<br />
              their Chanting and Spiritual Standards
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-12 h-0.5 bg-pink-600"></div>
              <div className="w-2.5 h-2.5 rotate-45 bg-pink-600"></div>
              <div className="w-12 h-0.5 bg-pink-600"></div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative px-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-8">
                {levels.map((level, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0"
                  >
                    <div className="group relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl h-[500px]">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={level.image}
                          alt={level.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-b ${level.bgColor} opacity-80 group-hover:opacity-70 transition-opacity duration-500`}></div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col justify-between p-8">
                        <div>
                          <div className="inline-block bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
                            <span className="text-sm font-semibold text-gray-600">Level {index + 1}</span>
                          </div>
                        </div>
                        
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                          <h3 className="heading-serif text-3xl font-bold mb-3 text-gray-800">
                            {level.title}
                          </h3>
                          <div className="h-1 w-16 bg-pink-600 mb-4 rounded"></div>
                          <p className="body-text text-gray-700 leading-relaxed font-medium">
                            {level.rounds}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-pink-600 text-white p-4 rounded-full shadow-2xl hover:bg-pink-700 transition-all duration-300 hover:scale-110 z-20"
              aria-label="Previous Level"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-pink-600 text-white p-4 rounded-full shadow-2xl hover:bg-pink-700 transition-all duration-300 hover:scale-110 z-20"
              aria-label="Next Level"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Levels;
