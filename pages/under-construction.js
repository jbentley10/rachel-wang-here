/**
 * @file free-meditations.js
 */
// Import dependencies
import Head from 'next/head'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ReactPlayer from 'react-player';

// Import functions
import { fetchUnderConstruction, fetchFooter } from '../utils/contentfulPages';

// Import components
import Layout from '../components/layout';
import Container from '../components/container';
import Header from '../components/header';
import HeroSplitCenter from '../components/hero-split-center';
import ImageText5050SplitLeft from '../components/image-text-5050-split-left';
import { getMeditations } from '../lib/api';

export default function UnderConstruction({ preview, pageContent, footerContent, meditations: { edges } }) {
  console.log(edges);

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
            image={pageContent.fields.pageHeadingImage.fields.file.url}
            alt={pageContent.fields.pageHeadingImage.fields.description}
          />
          <div className={`page-body-content px-12 md:px-32 lg:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat block`}>
            <ImageText5050SplitLeft 
              heading={pageContent.fields.oneOnOneHeading}
              text={documentToHtmlString(pageContent.fields.oneOnOneCopy)}
              image={pageContent.fields.oneOnOneImage.fields.file.url}
              alt={pageContent.fields.pageHeadingImage.fields.description}
            />
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
  const pageContent = await fetchUnderConstruction();
  const footerContent = await fetchFooter();
  const meditations = await getMeditations();

  if (footerContent.fields && pageContent.fields) {
    return {
      props: {
        footerContent,
        pageContent,
        meditations
      },
    };
  } else return;
}