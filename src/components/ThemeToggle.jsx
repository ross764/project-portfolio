import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../hooks/useTheme'

const themeOptions = [
  { value: 'system', label: 'System', description: 'Follow device preference' },
  { value: 'light', label: 'Light', description: 'Use the light workspace' },
  { value: 'dark', label: 'Dark', description: 'Use the dark workspace' },
]

function ThemeIcon({ theme }) {
  if (theme === 'light') {
    return (
      <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 2.75v2M12 19.25v2M21.25 12h-2M4.75 12h-2M18.54 5.46l-1.42 1.42M6.88 17.12l-1.42 1.42M18.54 18.54l-1.42-1.42M6.88 6.88 5.46 5.46" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    )
  }

  if (theme === 'dark') {
    return (
      <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
        <path d="M19.2 14.35A7.6 7.6 0 0 1 9.65 4.8a7.62 7.62 0 1 0 9.55 9.55Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
      <rect height="13" rx="1.8" stroke="currentColor" strokeWidth="1.7" width="17" x="3.5" y="4" />
      <path d="M8 20h8M12 17v3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  )
}

function ThemeToggle() {
  const { preference, resolvedTheme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target) && !triggerRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleThemeSelect = (theme) => {
    setTheme(theme)
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  const resolvedLabel = resolvedTheme === 'dark' ? 'Dark' : 'Light'

  return (
    <div className="theme-toggle-wrap">
      <button
        ref={triggerRef}
        aria-controls="theme-menu"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`Theme: ${preference}. Change theme`}
        className="theme-toggle"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
      >
        <ThemeIcon theme={preference} />
        <span className="hidden sm:inline">{resolvedLabel}</span>
        <svg aria-hidden="true" className="theme-toggle-chevron" fill="none" height="14" viewBox="0 0 24 24" width="14">
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </svg>
      </button>

      <div
        ref={menuRef}
        id="theme-menu"
        aria-label="Theme preference"
        className="theme-menu"
        data-open={isOpen}
        role="menu"
      >
        <p className="font-technical theme-menu-label">Appearance</p>
        {themeOptions.map((option) => (
          <button
            key={option.value}
            aria-checked={preference === option.value}
            className="theme-option"
            data-selected={preference === option.value}
            role="menuitemradio"
            type="button"
            onClick={() => handleThemeSelect(option.value)}
          >
            <span className="theme-option-icon">
              <ThemeIcon theme={option.value} />
            </span>
            <span className="theme-option-copy">
              <span>{option.label}</span>
              <small>{option.description}</small>
            </span>
            <span aria-hidden="true" className="theme-option-indicator" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ThemeToggle
