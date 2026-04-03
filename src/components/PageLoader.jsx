import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-void flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{ borderTopColor: '#00d4ff', borderRightColor: 'rgba(0,212,255,0.2)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-transparent"
            style={{ borderTopColor: '#a855f7', borderLeftColor: 'rgba(168,85,247,0.2)' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-neon-blue" style={{ boxShadow: '0 0 10px #00d4ff' }} />
          </div>
        </div>
        <p className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">Loading</p>
      </motion.div>
    </div>
  )
}
