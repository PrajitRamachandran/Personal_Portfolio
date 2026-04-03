import { motion } from 'framer-motion'

/*
  Why these specific values:
  - NO y/x translation in variants — vertical movement during exit/enter
    changes the document height momentarily, which toggles the scrollbar.
    Opacity + filter (blur) are compositor-only properties: they animate
    entirely on the GPU and NEVER trigger layout or paint.
  - position: fixed on exit takes the leaving page out of document flow
    completely, so it has zero effect on scroll height while fading out.
*/
const variants = {
  initial: {
    opacity: 0,
    filter: 'blur(8px)',
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
  },
  exit: {
    opacity: 0,
    filter: 'blur(8px)',
    // Exit: remove from layout flow so it can't affect page height
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },
}

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="page-wrapper"
    >
      {children}
    </motion.div>
  )
}
