import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, NAV_LINKS } from '../constants';
import { LinkedinIcon, GithubIcon, MailIcon, DownloadIcon } from './IconComponents';
import { tagline } from '../data/content';


const Footer: React.FC = () => {
  const socialIconVariants = {
    hover: {
      scale: 1.1,
      filter: "brightness(1.2)",
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Hemant Kumar</h3>
            <p className="text-slate-400 max-w-xs">{tagline}</p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              <motion.a variants={socialIconVariants} whileHover="hover" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400">
                <LinkedinIcon className="w-7 h-7" />
              </motion.a>
              <motion.a variants={socialIconVariants} whileHover="hover" href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400">
                <GithubIcon className="w-7 h-7" />
              </motion.a>
              <motion.a variants={socialIconVariants} whileHover="hover" href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-400 hover:text-indigo-400">
                <MailIcon className="w-7 h-7" />
              </motion.a>
            </div>
            <a href="/resume.pdf" download="Hemant_Kumar_Resume.pdf" className="inline-flex items-center justify-center mt-4 py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-bold text-slate-900 bg-slate-100 hover:bg-white focus:outline-none transition-colors duration-300">
               <DownloadIcon /> Download Resume
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Hemant Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;