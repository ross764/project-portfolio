import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <div className="skills-subsection" aria-labelledby="skills-title">
      <div className="skills-heading">
        <div>
          <p className="font-technical section-eyebrow">Capabilities / 03</p>
          <h2 id="skills-title">Skills in practice.</h2>
        </div>
        <p>Capabilities I am developing through academic work, personal systems, and iterative practice.</p>
      </div>

      <div className="skill-matrix">
        {skillGroups.map((group) => (
          <article key={group.index} className="skill-group">
            <div className="skill-group-heading">
              <span className="font-technical skill-group-index">{group.index}</span>
              <h3>{group.label}</h3>
            </div>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Skills
