import ProjectScreenshot from './ProjectScreenshot'

function ProjectCard({ project, onViewCaseStudy }) {
  return (
    <article className={`project-card project-card-${project.id}`}>
      <ProjectScreenshot className="project-cover-screenshot" project={project} />
      <div className="project-card-content">
        <div className="project-card-heading">
          <p className="font-technical project-number">Project / {project.number}</p>
          <p className="font-technical project-type">{project.type}</p>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
        <dl className="project-meta">
          <div>
            <dt className="font-technical">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="font-technical">Status</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>
        <div className="project-card-footer">
          <div className="project-tags" aria-label={`${project.shortTitle} core technologies`}>
            {project.visibleTechnologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <button className="project-case-study-link" type="button" onClick={(event) => onViewCaseStudy(project, event.currentTarget)}>
            <span>View case study</span>
            <span aria-hidden="true" className="project-arrow">&rarr;</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
