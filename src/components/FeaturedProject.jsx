import ProjectScreenshot from './ProjectScreenshot'

function FeaturedProject({ project, onViewCaseStudy }) {
  return (
    <article className="featured-project">
      <ProjectScreenshot className="project-cover-screenshot" featured project={project} />
      <div className="featured-project-content">
        <div className="featured-project-heading">
          <div>
            <p className="font-technical project-number">Project / {project.number}</p>
            <p className="font-technical featured-project-label">{project.status}</p>
          </div>
          <span className="font-technical featured-project-version">Version {project.version}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="featured-project-description">{project.shortDescription}</p>
        <dl className="project-meta featured-project-meta">
          <div>
            <dt className="font-technical">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="font-technical">Type</dt>
            <dd>{project.type}</dd>
          </div>
        </dl>
        <div className="featured-project-footer">
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

export default FeaturedProject
