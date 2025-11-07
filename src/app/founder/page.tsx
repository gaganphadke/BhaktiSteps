'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const FounderPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />

      {/* Adjusted top padding to clear header */}
      <main className="flex-grow container mx-auto px-6 pt-32 pb-12">
        {/* Title Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-6">
            Founder–Acharya
          </h1>

          {/* Title + PDF button in same row */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-light font-serif text-gray-700">
              Srila Prabhupada Biography
            </h2>

            <Link
              href="https://onedrive.live.com/?id=9E2ACD25D88873E6%211341&resid=9E2ACD25D88873E6%211341&ithint=file%2Cpdf&e=OiBcIf&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvcyFBdVp6aU5nbHpTcWVpajNtY0VKTkkxWnQ4UTJIP2U9T2lCY0lm&cid=9e2acd25d88873e6&v=validatepermission"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-700 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-pink-800 transition"
            >
              PDF
            </Link>
          </div>
        </section>

        {/* Copyright Section — spans full text+image width */}
        <section className="max-w-6xl mx-auto border-t border-gray-300 pt-4 mb-10">
          <p className="text-sm text-gray-600 font-semibold mb-1">COPYRIGHT NOTICE:</p>
          <p className="text-sm text-gray-600">
            This is an evaluation copy of the printed version of this book, and is NOT FOR RESALE. 
            This evaluation copy is intended for personal non-commercial use only, under the “fair use” 
            guidelines established by international copyright laws. You may use this electronic file to 
            evaluate the printed version of this book, for your own private use, or for short excerpts used 
            in academic works, research, student papers, presentations, and the like.
          </p>
        </section>

        {/* Biography Section */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start leading-relaxed text-lg text-gray-800">
          {/* Text Column */}
          <div className="md:w-3/5">
            <p className="mb-6">
              For millennia the teachings and the rich culture of bhakti-yoga, or Krishna Consciousness, had been hidden within the borders of India. Today, millions around the globe express their gratitude to Srila Prabhupada for revealing the timeless wisdom of bhakti to a world.
            </p>

            <p className="mb-6">
              Born as Abhay Charan De on September 1, 1896, in Calcutta, as a young man he joined 
              Mahatma Gandhi’s civil disobedience movement. In 1922, a meeting with the prominent 
              scholar and spiritual leader, Srila Bhaktisiddhanta Sarasvati, proved to be most influential 
              on young Abhay’s future calling.
            </p>

            <p className="mb-6">
              Srila Bhaktisiddhanta was a leader in the Gaudiya Vaishnava community, a monotheistic 
              tradition within the broader Hindu culture. At their very first meeting, Srila Bhaktisiddhanta 
              asked Abhay to bring the teachings of Lord Krishna to the English-speaking world. Deeply moved 
              by his devotion and wisdom, Abhay became a disciple of Srila Bhaktisiddhanta in 1933, and 
              resolved to carry out his mentor’s request. Abhay, later known by the honorific 
              A.C. Bhaktivedanta Swami Prabhupada, spent the next 32 years preparing for his journey west.
            </p>

            <p className="mb-6">
              In 1965, at the age of sixty-nine, Srila Prabhupada begged a free passage and boarded a cargo 
              ship, the Jaladhuta, to New York. The journey proved to be treacherous and he suffered two heart 
              attacks aboard. After 35 days at sea, he first arrived at a lonely Brooklyn pier with just seven 
              dollars in Indian rupees and a crate of his translations of sacred Sanskrit texts.
            </p>

            <p className="mb-6">
              In New York, he faced great hardships and began his mission humbly by giving classes on the Bhagavad-gita in lofts on the Bowery and leading kirtan (traditional devotional chants) in Tompkins Square Park. His message of peace and goodwill resonated with many young people, some of whom came forward to become serious students of the Krishna-bhakti tradition. With the help of these students, Bhaktivedanta Swami rented a small storefront on New York’s Lower East Side to use as a temple.
            </p>
            <p className="mb-6">
                In July of 1966, Bhaktivedanta Swami established the International Society for Krishna Consciousness (ISKCON) for the purpose he stated of “checking the imbalance of values in the world and working for real unity and peace”.
            </p>
            <p className="mb-6">
                In the eleven years that followed, Srila Prabhupada circled the globe 14 times on lecture tours spreading the teachings of Lord Krishna. Men and women from all backgrounds and walks of life came forward to accept his message. With their help, Srila Prabhupada established temples, farm communities, a publishing house, and educational institutions around the world. And, he began what has now become the world’s largest vegetarian food relief program, Hare Krishna Food for Life.
            </p>
            <p className="mb-6">
                With the desire to nourish the roots of Krishna consciousness in its home, Srila Prabhupada returned to India several times, where he sparked a revival in the Vaishnava tradition. In India, he opened dozens of temples, including large centers in the holy towns of Vrindavana and Mayapura.
            </p>
            <p className="mb-6">
                Srila Prabhupada’s most significant contributions, perhaps, are his books. He authored over 70 volumes on the Krishna tradition, which are highly respected by scholars for their authority, depth, fidelity to the tradition, and clarity. Several of his works are used as textbooks in numerous college courses. His writings have been translated into 76 languages. His most prominent works include: Bhagavad-gita As It Is, the 30-volume Srimad-Bhagavatam, and the 17-volume Sri Caitanya-caritamrita.
<br></br>A.C. Bhaktivedanta Swami Srila Prabhupada passed away on November 14, 1977, in the holy town of Vrindavana, surrounded by his loving disciples who carry on his mission today.
            </p>

          </div>

          {/* Image Column */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <Image
              src="https://bhaktisteps.com/wp-content/uploads/2020/10/srila-prabhupada.jpg"
              alt="Srila Prabhupada"
              width={250}
              height={300}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FounderPage;
