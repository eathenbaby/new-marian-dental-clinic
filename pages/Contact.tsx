
import React, { useState } from 'react';
import { IconMap } from '../components/Icons.tsx';
import { LOCATIONS, CLINIC_SOCIALS } from '../constants.ts';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', service: 'General Checkup', date: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    // Simulate API call
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div className="py-32 px-4 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left: Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">Book Your <span className="text-primary italic font-serif">Visit.</span></h1>
            <p className="text-gray-400 text-xl max-w-lg">Choose your preferred branch or fill the form for a free callback from our doctors.</p>
          </div>

          <div className="grid gap-8">
            {LOCATIONS.map(loc => (
              <div key={loc.id} className="glass p-8 rounded-[40px] group hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-display font-bold text-white mb-4">{loc.shortName}</h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex gap-4">
                    <IconMap.MapPin className="text-primary w-5 h-5 shrink-0" />
                    <p className="text-sm">{loc.address}</p>
                  </div>
                  <div className="flex gap-4">
                    <IconMap.Phone className="text-primary w-5 h-5 shrink-0" />
                    <a href={`tel:${loc.phone}`} className="hover:text-white">{loc.phone}</a>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
                    <IconMap.Navigation className="w-4 h-4" /> DIRECTIONS
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Booking Form */}
        <div className="glass p-10 lg:p-16 rounded-[60px] relative">
          {isSent ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-up">
              <div className="w-24 h-24 bg-cta/20 rounded-full flex items-center justify-center text-cta">
                <IconMap.CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white">Booking Received!</h2>
              <p className="text-gray-400">Our coordinator will contact you shortly to confirm your slot.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <h2 className="text-3xl font-display font-bold text-white mb-8">Quick Appointment</h2>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Thomas Joseph" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 88481 98200" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all"
                  value={formState.phone}
                  onChange={e => setFormState({...formState, phone: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Preferred Service</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all appearance-none"
                  value={formState.service}
                  onChange={e => setFormState({...formState, service: e.target.value})}
                >
                  <option className="bg-dark">Dental Implants</option>
                  <option className="bg-dark">Root Canal Treatment</option>
                  <option className="bg-dark">General Checkup</option>
                  <option className="bg-dark">Smile Designing</option>
                  <option className="bg-dark">Orthodontics</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-cta text-white py-6 rounded-2xl font-bold text-lg shadow-xl shadow-cta/20 hover:scale-105 transition-all flex items-center justify-center gap-3">
                <IconMap.Calendar className="w-6 h-6" />
                Request Appointment
              </button>

              <div className="flex items-center justify-center gap-4 text-gray-500">
                <div className="h-px bg-white/10 flex-grow" />
                <span className="text-[10px] font-bold uppercase tracking-widest">OR</span>
                <div className="h-px bg-white/10 flex-grow" />
              </div>

              <a href={CLINIC_SOCIALS.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full bg-white/5 border border-white/10 text-white py-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#25D366] hover:border-[#25D366] transition-all">
                <IconMap.MessageCircle className="w-6 h-6" />
                Chat via WhatsApp
              </a>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
