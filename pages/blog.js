/**
 * @file blog.js
 */
// Import dependencies
import Head from 'next/head';
import { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client';

// Import library variables
import { getAllPostsForHome } from '../lib/api'
import { BLOG_NAME } from '../lib/constants'

// Import components
import Layout from '../components/layout'
import Container from '../components/container'
import BlogArticles from '../components/blog-articles'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import { fetchSidebar, fetchFooter } from '../utils/contentfulPages'
import Button from '../components/button'
import HeroSplitRight from '../components/hero-split-right'

const GET_POSTS_BY_CATEGORY = gql`
  query PostsByCategory($categoryName: String) {
    posts(where: {categoryName: $categoryName}) {
      edges {
        node {
          title
          excerpt(format: RENDERED)
          slug
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

const GET_POSTS = gql`
  query Posts {
    posts {
      edges {
        node {
          title
          excerpt(format: RENDERED)
          slug
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export default function Blog({ posts: { edges }, preview, sidebarContent, footerContent }) {
  let recentPosts = edges.slice(0, 3);
  const [allPosts, setAllPosts] = useState(edges);
  const [categoryPosts, setCategoryPosts] = useState();

  const [chosenCategory, setChosenCategory] = useState();

  const { posts } = useQuery(GET_POSTS);

  const { categoryPostData } = useQuery(GET_POSTS_BY_CATEGORY, {
    variables: {
      categoryName: chosenCategory
    },
  })

  const categoryPostsHandler = (categoryName) => {
    console.log(categoryName);
    setChosenCategory(categoryName);

    console.log(categoryPostData);
    setCategoryPosts(categoryPostData.posts.edges);
  }

  useEffect(() => {
    console.log(posts);
  }, []);

  return (
    <Layout footerContent={footerContent} preview={preview}>
      <Head>
        <title>{ BLOG_NAME }</title>
      </Head>
      <Container>
        <Header />
        <HeroSplitRight 
          heading={`Blog`}
        />
        <div className={`sidebar-body-split bg-side-blobs-combined bg-no-repeat bg-contain flex px-32 mt-32`}>
          <div className={`all-articles-layout-container w-7/12`}>
            <div className={`blog-categories mb-24`}>
              <h2 className="text-h2 text-text-color font-rylan text-left mb-8">
                Categories
              </h2>
              <Button 
                onClick={() => categoryPostsHandler('Body')}
                text={`Body`}
                color={`purple`}
                className={`mb-4 w-1/2`}
              />
              <Button 
                onClick={() => categoryPostsHandler('Mind')}
                text={`Mind`}
                color={`brown`}
                className={`mb-4 w-1/2`}
              />
              <Button 
                onClick={() => categoryPostsHandler('Heart')}
                text={`Heart`}
                color={`yellow`}
                className={`mb-4 w-1/2`}
              />
            </div>

            <div className={`latest-posts`}>
              <h2 className="text-h2 text-text-color font-rylan text-left">
                Latest Posts
              </h2>
              {/* Show All Articles (20 at a time) */}
              { categoryPosts
                ?
                categoryPosts.length > 0 && <BlogArticles posts={categoryPosts} />
                :
                allPosts.length > 0 && <BlogArticles posts={allPosts} />
              }
            </div>
          </div>
          <div className={`sidebar-layout-container bg-clear-background w-5/12 px-12`}>
            <Sidebar posts={recentPosts} content={sidebarContent.fields} />
          </div> 
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = await getAllPostsForHome(preview);
  const sidebarContent = await fetchSidebar();
  const footerContent = await fetchFooter();

  if (sidebarContent.fields && footerContent.fields) {
    return {
      props: {
        sidebarContent,
        footerContent,
        posts,
        preview
      },
    };
  } else
  return {
    props: { posts, preview },
  }
}