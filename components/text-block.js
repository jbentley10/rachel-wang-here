/**
 * @file text-block.js
 */
// Import dependencies
import Link from 'next/link'

export default function TextBlock() {   

  return (
    <div className={`text-block flex-initial md:w-7/12`}>
      <div className={`text-block__container items-center md:justify-between mt-16 mb-16 md:mb-12 px-10 md:px-12`}>
        <h1 className={`text-block__heading text-6xl md:text-7xl pb-10`}>
          Page Title
        </h1>
        <p className={`text-block__body mb-10 w-3/4 md:w-full`}>
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Phasellus ultricies ultricies 
          augue eu feugiat. Orci varius natoque 
          penatibus et magnis dis parturient montes, 
          nascetur ridiculus mus. Sed vel lectus arcu. 

          Vestibulum ante ipsum primis in faucibus 
          orci luctus et ultrices posuere cubilia curae; 
          Duis eleifend non lorem vel pulvinar. Proin 
          in pretium nisi. 

          In mollis, elit tristique pretium pharetra, 
          tortor ullamcorper odio. Suspendisse 
          posuere massa quis ipsum egestas, a 
          ullamcorper libero faucibus.
        </p>
        <div className={`text-block__image-container`}>
          <img src="../static/PNG/rachel.png" />
        </div> 
      </div> 
    </div>
  )
}
