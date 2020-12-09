/**
 * @file hero.js
 */

// Import dependencies
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex-col md:flex-row md:block lg:flex items-center md:justify-between md:mb-12 px-10 py-16 md:px-24 lg:px-64">
      <div className={`hero__text-container w-full relative md:block lg:inline z-20 lg:w-1/2`}>
        <div className={`clear-background bg-clear-background p-10 relative h-full leading-10 transform translate-x-4 translate-y-4`}>
          <div className={`neutral-text-box bg-neutral-background p-10 leading-10`}>
            <h1 className={`font-rylan z-20 relative text-6xl text-gray`}>Let's grow your movement and mindset capacity<br/>with intention.</h1>
            <div className={`highlight bg-yellow z-10 relative h-8 w-3/4`}></div>
          </div>
        </div>
        
      </div>
      <Image src={`/homepage-header-background.png`} layout={`fill`} />      
      <style jsx>{`
        .clear-background {
          height: 260px;
        }

        .neutral-text-box {
          transform: translate(10px, 0px);
          width: 115%;
        }

        .highlight {
          transform: translateY(-1rem);
        }
      `}</style>
    </section>
  )
}
