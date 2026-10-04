import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'
const THEME_PREFERENCES = ['dark', 'light', 'system']

function isThemePreference(value) {
  return THEME_PREFERENCES.includes(value)
}

function getStoredPreference() {
  if (typeof window === 'undefined') {
    return 'system'
  }

  try {
    const storedPreference = window.localStorage.getItem(STORAGE_KEY)
    return isThemePreference(storedPreference) ? storedPreference : 'system'
  } catch {
    return 'system'
  }
}

function getSystemTheme() {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  return 'dark'
}

export function useTheme() {
  const [preference, setPreference] = useState(getStoredPreference)
  const [systemTheme, setSystemTheme] = useState(getSystemTheme)
  const resolvedTheme = preference === 'system' ? systemTheme : preference

  useEffect(() => {
    if (!window.matchMedia) {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) => {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme
  }, [resolvedTheme])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, preference)
    } catch {
      // Theme state still works when storage is unavailable.
    }
  }, [preference])

  const setTheme = (nextPreference) => {
    if (isThemePreference(nextPreference)) {
      setPreference(nextPreference)
    }
  }

  return { preference, resolvedTheme, setTheme }
}
