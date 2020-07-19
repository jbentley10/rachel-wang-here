/**
 * @file footer.js
 */
// Import dependencies
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={`footer bg-accent-1 border-t border-accent-2`}>
      <div className={`footer__form-social-container bg-gray-500 align-left sm:px-6 md:px-12 py-12 md:flex`}>
        <div className={`footer__form-container w-full md:flex-initial px-12`}>
          <form className={`footer__subscribe-form w-full`}>
            <h2 className={`footer__subscribe-heading text-4xl`}>Subscribe</h2>
            <div className={`footer__input-fields my-6`}>
              <input className={`footer__name-input my-3 px-24 py-2`} placholder={"Name"} /><br />
              <input className={`footer__email-input my-3 px-24 py-2`} placholder={"Email"} /><br />
              <input className={`footer__cookie-checkbox my-2 mr-4`} type={"checkbox"} /><label htmlFor={"checkbox"}>Accept Cookies</label>
            </div>
            <button type="submit" className={`footer__subscribe-button uppercase bg-white px-24 py-4`}>
              <strong>Join Now</strong>
            </button>
          </form>
        </div>
        <div className={`footer__social-media-container md:flex-initial px-12 pt-10 md:pt-0`}>
          <h2 className={`footer__social-media-heading text-4xl`}>
            Follow @RachelWangHere
          </h2>
          <ul>
            <li>
              <Link href="/">
                <a className={`footer__instagram-link`}>Instagram</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={`footer__pinterest-link`}>Pinterest</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>    
      <div className={`footer__links-container bg-gray-500 md:py-8 px-12`}>
        <div className={`footer__links`}>
          <ul className={`footer__link-list md:flex text-3xl md:text-center md:w-full`}>
            <li className={`footer__link md:flex-initial py-4 md:px-8`}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className={`footer__link md:flex-initial py-4 md:px-8`}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className={`footer__link md:flex-initial py-4 md:px-8`}>
              <Link href="/free-resources">
                <a>Free Resources</a>
              </Link>
            </li>
            <li className={`footer__link md:flex-initial py-4 md:px-8`}>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>
            <li className={`footer__link md:flex-initial py-4 md:px-8`}>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`footer__copyright-container bg-gray-500 md:text-2xl text-center pb-12 pt-4`}>
        <span>Copyright 2020 Rachel Wang</span>
      </div>      
    </footer>
  )
}
