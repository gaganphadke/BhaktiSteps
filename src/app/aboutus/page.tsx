'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// ✅ Import Font Awesome icons
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#FBEAD7] text-gray-800">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Hero Section (About Us + Logos together) */}
      <section
        className="relative flex flex-col justify-center items-center text-center text-[#E5CBAF] px-6 pt-32 pb-12"
        style={{
          backgroundImage: "url('/images/aboutus-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-4">About Us</h1>
          <div className="border-t border-[#E5CBAF] w-48 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif mb-10">
            ISKCON Congregation Development Ministry
          </h2>

          {/* ✅ Paragraph */}
          <p className="text-white text-lg leading-relaxed mb-12">
            His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada has set into motion
            congregational preaching on a global scale, as envisioned by Srila Bhaktivinoda Thakura,
            and Lord Sri Krsna Caitanya Mahaprabhu himself.
            <br />
            <br />
            Taken inspiration, HH Jayapataka Swami started ISKCON’s Congregational Development
            Ministry as a tool and source of inspiration to support devotees worldwide in
            congregational preaching through coaching, education and systems of support.
            <br />
            <br />
            Today, the Ministry collaborates internationally with congregational preachers, coaches,
            educators and leaders to support the growth of their congregations.
          </p>

          {/* ✅ Logos Row */}
          <div className="flex justify-center flex-wrap gap-8 mb-10">
            {/* Left Logo */}
            <Link
              href="https://www.iskcon.org/"
              target="_blank"
              className="group bg-white/70 border border-gray-300 rounded-lg shadow-md p-6 w-44 h-44 flex justify-center items-center transition-all duration-300 hover:brightness-110 hover:bg-white"
            >
              <Image
                src="https://bhaktisteps.com/wp-content/uploads/2020/10/Modern-ISKCON-LOGO.jpg"
                alt="ISKCON Logo"
                width={160}
                height={100}
                className="object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
              />
            </Link>

            {/* Center Logo */}
            <Link
              href="https://bhaktisteps.com/"
              target="_blank"
              className="group bg-white/70 border border-gray-300 rounded-lg shadow-md p-6 w-[22rem] h-44 flex flex-col justify-center items-center transition-all duration-300 hover:brightness-110 hover:bg-white"
            >
              <Image
                src="https://bhaktisteps.com/wp-content/uploads/2024/01/BS_NewBlack.png"
                alt="Bhakti Steps Logo"
                width={260}
                height={100}
                className="object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
              />
              <p className="text-center text-gray-700 text-sm mt-2">
                Recognize • Revitalize • Progress
              </p>
            </Link>

            {/* Right Logo */}
            <Link
              href="https://iskconcongregation.com/"
              target="_blank"
              className="group bg-white/70 border border-gray-300 rounded-lg shadow-md p-6 w-44 h-44 flex justify-center items-center transition-all duration-300 hover:brightness-110 hover:bg-white"
            >
              <Image
                src="https://bhaktisteps.com/wp-content/uploads/2020/08/Logo-e1597506672720.png"
                alt="Congregational Development Ministry Logo"
                width={160}
                height={100}
                className="object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Our Leader Section */}
      <section className="text-center px-6 py-20 bg-gradient-to-b from-[#FBEAD7] to-[#F5D9BD]">
        <h3 className="text-sm font-semibold text-[#9575CD] uppercase mb-4 tracking-wide">
          Our Leader
        </h3>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight max-w-4xl mx-auto mb-16">
          Co Minister of ISKCON Congregational Development Ministry and Visionary Congregational
          Preacher
        </h2>

        {/* ✅ Leader Card */}
        <div className="max-w-sm mx-auto bg-[#FDF4EC] rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-8 text-center border border-[#f1dcc7]">
          <div className="w-48 h-58 mx-auto rounded-2xl overflow-hidden mb-6">
            <Image
              src="https://bhaktisteps.com/wp-content/uploads/2020/10/JPS1a.jpg"
              alt="His Holiness Jayapataka Swami"
              width={800}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-5">
            His Holiness Jayapataka Swami
          </h3>
          <p className="text-gray-600 text-lg mb-9">Co – Minister</p>

          {/* ✅ Social Icons (React Icons) */}
          <div className="flex justify-center gap-6 text-2xl mb-7">
            <Link
              href="https://www.facebook.com/JayapatakaSwami/"
              target="_blank"
              className="text-[#3b5998] hover:scale-110 transition-transform"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/jayapatakaswamionline/"
              target="_blank"
              className="text-[#E1306C] hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </Link>
            <Link
              href="mailto:jayapatakaswami@iskconcongregation.com"
              className="text-gray-700 hover:scale-110 transition-transform"
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </section>
      {/* ✅ Meet Our Team Section */}
<section className="text-center px-6 py-24 bg-gradient-to-b from-[#F5D9BD] to-[#FBEAD7]">
  <h3 className="text-sm font-semibold text-[#9575CD] uppercase mb-2 tracking-wide">
    Meet Our
  </h3>
  <h2 className="text-5xl font-serif text-gray-900 mb-3">Team</h2>
  <p className="text-gray-700 text-lg mb-16">
    Led by His Holiness Jayapataka Swami
  </p>

 {/* ✅ Team Cards */}
<div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto">
  {/* Team Member 1 */}
  <div className="bg-[#FEF6EF] rounded-3xl border border-[#f4dcc8] shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300 w-96 py-14 px-10 text-center">
    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 relative bg-[#fef6ef] shadow-[0_0_25px_rgba(0,0,0,0.1)] group">
      <Image
        src="https://bhaktisteps.com/wp-content/uploads/2020/10/sevasvarupa.jpg"
        alt="Seva Svarupa Das"
        fill
        sizes="192px"
        className="object-cover rounded-full transition-transform duration-500 ease-in-out group-hover:scale-90"
      />
    </div>
    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
      Seva Svarupa Das
    </h3>
    <p className="text-gray-600 text-lg mb-8">General Manager</p>
    <div className="flex justify-center">
      <Link
        href="mailto:sevasvarupa@iskconcongregation.com"
        className="text-gray-700 text-2xl hover:text-[#9575CD] transition"
      >
        <FaEnvelope />
      </Link>
    </div>
  </div>

  {/* Team Member 2 */}
  <div className="bg-[#FEF6EF] rounded-3xl border border-[#f4dcc8] shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300 w-96 py-14 px-10 text-center">
    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 relative bg-[#fef6ef] shadow-[0_0_25px_rgba(0,0,0,0.1)] group">
      <Image
        src="https://bhaktisteps.com/wp-content/uploads/2024/10/20241017_121958-scaled-e1730025247776-800x800.jpg"
        alt="Vignanasa Govinda Das"
        fill
        sizes="192px"
        className="object-cover rounded-full transition-transform duration-500 ease-in-out group-hover:scale-90"
      />
    </div>
    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
      Vignanasa Govinda Das
    </h3>
    <p className="text-gray-600 text-lg mb-8">Bhakti Steps Coordinator</p>
    <div className="flex justify-center">
      <Link
        href="mailto:bhaktisteps@iskconcongregation.com"
        className="text-gray-700 text-2xl hover:text-[#9575CD] transition"
      >
        <FaEnvelope />
      </Link>
    </div>
  </div>

  {/* Team Member 3 */}
  <div className="bg-[#FEF6EF] rounded-3xl border border-[#f4dcc8] shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300 w-96 py-14 px-10 text-center">
    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 relative bg-[#fef6ef] shadow-[0_0_25px_rgba(0,0,0,0.1)] group">
      <Image
        src="https://bhaktisteps.com/wp-content/uploads/2023/06/Prananath-Prabhu-e1686475467632.jpg"
        alt="Prananatha Gauranitai Das"
        fill
        sizes="192px"
        className="object-cover rounded-full transition-transform duration-500 ease-in-out group-hover:scale-90"
      />
    </div>
    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
      Prananatha Gauranitai Das
    </h3>
    <p className="text-gray-600 text-lg mb-8">IT Coordinator</p>
    <div className="flex justify-center">
      <Link
        href="mailto:kaunteya.jps@iskcon.net"
        className="text-gray-700 text-2xl hover:text-[#9575CD] transition"
      >
        <FaEnvelope />
      </Link>
    </div>
  </div>
</div>

</section>
<Footer />
    </div>
    
  );
}
