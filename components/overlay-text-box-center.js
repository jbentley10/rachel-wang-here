/**
 * 
 * @file overlay-text-box-center.js
 */

export default function OverlayTextBoxCenter({ text }) {
  return (
    <section className={`overlay-text-box-center bg-purple w-3/4 md:w-5/12 p-12 m-auto md:ml-64 md:-mt-48 text-white font-barlow`}>
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