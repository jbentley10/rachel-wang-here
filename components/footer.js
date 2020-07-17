/**
 * @file footer.js
 */
// Import dependencies
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={`footer bg-accent-1 border-t border-accent-2`}>
      <div className={`footer__form-social-container bg-gray-500 align-left sm:px-6 md:px-12 py-12 md:flex`}>
        <div className={`footer__form-container w-full md:flex-initial`}>
          <form className={`footer__subscribe-form w-full`}>
            <h2 className={`footer__subscribe-heading text-4xl`}>Subscribe</h2>
            <div className={`footer__input-fields my-6`}>
              <input className={`footer__name-input my-1 w-full md:w-1/4 py-2 px-4 my-2`} placholder={"Name"} /><br />
              <input className={`footer__email-input my-1 w-full md:w-1/4 py-2 px-4 my-2`} placholder={"Email"} /><br />
              <input className={`footer__cookie-checkbox my-2 mr-4`} type={"checkbox"} /><label for={"checkbox"}>Accept Cookies</label>
            </div>
            <button type="submit" className={`footer__subscribe-button uppercase bg-white px-24 py-4`}>
              <strong>Join Now</strong>
            </button>
          </form>
        </div>
        <div className={`footer__social-media-container md:flex-initial`}>
          <h2 className={`footer__social-media-heading text-xl`}>
            Follow 
            <Link href="/"><a>@RachelWangHere</a></Link>
          </h2>
        </div>
      </div>    
      <div className={`footer__links-container bg-gray-500 md:py-8`}>
        <div className={`footer__links`}>
          <ul className={`footer__link-list md:flex md:text-3xl md:text-center md:w-full`}>
            <li className={`footer__link md:flex-initial md:px-8`}>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li className={`footer__link md:flex-initial md:px-8`}>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li className={`footer__link md:flex-initial md:px-8`}>
              <Link href="/">
                <a>Free Resources</a>
              </Link>
            </li>
            <li className={`footer__link md:flex-initial md:px-8`}>
              <Link href="/">
                <a>Shop</a>
              </Link>
            </li>
            <li className={`footer__link md:flex-initial md:px-8`}>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`footer__copyright-container bg-gray-500 md:text-2xl text-center md:pt-4 md:pb-12`}>
        <span>Copyright 2020 Rachel Wang</span>
      </div>      
    </footer>
  )
}
