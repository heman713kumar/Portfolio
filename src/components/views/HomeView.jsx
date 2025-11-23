import React from 'react';
import { Edit2, ArrowRight } from 'lucide-react';
import IconMap from '../common/IconMap';
import Tile from '../common/Tile';

const HomeView = ({ data, setTab, isAdmin, onEdit, onSelectPhase }) => (
  <div className="animate-fade-in">
    <section className="min-h-[90vh] flex flex-col justify-center max-w-5xl mx-auto px-6 pt-20">
      <p className="text-sm md:text-base text-gray-500 tracking-[0.2em] uppercase mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
        {data.profile.title} {isAdmin && <button onClick={() => onEdit('profile', 'title')} className="ml-2 text-blue-500"><Edit2 size={12}/></button>}
      </p>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-900 leading-[1.1] mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
        {data.profile.tagline}
        {isAdmin && <button onClick={() => onEdit('profile', 'tagline')} className="ml-4 text-blue-500"><Edit2 size={24}/></button>}
      </h1>
      
      <div className="flex flex-col gap-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
        {/* Phase Tiles Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {data.phases.map((phase) => (
            <div 
              key={phase.id}
              onClick={() => onSelectPhase(phase)}
              className="relative h-64 p-8 bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer group overflow-hidden flex flex-col justify-between"
            >
              {/* Translucent Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={phase.image} 
                  alt={phase.tileTitle} 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" 
                />
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="text-gray-900 group-hover:scale-110 transition-transform duration-500">
                  <IconMap name={phase.icon} size={32} />
                </div>
                <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-900 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </div>
              
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block group-hover:text-gray-800 transition-colors">{phase.period}</span>
                <h3 className="font-serif text-2xl leading-tight text-gray-900">{phase.tileTitle}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-12">Core Competencies</p>
        {/* Restored Core Competencies */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
           {data.profile.competencies.map((comp, idx) => (
             <div key={idx} className="p-6 bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-gray-900"><IconMap name={comp.icon} size={24} /></div>
                  <h3 className="font-serif text-lg">{comp.title}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{comp.desc}</p>
             </div>
           ))}
        </div>
        
        <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-12">Industry Exposure</p>
        {/* Industry Exposure */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.profile.sectors.map((sector, idx) => (
            <div key={idx} className="relative p-6 bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 group cursor-default overflow-hidden h-48 flex flex-col justify-end">
              
              <div className="absolute inset-0 z-0">
                <img src={sector.image} alt={sector.name} className="w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-110 transition-all duration-700" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                  {sector.name}
                </h3>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider group-hover:text-gray-600 transition-colors duration-300">
                  {sector.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default HomeView;