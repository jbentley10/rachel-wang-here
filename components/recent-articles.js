import PostPreview from '../components/post-preview'

export default function RecentArticles({ posts }) {
  return (
    <section className={`md:px-32 lg:px-64 bg-neutral-background py-24`}>
      <h2 className="mb-8 text-6xl md:text-7xl font-raleway font-normal text-center tracking-tighter leading-tight">
        Recent Articles
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:col-gap-24 lg:col-gap-12 mb-32">
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
