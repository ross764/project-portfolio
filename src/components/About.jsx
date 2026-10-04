import profileImage from '../assets/images/profile/profile.jpg'

const aboutDetails = [
  { label: 'Education', value: 'BS Information Technology' },
  { label: 'School', value: 'EARIST Cavite' },
  { label: 'Current level', value: '4th Year' },
  { label: 'Focus', value: 'Web Development' },
  { label: 'Location', value: 'GMA, Cavite' },
]

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="about-section">
      <div className="content-container-wide about-layout">
        <div className="about-heading">
          <p className="font-technical section-eyebrow">About / 01</p>
          <h2 id="about-title">Beyond the interface.</h2>
          <p className="about-heading-note">Learning by building, improving through practice.</p>
        </div>

        <figure className="about-profile-visual" aria-label="Profile photo of Ross Irvine T. Altamia" data-image-slot="profile">
          <img alt="Ross Irvine T. Altamia" className="about-profile-image" decoding="async" height="2000" loading="eager" src={profileImage} width="1500" />
          <div aria-hidden="true" className="about-image-frame" />
          <div aria-hidden="true" className="about-image-corner about-image-corner-top" />
          <div aria-hidden="true" className="about-image-corner about-image-corner-bottom" />
          <figcaption aria-hidden="true" className="font-technical">Ross Altamia / profile image</figcaption>
        </figure>

        <div className="about-copy">
          <div className="about-prose">
            <p>
              I&apos;m a fourth-year Bachelor of Science in Information Technology student at EARIST Cavite with a strong interest in web development.
            </p>
            <p>
              I enjoy creating web-based systems and learning how technology can be used to solve practical, real-world problems.
            </p>
            <p>
              Through academic and personal projects, I&apos;ve gained hands-on experience with PHP, MySQL, JavaScript, HTML, CSS, React, Vite, Tailwind CSS, and Supabase.
            </p>
            <p>
              I&apos;m continuously improving my programming, problem-solving, interface design, database, and web-development skills as I prepare for a future career in the IT industry.
            </p>
          </div>

          <dl className="about-details">
            {aboutDetails.map((detail) => (
              <div key={detail.label} className="about-detail">
                <dt className="font-technical">{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
