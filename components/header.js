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

  const linkStyles = `font-barlow text-link text-link-color hover:text-purple transition-all`;
  const mobileLinkStyles = `py-6 text-link-color text-h3 hover:text-purple`;

  return (
    <div className={`navigation bg-white relative z-30 md:text-center md:py-16 align-middle w-full`}>
      {/* Mobile Navigation */}
      <div className={`flex align-middle py-8 md:hidden`}>
        <div className={`menu-container w-7/12 flex-initial`}>
          <Menu
            left
            noOverlay        
            onStateChange={handleOnMenuStateChange}
            isOpen={ isMenuOpen }
            className={ menuClass + `flex-initial md:hidden` }
            htmlClassName=""
            bodyClassName=""
            burgerButtonClassName={ "w-12 mr-24 h-full md:hidden" }
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
            <ul className={`block`}>
              <li className={mobileLinkStyles}><Link href="/about"><a id="about" className="menu-item">About</a></Link></li>
              <li className={mobileLinkStyles}><Link href="/practice"><a id="practice" className="menu-item">Practice</a></Link></li>
              <li className={mobileLinkStyles}><Link href="/resources"><a id="resources" className="menu-item">Resources</a></Link></li>
              <li className={mobileLinkStyles}><Link href="/blog"><a id="blog" className="menu-item">Blog</a></Link></li>
              <li className={mobileLinkStyles}><Link href="/contact"><a id="contact" className="menu-item">Contact</a></Link></li>
            </ul>
          </Menu>
        </div>
        <div className={`logo-container w-5/12 flex-inital`}>
          <Link href="/">
            <Image 
              quality={100} 
              width={200} 
              height={100} 
              id="image-text-split__image" 
              className={`inline-grid`} 
              alt={`Rachel Wang Here logo`} 
              src={"/logo.png"} 
              loading="lazy" 
            />
          </Link>
        </div>
      </div>     

      {/* Desktop Navigation */}
      <div className={`hidden md:flex px-32`}>
        <div className={`image-container w-3/12`}>
          <Image 
            quality={100} 
            width={200} 
            height={100} 
            id="image-text-split__image" 
            alt={`Rachel Wang Here logo`} 
            src={"/logo.png"} 
            loading="lazy" 
          />
        </div>
        <div className={`navigation__links-container align-bottom w-9/12 md:py-8`}>
          <div className={`navigation__links md:inline-block`}>
            <ul className={`navigation__link-list md:flex md:text-30px md:text-center md:w-full`}>
              <li className={`navigation__link md:flex-initial md:py-4 md:px-8 lg:px-5`}>
                <Link href="/about">
                  <a className={linkStyles}>About</a>
                </Link>
              </li>
              <li className={`navigation__link md:flex-initial md:py-4 md:px-8 lg:px-5`}>
                <Link href="/practice">
                  <a className={linkStyles}>Practice</a>
                </Link>
              </li>
              <li className={`navigation__link md:flex-initial md:py-4 md:px-8 lg:px-5`}>
                <Link href="/resources">
                  <a className={linkStyles}>Resources</a>
                </Link>
              </li>
              <li className={`navigation__link md:flex-initial md:py-4 md:px-8 lg:px-5`}>
                <Link href="/blog">
                  <a className={linkStyles}>Blog</a>
                </Link>
              </li>
              <li className={`navigation__link md:flex-initial md:py-4 md:px-8 lg:px-5`}>
                <Link href="/contact">
                  <a className={linkStyles}>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{` 
         
      `}</style>
    </div>
  )
}
