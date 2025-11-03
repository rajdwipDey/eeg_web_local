'use client';

import React, { useState } from 'react';

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState('specifications');

  const tabs = [
    { id: 'specifications', label: 'Specifications' },
    { id: 'reviews', label: `Reviews (${product.reviews ?? 0})` },
    { id: 'installation', label: 'Installation' },
    { id: 'support', label: 'Support' },
  ];

  const specifications = product.specifications ?? [
    { label: 'N/A', value: 'N/A' },
  ];

  const individualReviews = product.individualReviews ?? [
    {
      name: 'John Doe',
      position: 'Customer',
      avatarInitials: 'JD',
      avatarBg: 'bg-gray-500',
      rating: 5,
      timeAgo: '1 month ago',
      comment: 'No reviews yet.'
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8 px-8 pt-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 border-b-2 font-semibold transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#42b3e5] text-[#42b3e5]'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {activeTab === 'specifications' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Technical Specifications
              </h3>
              <div className="space-y-4">
                {specifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      {spec.label}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Features & Benefits
              </h3>
              <div className="space-y-6">
              </div>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {product.rating ?? 0}
                  </div>
                  <div className="flex justify-center text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Based on {product.reviews ?? 0} reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="lg:col-span-2 space-y-6">
              {individualReviews.map((review, idx) => (
                <div key={idx} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${review.avatarBg}`}
                    >
                      {review.avatarInitials}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {review.name}
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {review.position}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 fill-current ${i >= review.rating ? 'text-gray-300' : ''}`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{review.timeAgo}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
