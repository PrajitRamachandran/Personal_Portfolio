import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'

function RevealBlock({ children, delay = 0 }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const traits = [
  { icon: '🧠', label: 'Deep Learner', desc: 'Constantly exploring neural architectures and training dynamics.' },
  { icon: '🔬', label: 'Researcher', desc: 'Methodical approach to problem solving through experimentation.' },
  { icon: '🚀', label: 'Builder', desc: 'Turning ideas into functional AI-powered applications.' },
  { icon: '🌐', label: 'AGI Focused', desc: 'Long-term goal: contributing to safe, general AI.' },
]

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen page-grid pt-32 pb-24 px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 40%, rgba(168,85,247,0.05) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Who I Am"
            title="About Me"
            subtitle="A mind fascinated by the unknown frontiers of artificial intelligence."
          />

          {/* Photo + intro banner */}
          <RevealBlock delay={0}>
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-8 mb-14">
              {/* Photo */}
              <div className="relative shrink-0">
                <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #00d4ff)' }} />
                <div className="relative rounded-2xl p-[2px]"
                  style={{ background: 'linear-gradient(135deg, #a855f7 0%, #00d4ff 100%)' }}>
                  <div className="rounded-2xl overflow-hidden" style={{ background: '#050508' }}>
                    <img
                      src="/prajit-about.jpg"
                      alt="Prajit Ramachandran"
                      className="w-44 h-60 sm:w-52 sm:h-72 object-cover object-center"
                      style={{ filter: 'contrast(1.08) brightness(0.95) saturate(0.9)' }}
                    />
                  </div>
                </div>
              </div>
              {/* Quick bio */}
              <div className="flex-1">
                <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-neon-purple/50 mb-3">About Me</p>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
                  Prajit<br />Ramachandran
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  AI & Data Science student from India, building intelligent systems and chasing the frontier of machine learning. Currently open to opportunities.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['AI', 'Python', 'Machine Learning', 'Data Science','Data Analysis'].map(tag => (
                    <span key={tag} className="font-mono text-[10px] px-3 py-1 rounded-full tracking-widest uppercase"
                      style={{ color: '#a855f7', background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealBlock>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: text */}
            <div className="space-y-8">
              <RevealBlock delay={0}>
                <div className="glass rounded-2xl p-8 glow-border">
                  <p className="font-mono text-xs tracking-[0.3em] text-neon-blue/60 uppercase mb-4">Introduction</p>
                  <p className="font-body text-white/70 leading-relaxed text-base">
                    I'm <span className="text-white font-medium">Prajit Ramachandran</span>, a Bachelor's student in Artificial Intelligence and Data Science at Dhaanish Ahmed College of Engineering. With a strong foundation in Python and machine learning, I’m focused on building systems that turn data into meaningful, real-world impact.
                  </p>
                </div>
              </RevealBlock>

              <RevealBlock delay={0.1}>
                <div className="glass rounded-2xl p-8 glow-border-purple">
                  <p className="font-mono text-xs tracking-[0.3em] text-neon-purple/60 uppercase mb-4">My Passion</p>
                  <p className="font-body text-white/70 leading-relaxed text-base">
  From my first print statement to building a local <span className="text-neon-purple">LLM-based AI agent</span>, I’ve been hooked on understanding how intelligent systems work.
  <br /><br />
  I’m genuinely passionate about <span className="text-neon-purple">AI, STEM, and emerging technologies</span>—but more importantly, I like building. I’m always learning, experimenting, and pushing myself to turn ideas into something real, whether it’s a model, a project, or a new skill.
</p>
                </div>
              </RevealBlock>

              <RevealBlock delay={0.2}>
                <div className="glass rounded-2xl p-8" style={{ border: '1px solid rgba(244,114,182,0.2)' }}>
                  <p className="font-mono text-xs tracking-[0.3em] text-neon-pink/60 uppercase mb-4">Career Vision</p>
                  <p className="font-body text-white/70 leading-relaxed text-base">
  I’m aiming to build a career in AI that gives me both 
  <span className="text-neon-pink"> depth and flexibility</span> — 
  working on <span className="text-neon-pink"> meaningful problems</span> while continuously expanding across domains. 
  I value <span className="text-neon-pink"> remote work</span> and a 
  <span className="text-neon-pink"> balanced lifestyle</span>, where I can stay productive without burning out. 
  Long-term, I want to grow into someone who can 
  <span className="text-neon-pink"> think broadly</span>, 
  <span className="text-neon-pink"> adapt quickly</span>, and contribute across 
  <span className="text-neon-pink"> different areas of technology</span>.
</p>
                </div>
              </RevealBlock>
            </div>

            {/* Right: traits + timeline */}
            <div className="space-y-6">
              <RevealBlock delay={0.15}>
                <p className="font-mono text-xs tracking-[0.3em] text-white/80 uppercase mb-6">Core Traits</p>
                <div className="grid grid-cols-2 gap-4">
                  {traits.map(({ icon, label, desc }, i) => (
                    <motion.div
                      key={label}
                      style={{ willChange: "transform" }} whileHover={{ scale: 1.03, y: -3 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="gpu-layer glass-strong rounded-xl p-5"
                    >
                      <span className="text-2xl mb-3 block">{icon}</span>
                      <p className="font-display font-semibold text-white text-sm mb-1">{label}</p>
                      <p className="font-body text-white/40 text-xs leading-relaxed">{desc}</p>
                    </motion.div>
                  ))}
                </div>
              </RevealBlock>

              <RevealBlock delay={0.25}>
                <div className="glass rounded-2xl p-8 mt-6">
                  <p className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase mb-6">Quick Facts</p>
                  <div className="space-y-4">
                    {[
                      { label: 'Location', value: 'Chennai, India (IST) — Open to remote roles' },
                      { label: 'Focus', value: 'Applied AI & Data — ML + real-world systems' },
                      { label: 'Status', value: 'Open to opportunities' },
                      { label: 'Interest', value: 'AI, Data-driven Systems, Intelligent Applications' },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between py-3 border-b border-white/[0.04] last:border-0">
                        <span className="font-mono text-xs text-white/30 uppercase tracking-widest">{label}</span>
                        <span className="font-body text-white/70 text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
