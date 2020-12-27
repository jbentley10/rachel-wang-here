/**
 * 
 * @file hero-split-right.js
 */
// Import dependencies
import Image from 'next/image';

export default function HeroSplitRight({ heading }) {
  return (
    <section className={`hero-split-right`}>
      <div className={`flex bg-neutral-background px-32 pt-16 pb-48`}>
        <div className={`heading-container w-8/12 pt-32`}>
          <h1 className={`text-huge text-text-color font-rylan`}>{heading}</h1>
        </div>
        <div className={`image-container w-4/12 -mt-32`}>
          <div className={`clear-background bg-clear-background p-10 relative z-10 transform translate-x-8 translate-y-24 h-full`} />
          <div className={`transform -translate-y-64 relative z-30`}>
            <Image 
              src={`/rachel-handstand.png`}
              width={`500`}
              height={`600`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
