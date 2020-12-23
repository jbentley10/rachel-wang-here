/**
 * @file sidebar-post-preview.js
 */
// Import components
import Avatar from '../components/avatar'
import Date from '../components/date'

// Import assets
import CoverImage from './cover-image'

// Import dependencies
import Link from 'next/link'

export default function SidebarPostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className={`post-preview p-8 cursor-pointer w-full`}>
        <div className={`post-preview__image-container mb-5 w-full text-center`}>
          <CoverImage className={`m-auto`} title={title} coverImage={coverImage} slug={slug} />
        </div>
        <h5 className={`post-preview__heading text-h5 font-rylan font-semibold pb-2`}>        
          <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} />
        </h5>
      </div>
    </Link>
  )
}
