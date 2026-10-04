import { useEffect, useRef } from 'react'
import ProjectScreenshot from './ProjectScreenshot'

function ScreenshotLightbox({ project, screenshots, activeIndex, onClose, onPrevious, onNext }) {
  const closeButtonRef = useRef(null)
  const screenshot = screenshots[activeIndex]

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
        onClose()
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        event.stopPropagation()
        onPrevious()
        return
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        event.stopPropagation()
        onNext()
        return
      }

      if (event.key !== 'Tab') return

      const dialog = document.querySelector('.project-lightbox-dialog')
      const focusableElements = dialog ? [...dialog.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')] : []
      if (!focusableElements.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (!dialog?.contains(activeElement)) {
        event.preventDefault()
        firstElement.focus()
      } else if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onNext, onPrevious])

  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [])

  if (!screenshot) return null

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div className="project-lightbox" role="presentation" onMouseDown={handleBackdropClick}>
      <div aria-labelledby="project-lightbox-title" aria-modal="true" className="project-lightbox-dialog" role="dialog">
        <div className="project-lightbox-topbar">
          <p className="font-technical">{project.shortTitle} / screenshot {String(activeIndex + 1).padStart(2, '0')} of {String(screenshots.length).padStart(2, '0')}</p>
          <button ref={closeButtonRef} aria-label="Close screenshot viewer" className="project-lightbox-close" type="button" onClick={onClose}>
            Close <span aria-hidden="true">X</span>
          </button>
        </div>

        <div className="project-lightbox-content">
          <button aria-label="Show previous screenshot" className="project-lightbox-arrow project-lightbox-arrow-previous" type="button" onClick={onPrevious}>
            <span aria-hidden="true">&larr;</span>
          </button>
          <div className="project-lightbox-media">
            <ProjectScreenshot className="project-lightbox-screenshot" project={project} screenshot={screenshot} />
            <div className="project-lightbox-caption">
              <div>
                <p className="font-technical">{screenshot.id}</p>
                <h2 id="project-lightbox-title">{screenshot.title}</h2>
              </div>
              <p>{screenshot.description}</p>
            </div>
          </div>
          <button aria-label="Show next screenshot" className="project-lightbox-arrow project-lightbox-arrow-next" type="button" onClick={onNext}>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScreenshotLightbox
