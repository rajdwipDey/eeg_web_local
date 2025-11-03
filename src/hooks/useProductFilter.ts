'use client';

import { useState, useMemo } from 'react';
import { Product } from '../types/product';

export function useProductFilter(initialProducts: Product[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...initialProducts];

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        filtered.reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [initialProducts, searchQuery, sortBy]);

  return {
    products: filteredAndSortedProducts,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy
  };
}