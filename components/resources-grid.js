/**
 * @file resources-grid.js
 */

// Import components
import ResourcePreview from '../components/resource-preview'

export default function ResourcesGrid({ resources, header }) {
  return (
    <section className={`mt-10`}>
      {header &&
        <h2 className="text-h2 font-rylan text-center">
          { header }
        </h2>
      }
      <div className="block mr-4">
        {resources.map(({ node, index }) => (
          <ResourcePreview
            key={index}
            title={node.title}
            description={node.description}
            coverImage={node.featuredImage}
            slug={node.mediaItemUrl}
          />
        ))}
      </div>
    </section>
  )
}
