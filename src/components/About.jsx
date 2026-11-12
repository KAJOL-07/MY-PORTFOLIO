import React from 'react';
import { 
  Code, 
  Database, 
  Workflow, 
  Layers, 
  GitBranch, 
  CheckCircle,
  GraduationCap,
  Users
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const engineeringPillars = [
    {
      icon: Code,
      title: 'Full-Stack Web Engineering',
      description: 'Hands-on experience architecting robust web solutions using React.js, Node.js, Express.js, and modern RESTful APIs.',
    },
    {
      icon: Database,
      title: 'Databases & SQL Mastery',
      description: 'Strong foundation in relational SQL querying, schema optimization, and NoSQL document storage with MySQL and MongoDB.',
    },
    {
      icon: Layers,
      title: 'Object-Oriented & Core CS',
      description: 'Grounded in OOP design principles, Data Structures & Algorithms, Operating Systems, and clean system architecture.',
    },
    {
      icon: Users,
      title: 'Teamwork & SDLC Leadership',
      description: 'Skilled in requirement analysis, system modeling, collaborative sprint development, and disciplined testing pipelines.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Professional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl glass-panel border border-slate-800 relative">
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <span className="text-cyan-300 font-medium">Computer Science and Engineering student</span> at Bannari Amman Institute of Technology (2023–2027), passionate about engineering reliable, scalable, and user-centric digital products.
                </p>
                
                <p>
                  My technical foundation centers on <span className="text-white font-medium">Object-Oriented Programming</span>, <span className="text-white font-medium">Web Application Development</span>, <span className="text-white font-medium">SQL & Database Concepts</span>, and <span className="text-white font-medium">Data Structures and Algorithms</span>. I have hands-on experience building full-stack applications with <span className="text-cyan-300 font-medium">React.js, Node.js, and Express.js</span>, along with mobile development in <span className="text-sky-300 font-medium">Flutter</span>.
                </p>
                
                <p>
                  Beyond writing clean code, I bring collaborative team leadership experience and an end-to-end engineering mindset—guiding projects from <span className="text-slate-100 font-medium">requirement analysis and architectural design</span> all the way through <span className="text-slate-100 font-medium">iterative development and systematic testing</span>.
                </p>
              </div>

              {/* Highlight Badges */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Academic Standing</div>
                    <div className="text-sm font-bold text-white">CGPA 7.3 / 10</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Lifecycle Focus</div>
                    <div className="text-sm font-bold text-white">Analysis to QA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalInfo.metrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-center"
                >
                  <div className="text-base sm:text-lg font-bold text-white font-mono">{metric.value}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {engineeringPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-800/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center gap-1.5 text-[11px] font-semibold text-cyan-400">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Practice
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
