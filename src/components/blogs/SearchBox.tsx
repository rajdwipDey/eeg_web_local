interface SearchBoxProps {
    value: string
    onChange: (value: string) => void
  }
  
  export default function SearchBox({ value, onChange }: SearchBoxProps) {
    return (
      <div className="mb-8">
        <h3 className="text-lg font-bold text-[#005d90] dark:text-white mb-4">
          Search Posts
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    )
  }