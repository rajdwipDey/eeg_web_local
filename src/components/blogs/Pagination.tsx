export default function Pagination() {
    return (
      <div className="flex items-center justify-center mt-12">
        <nav className="flex items-center gap-2">
          <button
            className="px-3 py-2 text-gray-500 hover:text-[#42b3e5] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
            aria-label="Previous page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="px-4 py-2 bg-[#42b3e5] text-white rounded-lg font-semibold">1</button>
          <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-[#42b3e5] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300">2</button>
          <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-[#42b3e5] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300">3</button>
          <span className="px-2 text-gray-500">...</span>
          <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-[#42b3e5] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300">8</button>
          <button className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-[#42b3e5] transition-colors duration-300" aria-label="Next page">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </nav>
      </div>
    )
  }