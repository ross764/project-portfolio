const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/ross764' },
  { label: 'Instagram', href: 'https://www.instagram.com/rossaltamia/' },
  { label: 'Facebook', href: 'https://www.facebook.com/ross.altamia' },
]

function Footer() {
  const handleBackToTop = (event) => {
    event.preventDefault()
    const homeSection = document.getElementById('home')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    homeSection?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
    window.history.replaceState(null, '', '#home')
  }

  return (
    <footer className="site-footer">
      <div className="content-container-wide">
        <div className="footer-top">
          <div>
            <p className="font-technical footer-kicker">Ross Irvine T. Altamia</p>
            <p className="footer-role">IT Student / Aspiring Web Developer</p>
          </div>
          <nav aria-label="Footer social links" className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.label} aria-label={`Open Ross Irvine T. Altamia's ${link.label} profile in a new tab`} href={link.href} rel="noopener noreferrer" target="_blank">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="font-technical footer-technology-note">Built with React / Vite / Tailwind CSS</p>
          <p className="font-technical footer-copyright">&copy; 2026 Ross Irvine T. Altamia</p>
          <a aria-label="Back to top" className="font-technical footer-back-to-top" href="#home" onClick={handleBackToTop}>Back to top <span aria-hidden="true">&uarr;</span></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
