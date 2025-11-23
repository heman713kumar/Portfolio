import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { type Experience } from '../types';
import { LocationIcon, BriefcaseIcon } from './IconComponents';

interface TimelineItemProps {
  item: Experience;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item }) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
    >
      <Link to={`/experience/${item.slug}`} className="mb-8 ml-10 relative block group">
        <div className="absolute -left-[44px] top-1.5 h-4 w-4 rounded-full bg-indigo-600 border-2 border-slate-100 ring-4 ring-indigo-200 group-hover:bg-indigo-700 transition-colors"></div>
        
        <motion.div 
          className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30 transition-shadow duration-300 group-hover:shadow-indigo-500/10"
          whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
        >
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.role}</h3>
              <p className="text-sm font-semibold text-indigo-600 mt-1 sm:mt-0">{item.period}</p>
          </div>
          <div className="flex items-center space-x-4 text-sm text-slate-600">
              <span className="flex items-center"><BriefcaseIcon className="w-4 h-4 mr-1.5"/>{item.company}</span>
              <span className="flex items-center"><LocationIcon className="w-4 h-4 mr-1.5"/>{item.location}</span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const Timeline: React.FC<{ items: Experience[] }> = ({ items }) => {
  return (
    <div className="relative border-l-2 border-indigo-300 ml-4 mt-12">
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Timeline;