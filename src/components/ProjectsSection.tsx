import React, { useState } from 'react';
import { 
  Rocket, 
  CheckCircle2, 
  Globe, 
  Github, 
  ExternalLink, 
  Bot, 
  Coffee, 
  Sparkles,
  ArrowUpRight,
  Code2,
  Layers,
  Check
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI' | 'Web' | 'EdTech'>('All');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI') return proj.tagType === 'ai' || proj.techStack.includes('Artificial Intelligence');
    if (activeFilter === 'EdTech') return proj.category.toLowerCase().includes('education') || proj.title.toLowerCase().includes('foundation') || proj.title.toLowerCase().includes('attendance');
    return true;
  });

  return (
    <section id="projects" className="py-20 scroll-mt-20 border-t border-slate-200 dark:border-[#334155]/40 relative bg-white dark:bg-[#070b16] transition-colors duration-300">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-['JetBrains_Mono'] mb-3">
              <Rocket className="w-3.5 h-3.5" />
              <span>Engineered Software Products</span>
            </div>
            <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-[#dae2fd] tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-600 dark:text-[#94a3b8] text-sm sm:text-base max-w-2xl mt-1.5">
              Practical web applications combining algorithmic reasoning, TypeScript architecture, and AI integrations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-[#334155]/60 text-xs font-['JetBrains_Mono']">
            {(['All', 'AI', 'EdTech'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-[#c2c6d6] hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {filter === 'All' ? 'All Projects' : filter === 'AI' ? 'AI / ML' : 'EdTech & Tools'}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-10">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className={`bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden flex flex-col ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } group border border-slate-200 dark:border-[#334155]/60 shadow-md hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-xl transition-all duration-300`}
              >
                {/* Media Column */}
                <div className={`lg:w-5/12 h-64 sm:h-80 lg:h-auto min-h-[280px] relative bg-slate-950 overflow-hidden ${
                  isReversed ? 'border-b lg:border-b-0 lg:border-l border-slate-200 dark:border-[#334155]/60' : 'border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-[#334155]/60'
                }`}>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />

                  {/* Top Corner Badge */}
                  <div className={`absolute top-4 ${isReversed ? 'right-4' : 'left-4'} bg-white/95 dark:bg-[#070b16]/95 backdrop-blur-md border border-slate-200 dark:border-[#334155]/80 px-3.5 py-1.5 rounded-lg font-['JetBrains_Mono'] text-xs font-bold ${
                    project.tagType === 'ai' ? 'text-indigo-600 dark:text-[#adc6ff]' : 'text-amber-600 dark:text-amber-400'
                  } flex items-center gap-2 shadow-md`}>
                    {project.tagType === 'ai' ? (
                      <Bot className="w-3.5 h-3.5" />
                    ) : (
                      <Coffee className="w-3.5 h-3.5" />
                    )}
                    <span>{project.badgeLabel}</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Title + Interactive Icon */}
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-[#dae2fd] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="font-['JetBrains_Mono'] text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                          {project.category}
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Open ${project.title} interactive modal`}
                        className="p-2.5 rounded-xl bg-indigo-50 dark:bg-[#131b2e] text-indigo-600 dark:text-[#adc6ff] hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white border border-indigo-200 dark:border-[#334155]/60 transition-all cursor-pointer shadow-xs"
                        title="Open Interactive Demo & Code Spec"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-600 dark:text-[#c2c6d6] text-sm sm:text-base leading-relaxed mb-5">
                      {project.shortDescription}
                    </p>

                    {/* Engineered Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 font-['JetBrains_Mono'] text-xs text-slate-700 dark:text-[#dae2fd]">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#131b2e] border border-slate-200 dark:border-[#334155]/60 font-['JetBrains_Mono'] text-[11px] text-slate-700 dark:text-[#c2c6d6]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-slate-100 dark:border-[#334155]/40">
                    {project.liveDemoUrl.startsWith('http') && (
                      <a
                        id={`btn-live-${project.id}`}
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-['Outfit'] text-xs font-bold tracking-wider transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Production Site</span>
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#131b2e] hover:bg-slate-200 dark:hover:bg-[#1e293b] text-slate-800 dark:text-white border border-slate-200 dark:border-[#334155]/60 font-['Outfit'] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Architecture Spec</span>
                    </button>

                    {project.githubUrl.startsWith('http') && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#131b2e] hover:bg-slate-200 dark:hover:bg-[#1e293b] text-slate-700 dark:text-[#c2c6d6] border border-slate-200 dark:border-[#334155]/60 font-['JetBrains_Mono'] text-xs transition-all flex items-center gap-1.5 cursor-pointer ml-auto"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
