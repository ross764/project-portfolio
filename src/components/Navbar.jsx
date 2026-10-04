import { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function getInitialSection() {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.slice(1)
    if (navItems.some((item) => item.id === hash)) {
      return hash
    }
  }

  return 'home'
}

function MenuIcon({ isOpen }) {
  return (
    <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
      {isOpen ? (
        <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      )}
    </svg>
  )
}

function Navbar() {
  const [activeSection, setActiveSection] = useState(getInitialSection)
  const [isScrolled, setIsScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 12)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const navbarRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const visibleSections = new Map()
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (!sections.length || !('IntersectionObserver' in window)) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry)
          } else {
            visibleSections.delete(entry.target.id)
          }
        })

        const closestSection = [...visibleSections.values()].sort(
          (first, second) => Math.abs(first.boundingClientRect.top - 110) - Math.abs(second.boundingClientRect.top - 110),
        )[0]

        if (closestSection) {
          setActiveSection(closestSection.target.id)
        }
      },
      { rootMargin: '-84px 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const handlePointerDown = (event) => {
      if (!navbarRef.current?.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobileMenuOpen])

  const handleNavigation = (event, id) => {
    event.preventDefault()
    const target = document.getElementById(id)

    if (target) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#${id}`)
      setActiveSection(id)
    }

    setIsMobileMenuOpen(false)
  }

  return (
    <header ref={navbarRef} className="site-navbar" data-scrolled={isScrolled}>
      <div className="site-navbar-inner content-container-wide">
        <a aria-label="Ross Irvine T. Altamia home" className="brand-link" href="#home" onClick={(event) => handleNavigation(event, 'home')}>
          <span aria-hidden="true" className="brand-mark">&lt;RA/&gt;</span>
          <span className="brand-name">Ross Altamia</span>
        </a>

        <nav aria-label="Primary navigation" className="desktop-navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              aria-current={activeSection === item.id ? 'location' : undefined}
              className="nav-link"
              data-active={activeSection === item.id}
              href={`#${item.id}`}
              onClick={(event) => handleNavigation(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="mobile-menu-button"
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
        className="mobile-navigation"
        data-open={isMobileMenuOpen}
        inert={!isMobileMenuOpen}
      >
        <div className="content-container-wide mobile-navigation-inner">
          <p className="font-technical mobile-navigation-label">Navigation / 01</p>
          <nav aria-label="Mobile primary navigation" className="mobile-navigation-links">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                aria-current={activeSection === item.id ? 'location' : undefined}
                className="mobile-nav-link"
                data-active={activeSection === item.id}
                href={`#${item.id}`}
                onClick={(event) => handleNavigation(event, item.id)}
              >
                <span className="font-technical mobile-nav-index">0{index + 1}</span>
                <span>{item.label}</span>
                <span aria-hidden="true" className="mobile-nav-marker">{activeSection === item.id ? '●' : '↗'}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
