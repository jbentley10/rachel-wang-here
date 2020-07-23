/**
 * @file footer.js
 */
// Import dependencies
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={`footer bg-accent-1 border-t border-accent-2`}>
      <div className={`footer__form-social-container bg-neutral-background align-left sm:px-6 md:px-12 py-12 md:flex`}>
        <div className={`footer__form-container w-full md:flex-initial px-12 md:px-64`}>
          <form className={`footer__subscribe-form w-full`}>
            <h2 className={`footer__subscribe-heading text-4xl font-raleway font-light`}>Subscribe</h2>
            <div className={`footer__input-fields my-6`}>
              <input className={`footer__name-input my-3 px-24 py-2`} placholder={"Name"} /><br />
              <input className={`footer__email-input my-3 px-24 py-2`} placholder={"Email"} /><br />
              <input className={`footer__cookie-checkbox my-2 mr-4`} type={"checkbox"} /><label htmlFor={"checkbox"}>Accept Cookies</label>
            </div>
            <button type="submit" className={`footer__subscribe-button uppercase bg-purple font-raleway font-bold text-white px-24 py-4 rounded`}>
              <strong>Join Now</strong>
            </button>
          </form>
        </div>
        <div className={`footer__social-media-container md:flex-initial px-12 pt-10 md:pt-0`}>
          <h2 className={`footer__social-media-heading text-4xl font-raleway font-light`}>
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
      <div className={`footer__links-container bg-neutral-background md:py-8 px-12 md:px-64`}>
        <div className={`footer__links`}>
          <ul className={`footer__link-list md:flex text-3xl md:text-center md:w-full`}>
            <li className={`footer__link md:flex-initial py-1 md:px-8`}>
              <Link href="/about">
                <a className={`font-raleway font-normal text-lg md:text-2xl`}>About</a>
              </Link>
            </li>
            <li className={`footer__link md:flex-initial py-1 md:px-8`}>
              <Link href="/blog">
                <a className={`font-raleway font-normal text-lg md:text-2xl`}>Blog</a>
              </Link>
            </li>
            <li className={`footer__link md:flex-initial py-1 md:px-8`}>
              <Link href="/free-resources">
                <a className={`font-raleway font-normal text-lg md:text-2xl`}>Free Resources</a>
              </Link>
            </li>
            <li className={`footer__link md:flex-initial py-1 md:px-8`}>
              <Link href="/shop">
                <a className={`font-raleway font-normal text-lg md:text-2xl`}>Shop</a>
              </Link>
            </li>
            <li className={`footer__link md:flex-initial py-1 md:px-8`}>
              <Link href="/contact">
                <a className={`font-raleway font-normal text-lg md:text-2xl`}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`footer__copyright-container bg-neutral-background md:text-2xl text-center pb-12 pt-4 md:px-64`}>
        <span className={`font-raleway font-light`}>Copyright 2020 Rachel Wang</span>
      </div>      
    </footer>
  )
}
