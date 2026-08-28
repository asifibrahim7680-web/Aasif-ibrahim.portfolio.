import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  CheckCircle2, 
  Sparkles, 
  Copy, 
  Check,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please enter a message';
    else if (formData.message.trim().length < 5) errs.message = 'Message must be at least 5 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 800);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 scroll-mt-20 border-t border-slate-200 dark:border-[#424754]/20 relative bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Presence */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-[#adc6ff]/10 border border-indigo-200 dark:border-[#adc6ff]/30 flex items-center justify-center text-indigo-600 dark:text-[#adc6ff]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-[#dae2fd]">
                  Let's Connect
                </h2>
              </div>
              <p className="text-slate-600 dark:text-[#c2c6d6] text-base leading-relaxed">
                Open to discussions regarding artificial intelligence engineering, software development roles, internships, or innovative technical collaborations.
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="space-y-3 font-['JetBrains_Mono'] text-xs">
              
              {/* Location */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-[#424754]/40 shadow-sm flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-[#0b1326] border border-amber-200 dark:border-[#424754]/50 flex items-center justify-center text-amber-600 dark:text-[#ffb786] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-400 dark:text-[#8c909f] block text-[11px]">Location:</span>
                  <span className="text-slate-800 dark:text-white font-semibold text-sm">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-[#424754]/40 shadow-sm flex items-center justify-between gap-2">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-[#0b1326] border border-indigo-200 dark:border-[#424754]/50 flex items-center justify-center text-indigo-600 dark:text-[#adc6ff] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-slate-400 dark:text-[#8c909f] block text-[11px]">Direct Email:</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-slate-800 dark:text-white font-semibold text-sm hover:text-indigo-600 dark:hover:text-[#adc6ff] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  id="btn-copy-email"
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#0b1326] dark:hover:bg-[#171f33] border border-slate-200 dark:border-[#424754]/40 text-indigo-600 dark:text-[#adc6ff] transition-colors flex-shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <p className="font-['JetBrains_Mono'] text-xs text-slate-500 dark:text-[#8c909f] mb-3">Connect on Technical Networks:</p>
              <div className="flex gap-3">
                <a
                  id="contact-github-link"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-[#424754]/50 shadow-sm flex items-center justify-center text-slate-700 dark:text-[#c2c6d6] hover:text-indigo-600 dark:hover:text-[#adc6ff] hover:border-indigo-500 dark:hover:border-[#adc6ff]/60 hover:-translate-y-0.5 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  id="contact-linkedin-link"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-[#424754]/50 shadow-sm flex items-center justify-center text-slate-700 dark:text-[#c2c6d6] hover:text-indigo-600 dark:hover:text-[#adc6ff] hover:border-indigo-500 dark:hover:border-[#adc6ff]/60 hover:-translate-y-0.5 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  id="contact-twitter-link"
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-[#424754]/50 shadow-sm flex items-center justify-center text-slate-700 dark:text-[#c2c6d6] hover:text-indigo-600 dark:hover:text-[#adc6ff] hover:border-indigo-500 dark:hover:border-[#adc6ff]/60 hover:-translate-y-0.5 transition-all"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-[#424754]/40 shadow-lg">
              
              <h3 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-[#8c909f] mb-6">
                Fill out the handshake form below and I will get back to you promptly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-200 text-xs font-['JetBrains_Mono'] flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">Message Dispatched Successfully!</p>
                    <p className="mt-0.5 text-emerald-700 dark:text-emerald-300/90">Thank you for reaching out. Aasif will review your message shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-['Inter']">
                
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block font-['JetBrains_Mono'] text-xs font-semibold text-slate-700 dark:text-[#c2c6d6] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#020617] border ${
                      errors.name ? 'border-red-400' : 'border-slate-300 dark:border-[#424754]/50'
                    } text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#424754] focus:outline-none focus:border-indigo-500 dark:focus:border-[#adc6ff] focus:ring-1 focus:ring-indigo-500 dark:focus:ring-[#adc6ff] transition-all`}
                  />
                  {errors.name && <p className="text-red-500 dark:text-red-400 text-xs mt-1 font-['JetBrains_Mono']">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block font-['JetBrains_Mono'] text-xs font-semibold text-slate-700 dark:text-[#c2c6d6] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#020617] border ${
                      errors.email ? 'border-red-400' : 'border-slate-300 dark:border-[#424754]/50'
                    } text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#424754] focus:outline-none focus:border-indigo-500 dark:focus:border-[#adc6ff] focus:ring-1 focus:ring-indigo-500 dark:focus:ring-[#adc6ff] transition-all`}
                  />
                  {errors.email && <p className="text-red-500 dark:text-red-400 text-xs mt-1 font-['JetBrains_Mono']">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block font-['JetBrains_Mono'] text-xs font-semibold text-slate-700 dark:text-[#c2c6d6] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Initiate handshake or project inquiry..."
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#020617] border ${
                      errors.message ? 'border-red-400' : 'border-slate-300 dark:border-[#424754]/50'
                    } text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#424754] focus:outline-none focus:border-indigo-500 dark:focus:border-[#adc6ff] focus:ring-1 focus:ring-indigo-500 dark:focus:ring-[#adc6ff] transition-all resize-none`}
                  />
                  {errors.message && <p className="text-red-500 dark:text-red-400 text-xs mt-1 font-['JetBrains_Mono']">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="btn-send-message"
                  disabled={submitting}
                  className="w-full mt-2 py-3.5 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-['Outfit'] text-sm font-semibold tracking-wide transition-all duration-200 shadow-md flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 group cursor-pointer"
                >
                  <span>{submitting ? 'Transmitting Handshake...' : 'Send Message'}</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
