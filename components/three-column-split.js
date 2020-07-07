import { CMS_NAME, CMS_URL } from '../lib/constants'
import Link from 'next/link'

export default function ThreeColumnSplit() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className={`three-column-split__heading-container`}>
        <h2 className={`text-2xl`}>Take Action!</h2>
      </div>
      <div className={`three-column-split__links-container`}>
        <ul className={`flex w-full`}>
          <Link href="/">
            <li className={`flex-initial w-1/4 px-6`}>
              <div className={`sample-image`}></div>
              <h3 className={`text-xl`}>Blah!</h3>
            </li>
          </Link>
          <Link href="/">
            <li className={`flex-initial w-1/4`}>
              <div className={`sample-image`}></div>
              <h3 className={`text-xl`}>Blah!</h3>
            </li>
          </Link>
          <Link href="/">
            <li className={`flex-initial w-1/4`}>
              <div className={`sample-image`}></div>
              <h3 className={`text-xl`}>Blah!</h3>
            </li>
          </Link>
        </ul>
      </div>
    </section>
  )
}
