import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2e2e2e] text-gray-200 pt-10 pb-6 relative left-0 right-0">
      {/* Main Footer Container */}
      <div className="w-full px-6 md:px-12 lg:px-20 grid md:grid-cols-3 gap-8 items-center text-center md:text-left max-w-[1400px] mx-auto">
        {/* Left Section - ISKCON Logo */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image
            src="https://bhaktisteps.com/wp-content/uploads/2020/08/Cdmlogo_2.png"
            alt="ISKCON Congregation Logo"
            width={150}
            height={150}
            className="rounded-full object-contain"
          />
        </div>

        {/* Middle Section - Bhakti Steps Info */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Bhakti Steps</h3>
          <p>
            ISKCON Congregation Development Ministry <br />
            Sri Mayapur Dham, Nadia, <br />
            WB, INDIA – 741313
          </p>
          <p className="mt-2 font-medium">
            bhaktisteps@iskconcongregation.com
          </p>

          {/* Stats */}
          <div className="mt-6 space-y-1 text-sm leading-relaxed">
            <p>
              <span className="inline-block bg-black text-white px-3 py-1 rounded font-mono text-lg">
                404271
              </span>
            </p>
            <p>🧘 Users Today : 122</p>
            <p>📅 This Month : 122</p>
            <p>📊 Total Views : 4811569</p>
          </div>
        </div>

        {/* Right Section - Bhakti Steps Logo */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <Image
            src="https://bhaktisteps.com/wp-content/uploads/2024/01/BS_NewWhite.png"
            alt="Bhakti Steps Logo"
            width={200}
            height={80}
            className="object-contain"
          />
          <p className="italic text-gray-300 text-sm">
            Recognize • Revitalize • Progress
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
        © Copyright 2012 - 2025 | Bhakti Steps by ISKCON Congregational Development Ministry |{" "}
        <a href="#" className="underline hover:text-white">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
