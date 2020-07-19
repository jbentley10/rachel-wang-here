/**
 * @file text-block.js
 */
// Import dependencies
import Link from 'next/link'

export default function TextBlock({title, text}) {   

  return (
    <div className={`text-block`}>
      <div className={`text-block__container items-center md:justify-between mt-16 mb-16 md:mb-12 px-10 md:px-12`}>
        <h1 className={`text-block__heading text-6xl md:text-7xl pb-10`}>
          {title}
        </h1>
        <p className={`text-block__body mb-10 w-3/4 md:w-full`}>
          {text}
        </p>
        <div className={`text-block__image-container`}>
          <img src="../static/PNG/rachel.png" />
        </div> 
      </div> 
    </div>
  )
}
