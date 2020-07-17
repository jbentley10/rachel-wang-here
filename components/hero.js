import { CMS_NAME, CMS_URL } from '../lib/constants'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 px-10 md:px-12">
      <div className={`hero__image-container sm:hidden md:inline w-full md:w-3/4`}>
        <img className={`hidden md:inline`} src={'https://i2.wp.com/rachelwanghere.com/wp-content/uploads/2020/06/Featured-Photo-320x321-1.png?fit=320%2C321&ssl=1'} />
      </div>
      <div className={`hero__text-container w-full`}>
        <h1 className={`hero__heading font-bold tracking-tighter leading-tight text-6xl md:text-7xl pt-6 pb-2 pr-8 w-full`}>
          Join and get access to my workbook!
        </h1>  
        <p className={`hero__subtitle mb-10`}>Lorem ipsum solor dut amet</p>    
        <Link href="/">
          <a className={`hero__cta-button bg-gray-600 text-white cursor-pointer text-lg px-10 py-4 rounded`}>Register Now</a>
        </Link>
      </div>
    </section>
  )
}
