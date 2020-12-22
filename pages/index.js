/**
 * @file index.js
 */
// Import dependencies
import Head from "next/head";

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
import SimpleCTA from "../components/simple-cta";
import PageLayout from "../components/layout";
import PopoutBlade from "../components/popout-blade";
import ThreeButtonBlade from "../components/three-button-blade";
import ThreePhotoBackground from "../components/three-photo-background";
import Button from "../components/button";

export default function Index({ allPosts: { edges }, preview }) {
  const recentPosts = edges.slice(0, 3);  

  return (
    <>
      <PageLayout preview={preview}>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Container>
          <Header />
          <Hero />
          <ThreeColumnSplit />
          <ImageTextSplit />
          <ThreeButtonBlade
            heading={`Learn online with me`}
            buttons={[
              {
                heading: `Body`,
                description: `Lorem ipsum solor dut amet.`,
                link: `/`
              },
              {
                heading: `Mind`,
                description: `Lorem ipsum solor dut amet.`,
                link: `/`
              },
              {
                heading: `Heart`,
                description: `Lorem ipsum solor dut amet.`,
                link: `/`
              }
            ]}
          />
          <ThreePhotoBackground 
            heading={`Start Here. Start Now.`}
            subheading={`Discover the Library`}
            body={`With FREE full length classes, tutorials, and how-to’s to 
            choose from, you will always find something to help 
            improve your body, mind, and overall well-being.  
            
            I offer a variety of styles and pose breakdowns, 
            ranging from beginner basics, to gentle sequences, 
            to strong and dynamic flows, to functional mobility 
            work, to mindset tools, and a little bit of 
            everything in between.
            
            Let’s be human together.`}
            button={{
              text: 'Subscribe on YouTube',
              color: 'purple',
              href: '/'
            }} 
            images={[
              {
                photo: '',
                heading: 'Be Here Now',
                subtext: 'Lorem ipsum solor dut amet.',
                buttonText: 'Practice Now',
                buttonLink: '/',
                buttonColor: 'purple'
              },
              {
                photo: '',
                heading: 'YouTube',
                subtext: 'Lorem ipsum solor dut amet.',
                buttonText: 'Practice Now',
                buttonLink: '/',
                buttonColor: 'orange'
              },{
                photo: '',
                heading: 'Audio',
                subtext: 'Lorem ipsum solor dut amet.',
                buttonText: 'Practice Now',
                buttonLink: '/',
                buttonColor: 'yellow'
              }
            ]}
          />

          {/* Show Recent Articles (3 at a time) */}
          {recentPosts.length > 0 && <RecentArticles posts={recentPosts} />}

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

  return {
    props: { allPosts, preview },
  };
}
