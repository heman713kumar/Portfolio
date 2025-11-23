import React from 'react';
import Tile from '../common/Tile';

const PersonalView = ({ data, onSelect }) => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 animate-fade-in space-y-32">
      
      {/* Section 1: Hobbies & Volunteering */}
      <div>
        <div className="mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">{data.intro.title}</h2>
          <p className="text-gray-500 max-w-3xl text-lg font-light leading-relaxed border-l-4 border-gray-200 pl-6">
            {data.intro.desc}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {data.hobbies_volunteering.map(item => (
            <Tile key={item.id} item={item} onClick={onSelect} variant="personal" />
          ))}
        </div>
      </div>

      {/* Section 2: Certifications */}
      <div>
        <div className="mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Certifications & Growth</h2>
          <p className="text-gray-500 max-w-3xl text-lg font-light leading-relaxed">
            My drive to learn stems from the belief that expertise is not a destination, but a journey of perpetual growth.
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-8">
          {data.certifications.map(item => (
            <Tile key={item.id} item={item} onClick={onSelect} variant="personal" />
          ))}
        </div>
      </div>

      {/* Section 3: Languages */}
      <div>
        <div className="mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Linguistic Journey</h2>
          <p className="text-gray-500 max-w-3xl text-lg font-light leading-relaxed">
            Language is a bridge to understanding cultures. My linguistic journey reflects my curiosity about the world.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.languages.map(item => (
            <Tile key={item.id} item={item} onClick={onSelect} variant="personal" />
          ))}
        </div>
      </div>

      {/* Section 4: Socials */}
      <div>
        <div className="mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Professional Network</h2>
          <p className="text-gray-500 max-w-3xl text-lg font-light leading-relaxed">
            Connect with me to explore opportunities and share insights.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {data.socials.map(item => (
            <div key={item.id} onClick={() => window.open(item.link, '_blank')} className="cursor-pointer">
               <Tile item={item} onClick={() => {}} variant="personal" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PersonalView;