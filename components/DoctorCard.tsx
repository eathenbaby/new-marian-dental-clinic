
import React from 'react';
import { Doctor } from '../types';
import { IconMap } from './Icons.tsx';
import { generateVCard } from '../utils.ts';

export const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="group glass rounded-[48px] overflow-hidden shadow-2xl transition-all duration-700 hover:border-primary/50">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 relative overflow-hidden">
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="w-full h-full object-cover min-h-[500px] group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-10 left-10 lg:hidden">
            <h3 className="text-3xl font-display font-bold text-white">{doctor.name}</h3>
            <p className="text-primary font-bold uppercase tracking-widest text-sm">{doctor.title}</p>
          </div>
        </div>
        
        <div className="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-between">
          <div className="space-y-8">
            <div className="hidden lg:block space-y-2">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">{doctor.title}</span>
              <h3 className="text-5xl font-display font-bold text-white leading-tight">{doctor.name}</h3>
            </div>
            
            <div className="flex gap-3 flex-wrap">
              {doctor.qualifications.map(q => (
                <span key={q} className="bg-white/5 border border-white/10 text-primary-light px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {q}
                </span>
              ))}
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light italic border-l-2 border-primary/30 pl-6">
              "{doctor.bio}"
            </p>
            
            <div className="space-y-4">
              {doctor.specializations.map(spec => (
                <div key={spec} className="flex items-center gap-4 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconMap.CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  {spec}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex gap-4">
              <a href={`tel:${doctor.contacts.phone}`} className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-primary transition-all group/btn" aria-label="Call">
                <IconMap.Phone className="w-5 h-5 group-hover/btn:text-white" />
              </a>
              <a href={`https://wa.me/${doctor.contacts.whatsapp}?text=Hello ${doctor.name}`} className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-[#25D366] transition-all group/btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <IconMap.MessageCircle className="w-5 h-5 group-hover/btn:text-white" />
              </a>
              <a href={`mailto:${doctor.contacts.email}`} className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-red-500 transition-all group/btn" aria-label="Email">
                <IconMap.Mail className="w-5 h-5 group-hover/btn:text-white" />
              </a>
              {doctor.contacts.instagram && (
                <a href={`https://instagram.com/${doctor.contacts.instagram}`} className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-gradient-to-br from-purple-600 to-pink-500 transition-all group/btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <IconMap.Instagram className="w-5 h-5 group-hover/btn:text-white" />
                </a>
              )}
              {doctor.contacts.facebook && (
                <a href={`https://facebook.com/${doctor.contacts.facebook}`} className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all group/btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <IconMap.Plus className="w-5 h-5 group-hover/btn:text-white" />
                </a>
              )}
              {doctor.contacts.youtube && (
                <a href={`https://youtube.com/@${doctor.contacts.youtube}`} className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-red-600 transition-all group/btn" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <IconMap.Youtube className="w-5 h-5 group-hover/btn:text-white" />
                </a>
              )}
            </div>
            
            <button 
              onClick={() => generateVCard(doctor.name, doctor.contacts.phone, doctor.contacts.email)}
              className="flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl text-xs font-bold hover:bg-primary transition-all"
            >
              <IconMap.Download className="w-4 h-4" />
              SAVE VCARD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
