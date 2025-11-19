import React from 'react';
import Timeline from '../components/Timeline';
import { professionalExperience, education } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';

const ExperiencePage: React.FC = () => {
  return (
    <div className="space-y-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <SectionHeading title="Professional Experience" />
        <Timeline items={professionalExperience} />
      </motion.div>

      <div className="pt-16">
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <SectionHeading title="Education & Qualifications" />
            <Timeline items={education} />
         </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;