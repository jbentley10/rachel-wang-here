/**
 * @file three-button-bade.js
 */

// Import dependencies
import Image from 'next/image';
import Link from 'next/link';

// Import components
import Button from './button';

export default function ThreeButtonBlade({heading, buttons}) {
  return (
    <section className="popout-blade bg-popout-pattern-background bg-cover py-12 px-32">
      <div className={`popout-blade__text-container w-full mr-24 pr-24`}>
        <h3 className={`font-rylan text-h3 text-text-color`}>{heading}</h3>
      </div>
      <div className={`popout-blade__button-container flex w-full`}>
        {buttons.map((button, index) => {
          return (
            <Link className={``} href={button.link}>
              <div className={`mr-8 p-10 cursor-pointer bg-white`}>
                <Image 
                  src="/rachel-handstand.png"
                  height={100}
                  width={150}
                />
                <h3 className={`text-h3 font-rylan`}>{button.heading}</h3>
                <p className={`text-paragraph`}>{button.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
