function ProjectNavigation({ project, projects, onNavigate }) {
  const currentIndex = projects.findIndex((item) => item.id === project.id)
  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <nav aria-label="Project case study navigation" className={`project-navigation project-navigation-${project.id}`}>
      <button className="project-navigation-button project-navigation-previous" type="button" onClick={() => onNavigate(previousProject)}>
        <span aria-hidden="true">&larr;</span>
        <span>
          <small className="font-technical">Previous project</small>
          <strong>{previousProject.shortTitle}</strong>
        </span>
      </button>
      <p className="font-technical project-navigation-position">{project.number} / {String(projects.length).padStart(2, '0')}</p>
      <button className="project-navigation-button project-navigation-next" type="button" onClick={() => onNavigate(nextProject)}>
        <span>
          <small className="font-technical">Next project</small>
          <strong>{nextProject.shortTitle}</strong>
        </span>
        <span aria-hidden="true">&rarr;</span>
      </button>
    </nav>
  )
}

export default ProjectNavigation
