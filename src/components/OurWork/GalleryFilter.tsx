interface GalleryFilterProps {
    categories: string[];
    activeCategory: string;
    onCategorySelect: (category: string) => void;
  }
  
  export default function GalleryFilter({
    categories,
    activeCategory,
    onCategorySelect,
  }: GalleryFilterProps) {
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#42b3e5] focus:ring-offset-2 ${
              activeCategory === category
                ? "bg-[#005d90] text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#42b3e5] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
  