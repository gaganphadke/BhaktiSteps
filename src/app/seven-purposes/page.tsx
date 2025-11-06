'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SevenPurposes() {
  return (
    <>
      <Header />

      <main className="pt-32 bg-white text-gray-800">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Left - Logo */}
            <div className="flex justify-center md:justify-start w-32 h-32 relative">
              <Image
                src="https://bhaktisteps.com/wp-content/uploads/2020/10/iskcon-logo-183x183-150x150-1.png"
                alt="ISKCON Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Center - Title */}
            <div>
              <h1 className="text-5xl font-serif font-semibold text-gray-900 mb-2">
                Seven Purposes
              </h1>
              <h2 className="text-4xl font-serif text-gray-900 italic">
                of ISKCON
              </h2>
            </div>

            {/* Right - Srila Prabhupada Image */}
            <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://bhaktisteps.com/wp-content/uploads/2020/12/SP_2-400x333.jpg"
                alt="Srila Prabhupada"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <p className="text-gray-700 text-base mb-6 border-t border-gray-200 pt-6">
            <strong>
              Srila Prabhupada founded ISKCON in July of 1966. The incorporation
              document states Seven Purposes of ISKCON:
            </strong>
          </p>

          <ol className="list-decimal list-inside space-y-4 text-gray-800 leading-relaxed">
            <li>
              To systematically propagate spiritual knowledge to society at
              large and to educate all peoples in the techniques of spiritual
              life in order to check the imbalance of values in life and to
              achieve real unity and peace in the world.
            </li>
            <li>
              To propagate a consciousness of Krishna as it is revealed in the{' '}
              <em>Bhagavad-gita</em> and <em>Srimad Bhagavatam</em>.
            </li>
            <li>
              To bring the members of the Society together with each other and
              nearer to Krishna, the prime entity, and thus to develop the idea,
              within the members, and humanity at large, that each soul is part
              and parcel of the quality of Godhead (Krishna).
            </li>
            <li>
              To teach and encourage the Sankirtan movement of congregational
              chanting of the holy name of God as revealed in the teachings of
              Lord Sri Chaitanya Mahaprabhu.
            </li>
            <li>
              To erect for the members, and for society at large, a holy place
              of transcendental pastimes dedicated to the personality of
              Krishna.
            </li>
            <li>
              To bring the members closer together for the purpose of teaching a
              simpler and more natural way of life.
            </li>
            <li>
              With a view towards achieving the aforementioned purposes, to
              publish and distribute periodicals, magazines, books, and other
              writings.
            </li>
          </ol>

          <p className="mt-8 text-gray-600">
            <strong>Source:</strong>{' '}
            <a
              href="https://www.iskcon.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.iskcon.org
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
