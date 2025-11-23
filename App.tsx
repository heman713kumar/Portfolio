import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { SpinnerIcon } from './components/IconComponents';

const HomePage = lazy(() => import('./pages/HomePage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ExperienceDetailPage = lazy(() => import('./pages/ExperienceDetailPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const AchievementsPage = lazy(() => import('./pages/AchievementsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ExtracurricularPage = lazy(() => import('./pages/ExtracurricularPage'));

const PageLoader: React.FC = () => (
  <div className="flex justify-center items-center h-full min-h-[50vh]">
    <SpinnerIcon className="w-12 h-12 text-indigo-600 animate-spin" />
  </div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/experience/:slug" element={<ExperienceDetailPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/extracurricular" element={<ExtracurricularPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

const AppContent: React.FC = () => {
  const location = useLocation();
  return (
    <div className="relative flex flex-col min-h-screen bg-transparent font-sans z-10">
      <Header />
      <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28"
      >
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
      </motion.main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
