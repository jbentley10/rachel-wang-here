/**
 * @file blog-articles.js
 */
// Import dependencies
import Image from 'next/image';

// Import components
import PostPreviewWithImage from '../components/post-preview-with-image'

export default function BlogArticles({ posts }) {
  return (
    <section className={``}>
      <div className="mr-4">
        {posts.map(({ node }) => (
          <PostPreviewWithImage
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
    </section>
  )
}
