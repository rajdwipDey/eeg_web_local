import Link from 'next/link'

interface ReadMoreLinkProps {
  slug: string
  size?: 'sm' | 'md'
  variant?: 'full' | 'simple'
}

export default function ReadMoreLink({ slug, size = 'md', variant = 'full' }: ReadMoreLinkProps) {
  const textSize = size === 'sm' ? 'text-sm' : 'text-sm'
  
  if (variant === 'simple') {
    return (
      <Link
        href={`/blogs/${slug}`}
        className={`text-[#6fb43f] hover:text-[#4a7c2a] font-semibold ${textSize} transition-colors duration-300`}
      >
        Read More →
      </Link>
    )
  }

  return (
    <Link
      href={`/blogs/${slug}`}
      className={`inline-flex items-center gap-2 text-[#6fb43f] hover:text-[#4a7c2a] font-semibold ${textSize} transition-colors duration-300`}
    >
      Read More
      <svg className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  )
}