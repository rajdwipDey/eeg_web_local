import React from 'react';
import { RecommendedProductCard } from './RecommendedProductCard';
import { RecommendedProduct } from '@/src/types/cart';

interface RecommendedProductsProps {
  products: RecommendedProduct[];
  onAddToCart: (id: string) => void;
}

export const RecommendedProducts: React.FC<RecommendedProductsProps> = ({
  products,
  onAddToCart,
}) => {
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          You Might Also Like
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Complete your MRI safety setup with these recommended products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <RecommendedProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};