/**
 * @file background-photo-box.js
 */

// Import dependencies
import Image from 'next/image';
import Link from 'next/link';

export default function BackgroundPhotoBox({ heading, text, button1, button2, backgroundImage, images, backgroundImageAlt }) {
  return (
    <section className="py-32 md:pr-16 z-10 lg:pr-64 lg:pl-32 w-full h-96 relative">
      <div className={`block`}>
        <div className={`neutral-text-box bg-neutral-background h-full p-10 relative z-30 w-5/12`}>
          <h2 className={`font-rylan z-20 relative text-h2 text-text-color leading-tight pb-4`}>
            {heading}
          </h2>
          <p className={`font-barlow z-20 relative text-paragraph text-text-color`}>Become a member for exclusive access!</p>
        </div>
        <div className={`image-boxes block lg:flex relative z-30`}>
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
      </div>
      <Image
        layout="fill"
        src={backgroundImage}
        alt={backgroundImageAlt}
      />
    </section>
  )
}
