/**
 * @file popout-bade.js
 */

// Import dependencies
import Image from 'next/image';

// Import components
import Button from './button';

export default function PopoutBladeAlt({heading, body, button, children}) {
  return (
    <section className="popout-blade-alt bg-popout-pattern-background-2 bg-cover sm:block md:flex py-12 px-16 md:px-32 lg:py-32 lg:px-64">
      <div className={`popout-blade-alt__text-container w-full lg:w-5/12 lg:mr-24 lg:pr-24`}>
        <h3 className={`font-rylan text-h3 text-text-color`}>{heading}</h3>
        {body && 
          <p className={`font-barlow text-paragraph text-text-color`}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </p>
        }
      </div>
      <div className={`popout-blade-alt__button-container w-5/12 lg:4/12 mt-8 ml-0 md:mt-0 md:ml-24`}>
        {children}
      </div>
    </section>
  )
}
