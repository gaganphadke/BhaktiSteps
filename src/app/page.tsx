import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Levels from '@/components/Levels';
import WhatIs from '@/components/WhatIs';
import Benefits from '@/components/Benefits';
import GBCReferences from '@/components/GBCReferences';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* <Features /> */}
      {/* <Levels /> */}
      <WhatIs />
      <Benefits />
      <GBCReferences />
      <ScrollToTop />
      <Footer/>
    </main>
  );
}
