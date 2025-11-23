import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import { AwardIcon } from '../components/IconComponents';

const AchievementsPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <SectionHeading title="Awards & Recognition" subtitle="A collection of my key professional and academic achievements."/>

      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white/60 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/30 text-center"
          >
            <div className="flex justify-center mb-4">
              <AwardIcon className="w-12 h-12 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{ach.title}</h3>
            <p className="text-md text-slate-600 mb-2 font-semibold">{ach.issuer}</p>
            <p className="text-sm text-indigo-600 font-bold mb-4">{ach.year}</p>
            <p className="text-slate-700">{ach.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AchievementsPage;