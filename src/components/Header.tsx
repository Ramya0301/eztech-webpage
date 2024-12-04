import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Terminal, Menu, X } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const scrollTo = useScrollTo();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Removed 'blog' from navigation items
  const navItems = ['home', 'about', 'services', 'products', 'contact'];

  const handleNavClick = (item: string) => {
    scrollTo(item);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Terminal className="h-8 w-8 text-gray-900" />
            <span className="ml-2 text-xl font-bold text-gray-900">EZ Tech</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
              className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {language.toUpperCase()}
            </button>
            
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
              {t('nav.getQuote')}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
