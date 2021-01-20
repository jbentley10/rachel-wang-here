/**
 * 
 * @file button.js
 */

// Import dependencies
import Link from 'next/link';

export default function Button({ text, color, href, className, onClick }) {
  const backgroundColor = (color) => {
    switch(color) {
      case 'yellow': 
        return `bg-yellow hover:bg-yellow-darkened`;        
      case 'orange': 
        return 'bg-orange hover:bg-orange-darkened'
      case 'brown': 
        return 'bg-sedona hover:bg-sedona-darkened'
      case 'purple': 
        return 'bg-purple hover:bg-purple-darkened'
      
      default:
        break;
    }
  }

  return (
    href ? 
      <Link href={href}>
        <div className={`outline-none text-center py-3 px-3 cursor-pointer transition duration-200 ${backgroundColor(color)} ${className}`}>
          <h5 className="text-h5 font-barlow uppercase text-white">{text}</h5>
        </div>
      </Link>
    :
      <button className={`outline-none ${className}`} onClick={onClick}>
        <div className={`outline-none text-center py-3 px-3 cursor-pointer transition duration-200 ${backgroundColor(color)}`}>
          <h5 className="text-h5 font-barlow uppercase text-white">{text}</h5>
        </div>
      </button>
  )
}
