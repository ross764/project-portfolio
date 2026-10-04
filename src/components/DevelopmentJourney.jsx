import Reveal from './Reveal'

const journeyStages = [
  {
    index: '01',
    label: 'Web foundations',
    title: 'Learning the language of the browser.',
    description: 'Building a foundation in webpage structure, responsive styling, and browser-based interactivity.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    index: '02',
    label: 'Database-driven development',
    title: 'Connecting interfaces to data.',
    description: 'Moving from static interfaces to database-driven applications using PHP and MySQL, including forms, CRUD workflows, and structured data management.',
    technologies: ['PHP', 'MySQL', 'CRUD', 'Forms'],
  },
  {
    index: '03',
    label: 'System development',
    title: 'Applying fundamentals to larger systems.',
    description: 'Applying web-development fundamentals to larger academic systems involving multiple workflows, administrative interfaces, scheduling, transactions, and structured data.',
    technologies: ['Business management', 'Membership', 'Scheduling', 'Role-based interfaces'],
  },
  {
    index: '04',
    label: 'Modern web development',
    title: 'Exploring component-based applications.',
    description: 'Currently expanding into modern component-based development with React, Vite, and Tailwind CSS while exploring Supabase for database, authentication, and backend services.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
  },
]

function DevelopmentJourney() {
  return (
    <section id="development-journey" aria-labelledby="journey-title" className="journey-section">
      <div className="content-container-wide">
        <div className="journey-intro">
          <div>
            <p className="font-technical section-eyebrow">Journey / 04</p>
            <h2 id="journey-title">From fundamentals to full-stack systems.</h2>
          </div>
          <p>My development journey has progressed from learning the foundations of web development to building database-driven systems and exploring modern application development.</p>
        </div>

        <ol className="journey-progression" aria-label="Development progression">
          {journeyStages.map((stage) => (
            <Reveal key={stage.index} as="li" className="journey-stage" delay={(Number(stage.index) - 1) * 45}>
              <span aria-hidden="true" className="journey-stage-marker" />
              <div className="journey-stage-heading">
                <p className="font-technical journey-stage-index">{stage.index} / {stage.label}</p>
                <h3>{stage.title}</h3>
              </div>
              <p className="journey-stage-description">{stage.description}</p>
              <ul className="journey-stage-technologies" aria-label={`${stage.label} focus areas`}>
                {stage.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default DevelopmentJourney
