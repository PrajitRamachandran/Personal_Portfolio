import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    id: 1,
    title: 'Movie Recommendation System',
    emoji: '🎬',
    desc: 'Content-based and collaborative filtering recommendation engine using NLP and cosine similarity to suggest movies based on user preferences and viewing history.',
    long: 'Built a hybrid recommendation system combining content-based filtering using TF-IDF vectorization and cosine similarity with collaborative filtering via matrix factorization. Trained on a 100K+ movie dataset, achieving high precision recommendations.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NLP', 'Flask'],
    color: '#00d4ff',
    github: '#',
    demo: '#',
    category: 'ML / NLP',
  },
  {
    id: 2,
    title: 'Face Recognition System',
    emoji: '👤',
    desc: 'Real-time face detection and recognition pipeline using OpenCV and deep learning, capable of identifying individuals from live camera feed with high accuracy.',
    long: 'Engineered a real-time face recognition pipeline leveraging OpenCV for detection and a custom CNN for feature extraction. Supports enrollment, recognition, and attendance logging with 95%+ accuracy under varied lighting conditions.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'CNN', 'NumPy'],
    color: '#a855f7',
    github: '#',
    demo: '#',
    category: 'Computer Vision',
  },
  {
    id: 3,
    title: 'AI Tic Tac Toe',
    emoji: '🎮',
    desc: 'Unbeatable Tic Tac Toe AI using the Minimax algorithm with Alpha-Beta pruning, featuring an interactive UI and multiple difficulty levels.',
    long: 'Implemented a perfect-play AI for Tic Tac Toe using the Minimax algorithm with Alpha-Beta pruning for efficiency. The AI is provably optimal and never loses. Includes adjustable difficulty by controlling search depth.',
    tech: ['Python', 'Minimax', 'Alpha-Beta Pruning', 'Tkinter'],
    color: '#f472b6',
    github: '#',
    demo: '#',
    category: 'AI / Algorithms',
  },
  {
    id: 4,
    title: 'Rule-Based Chatbot',
    emoji: '🤖',
    desc: 'Intelligent conversational agent built on rule-based NLP patterns, capable of handling domain-specific queries with context-aware responses.',
    long: 'Designed a domain-specific chatbot using pattern matching, intent classification, and state machine for context handling. Supports multi-turn conversations, fallback handling, and extensible rule sets.',
    tech: ['Python', 'NLTK', 'Regex', 'JSON', 'Flask'],
    color: '#22d3ee',
    github: '#',
    demo: '#',
    category: 'NLP / Chatbot',
  },
  {
    id: 5,
    title: 'Web UI Clones',
    emoji: '🖥️',
    desc: 'Pixel-perfect recreation of popular web interfaces including Netflix, Spotify, and Amazon — demonstrating mastery of modern frontend development.',
    long: 'Developed faithful UI clones of major platforms to deepen frontend skills. Each clone implements responsive layouts, interactive components, animations, and adheres to the original design system.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    color: '#34d399',
    github: '#',
    demo: '#',
    category: 'Frontend / UI',
  },
]

function ProjectCard({ project, index, onClick }) {
  const { ref, isInView } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform" }} whileHover={{ y: -8, scale: 1.01 }}
      onClick={() => onClick(project)}
      className="gpu-layer group cursor-pointer glass rounded-2xl p-7 relative overflow-hidden transition-all duration-300"
      style={{
        border: `1px solid ${project.color}20`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 60px ${project.color}08, 0 0 30px ${project.color}10` }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />

      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: `${project.color}12`, border: `1px solid ${project.color}25` }}
          >
            {project.emoji}
          </div>
          <div>
            <p
              className="font-mono text-[10px] tracking-[0.3em] uppercase mb-1"
              style={{ color: `${project.color}80` }}
            >
              {project.category}
            </p>
            <h3 className="font-display font-bold text-white text-lg leading-tight group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
        </div>
        <motion.div
          whileHover={{ rotate: 45 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/30 text-xl"
        >
          ↗
        </motion.div>
      </div>

      <p className="font-body text-white/45 text-sm leading-relaxed mb-6 line-clamp-2">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full"
            style={{
              color: project.color,
              background: `${project.color}10`,
              border: `1px solid ${project.color}20`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        style={{ background: 'rgba(5,5,8,0.9)', backdropFilter: 'blur(20px)' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-strong rounded-3xl p-8 max-w-lg w-full relative"
          style={{ border: `1px solid ${project.color}30` }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full glass flex items-center justify-center text-white/40 hover:text-white transition-colors text-sm"
          >
            ✕
          </button>

          <div className="text-4xl mb-4">{project.emoji}</div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: `${project.color}80` }}>
            {project.category}
          </p>
          <h3 className="font-display text-2xl font-bold text-white mb-4">{project.title}</h3>
          <p className="font-body text-white/60 text-sm leading-relaxed mb-6">{project.long}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-[10px] tracking-wide uppercase px-3 py-1.5 rounded-full"
                style={{ color: project.color, background: `${project.color}10`, border: `1px solid ${project.color}25` }}>
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a href={project.github}
              className="flex-1 text-center py-2.5 rounded-xl font-display font-semibold text-xs tracking-widest uppercase transition-all duration-300"
              style={{ background: `${project.color}10`, border: `1px solid ${project.color}30`, color: project.color }}>
              GitHub →
            </a>
            <a href={project.demo}
              className="flex-1 text-center py-2.5 rounded-xl font-display font-semibold text-xs tracking-widest uppercase text-void transition-all duration-300"
              style={{ background: project.color }}>
              Live Demo →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <PageTransition>
      <div className="min-h-screen page-grid pt-32 pb-24 px-6">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 70% 30%, rgba(0,212,255,0.04) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="What I've Built"
            title="Projects"
            subtitle="A collection of AI-driven and software engineering projects."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onClick={setSelected} />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>
      </div>
    </PageTransition>
  )
}
