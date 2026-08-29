import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowRight, Sun, Moon, Sparkles, FileText, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  activeSection,
  onNavigate,
  onOpenResume
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Lab', id: 'interactive-lab' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileDrawerOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="top-app-bar"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#0b1326]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-[#424754]/40 shadow-sm'
            : 'bg-white/80 dark:bg-[#0b1326]/70 backdrop-blur-md border-b border-slate-100 dark:border-[#424754]/20'
        } flex justify-between items-center h-18 px-4 sm:px-6 md:px-12`}
      >
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <button
            id="menu-toggle-btn"
            onClick={() => setMobileDrawerOpen(true)}
            className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-[#c2c6d6] hover:text-indigo-600 dark:hover:text-[#adc6ff] hover:bg-slate-100 dark:hover:bg-[#171f33] transition-colors focus:outline-none cursor-pointer"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center gap-2.5 text-slate-900 dark:text-[#dae2fd] font-extrabold text-2xl tracking-tight group"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600 dark:bg-indigo-600 text-white flex items-center justify-center font-['Outfit'] font-bold text-sm shadow-sm">
              <span>AI</span>
            </div>
            <div className="flex items-center">
              <span className="font-['Outfit']">{PERSONAL_INFO.name.split(' ')[0]}</span>
              <span className="text-indigo-600 dark:text-[#adc6ff] text-3xl leading-none">.</span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`relative px-3.5 py-1.5 rounded-lg text-sm font-['Outfit'] transition-all duration-200 ${
                  isActive
                    ? 'text-indigo-600 dark:text-[#adc6ff] font-bold bg-indigo-50/70 dark:bg-[#171f33]'
                    : 'text-slate-600 dark:text-[#c2c6d6] hover:text-indigo-600 dark:hover:text-[#adc6ff] hover:bg-slate-50 dark:hover:bg-[#171f33]/60 font-medium'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-indigo-600 dark:bg-[#adc6ff] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume CTA Button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 font-['Outfit'] text-xs font-semibold px-3.5 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-800/60 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
            title="View & Download Official Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2.5 rounded-full text-slate-700 dark:text-[#c2c6d6] hover:text-indigo-600 dark:hover:text-[#adc6ff] hover:bg-slate-100 dark:hover:bg-[#171f33] border border-slate-200 dark:border-[#424754]/30 transition-colors cursor-pointer"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Quick Contact CTA */}
          <a
            id="nav-contact-cta"
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="hidden sm:inline-flex items-center gap-2 font-['Outfit'] text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
          >
            <span>Contact</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-drawer-overlay"
        onClick={() => setMobileDrawerOpen(false)}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${
          mobileDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        id="mobile-drawer"
        className={`fixed inset-y-0 left-0 z-[70] flex flex-col h-full w-72 bg-[#131b2e] border-r border-[#424754]/30 shadow-2xl py-6 px-4 lg:hidden transition-transform duration-300 ease-out ${
          mobileDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-[#424754]/30 mb-6 px-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-['Outfit'] font-bold text-sm shadow-sm flex-shrink-0">
              AI
            </div>
            <div>
              <h2 className="font-['Outfit'] font-bold text-base text-[#adc6ff]">{PERSONAL_INFO.name}</h2>
              <p className="text-xs text-[#c2c6d6]">CSE Student • CGPA 8.3</p>
            </div>
          </div>
          <button
            id="close-drawer-btn"
            onClick={() => setMobileDrawerOpen(false)}
            className="p-1.5 rounded-lg text-[#c2c6d6] hover:text-white hover:bg-[#171f33] cursor-pointer"
            aria-label="Close navigation drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume button in mobile drawer */}
        <div className="mb-4 px-2">
          <button
            onClick={() => {
              setMobileDrawerOpen(false);
              onOpenResume();
            }}
            className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 text-white font-['Outfit'] text-xs font-semibold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>View Official Resume</span>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-['JetBrains_Mono'] transition-colors ${
                  isActive
                    ? 'bg-[#6f00be]/30 text-[#adc6ff] border border-[#6f00be]/50 font-semibold'
                    : 'text-[#c2c6d6] hover:bg-[#171f33] hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <Sparkles className="w-4 h-4 text-[#adc6ff]" />}
              </a>
            );
          })}
        </nav>

        {/* Drawer Footer info */}
        <div className="pt-4 border-t border-[#424754]/30 text-xs text-[#8c909f] px-2 font-['JetBrains_Mono']">
          <p className="flex items-center gap-1.5 text-[#adc6ff]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Open for internships & projects
          </p>
          <p className="mt-2 text-[11px] text-[#c2c6d6]">Avadi, Chennai, Tamil Nadu, India</p>
        </div>
      </aside>
    </>
  );
};

