import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { 
  Crown, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Sparkles 
} from 'lucide-react';
import { Github } from '../components/Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  // Dynamically derive unique categories from projects data for future extensibility
  const categories = ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <div className="py-16 sm:py-24 bg-cosmic-grid relative min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <PageHeader 
          badge="Engineered Solutions"
          title="Selected Projects"
          subtitle="Real-world software engineering applications spanning agentic healthcare slot watching, predictive bed management, secure academic portals, and computer vision."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                filter === cat
                  ? 'bg-burgundy-deep text-cosmic-latte font-bold shadow-warm-sm scale-105'
                  : 'bg-white text-muted-text hover:text-espresso hover:bg-cosmic-soft border border-mocha-cream/40 shadow-warm-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards List */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;
            const isVaxiMatch = project.id === 'vaximatch';

            return (
              <div
                key={project.id}
                className={`relative rounded-3xl luxury-card transition-all duration-300 border overflow-hidden group bg-white/95 ${
                  isFeatured
                    ? 'border-mocha-cream/70 shadow-warm-md hover:shadow-warm-lg hover:border-burgundy-deep/50'
                    : 'border-mocha-cream/40 hover:border-burgundy-deep/40 shadow-warm-sm hover:shadow-warm-md'
                }`}
              >
                {/* Featured Project Highlight Banner */}
                {isFeatured && (
                  <div className={`px-5 py-2.5 flex items-center justify-between text-cosmic-latte font-bold text-xs tracking-widest uppercase border-b ${
                    isVaxiMatch 
                      ? 'bg-gradient-to-r from-burgundy-deep via-burgundy-dark to-espresso border-burgundy-dark/50' 
                      : 'bg-gradient-to-r from-mocha-cream via-burgundy-soft to-burgundy-deep border-mocha-cream/40'
                  }`}>
                    <span className="flex items-center gap-2">
                      {isVaxiMatch ? (
                        <>
                          <Sparkles className="w-4 h-4 text-cosmic-latte" />
                          <span>Latest Project — Agentic AI Slot Watcher</span>
                        </>
                      ) : (
                        <>
                          <Crown className="w-4 h-4 text-cosmic-latte fill-current" />
                          <span>Flagship System — Hospital Bed Forecasting</span>
                        </>
                      )}
                    </span>
                    <span className="font-mono text-[11px] opacity-90 hidden sm:inline text-cosmic-latte/90">
                      {isVaxiMatch ? 'Healthcare Slot Automation' : 'AI Hospital Allocation'}
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Details */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-cosmic-soft text-burgundy-deep border border-mocha-cream/40 font-medium">
                            {project.category}
                          </span>
                          {project.badge && !isFeatured && (
                            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-mocha-cream/15 text-muted-text border border-mocha-cream/30">
                              {project.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-espresso tracking-tight group-hover:text-burgundy-deep transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm font-semibold text-burgundy-deep">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-muted-text text-sm leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="space-y-2">
                        <span className="text-xs uppercase tracking-widest font-bold text-muted-text">
                          Technology Stack:
                        </span>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-mono rounded-lg bg-cosmic-soft text-espresso border border-mocha-cream/40"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        <Link
                          to={`/projects/${project.id}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-burgundy-deep hover:bg-burgundy-dark text-cosmic-latte shadow-warm-sm transition-all active:scale-95"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 text-cosmic-latte" />
                        </Link>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-cosmic-soft text-espresso border border-mocha-cream/50 hover:border-burgundy-deep shadow-warm-sm transition-colors"
                        >
                          <Github className="w-4 h-4 text-burgundy-deep" />
                          <span>GitHub Repository</span>
                        </a>
                      </div>
                    </div>

                    {/* Right: Key Features Box */}
                    <div className="lg:col-span-5 bg-cosmic-soft/90 rounded-2xl p-6 border border-mocha-cream/40 backdrop-blur-md space-y-4 shadow-warm-sm">
                      <div className="flex items-center justify-between pb-3 border-b border-mocha-cream/30">
                        <span className="text-xs font-bold uppercase tracking-wider text-burgundy-deep flex items-center gap-2">
                          <Activity className="w-4 h-4 text-burgundy-deep" /> Key Features & Capabilities
                        </span>
                        <span className="text-[11px] font-mono text-muted-text font-medium">
                          {project.features.length} modules
                        </span>
                      </div>

                      <ul className="space-y-2.5">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-muted-text leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-burgundy-deep shrink-0 mt-0.5" />
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
    </div>
  );
}
