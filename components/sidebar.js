/**
 * @file sidebar.js
 */
// Import dependencies
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faPinterest,
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import Button from './button';
import SidebarPostPreview from './sidebar-post-preview';

export default function Sidebar({ posts }) {   
  const iconClasses = `w-16 flex-initial pr-8 cursor-pointer text-text-color hover:text-purple`;

  return (
    <div className={`sidebar hidden md:inline md:flex-initial md:w-5/12 md:ml-48`}>
      {/* Social links */}
      <div className={`sidebar__social-media-container flex mb-10`}>
        <ul className={`flex align-middle text-center md:text-left mt-8 md:mt-0`}>
          <Link href={`https://www.instagram.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon icon={faInstagram} /></li></Link>
          <Link href={`https://www.pinterest.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon icon={faPinterest} /></li></Link>
          <Link href={`https://www.youtube.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon icon={faYoutube} /></li></Link>
          <Link href={`https://www.twitter.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon icon={faTwitter} /></li></Link>
        </ul>
      </div>
      <div className={`sidebar__free-resources-cta`}>
        <h2 className={`sidebar__free-resources-cta-heading text-h2 mb-10 font-rylan`}>I'm Rachel Wang</h2>
        <Image
          src={`/rachel-handstand.png`}
          width={200}
          height={100}
        />
        <p className={`text-paragraph pt-8`}>
          I help humans like you overcome 
          habitual movement and mindset 
          patterns that keep you small so you 
          can heal, thrive, and make long 
          lasting changes to live the expansive 
          life you deserve.
        </p>
      </div>
      {/* TODO: Search Bar */}
      {/* Links to blog categories */}
      <div className={`mt-16`}>
        <h2 className={`sidebar__free-resources-cta-heading text-h2 mb-10 font-rylan`}>I Want to Read About</h2>
        <Button 
          href={`/`}
          text={`Yoga and Movement`}
          color={`purple`}
          className={`mb-4`}
        />
        <Button 
          href={`/`}
          text={`Mindset`}
          color={`brown`}
          className={`mb-4`}
        />
        <Button 
          href={`/`}
          text={`Wellness`}
          color={`yellow`}
          className={`mb-4`}
        />
      </div>

      {/* MailChimp sign up */}
      <div className={`my-16`}>
        <h2 className={`sidebar__free-resources-cta-heading text-h2 mb-10 font-rylan`}>Subscribe</h2>
        {/* TODO: MailChimp sign-up */}
        <input type={`text`} placeholder={`First Name`} className={`border-black border-solid mb-4 py-4 px-4`} />
        <input type={`text`} placeholder={`Email Address`} className={`border-black border-solid mb-4 py-4 px-4`} />
        <Button 
          href={`/`}
          text={`Send It`}
          color={`purple`}
          className={`my-4`}
        />
      </div>
      
      {/* Latest Blog Posts */}
      <div className={`my-16`}>
        <h2 className={`sidebar__free-resources-cta-heading text-h2 mb-10 font-rylan`}>Stay Updated</h2>
        {posts.map(({ node }) => (
          <SidebarPostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            slug={node.slug}
          />
        ))}
      </div>
    </div>
  )
}
