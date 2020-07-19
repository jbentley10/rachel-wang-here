/**
 * @file blog.js
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

export default function Blog({ allPosts: { edges }, preview }) {
  const recentPosts = edges.slice(0, 3)

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{ BLOG_NAME }</title>
        </Head>
        <Container>
          <Header />
          <div className={`sidebar-body-split flex`}>
            <div className={`recent-articles-layout-container flex-initial md:w-7/12`}>
              {/* Show Recent Articles (3 at a time) */}
              {recentPosts.length > 0 && <RecentArticles posts={recentPosts} />}
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

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}