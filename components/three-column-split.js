/** 
 * @file three-column-split.js
 */
// Import dependencies
import Image from 'next/image';

// Import components
import Button from './button';

export default function ThreeColumnSplit() {
  const columnClasses = `flex-initial bg-white sm:mx-0 md:mx-8 my-16 px-8 py-10 sm:w-full lg:w-1/3` ;
  const columnHeadingClasses = `font-rylan text-text-color text-h3 text-center leading-tight mb-4`;
  const columnParagraphClasses = `font-barlow text-text-color text-paragraph text-left`;

  return (
    <section className="three-column-split text-center mt-32">
      <div className={`bg-wavy-background bg-cover relative z-20 p-32`}>   
        <div className={`flex`}>
          <div className={`three-column-split__heading-container text-left lg:mb-16 w-full lg:w-5/12`}>
            <h1 className={`font-rylan text-h1 text-text-color`}>Take Action Now</h1>
            <h4 className={`font-barlow text-h4 text-text-color`}>Choose a free workshop below.</h4>
          </div>
          <div className={`three-column-split__yellow-dots-container hidden lg:inline lg:-mt-32 lg:w-7/12`}>
            <Image
              layout="intrinsic"
              width={800}
              height={330}
              src={'/yellow-dots.png'}
              alt={`Yellow dots`}
            />
          </div>
        </div>
        <div className={`three-column-split__columns-container sm:block lg:flex mt-32 md:mt-0`}>
          <div className={`three-column-split__left-column ${columnClasses}`}>
            <div className={`three-column-split__smudge-container -mt-16 -ml-64`}>
              <Image
                layout="intrinsic"
                width={75}
                height={75}
                className=""
                src={'/circle-smudge--orange.png'}
                alt={`Circle smudge`}
              />
            </div>
            <h3 className={columnHeadingClasses}>Begin Your Yoga Practice</h3>
            <p className={columnParagraphClasses}>“I’m a beginner and ready to start my yoga practice.”</p>
            <Button 
              color={`yellow`}
              href={`/`}
              text={`Register Now`}
              className={`mt-12`}
            />
          </div>
          <div className={`three-column-split__middle-column ${columnClasses}`}>
            <div className={`three-column-split__smudge-container -mt-16 -ml-64`}>
              <Image
                layout="intrinsic"
                width={75}
                height={75}
                className=""
                src={'/circle-smudge--red.png'}
                alt={`Circle smudge`}
              />
            </div>
            <h3 className={columnHeadingClasses}>Increase Your Strength</h3>
            <p className={columnParagraphClasses}>“I’m a beginner and ready to start my yoga practice.”</p>
            <Button 
              color={`brown`}
              href={`/`}
              text={`Register Now`}
              className={`mt-12`}
            />
          </div>
          <div className={`three-column-split__right-column ${columnClasses}`}>
            <div className={`three-column-split__smudge-container -mt-16 -ml-64`}>
              <Image
                layout="intrinsic"
                width={75}
                height={75}
                className=""
                src={'/circle-smudge--orange.png'}
                alt={`Circle smudge`}
              />
            </div>
            <h3 className={columnHeadingClasses}>Meditate to Center</h3>
            <p className={columnParagraphClasses}>“I’m a beginner and ready to start my yoga practice.”</p>
            <Button 
              color={`orange`}
              href={`/`}
              text={`Register Now`}
              className={`mt-12`}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        
      `}</style>
    </section>
  )
}
