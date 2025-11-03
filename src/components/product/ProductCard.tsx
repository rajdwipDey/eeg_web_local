'use client';

import React from 'react';
import { Eye, Heart } from 'lucide-react';
import StarRating from './StarRating';
import StockIndicator from './StockIndicator';
import { useRouter } from 'next/navigation';

export interface Product {
  id: string | number;
  name: string;
  description: string;
  image: string;
  categoryLabel?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  stockLevel: 'in-stock' | 'low-stock' | 'out-of-stock';
  stockCount: number;
  badge?: {
    text: string;
    color: string;
  };
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {product.badge && (
          <div
            className={`absolute top-4 left-4 bg-gradient-to-r ${product.badge.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}
          >
            {product.badge.text}
          </div>
        )}

        <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300">
          <Heart className="w-5 h-5" />
        </button>

        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-[#42b3e5] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#005d90] transition-all duration-300"
          >
            Add to Cart
          </button>
          <button
            onClick={handleViewDetails}
            className="w-12 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-6">
        {product.categoryLabel && (
          <div className="mb-2">
            <span className="text-xs text-[#42b3e5] font-semibold uppercase tracking-wide">
              {product.categoryLabel}
            </span>
          </div>
        )}
        <h3
          className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#42b3e5] transition-colors cursor-pointer"
          onClick={handleViewDetails}
        >
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <StarRating rating={product.rating} reviews={product.reviews} />

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <StockIndicator stockLevel={product.stockLevel} stockCount={product.stockCount} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
