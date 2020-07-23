/**
 * @file header.js
 */
// Import dependencies
import Link from 'next/link'
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { animated, useSpring } from 'react-spring'
import _JSXStyle from "styled-jsx/style";

export default function Header() {  
  const [isMenuOpen, setIsMenuOpen ] = useState(false)
  const [headerHeight, setHeaderHeight ] = useState(0)
  const menuClass = isMenuOpen ? "menu-open" : "menu-closed"

  const slideInAnimation = useSpring({
    marginLeft: isMenuOpen ? '0px' : '5px'
  })

  const handleOnMenuStateChange = (menuState) => {
    setIsMenuOpen(menuState.isOpen)
  }

  const handleCloseMenuOnClick = (e) => {
    e.preventDefault()
    const element = document.querySelector(e.target.hash)
    const top = getScrollPosition(element)

    window.scrollTo({top})
    setIsMenuOpen(false)
  }

  function showSettings (event) {
    event.preventDefault();    
  }

  return (
    <div className={`navigation flex md:block md:text-center md:py-24`}>
      {/* Mobile Navigation */}
      <Menu
        left
        noOverlay        
        onStateChange={handleOnMenuStateChange}
        isOpen={ isMenuOpen }
        className={ menuClass + `flex-initial md:hidden` }
        htmlClassName=""
        bodyClassName=""
        burgerButtonClassName={ "w-12 h-full md:hidden" }
        burgerBarClassName={ `md:hidden` }
        crossButtonClassName={ `md:hidden` }
        crossClassName={ `` }
        menuClassName={ `md:hidden` }
        morphShapeClassName={ `` }
        itemListClassName={ `` }
        overlayClassName={ "" }
        customBurgerIcon={ <img src="../static/SVG/menu-burger.svg" /> }
        customCrossIcon={ <img src="../static/SVG/menu-cross.svg" /> }
      >        
        <a id="about" className="menu-item py-6 font-raleway text-3xl" href="/about">About</a>
        <a id="blog" className="menu-item py-6 font-raleway text-3xl" href="/blog">Blog</a>
        <a id="free-resources" className="menu-item py-6 font-raleway text-3xl" href="/free-resources">Free Resources</a>
        <a id="shop" className="menu-item py-6 font-raleway text-3xl" href="/shop">Shop</a>
        <a id="contact" className="menu-item py-6 font-raleway text-3xl" href="/contact">Contact</a>
      </Menu>
      <h2 className="text-2xl md:text-8xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-10 px-12 flex-initial md:inline-block md:text-center">
        <Link href="/">
          <div>
            <a className="cursor-pointer font-sophillia">RachelWang</a>
            <a className="cursor-pointer font-raleway font-light pl-2">here</a>
          </div>
        </Link>        
      </h2>

      {/* Desktop Navigation */}
      <div className={`navigation__links-container md:py-8 px-12 hidden md:inline`}>
        <div className={`navigation__links md:inline-block`}>
          <ul className={`navigation__link-list  md:flex text-3xl md:text-center md:w-full`}>
            <li className={`navigation__link md:flex-initial md:py-4 md:pr-16`}>
              <Link href="/about">
                <a className={`font-raleway`}>About</a>
              </Link>
            </li>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-16`}>
              <Link href="/blog">
                <a className={`font-raleway`}>Blog</a>
              </Link>
            </li>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-16`}>
              <Link href="/free-resources">
                <a className={`font-raleway`}>Free Resources</a>
              </Link>
            </li>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-16`}>
              <Link href="/shop">
                <a className={`font-raleway`}>Shop</a>
              </Link>
            </li>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-16`}>
              <Link href="/contact">
                <a className={`font-raleway`}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{` 
         
      `}</style>
    </div>
  )
}
