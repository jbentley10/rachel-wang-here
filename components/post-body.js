import styles from './post-body.module.css'

export default function PostBody({ content }) {
  return (
    <div className="">
      <div
        className={`${styles.content} text-text-color font-barlow`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
