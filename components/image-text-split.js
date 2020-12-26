/**
 * @file image-text-split.js
 */

// Import dependencies
import Image from 'next/image';

// Import components
import Button from './button';

export default function ImageTextSplit({ leftHeading, rightHeading, rightBody, rightButtonText, rightButtonLink }) {
  return (
    <section className="image-text-split align-center my-32 sm:block lg:flex">
      <div className={`image-text-split__left-container sm:w-full lg:w-1/2 text-left lg:flex-initial`}>
        <h1 className={`image-text-split__heading text-h1 font-rylan text-left text-text-color pl-32 leading-tight`}>
          {leftHeading}
        </h1>
        <div className={`image-text-split__image-container text-center m-auto md:m-0`}>
          <Image
            layout="intrinsic"
            width={450}
            height={450}
            src={'/rachel-handstand.png'}
            alt={`Rachel doing a handstand`}
          />
        </div>
      </div>
      <div className={`image-text-split__right-container sm:w-full lg:w-1/2 text-left lg:flex-initial p-12 md:py-0 md:pl-24 md:pr-32 sm:mt-10 lg:mt-0`}>
        <h2 className={`image-text-split__heading text-h2 font-rylan text-left text-link-color leading-tight z-20 relative`}>
          {rightHeading}  
        </h2>
        <div className={`highlight bg-yellow-highlight z-10 relative h-8 w-8/12 -mt-6`}></div>
        <br />
        <p className={`text-text-color font-barlow text-paragraph`}>
          <div dangerouslySetInnerHTML={{ __html: rightBody }} />
        </p>
        <Button 
          color={`brown`}
          href={rightButtonLink}
          text={rightButtonText}
          className={`mt-12`}
        />
      </div>
    </section>
  )
}
