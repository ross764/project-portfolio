import Skills from './Skills'
import { currentDevelopmentDirection, developmentFoundation, developmentTools } from '../data/skills'

function TechnologyList({ technologies, current = false }) {
  return (
    <ul className="technology-list">
      {technologies.map((technology) => (
        <li key={technology.name} className="technology-entry">
          <div>
            <p className="technology-name">{technology.name}</p>
            <p className="technology-detail">{technology.detail}</p>
          </div>
          {current && technology.status ? (
            <span className="font-technical technology-status">{technology.status}</span>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

function TechStack() {
  return (
    <section id="skills" aria-labelledby="stack-title" className="capabilities-section">
      <div className="content-container-wide">
        <div className="capability-transition">
          <span className="font-technical">Back to system / capabilities</span>
          <span aria-hidden="true" className="capability-transition-line" />
        </div>

        <div className="capabilities-intro">
          <p className="font-technical section-eyebrow">Stack / 02</p>
          <h2 id="stack-title">Tools I build with.</h2>
          <p>A growing toolkit shaped by hands-on academic and personal projects, with a current focus on modern web development.</p>
        </div>

        <div className="tech-overview">
          <article className="tech-panel tech-direction-panel">
            <div className="tech-panel-heading">
              <div>
                <p className="font-technical tech-panel-index">01 / active direction</p>
                <h3>{currentDevelopmentDirection.label}</h3>
              </div>
              <span className="tech-status"><span aria-hidden="true" className="tech-status-dot" />{currentDevelopmentDirection.status}</span>
            </div>
            <p className="tech-panel-description">{currentDevelopmentDirection.description}</p>
            <TechnologyList current technologies={currentDevelopmentDirection.technologies} />
          </article>

          <article className="tech-panel tech-foundation-panel">
            <div className="tech-panel-heading">
              <div>
                <p className="font-technical tech-panel-index">02 / foundation</p>
                <h3>{developmentFoundation.label}</h3>
              </div>
            </div>
            <p className="tech-panel-description">{developmentFoundation.description}</p>
            <TechnologyList technologies={developmentFoundation.technologies} />
          </article>
        </div>

        <div className="tools-rail">
          <div>
            <p className="font-technical tools-rail-label">03 / tools &amp; workflow</p>
            <p className="tools-rail-description">Development tools used while building and managing web projects.</p>
          </div>
          <ul className="tools-list">
            {developmentTools.map((tool) => (
              <li key={tool.name}>
                <span className="tool-name">{tool.name}</span>
                <span className="font-technical tool-detail">{tool.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <Skills />
      </div>
    </section>
  )
}

export default TechStack
