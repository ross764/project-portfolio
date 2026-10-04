import { useEffect, useRef } from 'react'

function Reveal({ as = 'div', children, className = '', delay = 0 }) {
  const revealRef = useRef(null)
  const Element = as

  useEffect(() => {
    const element = revealRef.current
    if (!element) return undefined

    element.dataset.revealReady = 'true'
    let observer = null

    const reveal = () => {
      element.dataset.revealVisible = 'true'
      observer?.unobserve(element)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      reveal()
      return undefined
    }

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) reveal()
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Element ref={revealRef} className={`reveal${className ? ` ${className}` : ''}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </Element>
  )
}

export default Reveal
