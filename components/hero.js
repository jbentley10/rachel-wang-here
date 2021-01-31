/**
 * @file hero.js
 */

// Import dependencies
import Image from 'next/image';

export default function Hero({ normalHeading, highlightedHeading }) {
  const backgroundImage = `/homepage-header-background.png`;
  const title = 'Rachel Wang Here';

  return (
    <section className="flex py-16 md:pr-16 lg:pr-64 lg:pl-32">
      <div className={`hero__text-container z-20 sm:w-3/4 lg:w-3/4 xl:w-7/12`}>
        <div className={`clear-background bg-clear-background p-10 relative h-full leading-10 transform translate-x-4 translate-y-4`}>
          <div className={`neutral-text-box bg-neutral-background p-10 animate`}>
            <h1 className={`font-rylan z-20 relative text-h1 text-text-color`}>
              {normalHeading}
              <span className={`highlighted-text`}>{highlightedHeading}</span>
            </h1>
          </div>
        </div>
        
      </div>
      <div className={`hero-image-container`}>
        <Image
          layout="fill"
          className="object-right md:object-center object-cover pointer-events-none"
          src={backgroundImage}
          alt={title}
        />
      </div>
      <style jsx>{`
        .clear-background {
          height: 260px;
        }

        .neutral-text-box {
          transform: translate(10px, 0px);
          width: 100%;
        }

        .highlighted-text {
          background: linear-gradient(180deg, rgba(255,255,255,0) 45%, #F4C06F 45%);
          display: inline;
        }

      `}</style>
    </section>
  )
}
