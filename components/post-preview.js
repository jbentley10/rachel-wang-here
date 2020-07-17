import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className={`post-preview shadow p-8 cursor-pointer`}>
        <div className={`post-preview__image-container mb-5 w-full text-center`}>
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        </div>
        <h3 className={`post-preview__heading text-2xl mb-3 leading-snug font-bold mt-10 sm:h-full md:h-32`}>        
          <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} />
        </h3>
        <div
          className={`post-preview__excerpt text-lg leading-relaxed mb-4 mt-4 truncate`}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className={`post-preview__date text-lg mb-4 font-light`}>
          <Date dateString={date} />
        </div>
      </div>
    </Link>
  )
}
