import { NavItem } from "@/src/types/dashboard";
import Link from "next/link";
import React from "react";

interface NavigationTabProps {
  item: NavItem;
}

export const NavigationTab: React.FC<NavigationTabProps> = ({ item }) => (
  <Link
    href={item.href}
    className={`relative flex items-center gap-3 px-6 py-4 font-medium transition-all duration-300 group flex-grow sm:flex-grow-0 ${
      item.active
        ? "text-white bg-gradient-to-r from-[#005d90] to-[#42b3e5] hover:from-[#004a75] hover:to-[#3a9ec7]"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#005d90] dark:hover:text-[#42b3e5]"
    }`}
  >
    {/* Icon */}
    {item.icon}

    {/* Label */}
    <span>{item.label}</span>

    {/* Bottom Border Animation */}
    {item.active ? (
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
    ) : (
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#42b3e5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    )}
  </Link>
);
