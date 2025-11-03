import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { RecommendedProduct } from '@/src/types/cart';

interface RecommendedProductCardProps {
  product: RecommendedProduct;
  onAddToCart: (id: string) => void;
}

export const RecommendedProductCard: React.FC<RecommendedProductCardProps> = ({ 
  product, 
  onAddToCart 
}) => {
  const badgeColors: Record<string, string> = {
    Recommended: 'bg-[#6fb43f]',
    Accessory: 'bg-blue-500',
    Software: 'bg-purple-500',
    Training: 'bg-orange-500',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4">
          <span className={`${badgeColors[product.badge]} text-white px-2 py-1 rounded-full text-xs font-medium`}>
            {product.badge}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-[#005d90] dark:text-[#42b3e5]">
            {product.price}
          </div>
          <button
            onClick={() => onAddToCart(product.id)}
            className="px-4 py-2 bg-gradient-to-r from-[#6fb43f] to-[#5a9935] text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium inline-flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};