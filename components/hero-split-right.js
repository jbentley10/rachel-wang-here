/**
 * 
 * @file hero-split-right.js
 */

export default function HeroSplitRight({ heading, image }) {
  return (
    <section className={`hero-split-right`}>
      <div className={`flex bg-neutral-background md:px-64 pt-16 pb-48`}>
        <div className={`heading-container w-7/12 pt-32`}>
          <h1 className={`leading-tight text-huge text-text-color font-rylan w-6/12`}>{heading}</h1>
        </div>
        <div className={`image-container w-4/12 -mt-32`}>
          <div className={`clear-background bg-clear-background z-10`} />
          <img className={`image z-30`} src={image} />
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
          width: 18rem;
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
