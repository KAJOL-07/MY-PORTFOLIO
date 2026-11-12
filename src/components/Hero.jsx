import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Cpu, 
  Copy, 
  Check, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300 tracking-wide">
                Available for Software Engineering & Full-Stack Roles
              </span>
            </div>

            {/* Main Greeting & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
                {personalInfo.role}
              </h2>
            </div>

            {/* Short Tagline */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed">
              "{personalInfo.tagline}"
            </p>

            <p className="text-sm text-slate-400/90 max-w-xl">
              Studying at <span className="text-slate-200 font-medium">Bannari Amman Institute of Technology</span> (2023–2027, CGPA: 7.3). Focused on resilient full-stack architecture, clean OOP engineering, and production-ready applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/40 shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-slate-400 text-sm">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Connect:</span>
              
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs font-mono">KAJOL-07</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 hover:text-blue-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs font-mono">kajol7</span>
              </a>

              <div className="relative inline-flex items-center">
                <a
                  href={personalInfo.socials.emailMailto}
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-mono">kajolta07@gmail.com</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="ml-1 p-1.5 rounded text-slate-500 hover:text-slate-300 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Developer-Themed Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 animate-subtle-glow"></div>

              {/* Developer Terminal Box */}
              <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      kajol-profile.ts
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider bg-slate-800/60 px-2 py-0.5 rounded">
                    UTF-8
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 space-y-2.5">
                  <div className="text-slate-500">// Engineering Profile & Skillset</div>
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-300">developer</span>:{' '}
                    <span className="text-emerald-400">SoftwareEngineer</span> = &#123;
                  </div>
                  
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-amber-300">"{personalInfo.name}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">department:</span>{' '}
                      <span className="text-amber-300">"Computer Science & Engineering"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">institution:</span>{' '}
                      <span className="text-amber-300">"Bannari Amman Institute of Tech"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">cgpa:</span>{' '}
                      <span className="text-cyan-400">7.3</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">coreStrengths:</span> [
                    </div>
                    <div className="pl-4 text-emerald-300">
                      "OOP", "Full-Stack Web", "Databases", "DSA", "REST APIs"
                    </div>
                    <div>],</div>
                    <div>
                      <span className="text-slate-400">primaryFrameworks:</span> [
                    </div>
                    <div className="pl-4 text-sky-300">
                      "React.js", "Node.js", "Express.js", "Flutter"
                    </div>
                    <div>],</div>
                    <div>
                      <span className="text-slate-400">recentRole:</span> &#123;
                    </div>
                    <div className="pl-4 text-amber-200">
                      title: "Flutter Developer Intern",
                      org: "Gateway Software Solutions",
                      status: "Completed (March 2026)"
                    </div>
                    <div>&#125;,</div>
                  </div>

                  <div>&#125;;</div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ready for production
                    </span>
                    <span className="text-slate-500 font-mono">4 Featured Projects</span>
                  </div>
                </div>

                {/* Micro tech pills footer */}
                <div className="px-5 py-3 bg-slate-900/50 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Stack:</span>
                  {['React', 'Node.js', 'Flutter', 'MySQL', 'MongoDB', 'Python'].map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
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
    </section>
  );
}
