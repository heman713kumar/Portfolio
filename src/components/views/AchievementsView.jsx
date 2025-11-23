import React, { useState } from 'react';
import Tile from '../common/Tile';

const AchievementsView = ({ data, onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Extract categories from achievements data
  const categories = ['All', ...new Set(data.items.map(item => item.category))];
  
  // Filter achievements by category
  const filteredAchievements = selectedCategory === 'All' 
    ? data.items 
    : data.items.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 animate-fade-in">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4">Distinctions</h1>
        <p className="text-gray-500 max-w-2xl text-lg font-light leading-relaxed">
          {data.intro}
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredAchievements.map(achievement => (
          <div key={achievement.id} className="break-inside-avoid mb-6">
            <Tile 
              item={{
                ...achievement,
                // Map achievement data to tile format
                title: achievement.title,
                subtitle: achievement.summary,
                category: achievement.category,
                icon: achievement.icon
              }} 
              onClick={() => onSelect(achievement)} 
              type="achievement"
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAchievements.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">No achievements found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default AchievementsView;