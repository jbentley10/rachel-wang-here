export default function Categories({ categories, className }) {
  return (    
    categories.edges.length > 0 ? (
      categories.edges.map((category, index) => (
        <span key={index} className={`text-h1 font-semibold font-barlow uppercase text-text-color ${className}`}>
          {category.node.name}
        </span>
      ))
    ) : (
      <span className={`text-h1 font-semibold font-barlow uppercase text-text-color ${className}`}>{categories.edges.node.name}</span>
    )
  )
}
