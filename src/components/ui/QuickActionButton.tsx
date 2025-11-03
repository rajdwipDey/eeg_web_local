import { QuickAction } from '@/src/types/dashboard';
import React from 'react';

export const QuickActionButton: React.FC<QuickAction> = ({ 
  label, 
  href, 
  icon, 
  variant, 
  badge 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-[#6fb43f] to-[#5a9935] text-white hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
  };

  return (
    <a
      href={href}
      className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${variants[variant]}`}
    >
      {icon}
      <span className="font-medium">{label}</span>
      {badge && <span className="ml-auto">{badge}</span>}
    </a>
  );
};