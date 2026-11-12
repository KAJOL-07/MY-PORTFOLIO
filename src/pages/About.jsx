import React from 'react';
import PageHeader from '../components/PageHeader';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Workflow, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About() {
  const lifecycleStages = [
    { title: 'Requirement Analysis', desc: 'Analyzing functional specifications and defining system constraints.' },
    { title: 'System Design', desc: 'Architecting modular components, data schemas, and REST contracts.' },
    { title: 'Development', desc: 'Writing maintainable, Object-Oriented code adhering to clean architecture.' },
    { title: 'Testing & Debugging', desc: 'Conducting systematic tests and validation to guarantee stability.' },
  ];

  const focusPillars = [
    'Full Stack Development',
    'Problem Solving',
    'Data Structures & Algorithms',
    'Database Systems',
    'Agentic AI Applications',
  ];

  return (
    <div className="py-16 sm:py-24 bg-cosmic-grid relative min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <PageHeader 
          badge="Candidate Background"
          title="About Me"
          subtitle="Computer Science and Engineering student with strong foundations in full-stack web systems, OOP, databases, and structured software methodologies."
        />

        {/* Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Professional Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl luxury-card border border-mocha-cream/40 space-y-5 bg-white/90">
              <div className="space-y-4 text-espresso/90 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <span className="text-burgundy-deep font-semibold">Computer Science Engineering student</span> with a strong foundation in <span className="text-espresso font-medium">Object-Oriented Programming</span>, <span className="text-espresso font-medium">web application development</span>, <span className="text-espresso font-medium">SQL database concepts</span>, and software development practices.
                </p>

                <p>
                  My hands-on development experience encompasses building full-stack applications with <span className="text-burgundy-dark font-semibold">React.js, Node.js, Express.js, Java, Python, SQL, and MongoDB</span>. I also bring cross-platform mobile experience from my <span className="text-burgundy-deep font-medium">Flutter Developer Internship</span> at Gateway Software Solutions.
                </p>

                <p>
                  I am experienced in navigating the complete development lifecycle—from <span className="text-espresso font-medium">Requirement Analysis</span> and architectural <span className="text-espresso font-medium">Design</span>, to structured <span className="text-espresso font-medium">Development</span> and rigorous <span className="text-espresso font-medium">Testing</span> to deliver robust digital solutions.
                </p>
              </div>

              {/* SDLC Lifecycle Grid */}
              <div className="pt-6 border-t border-mocha-cream/30 space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-widest text-burgundy-deep flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-burgundy-deep" /> Development Lifecycle Experience
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {lifecycleStages.map((stage, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-cosmic-soft border border-mocha-cream/40">
                      <div className="text-xs font-bold text-espresso flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-burgundy-deep"></span>
                        {stage.title}
                      </div>
                      <p className="text-[11px] text-muted-text mt-1 leading-normal">
                        {stage.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What I Focus On */}
            <div className="p-6 sm:p-8 rounded-2xl luxury-card border border-mocha-cream/40 space-y-4 bg-white/90">
              <h3 className="text-sm uppercase font-bold tracking-widest text-burgundy-deep flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-burgundy-deep" /> What I Focus On
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {focusPillars.map((focus, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-cosmic-soft border border-mocha-cream/35 text-xs text-espresso">
                    <CheckCircle2 className="w-4 h-4 text-burgundy-deep shrink-0" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl luxury-card border border-mocha-cream/50 space-y-6 bg-white/95">
              <div className="flex items-center justify-between pb-4 border-b border-mocha-cream/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-mocha-cream/20 border border-mocha-cream/60 flex items-center justify-center text-burgundy-deep shadow-warm-sm">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-burgundy-deep bg-mocha-cream/20 px-2 py-0.5 rounded border border-mocha-cream/40">
                      Academic Background
                    </span>
                    <h3 className="text-lg font-serif font-bold text-espresso mt-1">
                      Education
                    </h3>
                  </div>
                </div>
              </div>

              {/* Education details */}
              <div className="space-y-3">
                <div>
                  <h4 className="text-base font-serif font-bold text-espresso">
                    {educationData.degree}
                  </h4>
                  <p className="text-sm text-espresso/90 font-medium mt-0.5">
                    {educationData.institution}
                  </p>
                  <p className="text-xs text-muted-text mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-burgundy-deep" />
                    {educationData.location}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono text-muted-text flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-burgundy-deep" /> {educationData.timeline}
                  </span>
                  <span className="text-xs font-mono font-bold text-burgundy-deep bg-mocha-cream/20 px-3 py-1 rounded-lg border border-mocha-cream/40">
                    CGPA: {educationData.cgpa} / 10
                  </span>
                </div>
              </div>

              {/* Coursework Breakdown */}
              <div className="pt-4 border-t border-mocha-cream/30 space-y-2">
                <div className="text-[11px] uppercase tracking-wider font-bold text-burgundy-deep">
                  Key Relevant Coursework:
                </div>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-cosmic-soft text-espresso border border-mocha-cream/40"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3">
              {personalInfo.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-xl luxury-card text-center border border-mocha-cream/40 bg-white/90">
                  <div className="text-lg font-serif font-bold text-burgundy-deep font-mono">{metric.value}</div>
                  <div className="text-[11px] text-muted-text mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
