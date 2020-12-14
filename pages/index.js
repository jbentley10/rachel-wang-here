/**
 * @file index.js
 */
// Import dependencies
import Head from "next/head";

// Import library variables
import { getAllPostsForHome, getProducts } from "../lib/api";
import { BLOG_NAME } from "../lib/constants";

// Import components
import Container from "../components/container";
import RecentArticles from "../components/recent-articles";
import Header from "../components/header";
import Hero from "../components/hero";
import ThreeColumnSplit from "../components/three-column-split";
import ImageTextSplit from "../components/image-text-split";
import SimpleCTA from "../components/simple-cta";
import Layout from "../components/layout";
import PopoutBlade from "../components/popout-blade";

export default function Index({ allPosts: { edges }, preview, products }) {
  const recentPosts = edges.slice(0, 3);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Container>
          <Header />
          <Hero />
          <ThreeColumnSplit />
          <ImageTextSplit />
          <PopoutBlade 
            heading={`Learn Online with Me`}
            body={`Join other students from all over the world to 
            take part in practicing with me online.
            <br />
            Because it’s more fun when we are doing it together.`}
            button1={{
              href: '/',
              text: 'View Class Schedule',
              color: 'purple'
            }}
            button2={{
              href: '/',
              text: 'Work 1:1 with Rachel',
              color: 'orange'
            }}
          />

          {/* {products && (
            <div>
              <h2>List of products</h2>
              {products.map((product) => (
                <div key={Math.random()}>
                  <div className={`inline`}>
                    <strong>Name: </strong>
                    <p>{product.name}</p>
                  </div>

                  <div className={`inline`}>
                    <strong>Description: </strong>
                    <div>{product.description}</div>
                  </div>

                  <div className={`inline`}>
                    <strong>Price: </strong>
                    <p>${product.price}</p>
                  </div>
                </div>

              ))}
            </div>
          )} */}

          {/* Show Recent Articles (3 at a time) */}
          {recentPosts.length > 0 && <RecentArticles posts={recentPosts} />}

          <SimpleCTA />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  // const products = await getProducts();

  return {
    props: { allPosts, preview },
  };
}
