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
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<{ name: string; description: string; level: string } | null>(null);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Terminal className="w-4 h-4" />;
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
      default: return <Code className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#df7412]" />;
      case 'Brain': return <Brain className="w-5 h-5 text-[#ddb7ff]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#adc6ff]" />;
      default: return <Layers className="w-5 h-5 text-[#adc6ff]" />;
    }
  };

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-20 scroll-mt-20 border-t border-slate-200 dark:border-[#424754]/20 relative bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-[#adc6ff]/10 border border-indigo-200 dark:border-[#adc6ff]/30 flex items-center justify-center text-indigo-600 dark:text-[#adc6ff]">
              <Code className="w-4 h-4" />
            </div>
            <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-[#dae2fd]">
              Technical Skills
            </h2>
          </div>
          <p className="text-slate-600 dark:text-[#c2c6d6] text-base sm:text-lg max-w-2xl">
            A comprehensive set of languages, frameworks, and machine learning tools applied in real-world development.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-['JetBrains_Mono'] font-semibold transition-all cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-[#171f33] text-slate-600 dark:text-[#c2c6d6] hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-[#424754]/30'
            }`}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-['JetBrains_Mono'] font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.title
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-[#171f33] text-slate-600 dark:text-[#c2c6d6] hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-[#424754]/30'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Bento Grid Style for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-[#131b2e]/80 rounded-xl p-5 sm:p-6 flex flex-col justify-between h-full border border-slate-200 dark:border-[#424754]/30 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-500 dark:hover:border-[#adc6ff]/50"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#424754]/30 pb-3.5 mb-5">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(category.icon)}
                    <h3 className="font-['Outfit'] font-bold text-xl text-slate-900 dark:text-[#dae2fd]">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs text-slate-400 dark:text-[#8c909f]">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => setActiveSkill(skill)}
                      className="px-3 py-2 rounded-md font-['JetBrains_Mono'] text-xs text-slate-800 dark:text-[#dae2fd] bg-slate-50 dark:bg-[#0d1527] border border-slate-200 dark:border-[#2d3449] hover:border-indigo-500 dark:hover:border-[#adc6ff] flex items-center gap-2 text-left cursor-pointer transition-all active:scale-95 group/skill"
                      style={{ borderLeft: `3px solid ${category.borderColor}` }}
                      title={`Click to view details for ${skill.name}`}
                    >
                      <span className="text-slate-500 dark:text-[#c2c6d6] group-hover/skill:text-indigo-600 dark:group-hover/skill:text-[#adc6ff] transition-colors">
                        {getSkillIcon(skill.icon)}
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-white/90 group-hover/skill:text-indigo-600 dark:group-hover/skill:text-white">{skill.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom hint or proficiency level summary */}
              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-[#424754]/20 flex items-center justify-between text-[11px] font-['JetBrains_Mono'] text-slate-400 dark:text-[#8c909f]">
                <span>Applied in production</span>
                <span className="text-indigo-600 dark:text-[#adc6ff] font-medium">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Quick Detail Banner (if clicked) */}
        {activeSkill && (
          <div className="mt-6 p-4 rounded-xl bg-white dark:bg-[#131b2e] border border-indigo-200 dark:border-[#adc6ff]/40 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-[#adc6ff]/10 border border-indigo-200 dark:border-[#adc6ff]/30 flex items-center justify-center text-indigo-600 dark:text-[#adc6ff]">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <p className="font-['Outfit'] font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{activeSkill.name}</span>
                  <span className="text-[10px] font-['JetBrains_Mono'] font-normal px-2 py-0.5 rounded bg-indigo-50 dark:bg-[#171f33] text-indigo-700 dark:text-[#adc6ff] border border-indigo-200 dark:border-[#424754]/40">
                    {activeSkill.level}
                  </span>
                </p>
                <p className="text-xs text-slate-600 dark:text-[#c2c6d6] mt-0.5">{activeSkill.description}</p>
              </div>
            </div>
            <button
              onClick={() => setActiveSkill(null)}
              className="text-xs font-['JetBrains_Mono'] text-slate-500 dark:text-[#8c909f] hover:text-slate-900 dark:hover:text-white underline self-end sm:self-auto cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
