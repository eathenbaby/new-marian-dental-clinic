
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants.ts';
import { IconMap } from '../components/Icons.tsx';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Implants' | 'Orthodontics' | 'Cosmetic' | 'General'>('All');

  const filteredItems = activeTab === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  const tabs = ['All', 'Implants', 'Orthodontics', 'Cosmetic', 'General'];

  return (
    <div className="py-32 px-4 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white">Transformation Gallery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic">Explore real clinical results from our Pala implant and aesthetic center.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all text-sm uppercase tracking-widest ${
                activeTab === tab 
                ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                : 'glass text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="group glass rounded-[40px] overflow-hidden hover:border-primary/50 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <p className="text-white text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-12">
          <p className="text-gray-500 text-sm">Note: Clinical photos used with patient consent. Results may vary based on individual diagnosis.</p>
        </div>
      </div>
    </div>
  );
};
