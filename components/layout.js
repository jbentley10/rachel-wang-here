import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import PropTypes from 'prop-types';

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
            image: '/rachel-handstand.png',
            link: '/'
          },
          {
            image: '/rachel-handstand.png',
            link: '/'
          },
          {
            image: '/rachel-handstand.png',
            link: '/'
          },
          {
            image: '/rachel-handstand.png',
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
