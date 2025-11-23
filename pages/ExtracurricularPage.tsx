import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent, extracurricularActivities, languages } from '../data/content';
import { HeartIcon, LightbulbIcon, BriefcaseIcon, BookOpenIcon, UsersIcon, SparklesIcon, GlobeAltIcon, PuzzlePieceIcon } from '../components/IconComponents';
import SectionHeading from '../components/SectionHeading';

const iconMap = {
  heart: HeartIcon,
  lightbulb: LightbulbIcon,
  briefcase: BriefcaseIcon,
  book: BookOpenIcon,
  users: UsersIcon,
  sparkles: SparklesIcon,
  globe: GlobeAltIcon,
  puzzle: PuzzlePieceIcon
};

const ExtracurricularPage: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    };

  return (
    <div className="space-y-24">
      <SectionHeading title="Extracurricular & Personal Growth" subtitle="My journey beyond the professional sphere."/>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {extracurricularActivities.map((exp, index) => {
          const Icon = iconMap[exp.icon];
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
              className={`bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30 flex flex-col ${exp.gridSpan || 'md:col-span-1'}`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`rounded-lg p-3 ${exp.categoryColor.replace('text', 'bg').replace(/-\d+$/, '-200')}`}>
                    <Icon className={`w-6 h-6 ${exp.categoryColor.replace('bg', 'text')}`} />
                </div>
                <div>
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${exp.categoryColor}`}>
                    {exp.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{exp.title}</h3>
                </div>
              </div>
              
              <div className="text-sm text-slate-500 font-medium mb-3">
                {exp.organization && <span>{exp.organization} &bull; </span>}
                <span>{exp.period}</span>
              </div>
              
              <p className="text-slate-600 mb-4 flex-grow">{exp.description}</p>
              
              <div>
                  <h4 className="font-semibold text-slate-800 text-sm mb-2">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                      {exp.skillsDeveloped.map((skill) => (
                          <span key={skill} className="bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">{skill}</span>
                      ))}
                  </div>
              </div>

            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ExtracurricularPage;