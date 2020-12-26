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
import HeroSplitRight from '../components/hero-split-right'
import OverlayTextBox from '../components/overlay-text-box'
import { fetchSidebar } from '../utils/contentfulPages'
import { getAllPostsForHome } from '../lib/api'

export default function About({ about, preview, sidebarContent, posts: { edges } }) {
  const recentPosts = edges.slice(0, 3);

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
          <HeroSplitRight 
            heading={'About'}
          />
          <OverlayTextBox 
            text1={`I’m a former corporate tech employee 
            turned yoga teacher who is here to 
            share with people like you how to 
            improve strength, mobility, 
            coordination, and balance in the 
            physical body along with your 
            mental game.`}
            text2={`As an eager student myself, I am always 
            exploring my yoga practice, knowledge of 
            movement, and self inquiry.  I enjoy 
            experimenting, doing things that are 
            reflective of the moment, all from 
            a mindful place.`}
          />
          <div className={`page-body-content px-32`}>
            <div className={`sidebar-body-split flex`}>
              <div className={`text-block-layout-container flex-initial md:w-7/12`}>hi!</div>
              <div className={`sidebar-layout-container flex-initial md:w-2/12`}>
                  <Sidebar posts={recentPosts} content={sidebarContent.fields}/>
                </div>
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

export async function getStaticProps({ preview = false }) {
  const res = await fetch('https://rachelwanghere.com/wp-json/wp/v2/pages/3171')
  const about = await res.json()
  const sidebarContent = await fetchSidebar();
  const posts = await getAllPostsForHome(preview);

  if (sidebarContent.fields) {
    return {
      props: {
        sidebarContent,
        about,
        posts,
        preview
      },
    };
  } else
  return {
    props: { about, posts, preview },
  }
}