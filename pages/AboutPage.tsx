import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { aboutContent, languages } from '../data/content';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
        <AnimatedSection>
            <h1 className="text-4xl font-bold text-center mb-12 text-slate-900">About Me</h1>
            <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p>{aboutContent.paragraph1}</p>
                <p>{aboutContent.paragraph2}</p>
                <p>{aboutContent.paragraph3}</p>
            </div>
        </AnimatedSection>

        <AnimatedSection>
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
        </AnimatedSection>
        
        <AnimatedSection>
             <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30 shadow-inner">
                <h3 className="text-3xl font-bold text-center mb-8 text-slate-900">Extracurricular & Hobbies</h3>
                 <div className="flex justify-center flex-wrap gap-3 text-center">
                    {aboutContent.hobbies.map((hobby, index) => (
                        <span key={index} className="bg-slate-200 text-slate-700 font-medium px-4 py-2 rounded-full">{hobby}</span>
                    ))}
                 </div>
            </div>
        </AnimatedSection>
    </div>
  );
};

export default AboutPage;