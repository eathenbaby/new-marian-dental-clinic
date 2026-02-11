
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext.tsx';
import { IconMap } from './Icons.tsx';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Locations', path: '/locations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'glass rounded-3xl' : ''}`}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2.5 rounded-xl shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
              <IconMap.Plus className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl text-white leading-tight block">NEW MARIAN</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Dental & Implant Centre</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-primary relative group ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ml' : 'en')}
              className="px-4 py-2 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white/5 transition-all"
            >
              {language === 'en' ? 'മലയാളം' : 'English'}
            </button>
            <Link
              to="/contact"
              className="bg-cta text-white px-7 py-3 rounded-2xl text-xs font-bold shadow-xl shadow-cta/20 hover:scale-105 transition-all"
            >
              {t('bookNow')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMenuOpen ? <IconMap.X /> : <IconMap.Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-dark z-[100] animate-in fade-in duration-300">
          <div className="flex flex-col h-full p-8 pt-24 space-y-8">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white"><IconMap.X className="w-8 h-8" /></button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-display font-bold text-white py-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-6 pt-12 border-t border-white/10">
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'ml' : 'en');
                  setIsMenuOpen(false);
                }}
                className="w-full py-5 border border-white/10 rounded-2xl text-sm font-bold text-white"
              >
                {language === 'en' ? 'മലയാളം -ലേക്ക് മാറുക' : 'Switch to English'}
              </button>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-cta text-white text-center py-6 rounded-2xl font-bold text-lg"
              >
                {t('bookNow')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
