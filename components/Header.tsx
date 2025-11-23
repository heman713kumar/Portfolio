import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { AnimatedHamburgerIcon } from './IconComponents';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const activeLinkClass = 'text-indigo-600 font-semibold';
  const inactiveLinkClass = 'text-slate-600 hover:text-indigo-600';

  const mobileNavVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 bg-white/60 backdrop-blur-lg ${isScrolled ? 'shadow-md' : ''}`}>
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex-shrink-0">
            <NavLink to="/">
              <motion.div 
                whileHover={{ y: -1 }} 
                className="text-2xl font-bold text-slate-900"
              >
                Hemant Kumar
              </motion.div>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <AnimatedHamburgerIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden fixed inset-0 z-40 bg-white/80 backdrop-blur-xl"
            id="mobile-menu"
          >
            <div className="pt-24 px-4 h-full">
              <nav className="grid gap-y-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.div key={link.name} custom={i} variants={mobileLinkVariants} initial="hidden" animate="visible">
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `block text-center text-2xl font-medium py-3 rounded-lg ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-slate-700'}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;