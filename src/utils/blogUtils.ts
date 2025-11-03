import { BlogPost, Category } from '@/src/dummyData/blogData'
import { SortOption } from '../app/(main)/blogs/page'

export function filterAndSortPosts(
  posts: BlogPost[],
  selectedCategories: number[],
  searchQuery: string,
  sortBy: SortOption,
  categories: Category[]
): BlogPost[] {
  let filtered = posts

  if (selectedCategories.length > 0) {
    const categoryNames = categories
      .filter((c) => selectedCategories.includes(c.id))
      .map((c) => c.name)
    filtered = filtered.filter((post) => categoryNames.includes(post.category))
  }

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase()
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
    )
  }

  return [...filtered].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()

    switch (sortBy) {
      case 'latest':
        return dateB - dateA
      case 'oldest':
        return dateA - dateB
      case 'popular':
        return 0
      default:
        return 0
    }
  })
}