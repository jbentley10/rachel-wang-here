/**
 * @file practice.js
 */
// Import dependencies
import Head from 'next/head'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Import library variables
import { htmlRenderingOptions } from '../lib/constants';

// Import components
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import HeroSplitRight from '../components/hero-split-right'
import { fetchSidebar, fetchPractice, fetchFooter } from '../utils/contentfulPages'
import { getAllPostsForHome } from '../lib/api';

export default function Practice({ preview, pageContent, sidebarContent, footerContent, posts: { edges } }) {
  const recentPosts = edges.slice(0, 3);
  return (
    <div>
      {/* Meta description for SEO */}
      <Layout footerContent={footerContent} metaDescription={pageContent.fields.metaDescription} preview={preview}>
        <Head>
          {/* Title tag for SEO */}
          <title>{ pageContent.fields.pageTitle }</title>
        </Head>
        <Container>
          <Header />
          <HeroSplitRight 
            heading={pageContent.fields.pageHeading}
            image={pageContent.fields.pageHeadingImage.fields.file.url}
            alt={pageContent.fields.pageHeadingImage.fields.description}
          />
          <div className={`page-body-content py-8 px-4 md:px-24 lg:px-32 xl:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat`}>
            <div className={`sidebar-body-split flex`}>
              <div className={`text-block-layout-container flex-initial w-full md:w-7/12 md:pr-16 mt-24`}>
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.introText, htmlRenderingOptions) }} />
              </div>
              <div className={`sidebar-layout-container md:bg-clear-background w-5/12 px-12`}>
                <Sidebar posts={recentPosts} content={sidebarContent.fields}/>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
      {/* Only style elements that aren't dangerously set */}
      <style jsx>{`        
        .highlighted-text {
          background: linear-gradient(180deg, rgba(255,255,255,0) 45%, #F4C06F 45%);
          display: inline;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = await getAllPostsForHome(preview);
  const sidebarContent = await fetchSidebar();  
  const pageContent = await fetchPractice();
  const footerContent = await fetchFooter();

  if (sidebarContent.fields && pageContent.fields && footerContent.fields) {
    return {
      props: {
        sidebarContent,
        pageContent,
        footerContent,
        posts,
        preview
      },
    };
  } else
  return {
    props: { practice, posts, preview },
  }
}