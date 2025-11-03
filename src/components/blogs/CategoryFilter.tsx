import { useCallback } from 'react'
import * as Checkbox from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"
import { categories } from '@/src/dummyData/blogData'

interface CategoryFilterProps {
  selectedCategories: number[]
  onToggle: (categories: number[]) => void
}

export default function CategoryFilter({ selectedCategories, onToggle }: CategoryFilterProps) {
  const handleToggle = useCallback((id: number) => {
    onToggle(
      selectedCategories.includes(id)
        ? selectedCategories.filter((c) => c !== id)
        : [...selectedCategories, id]
    )
  }, [selectedCategories, onToggle])

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-[#005d90] dark:text-white mb-4">
        Categories
      </h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <label
            key={category.id}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <Checkbox.Root
              checked={selectedCategories.includes(category.id)}
              onCheckedChange={() => handleToggle(category.id)}
              className="w-4 h-4 rounded border border-gray-300 dark:border-gray-600 flex items-center justify-center bg-white dark:bg-gray-700 group-hover:border-[#42b3e5] transition-colors duration-200"
            >
              <Checkbox.Indicator>
                <CheckIcon className="w-3 h-3 text-[#42b3e5]" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-[#42b3e5] transition-colors duration-300">
              {category.name} ({category.count})
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}