/**
 * 
 * @file overlay-text-box.js
 */

export default function OverlayTextBox({ text1, text2 }) {
  return (
    <section className={`overlay-text-box bg-purple w-3/4 md:w-4/12 p-12 m-auto mt-24 md:-mt-32 md:ml-32 xl:ml-64 text-h2 text-white m-auto text-left font-barlow leading-normal text-paragraph`}>
      <p>
        <div dangerouslySetInnerHTML={{ __html: text1 }} />  
      </p>      
      <span>. . . .</span>
      <br />
      <br />
      <p>
        <div dangerouslySetInnerHTML={{ __html: text2 }} />
      </p>
    </section>
  )
}
