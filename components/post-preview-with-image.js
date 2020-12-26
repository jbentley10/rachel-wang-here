/**
 * @file post-preview-with-image.js
 */
// Import components
import Avatar from './avatar'
import Date from './date'

// Import assets
import CoverImage from './cover-image'

// Import dependencies
import Link from 'next/link'

export default function PostPreviewWithImage({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className={`post-preview p-8 cursor-pointer w-full lg:w-1/2 inline-block`}>
        <div className={`post-preview__image-container mb-5 w-full text-center`}>
          <CoverImage className={`m-auto`} title={title} coverImage={coverImage} slug={slug} />
        </div>
        <span className={`font-barlow uppercase text-text-color opacity-50`}>Yoga</span>
        <h5 className={`post-preview__heading text-h5 font-barlow font-semibold pb-2`}>        
          <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} />
        </h5>
        <div
          className={`font-barlow text-paragraph text-text-color pb-4 truncate overflow-ellipsis`}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <span className={`font-semibold text-paragraph font-barlow text-purple`}>Read More</span>
      </div>
    </Link>
  )
}
