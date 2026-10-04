import basketballImage from '../assets/images/profile/basketball.jpg'
import cookingImage from '../assets/images/profile/cooking.jpg'

const interests = [
  {
    id: 'basketball',
    index: '01',
    label: 'Basketball',
    copy: 'Basketball is one of the activities I enjoy outside technology. It gives me a way to stay active, compete, and enjoy the game.',
  },
  {
    id: 'cooking',
    index: '02',
    label: 'Cooking',
    copy: 'I also enjoy cooking and experimenting with food. It gives me another way to be creative, patient, and learn through practice.',
  },
]

function InterestPhoto({ id, label, image, alt }) {
  return (
    <figure className={`beyond-image beyond-image-${id}`} aria-label={`${label} photo`} data-image-slot={id}>
      <img alt={alt} className="beyond-image-photo" decoding="async" height={id === 'basketball' ? 960 : 2000} loading="lazy" src={image} width={id === 'basketball' ? 960 : 1500} />
      <div aria-hidden="true" className="beyond-image-frame" />
      <figcaption aria-hidden="true" className="font-technical">{label} / personal</figcaption>
    </figure>
  )
}

function BeyondCode() {
  return (
    <section id="beyond-code" aria-labelledby="beyond-code-title" className="beyond-section">
      <div className="content-container-wide">
        <div className="beyond-heading">
          <div>
            <p className="font-technical section-eyebrow">Beyond the code / 02</p>
            <h2 id="beyond-code-title">Beyond the code</h2>
          </div>
          <p>Outside development, I enjoy activities that keep me active, creative, and continuously learning.</p>
        </div>

        <div className="beyond-features">
          {interests.map((interest) => (
            <article key={interest.id} className={`beyond-feature beyond-feature-${interest.id}`}>
              <InterestPhoto
                alt={interest.id === 'basketball' ? 'Ross Altamia playing basketball' : 'A seafood dish prepared by Ross Altamia'}
                id={interest.id}
                image={interest.id === 'basketball' ? basketballImage : cookingImage}
                label={interest.label}
              />
              <div className="beyond-feature-copy">
                <p className="font-technical beyond-feature-index">{interest.index} / personal interest</p>
                <h3>{interest.label}</h3>
                <p>{interest.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeyondCode
