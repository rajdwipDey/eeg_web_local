'use client';

import React, { useState, ChangeEvent } from 'react';

interface Configuration {
  id: number;
  name: string;
  description: string;
}

type StockLevel = 'low' | 'medium' | 'high';

export interface Product {
  id: number;
  name: string;
  categoryLabel: string;
  inStock: boolean;
  stockLevel: StockLevel;
  stockCount: number;
  price: number;
  originalPrice?: number;
  fullDescription: string;
  rating: number;
  reviews: number;
  keyFeatures: string[];
  configurations?: Configuration[];
}

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedConfig, setSelectedConfig] = useState<number>(0);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const configurations = product.configurations ?? [];

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase' && quantity < product.stockCount) {
      setQuantity((prev) => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log('Adding to cart:', { product, quantity, config: selectedConfig });
    alert(`${product.name} added to cart!`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(product.stockCount, parseInt(e.target.value) || 1));
    setQuantity(value);
  };

  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  const stockColorMap: Record<StockLevel, string> = {
    high: 'green',
    medium: 'orange',
    low: 'red',
  };
  const stockColor = stockColorMap[product.stockLevel];

  return (
    <div className="space-y-8">
      {/* Product Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm text-[#42b3e5] font-semibold uppercase tracking-wide bg-[#42b3e5]/10 px-3 py-1 rounded-full">
            {product.categoryLabel}
          </span>
          <div className="flex items-center">
            <div className={`w-2 h-2 bg-${stockColor}-500 rounded-full mr-2`}></div>
            <span className={`text-sm text-${stockColor}-600 dark:text-${stockColor}-400 font-medium`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {product.name}
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {product.fullDescription}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 fill-current ${i >= product.rating ? 'text-gray-300' : ''}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">({product.reviews} reviews)</span>
          <a href="#reviews" className="text-sm text-[#42b3e5] hover:underline">
            Read Reviews
          </a>
        </div>
      </div>

      {/* Price */}
      <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6">
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">${product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <>
              <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
              <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm font-semibold">
                Save ${savings.toLocaleString()}
              </span>
            </>
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          *Price includes installation and 1-year warranty. Financing options available.
        </p>
      </div>

      {/* Configuration */}

      {configurations.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Configuration
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {configurations.map((config, index) => (
              <button
                key={config.id}
                onClick={() => setSelectedConfig(index)}
                className={`p-4 border-2 rounded-lg text-left transition-all duration-300 ${selectedConfig === index
                    ? 'border-[#42b3e5] bg-[#42b3e5]/5'
                    : 'border-gray-300 dark:border-gray-600 hover:border-[#42b3e5] hover:bg-[#42b3e5]/5'
                  }`}
              >
                <div className="font-semibold text-gray-900 dark:text-white">{config.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{config.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}


      {/* Quantity */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">Quantity</label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
            <button
              onClick={() => handleQuantityChange('decrease')}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
              disabled={quantity <= 1}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              className="w-16 text-center border-0 bg-transparent focus:ring-0 text-gray-900 dark:text-white"
              min={1}
              max={product.stockCount}
            />
            <button
              onClick={() => handleQuantityChange('increase')}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
              disabled={quantity >= product.stockCount}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Available: {product.stockCount} units</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#42b3e5] hover:bg-[#005d90] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7M17 18a2 2 0 11-4 0 2 2 0 014 0zM9 18a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>Add to Cart</span>
          </button>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`border-2 font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${isWishlisted
                ? 'border-red-500 text-red-500'
                : 'border-gray-300 dark:border-gray-600 hover:border-red-500 text-gray-700 dark:text-gray-300 hover:text-red-500'
              }`}
          >
            <svg
              className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Request Quote</span>
          </button>
          <button className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Specs</span>
          </button>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
        <ul className="space-y-3">
          {product.keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-[#42b3e5] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
