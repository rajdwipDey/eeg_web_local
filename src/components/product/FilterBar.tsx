import React from 'react';
import { Search, Grid, List } from 'lucide-react';

export default function FilterBar({ 
  searchTerm, 
  onSearchChange, 
  sortBy, 
  onSortChange, 
  viewMode, 
  onViewChange 
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mb-8">
      {/* Search Input */}
      <div className="flex-1">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-300"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex flex-wrap gap-4">
        {/* Sort Dropdown */}
        <select 
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-300"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name A-Z</option>
          <option value="newest">Newest First</option>
        </select>
        
        {/* View Toggle */}
        <div className="flex border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden">
          <button 
            onClick={() => onViewChange('grid')}
            className={`px-4 py-3 transition-colors ${
              viewMode === 'grid' 
                ? 'bg-[#42b3e5] text-white' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onViewChange('list')}
            className={`px-4 py-3 transition-colors ${
              viewMode === 'list' 
                ? 'bg-[#42b3e5] text-white' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}