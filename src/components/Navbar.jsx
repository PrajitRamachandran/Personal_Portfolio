import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'glass rounded-2xl shadow-lg shadow-black/50'
              : ''
          }`}
          style={scrolled ? { margin: '0 24px' } : {}}
        >
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 rounded-lg border border-neon-blue/30 group-hover:border-neon-blue/60 transition-colors" />
              <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-lg gradient-text">P</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-bold text-white text-sm leading-none">Prajit</p>
              <p className="font-mono text-[10px] text-neon-blue/70 tracking-widest uppercase">AI & Data Science</p>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative px-4 py-2 font-display text-sm font-medium tracking-wide transition-all duration-300 rounded-lg group ${
                    isActive ? 'text-white' : 'text-white/40 hover:text-white/80'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(168,85,247,0.12))',
                          border: '1px solid rgba(0,212,255,0.25)',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-blue" style={{ boxShadow: '0 0 6px #00d4ff' }} />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA + mobile menu */}
          <div className="flex items-center gap-3">
            <NavLink to="/contact" className="hidden md:block btn-primary text-xs py-2 px-5">
              Hire Me
            </NavLink>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                className="block w-6 h-[1.5px] bg-white origin-center transition-all"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                className="block w-6 h-[1.5px] bg-white"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                className="block w-6 h-[1.5px] bg-white origin-center transition-all"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6"
            style={{ background: 'rgba(5,5,8,0.97)', backdropFilter: 'blur(30px)' }}
          >
            {links.map(({ path, label }, i) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `font-display text-3xl font-bold tracking-tight transition-all ${
                      isActive ? 'gradient-text' : 'text-white/50 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
