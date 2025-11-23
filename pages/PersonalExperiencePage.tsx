import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { aboutContent, extracurricularActivities, languages } from '../data/content';
// FIX: Imported UsersIcon
import { HeartIcon, LightbulbIcon, BriefcaseIcon, BookOpenIcon, UsersIcon } from '../components/IconComponents';

// FIX: Added UsersIcon to the map
const iconMap = {
  heart: HeartIcon,
  lightbulb: LightbulbIcon,
  briefcase: BriefcaseIcon,
  book: BookOpenIcon,
  users: UsersIcon,
};

const PersonalExperiencePage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-900">Personal Journey</h1>
        <div className="prose prose-lg max-w-4xl mx-auto text-slate-700 space-y-4 text-center">
          <p>{aboutContent.paragraph1}</p>
          <p>{aboutContent.paragraph2}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FIX: Use extracurricularActivities instead of personalExperiences */}
          {extracurricularActivities.map((exp, index) => {
            const Icon = iconMap[exp.icon];
            return (
              <div
                key={index}
                style={{ animationDelay: `${index * 150}ms` }}
                className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30 shadow-inner transform transition-transform duration-300 hover:-translate-y-1 animate-fade-in-up"
              >
                <div className="flex items-start space-x-4">
                  <div className={`rounded-lg p-3 ${exp.categoryColor.replace('text', 'bg').replace(/-\d+$/, '-200')}`}>
                    <Icon className={`w-6 h-6 ${exp.categoryColor.replace('bg', 'text')}`} />
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${exp.categoryColor}`}>
                      {exp.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2">{exp.title}</h3>
                    {/* FIX: Use period instead of date */}
                    <p className="text-sm text-slate-500 font-medium mb-2">{exp.period}</p>
                    <p className="text-slate-600">{exp.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30 shadow-inner">
                <h3 className="text-3xl font-bold text-center mb-8 text-slate-900">Languages</h3>
                <div className="flex justify-center flex-wrap gap-8 text-center">
                    {languages.map((lang, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <p className="font-bold text-lg text-slate-900">{lang.name}</p>
                        <p className="text-indigo-700">{lang.level}</p>
                    </div>
                    ))}
                </div>
            </div>
        
            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30 shadow-inner">
                <h3 className="text-3xl font-bold text-center mb-8 text-slate-900">Hobbies & Interests</h3>
                 <div className="flex justify-center flex-wrap gap-3 text-center">
                    {aboutContent.hobbies.map((hobby, index) => (
                        <span key={index} className="bg-slate-200 text-slate-700 font-medium px-4 py-2 rounded-full">{hobby}</span>
                    ))}
                 </div>
            </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default PersonalExperiencePage;