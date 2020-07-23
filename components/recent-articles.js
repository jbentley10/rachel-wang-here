import PostPreview from '../components/post-preview'

export default function RecentArticles({ posts }) {
  return (
    <section className={`md:px-12`}>
      <h2 className="mb-8 text-6xl md:text-7xl font-raleway font-normal text-center tracking-tighter leading-tight">
        Recent Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:col-gap-24 lg:col-gap-12 mb-32">
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
    </section>
  )
}
