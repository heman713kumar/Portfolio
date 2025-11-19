import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { professionalExperience, education } from '../data/content';
import { type Experience } from '../types';
import { CheckCircleIcon } from '../components/IconComponents';

const ExperienceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const allExperiences = [...professionalExperience, ...education];
  const experience = allExperiences.find((e: Experience) => e.slug === slug);

  if (!experience) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-slate-900">Experience Not Found</h1>
        <Link to="/experience" className="text-indigo-700 hover:underline mt-4 inline-block">Back to Experience</Link>
      </div>
    );
  }

  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/experience" className="text-indigo-700 hover:underline mb-8 inline-block">&larr; Back to Experience</Link>
        
        <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30">
            <p className="text-sm font-semibold text-indigo-700 mb-2">{experience.period}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-slate-900">{experience.role}</h1>
            <p className="text-xl font-semibold text-slate-700 mb-8">{experience.company} - <span className="text-slate-500 font-normal">{experience.location}</span></p>
            
            <div className="space-y-10">
                <p className="text-lg text-slate-600">{experience.description}</p>
                
                {experience.achievements.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-indigo-300 pb-2 mb-6">Key Achievements</h2>
                        <ul className="list-none p-0 space-y-4">
                            {experience.achievements.map((ach, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                                  <span className="text-slate-700 text-lg">{ach}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {experience.skills && experience.skills.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-indigo-300 pb-2 mb-6">Skills & Technologies</h2>
                        <div className="flex flex-wrap gap-3">
                            {experience.skills.map((skill, i) => (
                                <span key={i} className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-2 rounded-full">{skill}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceDetailPage;