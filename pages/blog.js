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
import BlogArticles from '../components/blog-articles'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

export default function Blog({ allPosts: { edges }, preview }) {
  const allPosts = edges.slice(0, 20);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{ BLOG_NAME }</title>
        </Head>
        <Container>
          <Header />
          <div className={`sidebar-body-split flex`}>
            <div className={`all-articles-layout-container flex-initial md:w-7/12`}>
              {/* Show All Articles (20 at a time) */}
              {allPosts.length > 0 && <BlogArticles posts={allPosts} />}
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