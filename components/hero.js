import { CMS_NAME, CMS_URL } from '../lib/constants'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className={`hero__image-container sm:hidden md:inline`}>
        <img className={`sm:hidden md:inline`} src={'https://i2.wp.com/rachelwanghere.com/wp-content/uploads/2020/06/Featured-Photo-320x321-1.png?fit=320%2C321&ssl=1'} />
      </div>
      <div className={`hero__text-container`}>
        <h1 className="hero__heading text-6xl md:text-8xl font-bold tracking-tighter leading-tight pt-6 pb-2 pr-8">
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
