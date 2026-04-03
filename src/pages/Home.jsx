import { useRef, Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const HeroCanvas = lazy(() => import('../components/HeroCanvas'))

const floatVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
}

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '2+', label: 'Certifications' },
  { value: '1', label: 'AI/ML Internship' },
  { value: '∞', label: 'Curiosity' },
]

export default function Home() {
  const mouseRef = useRef({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = -(e.clientY / window.innerHeight - 0.5) * 2
    mouseRef.current = { x, y }
  }

  return (
    <PageTransition>
      <div
        className="relative min-h-screen overflow-hidden page-grid"
        onMouseMove={handleMouseMove}
      >
        {/* Radial glow background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 60% 50%, rgba(0,212,255,0.06) 0%, transparent 70%),
              radial-gradient(ellipse 60% 80% at 40% 60%, rgba(168,85,247,0.05) 0%, transparent 70%)
            `
          }}
        />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 pt-28 pb-16 gap-8 lg:gap-0">

          {/* Left: text */}
          <div className="flex-1 flex flex-col items-start max-w-2xl">
            <motion.div
              custom={0} variants={floatVariants} initial="initial" animate="animate"
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse-slow" style={{ boxShadow: '0 0 8px #00d4ff' }} />
                <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse-slow" style={{ animationDelay: '0.3s', boxShadow: '0 0 8px #a855f7' }} />
                <span className="w-2 h-2 rounded-full bg-neon-pink animate-pulse-slow" style={{ animationDelay: '0.6s', boxShadow: '0 0 8px #f472b6' }} />
              </div>
              <span className="font-mono text-xs text-white/30 tracking-[0.3em] uppercase">Available for opportunities</span>
            </motion.div>

            <motion.p
              custom={1} variants={floatVariants} initial="initial" animate="animate"
              className="font-mono text-xs tracking-[0.4em] text-neon-blue/60 uppercase mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              custom={2} variants={floatVariants} initial="initial" animate="animate"
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-4"
            >
              <span className="text-white">Prajit</span><br />
              <span className="gradient-text">Ramachandran</span>
            </motion.h1>

            <motion.div
              custom={3} variants={floatVariants} initial="initial" animate="animate"
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #00d4ff, transparent)' }} />
              <p className="font-display text-lg text-white/60 font-medium tracking-wide">
                AI & Data Science Student
              </p>
            </motion.div>

            <motion.p
              custom={4} variants={floatVariants} initial="initial" animate="animate"
              className="text-white/40 font-body text-base leading-relaxed max-w-md mb-10"
            >
              Building intelligent systems at the intersection of machine learning,
              computer vision, and human creativity. Passionate about pushing
              the boundaries of what AI can achieve.
            </motion.p>

            <motion.div
              custom={5} variants={floatVariants} initial="initial" animate="animate"
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={6} variants={floatVariants} initial="initial" animate="animate"
              className="mt-14 grid grid-cols-4 gap-6 w-full max-w-lg"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display text-2xl font-bold gradient-text">{value}</p>
                  <p className="font-mono text-[10px] text-white/25 tracking-widest uppercase mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo + 3D canvas layered */}
          {/* Right: Photo + 3D canvas layered */}
<motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
  className="flex-1 relative flex items-center justify-center h-[420px] lg:h-[600px] w-full"
>
  {/* 3D canvas behind */}
  <div className="absolute inset-0 z-0">
    <Suspense fallback={null}>
      <HeroCanvas mouse={mouseRef} />
    </Suspense>
  </div>

  {/* PERFECT CENTER WRAPPER */}
  <div className="absolute inset-0 flex items-center justify-center z-10">
    
    {/* Floating animation ONLY affects inner content */}
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="flex flex-col items-center"
    >
      
      {/* Outer glow ring */}
      <div
        className="relative rounded-full p-[3px]"
        style={{
          background: 'linear-gradient(135deg, #00d4ff, #a855f7, #f472b6)',
          boxShadow:
            '0 0 60px rgba(0,212,255,0.35), 0 0 120px rgba(168,85,247,0.2)',
        }}
      >
        {/* Inner border */}
        <div
          className="rounded-full p-[3px]"
          style={{ background: '#050508' }}
        >
          <img
            src="/prajit-home.png"
            alt="Prajit Ramachandran"
            className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover object-top"
            style={{ filter: 'contrast(1.05) brightness(1.02)' }}
          />
        </div>
      </div>

    </motion.div>
  </div>
</motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-neon-blue/40 to-transparent"
          />
        </motion.div>
      </div>
    </PageTransition>
  )
}
