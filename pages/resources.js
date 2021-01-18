/**
 * @file resources.js
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
import { fetchSidebar, fetchResources, fetchFooter } from '../utils/contentfulPages'
import { getAllPostsForHome } from '../lib/api';

export default function Resources({ preview, resourcesContent, sidebarContent, footerContent, posts: { edges } }) {
  const recentPosts = edges.slice(0, 3);
  return (
    <div>
      {/* Meta description for SEO */}
      <Layout footerContent={footerContent} metaDescription={`Resources page meta description`} preview={preview}>
        <Head>
          {/* Title tag for SEO */}
          <title>{ 'Resources | Rachel Wang Here' }</title>
        </Head>
        <Container>
          <Header />
          <HeroSplitRight 
            heading={resourcesContent.fields.pageHeading}
            image={resourcesContent.fields.pageHeadingImage.fields.file.url}
          />
          <div className={`page-body-content px-12 md:px-32 lg:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat`}>
            <div className={`sidebar-body-split flex`}>
              <div className={`text-block-layout-container flex-initial md:w-7/12 pr-16 mt-24`}>
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(resourcesContent.fields.richText, htmlRenderingOptions)}} />
              </div>
              <div className={`sidebar-layout-container bg-clear-background w-5/12 px-12`}>
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
  const resourcesContent = await fetchResources();
  const footerContent = await fetchFooter();

  if (sidebarContent.fields && resourcesContent.fields && footerContent.fields) {
    return {
      props: {
        sidebarContent,
        resourcesContent,
        footerContent,
        posts,
        preview
      },
    };
  } else
  return {
    props: { resources, posts, preview },
  }
}