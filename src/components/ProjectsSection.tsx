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
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 scroll-mt-20 border-t border-slate-200 dark:border-[#424754]/20 relative bg-white dark:bg-transparent">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-[#adc6ff]/10 border border-indigo-200 dark:border-[#adc6ff]/30 flex items-center justify-center text-indigo-600 dark:text-[#adc6ff]">
              <Rocket className="w-4 h-4" />
            </div>
            <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-[#dae2fd]">
              Featured Projects
            </h2>
          </div>
          <p className="text-slate-600 dark:text-[#c2c6d6] text-base sm:text-lg max-w-2xl">
            Applying computational logic, machine learning, and clean UI engineering to solve real-world problems.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-10 sm:gap-12">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className={`bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden flex flex-col ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } group border border-slate-200 dark:border-[#1e293b] shadow-md hover:shadow-xl transition-all duration-300`}
              >
                {/* Media Column */}
                <div className={`lg:w-5/12 h-64 sm:h-80 lg:h-auto min-h-[260px] relative bg-slate-900 dark:bg-[#131b2e] overflow-hidden ${
                  isReversed ? 'border-b lg:border-b-0 lg:border-l border-slate-200 dark:border-[#1e293b]' : 'border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-[#1e293b]'
                }`}>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />

                  {/* Top Corner Badge */}
                  <div className={`absolute top-4 ${isReversed ? 'right-4' : 'left-4'} bg-white/90 dark:bg-[#0b1326]/90 backdrop-blur-md border border-slate-200 dark:border-[#424754]/60 px-3.5 py-1.5 rounded-md font-['JetBrains_Mono'] text-xs font-semibold ${
                    project.tagType === 'ai' ? 'text-indigo-600 dark:text-[#adc6ff]' : 'text-amber-600 dark:text-[#df7412]'
                  } flex items-center gap-2 shadow-md`}>
                    {project.tagType === 'ai' ? (
                      <Bot className="w-3.5 h-3.5 text-indigo-600 dark:text-[#adc6ff]" />
                    ) : (
                      <Coffee className="w-3.5 h-3.5 text-amber-600 dark:text-[#df7412]" />
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
                        <h3 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-slate-900 dark:text-[#dae2fd] group-hover:text-indigo-600 dark:group-hover:text-[#adc6ff] transition-colors">
                          {project.title}
                        </h3>
                        <p className="font-['JetBrains_Mono'] text-xs text-slate-500 dark:text-[#8c909f] mt-0.5">
                          {project.category}
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Open ${project.title} interactive preview`}
                        className="p-2.5 rounded-lg bg-indigo-50 dark:bg-[#adc6ff]/10 text-indigo-600 dark:text-[#adc6ff] hover:bg-indigo-600 hover:text-white dark:hover:bg-[#adc6ff] dark:hover:text-[#002e6a] transition-all duration-200 cursor-pointer"
                        title="Open Interactive Demo"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-600 dark:text-[#c2c6d6] text-sm sm:text-base leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Engineered Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mb-6">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 font-['JetBrains_Mono'] text-xs sm:text-sm text-slate-700 dark:text-[#dae2fd]">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-[#adc6ff] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-slate-100 dark:bg-[#131b2e] border border-slate-200 dark:border-[#424754]/40 font-['JetBrains_Mono'] text-[11px] text-slate-700 dark:text-[#c2c6d6]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-5 border-t border-slate-100 dark:border-[#424754]/30">
                    {project.liveDemoUrl.startsWith('http') ? (
                      <a
                        id={`btn-live-${project.id}`}
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-['Outfit'] text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-sm cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    ) : null}

                    <button
                      id={`btn-view-project-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-[#171f33] hover:bg-slate-200 dark:hover:bg-[#222a3d] text-slate-800 dark:text-[#dae2fd] hover:text-indigo-600 dark:hover:text-[#adc6ff] border border-slate-200 dark:border-[#424754]/60 font-['Outfit'] text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-sm cursor-pointer"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Details & Sandbox</span>
                    </button>

                    <a
                      id={`btn-github-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-[#171f33] hover:bg-slate-200 dark:hover:bg-[#222a3d] text-slate-800 dark:text-[#dae2fd] hover:text-indigo-600 dark:hover:text-[#adc6ff] border border-slate-200 dark:border-[#424754]/60 font-['Outfit'] text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 active:scale-95"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
