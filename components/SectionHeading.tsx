import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">{title}</h1>
      {subtitle && <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 text-balance">{subtitle}</p>}
      <motion.div 
        className="h-1 bg-indigo-600 rounded-full mx-auto mt-4"
        initial={{ width: 0 }}
        whileInView={{ width: '6rem' }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      ></motion.div>
    </motion.div>
  );
};

export default SectionHeading;
