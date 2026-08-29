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
  MessageSquare,
  Clock,
  ArrowRight,
  Phone
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [topic, setTopic] = useState<string>('Internship / Role');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const topicOptions = [
    'Internship / Role',
    'AI Project Collab',
    'Workshop / Talk',
    'General Inquiry'
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please enter a message';
    else if (formData.message.trim().length < 6) errs.message = 'Message must be at least 6 characters';
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
    }, 750);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-20 border-t border-slate-200 dark:border-[#334155]/40 relative bg-slate-50/60 dark:bg-[#070b16] transition-colors duration-300">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Presence */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-['JetBrains_Mono'] mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct Communications</span>
              </div>
              <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-[#dae2fd] tracking-tight">
                Let's Build Together
              </h2>
              <p className="text-slate-600 dark:text-[#c2c6d6] text-sm sm:text-base leading-relaxed mt-2">
                Open to discussions regarding engineering internships, full-stack software development, AI research collaborations, and community technical workshops.
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="space-y-3 font-['JetBrains_Mono'] text-xs">
              
              {/* Location */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-[#334155]/60 shadow-sm flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-[#131b2e] border border-indigo-200 dark:border-[#334155]/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-400 dark:text-[#8c909f] block text-[10px] uppercase">Physical Base</span>
                  <span className="text-slate-800 dark:text-white font-semibold text-xs sm:text-sm">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-[#334155]/60 shadow-sm flex items-center justify-between gap-2">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-[#131b2e] border border-indigo-200 dark:border-[#334155]/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-slate-400 dark:text-[#8c909f] block text-[10px] uppercase">Electronic Mail</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-slate-800 dark:text-white font-semibold text-xs sm:text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  id="btn-copy-email"
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#131b2e] dark:hover:bg-[#1e293b] border border-slate-200 dark:border-[#334155]/60 text-indigo-600 dark:text-indigo-400 transition-colors flex-shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-[#334155]/60 shadow-sm flex items-center justify-between gap-2">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-[#131b2e] border border-indigo-200 dark:border-[#334155]/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-slate-400 dark:text-[#8c909f] block text-[10px] uppercase">Telephone</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-slate-800 dark:text-white font-semibold text-xs sm:text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhoneToClipboard}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#131b2e] dark:hover:bg-[#1e293b] border border-slate-200 dark:border-[#334155]/60 text-indigo-600 dark:text-indigo-400 transition-colors flex-shrink-0 cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <p className="font-['JetBrains_Mono'] text-xs text-slate-500 dark:text-[#8c909f] mb-3">Connect on Technical Platforms:</p>
              <div className="flex gap-3">
                <a
                  id="contact-github-link"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-[#334155]/60 shadow-sm flex items-center justify-center text-slate-700 dark:text-[#c2c6d6] hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 hover:-translate-y-0.5 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  id="contact-linkedin-link"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-[#334155]/60 shadow-sm flex items-center justify-center text-slate-700 dark:text-[#c2c6d6] hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 hover:-translate-y-0.5 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  id="contact-twitter-link"
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-[#334155]/60 shadow-sm flex items-center justify-center text-slate-700 dark:text-[#c2c6d6] hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 hover:-translate-y-0.5 transition-all"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-[#334155]/60 shadow-xl relative overflow-hidden">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-['Outfit'] font-extrabold text-2xl text-slate-900 dark:text-white">
                    Transmission Dispatched
                  </h3>
                  <p className="text-slate-600 dark:text-[#c2c6d6] text-sm max-w-md mx-auto">
                    Thank you! Your message regarding <strong className="text-indigo-600 dark:text-indigo-400">{topic}</strong> has been received. Aasif will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-['Outfit'] font-bold text-xs hover:bg-indigo-700 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Topic Selectors */}
                  <div>
                    <label className="block text-xs font-['JetBrains_Mono'] font-bold text-slate-700 dark:text-[#dae2fd] mb-2">
                      Inquiry Category:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {topicOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setTopic(opt)}
                          className={`py-2 px-2.5 rounded-xl text-xs font-['JetBrains_Mono'] font-semibold border transition-all cursor-pointer text-center truncate ${
                            topic === opt
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                              : 'bg-slate-50 dark:bg-[#131b2e] border-slate-200 dark:border-[#334155]/60 text-slate-700 dark:text-[#c2c6d6] hover:border-slate-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-['JetBrains_Mono'] font-bold text-slate-700 dark:text-[#dae2fd] mb-1.5">
                        Your Full Name:
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#131b2e] border border-slate-300 dark:border-[#334155] text-slate-900 dark:text-white text-xs font-['JetBrains_Mono'] focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 font-['JetBrains_Mono'] mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-['JetBrains_Mono'] font-bold text-slate-700 dark:text-[#dae2fd] mb-1.5">
                        Email Address:
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#131b2e] border border-slate-300 dark:border-[#334155] text-slate-900 dark:text-white text-xs font-['JetBrains_Mono'] focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 font-['JetBrains_Mono'] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs font-['JetBrains_Mono'] font-bold text-slate-700 dark:text-[#dae2fd]">
                        Message Details:
                      </label>
                      <span className="text-[11px] font-['JetBrains_Mono'] text-slate-400">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss project requirements, timeline, or engineering topics..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#131b2e] border border-slate-300 dark:border-[#334155] text-slate-900 dark:text-white text-xs font-['JetBrains_Mono'] focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                    />
                    {errors.message && <p className="text-[11px] text-rose-500 font-['JetBrains_Mono'] mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-['Outfit'] font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Transmitting Payload...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Transmission to Aasif</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
