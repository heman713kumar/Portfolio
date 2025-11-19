import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import { StarIcon, CalendarIcon, ViewIcon } from '../components/IconComponents';
import type { Project } from '../types';

const categories = ['All', ...new Set(projects.map(p => p.category))];

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'Recent' | 'Alphabetical'>('Recent');

  const filteredProjects = useMemo(() => {
    let result = projects;

    if (filter !== 'All') {
      result = result.filter(p => p.category === filter);
    }
    if (searchTerm) {
      result = result.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (sortOrder === 'Recent') {
      result = result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
      result = result.sort((a, b) => a.title.localeCompare(b.title));
    }
    return result;
  }, [filter, searchTerm, sortOrder]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };


  return (
    <div>
      <SectionHeading title="Projects & Initiatives" subtitle="A selection of my work across different domains."/>
      
      <div className="my-12 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${filter === cat ? 'bg-indigo-600 text-white' : 'bg-white/60 hover:bg-slate-200/60'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          <input type="text" placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="px-4 py-2 rounded-full bg-white/60 focus:ring-2 focus:ring-indigo-500 outline-none" />
          <select value={sortOrder} onChange={e => setSortOrder(e.target.value as 'Recent' | 'Alphabetical')} className="px-4 py-2 rounded-full bg-white/60 focus:ring-2 focus:ring-indigo-500 outline-none">
            <option>Recent</option>
            <option>Alphabetical</option>
          </select>
        </div>
      </div>

      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project: Project) => (
            <motion.div
              layout
              key={project.slug}
              variants={itemVariants}
              exit="exit"
              className="bg-white/60 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-white/30 group relative"
            >
              {project.featured && <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 text-xs font-bold rounded-full flex items-center z-10"><StarIcon className="w-4 h-4 mr-1"/>Featured</div>}
              <div className="relative">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-indigo-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link to={`/projects/${project.slug}`} className="text-white flex items-center gap-2 font-bold py-2 px-4 border-2 border-white rounded-full hover:bg-white hover:text-indigo-900 transition-colors">
                    <ViewIcon className="w-5 h-5" /> View Project
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
                    <span>{project.category}</span>
                    <span className="flex items-center"><CalendarIcon className="w-4 h-4 mr-1.5"/>{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4 h-20 overflow-hidden">{project.shortDescription}</p>
                 <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tech}</span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {filteredProjects.length === 0 && <p className="text-center text-slate-500 mt-12">No projects found. Try adjusting your filters.</p>}
    </div>
  );
};

export default ProjectsPage;