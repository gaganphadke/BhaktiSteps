'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // ✅ added

export default function SraddhavanPage() {
  const pathname = usePathname(); // ✅ get current page path

  const tabs = [
    { name: 'SRADDHAVAN', href: '/sraddhavan', color: '#c10c56' },
    { name: 'KRISHNA SEVAKA', href: '/krishna-sevaka', color: '#eab676' },
    { name: 'KRISHNA SADHAKA', href: '/krishna-sadhaka', color: '#f0a04b' },
    { name: 'SRILA PRABHUPADA ASRAYA', href: '/srila-prabhupada-asraya', color: '#e8a87c' },
    { name: 'SRI GURU CARANA ASRAYA', href: '/sri-guru-carana-asraya', color: '#e8a87c' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start text-center overflow-x-hidden">
      {/* Background */}
      <Image
        src="/background-forest.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
      />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 z-10">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href; // ✅ dynamic highlight
          return (
            <Link key={tab.name} href={tab.href}>
              <div
                className={`nav-tab ${isActive ? 'active-tab' : 'inactive-tab'}`}
                style={{
                  backgroundColor: isActive ? tab.color : '#bda996',
                  border: isActive ? '3px solid white' : 'none',
                }}
              >
                {tab.name}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Title */}
      <h1 className="text-6xl font-serif text-[#d6a77a] mt-10 drop-shadow-md">
        KRISHNA SEVAKA
      </h1>

      {/* Standards Card */}
      <div className="card max-w-5xl mt-10 text-left">
        <div className="tab-header">
          <span className="active-tab-header">» STANDARDS</span>
          <span>» APPLICATION</span>
          <span>» CERTIFICATES</span>
          <span>» RECOMMENDED</span>
        </div>

        <ol className="standards-list">
          <li>
            To be dedicated and to take shelter of Srila Prabhupada, by following the principles of Krishna Consciousness.​
          </li>
          <li>
            To accept that Lord Krishna is the Supreme Personality of Godhead.​
          </li>
          <li>
            To engage in practical devotional service to Lord Krishna during festivals such as Sri Krishna Janmastami, Gaura Purnima, etc.​
          </li>
          <li>
            To chant a minimum of four rounds of the Hare Krishna Maha-mantra every day.​
          </li>
          <li>
            To refrain from meat eating (including fish and eggs) and to uphold Krishna Conscious values of not causing harm to other living beings.​
          </li>
        </ol>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-10 mt-10 z-10">
        <button className="pink-btn">📄 Application Form</button>
        <button className="pink-btn">📜 Certificate Template</button>
      </div>

      {/* Footer */}
      <p className="footer-note">
        ⚪ The app will be available on Google Play store by{' '}
        <span className="highlight">15th April 2025</span>
      </p>

      {/* Embedded CSS */}
      <style jsx>{`
        .nav-tab {
          border-radius: 10px;
          padding: 10px 20px;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: 0.3s ease;
          font-family: 'Georgia', serif;
        }

        .nav-tab:hover {
          transform: scale(1.05);
          opacity: 1;
        }

        .active-tab {
          opacity: 1;
        }

        .inactive-tab {
          opacity: 0.8;
        }

        .card {
          background: rgba(255, 255, 255, 0.97);
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
          padding: 40px;
          backdrop-filter: blur(6px);
        }

        .tab-header {
          display: flex;
          justify-content: space-around;
          font-weight: 500;
          font-size: 1.1rem;
          border-bottom: 2px solid #f4d7ea;
          padding-bottom: 12px;
          margin-bottom: 20px;
          color: #4b3a3a;
        }

        .tab-header span {
          cursor: pointer;
        }

        .active-tab-header {
          color: #c10c56;
          font-weight: 600;
        }

        .standards-list {
          list-style-type: decimal;
          padding-left: 25px;
          color: #4c4c4c;
          font-size: 1.1rem;
          line-height: 1.6;
          font-family: 'Georgia', serif;
        }

        .pink-btn {
          background-color: #c10c56;
          color: white;
          font-weight: 600;
          padding: 12px 25px;
          border-radius: 9999px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .pink-btn:hover {
          transform: scale(1.07);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
        }

        .footer-note {
          color: #a07a55;
          margin-top: 30px;
          margin-bottom: 40px;
          font-weight: 500;
          font-size: 1.1rem;
        }

        .highlight {
          color: #b48a61;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
