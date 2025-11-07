'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'SADHANA LEVELS', href: '/sraddhavan' },
    { name: 'DATABASE', href: '#database' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'ABOUT US', href: '/aboutus' },
  ];

  const dropdowns = {
    'SADHANA LEVELS': [
      'SRADDHAVAN',
      'KRISHNA SEVAKA',
      'KRISHNA SADHAKA',
      'SRILA PRABHUPADA ASRAYA',
      'SRI GURU CARANA ASRAYA',
    ],
    DATABASE: ['OVERVIEW', 'DEMO', 'TRIAL', 'LIVE', 'TUTORIALS'],
    'ABOUT US': [
      'Founder-Acharya',
      'Seven Purposes of ISKCON',
      'CDM Bhakti Steps',
      'Vision & Mission',
    ],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative w-48 h-16 md:w-56 md:h-20">
            <a href="/">
              <Image
                src="https://bhaktisteps.com/wp-content/uploads/2024/01/BS_CDM_New_Finale-1.png"
                alt="Bhakti Steps ISKCON Logo"
                fill
                className="object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 relative">
            {navItems.map((item) => {
              const hasDropdown = dropdowns[item.name];
              const isActiveAboutUs =
                item.name === 'ABOUT US' &&
                (pathname?.startsWith('/seven-purposes') ||
                  pathname?.startsWith('/vision-mission'));

              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors duration-300 pb-1 border-b-2 ${
                      isActiveAboutUs
                        ? 'text-pink-600 border-pink-600'
                        : 'text-gray-700 border-transparent hover:text-pink-600 hover:border-pink-600'
                    }`}
                  >
                    {item.name}
                    {/* 🧩 Invisible hover bridge */}
                    {hasDropdown && (
                      <span className="absolute bottom-0 left-0 w-full h-3 translate-y-full"></span>
                    )}
                  </a>

                  {/* Dropdown */}
                  {hasDropdown && openDropdown === item.name && (
                    <div
                      className="absolute left-0 mt-2 w-56 bg-white shadow-lg border border-gray-100 rounded-md 
                                 transition-opacity duration-150 opacity-100 group-hover:opacity-100 hover:opacity-100 
                                 z-50 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {dropdowns[item.name].map((subItem) => {
                        const pathMap: Record<string, string> = {
                          'Seven Purposes of ISKCON': '/seven-purposes',
                          'Vision & Mission': '/vision-mission',
                        };

                        const isActiveSubItem =
                          (pathname === '/seven-purposes' &&
                            subItem === 'Seven Purposes of ISKCON') ||
                          (pathname === '/vision-mission' &&
                            subItem === 'Vision & Mission');

                        return (
                          <a
                            key={subItem}
                            href={pathMap[subItem] || '#'}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActiveSubItem
                                ? 'text-pink-600 bg-pink-50 font-semibold'
                                : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                            }`}
                          >
                            {subItem}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* 🌐 Language Switcher */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('language')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors">
                <span>🇬🇧</span>
                <span>English</span>
              </button>

              {openDropdown === 'language' && (
                <div
                  className="absolute right-0 mt-2 w-40 bg-white shadow-lg border border-gray-100 rounded-md 
                             z-50 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                  onMouseEnter={() => setOpenDropdown('language')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {[
                    { flag: '🇮🇳', label: 'हिंदी' },
                    { flag: '🇮🇳', label: 'தமிழ்' },
                    { flag: '🇧🇩', label: 'বাংলা' },
                    { flag: '🇪🇸', label: 'Español' },
                    { flag: '🇵🇱', label: 'Polski' },
                    { flag: '🇷🇺', label: 'Русский' },
                    { flag: '🇬🇧', label: 'English' },
                    { flag: '🇮🇳', label: 'తెలుగు' },
                  ].map((lang) => (
                    <button
                      key={lang.label}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                      onClick={() => {
                        setOpenDropdown(null);
                        // TODO: Add language switch logic here
                      }}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 📱 Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
