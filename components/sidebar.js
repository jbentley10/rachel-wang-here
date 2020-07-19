/**
 * @file sidebar.js
 */
// Import dependencies
import Link from 'next/link'

export default function Sidebar() {   

  return (
    <div className={`sidebar hidden md:inline md:flex-initial md:w-5/12 md:ml-48`}>
      <div className={`sidebar__social-media-container flex mb-10`}>
        <Link href="/">
          <img className={`w-16 flex-initial pr-8 cursor-pointer`} src='../static/SVG/facebook.svg' />
        </Link>
        <Link href="/">
          <img className={`w-16 flex-initial pr-8 cursor-pointer`} src='../static/SVG/instagram.svg' />
        </Link>
        <Link href="/">
          <img className={`w-16 flex-initial pr-8 cursor-pointer`} src='../static/SVG/pinterest.svg' />
        </Link>
        <Link href="/">
          <img className={`w-16 flex-initial pr-8 cursor-pointer`} src='../static/SVG/twitter.svg' />        
        </Link>        
      </div>
      <div className={`sidebar__free-resources-cta`}>
        <h2 className={`sidebar__free-resources-cta-heading text-3xl mb-10`}>Get Free Resources!</h2>
        <Link href="/">
          <a className={`sidebar__free-resources-cta-button uppercase font-bold bg-gray-400 px-24 py-4 cursor-pointer`}>Sign Up</a>
        </Link>
      </div>
      <div className={`sidebar__newsletter-sign-up mt-16`}>
        <h2 className={`sidebar__newsletter-sign-up-heading text-3xl mb-10`}>Sign Up for the Newsletter</h2>
        
        <Link href="/">
          <a className={`sidebar__newsletter-sign-up-button uppercase font-bold bg-gray-400 px-24 py-4 cursor-pointer`}>Join Now</a>
        </Link>
      </div>
      <div className={`sidebar__what-to-read`}>
        <h2 className={`sidebar__what-to-read-heading text-3xl mt-12`}>What to Read</h2>
        <ul>
          <li className={`sidebar__what-to-read-list-item cursor-pointer`}>
            <img className={`sidebar__what-to-read-image`} />
            <h3 className={`sidebar__what-to-read-item-heading text-xl`}>Get Free Resources</h3>
          </li>
          <li className={`sidebar__what-to-read-list-item cursor-pointer`}>
            <img className={`sidebar__what-to-read-image`} />
            <h3 className={`sidebar__what-to-read-item-heading text-xl`}>Livestream Classes</h3>
          </li>
          <li className={`sidebar__what-to-read-list-item cursor-pointer`}>
            <img className={`sidebar__what-to-read-image`} />
            <h3 className={`sidebar__what-to-read-item-heading text-xl`}>Join Community</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}
