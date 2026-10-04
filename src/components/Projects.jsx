import { useCallback, useEffect, useRef, useState } from 'react'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import ProjectCaseStudy from './ProjectCaseStudy'
import { projects } from '../data/projects'

function CaseStudyShell({ project, onClose, isClosing }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className={`project-case-study-layer${isClosing ? ' case-study-closing' : ''}`} role="presentation">
      <div aria-labelledby="case-study-shell-title" aria-modal="true" className="project-case-study-shell" role="dialog">
        <div className="project-case-study-topline">
          <p className="font-technical">Case study / coming next</p>
          <button ref={closeButtonRef} aria-label="Close case study preview" className="project-case-study-close" type="button" onClick={onClose}>
            Close <span aria-hidden="true">X</span>
          </button>
        </div>
        <p className="font-technical project-number">Project / {project.number}</p>
        <h2 id="case-study-shell-title">{project.title}</h2>
        <p>This project&apos;s detailed case study will be added in a later step.</p>
        <button className="button-base button-secondary project-case-study-return" type="button" onClick={onClose}>
          Return to projects
        </button>
      </div>
    </div>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isClosing, setIsClosing] = useState(false)
  const returnFocusRef = useRef(null)
  const closeTimerRef = useRef(null)
  const isClosingRef = useRef(false)
  const projectsScrollYRef = useRef(0)
  const featuredProject = projects.find((project) => project.featured)
  const supportingProjects = projects.filter((project) => !project.featured)

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), [])

  const restoreProjectsPosition = useCallback(() => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: projectsScrollYRef.current, left: 0, behavior: 'auto' })
      returnFocusRef.current?.focus({ preventScroll: true })
    })
  }, [])

  const handleViewCaseStudy = useCallback((project, trigger) => {
    window.clearTimeout(closeTimerRef.current)
    isClosingRef.current = false
    setIsClosing(false)
    projectsScrollYRef.current = window.scrollY
    returnFocusRef.current = trigger
    setSelectedProject(project)
  }, [])

  const handleCloseCaseStudy = useCallback(() => {
    if (isClosingRef.current) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSelectedProject(null)
      restoreProjectsPosition()
      return
    }

    isClosingRef.current = true
    setIsClosing(true)
    closeTimerRef.current = window.setTimeout(() => {
      setSelectedProject(null)
      setIsClosing(false)
      isClosingRef.current = false
      restoreProjectsPosition()
    }, 180)
  }, [restoreProjectsPosition])

  const handleNavigateProject = useCallback((project) => {
    window.clearTimeout(closeTimerRef.current)
    isClosingRef.current = false
    setIsClosing(false)
    setSelectedProject(project)
  }, [])

  return (
    <section id="projects" aria-labelledby="projects-title" className="projects-section">
      <div className="content-container-wide">
        <div className="projects-intro">
          <p className="font-technical section-eyebrow">Projects / 03</p>
          <h2 id="projects-title">Selected systems I&apos;ve built.</h2>
          <p>A selection of web-based systems developed through academic and project-based work, focused on practical workflows, database-driven functionality, and user-centered interfaces.</p>
        </div>

        <div className="projects-showcase">
          <FeaturedProject project={featuredProject} onViewCaseStudy={handleViewCaseStudy} />
          <div className="supporting-projects">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onViewCaseStudy={handleViewCaseStudy} />
            ))}
          </div>
        </div>
      </div>

      {selectedProject ? ['bdu', 'gmasc', 'mc-repair'].includes(selectedProject.id) ? <ProjectCaseStudy isClosing={isClosing} project={selectedProject} onClose={handleCloseCaseStudy} onNavigate={handleNavigateProject} /> : <CaseStudyShell isClosing={isClosing} project={selectedProject} onClose={handleCloseCaseStudy} /> : null}
    </section>
  )
}

export default Projects
