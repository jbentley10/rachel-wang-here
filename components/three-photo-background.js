/**
 * @file three-button-bade.js
 */

// Import dependencies
import Image from 'next/image';
import Link from 'next/link';

// Import components
import Button from './button';

export default function ThreePhotoBackground({heading, subheading, body, button, images}) {
  return (
    <section className="three-photo-background bg-blob-background bg-cover py-12 px-32">
      <h3 className={`text-h3 font-rylan text-center pb-16`}>{heading}</h3>
      <div className={`p-12`}>
        <h2 className={`text-h2 font-rylan text-center pb-6`}>{subheading}</h2>
        <p className={`text-paragraph text-text-color font-barlow w-9/12 text-left m-auto mb-16`}>{body}</p>
        <Button
          className={`w-7/12 m-auto`}
          color={button.color}
          href={button.href}
          text={button.text}
        />
      </div>
      
      <div className={`flex`}>
        {images.map((image, index) => {
          return (
            <div className={`mr-8 m-auto`}>
              <div className={`image--${index} bg-image--${index} h-24 w-full bg-cover`}>
                <h5 className={`text-h5 font-barlow text-center`}>{image.heading}</h5>
              </div>
              <p className={`text-paragraph font-barlow`}>{image.subtext}</p>
              <Button
                text={image.buttonText}
                href={image.buttonLink}
                color={image.buttonColor}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
