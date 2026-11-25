import { Fragment, useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import ProjectGallery from './ProjectGallery'
import ProjectNavigation from './ProjectNavigation'
import ProjectScreenshot from './ProjectScreenshot'

function useCaseStudyOverlay(onClose, caseStudyRef, closeButtonRef, projectId) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      const lightbox = caseStudyRef.current?.querySelector('.project-lightbox')
      if (lightbox?.contains(event.target)) return

      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = [...caseStudyRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      if (!focusableElements.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (!caseStudyRef.current.contains(activeElement)) {
        event.preventDefault()
        firstElement.focus()
      } else if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    if (caseStudyRef.current) {
      caseStudyRef.current.scrollTop = 0
      caseStudyRef.current.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus({ preventScroll: true })

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [caseStudyRef, closeButtonRef, onClose, projectId])
}

function CaseStudySection({ index, label, title, children, className = '' }) {
  return (
    <section className={`bdu-case-section ${className}`}>
      <div className="bdu-case-section-heading">
        <p className="font-technical bdu-case-index">{index} / {label}</p>
        <h2>{title}</h2>
      </div>
      <div className="bdu-case-section-content">{children}</div>
    </section>
  )
}

function MetadataStrip({ project }) {
  const metadata = [
    { label: 'Role', value: project.role },
    { label: 'Category', value: 'Capstone / Thesis' },
    { label: 'Status', value: project.status },
    { label: 'Institution', value: 'EARIST Cavite Campus' },
  ]

  return (
    <dl className="bdu-metadata-strip">
      {metadata.map((item) => (
        <div key={item.label}>
          <dt className="font-technical">{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function Workflow({ workflow }) {
  return (
    <article className="bdu-workflow">
      <p className="font-technical bdu-workflow-label">{workflow.label}</p>
      <ol className="bdu-workflow-steps">
        {workflow.steps.map((step, index) => (
          <li key={step}>
            <span className="font-technical">0{index + 1}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
    </article>
  )
}

function BduCaseStudy({ project, onClose, onNavigate, isClosing }) {
  const closeButtonRef = useRef(null)
  const caseStudyRef = useRef(null)
  const { caseStudy } = project

  useCaseStudyOverlay(onClose, caseStudyRef, closeButtonRef, project.id)

  return (
    <div ref={caseStudyRef} className={`bdu-case-study-layer${isClosing ? ' case-study-closing' : ''}`} role="presentation">
      <article aria-labelledby="bdu-case-study-title" aria-modal="true" className="bdu-case-study" role="dialog">
        <div className="bdu-case-study-topbar">
          <button className="bdu-return-link" type="button" onClick={onClose}>
            <span aria-hidden="true">&larr;</span> Return to projects
          </button>
          <button ref={closeButtonRef} aria-label="Close BDU CONNECT case study" className="bdu-close-button" type="button" onClick={onClose}>
            Close <span aria-hidden="true">X</span>
          </button>
        </div>

        <header className="bdu-case-study-header">
          <div className="bdu-case-study-heading">
            <div className="bdu-case-study-kicker">
              <p className="font-technical">Project / {project.number}</p>
              <p className="font-technical">Featured / {project.status}</p>
            </div>
            <h1 id="bdu-case-study-title">{project.title}</h1>
            <p className="bdu-case-study-type">{project.subtitle}</p>
            <p className="bdu-case-study-type">{project.type}</p>
            <p className="bdu-case-study-description">{project.overview}</p>
          </div>
          <ProjectScreenshot className="bdu-header-screenshot project-case-study-hero-screenshot" featured placeholderLabel="System preview / BDU CONNECT" project={project} screenshot={project.screenshots[0]} />
        </header>

        <MetadataStrip project={project} />

        <div className="bdu-case-study-content">
          <CaseStudySection index="01" label="Overview" title="System overview">
            <div className="bdu-overview-grid">
              <div className="bdu-case-prose">
                <p>{project.overview}</p>
              </div>
              <div className="bdu-objective">
                <p className="font-technical">Objective</p>
                <p>{caseStudy.objective}</p>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection index="02" label="System users" title="Role-based access">
            <div className="bdu-users-grid">
              {caseStudy.users.map((user, index) => (
                <article key={user.label} className="bdu-user-block">
                  <p className="font-technical">0{index + 1} / user category</p>
                  <h3>{user.label}</h3>
                  <p>{user.description}</p>
                </article>
              ))}
            </div>
            <div className="bdu-access-note">
              <p className="font-technical">Account &amp; access workflow</p>
              <p>Student and Staff accounts undergo registration, email verification, and administrative approval before accessing their authorized system interfaces. Administrator accounts are not created through public registration.</p>
            </div>
          </CaseStudySection>

          <CaseStudySection index="03" label="Core modules" title="A connected operating system">
            <div className="bdu-module-matrix">
              {project.features.map((feature, index) => (
                <article key={feature.category} className="bdu-module-group">
                  <p className="font-technical">0{index + 1} / module group</p>
                  <h3>{feature.category}</h3>
                  <ul>
                    {feature.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection index="04" label="Key workflows" title="From request to record">
            <div className="bdu-workflows">
              {caseStudy.workflows.map((workflow) => <Workflow key={workflow.label} workflow={workflow} />)}
            </div>
          </CaseStudySection>

          <CaseStudySection index="05" label="Technology stack" title="The implementation toolkit">
            <div className="bdu-technology-grid">
              {caseStudy.technologyGroups.map((group) => (
                <article key={group.label} className="bdu-technology-group">
                  <p className="font-technical">{group.label}</p>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <p className="bdu-context-note">BDU CONNECT uses React and Tailwind CSS to deliver responsive, role-specific user interfaces, with Vite supporting the frontend development and build process. Supabase provides PostgreSQL database services, authentication, file storage, and database-level access controls. PostgreSQL functions and RPC operations support application workflows and data processing.</p>
          </CaseStudySection>

          <CaseStudySection index="06" label="Database & data management" title="Data domains">
            <div className="bdu-data-layout">
              <div className="bdu-case-prose">
                <p>The system uses PostgreSQL through Supabase to manage interconnected operational data, including user accounts, product information, inventory, pre-orders, transactions, notifications, and administrative records. Database relationships, access policies, and database functions support organized data management and controlled access.</p>
                <div className="bdu-domain-list" aria-label="BDU CONNECT data domains">
                  {caseStudy.dataDomains.map((domain) => <span key={domain}>{domain}</span>)}
                </div>
              </div>
              <div className="bdu-data-diagram" aria-label="Conceptual relationships between BDU CONNECT data domains">
                <p className="font-technical">Conceptual view / not an exact ERD</p>
                {caseStudy.dataRelationships.map((relationship) => (
                  <div key={relationship.join('-')} className="bdu-data-diagram-row">
                    {relationship.map((domain, index) => (
                      <Fragment key={domain}>
                        {index > 0 ? <span aria-hidden="true">-&gt;</span> : null}
                        <span>{domain}</span>
                      </Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection index="07" label="Technical implementation" title="Layers that work together">
            <div className="bdu-implementation-layout">
              <ul className="bdu-highlight-list">
                {caseStudy.technicalHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="bdu-layer-stack" aria-label="Conceptual implementation layers">
                {caseStudy.technicalLayers.map((layer, index) => (
                  <div key={layer.label} className="bdu-layer-row">
                    <span className="font-technical">0{index + 1}</span>
                    <strong>{layer.label}</strong>
                    <span>{layer.items}</span>
                  </div>
                ))}
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection index="08" label="Screenshot preview" title="Interface slots for documentation">
            <p className="bdu-section-note">Select an interface to make it active, or open the active capture for a larger view. Use the viewer arrows or keyboard arrow keys to move through the set.</p>
            <ProjectGallery project={project} />
          </CaseStudySection>

          <CaseStudySection index="09" label="Role & contribution" title="Programmer">
            <div className="bdu-contribution">
              <p className="font-technical">Role / {project.role}</p>
              <p>{caseStudy.contribution}</p>
            </div>
          </CaseStudySection>

          <CaseStudySection index="10" label="Project reflection" title="Working across a complete system">
            <div className="bdu-reflection-grid">
              <div className="bdu-case-prose"><p>{caseStudy.reflection}</p></div>
              <div>
                <p className="font-technical bdu-learning-label">Learning areas</p>
                <ul className="bdu-learning-list">
                  {caseStudy.learningAreas.map((area) => <li key={area}>{area}</li>)}
                </ul>
              </div>
            </div>
          </CaseStudySection>
        </div>

        <div className="bdu-case-study-return">
          <ProjectNavigation project={project} projects={projects} onNavigate={onNavigate} />
          <button className="button-base button-secondary" type="button" onClick={onClose}>
            <span aria-hidden="true">&larr;</span> Return to projects
          </button>
        </div>
      </article>
    </div>
  )
}

function GmascSection({ index, label, title, children }) {
  return (
    <section className="gmasc-case-section">
      <div className="gmasc-case-section-heading">
        <p className="font-technical">{index} / {label}</p>
        <h2>{title}</h2>
      </div>
      <div className="gmasc-case-section-content">{children}</div>
    </section>
  )
}

function GmascWorkflow({ label, steps }) {
  return (
    <div className="gmasc-workflow">
      <p className="font-technical">{label}</p>
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span className="font-technical">0{index + 1}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
    </div>
  )
}

function GmascMetadata({ project }) {
  const metadata = [
    { label: 'Role', value: project.role },
    { label: 'Type', value: project.type },
    { label: 'Version', value: project.version },
    { label: 'Core stack', value: 'PHP / MySQL / JavaScript' },
  ]

  return (
    <dl className="gmasc-metadata-strip">
      {metadata.map((item) => (
        <div key={item.label}>
          <dt className="font-technical">{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function GmascCaseStudy({ project, onClose, onNavigate, isClosing }) {
  const closeButtonRef = useRef(null)
  const caseStudyRef = useRef(null)
  const { caseStudy } = project

  useCaseStudyOverlay(onClose, caseStudyRef, closeButtonRef, project.id)

  return (
    <div ref={caseStudyRef} className={`gmasc-case-study-layer${isClosing ? ' case-study-closing' : ''}`} role="presentation">
      <article aria-labelledby="gmasc-case-study-title" aria-modal="true" className="gmasc-case-study" role="dialog">
        <div className="gmasc-case-study-topbar">
          <button className="gmasc-return-link" type="button" onClick={onClose}>
            <span aria-hidden="true">&larr;</span> Return to projects
          </button>
          <button ref={closeButtonRef} aria-label="Close GMASC case study" className="gmasc-close-button" type="button" onClick={onClose}>
            Close <span aria-hidden="true">X</span>
          </button>
        </div>

        <header className="gmasc-case-study-header">
          <div className="gmasc-case-study-heading">
            <div className="gmasc-case-study-kicker">
              <p className="font-technical">Project / {project.number}</p>
              <p className="font-technical">Sports Club Management</p>
            </div>
            <h1 id="gmasc-case-study-title">{project.title}</h1>
            <p className="gmasc-short-name">GMASC</p>
            <p className="gmasc-case-study-type">Role: {project.role} / Version {project.version} / {project.type}</p>
            <p className="gmasc-case-study-status">{project.status}</p>
            <p className="gmasc-case-study-description">The GMA Sports Club Management System is a PHP and MySQL web application designed to support sports-club operations through a combination of public-facing content and authenticated management workflows. The system brings together membership applications, training-session scheduling, event registration, content publishing, inquiries, user and member administration, and operational reporting within one web application.</p>
          </div>
          <ProjectScreenshot className="gmasc-header-screenshot project-case-study-hero-screenshot" featured placeholderLabel="System preview / GMASC" project={project} screenshot={project.screenshots[0]} />
        </header>

        <GmascMetadata project={project} />

        <div className="gmasc-case-study-content">
          <GmascSection index="01" label="Overview" title="System overview">
            <div className="gmasc-overview-grid">
              <div className="gmasc-case-prose"><p>{project.overview}</p></div>
              <div className="gmasc-purpose-block">
                <p className="font-technical">Purpose</p>
                <p>{caseStudy.purpose}</p>
                <p className="font-technical gmasc-sports-label">Sports / available programs</p>
                <div className="gmasc-sports-list">
                  {caseStudy.sports.map((sport) => <span key={sport}>{sport}</span>)}
                </div>
              </div>
            </div>
          </GmascSection>

          <GmascSection index="02" label="User roles" title="A public-to-member pathway">
            <div className="gmasc-roles-grid">
              {caseStudy.roles.map((role, index) => (
                <article key={role.label} className="gmasc-role-block">
                  <p className="font-technical">0{index + 1} / access layer</p>
                  <h3>{role.label}</h3>
                  <p>{role.description}</p>
                </article>
              ))}
            </div>
          </GmascSection>

          <GmascSection index="03" label="Membership system" title="From application to status">
            <div className="gmasc-membership-layout">
              <GmascWorkflow label="Membership application workflow" steps={caseStudy.membershipWorkflow} />
              <div className="gmasc-membership-highlights">
                {caseStudy.membershipHighlights.map((highlight) => (
                  <article key={highlight.label}>
                    <p className="font-technical">{highlight.label}</p>
                    <p>{highlight.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </GmascSection>

          <GmascSection index="04" label="Training management" title="Schedules with eligibility and capacity">
            <div className="gmasc-training-layout">
              <div>
                <p className="font-technical gmasc-subsection-label">Administrator session fields</p>
                <div className="gmasc-tag-list">
                  {caseStudy.training.adminFields.map((field) => <span key={field}>{field}</span>)}
                </div>
              </div>
              <GmascWorkflow label="Member training workflow" steps={caseStudy.training.memberWorkflow} />
            </div>
            <div className="gmasc-inline-highlights">
              {caseStudy.training.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
            </div>
          </GmascSection>

          <GmascSection index="05" label="Event management" title="A separate registration domain">
            <div className="gmasc-events-layout">
              <GmascWorkflow label="Event workflow" steps={caseStudy.events.workflow} />
              <div>
                <p className="font-technical gmasc-subsection-label">Verified event features</p>
                <ul className="gmasc-feature-list">
                  {caseStudy.events.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </div>
            </div>
          </GmascSection>

          <GmascSection index="06" label="Content & communication" title="Public information, managed conversations">
            <div className="gmasc-content-layout">
              <div>
                <p className="font-technical gmasc-subsection-label">Content areas</p>
                <div className="gmasc-content-areas">
                  {caseStudy.content.areas.map((area) => <span key={area}>{area}</span>)}
                </div>
                <p className="gmasc-content-note">Administrators can manage gallery and vlog content while public visitors browse published information. Vlogs may link to external video content.</p>
              </div>
              <div>
                <GmascWorkflow label="Inquiry workflow" steps={caseStudy.content.inquiryWorkflow} />
                <p className="gmasc-content-note">{caseStudy.content.communication}</p>
              </div>
            </div>
          </GmascSection>

          <GmascSection index="07" label="Administration & reporting" title="Operational oversight">
            <div className="gmasc-administration-layout">
              <div>
                <p className="font-technical gmasc-subsection-label">Administration areas</p>
                <ul className="gmasc-admin-list">
                  {caseStudy.administration.areas.map((area) => <li key={area}>{area}</li>)}
                </ul>
              </div>
              <div className="gmasc-reporting-block">
                <p className="font-technical gmasc-subsection-label">Dashboard &amp; reporting capabilities</p>
                <ul className="gmasc-feature-list">
                  {caseStudy.administration.reporting.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </GmascSection>

          <GmascSection index="08" label="Technology stack" title="A local PHP/MySQL foundation">
            <div className="gmasc-stack-grid">
              {caseStudy.technologyGroups.map((group) => (
                <article key={group.label}>
                  <p className="font-technical">{group.label}</p>
                  <div className="gmasc-tag-list">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
            <p className="gmasc-context-note">GMASC uses server-rendered PHP with MySQL as its core application and data layer. Vanilla JavaScript and AJAX/Fetch support interactive browser workflows, while PHP sessions handle authenticated access and MySQLi is used for database interaction.</p>
          </GmascSection>

          <GmascSection index="09" label="Data & system structure" title="A domain map, not an ERD">
            <div className="gmasc-data-layout">
              <div className="gmasc-domain-map">
                {caseStudy.dataDomains.map((domain) => (
                  <article key={domain.label}>
                    <p className="font-technical">{domain.label}</p>
                    <div>{domain.items.map((item) => <span key={item}>{item}</span>)}</div>
                  </article>
                ))}
              </div>
              <div className="gmasc-database-note">
                <p className="font-technical">Database characteristics</p>
                <p>The verified structure includes MySQL, utf8mb4, foreign keys, unique constraints, enum usage, and a schema plus migrations. No triggers, stored procedures, or stored functions were identified.</p>
                <div className="gmasc-tag-list">
                  {caseStudy.databaseCharacteristics.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </div>
          </GmascSection>

          <GmascSection index="10" label="Technical implementation" title="Application workflows in PHP">
            <div className="gmasc-implementation-layout">
              <ul className="gmasc-implementation-list">
                {caseStudy.technicalHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="gmasc-auth-block">
                <p className="font-technical">Authentication context</p>
                <p>{caseStudy.authentication}</p>
                <p className="gmasc-security-note">Session-based authentication with password hashing and role checks.</p>
              </div>
            </div>
          </GmascSection>

          <GmascSection index="11" label="Screenshot preview" title="Interface slots for documentation">
            <p className="gmasc-section-note">Select an interface to make it active, or open the active capture for a larger view. Use the viewer arrows or keyboard arrow keys to move through the set.</p>
            <ProjectGallery project={project} />
          </GmascSection>

          <GmascSection index="12" label="Role & contribution" title="Programmer">
            <div className="gmasc-contribution"><p className="font-technical">Role / {project.role}</p><p>{caseStudy.contribution}</p></div>
          </GmascSection>

          <GmascSection index="13" label="Project reflection" title="Connecting public and operational workflows">
            <div className="gmasc-reflection-layout">
              <div className="gmasc-case-prose"><p>{caseStudy.reflection}</p></div>
              <div>
                <p className="font-technical gmasc-subsection-label">Learning areas</p>
                <ul className="gmasc-learning-list">
                  {caseStudy.learningAreas.map((area) => <li key={area}>{area}</li>)}
                </ul>
              </div>
            </div>
          </GmascSection>
        </div>

        <div className="gmasc-case-study-return">
          <ProjectNavigation project={project} projects={projects} onNavigate={onNavigate} />
          <button className="button-base button-secondary" type="button" onClick={onClose}>
            <span aria-hidden="true">&larr;</span> Return to projects
          </button>
        </div>
      </article>
    </div>
  )
}

function McRepairSection({ index, label, title, children }) {
  return (
    <section className="mc-case-section">
      <div className="mc-case-section-heading">
        <p className="font-technical">{index} / {label}</p>
        <h2>{title}</h2>
      </div>
      <div className="mc-case-section-content">{children}</div>
    </section>
  )
}

function McRepairWorkflow({ label, steps }) {
  return (
    <div className="mc-workflow">
      <p className="font-technical">{label}</p>
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span className="font-technical">0{index + 1}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
    </div>
  )
}

function McRepairMetadata({ project }) {
  const metadata = [
    { label: 'Role', value: project.role },
    { label: 'Type', value: project.type },
    { label: 'Core stack', value: 'PHP / MySQL / JavaScript' },
    { label: 'Environment', value: 'XAMPP' },
  ]

  return (
    <dl className="mc-metadata-strip">
      {metadata.map((item) => (
        <div key={item.label}>
          <dt className="font-technical">{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function McRepairCaseStudy({ project, onClose, onNavigate, isClosing }) {
  const closeButtonRef = useRef(null)
  const caseStudyRef = useRef(null)
  const { caseStudy } = project

  useCaseStudyOverlay(onClose, caseStudyRef, closeButtonRef, project.id)

  return (
    <div ref={caseStudyRef} className={`mc-case-study-layer${isClosing ? ' case-study-closing' : ''}`} role="presentation">
      <article aria-labelledby="mc-case-study-title" aria-modal="true" className="mc-case-study" role="dialog">
        <div className="mc-case-study-topbar">
          <button className="mc-return-link" type="button" onClick={onClose}>
            <span aria-hidden="true">&larr;</span> Return to projects
          </button>
          <button ref={closeButtonRef} aria-label="Close MC Watch Repair case study" className="mc-close-button" type="button" onClick={onClose}>
            Close <span aria-hidden="true">X</span>
          </button>
        </div>

        <header className="mc-case-study-header">
          <div className="mc-case-study-heading">
            <div className="mc-case-study-kicker">
              <p className="font-technical">Project / {project.number}</p>
              <p className="font-technical">Repair Scheduling System</p>
            </div>
            <h1 id="mc-case-study-title">{project.title}</h1>
            <p className="mc-short-name">MC Watch Repair</p>
            <p className="mc-case-study-type">Role: {project.role} / {project.type}</p>
            <p className="mc-case-study-description">The MC Watch Repair Scheduling System is a PHP and MySQL web application designed to organize customer repair appointments and technician schedules for watch-repair services. The system supports appointment booking, customer and address information, technician scheduling, service time-slot management, payment-proof submission, and booking administration.</p>
          </div>
          <ProjectScreenshot className="mc-header-screenshot project-case-study-hero-screenshot" featured placeholderLabel="System preview / MC Repair" project={project} screenshot={project.screenshots[0]} />
        </header>

        <McRepairMetadata project={project} />

        <div className="mc-case-study-content">
          <McRepairSection index="01" label="Overview" title="A focused service workflow">
            <div className="mc-overview-grid">
              <div className="mc-case-prose"><p>{project.overview}</p></div>
              <div className="mc-focus-block">
                <p className="font-technical">Functional focus</p>
                <div className="mc-focus-list">
                  {project.features.flatMap((feature) => feature.items).map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </div>
          </McRepairSection>

          <McRepairSection index="02" label="Booking workflow" title="From customer details to appointment">
            <McRepairWorkflow label="Customer booking lifecycle" steps={caseStudy.bookingWorkflow} />
          </McRepairSection>

          <McRepairSection index="03" label="Scheduling system" title="Time, technician, availability">
            <div className="mc-scheduling-layout">
              <div className="mc-schedule-rules">
                {caseStudy.scheduling.rules.map((rule, index) => (
                  <article key={rule.label}>
                    <p className="font-technical">0{index + 1} / {rule.label}</p>
                    <h3>{rule.value}</h3>
                  </article>
                ))}
              </div>
              <div className="mc-schedule-note">
                <p className="font-technical">Implemented restriction</p>
                <p>Sunday bookings are restricted.</p>
                <div className="mc-inline-list">
                  {caseStudy.scheduling.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
                </div>
              </div>
            </div>
          </McRepairSection>

          <McRepairSection index="04" label="Payment workflow" title="Proof attached to a booking">
            <McRepairWorkflow label="Payment-related booking flow" steps={caseStudy.paymentWorkflow} />
            <p className="mc-section-note">The verified workflow includes a 50% downpayment requirement and payment-proof submission. No payment provider or automatic gateway is represented here.</p>
          </McRepairSection>

          <McRepairSection index="05" label="Booking administration" title="Managing the appointment lifecycle">
            <div className="mc-administration-layout">
              {caseStudy.administration.map((item, index) => (
                <div key={item} className="mc-admin-item">
                  <span className="font-technical">0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </McRepairSection>

          <McRepairSection index="06" label="Technology stack" title="A compact PHP/MySQL foundation">
            <div className="mc-stack-grid">
              {caseStudy.technologyGroups.map((group) => (
                <article key={group.label}>
                  <p className="font-technical">{group.label}</p>
                  <div className="mc-tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </McRepairSection>

          <McRepairSection index="07" label="Technical implementation" title="A booking system in layers">
            <div className="mc-implementation-layout">
              <ul className="mc-highlight-list">
                {caseStudy.technicalHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="mc-technical-flow" aria-label="Conceptual MC Watch Repair system flow">
                <p className="font-technical">Conceptual system flow / not an exact architecture diagram</p>
                {caseStudy.technicalFlow.map((layer, index) => (
                  <div key={layer.label} className="mc-flow-layer">
                    <span className="font-technical">0{index + 1}</span>
                    <strong>{layer.label}</strong>
                    <span>{layer.items}</span>
                  </div>
                ))}
              </div>
            </div>
          </McRepairSection>

          <McRepairSection index="08" label="Screenshot preview" title="Interface slots for documentation">
            <p className="mc-section-note">Select an interface to make it active, or open the active capture for a larger view. Use the viewer arrows or keyboard arrow keys to move through the set.</p>
            <ProjectGallery project={project} />
          </McRepairSection>

          <McRepairSection index="09" label="Role & contribution" title="Programmer">
            <div className="mc-contribution"><p className="font-technical">Role / {project.role}</p><p>{caseStudy.contribution}</p></div>
          </McRepairSection>

          <McRepairSection index="10" label="Project reflection" title="Connecting booking and administration">
            <div className="mc-reflection-layout">
              <div className="mc-case-prose"><p>{caseStudy.reflection}</p></div>
              <div>
                <p className="font-technical mc-subsection-label">Learning areas</p>
                <ul className="mc-learning-list">
                  {caseStudy.learningAreas.map((area) => <li key={area}>{area}</li>)}
                </ul>
              </div>
            </div>
          </McRepairSection>
        </div>

        <div className="mc-case-study-return">
          <ProjectNavigation project={project} projects={projects} onNavigate={onNavigate} />
          <button className="button-base button-secondary" type="button" onClick={onClose}>
            <span aria-hidden="true">&larr;</span> Return to projects
          </button>
        </div>
      </article>
    </div>
  )
}

function ProjectCaseStudy({ project, onClose, onNavigate, isClosing }) {
  if (project.id === 'gmasc') {
    return <GmascCaseStudy isClosing={isClosing} project={project} onClose={onClose} onNavigate={onNavigate} />
  }

  if (project.id === 'mc-repair') {
    return <McRepairCaseStudy isClosing={isClosing} project={project} onClose={onClose} onNavigate={onNavigate} />
  }

  return <BduCaseStudy isClosing={isClosing} project={project} onClose={onClose} onNavigate={onNavigate} />
}

export default ProjectCaseStudy
