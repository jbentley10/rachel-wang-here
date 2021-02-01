/**
 * 
 * @file overlay-text-box-center.js
 */

export default function OverlayTextBoxCenter({ text }) {
  return (
    <section className={`overlay-text-box-center bg-purple w-full md:w-3/4 md:p-12 m-auto ml-0 md:ml-64 md:-mt-48 text-white font-barlow`}>
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
