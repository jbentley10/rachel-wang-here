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

export default function About({ preview, pageContent, sidebarContent, footerContent, posts: { edges } }) {
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
          <OverlayTextBox 
            text1={documentToHtmlString(pageContent.fields.purpleBoxCopy1)}
            text2={documentToHtmlString(pageContent.fields.purpleBoxCopy2)}
          />
          <div className={`page-body-content md:px-24 lg:px-32 xl:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat`}>
            <div className={`sidebar-body-split flex`}>
              <div className={`text-block-layout-container flex-initial md:w-7/12 pr-16 mt-24`}>
                <h1 className={`highlighted-text text-h1 font-rylan text-text-color leading-none`}>
                  {pageContent.fields.highlightedHeading}
                </h1>
                <div className={`copy-block my-24`}>
                  <h2 className={`font-rylan text-h2 text-text-color leading-none`}>{pageContent.fields.section1Heading}</h2>
                  <p className={`text-paragraph leading-normal font-barlow text-text-color`}>
                    <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.section1Copy) }} />
                  </p>
                </div>
                <div className={`image-copy-block my-24`}>
                  <div className={`clear-background bg-clear-background p-10 relative z-10 transform translate-x-8 translate-y-24 h-full`} />
                  <div className={`transform -translate-y-32 relative z-30`}>
                    <img src={`https:` + pageContent.fields.section1Image.fields.file.url} />
                  </div>
                  <h2 className={`font-rylan text-h2 text-text-color`}>{pageContent.fields.section2Heading}</h2>
                  <div className={`text-paragraph leading-normal font-barlow text-text-color`}>
                    <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.section2Copy) }} />
                  </div>
                </div>
                <div className={`copy-block my-24`}>
                  <h2 className={`font-rylan text-h2 text-text-color`}>{pageContent.fields.section3Heading}</h2>
                  <div className={`text-paragraph leading-normal font-barlow text-text-color`}>
                    <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.section3Copy) }} />
                  </div>
                </div>
              </div>
              <div className={`sidebar-layout-container bg-clear-background w-5/12 px-12`}>
                <Sidebar posts={recentPosts} content={sidebarContent.fields}/>
              </div>
            </div>
          </div>
          <PopoutBlade 
            heading={pageContent.fields.popoutBlade1Heading}
            body={documentToHtmlString(pageContent.fields.popoutBlade1Copy)}
          />
          <div className={`bg-wavy-background w-full h-64`} />
          <PopoutBladeAlt
            heading={pageContent.fields.popoutBlade2Heading}
            body={documentToHtmlString(pageContent.fields.popoutBlade2Copy)}
            button={{
              href: pageContent.fields.popoutBlade2ButtonLink,
              text: pageContent.fields.popoutBlade2ButtonText,
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
  const pageContent = await fetchAbout();
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
    props: { about, posts, preview },
  }
}