import { useState } from 'react'
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

const socials = [
  {
    label: 'Email',
    value: 'ramachandranprajit@gmail.com',
    icon: '@',
    href: 'mailto:ramachandranprajit@gmail.com',
    color: '#00d4ff',
    desc: 'Best for formal inquiries',
  },
  {
    label: 'GitHub',
    value: 'github.com/PrajitRamachandran',
    icon: '⌥',
    href: 'https://github.com/PrajitRamachandran',
    color: '#a855f7',
    desc: 'Check out my code',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/prajit-ramachandran',
    icon: 'in',
    href: 'https://www.linkedin.com/in/prajit-ramachandran',
    color: '#f472b6',
    desc: "Let's connect professionally",
  },
  {
    label: 'Resume',
    value: 'Download Resume',
    icon: '↓',
    href: '/Prajit_Ramachandran_Resume.pdf',
    download: 'Prajit_Ramachandran_Resume.pdf',
    color: '#22d3ee',
    desc: 'Get a PDF copy of my resume',
  },
]

function ContactCard({ item, index }) {
  return (
    <motion.a
      href={item.href}
      download={item.download}
      target={item.download ? undefined : "_blank"}
      rel={item.download ? undefined : "noopener noreferrer"}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group glass rounded-2xl p-7 flex items-start gap-5 transition-all duration-300"
      style={{ willChange: "transform", border: `1px solid ${item.color}15` }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${item.color}12`, border: `1px solid ${item.color}25`, color: item.color }}
      >
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-1" style={{ color: `${item.color}70` }}>
          {item.label}
        </p>
        <p className="font-body text-white/80 text-sm font-medium truncate group-hover:text-white transition-colors">
          {item.value}
        </p>
        <p className="font-body text-white/30 text-xs mt-1">{item.desc}</p>
      </div>
      <div className="text-white/20 group-hover:text-white/60 transition-colors self-center">&rarr;</div>
    </motion.a>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim() || form.message.length < 20) e.message = 'Message must be at least 20 characters'
    return e
  }

const handleSubmit = (e) => {
  e.preventDefault();

  const errs = validate();
  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }

  setErrors({});
  setLoading(true);

  emailjs.send(
    "service_48f10al",
    "template_igplz3q",
    {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    },
    "g4SskuSe922hssibd"
  )
  .then(() => {
    setLoading(false);
    setSent(true);
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    setLoading(false);
    alert("Failed to send message. Check console.");
  });
};

  const handleChange = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors(err => ({ ...err, [field]: '' }))
  }

  const inputClass = (field) =>
    `w-full bg-white/[0.03] border rounded-xl px-4 py-3 font-body text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-300 focus:bg-white/[0.05] ${
      errors[field]
        ? 'border-red-500/50 focus:border-red-500/80'
        : 'border-white/[0.07] focus:border-neon-blue/40'
    }`

  return (
    <PageTransition>
      <div className="min-h-screen page-grid pt-32 pb-24 px-6">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(168,85,247,0.05) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Get In Touch"
            title="Contact"
            subtitle="Open for collaborations, internships, and interesting conversations about AI."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: socials + info */}
            <div className="space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-xs tracking-[0.3em] uppercase text-white/25 mb-8"
              >
                Find Me On
              </motion.p>

              {socials.map((item, i) => (
                <ContactCard key={item.label} item={item} index={i} />
              ))}

              {/* Availability banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass rounded-2xl p-6 mt-6"
                style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.04), rgba(168,85,247,0.04))', border: '1px solid rgba(0,212,255,0.1)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 8px #4ade80' }} />
                  <span className="font-mono text-xs tracking-widest uppercase text-green-400/80">Available Now</span>
                </div>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  I'm actively seeking AI/ML internships, research collaborations, and project opportunities.
                  Response time: within 24 hours.
                </p>
              </motion.div>
            </div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-strong rounded-2xl p-8"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-3xl"
                      style={{ background: 'rgba(0,212,255,0.12)', border: '1px solid rgba(0,212,255,0.3)' }}
                    >
                      &#10003;
                    </motion.div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="font-body text-white/40 text-sm">I'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                      className="mt-6 font-mono text-xs tracking-widest uppercase text-neon-blue/60 hover:text-neon-blue transition-colors"
                    >
                      Send Another &rarr;
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Name</label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={form.name}
                          onChange={handleChange('name')}
                          className={inputClass('name')}
                        />
                        {errors.name && <p className="font-mono text-[10px] text-red-400 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Email</label>
                        <input
                          type="email"
                          placeholder="you@email.com"
                          value={form.email}
                          onChange={handleChange('email')}
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="font-mono text-[10px] text-red-400 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Subject</label>
                      <input
                        type="text"
                        placeholder="What's this about?"
                        value={form.subject}
                        onChange={handleChange('subject')}
                        className={inputClass('subject')}
                      />
                      {errors.subject && <p className="font-mono text-[10px] text-red-400 mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Tell me about your project, opportunity, or just say hello..."
                        value={form.message}
                        onChange={handleChange('message')}
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && <p className="font-mono text-[10px] text-red-400 mt-1">{errors.message}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl font-display font-semibold text-sm tracking-widest uppercase relative overflow-hidden transition-all duration-300 disabled:opacity-60"
                      style={{
                        willChange: "transform",
                        background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))',
                        border: '1px solid rgba(0,212,255,0.35)',
                        color: '#00d4ff',
                      }}
                    >
                      {loading ? (
                        <motion.div className="flex items-center justify-center gap-2">
                          <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="inline-block w-4 h-4 border-2 border-neon-blue/30 border-t-neon-blue rounded-full" />
                          Sending...
                        </motion.div>
                      ) : 'Send Message ->'}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
