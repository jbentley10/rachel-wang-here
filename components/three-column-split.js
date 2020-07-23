import Link from 'next/link'

export default function ThreeColumnSplit() {
  return (
    <section className="three-column-split text-center align-center">
      <div className={`three-column-split__heading-container pt-12 md:pt-24`}>
        <h2 className={`text-6xl font-raleway font-light`}>Take Action!</h2>
      </div>
      <div className={`three-column-split__links-container`}>
        <ul className={`three-column-split__links-list sm:inline md:flex w-full`}>
          <Link href="/">
            <li className={`three-column-split__column md:flex-initial w-full my-12`}>
              <div className={`three-column-split__image-container sample-image m-auto w-40 h-20 bg-gray-400`} />
              <h3 className={`three-column-split__text text-xl pt-4 font-raleway`}>Get Free Resources</h3>
            </li>
          </Link>
          <Link href="/">
            <li className={`three-column-split__column md:flex-initial w-full my-12`}>
              <div className={`three-column-split__image-container sample-image m-auto w-40 h-20 bg-gray-400`} />
              <h3 className={`three-column-split__text text-xl pt-4 font-raleway`}>Livestream Classes</h3>
            </li>
          </Link>
          <Link href="/">
            <li className={`three-column-split__column md:flex-initial w-full my-12`}>
              <div className={`three-column-split__image-container sample-image m-auto w-40 h-20 bg-gray-400`} />
              <h3 className={`three-column-split__text text-xl pt-4 font-raleway`}>Join Community</h3>
            </li>
          </Link>
        </ul>
      </div>
    </section>
  )
}
