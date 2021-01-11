/**
 * @file articles-panel.js
 */
// Import dependencies
import Image from 'next/image';

// Import components
import PostPreview from '../components/post-preview'
import Button from './button';

export default function ArticlesPanel({ heading, posts, buttonText }) {
  return (
    <section className={`md:px-32 lg:px-64 bg-wavy-background bg-cover bg-no-repeat pt-64 pb-12`}>
      <h2 className="text-h2 font-rylan text-center text-text-color">
        {heading}
      </h2>
      <div className="flex mr-4">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.featuredImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      {buttonText && 
        <Button
          color={`brown`}
          href={`/blog`}
          text={buttonText}
          className={`w-1/2 m-auto`}
        />
      }
    </section>
  )
}
