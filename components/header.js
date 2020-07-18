/**
 * @file header.js
 */
// Import dependencies
import Link from 'next/link'
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'

export default function Header() {  
  function showSettings (event) {
    event.preventDefault();    
  }

  return (
    <div className={`navigation`}>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 px-12">
        <Link href="/">
          <a className="hover:underline">Logo</a>
        </Link>        
      </h2>

      {/* Mobile Navigation */}
      <Menu>        
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="blog" className="menu-item" href="/blog">Blog</a>
        <a id="free-resources" className="menu-item" href="/free-resources">Free Resources</a>
        <a id="shop" className="menu-item" href="/shop">Shop</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>

      {/* Desktop Navigation */}
      <div className={`navigation__links-container md:py-8 px-12 hidden md:inline`}>
        <div className={`navigation__links`}>
          <ul className={`navigation__link-list  md:flex text-3xl md:text-center md:w-full`}>
            <li className={`navigation__link md:flex-initial md:py-4 md:pr-8`}>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-8`}>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-8`}>
              <Link href="/">
                <a>Free Resources</a>
              </Link>
            </li>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-8`}>
              <Link href="/">
                <a>Shop</a>
              </Link>
            </li>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-8`}>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
