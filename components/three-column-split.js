import Link from 'next/link'

export default function ThreeColumnSplit() {
  return (
    <section className="three-column-split text-center align-center md:px-64 md:py-24">
      <div className={`three-column-split__heading-container pt-12 md:pt-24`}>
        <h2 className={`text-6xl md:text-7xl font-raleway`}>Take Action!</h2>
      </div>
      <div className={`three-column-split__links-container`}>
        <ul className={`three-column-split__links-list sm:inline lg:flex w-full`}>
          <Link href="/">
            <li className={`three-column-split__column lg:flex-initial w-full my-12`}>
              <div className={`three-column-split__image-container text-center rounded-lg m-auto w-56 h-auto bg-sedona opacity-100 py-8`}>
                <img className={`opacity-100 w-1/3 m-auto text-center`} src={`../static/SVG/yoga-mat.svg`} />
              </div>
              <h3 className={`three-column-split__text text-xl md:text-2xl pt-4 md:pt-10 font-raleway`}>Get Free Resources</h3>
            </li>
          </Link>
          <Link href="/">
            <li className={`three-column-split__column lg:flex-initial w-full my-12`}>
              <div className={`three-column-split__image-container text-center rounded-lg m-auto w-56 h-auto bg-sedona opacity-100 py-8`}>
                <img className={`opacity-100 w-1/3 m-auto text-center`} src={`../static/SVG/yoga-mat.svg`} />
              </div>
              <h3 className={`three-column-split__text text-xl md:text-2xl pt-4 md:pt-10 font-raleway`}>Livestream Classes</h3>
            </li>
          </Link>
          <Link href="/">
            <li className={`three-column-split__column lg:flex-initial w-full my-12`}>
              <div className={`three-column-split__image-container text-center rounded-lg m-auto w-56 h-auto bg-sedona opacity-100 py-8`}>
                <img className={`opacity-100 w-1/3 m-auto text-center`} src={`../static/SVG/yoga-mat.svg`} />
              </div>
              <h3 className={`three-column-split__text text-xl md:text-2xl pt-4 md:pt-10 font-raleway`}>Join Community</h3>
            </li>
          </Link>
        </ul>
      </div>
    </section>
  )
}
