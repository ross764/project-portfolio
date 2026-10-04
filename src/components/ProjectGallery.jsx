import { useRef, useState } from 'react'
import ProjectScreenshot from './ProjectScreenshot'
import ScreenshotLightbox from './ScreenshotLightbox'

function ProjectGallery({ project }) {
  const screenshots = project.screenshots ?? []
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const lightboxTriggerRef = useRef(null)
  const activeScreenshot = screenshots[activeIndex] ?? screenshots[0]

  if (!activeScreenshot) return null

  const openLightbox = (index) => {
    setActiveIndex(index)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    window.requestAnimationFrame(() => lightboxTriggerRef.current?.focus())
  }

  const showPrevious = () => {
    setLightboxIndex((index) => (index - 1 + screenshots.length) % screenshots.length)
  }

  const showNext = () => {
    setLightboxIndex((index) => (index + 1) % screenshots.length)
  }

  return (
    <div className={`project-gallery project-gallery-${project.id}`}>
      <div className="project-gallery-featured">
        <button
          ref={lightboxTriggerRef}
          aria-label={`Open ${activeScreenshot.title} in full-screen viewer`}
          className="project-gallery-featured-button"
          type="button"
          onClick={() => openLightbox(activeIndex)}
        >
          <ProjectScreenshot featured project={project} screenshot={activeScreenshot} />
        </button>
        <div className="project-gallery-featured-caption">
          <div>
            <p className="font-technical">{String(activeIndex + 1).padStart(2, '0')} / active interface</p>
            <h3>{activeScreenshot.title}</h3>
          </div>
          <p>{activeScreenshot.description}</p>
        </div>
      </div>

      <div className="project-gallery-thumbnails" aria-label={`${project.shortTitle} screenshots`}>
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.id}
            aria-label={`Select ${screenshot.title}`}
            aria-pressed={index === activeIndex}
            className={`project-gallery-thumbnail${index === activeIndex ? ' is-active' : ''}`}
            type="button"
            onClick={() => setActiveIndex(index)}
          >
            <span className="project-gallery-thumbnail-image">
              <ProjectScreenshot project={project} screenshot={screenshot} />
            </span>
            <span className="project-gallery-thumbnail-label">
              <span className="font-technical">{String(index + 1).padStart(2, '0')}</span>
              <span>{screenshot.title}</span>
            </span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null ? (
        <ScreenshotLightbox
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={() => {
            showNext()
            setActiveIndex((index) => (index + 1) % screenshots.length)
          }}
          onPrevious={() => {
            showPrevious()
            setActiveIndex((index) => (index - 1 + screenshots.length) % screenshots.length)
          }}
          project={project}
          screenshots={screenshots}
        />
      ) : null}
    </div>
  )
}

export default ProjectGallery
