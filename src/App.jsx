import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ResumeModal from './components/ResumeModal';

// Dedicated Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cosmic-latte text-espresso flex flex-col selection:bg-burgundy-deep/15 selection:text-burgundy-deep">
        
        {/* Fixed / Sticky Multi-page Navbar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Dynamic Route View */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenResume={() => setIsResumeOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact onOpenResume={() => setIsResumeOpen(true)} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Consistent Footer */}
        <Footer />

        {/* Executive Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
