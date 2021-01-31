/**
 * @file three-button-bade.js
 */
// Import dependencies
import Link from 'next/link';

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
          className={`w-full md:w-8/12 m-auto`}
          color={button.color}
          href={button.href}
          text={button.text}
        />
      </div>
      
      <div className={`block lg:flex`}>
        {images.map((image, index) => {
          return (
            <li key={index} className={`image--${index} mt-8 mr-24 list-none`}>
              <Link href={image.link}>
                <div className={`relative bg-popout-pattern-background h-32 w-48 bg-cover cursor-pointer`}>
                  <div className={`bg-white align-bottom h-8 bottom-0 absolute w-full`}>
                    <p className={`text-paragraph font-rylan text-left pl-8 align-middle`}>{image.text}</p>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </div>
    </section>
  )
}
