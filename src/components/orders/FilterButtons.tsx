import { FILTER_OPTIONS } from '@/src/lib/constants';
import React from 'react';

interface FilterButtonsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ 
  activeFilter, 
  onFilterChange 
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {FILTER_OPTIONS.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
            ${activeFilter === filter.value
              ? 'bg-gradient-to-r from-[#005d90] to-[#42b3e5] text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
