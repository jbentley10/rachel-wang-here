/**
 * @file free-meditations.js
 */
// Import dependencies
import Head from 'next/head'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Import library variables
import { htmlRenderingOptions } from '../lib/constants';

// Import functions
import { fetchFreeMeditations, fetchFooter } from '../utils/contentfulPages';

// Import components
import Layout from '../components/layout';
import Container from '../components/container';
import Header from '../components/header';
import HeroSplitCenter from '../components/hero-split-center';
import ImageText5050SplitLeft from '../components/image-text-5050-split-left';
import ArticlesPanel from '../components/articles-panel';
import ImageText5050SplitRight from '../components/image-text-5050-split-right';
import Button from '../components/button';

export default function FreeMeditations({ preview, pageContent, footerContent }) {

  return (
    <div>
      {/* Meta description for SEO */}
      <Layout footerContent={footerContent} metaDescription={pageContent.fields.metaDescription} preview={preview}>
        <Head>
          {/* Title tag for SEO */}
          <title>{pageContent.fields.pageTitle}</title>
        </Head>
        <Container>
          <Header />
          <HeroSplitCenter 
            heading={pageContent.fields.pageHeading}
          />
          <div className={`page-body-content px-12 md:px-32 lg:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat block`}>
            <ImageText5050SplitLeft 
              heading={pageContent.fields.oneOnOneHeading}
              text={documentToHtmlString(pageContent.fields.oneOnOneCopy)}
            />
          </div>
          <div className={`page-body-content px-12 pt-24 pb-48 md:px-32 lg:px-64 block`}>
            <div className={`text-blocks flex`}>
              <div className={`left-text-block flex-initial w-1/2 mr-16`}>
                <h4 className={`text-h4 font-rylan text-text-color leading-none`}>{pageContent.fields.meditation1Title}</h4>
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.meditation1Copy) }} />
                <div dangerouslySetInnerHTML={{ __html: `
                  <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${pageContent.fields.meditation1ID}&color=0066cc"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/the-bugle" title="The Bugle" target="_blank" style="color: #cccccc; text-decoration: none;">The Bugle</a> · <a href="https://soundcloud.com/the-bugle/bugle-179-playas-gon-play" title="Bugle 179 - Playas gon play" target="_blank" style="color: #cccccc; text-decoration: none;">Bugle 179 - Playas gon play</a></div>
                `}} />
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

export async function getStaticProps() {
  const pageContent = await fetchFreeMeditations();
  const footerContent = await fetchFooter();

  if (footerContent.fields && pageContent.fields) {
    return {
      props: {
        footerContent,
        pageContent
      },
    };
  } else return;
}