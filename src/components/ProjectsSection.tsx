import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, Eye, Code2, Shield, Heart, Sparkles, Box, Trophy } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI & Health' | 'EdTech & Web' | 'Hackathon & 3D'>('All');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & Health') {
      return proj.tagType === 'ai' || proj.tagType === 'health';
    }
    if (activeFilter === 'EdTech & Web') {
      return proj.tagType === 'web' || proj.id === 'learn-track' || proj.id === 'daily-attendance' || proj.id === 'luxury-electronics';
    }
    if (activeFilter === 'Hackathon & 3D') {
      return proj.tagType === 'hackathon' || proj.tagType === '3d';
    }
    return true;
  });

  // Render project mockup illustration
  const renderProjectMockup = (projId: string) => {
    switch (projId) {
      case 'medvault':
        return (
          <svg viewBox="0 0 480 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="MedVault Healthcare Dashboard">
            <defs>
              <linearGradient id="bgMed" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0B192C" />
                <stop offset="100%" stopColor="#1E3E62" />
              </linearGradient>
              <linearGradient id="brandMed" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00ADB5" />
                <stop offset="100%" stopColor="#007991" />
              </linearGradient>
            </defs>
            <rect width="480" height="300" fill="url(#bgMed)" />
            {/* Window bar */}
            <rect x="0" y="0" width="480" height="28" fill="#091424" />
            <circle cx="16" cy="14" r="4" fill="#FF5F57" />
            <circle cx="30" cy="14" r="4" fill="#FEBC2E" />
            <circle cx="44" cy="14" r="4" fill="#28C840" />
            <rect x="160" y="8" width="160" height="12" rx="6" fill="#13263E" />
            {/* Top Stat Cards */}
            <rect x="24" y="44" width="134" height="60" rx="12" fill="#0F243B" stroke="#1D4064" strokeWidth="1" />
            <text x="38" y="66" fontSize="8" fill="#94A3B8">ENCRYPTED VAULT</text>
            <text x="38" y="90" fontSize="18" fontWeight="800" fill="#00ADB5">AES-256</text>
            <rect x="172" y="44" width="134" height="60" rx="12" fill="#0F243B" stroke="#1D4064" strokeWidth="1" />
            <text x="186" y="66" fontSize="8" fill="#94A3B8">PATIENT RECORDS</text>
            <text x="186" y="90" fontSize="18" fontWeight="800" fill="#FFFFFF">1,240+</text>
            <rect x="320" y="44" width="136" height="60" rx="12" fill="#0F243B" stroke="#1D4064" strokeWidth="1" />
            <text x="334" y="66" fontSize="8" fill="#94A3B8">CLINIC STATUS</text>
            <text x="334" y="90" fontSize="18" fontWeight="800" fill="#10B981">SECURE</text>
            {/* Medical Data Panel */}
            <rect x="24" y="116" width="432" height="164" rx="14" fill="#0F243B" stroke="#1D4064" strokeWidth="1" />
            <text x="40" y="142" fontSize="11" fontWeight="700" fill="#FFFFFF">Patient Health Dossier &amp; Diagnostics</text>
            <g>
              <circle cx="50" cy="172" r="8" fill="#00ADB5" />
              <path d="M47 172 l2 2 4 -4" stroke="#fff" strokeWidth="1.5" fill="none" />
              <text x="68" y="176" fontSize="9" fill="#E2E8F0" fontWeight="600">Lab Pathology Report #9842</text>
              <rect x="280" y="168" width="80" height="7" rx="3.5" fill="#1E3E62" />
              <rect x="380" y="164" width="56" height="16" rx="8" fill="rgba(0,173,181,0.2)" />
              <text x="390" y="176" fontSize="8" fill="#00ADB5" fontWeight="600">Encrypted</text>
            </g>
            <g>
              <circle cx="50" cy="206" r="8" fill="#00ADB5" />
              <path d="M47 206 l2 2 4 -4" stroke="#fff" strokeWidth="1.5" fill="none" />
              <text x="68" y="210" fontSize="9" fill="#E2E8F0" fontWeight="600">Radiology Imaging Scan (DICOM)</text>
              <rect x="280" y="202" width="95" height="7" rx="3.5" fill="#1E3E62" />
              <rect x="380" y="198" width="56" height="16" rx="8" fill="rgba(0,173,181,0.2)" />
              <text x="390" y="210" fontSize="8" fill="#00ADB5" fontWeight="600">Encrypted</text>
            </g>
            <g>
              <circle cx="50" cy="240" r="8" fill="#10B981" />
              <path d="M47 240 l2 2 4 -4" stroke="#fff" strokeWidth="1.5" fill="none" />
              <text x="68" y="244" fontSize="9" fill="#E2E8F0" fontWeight="600">Doctor Prescription Token Verified</text>
              <rect x="280" y="236" width="70" height="7" rx="3.5" fill="#1E3E62" />
              <rect x="380" y="232" width="56" height="16" rx="8" fill="rgba(16,185,129,0.2)" />
              <text x="392" y="244" fontSize="8" fill="#10B981" fontWeight="600">Signed</text>
            </g>
          </svg>
        );

      case 'luxury-electronics':
        return (
          <svg viewBox="0 0 480 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Luxury Electronics Store">
            <defs>
              <linearGradient id="bgLux" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#141414" />
                <stop offset="100%" stopColor="#222222" />
              </linearGradient>
            </defs>
            <rect width="480" height="300" fill="url(#bgLux)" />
            <rect x="0" y="0" width="480" height="28" fill="#0D0D0D" />
            <circle cx="16" cy="14" r="4" fill="#FF5F57" />
            <circle cx="30" cy="14" r="4" fill="#FEBC2E" />
            <circle cx="44" cy="14" r="4" fill="#28C840" />
            <rect x="160" y="8" width="160" height="12" rx="6" fill="#1E1E1E" />
            {/* Luxury Product Showcase */}
            <rect x="24" y="44" width="200" height="236" rx="14" fill="#1B1B1B" stroke="#2E2E2E" strokeWidth="1" />
            <circle cx="124" cy="120" r="45" fill="#262626" />
            <circle cx="124" cy="120" r="32" fill="#171717" stroke="#444" strokeWidth="2" />
            <text x="40" y="196" fontSize="12" fontWeight="700" fill="#FFFFFF">Studio Monitor Pro X</text>
            <text x="40" y="214" fontSize="9" fill="#A3A3A3">Planar Magnetic • 96kHz Lossless</text>
            <text x="40" y="244" fontSize="16" fontWeight="800" fill="#D4D4D4">$1,299</text>
            <rect x="130" y="228" width="80" height="26" rx="13" fill="#FFFFFF" />
            <text x="146" y="245" fontSize="9" fontWeight="700" fill="#000000">Add to Cart</text>
            {/* Right Spec Sheets */}
            <rect x="240" y="44" width="216" height="110" rx="14" fill="#1B1B1B" stroke="#2E2E2E" strokeWidth="1" />
            <text x="256" y="70" fontSize="10" fontWeight="700" fill="#FFFFFF">Hardware Architecture</text>
            <rect x="256" y="86" width="180" height="6" rx="3" fill="#333333" />
            <rect x="256" y="100" width="140" height="6" rx="3" fill="#333333" />
            <rect x="256" y="114" width="160" height="6" rx="3" fill="#333333" />
            <rect x="240" y="166" width="216" height="114" rx="14" fill="#1B1B1B" stroke="#2E2E2E" strokeWidth="1" />
            <text x="256" y="192" fontSize="10" fontWeight="700" fill="#FFFFFF">Catalog Filter Engine</text>
            <rect x="256" y="208" width="60" height="18" rx="9" fill="#333" />
            <text x="268" y="220" fontSize="8" fill="#fff">Audio</text>
            <rect x="324" y="208" width="60" height="18" rx="9" fill="#262626" />
            <text x="336" y="220" fontSize="8" fill="#888">Displays</text>
            <rect x="256" y="238" width="180" height="6" rx="3" fill="#333333" />
          </svg>
        );

      case 'sih-hackathon':
        return (
          <svg viewBox="0 0 480 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Smart India Hackathon">
            <defs>
              <linearGradient id="bgSih" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#18181B" />
                <stop offset="100%" stopColor="#27272A" />
              </linearGradient>
            </defs>
            <rect width="480" height="300" fill="url(#bgSih)" />
            <rect x="0" y="0" width="480" height="28" fill="#09090B" />
            <circle cx="16" cy="14" r="4" fill="#FF5F57" />
            <circle cx="30" cy="14" r="4" fill="#FEBC2E" />
            <circle cx="44" cy="14" r="4" fill="#28C840" />
            <rect x="160" y="8" width="160" height="12" rx="6" fill="#18181B" />
            {/* Hackathon Terminal */}
            <rect x="24" y="44" width="432" height="236" rx="14" fill="#09090B" stroke="#3F3F46" strokeWidth="1" />
            <text x="44" y="74" fontSize="11" fontWeight="700" fill="#F43F5E">SMART INDIA HACKATHON (SIH)</text>
            <text x="44" y="96" fontSize="9" fontFamily="monospace" fill="#A1A1AA">&gt; Problem Statement: Automated Public Services &amp; Digital Governance</text>
            <text x="44" y="116" fontSize="9" fontFamily="monospace" fill="#A1A1AA">&gt; Target Architecture: Scalable Microservices with Real-Time Web Hooks</text>
            <rect x="44" y="136" width="392" height="1" fill="#27272A" />
            {/* Sprints */}
            <rect x="44" y="152" width="120" height="40" rx="8" fill="#18181B" stroke="#27272A" strokeWidth="1" />
            <text x="56" y="170" fontSize="8" fill="#71717A">SPRINT 1</text>
            <text x="56" y="184" fontSize="9" fontWeight="700" fill="#10B981">IDEATION &amp; SPEC</text>
            <rect x="180" y="152" width="120" height="40" rx="8" fill="#18181B" stroke="#27272A" strokeWidth="1" />
            <text x="192" y="170" fontSize="8" fill="#71717A">SPRINT 2</text>
            <text x="192" y="184" fontSize="9" fontWeight="700" fill="#3B82F6">PROTOTYPING</text>
            <rect x="316" y="152" width="120" height="40" rx="8" fill="#18181B" stroke="#27272A" strokeWidth="1" />
            <text x="328" y="170" fontSize="8" fill="#71717A">SPRINT 3</text>
            <text x="328" y="184" fontSize="9" fontWeight="700" fill="#F59E0B">TESTING &amp; REVIEW</text>
            <text x="44" y="222" fontSize="9" fontFamily="monospace" fill="#10B981">✓ All test suites passing with 100% build integrity</text>
            <text x="44" y="244" fontSize="9" fontFamily="monospace" fill="#71717A">&gt; Ready for deployment on cloud runner</text>
          </svg>
        );

      case '3d-webinar':
        return (
          <svg viewBox="0 0 480 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="3D Webinar">
            <defs>
              <linearGradient id="bg3d" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1E1B4B" />
                <stop offset="100%" stopColor="#312E81" />
              </linearGradient>
            </defs>
            <rect width="480" height="300" fill="url(#bg3d)" />
            <rect x="0" y="0" width="480" height="28" fill="#17153B" />
            <circle cx="16" cy="14" r="4" fill="#FF5F57" />
            <circle cx="30" cy="14" r="4" fill="#FEBC2E" />
            <circle cx="44" cy="14" r="4" fill="#28C840" />
            <rect x="160" y="8" width="160" height="12" rx="6" fill="#25225E" />
            {/* 3D Geometry Graphic */}
            <polygon points="240,60 340,110 340,210 240,260 140,210 140,110" fill="none" stroke="#818CF8" strokeWidth="2" opacity="0.8" />
            <polygon points="240,110 300,140 300,200 240,230 180,200 180,140" fill="rgba(129,140,248,0.15)" stroke="#A5B4FC" strokeWidth="1" />
            <line x1="240" y1="60" x2="240" y2="110" stroke="#818CF8" strokeWidth="1" />
            <line x1="340" y1="110" x2="300" y2="140" stroke="#818CF8" strokeWidth="1" />
            <line x1="340" y1="210" x2="300" y2="200" stroke="#818CF8" strokeWidth="1" />
            <line x1="240" y1="260" x2="240" y2="230" stroke="#818CF8" strokeWidth="1" />
            <line x1="140" y1="210" x2="180" y2="200" stroke="#818CF8" strokeWidth="1" />
            <line x1="140" y1="110" x2="180" y2="140" stroke="#818CF8" strokeWidth="1" />
            <rect x="32" y="50" width="110" height="50" rx="10" fill="rgba(255,255,255,0.08)" />
            <text x="44" y="70" fontSize="8" fill="#C7D2FE">SPATIAL SCENE</text>
            <text x="44" y="90" fontSize="14" fontWeight="800" fill="#FFFFFF">60 FPS</text>
            <rect x="338" y="210" width="110" height="50" rx="10" fill="rgba(255,255,255,0.08)" />
            <text x="350" y="230" fontSize="8" fill="#C7D2FE">REGISTERED</text>
            <text x="350" y="250" fontSize="14" fontWeight="800" fill="#818CF8">450+ PASSES</text>
          </svg>
        );

      case 'beancoffee':
        return (
          <svg viewBox="0 0 480 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bean &amp; Byte AI Coffee Shop">
            <defs>
              <linearGradient id="bgCoffee" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e1815" />
                <stop offset="100%" stopColor="#0f0c0a" />
              </linearGradient>
              <linearGradient id="brandCoffee" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
            </defs>
            <rect width="480" height="300" fill="url(#bgCoffee)" />
            <rect x="0" y="0" width="480" height="28" fill="#171311" />
            <circle cx="16" cy="14" r="4" fill="#FF5F57" />
            <circle cx="30" cy="14" r="4" fill="#FEBC2E" />
            <circle cx="44" cy="14" r="4" fill="#28C840" />
            <rect x="160" y="8" width="160" height="12" rx="6" fill="#241e1b" />
            <rect x="24" y="44" width="130" height="236" rx="14" fill="#1b1613" stroke="#2d2520" strokeWidth="1" />
            <rect x="38" y="60" width="80" height="10" rx="5" fill="url(#brandCoffee)" />
            <rect x="38" y="82" width="102" height="7" rx="3.5" fill="#3a302a" />
            <rect x="38" y="96" width="70" height="7" rx="3.5" fill="#3a302a" />
            <rect x="38" y="122" width="102" height="28" rx="8" fill="#261e19" />
            <text x="46" y="140" fontSize="9" fill="#F59E0B" fontWeight="600">DARK ROAST (96%)</text>
            <rect x="38" y="162" width="102" height="28" rx="8" fill="#261e19" />
            <text x="46" y="180" fontSize="9" fill="#D97706" fontWeight="600">POUR OVER / ESPRESSO</text>
            <rect x="168" y="44" width="138" height="64" rx="12" fill="#1b1613" stroke="#2d2520" strokeWidth="1" />
            <text x="182" y="68" fontSize="8" fill="#A3A3A3">MATCH ACCURACY</text>
            <text x="182" y="94" fontSize="20" fontWeight="800" fill="#F59E0B">98.4%</text>
            <rect x="318" y="44" width="138" height="64" rx="12" fill="#1b1613" stroke="#2d2520" strokeWidth="1" />
            <text x="332" y="68" fontSize="8" fill="#A3A3A3">FLAVOR ARCHETYPES</text>
            <text x="332" y="94" fontSize="20" fontWeight="800" fill="#FFFFFF">4 MODES</text>
            <rect x="168" y="120" width="288" height="160" rx="14" fill="#1b1613" stroke="#2d2520" strokeWidth="1" />
            <text x="186" y="146" fontSize="11" fontWeight="700" fill="#FFFFFF">Sensory Profiler</text>
            <rect x="186" y="160" width="250" height="8" rx="4" fill="#2b231d" />
            <rect x="186" y="160" width="175" height="8" rx="4" fill="url(#brandCoffee)" />
            <rect x="186" y="180" width="76" height="22" rx="11" fill="#31261f" />
            <text x="198" y="195" fontSize="8" fill="#F59E0B">Cocoa &amp; Nutty</text>
            <rect x="270" y="180" width="76" height="22" rx="11" fill="#31261f" />
            <text x="282" y="195" fontSize="8" fill="#F59E0B">Wild Berries</text>
          </svg>
        );

      case 'learn-track':
        return (
          <svg viewBox="0 0 480 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Learn Track">
            <defs>
              <linearGradient id="bgEd" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0B132B" />
                <stop offset="100%" stopColor="#1C2541" />
              </linearGradient>
            </defs>
            <rect width="480" height="300" fill="url(#bgEd)" />
            <rect x="0" y="0" width="480" height="28" fill="#131e38" />
            <circle cx="16" cy="14" r="4" fill="#FF5F57" />
            <circle cx="30" cy="14" r="4" fill="#FEBC2E" />
            <circle cx="44" cy="14" r="4" fill="#28C840" />
            <rect x="160" y="8" width="160" height="12" rx="6" fill="#1e2c4d" />
            <rect x="24" y="44" width="120" height="236" rx="14" fill="#111c36" stroke="#22335c" strokeWidth="1" />
            <rect x="36" y="60" width="70" height="10" rx="5" fill="#3B82F6" />
            <rect x="36" y="82" width="90" height="6" rx="3" fill="#2d4375" />
            <rect x="36" y="98" width="80" height="6" rx="3" fill="#2d4375" />
            <rect x="36" y="138" width="96" height="24" rx="8" fill="#192a52" />
            <text x="44" y="154" fontSize="8" fill="#60A5FA" fontWeight="600">RECURSION MODULE</text>
            <rect x="156" y="44" width="144" height="64" rx="12" fill="#111c36" stroke="#22335c" strokeWidth="1" />
            <text x="170" y="68" fontSize="8" fill="#94A3B8">STUDY RETENTION</text>
            <text x="170" y="94" fontSize="20" fontWeight="800" fill="#60A5FA">94.8%</text>
            <rect x="312" y="44" width="144" height="64" rx="12" fill="#111c36" stroke="#22335c" strokeWidth="1" />
            <text x="326" y="68" fontSize="8" fill="#94A3B8">MASTERY</text>
            <text x="326" y="94" fontSize="20" fontWeight="800" fill="#34D399">TIER 1</text>
            <rect x="156" y="120" width="300" height="160" rx="14" fill="#111c36" stroke="#22335c" strokeWidth="1" />
            <text x="174" y="146" fontSize="11" fontWeight="700" fill="#FFFFFF">Diagnostic Pipeline</text>
            <g>
              <circle cx="184" cy="172" r="8" fill="#10B981" />
              <path d="M181 172 l2 2 4 -4" stroke="#fff" strokeWidth="1.5" fill="none" />
              <rect x="200" y="168" width="160" height="7" rx="3.5" fill="#38BDF8" />
            </g>
            <g>
              <circle cx="184" cy="200" r="8" fill="#10B981" />
              <path d="M181 200 l2 2 4 -4" stroke="#fff" strokeWidth="1.5" fill="none" />
              <rect x="200" y="196" width="190" height="7" rx="3.5" fill="#38BDF8" />
            </g>
          </svg>
        );

      case 'daily-attendance':
      default:
        return (
          <svg viewBox="0 0 480 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Daily Attendance System">
            <defs>
              <linearGradient id="bgAtt2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0B132B" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
            </defs>
            <rect width="480" height="300" fill="url(#bgAtt2)" />
            <rect x="0" y="0" width="480" height="28" fill="#111B2E" />
            <circle cx="16" cy="14" r="4" fill="#FF5F57" />
            <circle cx="30" cy="14" r="4" fill="#FEBC2E" />
            <circle cx="44" cy="14" r="4" fill="#28C840" />
            <rect x="160" y="8" width="160" height="12" rx="6" fill="#1E2D48" />
            <rect x="24" y="44" width="134" height="60" rx="12" fill="#131F33" stroke="#253552" strokeWidth="1" />
            <text x="38" y="66" fontSize="8" fill="#94A3B8">PRESENT</text>
            <text x="38" y="90" fontSize="18" fontWeight="800" fill="#3B82F6">142</text>
            <rect x="172" y="44" width="134" height="60" rx="12" fill="#131F33" stroke="#253552" strokeWidth="1" />
            <text x="186" y="66" fontSize="8" fill="#94A3B8">ABSENT</text>
            <text x="186" y="90" fontSize="18" fontWeight="800" fill="#EF4444">8</text>
            <rect x="320" y="44" width="136" height="60" rx="12" fill="#131F33" stroke="#253552" strokeWidth="1" />
            <text x="334" y="66" fontSize="8" fill="#94A3B8">ON DUTY (OD)</text>
            <text x="334" y="90" fontSize="18" fontWeight="800" fill="#F59E0B">5</text>
            <rect x="24" y="116" width="432" height="164" rx="14" fill="#131F33" stroke="#253552" strokeWidth="1" />
            <text x="40" y="142" fontSize="11" fontWeight="700" fill="#FFFFFF">Department Attendance Ledger</text>
            <g>
              <circle cx="50" cy="168" r="8" fill="#059669" />
              <path d="M47 168 l2 2 4 -4" stroke="#fff" strokeWidth="1.5" fill="none" />
              <text x="68" y="172" fontSize="9" fill="#E2E8F0" fontWeight="600">AMSCE-2025-042</text>
              <rect x="220" y="164" width="80" height="7" rx="3.5" fill="#475569" />
              <rect x="380" y="160" width="56" height="16" rx="8" fill="rgba(16,185,129,0.2)" />
              <text x="392" y="172" fontSize="8" fill="#10B981" fontWeight="600">Present</text>
            </g>
            <g>
              <circle cx="50" cy="202" r="8" fill="#059669" />
              <path d="M47 202 l2 2 4 -4" stroke="#fff" strokeWidth="1.5" fill="none" />
              <text x="68" y="206" fontSize="9" fill="#E2E8F0" fontWeight="600">AMSCE-2025-043</text>
              <rect x="220" y="198" width="95" height="7" rx="3.5" fill="#475569" />
              <rect x="380" y="194" width="56" height="16" rx="8" fill="rgba(16,185,129,0.2)" />
              <text x="392" y="206" fontSize="8" fill="#10B981" fontWeight="600">Present</text>
            </g>
          </svg>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Section Head matching fahimio */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="eyebrow">
              GitHub Repositories &amp; Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-extrabold text-[var(--ink)] tracking-tight">
              Things I've built
            </h2>
            <p className="text-base text-[var(--ink-soft)] leading-relaxed">
              Curated software builds, AI applications, healthcare platforms, and hackathon solutions from my GitHub account{' '}
              <a
                href="https://github.com/asifibrahim7680-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink)] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                asifibrahim7680-web
              </a>.
            </p>
          </div>

          {/* Filter Pills matching fahimio */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-[var(--tint-1)] border border-[var(--line)] text-xs font-semibold">
            {(['All', 'AI & Health', 'EdTech & Web', 'Hackathon & 3D'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[var(--surface)] text-[var(--ink)] shadow-xs font-bold'
                    : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <article key={project.id} className="fahim-card overflow-hidden flex flex-col group">
              
              {/* Project Media Visual Mockup */}
              <div className="w-full aspect-[16/10] bg-[#0c1322] border-b border-[var(--line)] relative overflow-hidden flex items-center justify-center p-3 select-none">
                {renderProjectMockup(project.id)}
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-[var(--ink-faint)] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--tint-1)] text-[var(--ink-soft)]">
                      {project.badgeLabel}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-['Manrope'] text-[var(--ink)] leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed mt-2 line-clamp-3">
                    {project.shortDescription}
                  </p>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[var(--tint-1)] text-[var(--ink-soft)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons matching fahimio */}
                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors flex items-center gap-1"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors flex items-center gap-1"
                        title="Open Live Application"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3 py-1.5 rounded-full bg-[var(--ink)] text-[var(--surface)] text-[11px] font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* View All Projects on GitHub Footer Button matching fahimio */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/asifibrahim7680-web"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            <Github className="w-4 h-4" />
            <span>Explore All Repositories on GitHub (asifibrahim7680-web)</span>
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
