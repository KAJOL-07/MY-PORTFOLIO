import React, { useState } from 'react';
import { 
  ExternalLink, 
  Star, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Code2, 
  ArrowUpRight,
  Filter,
  ShieldCheck,
  Activity,
  X
} from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'AI & Full-Stack', 'Full-Stack Web', 'Deep Learning & CV'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Engineered Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-400">
            Real-world systems spanning AI bed optimization, secure approval pipelines, intelligent roommate matching, and clinical computer vision.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                filter === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`relative rounded-3xl glass-panel transition-all duration-300 border overflow-hidden group ${
                  isFeatured 
                    ? 'border-cyan-500/40 bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-slate-950/90 shadow-2xl shadow-cyan-500/10' 
                    : 'border-slate-800 hover:border-slate-700 bg-slate-950/80'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1.5 flex items-center justify-between text-slate-950 font-bold text-xs tracking-wider uppercase">
                    <span className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-current" /> Primary Flagship Project
                    </span>
                    <span className="font-mono text-[11px] opacity-90">AI Healthcare Optimization</span>
                  </div>
                )}

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left details */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm font-semibold text-cyan-400">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech stack badges */}
                      <div className="space-y-2">
                        <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                          Technologies Used:
                        </span>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900 text-slate-200 border border-slate-800 group-hover:border-slate-700 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-500/50 transition-all shadow-sm"
                        >
                          <Github className="w-4 h-4 text-cyan-400" />
                          <span>View on GitHub</span>
                        </a>

                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500/15 to-blue-500/15 hover:from-cyan-500/25 hover:to-blue-500/25 text-cyan-300 border border-cyan-500/30 transition-all"
                        >
                          <span>System Architecture & Features</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right: Key Features Interactive Box */}
                    <div className="lg:col-span-5 bg-slate-900/60 rounded-2xl p-6 border border-slate-800/90 backdrop-blur-md space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                          <Activity className="w-4 h-4 text-cyan-400" /> Key Features & Modules
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          {project.features.length} points
                        </span>
                      </div>

                      <ul className="space-y-2.5">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full rounded-2xl bg-slate-950 border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Project Deep Dive
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {activeModalProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  System Overview
                </h4>
                <p>{activeModalProject.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Stack & Architecture
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs bg-slate-900/50 p-2 rounded border border-slate-800/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Open Project Repository</span>
              </a>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
