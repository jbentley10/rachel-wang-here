/**
 * @file image-text-5050-split-right.js
 */

// Import dependencies
import Image from 'next/image';

// Import components
import Button from './button';

export default function ImageText5050SplitRight({ heading, text, image, buttonText, buttonLink, buttonColor }) {
  return (
    <section className="image-text-split align-center my-32 sm:block lg:flex">
      <div className={`image-text-split__left-container sm:w-full lg:w-1/2 text-left lg:flex-initial mr-32`}>
        <div className={`image-text-split__image-container text-center m-auto md:m-0`}>
          <Image
            layout="intrinsic"
            width={450}
            height={450}
            src={image}
            alt={`Rachel doing a handstand`}
          />
        </div>
      </div>
      <div className={`image-text-split__right-container sm:w-full lg:w-3/4 text-left lg:flex-initial p-12 md:py-0 md:pl-24 md:pr-32 sm:mt-10 lg:mt-0`}>
        <h2 className={`image-text-split__heading text-h2 font-rylan text-left text-text-color leading-tight pb-8`}>
          {heading}
        </h2>
        <p className={`text-paragraph leading-normal font-barlow w-3/4`}>
          {text}
        </p>
        <Button 
          color={buttonColor}
          href={buttonLink}
          text={buttonText}
          className={`mt-12`}
        />
      </div>
      <style jsx>{`        
        .highlighted-text {
          background: linear-gradient(180deg, rgba(255,255,255,0) 45%, #F4C06F 45%);
          display: inline;
        }
      `}</style>
    </section>
  )
}
