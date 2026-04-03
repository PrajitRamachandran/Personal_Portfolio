import { motion } from 'framer-motion'
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

const PROFILE_ACTIONS = [
  {
    label: 'GitHub',
    href: 'https://github.com/PrajitRamachandran',
    icon: FaGithub,
    accent: '#00d4ff',
    border: 'rgba(0, 212, 255, 0.32)',
    surface: 'rgba(0, 212, 255, 0.12)',
    glow: 'rgba(0, 212, 255, 0.18)',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prajit-ramachandran/',
    icon: FaLinkedin,
    accent: '#a855f7',
    border: 'rgba(168, 85, 247, 0.32)',
    surface: 'rgba(168, 85, 247, 0.12)',
    glow: 'rgba(168, 85, 247, 0.18)',
    external: true,
  },
  {
    label: 'Resume',
    href: '/Prajit_Ramachandran_Resume.pdf',
    icon: FaFileAlt,
    accent: '#f472b6',
    border: 'rgba(244, 114, 182, 0.32)',
    surface: 'rgba(244, 114, 182, 0.12)',
    glow: 'rgba(244, 114, 182, 0.18)',
    download: 'Prajit_Ramachandran_Resume.pdf',
  },
]

export default function ProfileActionButtons({
  className = '',
  actions = PROFILE_ACTIONS,
}) {
  return (
    <div className={`flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      {actions.map((action, index) => {
        const Icon = action.icon

        return (
          <motion.a
            key={action.label}
            href={action.href}
            download={action.download}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15 + index * 0.08,
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -4,
              scale: 1.02,
              boxShadow: `0 18px 36px ${action.glow}, 0 0 24px ${action.glow}`,
            }}
            whileTap={{ scale: 0.985 }}
            className="group glass-strong relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-5 py-3 text-left transition-all duration-300 sm:w-auto"
            style={{
              border: `1px solid ${action.border}`,
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
            }}
          >
            <span
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, ${action.glow}, rgba(255,255,255,0) 70%)`,
              }}
            />

            <span
              className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110"
              style={{
                background: action.surface,
                borderColor: action.border,
                color: action.accent,
              }}
            >
              <Icon className="text-lg" />
            </span>

            <span className="relative z-10 font-display text-sm font-semibold tracking-[0.12em] text-white/85 uppercase transition-colors duration-300 group-hover:text-white">
              {action.label}
            </span>
          </motion.a>
        )
      })}
    </div>
  )
}
