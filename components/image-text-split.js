/**
 * @file image-text-split.js
 */

// Import dependencies
import Image from 'next/image';

// Import components
import Button from './button';

export default function ImageTextSplit() {
  return (
    <section className="image-text-split align-center my-32 flex">
      <div className={`image-text-split__left-container w-1/2 text-left lg:flex-initial`}>
        <h1 className={`image-text-split__heading text-h1 font-rylan text-left text-text-color pl-32 leading-tight`}>
          Hey there,<br /> 
          &nbsp;&nbsp;I'm Rachel.
        </h1>
        <div className={`image-text-split__image-container`}>
          <Image
            layout="intrinsic"
            width={960}
            height={953}
            src={'/rachel-handstand.png'}
            alt={`Rachel doing a handstand`}
          />
        </div>
      </div>
      <div className={`image-text-split__right-container w-1/2 text-left lg:flex-initial pl-24 pr-32`}>
        <h2 className={`image-text-split__heading text-h2 font-rylan text-left text-link-color leading-tight z-20 relative`}>
          I believe in pursuing a
          life that you want by
          transforming your entire 
          being, 
          <br/>inside and out.  
        </h2>
        <div className={`highlight bg-yellow-highlight z-10 relative h-8 w-8/12 -mt-6`}></div>
        <br />
        <p className={`text-text-color font-barlow text-paragraph`}>
          I teach people how to recognize their
          unlimited potential by using the yoga practice and
          science.  Around here, I share my insights and connect
          you with tools to cultivate a life of purpose with your
          body, mind, and heart. 
        </p>
        <br />
        <p><strong className={`text-text-color font-barlow`}>
          Ready to optimize the way you move through 
          the world?
        </strong></p>
        <br />
        
        <p className={`text-text-color font-barlow text-paragraph`}>
          Let’s get moving and being more human.
        </p>
        <Button 
          color={`brown`}
          href={`/`}
          text={`Learn More About Me`}
          className={`mt-12`}
        />
      </div>
    </section>
  )
}
