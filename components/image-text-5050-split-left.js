/**
 * @file image-text-5050-split-left.js
 */

// Import dependencies
import Image from 'next/image';

// Import components
import Button from './button';

export default function ImageText5050SplitLeft({ heading, text, image, alt, useImgTag, buttonText, buttonLink, buttonColor }) {
  return (
    <section className="image-text-split align-center my-32 sm:block lg:flex">
      <div className={`image-text-split__left-container sm:w-full lg:w-10/12 md:mr-2 text-left lg:flex-initial`}>
        <h2 className={`image-text-split__heading text-h2 font-rylan text-left text-text-color leading-tight pb-8`}>
          {heading}
        </h2>
        <div className={`text-paragraph leading-normal font-barlow w-3/4`}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        <Button 
          color={buttonColor}
          href={buttonLink}
          text={buttonText}
          className={`mt-12`}
        />
      </div>
      <div className={`image-text-split__right-container sm:w-full lg:w-10/12 text-left lg:flex-initial p-12 md:py-0 md:pl-24 md:pr-32 sm:mt-10 lg:mt-0`}>
        {(image && !useImgTag) ? 
          <div className={`image-text-split__image-container text-center m-auto md:m-0`}>
            <img
              src={`${image}`}
              alt={alt}
            />
          </div>
          :
          <div className={`image-text-split__image-container text-center m-auto md:m-0`}>
            <img
              src={image}
              alt={alt}
            />
          </div>
        }
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
