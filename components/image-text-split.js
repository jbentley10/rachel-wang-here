import Link from 'next/link'

export default function ImageTextSplit() {
  return (
    <section className="image-text-split align-center my-32">
      <h2 className={`image-text-split__heading text-2xl text-center mb-6`}>Hi, I'm Rachel</h2>
      <div className={`image-text-split__sample-image bg-gray-400 m-auto w-40 h-40 mb-6`} />
      <p className={`image-text-split__text`}>
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
    </section>
  )
}
