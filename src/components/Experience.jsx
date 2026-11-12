import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  ExternalLink,
  ChevronRight,
  ShieldCheck 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="text-sm text-slate-400">
            Practical industry immersion building cross-platform solutions and production APIs.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover border border-slate-800/90 shadow-xl"
            >
              {/* Top Row: Role, Company, Time, Badge */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-lg shadow-cyan-500/10">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-2 py-0.5 rounded-md mb-1.5 border border-cyan-500/20">
                      {exp.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.position}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 mt-0.5 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 font-normal">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono self-start md:self-center">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.date}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="py-6 space-y-3.5">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Key Contributions & Responsibilities
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <div className="mt-1 w-4 h-4 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                        <ChevronRight className="w-3 h-3" />
                      </div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                  Tools & Architecture:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900 text-cyan-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
