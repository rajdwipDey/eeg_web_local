"use client";

import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";
import Pagination from "./Pagination";
import { products } from "@/src/dummyData/productData";
import { Product } from "@/src/types/product";

interface Props {
  categoryId?: string;
}

export default function ProductGrid({ categoryId = "all" }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(
      (p) =>
        (categoryId === "all" || p.categoryLabel.toLowerCase() === categoryId.toLowerCase()) &&
        (p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
    }

    return filtered;
  }, [categoryId, searchTerm, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => setCurrentPage(1), [searchTerm, sortBy, categoryId]);

  const handleAddToCart = (product: Product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewChange={setViewMode}
        />

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Showing <b>{currentProducts.length}</b> of <b>{filteredProducts.length}</b> products
        </p>

        <div
          className={`grid gap-8 ${
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-12">
            No products found matching your criteria.
          </p>
        )}

        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}
      </div>
    </section>
  );
}
