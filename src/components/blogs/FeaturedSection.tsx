import { BlogPost } from '@/src/dummyData/blogData'
import FeaturedBlogCard from './FeaturedBlogCard'

interface FeaturedSectionProps {
  featuredPost: BlogPost
  secondaryPosts: BlogPost[]
}

export default function FeaturedSection({ featuredPost, secondaryPosts }: FeaturedSectionProps) {
  return (
    <section id="next-section" className="py-20 bg-[#F8F8F8] dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            <span className="text-[#102030] dark:text-[#42b3e5] text-sm font-medium uppercase block mb-4">
              Latest Insights
            </span>
            <span className="text-4xl inline-block font-light leading-normal text-[#005d90] dark:text-white">
              Featured <b className="font-semibold">Blog Posts</b>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest MRI safety tips, diagnostic imaging insights, and industry news from our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <FeaturedBlogCard post={featuredPost} isMain />
          
          <div className="space-y-8">
            {secondaryPosts.map((post) => (
              <FeaturedBlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}