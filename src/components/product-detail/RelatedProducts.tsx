import React from 'react';
import Link from 'next/link';

export default function RelatedProducts({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Related Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore other products that complement this item
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => {
            console.log(product,"pppppp");
            
            return (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 bg-[#42b3e5] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#005d90] transition-all duration-300 text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs text-[#42b3e5] font-semibold uppercase tracking-wide">
                      {product.categoryLabel}
                    </span>
                  </div>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-[#42b3e5] transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        ${product.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${product.stockLevel === 'high' ? 'bg-green-500' : 'bg-orange-500'
                        }`}></div>
                      <span className={`text-xs font-medium ${product.stockLevel === 'high'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-orange-600 dark:text-orange-400'
                        }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}