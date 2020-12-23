/**
 * @file blog-articles.js
 */
// Import dependencies
import Image from 'next/image';

// Import components
import PostPreview from '../components/post-preview'
import Button from './button';

export default function BlogArticles({ posts }) {
  return (
    <section className={`px-4 md:px-32 lg:px-32`}>
      <h2 className="text-h2 font-rylan text-center">
        Latest Posts
      </h2>
      <div className="flex mr-4">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
      <Button
        color={`brown`}
        href={`/blog`}
        text={`Load More Posts`}
        className={`w-1/2 m-auto`}
      />
    </section>
  )
}
