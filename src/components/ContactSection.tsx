import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Message must be at least 8 characters';
    }
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
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info matching fahimio */}
          <div className="lg:col-span-5 space-y-6">
            <span className="eyebrow">
              Get In Touch
            </span>

            <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-extrabold text-[var(--ink)] tracking-tight leading-tight">
              Let's Build Something Together
            </h2>

            <p className="text-base text-[var(--ink-soft)] leading-relaxed">
              Have a project idea, software internship role, AI research collaboration, or just want to connect? Feel free to reach out anytime.
            </p>

            {/* Contact list items matching fahimio */}
            <div className="space-y-3 pt-2">
              
              {/* Email */}
              <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--line)] shadow-[var(--shadow-sm)] flex items-center justify-between gap-3 group">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 overflow-hidden flex-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--tint-1)] border border-[var(--line)] flex items-center justify-center text-[var(--ink)] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-medium text-[var(--ink-faint)] uppercase block">
                      Email
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[var(--ink)] truncate block group-hover:underline">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg border border-[var(--line)] hover:bg-[var(--tint-1)] text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors cursor-pointer shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--line)] shadow-[var(--shadow-sm)] flex items-center gap-3.5 group transition-colors hover:border-[var(--ink-soft)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--tint-1)] border border-[var(--line)] flex items-center justify-center text-[var(--ink)] shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-[var(--ink-faint)] uppercase block">
                    LinkedIn
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[var(--ink)] group-hover:underline">
                    linkedin.com/in/aasif-ibrahim-135b9b371
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--line)] shadow-[var(--shadow-sm)] flex items-center gap-3.5 group transition-colors hover:border-[var(--ink-soft)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--tint-1)] border border-[var(--line)] flex items-center justify-center text-[var(--ink)] shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-[var(--ink-faint)] uppercase block">
                    GitHub
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[var(--ink)] group-hover:underline">
                    github.com/asifibrahim7680-web
                  </span>
                </div>
              </a>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--line)] shadow-[var(--shadow-sm)] flex items-center justify-between gap-3 group">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3.5 overflow-hidden flex-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--tint-1)] border border-[var(--line)] flex items-center justify-center text-[var(--ink)] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-medium text-[var(--ink-faint)] uppercase block">
                      Telephone
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[var(--ink)] truncate block group-hover:underline">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>
                <button
                  onClick={copyPhone}
                  className="p-2 rounded-lg border border-[var(--line)] hover:bg-[var(--tint-1)] text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors cursor-pointer shrink-0"
                  title="Copy telephone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--line)] shadow-[var(--shadow-sm)] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[var(--tint-1)] border border-[var(--line)] flex items-center justify-center text-[var(--ink)] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-[var(--ink-faint)] uppercase block">
                    Physical Base
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[var(--ink)]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form matching fahimio */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-[var(--surface)] border border-[var(--line)] shadow-[var(--shadow-md)]">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--ink)] mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg-alt)] text-[var(--ink)] text-sm focus:outline-hidden focus:border-[var(--ink)] focus:bg-[var(--surface)] transition-colors"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--ink)] mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg-alt)] text-[var(--ink)] text-sm focus:outline-hidden focus:border-[var(--ink)] focus:bg-[var(--surface)] transition-colors"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--ink)] mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship / AI Project Collaboration / General Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg-alt)] text-[var(--ink)] text-sm focus:outline-hidden focus:border-[var(--ink)] focus:bg-[var(--surface)] transition-colors"
                />
                {errors.subject && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.subject}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--ink)] mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me a bit about your project idea or opportunity..."
                  className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg-alt)] text-[var(--ink)] text-sm focus:outline-hidden focus:border-[var(--ink)] focus:bg-[var(--surface)] transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn primary w-full text-center"
              >
                {submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </button>

              {/* Status feedback message */}
              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium flex items-center gap-2.5 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
