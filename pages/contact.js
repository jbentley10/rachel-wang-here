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
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import { fetchSidebar } from '../utils/contentfulPages'

export default function Contact({ contact, preview, contentfulRes, posts }) {
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
              <div className={`text-block__container items-center md:justify-between my-16 md:mb-12 px-10 md:px-12`}>
                <h1 className={`text-block__heading text-6xl md:text-7xl pb-10`}>
                  {title}
                </h1>
                <div
                  className="page__content text-base leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
              <div className={`contact__form-container md:px-12`}>
                <form>
                  <input className={`footer__name-input my-3 pl-10 w-11/12 md:w-9/12 py-4 border text-text ml-4`} placeholder="Name"></input><br />
                  <input className={`footer__name-input my-3 pl-10 w-11/12 md:w-9/12 py-4 border text-text ml-4`} placeholder="Email"></input><br />
                  <input className={`footer__name-input my-3 pl-10 w-11/12 md:w-9/12 py-4 border text-text ml-4`} placeholder="Message"></input><br />
                  <button className={`contact__form-submit-button uppercase bg-gray-400 px-24 py-4 ml-4 mt-8`} type="submit">Submit</button>
                </form>
              </div>
            </div>
            <div className={`sidebar-layout-container flex-initial`}>
              <Sidebar posts={posts} content={contentfulRes.fields}/>
            </div>
          </div>
          
        </Container>
      </Layout>
      <style jsx>{`
      input {
        background-color: white;
      }
      `}</style>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const res = await fetch('https://rachelwanghere.com/wp-json/wp/v2/pages/5')
  const contact = await res.json()
  const contentfulRes = await fetchSidebar();
  const posts = await getAllPostsForHome(preview);

  if (contentfulRes.fields) {
    return {
      props: {
        contentfulRes,
        contact,
        preview,
        posts
      },
    }
  } else {
    return {
      props: {
        contact,
        posts,
        preview
      }
    }
  }
}