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

          {products && (
            <div>
              <h2>List of products</h2>
              <p>{products}</p>
            </div>
          )}

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
  const products = await getProducts();

  return {
    props: { allPosts, preview, products },
  };
}
