/**
 * 
 * @file hero-split-right.js
 */

export default function HeroSplitRight({ heading, image, alt }) {
  return (
    <section className={`hero-split-right`}>
      <div className={`block md:flex bg-neutral-background sm:px-16 md:px-24 lg:px-32 xl:px-64 pt-16 pb-48`}>
        <div className={`heading-container w-full md:w-7/12 pt-8 md:pt-32 pl-16 pb-4 md:pb-0 md:pl-0`}>
          <h1 className={`leading-tight text-h1 md:text-huge text-text-color font-rylan w-6/12`}>{heading}</h1>
        </div>
        <div className={`image-container m-auto mb-64 md:mb-0 md:m-0 w-1/2 md:w-4/12 -mt-32`}>
          <div className={`clear-background bg-clear-background z-10`} />
          <img className={`image z-20`} src={image} alt={alt} />
        </div>
      </div>
      <style jsx={true}>{`
        .image-container {
          height: 2rem;
          margin-top: 0rem;
        }
        .image-container .clear-background {
          display: block;          
          height: 20rem;
          width: 100%;
        }
        .image-container .image {
          position: relative;
          bottom: 17rem;
          right: 1rem;
        }
      `}</style>
    </section>
  )
}
