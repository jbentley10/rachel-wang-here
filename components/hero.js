import { CMS_NAME, CMS_URL } from '../lib/constants'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="homepage-hero hero flex-col md:flex-row md:block lg:flex items-center md:justify-between md:mb-12 px-10 py-16 md:px-24 lg:px-64">
      <div className={`hero__image-container sm:hidden md:block lg:inline w-full md:text-center lg:text-left`}>
        <img className={`hidden md:inline`} src={'https://i2.wp.com/rachelwanghere.com/wp-content/uploads/2020/06/Featured-Photo-320x321-1.png?fit=320%2C321&ssl=1'} />
      </div>
      <div className={`hero__text-container w-full md:block lg:inline`}>
        <h1 className={`hero__heading font-medium font-raleway tracking-tighter leading-tight text-6xl md:text-6xl lg:text-7xl pt-6 pb-2 md:pt-32 lg:pt-6 w-full`}>
          Join and get access to my workbook!
        </h1>  
        <p className={`hero__subtitle mb-10 font-raleway md:text-4xl md:mb-24`}>Lorem ipsum solor dut amet</p>    
        <Link href="/">
          <a className={`hero__cta-button bg-purple text-white uppercase font-raleway font-bold text-white cursor-pointer text-lg md:text-3xl px-10 py-4 md:px-32 lg:px-24 md:py-8 rounded`}>Register Now</a>
        </Link>
      </div>
    </section>
  )
}
