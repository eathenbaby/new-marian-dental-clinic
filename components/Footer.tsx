
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext.tsx';
import { IconMap } from './Icons.tsx';
import { LOCATIONS, SERVICES, CLINIC_SOCIALS } from '../constants.ts';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const primaryLoc = LOCATIONS[0];

  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-primary p-2 rounded-xl">
                <IconMap.Plus className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl text-white leading-tight block">NEW MARIAN</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Dental & Implant Centre</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Serving Pala families with comprehensive dental care since 2008. Two locations with world-class facilities and expert surgeons specializing in painless dentistry.
            </p>
            <div className="flex gap-4">
              <a href={CLINIC_SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-primary transition-all group">
                <IconMap.Plus className="w-4 h-4 group-hover:text-white" />
              </a>
              <a href={CLINIC_SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-primary transition-all group">
                <IconMap.Instagram className="w-4 h-4 group-hover:text-white" />
              </a>
              <a href={CLINIC_SOCIALS.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-primary transition-all group">
                <IconMap.Youtube className="w-4 h-4 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-display font-bold mb-8 text-white uppercase text-xs tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/locations" className="hover:text-primary transition-colors">Locations</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-display font-bold mb-8 text-white uppercase text-xs tracking-[0.3em]">Top Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {SERVICES.filter(s => s.featured).slice(0, 5).map(s => (
                <li key={s.id}><Link to={`/services`} className="hover:text-primary transition-colors">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display font-bold mb-8 text-white uppercase text-xs tracking-[0.3em]">Primary Contact</h4>
            <div className="space-y-6 text-sm text-gray-500">
              <div className="flex gap-4">
                <IconMap.MapPin className="text-primary w-5 h-5 flex-shrink-0" />
                <span>{primaryLoc.address}</span>
              </div>
              <div className="flex gap-4">
                <IconMap.Phone className="text-primary w-5 h-5 flex-shrink-0" />
                <a href={`tel:${primaryLoc.phone}`} className="hover:text-white transition-colors">{primaryLoc.phone}</a>
              </div>
              <div className="flex gap-4">
                <IconMap.Clock className="text-primary w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-white font-bold">{primaryLoc.hours}</p>
                  <p className="text-xs text-cta">{primaryLoc.sundayHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2025 New Marian Dental Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-center md:text-right">Pala, Kerala | Clinical Excellence Since 2008</p>
        </div>
      </div>
    </footer>
  );
};
