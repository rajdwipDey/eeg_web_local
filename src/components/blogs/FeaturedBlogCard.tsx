import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/src/dummyData/blogData'
import PostMeta from './PostMeta'
import AuthorInfo from './AuthorInfo'
import ReadMoreLink from './ReadMoreLink'


interface FeaturedBlogCardProps {
  post: BlogPost
  isMain?: boolean
}

export default function FeaturedBlogCard({ post, isMain = false }: FeaturedBlogCardProps) {
  if (isMain) {
    return (
      <div className="lg:row-span-2">
        <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
          <div className="relative overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={500}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              />
            </Link>
            {post.featured && (
              <div className="absolute top-4 left-4">
                <span className="bg-[#005d90] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-8">
            <PostMeta date={post.date} category={post.category} />
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold text-[#005d90] dark:text-white mb-4 group-hover:text-[#42b3e5] transition-colors duration-300 cursor-pointer">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {post.description}
            </p>
            <div className="flex items-center justify-between">
              <AuthorInfo author={post.author} />
              <ReadMoreLink slug={post.slug} />
            </div>
          </div>
        </article>
      </div>
    )
  }

  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="flex">
        <div className="relative overflow-hidden w-48 flex-shrink-0">
          <Link href={`/blog/${post.slug}`}>
            <Image
              src={post.image}
              alt={post.title}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
            />
          </Link>
        </div>
        <div className="p-6 flex-1">
          <div className="flex items-center gap-2 mb-3 text-xs text-gray-500 dark:text-gray-400">
            <span>{post.date}</span>
            <span>•</span>
            <span style={{ color: post.categoryColor }}>{post.category}</span>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-lg font-bold text-[#005d90] dark:text-white mb-3 group-hover:text-[#42b3e5] transition-colors duration-300 cursor-pointer">
              {post.title}
            </h3>
          </Link>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
            {post.description}
          </p>
          <ReadMoreLink slug={post.slug} size="sm" />
        </div>
      </div>
    </article>
  )
}
