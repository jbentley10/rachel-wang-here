/**
 * @file about.js
 */
// Import dependencies
import Head from 'next/head'
import axios from 'axios'

// Import components
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

export default function About({ about, preview }) {

  // Set up variables for the About page
  let title = about.title.rendered;  
  let content = about.content.rendered;

  return (
    <div>
      {/* Meta description for SEO */}
      <Layout metaDescription={'All about me | Rachel Wang Here'} preview={preview}>
        <Head>
          {/* Title tag for SEO */}
          <title>{ 'About Me | Rachel Wang Here' }</title>
        </Head>
        <Container>
          <Header />
          <div className={`sidebar-body-split flex`}>
            <div className={`text-block-layout-container flex-initial md:w-7/12`}>
              <div className={`text-block__container items-center md:justify-between mt-16 mb-16 md:mb-12 px-10 md:px-12`}>
                <h1 className={`text-block__heading text-6xl md:text-7xl pb-10`}>
                  {title}
                </h1>
                <div
                  className="about-page__content text-base leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>
            <div className={`sidebar-layout-container flex-initial`}>
              <Sidebar />
            </div>
          </div>
        </Container>
      </Layout>
      <style jsx>{`        
        .about-page__content h2 {
          font-size: 100px !important;
        }
      `}</style>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://rachel-wang-here.local/wp-json/wp/v2/pages/26')
  const about = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      about,
    },
  }
}