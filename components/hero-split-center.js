/**
 * 
 * @file hero-split-center.js
 */
// Import dependencies
import Image from 'next/image';

export default function HeroSplitCenter({ heading, category, image, alt }) {
  return (
    <section className={`hero-split-center text-center`}>
      <div className={`bg-neutral-background md:px-64 pt-16 pb-0`}>
        <div className={`heading-container w-full`}>
          <span className={`text-h3 font-semibold font-barlow uppercase text-text-color`}>
            {category}
          </span>
          <h1 className={`leading-tight text-h1 md:text-huge text-text-color font-rylan pt-8`}>{heading}</h1>
        </div>
        <div className={`image-container w-full px-12 md:px-0 py-24`}>
          <div className={`relative z-30`}>
            <img className={`m-auto`} src={`https:${image}`} alt={alt} />
          </div>
        </div>
      </div>
    </section>
  )
}
