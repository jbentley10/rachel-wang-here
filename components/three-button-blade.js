/**
 * @file three-button-bade.js
 */

// Import dependencies
import Image from 'next/image';
import Link from 'next/link';

export default function ThreeButtonBlade({heading, buttons}) {
  return (
    <section className="popout-blade bg-popout-pattern-background bg-cover p-8 md:px-32 md:py-20">
      <div className={`popout-blade__text-container w-full mr-24 pr-24`}>
        <h3 className={`font-rylan text-h3 text-text-color`}>{heading}</h3>
      </div>
      <div className={`popout-blade__button-container block lg:flex w-full`}>
        {buttons.map((button, index) => {
          return (
            <Link key={Math.random()} className={``} href={button.link}>
              <div className={`mr-8 p-10 cursor-pointer bg-white`}>
                <Image 
                  src="/rachel-handstand.png"
                  height={100}
                  width={150}
                />
                <h3 className={`text-h3 font-rylan text-text-color`}>{button.heading}</h3>
                <p className={`text-paragraph`}>{button.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
