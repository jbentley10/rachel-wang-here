/**
 * @file simple-cta.js
 */
/**
 * @file simple-cta.js
 */
 // Import dependencies
import Link from 'next/link'

export default function SimpleCTA() {
  return (
    <section className="simple-cta text-center align-center mt-8 mb-12 px-12 md:px-64 md:py-32">
      <div className={`simple-cta__heading-container pb-4 text-center text-3xl`}>
        <h2 className={`text-6xl md:text-7xl font-raleway font-light`}>Studio Membership</h2>
      </div>

      <div className={`simple-cta__body-container w-full md:flex`}>
        <div className={`simplme-cta__text-container mt-4 mb-10 md:pt-32 md:w-1/2 md:flex-initial`}>
          <h4 className={`simple-cta__subheading text-4xl md:text-6xl pb-2 font-raleway md:text-left`}>Looking for more?</h4>
          <p className={`simple-cta__text text-base md:text-2xl md:w-full md:text-left font-raleway pb-10 md:pb-16`}>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Phasellus ultricies ultricies 
            augue eu feugiat. <br />
          </p>
          <Link href="/">
            <a className={`simple-cta__button uppercase w-full md:block md:w-full text-center px-24 py-4 md:px-10 bg-sedona rounded text-white font-raleway font-bold inline-block`}>
              <strong>Register Now</strong>
            </a>
          </Link>
        </div>
        <div className={`simple-cta__image-container mt-4 mb-10 md:w-1/2 md:flex-initial md:flex`}>
          <img className={`w-4/6 md:pl-16 relative md:mb-32 md:flex-initial absolute`} src={`../static/SVG/stand.svg`} />
          <img className={`hidden md:inline relative md:mt-32 md:flex-initial absolute`} src={`../static/SVG/meditate.svg`} />
        </div>
      </div>
      
    </section>
  )
}
