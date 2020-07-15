/**
 * @file footer.js
 */
// Import dependencies
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={`footer bg-accent-1 border-t border-accent-2`}>
      <div className={`footer__container bg-gray-500 align-left px-6 py-12`}>
        <form className={`footer__subscribe-form`}>
          <h2 className={`footer__subscribe-heading text-3xl`}>Subscribe</h2>
          <div className={`footer__input-fields my-6`}>
            <input className={`footer__name-input my-1 w-full py-1 my-2`} placholder={"Name"} /><br />
            <input className={`footer__name-input my-1 w-full py-1 my-2`} placholder={"Email"} /><br />
            <input className={`footer__cookie-checkbox my-2 mr-4`} type={"checkbox"} /><label for={"checkbox"}>Accept Cookies</label>
          </div>
          <button type="submit" className={`footer__subscribe-button uppercase bg-white w-full px-16 py-6`}>
            <strong>Join Now</strong>
          </button>
        </form>
        <div className={`footer__social-media-container my-12`}>
          <h2 className={`footer__social-media-heading text-xl`}>
            Follow 
            <Link href="/"><a>@RachelWangHere</a></Link>
          </h2>
        </div>
        <div className={`footer__links my-12`}>
          <ul className={`footer__link-list`}>
            <li className={`footer__link`}>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li className={`footer__link`}>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li className={`footer__link`}>
              <Link href="/">
                <a>Free Resources</a>
              </Link>
            </li>
            <li className={`footer__link`}>
              <Link href="/">
                <a>Shop</a>
              </Link>
            </li>
            <li className={`footer__link`}>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={`footer__copyright-container`}>
          <span>Copyright 2020 Rachel Wang</span>
        </div>
      </div>
    </footer>
  )
}
