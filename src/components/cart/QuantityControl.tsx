import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onChange: (value: number) => void;
}

export const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  onChange,
}) => {
  return (
    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
      <button
        onClick={onDecrease}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 rounded-l-lg"
      >
        <Minus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => onChange(parseInt(e.target.value) || 1)}
        min="1"
        className="w-16 text-center py-2 border-0 bg-transparent text-gray-900 dark:text-white focus:ring-0"
      />
      <button
        onClick={onIncrease}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 rounded-r-lg"
      >
        <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      </button>
    </div>
  );
};