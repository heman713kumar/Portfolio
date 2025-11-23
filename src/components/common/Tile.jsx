import React from 'react';
import { ArrowRight } from 'lucide-react';
import IconMap from './IconMap';

const Tile = ({ item, onClick, variant = 'standard' }) => {
  if (variant === 'personal') {
    // Special tile design for personal page items with translucent backgrounds
    return (
      <div 
        onClick={() => onClick(item)}
        className="relative h-64 p-8 bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer group overflow-hidden flex flex-col justify-between"
      >
        {/* Translucent Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" 
          />
        </div>

        <div className="relative z-10 flex justify-between items-start">
          <div className="text-gray-900 group-hover:scale-110 transition-transform duration-500 bg-white/80 p-2 rounded-full backdrop-blur-sm">
            <IconMap name={item.icon} size={24} />
          </div>
          <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-900 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
        </div>
        
        <div className="relative z-10">
          {item.subtitle && <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block group-hover:text-gray-800 transition-colors">{item.subtitle}</span>}
          <h3 className="font-serif text-2xl leading-tight text-gray-900">{item.title}</h3>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => onClick(item)}
      className="group relative bg-white p-8 md:p-12 border border-transparent hover:border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-500 cursor-pointer flex flex-col justify-between h-full"
    >
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 group-hover:text-gray-900 transition-colors">
          {item.period || item.category}
        </span>
        <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mt-3 mb-2 group-hover:translate-x-2 transition-transform duration-500">
          {item.role || item.title}
        </h3>
        {item.company && <p className="text-gray-500 font-medium">{item.company}</p>}
      </div>

      <div className="mt-auto">
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {item.summary}
        </p>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
          Read Deep Dive <ArrowRight size={12} />
        </div>
      </div>
    </div>
  );
};

export default Tile;