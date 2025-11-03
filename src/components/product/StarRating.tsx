import React from 'react';

export default function StarRating({ rating, reviews }:any) {
  return (
    <div className="flex items-center mb-3">
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 fill-current ${i >= rating ? 'text-gray-300' : ''}`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
      </div>
      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
        ({reviews} reviews)
      </span>
    </div>
  );
}