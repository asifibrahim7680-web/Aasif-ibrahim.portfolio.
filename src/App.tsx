/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { LanguagesSection } from './components/LanguagesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { PhotoProvider } from './context/PhotoContext';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Handle Dark / Light mode class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  // Section Observer for active nav highlighting
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0b1326] text-slate-900 dark:text-[#dae2fd] transition-colors duration-300 relative selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:bg-[#adc6ff]/30 dark:selection:text-[#adc6ff]">
        
        {/* Background Ambience / Subtle Grid & Glows */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-25"
          style={{
            background: 'radial-gradient(circle at 80% 10%, rgba(173, 198, 255, 0.12) 0%, transparent 45%), radial-gradient(circle at 10% 80%, rgba(111, 0, 190, 0.08) 0%, transparent 50%)'
          }}
        />

        {/* Navigation Bar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Main Content Area */}
        <main className="relative z-10">
          <HeroSection 
            onNavigate={handleNavigate} 
            onOpenResume={() => setIsResumeOpen(true)}
          />
          <AboutSection onOpenResume={() => setIsResumeOpen(true)} />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <LanguagesSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onScrollToTop={handleScrollToTop} />

        {/* Dedicated Interactive Resume Modal */}
        <ResumeModal 
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />

        {/* Real Photo Upload & Crop Modal */}
        <PhotoUploadModal />
        
      </div>
    </PhotoProvider>
  );
}

