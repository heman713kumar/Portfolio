import React, { useState } from 'react';
import { X, Feather } from 'lucide-react';
import Modal from '../common/Modal';

const GalleryView = ({ data, isAdmin, onAdd }) => {
  const [filter, setFilter] = useState('All Photos');
  const [expandedItem, setExpandedItem] = useState(null);

  const categories = ["All Photos", "Professional", "Academic", "Volunteering", "Travel & Adventures", "Hobbies", "Personal Milestones"];
  const filteredItems = filter === "All Photos" ? data.items : data.items.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 animate-fade-in">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-8">Gallery</h1>
        <p className="text-xl md:text-2xl font-serif text-gray-500 italic leading-relaxed">{data.intro}</p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)} 
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              filter === cat 
                ? 'bg-gray-900 text-white' 
                : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid with dynamic spans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] grid-flow-dense">
        {filteredItems.map(item => {
          // Dynamic Spans based on item.size
          let spanClass = "col-span-1 row-span-1";
          if (item.size === 'large') spanClass = "md:col-span-2 md:row-span-2";
          if (item.size === 'wide') spanClass = "md:col-span-2 md:row-span-1";
          if (item.size === 'tall') spanClass = "md:col-span-1 md:row-span-2";

          return (
            <div 
              key={item.id} 
              className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 ${spanClass}`} 
              onClick={() => setExpandedItem(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-1 block">{item.category}</span>
                <h3 className="text-white font-serif text-lg leading-tight">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <Modal 
        isOpen={!!expandedItem} 
        onClose={() => setExpandedItem(null)} 
        data={expandedItem} 
      />
    </div>
  );
};

export default GalleryView;