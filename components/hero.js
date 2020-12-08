/**
 * @file hero.js
 */

// Import dependencies
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex-col md:flex-row md:block lg:flex items-center md:justify-between md:mb-12 px-10 py-16 md:px-24 lg:px-64">
      <div className={`hero__text-container w-full relative md:block lg:inline z-20`}>
        <div className={`bg-neutral-background`}>
          <h1 className={`font-rylan text-6xl text-gray`}>Let's grow your movement and mindset capacity 
            <span className={`bg-yellow`}>with intention</span>
          </h1>
        </div>
      </div>
      <Image src={`/homepage-header-background.png`} layout={`fill`} />      
    </section>
  )
}
