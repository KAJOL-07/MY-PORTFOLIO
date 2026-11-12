import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  Download,
  Crown 
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const contactChannels = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: personalInfo.socials.emailMailto,
      actionText: 'Send Direct Email',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.socials.linkedinUsername,
      href: personalInfo.socials.linkedin,
      actionText: 'Connect on LinkedIn',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: personalInfo.socials.githubUsername,
      href: personalInfo.socials.github,
      actionText: 'View Repositories',
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-cosmic-grid relative min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <PageHeader 
          badge="Direct Inquiries"
          title="Let's Build Something Together."
          subtitle="Open to campus recruitment, software developer roles, engineering internships, and technical discussions."
        />

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Side: Professional Message & Contact Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl luxury-card border border-mocha-cream/40 space-y-5 bg-white/90 shadow-warm-sm">
              <h3 className="text-xl font-serif font-bold text-espresso">
                Get In Touch
              </h3>

              <p className="text-sm text-muted-text leading-relaxed">
                Have an opportunity, project, or idea in mind? I'd love to connect.
              </p>

              <div className="space-y-3 pt-2">
                {contactChannels.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-cosmic-soft border border-mocha-cream/40 flex items-center justify-between hover:border-burgundy-deep/40 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-mocha-cream/20 border border-mocha-cream/60 flex items-center justify-center text-burgundy-deep shrink-0 shadow-warm-sm">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-bold uppercase text-burgundy-deep tracking-widest">
                            {item.label}
                          </div>
                          <a
                            href={item.href}
                            target={item.label === 'Email' ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="text-xs font-mono font-medium text-espresso hover:text-burgundy-deep truncate block transition-colors"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <button
                          onClick={() => handleCopy(item.value, item.label)}
                          className="p-1.5 rounded-lg bg-white text-muted-text hover:text-burgundy-deep border border-mocha-cream/40 transition-colors shadow-warm-sm"
                          title={`Copy ${item.label}`}
                        >
                          {copiedField === item.label ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <a
                          href={item.href}
                          target={item.label === 'Email' ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white text-muted-text hover:text-burgundy-deep border border-mocha-cream/40 transition-colors shadow-warm-sm"
                          title={item.actionText}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Resume Button in Contact Page */}
              <div className="pt-4 border-t border-mocha-cream/30">
                <button
                  onClick={onOpenResume}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-white hover:bg-cosmic-soft text-burgundy-deep border border-mocha-cream/60 hover:border-burgundy-deep transition-all shadow-warm-sm"
                >
                  <Download className="w-4 h-4 text-burgundy-deep" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-5 rounded-2xl bg-white/90 border border-mocha-cream/40 flex items-center gap-4 shadow-warm-sm">
              <div className="w-10 h-10 rounded-xl bg-mocha-cream/20 border border-mocha-cream/50 flex items-center justify-center text-burgundy-deep shrink-0">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-espresso">Open for Opportunities</div>
                <div className="text-xs text-muted-text mt-0.5">
                  Available for full-time Software Engineer & Graduate roles starting 2026/2027.
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl luxury-card border border-mocha-cream/40 space-y-6 bg-white/95 shadow-warm-md">
              <div className="flex items-center justify-between pb-4 border-b border-mocha-cream/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-mocha-cream/20 border border-mocha-cream/60 flex items-center justify-center text-burgundy-deep">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-espresso">
                      Send a Message
                    </h3>
                    <p className="text-xs text-muted-text">
                      Direct form for recruiter inquiries, questions, and project collaboration.
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-burgundy-deep flex items-center gap-1 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span> Active
                </span>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 rounded-xl bg-cosmic-soft border border-mocha-cream/50 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-mocha-cream/20 text-burgundy-deep flex items-center justify-center mx-auto border border-mocha-cream/50">
                    <CheckCircle2 className="w-6 h-6 text-burgundy-deep" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-espresso">Message Logged!</h4>
                  <p className="text-xs text-muted-text max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-burgundy-deep font-semibold">{formData.name}</span>. Your message has been received. You can also connect via <span className="text-burgundy-deep font-mono">{personalInfo.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-burgundy-deep hover:bg-burgundy-dark text-cosmic-latte shadow-warm-sm transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-espresso">
                        Name <span className="text-burgundy-deep">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Technical Recruiter / Hiring Lead"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-mocha-cream/50 text-sm text-espresso placeholder-muted-text/50 focus:outline-none focus:border-burgundy-deep focus:ring-1 focus:ring-burgundy-deep transition-colors shadow-warm-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-espresso">
                        Email <span className="text-burgundy-deep">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="recruiter@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-mocha-cream/50 text-sm text-espresso placeholder-muted-text/50 focus:outline-none focus:border-burgundy-deep focus:ring-1 focus:ring-burgundy-deep transition-colors shadow-warm-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-espresso">
                      Message <span className="text-burgundy-deep">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Kajol, we reviewed your work on VaxiMatch and MediFlow. We would like to connect regarding an engineering role..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-mocha-cream/50 text-sm text-espresso placeholder-muted-text/50 focus:outline-none focus:border-burgundy-deep focus:ring-1 focus:ring-burgundy-deep transition-colors resize-none shadow-warm-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-burgundy-deep hover:bg-burgundy-dark text-cosmic-latte shadow-warm-sm hover:shadow-warm-md transition-all transform active:scale-95"
                  >
                    <Send className="w-4 h-4 text-cosmic-latte" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
