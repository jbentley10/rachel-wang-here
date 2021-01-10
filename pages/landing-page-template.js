/**
 * @file landing-page-template.js
 */
// Import dependencies
import Head from 'next/head'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Import library variables
import { htmlRenderingOptions } from '../lib/constants';

// Import components
import Layout from '../components/layout';
import Container from '../components/container';
import Header from '../components/header';
import { fetchSidebar, fetchAbout, fetchFooter } from '../utils/contentfulPages';
import { getAllPostsForHome } from '../lib/api';
import HeroSplitCenter from '../components/hero-split-center';

export default function About({ preview, footerContent }) {
  return (
    <div>
      {/* Meta description for SEO */}
      <Layout footerContent={footerContent} metaDescription={`Beginner yoga track for Rachel Wang Here.`} preview={preview}>
        <Head>
          {/* Title tag for SEO */}
          <title>{ `Here's Where to Begin | Yoga | Rachel Wang Here` }</title>
        </Head>
        <Container>
          <Header />
          <HeroSplitCenter 
            heading={`Here's Where to Begin`}
          />
          <div className={`page-body-content px-12 md:px-32 lg:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat`}>
                        
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

export async function getStaticProps() {
  const footerContent = await fetchFooter();

  if (footerContent.fields) {
    return {
      props: {
        footerContent
      },
    };
  } else return;
}