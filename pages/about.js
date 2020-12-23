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
import { fetchSidebar } from '../utils/contentfulPages'

export default function About({ about, preview, contentfulRes }) {

  // Set up variables for the About page
  let title = about.title.rendered;  
  let content = about.content.rendered;
  let excerpt = about.excerpt.rendered;

  return (
    <div>
      {/* Meta description for SEO */}
      <Layout metaDescription={excerpt} preview={preview}>
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
                  className="page__content text-base leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>             
            </div>
            <div className={`sidebar-layout-container flex-initial md:w-2/12`}>
                <Sidebar content={contentfulRes.fields}/>
              </div>
          </div>
        </Container>
      </Layout>
      {/* Only style elements that aren't dangerously set */}
      <style jsx>{`        

      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://rachelwanghere.com/wp-json/wp/v2/pages/3171')
  const about = await res.json()
  const contentfulRes = await fetchSidebar();

  if (res.fields) {
    return {
      props: {
        contentfulRes,
        about
      },
    };
  } else
  return {
    props: { about },
  }
}