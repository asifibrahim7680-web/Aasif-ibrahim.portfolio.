import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Lab', id: 'interactive-lab' },
    { name: 'Highlights', id: 'achievements' },
    { name: 'Education', id: 'education' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--surface-glass)] backdrop-blur-md border-b border-[var(--line)] shadow-[var(--shadow-sm)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
          
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-8 h-8 rounded-lg bg-[var(--ink)] text-[var(--surface)] flex items-center justify-center font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
              AI
            </span>
            <span className="font-['Manrope'] font-extrabold text-lg text-[var(--ink)] tracking-tight">
              Aasif Ibrahim<span className="text-[var(--ink-faint)]">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[0.92rem] font-medium text-[var(--ink-soft)]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`transition-colors hover:text-[var(--ink)] relative py-1 ${
                  activeSection === link.id ? 'text-[var(--ink)] font-semibold' : ''
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--ink)] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] flex items-center justify-center transition-all hover:border-[var(--ink)] hover:scale-105 cursor-pointer shadow-xs"
              aria-label="Toggle Color Theme"
              title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 transition-transform duration-300 rotate-0" />
              ) : (
                <Moon className="w-4 h-4 transition-transform duration-300 rotate-0" />
              )}
            </button>

            {/* Direct Connect CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="btn primary sm hidden sm:inline-flex"
            >
              Let's Talk
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] flex lg:hidden items-center justify-center transition-all cursor-pointer"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed top-[65px] left-0 right-0 z-40 bg-[var(--surface)] border-b border-[var(--line)] shadow-xl px-6 py-6 lg:hidden animate-fadeIn">
          <nav className="flex flex-col space-y-3 font-medium text-base text-[var(--ink-soft)]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`py-2 px-3 rounded-lg border-b border-[var(--line-subtle)] transition-colors ${
                  activeSection === link.id ? 'text-[var(--ink)] font-bold bg-[var(--tint-1)]' : 'hover:text-[var(--ink)]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-[var(--line)] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn secondary w-full text-center"
            >
              View Verified Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="btn primary w-full text-center"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </>
  );
};
