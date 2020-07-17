/**
 * @file simple-cta.js
 */
// Import dependencies
import Link from 'next/link'

export default function SimpleCTA() {
  return (
    <section className="simple-cta text-center align-center mt-8 mb-12 px-12">
      <div className={`simple-cta__heading-container pb-4 text-center text-3xl`}>
        <h2 className={`mb-8 text-6xl md:text-7xl font-bold`}>Studio Membership</h2>
      </div>

      <div className={`simple-cta__body-container w-full`}>
        <div className={`simplme-cta__text-container mt-4 mb-10`}>
          <h4 className={`simple-cta__subheading text-4xl pb-2`}>Looking for more?</h4>
          <p className={`simple-cta__text text-base`}>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Phasellus ultricies ultricies 
            augue eu feugiat. <br />
            <Link href="/">
              <strong>Read More</strong>
            </Link>
          </p>
        </div>
        <Link href="/">
          <a className={`simple-cta__button uppercase text-center px-10 py-4 bg-gray-400 text-black inline-block`}>
            <strong>Register Now</strong>
          </a>
        </Link>
      </div>
      
    </section>
  )
}
