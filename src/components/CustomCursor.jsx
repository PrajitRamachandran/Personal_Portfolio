import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) {
      return undefined
    }

    const getInteractiveTarget = (target) =>
      target instanceof Element ? target.closest('a, button') : null

    const resetCursor = () => {
      cursor.style.width = '12px'
      cursor.style.height = '12px'
      cursor.style.background = '#00d4ff'
    }

    const moveCursor = (event) => {
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
    }

    const handlePointerOver = (event) => {
      if (!getInteractiveTarget(event.target)) {
        return
      }

      cursor.style.width = '20px'
      cursor.style.height = '20px'
      cursor.style.background = '#a855f7'
    }

    const handlePointerOut = (event) => {
      if (!getInteractiveTarget(event.target)) {
        return
      }

      if (getInteractiveTarget(event.relatedTarget)) {
        return
      }

      resetCursor()
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handlePointerOver)
    document.addEventListener('mouseout', handlePointerOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handlePointerOver)
      document.removeEventListener('mouseout', handlePointerOut)
    }
  }, [])

  return <div ref={cursorRef} className="cursor hidden md:block" />
}
