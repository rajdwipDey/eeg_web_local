'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationTab } from '../ui/NavigationTab';

interface DashboardNavItem {
  label: string;
  href: string;
  icon: React.ReactNode | any;
  active?: boolean;
}

interface DashboardNavProps {
  items: DashboardNavItem[];
}

const DashboardNav: React.FC<DashboardNavProps> = ({ items }) => (
  <div className="mb-12">
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
    <div className="flex flex-wrap items-center justify-start">
      {items.map((item) => (
        <NavigationTab key={item.href} item={item} />
      ))}
    </div>
  </div>
</div>
);

export default DashboardNav;

