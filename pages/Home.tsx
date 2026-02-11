
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext.tsx';
import { IconMap } from '../components/Icons.tsx';
import { SERVICES, DOCTORS, LOCATIONS, CLINIC_IMAGES, CLINIC_SOCIALS } from '../constants.ts';
import { DoctorCard } from '../components/DoctorCard.tsx';
import { HeroCanvas } from '../components/HeroCanvas.tsx';
import { GeometryBackground } from '../components/GeometryBackground.tsx';

export const Home: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col relative">
      <GeometryBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-dark">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-fade-up">
              <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 px-6 py-2.5 rounded-full text-sm font-bold text-primary-foreground/90 uppercase tracking-widest backdrop-blur-sm">
                <IconMap.Star className="w-4 h-4 text-yellow-400 fill-current" />
                4.9★ Google Rated · Pala's #1 Choice
              </div>
              
              <h1 className={`text-5xl md:text-8xl font-display font-black text-white leading-[1.05] tracking-tight ${language === 'ml' ? 'font-ml leading-[1.4] text-5xl md:text-7xl' : ''}`}>
                {t('heroTitle').split(' ').map((word, i) => (
                  <span key={i} className={i >= 2 && i <= 3 ? "gradient-text block md:inline" : "block md:inline"}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              
              <p className="text-xl text-gray-400 max-w-xl leading-relaxed font-light">
                {t('heroSubtitle')}
              </p>
              
              <div className="flex flex-wrap gap-5 pt-6">
                <Link to="/contact" className="group bg-cta text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all flex items-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  <IconMap.Calendar className="w-6 h-6" />
                  {t('bookNow')}
                </Link>
                <a href={CLINIC_SOCIALS.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-3">
                  <IconMap.MessageCircle className="w-6 h-6 text-[#25D366]" />
                  {t('whatsapp')}
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 border-t border-white/10">
                {[
                  { icon: 'MapPin', label: '2 Locations' },
                  { icon: 'Scan', label: '3D Imaging' },
                  { icon: 'Shield', label: 'Painless RCT' },
                  { icon: 'Plus', label: 'Implants' }
                ].map((badge, i) => {
                  const BadgeIcon = IconMap[badge.icon] || IconMap.Plus;
                  return (
                    <div key={i} className="flex flex-col gap-3 group cursor-default">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <BadgeIcon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-primary transition-colors">{badge.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <div className="relative glass p-4 rounded-[40px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src={CLINIC_IMAGES.hero} 
                  alt="New Marian Dental Pala Interior" 
                  className="rounded-[32px] w-full h-[600px] object-cover"
                />
                <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl max-w-[280px] shadow-2xl">
                  <div className="flex text-yellow-400 mb-3 gap-1">
                    {[1,2,3,4,5].map(s => <IconMap.Star key={s} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="font-display font-bold text-white text-lg">"Pain-free experience, world-class facilities!"</p>
                  <p className="text-xs text-primary font-bold mt-2 uppercase tracking-widest">Google Local Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-dark py-20 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: 'Star', val: '4.9', label: 'Google Rating' },
              { icon: 'MapPin', val: '2', label: 'Clinic Centres' },
              { icon: 'Users', val: '5k+', label: 'Happy Patients' },
              { icon: 'Award', val: '15+', label: 'Years of Excellence' }
            ].map((stat, i) => {
              const StatIcon = IconMap[stat.icon] || IconMap.Star;
              return (
                <div key={i} className="flex flex-col items-center gap-4 group">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    <StatIcon className="w-8 h-8" />
                  </div>
                  <div className="text-5xl font-display font-black text-white">{stat.val}</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl space-y-6">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] block">{t('ourServices')}</span>
              <h2 className={`text-4xl md:text-6xl font-display font-bold text-white leading-tight ${language === 'ml' ? 'font-ml' : ''}`}>
                Precision Care for <span className="font-serif italic text-primary-light">Every Smile.</span>
              </h2>
            </div>
            <Link to="/services" className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-bold text-sm hover:bg-white/10 transition-all">
              Explore 19 Services
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.filter(s => s.featured).map(service => {
              const ServiceIcon = IconMap[service.icon] || IconMap.Plus;
              return (
                <div key={service.id} className="group glass p-10 rounded-[40px] hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
                  <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all">
                    <ServiceIcon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.longDesc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                    Full Details <IconMap.ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-32 bg-[#050810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">{t('transformation')}</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">{t('transformation')}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{t('transformationSub')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Implants', 'RCT', 'Cosmetic', 'Whitening'].map((label, i) => (
              <div key={i} className="group relative rounded-[32px] overflow-hidden aspect-[4/5] bg-white/5 border border-white/10">
                <img 
                  src={CLINIC_IMAGES.gallery[i] || CLINIC_IMAGES.hero} 
                  alt={label} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">Case Study</span>
                  <h4 className="text-xl font-display font-bold text-white">{label}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">{t('meetDoctors')}</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Expertise Meets Empathy.</h2>
          </div>

          <div className="grid gap-16 lg:grid-cols-1 max-w-5xl mx-auto">
            {DOCTORS.map(doc => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-32 bg-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {LOCATIONS.map((loc, i) => (
              <div key={loc.id} className="group relative glass p-10 rounded-[48px] overflow-hidden">
                <div className="flex justify-between items-start mb-10">
                  <div className="space-y-2">
                    <span className="bg-yellow-400/10 text-yellow-400 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
                      ⭐ {loc.rating} Google Rating
                    </span>
                    <h3 className="text-3xl font-display font-bold text-white">{loc.name}</h3>
                  </div>
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center font-display font-bold text-primary text-2xl">
                    0{i+1}
                  </div>
                </div>
                
                <div className="space-y-6 mb-12">
                  <div className="flex gap-4">
                    <IconMap.MapPin className="text-primary w-6 h-6 flex-shrink-0" />
                    <p className="text-gray-400 leading-relaxed">{loc.address}</p>
                  </div>
                  <div className="flex gap-4">
                    <IconMap.Clock className="text-primary w-6 h-6 flex-shrink-0" />
                    <div className="text-gray-400">
                      <p className="font-bold text-white">{loc.hours}</p>
                      <p className="text-xs text-cta">{loc.sundayHours}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 text-center py-5 rounded-2xl font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <IconMap.Navigation className="w-4 h-4" />
                    {t('getDirections')}
                  </a>
                  <a href={`tel:${loc.phone}`} className="bg-primary text-white text-center py-5 rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                    <IconMap.Phone className="w-4 h-4" />
                    Call Clinic
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-cta relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-12">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">Start Your Smile <span className="font-serif italic text-dark/40">Journey Today.</span></h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-white text-cta px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all">
              {t('bookNow')}
            </Link>
            <a href={CLINIC_SOCIALS.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 bg-white/10 backdrop-blur-md px-12 py-6 rounded-2xl font-bold text-xl text-white hover:bg-white/20 transition-all flex items-center gap-3">
              <IconMap.MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
