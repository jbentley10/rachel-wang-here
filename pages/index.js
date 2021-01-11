/**
 * @file index.js
 */
// Import dependencies
import React, { useState } from 'react';
import Head from "next/head";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Modal from 'react-modal';

// Import library variables
import { getAllPostsForHome } from "../lib/api";
import { BLOG_NAME } from "../lib/constants";

// Import components
import Container from "../components/container";
import RecentArticles from "../components/recent-articles";
import Header from "../components/header";
import Hero from "../components/hero";
import ThreeColumnSplit from "../components/three-column-split";
import ImageTextSplit from "../components/image-text-split";
import PageLayout from "../components/layout";
import ThreeButtonBlade from "../components/three-button-blade";
import ThreePhotoBackground from "../components/three-photo-background";
import Button from "../components/button";
import { fetchHomepage, fetchFooter } from "../utils/contentfulPages";

export default function Index({ allPosts: { edges }, preview, homepageContent, footerContent }) {
  const recentPosts = edges.slice(0, 3);  

  const [isModalOpen, setIsModalOpen] = useState();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const modalStyle = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    },
    overlay : {
      zIndex                : 90
    }
  };
  

  return (
    <>
      <PageLayout footerContent={footerContent} preview={preview}>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Container>
          <Header />
          <Modal 
           isOpen={isModalOpen}
           contentLabel="Minimal Modal Example"
           style={modalStyle}
          >
            <Button 
              onClick={handleCloseModal}
              color={`purple`}
              text={`Close modal`}
            />
          </Modal>
          <Hero 
            normalHeading={homepageContent.fields.heroBoxSnippet} 
            highlightedHeading={homepageContent.fields.heroBoxSnippetHighlighted}
          />
          <ThreeColumnSplit 
            heading={homepageContent.fields.threeColumnHeading}
            subtext={homepageContent.fields.threeColumnSubtext}
            column1Content={{
              heading: homepageContent.fields.column1heading,
              subtext: homepageContent.fields.column1subtext,
              buttonText: homepageContent.fields.column1buttonText,
              onClick: handleOpenModal
            }}
            column2Content={{
              heading: homepageContent.fields.column2heading,
              subtext: homepageContent.fields.column2subtext,
              buttonText: homepageContent.fields.column2buttonText,
              onClick: handleOpenModal
            }}
            column3Content={{
              heading: homepageContent.fields.column3heading,
              subtext: homepageContent.fields.column3subtext,
              buttonText: homepageContent.fields.column3buttonText,
              onClick: handleOpenModal
            }}
          />
          <ImageTextSplit 
            leftHeading={homepageContent.fields.aboutHeading}
            rightHeadingNormal={homepageContent.fields.aboutSideHeading}
            rightHeadingHighlighted={homepageContent.fields.aboutSideHeadingHighlighted}
            rightBody={documentToHtmlString(homepageContent.fields.aboutSideBody)} 
            rightButtonText={homepageContent.fields.aboutSideButtonText} 
            rightButtonLink={homepageContent.fields.aboutSideButtonLink}
          />
          <ThreeButtonBlade
            heading={homepageContent.fields.popoutBladeHeading}
            buttons={[
              {
                heading: homepageContent.fields.popoutBladeColumn1Heading,
                description: homepageContent.fields.popoutBladeColumn1Subtext,
                link: `/`
              },
              {
                heading: homepageContent.fields.popoutBladeColumn2Heading,
                description: homepageContent.fields.popoutBladeColumn2Subtext,
                link: `/`
              },
              {
                heading: homepageContent.fields.popoutBladeColumn3Heading,
                description: homepageContent.fields.popoutBladeColumn3Subtext,
                link: `/`
              }
            ]}
          />
          <ThreePhotoBackground 
            heading={homepageContent.fields.discoverSectionHeading1}
            subheading={homepageContent.fields.discoverSectionHeading2}
            body={documentToHtmlString(homepageContent.fields.discoverSectionBody)}
            button={{
              text: homepageContent.fields.discoverSectionButtonText,
              color: 'purple',
              href: homepageContent.fields.discoverSectionButtonLink
            }} 
            images={[
              {
                photo: '',
                heading: homepageContent.fields.discoverSectionColumn1Heading,
                subtext: homepageContent.fields.discoverSectionColumn1Subtext,
                buttonText: homepageContent.fields.discoverSectionColumn1ButtonText,
                buttonLink: homepageContent.fields.discoverSectionColumn1ButtonLink,
                buttonColor: 'purple'
              },
              {
                photo: '',
                heading: homepageContent.fields.discoverSectionColumn2Heading,
                subtext: homepageContent.fields.discoverSectionColumn2Subtext,
                buttonText: homepageContent.fields.discoverSectionColumn2ButtonText,
                buttonLink: homepageContent.fields.discoverSectionColumn2ButtonLink,
                buttonColor: 'orange'
              },{
                photo: '',
                heading: homepageContent.fields.discoverSectionColumn3Heading,
                subtext: homepageContent.fields.discoverSectionColumn3Subtext,
                buttonText: homepageContent.fields.discoverSectionColumn3ButtonText,
                buttonLink: homepageContent.fields.discoverSectionColumn3ButtonLink,
                buttonColor: 'yellow'
              }
            ]}
          />

          {/* Show Recent Articles (3 at a time) */}
          {recentPosts.length > 0 && 
            <RecentArticles 
              heading={homepageContent.fields.recentArticlesHeading} 
              posts={recentPosts} 
              buttonText={homepageContent.fields.recentArticlesButtonText}
            />
          }

          {/* Testing Shopify */}
          <h3 className={`text-h3 text-text-color`}>Montlhy Membership</h3>
          <span className={`text-text-color text-paragraph`}>$50 / month</span>
          <Button
            color={`purple`}
            href={`https://john-bentley-partner-test.myshopify.com/products/monthly-membership`}
            text={`Buy Now`}
          />

        </Container>
      </PageLayout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const homepageContent = await fetchHomepage();
  const footerContent = await fetchFooter();

  if (homepageContent.fields && footerContent.fields) {
    return {
      props: {
        homepageContent,
        footerContent,
        allPosts,
        preview
      },
    };
  } else
  return {
    props: { allPosts, preview },
  };
}
