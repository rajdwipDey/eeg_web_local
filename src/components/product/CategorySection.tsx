"use client";

import { useState, FC } from "react";
import { Category } from "@/src/types/product";

interface Props {
  categories: Category[];
  onSelect?: (id: string) => void;
  defaultActive?: string;
}

const CategorySection: FC<Props> = ({ categories, onSelect, defaultActive = "" }) => {
  const [activeCategory, setActiveCategory] = useState();

  const handleClick = (id: string) => {
    setActiveCategory(id);
    onSelect?.(id);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Discover our comprehensive range of MRI safety and diagnostic imaging solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className={`bg-white dark:bg-gray-700 rounded-2xl p-8 text-center cursor-pointer group hover:shadow-xl transition-all duration-300 ${
                activeCategory === cat.id
                  ? "ring-2 ring-[#42b3e5]"
                  : "border border-gray-100 dark:border-gray-600"
              }`}
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(to bottom right, ${cat.gradientFrom}, ${cat.gradientTo})`,
                }}
              >
                {cat.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {cat.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {cat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
