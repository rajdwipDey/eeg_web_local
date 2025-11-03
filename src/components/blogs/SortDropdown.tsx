import { SortOption } from "@/src/app/(main)/blogs/page"

interface SortDropdownProps {
  value: SortOption
  onChange: (value: SortOption) => void
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SortOption)}
      className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent dark:bg-gray-700 dark:text-white"
    >
      <option value="latest">Latest First</option>
      <option value="oldest">Oldest First</option>
      <option value="popular">Most Popular</option>
    </select>
  )
}