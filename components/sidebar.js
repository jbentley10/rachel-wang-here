/**
 * @file sidebar.js
 */
// Import dependencies
import Link from 'next/link'

export default function Sidebar() {   

  return (
    <div className={`sidebar hidden md:inline md:flex-initial md:w-5/12 md:ml-48`}>
      <div className={`sidebar__social-media-container`}>
        <span>Instagram</span>
        <span>Instagram</span>
        <span>Instagram</span>
        <span>Instagram</span>
        <span>Instagram</span>
      </div>
      <div className={`sidebar__free-resources-cta`}>
        <h2>Get Free Resources!</h2>
        <Link href="/">
          <a>Sign Up</a>
        </Link>
      </div>
      <div className={`sidebar__newsletter-sign-up`}>
        <h2>Sign Up for the Newsletter</h2>
        <input></input>
        <input></input>
        <input></input>
        <Link href="/">
          <a>Join Now</a>
        </Link>
      </div>
      <div className={`sidebar__what-to-read`}>
        <h2>What to Read</h2>
        <ul>
          <li>
            <img />
            <h3>Get Free Resources</h3>
          </li>
          <li>
            <img />
            <h3>Livestream Classes</h3>
          </li>
          <li>
            <img />
            <h3>Join Community</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}
