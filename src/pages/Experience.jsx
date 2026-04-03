import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'

const experiences = [
  {
    type: 'work',
    icon: '🚀',
    role: 'AI / ML Intern',
    org: 'CodSoft',
    period: '2024',
    duration: 'Internship',
    color: '#00d4ff',
    points: [
      'Developed and deployed machine learning models for real-world use cases.',
      'Worked on NLP and computer vision pipelines using Python and Scikit-learn.',
      'Collaborated on building a recommendation system and face recognition module.',
      'Delivered clean, documented code and presented findings to the team.',
    ],
    tags: ['Python', 'ML', 'NLP', 'OpenCV'],
  },
]

const certifications = [
  {
    icon: '🎓',
    title: 'Programming, Data Structures & Algorithms using Python',
    issuer: 'NPTEL — IIT Madras',
    year: '2023',
    color: '#a855f7',
    desc: 'Rigorous 12-week course covering Python programming fundamentals, data structures, algorithmic thinking, and complexity analysis.',
    badge: 'NPTEL',
  },
  {
    icon: '☁️',
    title: 'Google Cloud Fundamentals',
    issuer: 'Google Cloud Skills Boost',
    year: '2024',
    color: '#f472b6',
    desc: 'Comprehensive certification covering cloud computing basics, GCP services, infrastructure, machine learning APIs, and deployment workflows.',
    badge: 'Google',
  },
]

function TimelineItem({ item, index }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative pl-12"
    >
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: `linear-gradient(180deg, ${item.color}, transparent)` }} />

      {/* Icon dot */}
      <div
        className="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-base"
        style={{ background: `${item.color}15`, border: `1px solid ${item.color}40`, boxShadow: `0 0 20px ${item.color}20` }}
      >
        {item.icon}
      </div>

      <div className="glass rounded-2xl p-7 ml-4" style={{ border: `1px solid ${item.color}15` }}>
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-1" style={{ color: `${item.color}70` }}>
              {item.duration}
            </p>
            <h3 className="font-display text-xl font-bold text-white">{item.role}</h3>
            <p className="font-body text-white/50 text-sm mt-0.5">@ {item.org}</p>
          </div>
          <span className="font-mono text-xs px-3 py-1 rounded-full"
            style={{ color: item.color, background: `${item.color}10`, border: `1px solid ${item.color}20` }}>
            {item.period}
          </span>
        </div>

        <ul className="space-y-2 mb-5">
          {item.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/50 font-body">
              <span style={{ color: item.color }} className="mt-0.5 shrink-0">▸</span>
              {pt}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full"
              style={{ color: item.color, background: `${item.color}08`, border: `1px solid ${item.color}15` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function CertCard({ cert, index }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ willChange: "transform" }} whileHover={{ y: -5, scale: 1.01 }}
      className="gpu-layer glass rounded-2xl p-7 relative overflow-hidden group"
      style={{ border: `1px solid ${cert.color}15` }}
    >
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-2xl"
        style={{ background: cert.color }}
      />

      <div className="flex items-start gap-4 mb-4">
        <div className="text-3xl">{cert.icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: `${cert.color}70` }}>
              {cert.badge} Certified
            </span>
            <span className="font-mono text-xs text-white/30">{cert.year}</span>
          </div>
          <h3 className="font-display font-bold text-white text-base leading-snug">{cert.title}</h3>
          <p className="font-body text-white/40 text-xs mt-1">{cert.issuer}</p>
        </div>
      </div>

      <p className="font-body text-white/45 text-sm leading-relaxed">{cert.desc}</p>

      <div className="mt-5 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
          style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}30`, color: cert.color }}>
          ✓
        </div>
        <span className="font-mono text-xs text-white/30">Verified Certificate</span>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <PageTransition>
      <div className="min-h-screen page-grid pt-32 pb-24 px-6">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="My Journey"
            title="Experience"
            subtitle="Work experience and certifications that shaped my skills."
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-xs tracking-[0.4em] uppercase text-white/25 mb-8"
              >
                Work Experience
              </motion.p>
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <TimelineItem key={exp.role} item={exp} index={i} />
                ))}
              </div>

              {/* Future placeholder */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative pl-12 mt-8"
              >
                <div className="absolute left-4 top-0 w-px h-8"
                  style={{ background: 'linear-gradient(180deg, rgba(0,212,255,0.3), transparent)' }} />
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full border border-dashed border-white/10 flex items-center justify-center">
                  <span className="text-white/20 text-xs">+</span>
                </div>
                <div className="ml-4 py-4">
                  <p className="font-mono text-xs text-white/20 tracking-widest">NEXT CHAPTER LOADING...</p>
                </div>
              </motion.div>
            </div>

            {/* Certifications */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-xs tracking-[0.4em] uppercase text-white/25 mb-8"
              >
                Certifications
              </motion.p>
              <div className="space-y-5">
                {certifications.map((cert, i) => (
                  <CertCard key={cert.title} cert={cert} index={i} />
                ))}
              </div>

              {/* Education card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="mt-5 glass rounded-2xl p-7"
                style={{ border: '1px solid rgba(34,211,238,0.12)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-neon-cyan/60">Education</p>
                    <h3 className="font-display font-bold text-white text-base">B.Tech — AI & Data Science</h3>
                  </div>
                </div>
                <p className="font-body text-white/40 text-sm leading-relaxed">
                  Currently pursuing undergraduate studies with a focus on machine learning, data engineering, and AI systems design.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
