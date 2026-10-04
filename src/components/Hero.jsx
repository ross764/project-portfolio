import profileImage from '../assets/images/profile/profile.jpg'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="hero-arrow" fill="none" height="16" viewBox="0 0 24 24" width="16">
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  )
}

const profileDetails = [
  { label: 'Role', value: 'Aspiring Web Developer' },
  { label: 'Focus', value: 'Web Development' },
  { label: 'Education', value: 'BS Information Technology' },
  { label: 'Location', value: 'GMA, Cavite' },
]

function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="hero-section">
      <div className="content-container-wide hero-grid">
        <div className="hero-intro">
          <p className="font-technical hero-reveal hero-stagger-1 hero-eyebrow">
            &lt; IT Student / Web Developer &gt;
          </p>

          <h1 id="hero-title" className="hero-reveal hero-stagger-2 hero-name">
            <span>ROSS IRVINE</span>
            <span className="hero-name-last">
              T. ALTAMIA<span className="hero-name-accent">.</span>
            </span>
          </h1>

          <p className="hero-reveal hero-stagger-3 hero-title">
            4th Year IT Student <span aria-hidden="true">|</span> Aspiring Web Developer
          </p>

          <div className="hero-reveal hero-stagger-4 hero-copy">
            <p className="hero-lead">
              I build practical, database-driven web systems while continuously developing my skills in modern web technologies.
            </p>
            <p className="hero-supporting">
              Currently exploring modern web development with React, Vite, and Supabase while building on my experience with PHP, MySQL, JavaScript, HTML, and CSS.
            </p>
          </div>

          <div className="hero-reveal hero-stagger-5 hero-actions">
            <a className="button-base button-primary hero-cta" href="#projects">
              <span>View projects</span>
              <ArrowIcon />
            </a>
            <a className="button-base button-secondary hero-cta" href="#about">
              <span>About me</span>
            </a>
            <a className="hero-tertiary" href="#contact">
              <span>Contact me</span>
              <ArrowIcon />
            </a>
          </div>

          <div className="hero-reveal hero-stagger-6 hero-current">
            <span className="hero-status-dot" aria-hidden="true" />
            <span className="font-technical">Currently learning &amp; building</span>
            <span className="hero-current-divider" aria-hidden="true" />
            <span className="font-technical hero-current-stack">React / Vite / Supabase</span>
          </div>
        </div>

        <div className="hero-reveal hero-stagger-6 hero-visual-wrap">
          <div aria-hidden="true" className="hero-visual-offset" />
          <section aria-labelledby="workspace-title" className="hero-workspace">
            <div aria-hidden="true" className="hero-workspace-frame" />
            <div className="hero-workspace-topbar">
              <p id="workspace-title" className="font-technical hero-workspace-label">Profile / 001</p>
              <p className="font-technical hero-workspace-state">
                <span className="hero-state-dot" aria-hidden="true" />
                Active
              </p>
            </div>

            <div className="hero-workspace-body">
              <div className="hero-identity-mark">
                <img alt="Ross Irvine T. Altamia" className="hero-identity-photo" decoding="async" height="2000" loading="eager" src={profileImage} width="1500" />
              </div>
              <div className="hero-identity-copy">
                <p className="font-technical hero-mini-label">Name</p>
                <h2>Ross Irvine T. Altamia</h2>
                <p className="hero-identity-role">Developer in progress, building with intent.</p>
              </div>
            </div>

            <div className="hero-data-grid">
              {profileDetails.map((detail) => (
                <div key={detail.label} className="hero-data-item">
                  <p className="font-technical hero-mini-label">{detail.label}</p>
                  <p>{detail.value}</p>
                </div>
              ))}
            </div>

            <div className="hero-workspace-bottom">
              <div>
                <p className="font-technical hero-mini-label">Current stack</p>
                <div className="hero-stack-list" aria-label="Current development direction">
                  <span>React</span>
                  <span>Vite</span>
                  <span>Supabase</span>
                </div>
              </div>
              <div className="hero-build-status">
                <p className="font-technical hero-mini-label">Status</p>
                <p><span className="hero-status-dot" aria-hidden="true" /> Learning &amp; building</p>
              </div>
            </div>

            <p className="font-technical hero-foundation-line">PHP / MySQL / JavaScript / HTML / CSS</p>
            <span aria-hidden="true" className="hero-rail hero-rail-top">SYS_01</span>
            <span aria-hidden="true" className="hero-rail hero-rail-bottom">BUILD / 2026</span>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Hero
