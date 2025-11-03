
"use client"

import { useState, useMemo } from 'react'
import PageHeader from '@/src/components/common/PageHeader'
import { blogPosts, categories } from '@/src/dummyData/blogData'
import { filterAndSortPosts } from '@/src/utils/blogUtils'
import FeaturedSection from '@/src/components/blogs/FeaturedSection'
import BlogSidebar from '@/src/components/blogs/BlogSidebar'
import BlogGrid from '@/src/components/blogs/BlogGrid'

export type SortOption = 'latest' | 'oldest' | 'popular'

export default function Blogs() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('latest')

  const filteredAndSortedPosts = useMemo(() => 
    filterAndSortPosts(blogPosts, selectedCategories, searchQuery, sortBy, categories),
    [selectedCategories, searchQuery, sortBy]
  )

  const featuredPost = useMemo(() => 
    blogPosts.find(post => post.featured) || blogPosts[0],
    []
  )

  const secondaryPosts = useMemo(() => 
    blogPosts.filter(post => post.id !== featuredPost.id).slice(0, 2),
    [featuredPost]
  )

  return (
    <>
      <PageHeader
        title="Blogs" 
        backgroundImage="/img/ab1.jpg"
        scrollTargetId="#next-section"
      />

      <FeaturedSection
        featuredPost={featuredPost}
        secondaryPosts={secondaryPosts}
      />

      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <BlogSidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategories={selectedCategories}
              onCategoryToggle={setSelectedCategories}
            />

            <BlogGrid
              posts={filteredAndSortedPosts}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>
        </div>
      </section>
    </>
  )
}