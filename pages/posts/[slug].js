/**
 * @file [slug].js
 */
// Import dependencies
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';

// Import components;
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import PostTitle from '../../components/post-title';
import Sidebar from '../../components/sidebar';

// Import utility functions
import { fetchFooter, fetchSidebar } from '../../utils/contentfulPages';
import { getAllPostsWithSlug, getPostAndMorePosts, getAllPostsForHome } from '../../lib/api';

export default function Post({ footerContent, sidebarContent, post, preview, allPostsForSidebar: { edges } }) {
  const recentPosts = edges.slice(0, 3);
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout footerContent={footerContent} preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <div className={`sidebar-body-split bg-side-blobs-combined bg-no-repeat bg-contain flex px-32`}>
                <div className={`post-body w-7/12`}>
                  <PostBody content={post.content} />
                </div>
                <div className={`sidebar-layout-container bg-clear-background w-5/12 px-12`}>
                  <Sidebar posts={recentPosts} content={sidebarContent.fields} />
                </div>
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);
  const allPostsForSidebar = await getAllPostsForHome(preview);
  const footerContent = await fetchFooter();
  const sidebarContent = await fetchSidebar();

  if (footerContent.fields && sidebarContent.fields) {
    return {
      props: {
        preview,
        sidebarContent,
        footerContent,
        post: data.post,
        posts: data.posts,
        allPostsForSidebar
      }
    }
  } else return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      allPosts
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}
