const learningAreas = [
  { index: '01', name: 'React', focus: 'Component-based interfaces, reusable UI structure, and state-driven interfaces.' },
  { index: '02', name: 'Vite', focus: 'Modern frontend development workflow, fast tooling, and project organization.' },
  { index: '03', name: 'Tailwind CSS', focus: 'Utility-first styling, responsive interfaces, and consistent design systems.' },
  { index: '04', name: 'Supabase', focus: 'Database integration, authentication, and backend services.' },
  { index: '05', name: 'Git / GitHub', focus: 'Version control, project history, and repository workflow.' },
]

function CurrentlyExploring() {
  return (
    <section id="currently-exploring" aria-labelledby="exploring-title" className="exploring-section">
      <div className="content-container-wide">
        <div className="exploring-heading">
          <div>
            <p className="font-technical section-eyebrow">Current / Active Learning</p>
            <h2 id="exploring-title">Currently exploring.</h2>
          </div>
          <div className="exploring-status" aria-label="Current development status">
            <span aria-hidden="true" className="exploring-status-dot" />
            <span className="font-technical">Status / Learning &amp; Building</span>
          </div>
        </div>

        <p className="exploring-description">Continuing to build experience with modern tools and development practices while strengthening the fundamentals behind reliable web applications.</p>

        <ul className="exploring-list" aria-label="Current learning areas">
          {learningAreas.map((area) => (
            <li key={area.index} className="exploring-item">
              <span className="font-technical exploring-item-index">{area.index}</span>
              <div>
                <h3>{area.name}</h3>
                <p>{area.focus}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CurrentlyExploring
