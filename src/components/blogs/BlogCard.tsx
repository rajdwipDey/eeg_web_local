import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/src/dummyData/blogData'
import ReadMoreLink from './ReadMoreLink'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          />
        </Link>
        <div className="absolute top-4 left-4">
          <span
            className="text-white px-2 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: post.categoryColor }}
          >
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 text-xs text-gray-500 dark:text-gray-400">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-lg font-bold text-[#005d90] dark:text-white mb-3 group-hover:text-[#42b3e5] transition-colors duration-300 cursor-pointer">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {post.author.name}
            </span>
          </div>
          <ReadMoreLink slug={post.slug} variant="simple" />
        </div>
      </div>
    </article>
  )
}
