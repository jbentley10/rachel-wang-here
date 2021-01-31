/**
 * @file index.js
 */
// Import dependencies
import React, { useState, createRef } from 'react';
import Head from "next/head";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Modal from 'react-modal';
import MailchimpSubscribe from "react-mailchimp-subscribe"

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

  // For the subscribe modal
  const mailChimpURL = "https://rachelwanghere.us20.list-manage.com/subscribe/post?u=6f3b45340606635b68f91ec8b&amp;id=0d280962fa";
  const emailRef = createRef(undefined)
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
                <MailchimpSubscribe
                  url={mailChimpURL}
                  render={({ subscribe, status, message }) => {
                    switch (status) {
                      case "sending":
                        return <div>Sending...</div>
                      case "success":
                        return (
                          <div>You're all signed up! Check your email.</div>
                        )
                      case "error":
                        return <div dangerouslySetInnerHTML={{ __html: message }} />
                      default:
                        return (
                          <form
                            onSubmit={() => {
                              event.preventDefault()

                              subscribe({
                                EMAIL: emailRef.current.value,
                              })
                            }}
                          >
                            <input placeholder={`Email address`} className={`w-full font-barlow form-input mt-1 block border-gray-400 border-solid border-2 mb-4 py-4 px-4`} type="email" ref={emailRef} />
                            <input className={`w-full mt-3 outline-none text-center font-barlow uppercase py-3 px-3 cursor-pointer transition duration-200 bg-purple text-white`} type="submit" value="subscribe" />
                          </form>
                        )
                    }
                  }}
                />
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
          <ThreeButtonBlade
            heading={homepageContent.fields.popoutBladeHeading}
            buttons={[
              {
                heading: homepageContent.fields.popoutBladeColumn1Heading,
                description: homepageContent.fields.popoutBladeColumn1Subtext,
                link: `/blog`
              },
              {
                heading: homepageContent.fields.popoutBladeColumn2Heading,
                description: homepageContent.fields.popoutBladeColumn2Subtext,
                link: `/blog`
              },
              {
                heading: homepageContent.fields.popoutBladeColumn3Heading,
                description: homepageContent.fields.popoutBladeColumn3Subtext,
                link: `/blog`
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
