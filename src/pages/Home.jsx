import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Crown, 
  Terminal, 
  ShieldCheck 
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { personalInfo } from '../data/portfolioData';

export default function Home({ onOpenResume }) {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center py-16 sm:py-24 bg-cosmic-grid overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-mocha-cream/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-burgundy-muted rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Eyebrow, Headings, CTAs, Socials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Eyebrow Text */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-mocha-cream/50 shadow-warm-sm backdrop-blur-md">
              <Crown className="w-3.5 h-3.5 text-burgundy-deep" />
              <span className="text-xs font-bold tracking-widest text-burgundy-deep uppercase">
                COMPUTER SCIENCE ENGINEERING
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-espresso leading-tight">
                Hi, I'm{' '}
                <span className="text-burgundy-deep">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Supporting Text */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-espresso/90 font-medium">
                {personalInfo.tagline}
              </h2>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-muted-text max-w-xl font-normal leading-relaxed">
              {personalInfo.description}
            </p>

            {/* Subtle Burgundy & Mocha Decorative Line */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-burgundy-deep via-mocha-cream to-transparent rounded-full"></div>

            {/* Academic Standings Pill */}
            <div className="text-xs font-mono text-muted-text flex flex-wrap items-center gap-2 pt-1">
              <span className="text-espresso font-medium">{personalInfo.college}</span>
              <span className="text-mocha-cream">•</span>
              <span>2023 – 2027</span>
              <span className="text-mocha-cream">•</span>
              <span className="text-burgundy-deep font-bold">CGPA: {personalInfo.cgpa}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-burgundy-deep hover:bg-burgundy-dark text-cosmic-latte shadow-warm-sm hover:shadow-warm-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-cosmic-latte" />
              </Link>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-cosmic-soft text-espresso border border-mocha-cream/50 hover:border-burgundy-deep/60 shadow-warm-sm transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-burgundy-deep" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="pt-6 flex flex-wrap items-center gap-4 text-muted-text text-sm border-t border-mocha-cream/30">
              <span className="text-xs uppercase tracking-widest font-bold text-burgundy-deep">Connect:</span>
              
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-mocha-cream/40 text-muted-text hover:text-burgundy-deep hover:border-burgundy-deep shadow-warm-sm transition-colors text-xs font-mono"
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/KAJOL-07</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-mocha-cream/40 text-muted-text hover:text-burgundy-deep hover:border-burgundy-deep shadow-warm-sm transition-colors text-xs font-mono"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/kajol7</span>
              </a>

              <a
                href={personalInfo.socials.emailMailto}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-mocha-cream/40 text-muted-text hover:text-burgundy-deep hover:border-burgundy-deep shadow-warm-sm transition-colors text-xs font-mono"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Abstract Luxury-Tech Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Warm Mocha Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-mocha-cream/30 via-burgundy-muted to-mocha-cream/20 rounded-2xl blur-xl opacity-60"></div>

              {/* Luxury Tech Glass Terminal */}
              <div className="relative rounded-2xl bg-white/95 border border-mocha-cream/50 shadow-warm-lg backdrop-blur-2xl overflow-hidden">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-cosmic-soft/90 border-b border-mocha-cream/30">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-burgundy-deep"></div>
                    <div className="w-3 h-3 rounded-full bg-mocha-cream"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
                    <span className="ml-2 text-xs font-mono text-espresso flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-burgundy-deep" />
                      kajol_profile.ts
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-text uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-mocha-cream/30">
                    TypeScript • UTF-8
                  </span>
                </div>

                {/* Code Window */}
                <div className="p-6 font-mono text-xs leading-relaxed text-espresso/90 space-y-2.5 bg-white">
                  <div className="text-muted-text/60">// Candidate Specification</div>
                  <div>
                    <span className="text-burgundy-deep font-semibold">interface</span>{' '}
                    <span className="text-burgundy-dark font-medium">SoftwareEngineer</span> &#123;
                  </div>
                  
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-muted-text">candidate:</span>{' '}
                      <span className="text-espresso font-medium">"{personalInfo.name}"</span>;
                    </div>
                    <div>
                      <span className="text-muted-text">program:</span>{' '}
                      <span className="text-espresso font-medium">"{personalInfo.role}"</span>;
                    </div>
                    <div>
                      <span className="text-muted-text">institution:</span>{' '}
                      <span className="text-espresso font-medium">"{personalInfo.college}"</span>;
                    </div>
                    <div>
                      <span className="text-muted-text">cgpa:</span>{' '}
                      <span className="text-burgundy-deep font-bold">"{personalInfo.cgpa} / 10"</span>;
                    </div>
                    <div>
                      <span className="text-muted-text">coreCompetencies:</span> [
                    </div>
                    <div className="pl-4 text-burgundy-deep font-medium">
                      "OOP", "Full-Stack Web", "SQL Databases", "Agentic AI", "DSA"
                    </div>
                    <div>];</div>
                    <div>
                      <span className="text-muted-text">stack:</span> [
                    </div>
                    <div className="pl-4 text-espresso">
                      "React.js", "Node.js", "Express.js", "Flutter", "MySQL", "MongoDB", "Python"
                    </div>
                    <div>];</div>
                    <div>
                      <span className="text-muted-text">internship:</span> &#123;
                    </div>
                    <div className="pl-4 text-espresso">
                      role: "Flutter Developer Intern",
                      org: "Gateway Software Solutions",
                      completed: "March 2026"
                    </div>
                    <div>&#125;;</div>
                  </div>

                  <div>&#125;</div>

                  <div className="pt-3 border-t border-mocha-cream/30 flex items-center justify-between text-[11px] text-muted-text">
                    <span className="flex items-center gap-1.5 text-burgundy-deep font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-burgundy-deep" /> Available for Roles
                    </span>
                    <span className="text-muted-text font-mono font-medium">5 Featured Projects</span>
                  </div>
                </div>

                {/* Tech Highlights Footer */}
                <div className="px-5 py-3 bg-cosmic-soft/80 border-t border-mocha-cream/30 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-burgundy-deep tracking-widest">Stack:</span>
                  {['React.js', 'Node.js', 'Express.js', 'Flutter', 'MySQL', 'MongoDB', 'Python'].map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-espresso border border-mocha-cream/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
