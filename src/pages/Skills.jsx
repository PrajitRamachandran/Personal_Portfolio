import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  {
    category: 'Programming Languages',
    icon: '⌨️',
    color: '#00d4ff',
    skills: [
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'Java', level: 70, icon: '☕' },
      { name: 'SQL', level: 75, icon: '🗄️' },
      { name: 'HTML', level: 85, icon: '🌐' },
      { name: 'CSS', level: 80, icon: '🎨' },
    ],
  },
  {
    category: 'AI / Machine Learning',
    icon: '🧠',
    color: '#a855f7',
    skills: [
      { name: 'Scikit-learn', level: 85, icon: '🔬' },
      { name: 'TensorFlow', level: 75, icon: '⚡' },
      { name: 'OpenCV', level: 80, icon: '👁️' },
      { name: 'NumPy / Pandas', level: 88, icon: '📊' },
      { name: 'NLP / NLTK', level: 72, icon: '💬' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    color: '#f472b6',
    skills: [
      { name: 'Power BI', level: 70, icon: '📈' },
      { name: 'Git / GitHub', level: 82, icon: '🔀' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'Google Cloud', level: 65, icon: '☁️' },
      { name: 'Flask', level: 68, icon: '🌶️' },
    ],
  },
]

function SkillBar({ name, level, color, icon, index }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="font-body text-sm text-white/70 group-hover:text-white transition-colors">{name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.4 }}
          className="font-mono text-xs"
          style={{ color: `${color}80` }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: `${color}12` }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full origin-left"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: `0 0 10px ${color}40`,
          }}
        />
      </div>
    </motion.div>
  )
}

function SkillGroup({ group, index }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="glass rounded-2xl p-8"
      style={{ border: `1px solid ${group.color}15` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
          style={{ background: `${group.color}12`, border: `1px solid ${group.color}25` }}
        >
          {group.icon}
        </div>
        <div>
          <p className="font-display font-bold text-white text-base">{group.category}</p>
          <p className="font-mono text-[10px] tracking-widest uppercase mt-0.5" style={{ color: `${group.color}60` }}>
            {group.skills.length} skills
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {group.skills.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} color={group.color} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

const techPills = [
  'Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'NumPy', 'Pandas',
  'SQL', 'Java', 'HTML', 'CSS', 'Flask', 'Git', 'Power BI', 'Google Cloud', 'NLTK'
]

export default function Skills() {
  const { ref, isInView } = useScrollReveal()

  return (
    <PageTransition>
      <div className="min-h-screen page-grid pt-32 pb-24 px-6">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 30%, rgba(168,85,247,0.05) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="My Arsenal"
            title="Skills & Tech"
            subtitle="Technologies I use to bring ideas to life."
          />

          {/* Tech pills orbit */}
          <div ref={ref} className="flex flex-wrap justify-center gap-2.5 mb-16 max-w-3xl mx-auto">
            {techPills.map((pill, i) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.04, duration: 0.4, type: 'spring' }}
                style={{ willChange: "transform" }} whileHover={{ scale: 1.1, y: -2 }}
                className="gpu-layer font-mono text-xs px-4 py-2 rounded-full glass cursor-default"
                style={{ border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}
              >
                {pill}
              </motion.span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, i) => (
              <SkillGroup key={group.category} group={group} index={i} />
            ))}
          </div>

          {/* Currently learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 glass rounded-2xl p-8"
            style={{ border: '1px solid rgba(0,212,255,0.1)', background: 'linear-gradient(135deg, rgba(0,212,255,0.03), rgba(168,85,247,0.03))' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" style={{ boxShadow: '0 0 6px #00d4ff' }} />
              </div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-neon-blue/60">Currently Leveling Up</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['PyTorch', 'Transformers / HuggingFace', 'LangChain', 'LLM Fine-tuning', 'Docker', 'FastAPI'].map((item) => (
                <span key={item} className="font-body text-sm text-white/60 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.15)' }}>
                  {item} ✦
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
