/**
 * @file elevate-here-membership.js
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
import { fetchSidebar, fetchBeHereNowMembership, fetchFooter } from '../utils/contentfulPages'
import { getAllPostsForHome } from '../lib/api';

export default function beHereNowMembership({ preview, pageContent, sidebarContent, footerContent, posts: { edges } }) {
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
          />
          <section className={`overlay-text-box-center bg-purple w-3/4 md:w-5/12 px-32 py-12 m-auto md:-mt-8 text-white font-barlow`}>            
            <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.purpleTextBox, htmlRenderingOptions) }} />
          </section>
          <div className={`page-body-content px-12 md:px-32 lg:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat`}>
            <div className={`text-block-layout-container flex-initial md:w-7/12 pr-16 mt-24`}>
              <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.whatsIncluded, htmlRenderingOptions) }} />
              <br />
              <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.meetYourTeacher, htmlRenderingOptions) }} />
              <br />
              <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.whatStudentsSay, htmlRenderingOptions) }} />
              <br />
              <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.yourInvestment, htmlRenderingOptions) }} />
              <br />
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
  const pageContent = await fetchBeHereNowMembership();
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
    props: { beHereNowMembership, posts, preview },
  }
}