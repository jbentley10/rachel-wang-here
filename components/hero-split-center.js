/**
 * 
 * @file hero-split-center.js
 */
// Import dependencies
import Image from 'next/image';

export default function HeroSplitCenter({ heading, category, image }) {
  return (
    <section className={`hero-split-center`}>
      <div className={`bg-neutral-background md:px-64 pt-16 pb-0`}>
        <div className={`heading-container w-7/12 m-auto text-center`}>
          <span className={`text-h1 font-semibold font-barlow uppercase text-text-color`}>
            {category}
          </span>
          <h1 className={`leading-tight text-huge text-text-color font-rylan pt-8`}>{heading}</h1>
        </div>
        <div className={`image-container w-4/12 text-center m-auto`}>
          <div className={`clear-background bg-clear-background p-10 relative z-10 transform translate-x-8 translate-y-24 h-full`} />
          <div className={`relative z-30`}>
            <img src={`https:${image}`} />
          </div>
        </div>
      </div>
    </section>
  )
}
