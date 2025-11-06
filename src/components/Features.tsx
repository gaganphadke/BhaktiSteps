'use client';

import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    title: 'Self Assurance',
    description: 'Building confidence in spiritual practice',
    icon: '🙏',
  },
  {
    title: 'Authenticated Process',
    description: 'Following traditional vedic methods',
    icon: '✨',
  },
  {
    title: 'Well defined Milestone',
    description: 'Clear goals for spiritual advancement',
    icon: '🎯',
  },
  {
    title: 'Impetus to Grow',
    description: 'Motivation for continuous improvement',
    icon: '🌱',
  },
  {
    title: 'Recognizes & Reinstates',
    description: 'Acknowledging devotional achievements',
    icon: '🏆',
  },
  {
    title: 'Allows Gradual Progression',
    description: 'Step-by-step spiritual development',
    icon: '📈',
  },
];

const Features = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
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
    <section ref={sectionRef} className="py-20 bg-[#f5ebe0] relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-16" preserveAspectRatio="none">
          <path fill="var(--cream-bg)" d="M0,50 Q360,0 720,50 T1440,50 L1440,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="section-container">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                  >
                    <div className="bg-white rounded-lg shadow-lg p-8 h-full transform hover:scale-105 transition-transform duration-300 hover:shadow-xl border-t-4 border-pink-500">
                      <div className="text-5xl mb-4 text-center">{feature.icon}</div>
                      <h3 className="heading-serif text-2xl font-bold text-center mb-3 text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="body-text text-center text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
