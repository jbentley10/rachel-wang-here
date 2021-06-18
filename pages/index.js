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
import BackgroundPhotoBox from '../components/background-photo-box';

export default function Index({ allPosts: { edges }, preview, homepageContent, footerContent }) {
  const recentPosts = edges.slice(0, 3);  

  // For the subscribe modal
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
      <PageLayout ctaButtonOnClick={handleOpenModal} footerContent={footerContent} preview={preview} metaDescription={homepageContent.fields.metaDescription}>
        <Head>
          <title>{homepageContent.fields.pageTitle}</title>
        </Head>
        <Container>
          <Header />
          <Modal 
           isOpen={isModalOpen}
           contentLabel="Minimal Modal Example"
           style={modalStyle} 
           shouldCloseOnOverlayClick={true}
           onRequestClose={handleCloseModal}
          >
            <div className={`w-full max-w-sm mx-auto border-4 border-gray m-auto align-middle mt-8 py-8 px-10`}>
              <div>
              <h2 className="font-rylan text-text-color text-h2 leading-tight mb-8">Subscribe to gain access to exclusive content!</h2>
              <p className="font-barlow text-text-color text-paragraph leading-snug mb-8">By submitting your email below, I assume you're okay with getting some occassional emails from me that I promise you'll love!</p>
                <div dangerouslySetInnerHTML={{ __html: `
                  <!-- Begin Mailchimp Signup Form -->
                  <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
                  <style type="text/css">
                    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
                    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                  </style>
                  <style type="text/css">
                    #mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}
                    #mergeRow-gdpr {margin-top: 20px;}
                    #mergeRow-gdpr fieldset label {font-weight: normal;}
                    #mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
                  </style>
                  <div id="mc_embed_signup">
                  <form action="https://rachelwanghere.us20.list-manage.com/subscribe/post?u=6f3b45340606635b68f91ec8b&amp;id=0d280962fa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                      <div id="mc_embed_signup_scroll">
                    
                    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6f3b45340606635b68f91ec8b_0d280962fa" tabindex="-1" value=""></div>
                      <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                      </div>
                  </form>
                  </div>
                  
                  <!--End mc_embed_signup-->
                `}} />
              </div>
            </div>
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
          <BackgroundPhotoBox 
            heading={'Be Here Now'}
            images={[
              {
                text: homepageContent.fields.discoverSectionColumn1Heading,
                link: '/be-here-now-membership',
                buttonColor: 'purple'
              },
              {
                text: homepageContent.fields.discoverSectionColumn2Heading,
                link: '/',
                buttonColor: 'orange'
              }
            ]}
            backgroundImage={'/homepage-header-background.png'}
            backgroundImageAlt={'Alt text'}
          />
          <ThreePhotoBackground 
            heading={homepageContent.fields.discoverSectionHeading1}
            subheading={homepageContent.fields.discoverSectionHeading2}
            body={documentToHtmlString(homepageContent.fields.discoverSectionBody)}
            button={{
              text: homepageContent.fields.discoverSectionButtonText,
              color: 'purple',
              href: 'https://www.youtube.com/channel/UC8uFq5kz1h4OaiJUhwb8ijQ/about'
            }} 
            images={[
              {
                photo: '',
                text: homepageContent.fields.discoverSectionColumn1Heading,
                link: '/be-here-now-membership',
              },
              {
                photo: '',
                text: homepageContent.fields.discoverSectionColumn2Heading,
                link: 'https://www.youtube.com/channel/UC8uFq5kz1h4OaiJUhwb8ijQ/about',
              },
              {
                photo: '',
                text: homepageContent.fields.discoverSectionColumn3Heading,
                link: '/free-meditations',
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
