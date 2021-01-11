/**
 * @file three-button-bade.js
 */

// Import components
import Button from './button';

export default function ThreePhotoBackground({heading, subheading, body, button, images}) {
  return (
    <section className="three-photo-background md:bg-blob-background bg-cover p-8 md:px-32 md:py-20">
      <h3 className={`text-h3 font-rylan text-center text-text-color`}>{heading}</h3>
      <div className={`p-8 md:p-12`}>
        <h2 className={`text-h2 font-rylan text-center leading-none text-text-color pb-6`}>{subheading}</h2>
        <div className={`text-paragraph leading-normal font-barlow text-text-color w-full md:w-9/12 text-left m-auto mb-16`}>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
        <Button
          className={`w-full md:w-4/12 m-auto`}
          color={button.color}
          href={button.href}
          text={button.text}
        />
      </div>
      
      <div className={`block lg:flex`}>
        {images.map((image, index) => {
          return (
            <div key={index} className={`mr-8 m-auto mb-12 lg:mb-0`}>
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
