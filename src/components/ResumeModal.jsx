import React from 'react';
import { 
  X, 
  Download, 
  Mail, 
  Phone, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award, 
  CheckCircle2,
  Crown
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { 
  personalInfo, 
  skillsData, 
  experienceData, 
  projectsData, 
  certificationsData, 
  achievementsData, 
  educationData 
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-espresso/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-cosmic-latte border border-mocha-cream/60 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/95 border-b border-mocha-cream/40 shrink-0">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-burgundy-deep" />
            <h3 className="font-serif text-sm sm:text-base font-bold text-espresso">
              Executive Resume Preview — {personalInfo.name}
            </h3>
            <span className="hidden sm:inline text-xs font-mono px-2 py-0.5 rounded bg-mocha-cream/20 text-burgundy-deep border border-mocha-cream/40">
              Verified 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-burgundy-deep hover:bg-burgundy-dark text-cosmic-latte shadow-warm-sm transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download / Print PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white text-muted-text hover:text-burgundy-deep border border-mocha-cream/50 transition-colors shadow-warm-sm"
              aria-label="Close Resume Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-cosmic-latte text-espresso space-y-8 print:bg-white print:text-black print:p-0">
          
          {/* Resume Header */}
          <div className="border-b border-mocha-cream/40 pb-6 print:border-black/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-espresso print:text-black">
                  {personalInfo.name}
                </h1>
                <p className="text-burgundy-deep font-semibold text-sm sm:text-base mt-1 print:text-black">
                  {personalInfo.role}
                </p>
                <p className="text-xs text-muted-text mt-0.5">
                  {personalInfo.college} • Class of 2027
                </p>
              </div>

              <div className="text-xs space-y-1 text-muted-text font-mono print:text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-burgundy-deep" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-burgundy-deep" />
                  <span>+91 {personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-burgundy-deep" />
                  <span>{personalInfo.socials.linkedinUsername}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-burgundy-deep" />
                  <span>{personalInfo.socials.githubUsername}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-text mt-4 leading-relaxed print:text-gray-800">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-burgundy-deep flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-burgundy-deep" /> Education
            </h2>
            <div className="p-4 rounded-xl bg-white/90 border border-mocha-cream/40 print:bg-transparent print:border-black/10 shadow-warm-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-espresso print:text-black">
                  {educationData.degree}
                </h3>
                <span className="text-xs font-mono text-burgundy-deep print:text-black">
                  {educationData.timeline}
                </span>
              </div>
              <div className="text-xs text-muted-text mt-0.5 print:text-gray-700">
                {educationData.institution} • CGPA: <span className="text-burgundy-deep font-bold print:text-black">{educationData.cgpa} / 10</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-burgundy-deep flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-burgundy-deep" /> Work Experience
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/90 border border-mocha-cream/40 space-y-2 print:bg-transparent print:border-black/10 shadow-warm-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="text-sm font-bold text-espresso print:text-black">
                    {exp.position} — <span className="text-burgundy-deep">{exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-muted-text print:text-gray-600">
                    {exp.date}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-muted-text print:text-gray-800">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="leading-relaxed">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-burgundy-deep flex items-center gap-2">
              <Code2 className="w-4 h-4 text-burgundy-deep" /> Key Projects ({projectsData.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectsData.map((project) => (
                <div key={project.id} className="p-3.5 rounded-xl bg-white/90 border border-mocha-cream/40 space-y-1.5 print:bg-transparent print:border-black/10 shadow-warm-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-espresso print:text-black">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-mono text-burgundy-deep bg-mocha-cream/20 px-1.5 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-text line-clamp-2 print:text-gray-800">
                    {project.shortDescription}
                  </p>
                  <div className="text-[10px] font-mono text-burgundy-dark font-medium pt-1">
                    {project.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-burgundy-deep flex items-center gap-2">
              <Award className="w-4 h-4 text-burgundy-deep" /> Technical Competencies
            </h2>
            <div className="p-4 rounded-xl bg-white/90 border border-mocha-cream/40 space-y-2 text-xs print:bg-transparent print:border-black/10 shadow-warm-sm">
              {skillsData.map((cat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-1">
                  <span className="font-semibold text-espresso w-48 shrink-0 print:text-black">
                    {cat.category}:
                  </span>
                  <span className="text-muted-text font-mono print:text-gray-700">
                    {cat.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-burgundy-deep">
                Certifications
              </h2>
              <ul className="space-y-1.5 text-xs text-muted-text print:text-gray-800">
                {certificationsData.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-burgundy-deep shrink-0 mt-0.5" />
                    <span>{c.title} ({c.issuer})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-burgundy-deep">
                Hackathons & Awards
              </h2>
              <ul className="space-y-1.5 text-xs text-muted-text print:text-gray-800">
                {achievementsData.map((a, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-burgundy-deep shrink-0 mt-0.5" />
                    <span>{a.title} ({a.institution})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
