import Link from 'next/link'

export default function ImageTextSplit() {
  return (
    <section className="image-text-split align-center my-32 md:flex px-10 md:px-12 md:pb-24">
      <div className={`image-text-split__text-container w-full md:w-6/12 text-left md:flex-initial md:pr-32`}>
        <h2 className={`image-text-split__heading text-5xl mb-6 font-raleway text-center`}>Hi, I'm Rachel</h2>
        <p className={`image-text-split__text pb-10 md:pb-0 font-raleway`}>
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
      <div className={`image-text-split__image-container m-auto w-40 md:w-4/12 h-40 mb-6 md:flex-initial md:ml-12`}>
        <img src={'https://i2.wp.com/rachelwanghere.com/wp-content/uploads/2020/06/Featured-Photo-320x321-1.png?fit=320%2C321&ssl=1'} />
      </div>
    </section>
  )
}
