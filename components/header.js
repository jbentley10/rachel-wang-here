import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline">Logo</a>
        </Link>        
      </h2>
      <ul className={`flex align-middle text-left sm:w-full`}>
        <li className={`flex-initial relative px-6`}>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li className={`flex-initial relative px-6`}>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
        <li className={`flex-initial relative px-6`}>
          <Link href="/">
            <a>Free Resources</a>
          </Link>
        </li>
        <li className={`flex-initial relative px-6`}>
          <Link href="/">
            <a>Shop</a>
          </Link>
        </li>
        <li className={`flex-initial relative px-6`}>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
