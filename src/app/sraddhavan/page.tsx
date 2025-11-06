'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function SraddhavanPage() {
  const pathname = usePathname();
  const [activeInnerTab, setActiveInnerTab] = useState('STANDARDS');

  const tabs = [
    { name: 'SRADDHAVAN', href: '/sraddhavan', color: '#c10c56' },
    { name: 'KRISHNA SEVAKA', href: '/krishna-sevaka', color: '#eab676' },
    { name: 'KRISHNA SADHAKA', href: '/krishna-sadhaka', color: '#f0a04b' },
    { name: 'SRILA PRABHUPADA ASRAYA', href: '/srila-prabhupada-asraya', color: '#e8a87c' },
    { name: 'SRI GURU CARANA ASRAYA', href: '/sri-guru-carana-asraya', color: '#e8a87c' },
  ];

  const innerTabs = ['STANDARDS', 'APPLICATION', 'CERTIFICATES', 'RECOMMENDED'];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start text-center overflow-x-hidden">
        <Header/>
      {/* Background */}
      <Image src="/background-forest.jpg" alt="Background" fill className="object-cover -z-10" />

      {/* Outer Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mt-24 z-10">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
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
      <h1 className="text-6xl font-serif text-[#d6a77a] mt-10 drop-shadow-md">SRADDHAVAN</h1>

      {/* Card */}
      <div className="card w-[90%] max-w-7xl mt-10 text-left">
        {/* Inner Tabs */}
        <div className="tab-header">
          {innerTabs.map((tab) => (
            <span
              key={tab}
              className={tab === activeInnerTab ? 'active-tab-header' : ''}
              onClick={() => setActiveInnerTab(tab)}
            >
              » {tab}
            </span>
          ))}
        </div>

        {/* Content area */}
        <div className="p-10">
          {activeInnerTab === 'STANDARDS' && (
            <ol className="standards-list">
              <li>
                To be an active devotee and to attend the programs regularly, participate and associate with Krishna Conscious devotees.
              </li>
              <li>To chant at least one round of Hare Krishna Maha-mantra every day.</li>
              <li>
                To read the teachings of Lord Krishna as given in the books of Srila Prabhupada.
              </li>
            </ol>
          )}

          {activeInnerTab === 'APPLICATION' && (
            <div className="flex justify-center items-center">
              <Image
                src="https://bhaktisteps.com/wp-content/uploads/2024/03/001-Shraddhavan-Eng-App-1.png"
                alt="Bhakti Step Application Sraddhavan"
                width={900}
                height={700}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          )}

          {activeInnerTab === 'CERTIFICATES' && (
  <div className="relative w-full h-[80vh]"> {/* fills the card area */}
    <Image
      src="https://bhaktisteps.com/wp-content/uploads/2024/03/001_SDA_Sadhana-Level-Certificates-Eng.pptx.png"
      alt="Bhakti Step Certificates Sraddhavan"
      fill
      className="object-contain rounded-lg shadow-lg"
      priority
    />
  </div>
)}


          {activeInnerTab === 'RECOMMENDED' && (
            <div className="recommended-grid">
              {/* CARD 1 */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">SONGS</div>
                  <div className="flip-card-back">
                    <p>Srila Prabhupada Pranama</p>
                    <p>Panchatattva Mantra</p>
                    <p>Hare Krishna Mahamantra</p>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">PRACTICES</div>
                  <div className="flip-card-back">
                    <p>One Round Japa</p>
                    <p>Krishna’s Picture</p>
                    <p>Weekly Once Satsanga</p>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">BOOKS</div>
                  <div className="flip-card-back">
                    <p>On The Way to Krishna</p>
                    <p>Elevation to Krishna Consciousness</p>
                    <p>Perfection of Yoga</p>
                  </div>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">ADDITIONAL BOOKS</div>
                  <div className="flip-card-back">
                    <p>Beyond Birth and Death</p>
                    <p>Message of Godhead</p>
                    <p>Life comes from Life</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
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

      {/* CSS */}
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
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(8px);
          min-height: 700px;
        }

        .tab-header {
          display: flex;
          justify-content: space-around;
          font-weight: 500;
          font-size: 1.2rem;
          border-bottom: 2px solid #f4d7ea;
          padding: 18px 0;
          color: #4b3a3a;
          background-color: #fde6f4;
        }

        .tab-header span {
          cursor: pointer;
        }

        .active-tab-header {
          color: #c10c56;
          font-weight: 700;
          border-bottom: 3px solid #c10c56;
        }

        .standards-list {
          list-style-type: decimal;
          padding-left: 25px;
          color: #4c4c4c;
          font-size: 1.2rem;
          line-height: 1.7;
          font-family: 'Georgia', serif;
        }

        /* === Recommended section === */
        .recommended-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          justify-items: center;
          padding: 20px 10px;
        }

        .flip-card {
          background-color: transparent;
          width: 90%;
          height: 260px;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
          border-radius: 15px;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2.2rem;
          font-family: 'Georgia', serif;
          font-weight: 500;
          color: #222;
          background: #f6f6f6;
        }

        .flip-card-back {
          transform: rotateY(180deg);
          background-color: #b5f7f7;
          font-size: 1.2rem;
          flex-direction: column;
          gap: 12px;
          color: #2b2b2b;
          font-weight: 600;
        }

        .pink-btn {
          background-color: #c10c56;
          color: white;
          font-weight: 600;
          padding: 14px 30px;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .pink-btn:hover {
          transform: scale(1.07);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
        }

        .footer-note {
          color: #a07a55;
          margin-top: 40px;
          margin-bottom: 50px;
          font-weight: 500;
          font-size: 1.2rem;
        }

        .highlight {
          color: #b48a61;
          font-weight: 700;
        }
      `}</style>
      <Footer/>
    </div>
  );
}
