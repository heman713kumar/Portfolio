import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { professionalSummary, keySkills } from '../data/content';
import SectionHeading from '../components/SectionHeading';

const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};

const HomePage: React.FC = () => {
  const typedSubtitle = useTypewriter("Results-Oriented Management Professional");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-32 md:space-y-40">
      <motion.section 
        className="text-center min-h-[calc(100vh-15rem)] flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-4 text-balance">
          Hemant Kumar
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-8 h-10">
          {typedSubtitle}
          <span className="animate-ping">|</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg md:text-xl text-slate-700 text-balance">
          {professionalSummary}
        </motion.p>
        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg"
            >
              Get In Touch
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-block bg-white/50 hover:bg-white/80 backdrop-blur-md border border-slate-300 text-slate-800 font-bold py-4 px-8 rounded-lg"
            >
              View My Work
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
        <SectionHeading title="Core Competencies" />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-center">
            {keySkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-white/50 p-4 rounded-lg border border-transparent hover:border-indigo-200 shadow-sm"
                whileHover={{ y: -5, scale: 1.05, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <p className="font-semibold text-slate-800">{skill}</p>
              </motion.div>
            ))}
          </div>
      </motion.div>
    </div>
  );
};

export default HomePage;