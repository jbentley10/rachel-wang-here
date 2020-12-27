/**
 * @file post-header.js
 */
// Import components
import Categories from '../components/categories'

export default function PostHeader({
  title,
  coverImage,
  categories,
}) {
  return (
    <div className={`post-header mb-12`}>
      <div className={`flex bg-neutral-background pt-16 pb-48`}>
        <div className={`image-container w-5/12 -mt-32 mr-24`}>
          <div className={`clear-background bg-clear-background p-10 relative z-10 transform translate-x-16 translate-y-24 h-full`} />
          <div className={`transform -translate-y-64 translate-x-32 relative z-30`}>
            <img src={coverImage.node.sourceUrl} />
          </div>
        </div>
        <div className={`heading-container w-7/12`}>
          <Categories categories={categories} />
          <h1 className={`text-huge text-text-color font-rylan leading-tight py-4`}>{title}</h1>
          <h2 className={`text-h2 text-text-color font-rylan`}>Time to read: <span className={`font-barlow text-h4 text-text-color`}></span></h2>
        </div>
      </div>
    </div>
  )
}
