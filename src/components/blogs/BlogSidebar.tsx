import CategoryFilter from "./CategoryFilter"
import RecentPosts from "./RecentPosts"
import SearchBox from "./SearchBox"

interface BlogSidebarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategories: number[]
  onCategoryToggle: (categories: number[]) => void
}

export default function BlogSidebar({
  searchQuery,
  onSearchChange,
  selectedCategories,
  onCategoryToggle
}: BlogSidebarProps) {
  return (
    <aside className="lg:w-1/4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg sticky top-10">
        <SearchBox value={searchQuery} onChange={onSearchChange} />
        <CategoryFilter 
          selectedCategories={selectedCategories}
          onToggle={onCategoryToggle}
        />
        <RecentPosts />
      </div>
    </aside>
  )
}
