import { useState } from 'react'

function ProjectScreenshot({ project, featured = false, screenshot: screenshotOverride, className = '', placeholderLabel = '' }) {
  const screenshot = screenshotOverride ?? project.screenshots?.[0]
  const [failedImageKey, setFailedImageKey] = useState('')
  const imageKey = `${screenshot?.id}:${screenshot?.image}`
  const hasImageError = failedImageKey === imageKey
  const displayTitle = placeholderLabel || screenshot.title
  const screenshotClass = `project-screenshot${featured ? ' project-screenshot-featured' : ''}${className ? ` ${className}` : ''}`

  if (screenshot?.image && !hasImageError) {
    return (
      <div className={screenshotClass}>
        <img src={screenshot.image} alt={screenshot.alt} loading={featured ? 'eager' : 'lazy'} onError={() => setFailedImageKey(imageKey)} />
        <span aria-hidden="true" className="project-screenshot-label">{displayTitle} / image</span>
      </div>
    )
  }

  return (
    <div aria-label={`${project.shortTitle} screenshot placeholder`} className={screenshotClass} role="img">
      <div aria-hidden="true" className="project-screenshot-grid" />
      <div aria-hidden="true" className="project-screenshot-frame" />
      <div className="project-placeholder-content" aria-hidden="true">
        <p className="font-technical">{displayTitle}</p>
        <span>{project.id === 'mc-repair' ? 'MC Repair' : project.shortTitle}</span>
        <small className="font-technical">Screenshot pending</small>
      </div>
      <span aria-hidden="true" className="project-screenshot-label">16:10 / interface frame</span>
    </div>
  )
}

export default ProjectScreenshot
