import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/content';
import ReadingProgressBar from '../components/ReadingProgressBar';
import { CodeIcon, ExternalLinkIcon, GithubIcon, ArrowLeftIcon, ArrowRightIcon } from '../components/IconComponents';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link to="/projects" className="text-indigo-600 hover:underline mt-4 inline-block">Back to Projects</Link>
      </div>
    );
  }

  return (
    <>
      <ReadingProgressBar />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-2xl mb-12 h-96">
          <motion.img 
             initial={{ scale: 1.2 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1.5, ease: 'easeOut' }}
             src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <div className="flex items-center space-x-4 mt-2">
              <span>{project.category}</span>
              <span>&bull;</span>
              <span>{new Date(project.date).getFullYear()}</span>
            </div>
          </div>
        </div>
        
        <Link to="/projects" className="text-indigo-600 hover:text-indigo-800 font-bold mb-12 inline-flex items-center gap-2">
            <ArrowLeftIcon className="w-5 h-5" /> Back to All Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 prose prose-lg max-w-none space-y-8 text-slate-700">
            <p className="lead">{project.longDescription}</p>
            
            <section>
              <h2 className="!mb-4">Problem Statement</h2>
              <p>{project.problem}</p>
            </section>
            
            <section>
              <h2 className="!mb-4">Solution</h2>
              <p>{project.solution}</p>
            </section>
            
            <section>
              <h2 className="!mb-4">Challenges & Learning</h2>
              <p>{project.challenges}</p>
            </section>
            
            <section>
              <h2 className="!mb-4">Results & Impact</h2>
              <p>{project.results}</p>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30">
                <h3 className="font-bold text-xl mb-4 text-slate-900">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="flex items-center gap-2 bg-slate-200/70 px-3 py-1 rounded-full">
                      <CodeIcon className="w-4 h-4 text-slate-600"/>
                      <span className="text-sm font-medium text-slate-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30">
                <h3 className="font-bold text-xl mb-4 text-slate-900">Project Links</h3>
                <div className="space-y-4">
                    {project.githubUrl && project.githubUrl !== '#' && (
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                            <GithubIcon className="w-5 h-5"/> View Code
                        </motion.a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                            <ExternalLinkIcon className="w-5 h-5"/> Live Demo
                        </motion.a>
                    )}
                </div>
              </div>
            </div>
          </aside>
        </div>
        
        {/* Navigation */}
        <div className="mt-24 flex justify-between items-center border-t border-slate-200 pt-8">
            {prevProject ? (
                <Link to={`/projects/${prevProject.slug}`} className="text-left group">
                    <p className="text-sm text-slate-500">Previous Project</p>
                    <p className="text-lg font-semibold text-slate-800 group-hover:text-indigo-600 flex items-center gap-2">
                        <ArrowLeftIcon className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                        {prevProject.title}
                    </p>
                </Link>
            ) : <div />}
             {nextProject ? (
                <Link to={`/projects/${nextProject.slug}`} className="text-right group">
                    <p className="text-sm text-slate-500">Next Project</p>
                    <p className="text-lg font-semibold text-slate-800 group-hover:text-indigo-600 flex items-center gap-2">
                        {nextProject.title}
                        <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </p>
                </Link>
            ) : <div />}
        </div>

      </motion.div>
    </>
  );
};

export default ProjectDetailPage;