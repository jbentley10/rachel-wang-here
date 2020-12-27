export default function PostTitle({ children }) {
  return (
    <h1
      className="text-h1 font-rylan"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
