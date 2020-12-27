/**
 * @file popout-bade.js
 */

// Import dependencies
import Image from 'next/image';

// Import components
import Button from './button';

export default function PopoutBladeAlt({heading, body, button}) {
  return (
    <section className="popout-blade bg-popout-pattern-background-2 bg-cover flex py-12 px-32">
      <div className={`popout-blade__text-container w-7/12 mr-24 pr-24`}>
        <h3 className={`font-rylan text-h3 text-text-color`}>{heading}</h3>
        {body && 
          <p className={`font-barlow text-paragraph text-text-color`}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </p>
        }
      </div>
      <div className={`popout-blade__button-container w-5/12 ml-24`}>
        <Button 
          href={button.href}
          color={button.color}
          text={button.text}
          className={`mb-8`}
        />
      </div>
    </section>
  )
}
