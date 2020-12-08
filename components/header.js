/**
 * @file header.js
 */
// Import dependencies
import Link from 'next/link'
import Image from 'next/image';
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
    <div className={`navigation flex bg-white relative z-20 md:block md:text-center md:py-24 align-middle`}>
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
        <a id="practice" className="menu-item py-6 font-raleway text-3xl" href="/practice">Practice</a>
        <a id="resources" className="menu-item py-6 font-raleway text-3xl" href="/resources">Resources</a>
        <a id="blog" className="menu-item py-6 font-raleway text-3xl" href="/blog">Blog</a>
        <a id="contact" className="menu-item py-6 font-raleway text-3xl" href="/contact">Contact</a>
      </Menu>
      <Image quality={100} width={128} height={76} id="image-text-split__image" alt={`Rachel Wang Here logo`} src={"/logo.png"} loading="lazy" />        

      {/* Desktop Navigation */}
      <div className={`navigation__links-container md:py-8 px-12 hidden md:inline`}>
        <div className={`navigation__links md:inline-block`}>
          <ul className={`navigation__link-list  md:flex md:text-xl lg:text-3xl md:text-center md:w-full`}>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-8 lg:px-16`}>
              <Link href="/about">
                <a className={`font-barlow`}>About</a>
              </Link>
            </li>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-8 lg:px-16`}>
              <Link href="/practice">
                <a className={`font-barlow`}>Practice</a>
              </Link>
            </li>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-8 lg:px-16`}>
              <Link href="/resources">
                <a className={`font-barlow`}>Resources</a>
              </Link>
            </li>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-8 lg:px-16`}>
              <Link href="/blog">
                <a className={`font-barlow`}>Blog</a>
              </Link>
            </li>
            <li className={`navigation__link md:flex-initial md:py-4 md:px-8 lg:px-16`}>
              <Link href="/contact">
                <a className={`font-barlow`}>Contact</a>
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
