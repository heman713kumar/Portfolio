import React, { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Filter, X, CheckCircle2, Feather } from 'lucide-react';
import Modal from '../common/Modal';

const JourneyView = ({ data }) => {
  const [filterType, setFilterType] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterSector, setFilterSector] = useState('All');
  const [selectedExp, setSelectedExp] = useState(null);

  const filters = {
    type: ['All', 'Professional', 'Academic'],
    location: ['All', 'United Kingdom', 'India'],
    sector: ['All', 'Telecommunications', 'Immigration Services', 'Facilities Management', 'IT Services', 'EdTech', 'Hospitality', 'Manufacturing', 'Academia']
  };

  const filteredItems = data.items.filter(item => {
    const matchType = filterType === 'All' || item.type === filterType;
    const matchLoc = filterLocation === 'All' || item.location.includes(filterLocation);
    const matchSector = filterSector === 'All' || item.sector.includes(filterSector);
    return matchType && matchLoc && matchSector;
  });

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 animate-fade-in">
      
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-8">Experiences</h1>
        <p className="text-xl md:text-2xl font-serif text-gray-500 italic leading-relaxed">
          "{data.quote}"
        </p>
      </div>

      {/* Filters */}
      <div className="sticky top-20 z-30 bg-[#FAFAFA]/95 backdrop-blur-sm py-4 mb-12 border-b border-gray-200">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {/* Type Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Type</span>
            <select 
              className="bg-transparent border-b border-gray-300 py-1 text-sm font-medium text-gray-900 focus:outline-none cursor-pointer hover:border-gray-900 transition-colors"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              {filters.type.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          {/* Location Filter */}
          <div className="flex items-center gap-2">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Location</span>
             <select 
              className="bg-transparent border-b border-gray-300 py-1 text-sm font-medium text-gray-900 focus:outline-none cursor-pointer hover:border-gray-900 transition-colors"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
            >
              {filters.location.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          {/* Sector Filter */}
          <div className="flex items-center gap-2">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Sector</span>
             <select 
              className="bg-transparent border-b border-gray-300 py-1 text-sm font-medium text-gray-900 focus:outline-none cursor-pointer hover:border-gray-900 transition-colors"
              value={filterSector}
              onChange={(e) => setFilterSector(e.target.value)}
            >
              {filters.sector.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-200 h-full hidden md:block"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedExp(item)}
              className="group relative bg-white p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between h-full md:ml-12 transform hover:-translate-y-1"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[21px] top-8 w-3 h-3 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-900 group-hover:scale-125 transition-all hidden md:block"></div>

              {/* Translucent BG Image */}
              <div className="absolute inset-0 z-0 overflow-hidden opacity-0 group-hover:opacity-5 transition-opacity duration-700">
                 <img src={item.logo} alt="" className="w-full h-full object-cover scale-110" />
              </div>

              <div className="relative z-10 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <img src={item.logo} alt={item.company} className="w-10 h-10 object-cover rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-100 px-2 py-1 rounded-full group-hover:border-gray-300 transition-colors">{item.type}</span>
                </div>
                
                <h3 className="text-xl font-serif text-gray-900 mb-1 group-hover:text-black transition-colors">{item.role}</h3>
                <p className="text-sm font-medium text-gray-600 mb-2">{item.company}</p>
                
                <div className="flex flex-col gap-1 text-xs text-gray-400 font-mono mt-4">
                   <span className="flex items-center gap-2"><Calendar size={12}/> {item.duration}</span>
                   <span className="flex items-center gap-2"><MapPin size={12}/> {item.location}</span>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-gray-50 mt-auto flex justify-between items-center">
                 <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{item.sector}</span>
                 <ArrowRight size={16} className="text-gray-300 group-hover:text-gray-900 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
           <div className="text-center py-20 text-gray-400 font-serif italic">
             No experiences found matching these filters.
           </div>
        )}
      </div>

      <Modal 
        isOpen={!!selectedExp} 
        onClose={() => setSelectedExp(null)} 
        data={selectedExp} 
      />
    </div>
  );
};

export default JourneyView;