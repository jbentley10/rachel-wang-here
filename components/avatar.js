export default function Avatar({ author }) {
  const name =
    author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name

  return (
    <div className="flex items-center">
      <img
        src={'https://secure.gravatar.com/avatar/6daef0f3f396343164b3ee1c5cd2f8bb?s=96&d=mm&r=g'}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
