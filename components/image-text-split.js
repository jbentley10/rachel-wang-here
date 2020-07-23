import Link from 'next/link'

export default function ImageTextSplit() {
  return (
    <section className="image-text-split align-center my-32 md:block lg:flex px-10 md:px-12 md:pb-24 md:px-32 lg:px-64">
      <div className={`image-text-split__text-container w-full lg:w-6/12 text-left lg:flex-initial lg:pr-32`}>
        <h2 className={`image-text-split__heading text-5xl md:text-7xl mb-6 font-raleway text-center`}>Hi, I'm Rachel</h2>
        <p className={`image-text-split__text pb-10 lg:pb-0 font-raleway md:text-2xl`}>
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Phasellus ultricies ultricies 
          augue eu feugiat. Orci varius natoque 
          penatibus et magnis dis parturient montes, 
          nascetur ridiculus mus. Sed vel lectus arcu. 

          Vestibulum ante ipsum primis in faucibus 
          orci luctus et ultrices posuere cubilia curae; 
          Duis eleifend non lorem vel pulvinar. Proin 
          in pretium nisi. 

          In mollis, elit tristique pretium pharetra, 
          tortor ullamcorper odio. Suspendisse 
          posuere massa quis ipsum egestas, a 
          ullamcorper libero faucibus. I
        </p>
      </div>
      <div className={`image-text-split__image-container m-auto w-full md:w-4/12 h-full mb-6 md:inline lg:flex-initial md:ml-12`}>
        <img src={'../static/SVG/rachel-handstand.svg'} />
      </div>
    </section>
  )
}
