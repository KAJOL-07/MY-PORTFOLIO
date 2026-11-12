import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2,
  Award 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-950/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education
          </h2>
          <p className="text-sm text-slate-400">
            Rigorous undergraduate training in core computer science, software design, and algorithms.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover border border-slate-800/90 shadow-xl relative overflow-hidden">
            
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-lg shadow-cyan-500/10">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-2 py-0.5 rounded-md mb-1.5 border border-cyan-500/20">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {educationData.degree}
                  </h3>
                  <div className="text-base font-semibold text-slate-200 mt-1 flex flex-wrap items-center gap-2">
                    <span>{educationData.institution}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-sm font-normal text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {educationData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* CGPA & Timeline badge */}
              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{educationData.timeline}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono font-bold">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CGPA: {educationData.cgpa} / 10</span>
                </div>
              </div>
            </div>

            {/* Coursework & Subjects */}
            <div className="pt-6 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" /> Key Relevant Coursework & Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
                {educationData.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
