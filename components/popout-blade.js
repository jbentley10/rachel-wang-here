/**
 * @file popout-bade.js
 */

// Import dependencies
import Image from 'next/image';

// Import components
import Button from './button';

export default function PopoutBlade({heading, body, button1, button2}) {
  return (
    <section className="popout-blade bg-popout-pattern-background bg-cover sm:block md:flex py-12 px-16 md:px-32 lg:py-32">
      <div className={`popout-blade__text-container w-full lg:w-5/12 lg:mr-24 lg:pr-24`}>
        <h3 className={`font-rylan text-h3 text-text-color`}>{heading}</h3>
        {body && 
          <p className={`font-barlow text-paragraph text-text-color`}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </p>
        }
      </div>
      {button1 || button2 && 
        <div className={`popout-blade__button-container w-5/12 lg:4/12 mt-8 ml-0 md:mt-0 md:ml-24`}>
          <Button 
            href={button1.href}
            color={button1.color}
            text={button1.text}
            className={`mb-8`}
          />
          <Button 
            href={button2.href}
            color={button2.color}
            text={button2.text}
          />
        </div>
      }
    </section>
  )
}
