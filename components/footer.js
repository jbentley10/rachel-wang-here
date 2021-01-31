/**
 * @file footer.js
 */
// Import dependencies
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

// Import components
import Button from './button';

export default function Footer({heading, posts, subheading, subtext, button}) {
  const iconClasses = `sm:w-1/3 md:w-12 cursor-pointer text-paragraph text-text-color hover:text-purple`;
  const linkClasses = `pr-4 cursor-pointer hover:text-purple`;

  return (
    <footer className={`footer`}>
      <div className={`bg-yellow w-full pt-12 px-12 md:px-24 lg:px-32 xl:px-64`}>
        <h2 className={`text-h2 font-rylan text-text-color text-center pb-8`}>{heading}</h2>
        <div className={`instagram-posts-container flex mb-12`}>
          {posts.map(( post ) => (
            <div key={Math.random()} className={`w-full md:w-1/2 m-auto cursor-pointer pr-4 md:pr-16 mx-0`}>
              <a href={`https:${post.link}`}>
                <img src={`https:` + post.image} />
              </a>
            </div>
          ))}
        </div>
        <div className={`inline-block md:flex pb-12`}>
          <div className={`md:w-4/12 pr-12`}>
            <h2 className={`text-h3 font-rylan text-text-color pb-4 md:pb-0`}>{subheading}</h2>
          </div>
          <div className={`md:w-5/12`}>
            <p className={`w-3/4 text-paragraph font-barlow text-text-color pb-12 md:pb-0`}>{subtext}</p>
          </div>
          <div className={`w-full md:w-3/12`}>
            <Button 
              color={button.color}
              text={button.text}
              href={button.href}
              onClick={button.onClick}
              className={`w-full`}
            />
          </div>
        </div>
      </div>
      <div className={`footer-credits block xl:flex bg-yellow-transparent px-12 md:px-24 lg:px-32 xl:px-64 py-12`}>
        <p className={`text-text-color font-barlow text-footer font-light text-center md:text-left pb-4 md:pb-8 xl:pb-0`}>Copyright 2020 Rachel Wang Here</p>
        <ul className={`block md:flex text-footer m-auto text-text-color font-barlow font-normal pb-4 md:pb-8 xl:pb-0`}>
          <Link href={`/`}><li className={linkClasses}>Home</li></Link>
          <Link href={`/contact`}><li className={linkClasses}>Contact</li></Link>
          <Link href={`/privacy-policy`}><li className={linkClasses}>Privacy Policy</li></Link>
          <Link href={`/terms`}><li className={linkClasses}>Terms of Service</li></Link>
          <Link href={`/disclaimer`}><li className={linkClasses}>Disclaimer</li></Link>
          <Link href={`/site-credits`}><li className={linkClasses}>Site Credits</li></Link>
        </ul>
        <ul className={`flex align-middle text-center md:text-left mt-8 md:mt-0`}>
          <Link href={`https://www.facebook.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon className={`h-6`} icon={faFacebook} /></li></Link>
          <Link href={`https://www.instagram.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon className={`h-6`} icon={faInstagram} /></li></Link>
          <Link href={`https://www.pinterest.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon className={`h-6`} icon={faPinterest} /></li></Link>
          <Link href={`https://www.youtube.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon className={`h-6`} icon={faYoutube} /></li></Link>
          <Link href={`https://www.twitter.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon className={`h-6`} icon={faTwitter} /></li></Link>
        </ul>
      </div>
    </footer>
  )
}
