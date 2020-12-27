/**
 * 
 * @file hero-split-right.js
 */

export default function OverlayTextBox({ text1, text2 }) {
  return (
    <section className={`overlay-text-box bg-purple w-3/4 md:w-5/12 p-12 m-auto md:ml-32 md:-mt-48 text-white font-barlow`}>
      <p>
        <div dangerouslySetInnerHTML={{ __html: text1 }} />  
      </p>      
      <span className={`text-h2 text-white m-auto text-center font-barlow`}>. . . .</span>
      <br />
      <br />
      <p>
        <div dangerouslySetInnerHTML={{ __html: text2 }} />
      </p>
    </section>
  )
}
