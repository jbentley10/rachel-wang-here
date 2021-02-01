/**
 * @file landing-page-template.js
 */
// Import dependencies
import Head from 'next/head'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Import library variables
import { htmlRenderingOptions } from '../../lib/constants';

// Import functions
import { fetchHeresWhereToBegin, fetchFooter } from '../../utils/contentfulPages';

// Import components
import Layout from '../../components/layout';
import Container from '../../components/container';
import Header from '../../components/header';
import HeroSplitCenter from '../../components/hero-split-center';
import ImageText5050SplitLeft from '../../components/image-text-5050-split-left';
import ArticlesPanel from '../../components/articles-panel';
import ImageText5050SplitRight from '../../components/image-text-5050-split-right';

export default function About({ preview, pageContent, footerContent }) {

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
            category={pageContent.fields.pageCategory}
            image={pageContent.fields.headingImage.fields.file.url}
          />
          <div className={`page-body-content px-16 md:px-24 lg:px-32 xl:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat block`}>
            <div className={`left-right-text-split pt-32`}>
              <div className={`float-left w-1/2 mt-8 mb-16`}>
                <h4 className={`text-h4 text-text-color leading-none font-rylan`}>
                  {pageContent.fields.introLine1}
                </h4>
              </div>
              <div className={`float-right w-1/2 mt-32 mb-8 bg-flower-background bg-contain bg-no-repeat py-24`}>
                <h4 className={`text-h4 text-text-color leading-none font-rylan`}>
                  {pageContent.fields.introLine2}
                </h4>
              </div>
            </div>
            <div className={`w-full text-center m-auto my-8 clear-both`}>
              <h2 className={`text-h2 text-text-color leading-none font-rylan`}>
                {pageContent.fields.introLine3}
              </h2>
            </div>
            <ImageText5050SplitLeft 
              heading={pageContent.fields.aboutBlockHeading}
              text={documentToHtmlString(pageContent.fields.aboutBlockRichText)}
              image={pageContent.fields.aboutBlockHeadingImage.fields.file.url}
              alt={pageContent.fields.aboutBlockHeadingImage.fields.description}
            />
          </div>
          <ArticlesPanel 
            heading={pageContent.fields.articlesHeading}
            posts={[
              {
                key: Math.random(),
                title: pageContent.fields.article1Title,
                // coverImage: pageContent.fields.article1
                // date: pageContent.fields.article1
                // author: pageContent.fields.article1
                slug: pageContent.fields.article1ButtonLink,
                excerpt: pageContent.fields.article1Description
              }
            ]}
          />
          <div className={`page-body-content py-16 px-16 md:px-24 lg:px-32 xl:px-64 block`}>
            <h1 className={`text-h1 text-text-color font-rylan text-center m-auto`}>{pageContent.fields.guidesHeading}</h1>
            <ImageText5050SplitLeft 
              heading={pageContent.fields.guidesCopyHeading1}
              text={documentToHtmlString(pageContent.fields.guidesCopyRichText1)}
              image={pageContent.fields.guidesCopyImage1.fields.file.url}
              alt={pageContent.fields.guidesCopyImage1.fields.description}
              buttonText={pageContent.fields.guidesCopyButtonText1}
              buttonLink={pageContent.fields.guidesCopyButtonLink1}
              buttonColor={`purple`}
            />
            <ImageText5050SplitRight
              heading={pageContent.fields.guidesCopyHeading2}
              text={documentToHtmlString(pageContent.fields.guidesCopyRichText2)}
              image={pageContent.fields.guidesCopyImage2.fields.file.url}
              alt={pageContent.fields.guidesCopyImage2.fields.description}
              buttonText={pageContent.fields.guidesCopyButtonText2}
              buttonLink={pageContent.fields.guidesCopyButtonLink2}
              buttonColor={`purple`}
            />
            <div className={`youtube-videos`}>
              <h2 className={`text-h2 font-rylan text-text-color leading-none text-center pb-4`}>{pageContent.fields.youTubeVideosHeading}</h2>
              <div className={`text-paragraph leading-normal font-barlow md:px-8`}>
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.youTubeVideosSubtext, htmlRenderingOptions) }} />
              </div>
              <div className={`video-quadrant block`}>
                <div className={`video-quadrant__row block md:flex`}>
                  <div className={`video-quadrant__row__video bg-paint-shapes bg-cover bg-no-repeat m-auto`}>
                    <div className={`iframe-container w-full py-4 md:p-8 text-center m-auto`}>
                      <iframe src={pageContent.fields.youTubeVideo1} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    </div>
                  </div>
                  <div className={`video-quadrant__row__video bg-paint-shapes bg-cover bg-no-repeat m-auto`}>
                    <div className={`iframe-container w-full py-4 md:p-8 text-center m-auto`}>
                      <iframe src={pageContent.fields.youTubeVideo2} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    </div>
                  </div>
                </div>
                <div className={`video-quadrant__row block md:flex`}>
                  <div className={`video-quadrant__row__video bg-paint-shapes bg-cover bg-no-repeat m-auto`}>
                    <div className={`iframe-container w-full py-4 md:p-8 text-center m-auto`}>
                      <iframe src={pageContent.fields.youTubeVideo3} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    </div>
                  </div>
                  <div className={`video-quadrant__row__video bg-paint-shapes bg-cover bg-no-repeat m-auto`}>
                    <div className={`iframe-container w-full py-4 md:p-8 text-center m-auto`}>
                      <iframe src={pageContent.fields.youTubeVideo4} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>
          <div className={`wavy-bottom w-full h-64 bg-wavy-background bg-cover bg-no-repeat -my-28`} />
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
  const pageContent = await fetchHeresWhereToBegin();
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