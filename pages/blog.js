/**
 * @file blog.js
 */
// Import dependencies
import Head from 'next/head'
import { useState } from 'react'

// Import library variables
import { getAllPostsForHome, getPostsByCategory } from '../lib/api'
import { BLOG_NAME } from '../lib/constants'

// Import components
import Layout from '../components/layout'
import Container from '../components/container'
import BlogArticles from '../components/blog-articles'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import { fetchSidebar, fetchFooter } from '../utils/contentfulPages'
import Button from '../components/button'
import HeroSplitRight from '../components/hero-split-right'

export default function Blog({ posts: { edges }, preview, sidebarContent, footerContent }) {
  let recentPosts = edges.slice(0, 3);
  const [allPosts, setAllPosts] = useState(edges.slice(0, 20));

  async function categoryPostsHandler(category) {
    let categoryPosts = await getPostsByCategory(preview, category).then(() => {
      console.log(categoryPosts);
      setAllPosts(categoryPosts);
    });
  }

  return (
    <>
      <Layout footerContent={footerContent} preview={preview}>
        <Head>
          <title>{ BLOG_NAME }</title>
        </Head>
        <Container>
          <Header />
          <HeroSplitRight 
            heading={`Blog`}
          />
          <div className={`sidebar-body-split bg-side-blobs-combined bg-no-repeat bg-contain flex px-32 mt-32`}>
            <div className={`all-articles-layout-container w-7/12`}>
              <div className={`blog-categories mb-24`}>
                <h2 className="text-h2 font-rylan text-left mb-8">
                  Categories
                </h2>
                <Button 
                  onClick={() => categoryPostsHandler(`Yoga`)}
                  text={`Yoga and Movement`}
                  color={`purple`}
                  className={`mb-4 w-1/2`}
                />
                <Button 
                  onClick={() => categoryPostsHandler(`Mindset`)}
                  text={`Mindset`}
                  color={`brown`}
                  className={`mb-4 w-1/2`}
                />
                <Button 
                  onClick={() => categoryPostsHandler(`Wellness`)}
                  text={`Wellness`}
                  color={`yellow`}
                  className={`mb-4 w-1/2`}
                />
              </div>

              <div className={`latest-posts`}>
                <h2 className="text-h2 font-rylan text-left">
                  Latest Posts
                </h2>
                {/* Show All Articles (20 at a time) */}
                {allPosts.length > 0 && <BlogArticles posts={allPosts} />}
              </div>
            </div>
            <div className={`sidebar-layout-container bg-clear-background w-5/12 px-12`}>
              <Sidebar posts={recentPosts} content={sidebarContent.fields} />
            </div> 
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = await getAllPostsForHome(preview);
  const sidebarContent = await fetchSidebar();
  const footerContent = await fetchFooter();

  if (sidebarContent.fields && footerContent.fields) {
    return {
      props: {
        sidebarContent,
        footerContent,
        posts,
        preview
      },
    };
  } else
  return {
    props: { posts, preview },
  }
}