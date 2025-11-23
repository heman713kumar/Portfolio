import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { DownloadIcon, UserIcon, AtSymbolIcon, PencilAltIcon, LocationMarkerIcon, LinkedinIcon, GithubIcon, MailIcon, SpinnerIcon, ExclamationCircleIcon, CheckCircleIcon } from '../components/IconComponents';
import SectionHeading from '../components/SectionHeading';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [focused, setFocused] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form submitted:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };
    
    const socialVariants = {
      hover: { scale: 1.1, y: -2, color: '#4f46e5' },
      tap: { scale: 0.95 }
    };

    return (
        <div>
            <SectionHeading title="Get In Touch" subtitle="I'm open to new opportunities and collaborations. Feel free to reach out." />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                      {['name', 'email', 'subject'].map((field) => (
                          <div key={field} className="relative">
                              <label htmlFor={field} className={`absolute left-3 transition-all duration-300 pointer-events-none ${focused === field || formData[field as keyof typeof formData] ? 'text-xs -top-2.5 text-indigo-600 bg-slate-100 px-1' : 'top-3 text-slate-500'}`}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                              <input type={field === 'email' ? 'email' : 'text'} name={field} id={field} required value={formData[field as keyof typeof formData]} onChange={handleChange} onFocus={() => setFocused(field)} onBlur={() => setFocused(null)} className="block w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-indigo-600 focus:ring-0 text-slate-900 py-3 px-3" />
                          </div>
                      ))}
                      <div className="relative">
                          <label htmlFor="message" className={`absolute left-3 transition-all duration-300 pointer-events-none ${focused === 'message' || formData.message ? 'text-xs -top-2.5 text-indigo-600 bg-slate-100 px-1' : 'top-3 text-slate-500'}`}>Message</label>
                          <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} className="block w-full bg-transparent border-0 border-b-2 border-slate-300 focus:border-indigo-600 focus:ring-0 text-slate-900 py-3 px-3"></textarea>
                      </div>
                      <div>
                          <motion.button type="submit" disabled={status === 'submitting'} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400 disabled:cursor-not-allowed">
                              {status === 'submitting' ? <><SpinnerIcon className="w-5 h-5"/> Sending...</> : 'Send Message'}
                          </motion.button>
                      </div>
                      <AnimatePresence>
                        {status === 'success' && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10}} className="text-green-600 text-center flex items-center justify-center gap-2"><CheckCircleIcon className="w-5 h-5"/> Message sent successfully!</motion.div>}
                        {status === 'error' && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10}} className="text-red-600 text-center flex items-center justify-center gap-2"><ExclamationCircleIcon className="w-5 h-5"/> Something went wrong. Please try again.</motion.div>}
                      </AnimatePresence>
                  </form>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-8 flex flex-col">
                     <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/resume.pdf" download="Hemant_Kumar_Resume.pdf" className="w-full flex items-center justify-center py-4 px-8 border-2 border-indigo-600 rounded-lg shadow-sm text-lg font-bold text-indigo-700 bg-transparent hover:bg-indigo-600/10 focus:outline-none transition-colors duration-300">
                       <DownloadIcon /> Download Resume
                    </motion.a>
                    <div className="space-y-6 pt-4 text-center md:text-left">
                        <a href={`mailto:${SOCIAL_LINKS.email}`} className="block text-lg text-slate-700 hover:text-indigo-600 transition-colors">
                            {SOCIAL_LINKS.email}
                        </a>
                        <p className="text-lg text-slate-700 flex items-center justify-center md:justify-start gap-2">
                           <LocationMarkerIcon className="w-6 h-6 text-slate-500" /> United Kingdom
                        </p>
                        <div className="flex justify-center md:justify-start space-x-6 pt-4">
                            <motion.a variants={socialVariants} whileHover="hover" whileTap="tap" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500">
                                <LinkedinIcon className="w-8 h-8" />
                            </motion.a>
                             <motion.a variants={socialVariants} whileHover="hover" whileTap="tap" href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-500">
                                <GithubIcon className="w-8 h-8" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;