'use client';

import React from 'react';
import Link from 'next/link';

interface Product {
  name: string;
  categoryLabel?: string;
}

interface BreadcrumbProps {
  product: Product;
}

const ArrowIcon: React.FC = () => (
  <svg
    className="w-4 h-4 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Breadcrumb({ product }: BreadcrumbProps) {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: product.categoryLabel ?? 'Unknown Category', href: undefined },
    { label: product.name, href: undefined, isActive: true },
  ];

  return (
    <nav className="flex items-center space-x-2 text-sm">
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="text-gray-500 dark:text-gray-400 hover:text-[#42b3e5] transition-colors"
            >
              {crumb.label}
            </Link>
          ) : (
            <span
              className={`${
                crumb.isActive
                  ? 'text-gray-900 dark:text-white font-medium'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {crumb.label}
            </span>
          )}
          {index < breadcrumbs.length - 1 && <ArrowIcon />}
        </React.Fragment>
      ))}
    </nav>
  );
}
