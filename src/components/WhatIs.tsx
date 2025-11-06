'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const WhatIs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg viewBox="0 0 1440 100" className="w-full h-16" preserveAspectRatio="none">
          <path fill="#f5ebe0" d="M0,50 Q360,0 720,50 T1440,50 L1440,0 L0,0 Z"></path>
        </svg>
      </div>

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1616435577207-ca90abc6b732?w=1920"
          alt="Lotus Background"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#e8d7c3]/90"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 transition-all duration-1000 
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            What is Bhakti Steps?
          </h2>
        </div>

        {/* Video */}
        <div className="mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/aCiw439l5Dw"
              title="Bhakti Steps Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-xl leading-relaxed text-gray-800 mb-6">
            The Bhakti-Steps Program is a system for encouraging the congregation by recognizing
            their chanting and their spiritual standards. It is a great way to help congregational
            devotees to consolidate and increase their spiritual practices. It also offers a system
            to identify who is serious in advancing in Krsna consciousness, an important
            consideration especially in forming and consolidating your groups.
          </p>

          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            The Bhakti-Steps Program has five levels, gradually leading to initiation:
          </h3>

          <div className="space-y-4 text-lg text-gray-700">
            <p>
              <strong>Sraddhavan:</strong> Chanting at least one round of Hare Krsna maha-mantra
              every day and reading Srila Prabhupada's books.
            </p>

            <p>
              <strong>Krsna (or Gaura) Sevaka:</strong> Chanting at least four rounds of japa,
              refraining from meat-eating (including fish & egg), recognizing Lord Krsna as the
              Supreme Personality of Godhead, and avoiding grossly immoral acts.
            </p>

            <p>
              <strong>Krsna (or Gaura) Sadhaka:</strong> Chanting at least eight rounds and
              practicing sadhana-bhakti by worshiping Krsna at home and eating prasadam. Refraining
              from intoxication, meat-eating (including fish & egg), gambling and extra-marital sex.
            </p>

            <p>
              <strong>Srila Prabhupada Asraya:</strong> Chanting sixteen rounds, following the four
              regulative principles, consistently practicing sadhana.
            </p>

            <p>
              <strong>Sri Guru Carana Asraya:</strong> Practicing Srila Prabhupada Asraya standard
              for a minimum of six months, with additional faith in and surrender to an ISKCON
              initiating spiritual master.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
