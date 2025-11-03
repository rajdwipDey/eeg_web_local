'use client';

import React, { useState } from 'react';

interface Badge {
  text: string;
  color: string; 
}

interface ProductGalleryProps {
  images: string[];
  productName: string;
  badge?: Badge;
}

export default function ProductGallery({ images, productName, badge }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState<string>(images[0]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleThumbnailClick = (image: string, index: number) => {
    setMainImage(image);
    setActiveIndex(index);
  };

  if (!images || images.length === 0) {
    return <div className="text-gray-500 dark:text-gray-400">No images available</div>;
  }

  return (
    <div className="space-y-6 md:sticky md:top-10">
      {/* Main Image */}
      <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden group">
        <img
          src={mainImage}
          alt={productName}
          className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Zoom Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </button>
        </div>

        {/* Badge */}
        {badge && (
          <div
            className={`absolute top-4 left-4 bg-gradient-to-r ${badge.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}
          >
            {badge.text}
          </div>
        )}
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(image, index)}
            className={`flex-shrink-0 w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              activeIndex === index ? 'border-[#42b3e5]' : 'border-transparent hover:border-[#42b3e5]'
            }`}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
