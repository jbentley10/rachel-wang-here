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
    <div className={`post-preview`}>
      <div className={`post-preview__image-container mb-5`}>
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </div>
      <h3 className={`post-preview__heading text-3xl mb-3 leading-snug`}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div
        className={`post-preview__excerpt text-lg leading-relaxed mb-4`}
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <div className={`post-preview__date text-lg mb-4`}>
        <Date dateString={date} />
      </div>
    </div>
  )
}
