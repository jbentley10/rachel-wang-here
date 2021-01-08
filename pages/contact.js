/**
 * @file contact.js
 */
// Import dependencies
import Head from 'next/head';
import Image from 'next/image';

// Import library variables
import { getAllPostsForHome } from '../lib/api';

// Import components
import Layout from '../components/layout';
import Container from '../components/container';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import HeroSplitRight from '../components/hero-split-right';
import { fetchSidebar, fetchFooter } from '../utils/contentfulPages';
import Button from '../components/button';

export default function Contact({ preview, sidebarContent, footerContent, posts: { edges } }) {
  const recentPosts = edges.slice(0, 3);

  return (
    <>
      {/* Meta description for SEO */}
      <Layout footerContent={footerContent} metaDescription={`Contact meta description`} preview={preview}>
        <Head>
          {/* Title tag for SEO */}
          <title>{ `Contact | Rachel Wang Here` }</title>
        </Head>
        <Container>
          <Header />
          <HeroSplitRight 
            heading={`Contact`}
          />
          <div className={`page-body-content px-12 md:px-32 lg:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat`}>
            <div className={`sidebar-body-split flex`}>
              <div className={`text-block-layout-container flex-initial md:w-7/12 pr-16 mt-24`}>                
                <div className="page__content text-base leading-relaxed mb-4">
                  <div className={`image-container w-4/12`}>
                    <div className={`clear-background bg-clear-background p-10 relative z-10 transform translate-x-8 translate-y-24 h-full`} />
                    <div className={`relative z-30`}>
                      <Image 
                        src={`/rachel-handstand.png`}
                        width={`400`}
                        height={`400`}
                      />
                    </div>
                  </div>
                  <h2 className={`text-h2 font-rylan`}>Say Hello</h2>
                </div>                
                <div className={`contact__form-container md:px-12`}>
                  <form>
                    <input className={`footer__name-input my-3 pl-10 w-11/12 md:w-9/12 py-4 border text-text ml-4`} placeholder="Name"></input><br />
                    <input className={`footer__name-input my-3 pl-10 w-11/12 md:w-9/12 py-4 border text-text ml-4`} placeholder="Email Address"></input><br />
                    <input className={`footer__name-input my-3 pl-10 w-11/12 md:w-9/12 py-4 border text-text ml-4`} placeholder="Subject"></input><br />
                    <input className={`footer__name-input my-3 pl-10 w-11/12 md:w-9/12 py-4 border text-text ml-4`} placeholder="Message"></input><br />
                    <Button 
                      className={`w-1/2`}
                      color={`purple`}
                      href={`https://www.google.com`}
                      onClick
                      text={`Send Message`}
                    />
                  </form>
                </div>
              </div>
              <div className={`sidebar-layout-container bg-clear-background w-5/12 px-12`}>
                <Sidebar posts={recentPosts} content={sidebarContent.fields}/>
              </div>
            </div>
          </div>
          
        </Container>
      </Layout>
      <style jsx>{`
      input {
        background-color: white;
      }
      `}</style>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const sidebarContent = await fetchSidebar();
  const footerContent = await fetchFooter();
  const posts = await getAllPostsForHome(preview);

  if (sidebarContent.fields && footerContent.fields) {
    return {
      props: {
        sidebarContent,
        footerContent,
        preview,
        posts
      },
    }
  } else {
    return {
      props: {
        contact,
        posts,
        preview
      }
    }
  }
}