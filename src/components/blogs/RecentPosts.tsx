import Link from 'next/link'
import Image from 'next/image'
import { recentPosts } from '@/src/dummyData/blogData'

export default function RecentPosts() {
  return (
    <div>
      <h3 className="text-lg font-bold text-[#005d90] dark:text-white mb-4">
        Recent Posts
      </h3>
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-3 group">
            <Image
              src={post.image}
              alt={post.title}
              width={64}
              height={64}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#42b3e5] transition-colors duration-300 line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {post.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}