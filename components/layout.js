/**
 * @file layout.js
 */
// Import components
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function PageLayout({ footerContent, preview, children, metaDescription }) {  
  return (
    <>
      <Meta metaDescription={metaDescription} />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer 
        heading={footerContent.fields.heading}
        posts={[
          {
            image: footerContent.fields.post1Image.fields.file.url,
            link: footerContent.fields.post1Link
          },
          {
            image: footerContent.fields.post2Image.fields.file.url,
            link: footerContent.fields.post2Link
          },
          {
            image: footerContent.fields.post3Image.fields.file.url,
            link: footerContent.fields.post3Link
          },
          {
            image: footerContent.fields.post4Image.fields.file.url,
            link: footerContent.fields.post4Link
          }
        ]}
        subheading={footerContent.fields.subHeading}
        subtext={footerContent.fields.copy}
        button={{
          color: 'purple',
          text: footerContent.fields.buttonText,
          href: footerContent.fields.buttonLink
        }}
      />
    </>
  )
}
