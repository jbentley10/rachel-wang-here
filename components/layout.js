/**
 * @file layout.js
 */
// Import components
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function PageLayout({ preview, children, metaDescription }) {  
  return (
    <>
      <Meta metaDescription={metaDescription} />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer 
        heading={`Follow @RachelWangHere`}
        posts={[
          {
            image: '/instagram-1.png',
            link: '/'
          },
          {
            image: '/instagram-2.png',
            link: '/'
          },
          {
            image: '/instagram-3.png',
            link: '/'
          },
          {
            image: '/instagram-4.png',
            link: '/'
          }
        ]}
        subheading={`Ready to expand in the way you move?`}
        subtext={`Join other curious movers + doers and get
        access to my free library of resources,
        guides, and worksheets for at-home
        practitioners.`}
        button={{
          color: 'purple',
          text: 'Give Me Access',
          href: '/'
        }}
      />
    </>
  )
}
