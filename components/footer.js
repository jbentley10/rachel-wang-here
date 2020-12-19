/**
 * @file footer.js
 */
// Import dependencies
import Link from 'next/link';
import Image from 'next/image';
import Button from './button';

export default function Footer({heading, posts, subheading, subtext, button}) {
  return (
    <footer className={`footer bg-orange w-full pt-12`}>
      <h2 className={`text-h2 font-rylan text-text-color text-center pb-8`}>{heading}</h2>
      {posts.map((post, index) => {
        <Link href={post.link}>
          <Image
            src={post.image}
            width={200}
            height={200}
          />
        </Link>
      })}
      <div className={`flex px-16 pb-12`}>
        <h2 className={`text-h3 font-rylan text-text-color`}>{subheading}</h2>
        <p className={`text-paragraph font-barlow text-text-color`}>{subtext}</p>
        <Button 
          color={button.color}
          text={button.text}
          href={button.href}
        />
      </div>
      <div className={`footer-credits flex bg-yellow px-16 py-8`}>
        <p className={`text-text-color font-barlow text-footer`}>Copyright 2020 Rachel Wang Here</p>
        <ul className={`flex text-footer m-auto`}>
          <li className={`pr-4`}>Home</li>
          <li className={`pr-4`}>Contact</li>
          <li className={`pr-4`}>Privacy Policy</li>
          <li className={`pr-4`}>Terms of Service</li>
          <li className={`pr-4`}>Disclaimer</li>
          <li className={`pr-4`}>Site Credits</li>
        </ul>
        <ul className={`flex`}>
          <li>Icon</li>
          <li>Icon</li>
          <li>Icon</li>
          <li>Icon</li>
          <li>Icon</li>
        </ul>
      </div>
    </footer>
  )
}
