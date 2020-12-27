/**
 * @file popout-bade.js
 */

// Import dependencies
import Image from 'next/image';

// Import components
import Button from './button';

export default function PopoutBlade({heading, body, button1, button2}) {
  return (
    <section className="popout-blade bg-popout-pattern-background bg-cover flex py-12 px-32">
      <div className={`popout-blade__text-container w-7/12 mr-24 pr-24`}>
        <h3 className={`font-rylan text-h3 text-text-color`}>{heading}</h3>
        {body && 
          <p className={`font-barlow text-paragraph text-text-color`}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </p>
        }
      </div>
      {button1 || button2 && 
        <div className={`popout-blade__button-container w-5/12 ml-24`}>
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
