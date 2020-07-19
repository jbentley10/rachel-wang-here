/**
 * @file contact.js
 */
// Import dependencies
import Head from 'next/head'

// Import library variables
import { getAllPostsForHome } from '../lib/api'
import { BLOG_NAME } from '../lib/constants'

// Import components
import Layout from '../components/layout'
import Container from '../components/container'
import RecentArticles from '../components/recent-articles'
import Header from '../components/header'
import SimpleCTA from '../components/simple-cta'
import TextBlock from '../components/text-block'
import Sidebar from '../components/sidebar'

export default function Contact({ contact, preview }) {
  // Set up variables for the Contact page
  let title = contact.title.rendered;  
  let content = contact.content.rendered;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{ BLOG_NAME }</title>
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
            <div className={`sidebar-layout-container flex-initial`}>
              <Sidebar />
            </div>
          </div>
          
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://rachel-wang-here.local/wp-json/wp/v2/pages/30')
  const contact = await res.json()

  return {
    props: {
      contact,
    },
  }
}