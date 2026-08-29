import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Brain, 
  Wrench, 
  Coffee, 
  Cpu, 
  FileCode, 
  Bot, 
  Sparkles, 
  Database, 
  Layout, 
  Palette, 
  GitBranch, 
  Github,
  Check,
  Layers,
  Cloud,
  Server,
  Code2,
  BookOpen,
  Rocket,
  Shield,
  ArrowRight,
  Info
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Skill } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inspectedSkill, setInspectedSkill] = useState<Skill | null>(null);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'FileCode': return <FileCode className="w-4 h-4" />;
      case 'Bot': return <Bot className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'Layout': return <Layout className="w-4 h-4" />;
      case 'Palette': return <Palette className="w-4 h-4" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4" />;
      case 'Github': return <Github className="w-4 h-4" />;
      case 'Cloud': return <Cloud className="w-4 h-4" />;
      case 'Server': return <Server className="w-4 h-4" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4" />;
      case 'Rocket': return <Rocket className="w-4 h-4" />;
      default: return <Terminal className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-indigo-500" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-500" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-500" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-500" />;
      default: return <Layers className="w-5 h-5 text-indigo-500" />;
    }
  };

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 scroll-mt-20 border-t border-slate-200 dark:border-[#334155]/40 relative bg-slate-50/50 dark:bg-[#070b16] transition-colors duration-300">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-['JetBrains_Mono'] mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Capabilities & Stack</span>
            </div>
            <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-[#dae2fd] tracking-tight">
              Engineering Skills & Stack
            </h2>
            <p className="text-slate-600 dark:text-[#94a3b8] text-sm sm:text-base max-w-2xl mt-1.5">
              Production frameworks, artificial intelligence tools, and cloud platforms applied across hands-on repositories.
            </p>
          </div>

          <span className="text-xs font-['JetBrains_Mono'] text-slate-500 dark:text-[#8c909f]">
            Click any skill for architecture notes
          </span>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-['JetBrains_Mono'] font-bold transition-all cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-[#0f172a] text-slate-700 dark:text-[#c2c6d6] hover:bg-slate-100 dark:hover:bg-[#1e293b] border border-slate-200 dark:border-[#334155]/60'
            }`}
          >
            All Disciplines ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-4 py-2 rounded-xl text-xs font-['JetBrains_Mono'] font-bold transition-all cursor-pointer ${
                selectedCategory === cat.title
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white dark:bg-[#0f172a] text-slate-700 dark:text-[#c2c6d6] hover:bg-slate-100 dark:hover:bg-[#1e293b] border border-slate-200 dark:border-[#334155]/60'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Bento Grid for Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-[#334155]/60 shadow-md hover:border-indigo-500 dark:hover:border-indigo-400 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#334155]/40 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-[#131b2e] border border-slate-200 dark:border-[#334155]/60 flex items-center justify-center shadow-xs">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="font-['Outfit'] font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <span className="font-['JetBrains_Mono'] text-[11px] text-slate-400">
                        {category.skills.length} core competencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill Badges List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => setInspectedSkill(skill)}
                      className="p-3 rounded-xl font-['JetBrains_Mono'] text-xs bg-slate-50 dark:bg-[#131b2e] border border-slate-200 dark:border-[#334155]/60 hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-sm flex items-center justify-between text-left cursor-pointer transition-all active:scale-[0.98] group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                          {getSkillIcon(skill.icon)}
                        </span>
                        <span className="font-semibold text-slate-800 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-[#070b16] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#334155] flex-shrink-0 ml-2">
                        {skill.level}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inspected Skill Detail Drawer / Inline Card */}
        {inspectedSkill && (
          <div className="mt-8 p-6 rounded-2xl bg-indigo-50 dark:bg-[#0f172a] border-2 border-indigo-500/50 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeIn">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <h4 className="font-['Outfit'] font-bold text-lg text-slate-900 dark:text-white">
                  {inspectedSkill.name}
                </h4>
                <span className="px-2.5 py-0.5 rounded-md bg-indigo-600 text-white text-xs font-['JetBrains_Mono'] font-bold">
                  {inspectedSkill.level} Level
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-[#c2c6d6] font-['JetBrains_Mono'] leading-relaxed">
                {inspectedSkill.description}
              </p>
            </div>
            <button
              onClick={() => setInspectedSkill(null)}
              className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-[#334155] text-xs font-['JetBrains_Mono'] font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 cursor-pointer flex-shrink-0"
            >
              Close Detail
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
