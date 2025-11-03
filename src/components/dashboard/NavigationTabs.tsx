import { NavItem } from "@/src/types/dashboard";
import React from "react";
import { NavigationTab } from "../ui/NavigationTab";

interface NavigationTabsProps {
  items: NavItem[];
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({ items }) => (
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
