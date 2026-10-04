const academicFocusAreas = [
  'Web Development',
  'Programming',
  'Database Systems',
  'Systems Development',
  'Information Technology',
  'Problem Solving',
]

function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="education-section">
      <div className="content-container-wide">
        <div className="education-top">
          <div className="education-intro">
            <p className="font-technical section-eyebrow">Education / 05</p>
            <h2 id="education-title">Building the foundation for a career in IT.</h2>
            <p>My academic journey in Information Technology provides the foundation for my continued development in programming, web technologies, databases, systems development, and problem-solving.</p>
          </div>

          <article className="education-entry" aria-labelledby="education-degree">
            <div className="education-entry-heading">
              <p className="font-technical education-entry-label">Primary academic entry</p>
              <div className="education-status" aria-label="Current academic status">
                <span className="font-technical">Status / Currently Enrolled</span>
                <span className="font-technical">Level / 4th Year</span>
              </div>
            </div>
            <h3 id="education-degree">Bachelor of Science in Information Technology</h3>
            <dl className="education-metadata">
              <div>
                <dt className="font-technical">Institution</dt>
                <dd>Eulogio &quot;Amang&quot; Rodriguez Institute of Science and Technology</dd>
              </div>
              <div>
                <dt className="font-technical">Campus</dt>
                <dd>EARIST Cavite Campus</dd>
              </div>
            </dl>
          </article>
        </div>

        <div className="education-lower">
          <div className="education-focus">
            <p className="font-technical education-subsection-label">Academic Focus</p>
            <ul className="education-focus-list">
              {academicFocusAreas.map((area) => <li key={area}>{area}</li>)}
            </ul>
          </div>

          <div className="education-application">
            <p className="font-technical education-subsection-label">Academic application</p>
            <p>Through academic system-development projects, I have been able to apply classroom concepts to practical web applications involving databases, administrative workflows, scheduling, transactions, and user interfaces.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
