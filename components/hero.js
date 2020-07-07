import { CMS_NAME, CMS_URL } from '../lib/constants'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className={`hero__image-container`}>
        <img src={'http://rachel-wang-here.local/wp-content/uploads/2020/07/IMG_20200623_214412.png'} />
      </div>
      <div className={`hero__text-container`}>
        <h1 className="hero__heading text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Join and get access to my workbook!
        </h1>  
        <p>Lorem ipsum solor dut amet</p>    
        <Link href="/">
          <a>Register Now</a>
        </Link>
      </div>
    </section>
  )
}
