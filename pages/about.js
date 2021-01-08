/**
 * @file about.js
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
import OverlayTextBox from '../components/overlay-text-box'
import { fetchSidebar, fetchAbout, fetchFooter } from '../utils/contentfulPages'
import { getAllPostsForHome } from '../lib/api'
import PopoutBlade from '../components/popout-blade';
import PopoutBladeAlt from '../components/popout-blade-alt';

export default function About({ preview, aboutContent, sidebarContent, footerContent, posts: { edges } }) {
  const recentPosts = edges.slice(0, 3);
  return (
    <div>
      {/* Meta description for SEO */}
      <Layout footerContent={footerContent} metaDescription={aboutContent.fields.metaDescription} preview={preview}>
        <Head>
          {/* Title tag for SEO */}
          <title>{ aboutContent.fields.pageTitle }</title>
        </Head>
        <Container>
          <Header />
          <HeroSplitRight 
            heading={aboutContent.fields.pageHeading}
          />
          <OverlayTextBox 
            text1={documentToHtmlString(aboutContent.fields.purpleBoxCopy1)}
            text2={documentToHtmlString(aboutContent.fields.purpleBoxCopy2)}
          />
          <div className={`page-body-content px-12 md:px-32 lg:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat`}>
            <div className={`sidebar-body-split flex`}>
              <div className={`text-block-layout-container flex-initial md:w-7/12 pr-16 mt-24`}>
                <h1 className={`highlighted-text text-h1 font-rylan text-text-color`}>
                  {aboutContent.fields.highlightedHeading}
                </h1>
                <div className={`copy-block my-24`}>
                  <h2 className={`font-rylan text-h2 text-text-color`}>{aboutContent.fields.section1Heading}</h2>
                  <p className={`text-text-color font-barlow text-paragraph`}>
                    <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(aboutContent.fields.section1Copy) }} />
                  </p>
                </div>
                <div className={`image-copy-block my-24`}>
                  <div className={`clear-background bg-clear-background p-10 relative z-10 transform translate-x-8 translate-y-24 h-full`} />
                  <div className={`transform -translate-y-32 relative z-30`}>
                    <img src={`https:` + aboutContent.fields.section1Image.fields.file.url} />
                  </div>
                  <h2 className={`font-rylan text-h2 text-text-color`}>{aboutContent.fields.section2Heading}</h2>
                  <p className={`text-text-color font-barlow text-paragraph`}>
                    <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(aboutContent.fields.section2Copy) }} />
                  </p>
                </div>
                <div className={`copy-block my-24`}>
                  <h2 className={`font-rylan text-h2 text-text-color`}>{aboutContent.fields.section3Heading}</h2>
                  <p className={`text-text-color font-barlow text-paragraph`}>
                    <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(aboutContent.fields.section3Copy) }} />
                  </p>
                </div>
              </div>
              <div className={`sidebar-layout-container bg-clear-background w-5/12 px-12`}>
                <Sidebar posts={recentPosts} content={sidebarContent.fields}/>
              </div>
            </div>
          </div>
          <PopoutBlade 
            heading={aboutContent.fields.popoutBlade1Heading}
            body={documentToHtmlString(aboutContent.fields.popoutBlade1Copy)}
          />
          <div className={`bg-wavy-background w-full h-64`} />
          <PopoutBladeAlt
            heading={aboutContent.fields.popoutBlade2Heading}
            body={documentToHtmlString(aboutContent.fields.popoutBlade2Copy)}
            button={{
              href: aboutContent.fields.popoutBlade2ButtonLink,
              text: aboutContent.fields.popoutBlade2ButtonText,
              color: 'purple'
            }}
          />
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
  const aboutContent = await fetchAbout();
  const footerContent = await fetchFooter();

  if (sidebarContent.fields && aboutContent.fields && footerContent.fields) {
    return {
      props: {
        sidebarContent,
        aboutContent,
        footerContent,
        posts,
        preview
      },
    };
  } else
  return {
    props: { about, posts, preview },
  }
}