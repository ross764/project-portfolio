import Reveal from './Reveal'

const contactDirectory = [
  {
    label: 'Email / Primary',
    value: 'rossaltamia@gmail.com',
    href: 'mailto:rossaltamia@gmail.com',
    type: 'email',
    ariaLabel: 'Email Ross Irvine T. Altamia',
  },
  {
    label: 'Developer / GitHub',
    value: 'github.com/ross764',
    href: 'https://github.com/ross764',
    type: 'external',
    ariaLabel: "Open Ross Irvine T. Altamia's GitHub profile in a new tab",
  },
  {
    label: 'Phone / Mobile',
    value: '09944161568',
    href: 'tel:+639944161568',
    type: 'phone',
    ariaLabel: 'Call Ross Irvine T. Altamia',
  },
  {
    label: 'Social / Instagram',
    value: '@rossaltamia',
    href: 'https://www.instagram.com/rossaltamia/',
    type: 'external',
    ariaLabel: "Open Ross Irvine T. Altamia's Instagram profile in a new tab",
  },
  {
    label: 'Social / Facebook',
    value: 'Ross Altamia',
    href: 'https://www.facebook.com/ross.altamia',
    type: 'external',
    ariaLabel: "Open Ross Irvine T. Altamia's Facebook profile in a new tab",
  },
  {
    label: 'Location / Cavite',
    value: 'GMA, Cavite',
    type: 'location',
  },
]

function ContactDirectoryEntry({ entry }) {
  const value = entry.type === 'location' ? (
    <span className="contact-directory-value">{entry.value}</span>
  ) : (
    <a
      aria-label={entry.ariaLabel}
      className="contact-directory-value contact-directory-link"
      href={entry.href}
      rel={entry.type === 'external' ? 'noopener noreferrer' : undefined}
      target={entry.type === 'external' ? '_blank' : undefined}
    >
      <span>{entry.value}</span>
      {entry.type === 'external' ? <span aria-hidden="true" className="contact-external-marker">↗</span> : null}
    </a>
  )

  return (
    <Reveal as="li" className={`contact-directory-entry contact-directory-entry-${entry.type}`} delay={entry.type === 'email' ? 0 : 35}>
      <span className="font-technical contact-directory-label">{entry.label}</span>
      {value}
    </Reveal>
  )
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-section">
      <div className="content-container-wide">
        <div className="contact-layout">
          <div className="contact-intro">
            <p className="font-technical section-eyebrow">Contact / 06</p>
            <h2 id="contact-title">Let&apos;s build something meaningful.</h2>
            <p>I&apos;m continuing to develop my skills in web development and information technology. If you&apos;d like to connect, discuss a project, or talk about technology, feel free to reach out.</p>

            <div className="contact-primary">
              <p className="font-technical contact-primary-label">Direct line / email</p>
              <a aria-label="Email Ross Irvine T. Altamia at rossaltamia@gmail.com" className="contact-email-link" href="mailto:rossaltamia@gmail.com">
                <span>rossaltamia@gmail.com</span>
                <span aria-hidden="true">-&gt;</span>
              </a>
              <a className="button-base button-primary contact-email-cta" href="mailto:rossaltamia@gmail.com">
                Send an email <span aria-hidden="true">-&gt;</span>
              </a>
            </div>

            <p className="font-technical contact-status"><span aria-hidden="true" className="contact-status-dot" />Status / Learning • Building • Connecting</p>
          </div>

          <div className="contact-directory-wrap">
            <p className="font-technical contact-directory-heading">Contact directory / verified channels</p>
            <ul className="contact-directory">
              {contactDirectory.map((entry) => <ContactDirectoryEntry key={entry.label} entry={entry} />)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
