import { SortOption } from '@/src/app/(main)/blogs/page'
import { BlogPost } from '@/src/dummyData/blogData'
import SortDropdown from './SortDropdown'
import BlogCard from './BlogCard'
import Pagination from './Pagination'

interface BlogGridProps {
  posts: BlogPost[]
  sortBy: SortOption
  onSortChange: (sort: SortOption) => void
}

export default function BlogGrid({ posts, sortBy, onSortChange }: BlogGridProps) {
  return (
    <div className="lg:w-3/4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#005d90] dark:text-white">
            All Blog Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Showing {posts.length} posts
          </p>
        </div>
        <SortDropdown value={sortBy} onChange={onSortChange} />
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No posts found matching your criteria.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <Pagination />
        </>
      )}
    </div>
  )
}
