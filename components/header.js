/**
 * @file header.js
 */
// Import dependencies
import Link from 'next/link'
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { animated, useSpring } from 'react-spring'

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
    <div className={`navigation flex`}>
      {/* Mobile Navigation */}
      <Menu
        left
        noOverlay        
        onStateChange={handleOnMenuStateChange}
        isOpen={ isMenuOpen }
        className={ menuClass + `flex-initial md:hidden mt-8` }
        htmlClassName=""
        bodyClassName=""
        burgerButtonClassName={ "w-12 h-full md:hidden" }
        burgerBarClassName={ `md:hidden` }
        crossButtonClassName={ `md:hidden` }
        crossClassName={ `` }
        menuClassName={ `md:hidden` }
        morphShapeClassName={ `` }
        itemListClassName={ `` }
        overlayClassName={ "bg-gray-400 opacity-100" }
        customBurgerIcon={ <img src="../static/SVG/menu-burger.svg" /> }
        customCrossIcon={ <img src="../static/SVG/menu-cross.svg" /> }
      >        
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="blog" className="menu-item" href="/blog">Blog</a>
        <a id="free-resources" className="menu-item" href="/free-resources">Free Resources</a>
        <a id="shop" className="menu-item" href="/shop">Shop</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 px-12 flex-initial">
        <Link href="/">
          <a className="hover:underline">Logo</a>
        </Link>        
      </h2>

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
      <style jsx>{` 
         
      `}</style>
    </div>
  )
}
