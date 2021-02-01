/**
 * @file private-resources.js
 */
// Import dependencies
import Head from 'next/head';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useRouter } from "next/router";

// Import library variables
import { htmlRenderingOptions } from '../lib/constants';

// Import functions
import { fetchSidebar, fetchPrivateResources, fetchFooter } from '../utils/contentfulPages'
import { getAllPostsForHome, getPrivateGuides } from '../lib/api';

// Import components
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import HeroSplitRight from '../components/hero-split-right'
import LoginField from '../components/login-field';
import ResourcePreview from '../components/resource-preview';

export default function PrivateResources({ hasReadPermission, preview, pageContent, sidebarContent, footerContent, privateGuides, posts: { edges } }) {
  const recentPosts = edges.slice(0, 3);

  const router = useRouter()

  if (!hasReadPermission) {
    return <LoginField redirectPath={router.asPath} />
  }

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
          <div className={`page-body-content md:px-24 lg:px-32 xl:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat`}>
            <div className={`sidebar-body-split flex`}>
              <div className={`text-block-layout-container flex-initial md:w-7/12 pr-16 mt-24`}>
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.richTextContent, htmlRenderingOptions)}} />
                { privateGuides && 
                  privateGuides.edges.map(({ node, index }) => (
                    <ResourcePreview
                      key={node.title}
                      title={node.title}
                      description={node.description}
                      coverImage={node.featuredImage}
                      slug={node.mediaItemUrl}
                    />
                  ))
                }
              </div>
              <div className={`sidebar-layout-container md:bg-clear-background w-5/12 px-12`}>
                <Sidebar posts={recentPosts} content={sidebarContent.fields}/>
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

export async function getStaticProps({ preview = false }) {
  const posts = await getAllPostsForHome(preview);
  const privateGuides = await getPrivateGuides();
  const sidebarContent = await fetchSidebar();  
  const pageContent = await fetchPrivateResources();
  const footerContent = await fetchFooter();

  if (sidebarContent.fields && pageContent.fields && footerContent.fields && privateGuides) {
    return {
      props: {
        sidebarContent,
        pageContent,
        footerContent,
        posts,
        preview,
        privateGuides
      }
    };
  } else
  return {
    props: { posts, preview },
  }
}