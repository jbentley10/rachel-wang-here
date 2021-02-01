/**
 * @file about.js
 */
// Import dependencies
import Head from 'next/head'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useState } from 'react';
import Modal from 'react-modal';

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
import Button from '../components/button';
import PageLayout from '../components/layout';

export default function About({ preview, pageContent, sidebarContent, footerContent, posts: { edges } }) {
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
      {/* Meta description for SEO */}
      <PageLayout ctaButtonOnClick={handleOpenModal} footerContent={footerContent} preview={preview} metaDescription={pageContent.fields.metaDescription}>
        <Head>
          {/* Title tag for SEO */}
          <title>{ pageContent.fields.pageTitle }</title>
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
          <HeroSplitRight 
            heading={pageContent.fields.pageHeading}
            image={pageContent.fields.pageHeadingImage.fields.file.url}
            alt={pageContent.fields.pageHeadingImage.fields.description}
          />
          <OverlayTextBox 
            text1={documentToHtmlString(pageContent.fields.purpleBoxCopy1)}
            text2={documentToHtmlString(pageContent.fields.purpleBoxCopy2)}
          />
          <div className={`page-body-content px-16 md:px-24 lg:px-32 xl:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat`}>
            <div className={`sidebar-body-split flex`}>
              <div className={`text-block-layout-container flex-initial md:w-7/12 md:pr-16 mt-24`}>
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
              <div className={`sidebar-layout-container md:bg-clear-background w-5/12 px-12`}>
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
          >
            <Button 
              color={`purple`}
              text={`Sign me up`}
              onClick={handleOpenModal}
            />
          </PopoutBladeAlt>
        </Container>
      </PageLayout>
      {/* Only style elements that aren't dangerously set */}
      <style jsx>{`        
        .highlighted-text {
          background: linear-gradient(180deg, rgba(255,255,255,0) 45%, #F4C06F 45%);
          display: inline;
        }
      `}</style>
    </>
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