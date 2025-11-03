import { COLORS } from '@/src/lib/constants';
import { StockStatus } from '@/src/types/cart';
import React from 'react';

// Your existing Badge props (preserved)
interface ExistingBadgeProps {
  text: string;
  gradient: string;
}

// New Badge props for cart functionality
interface StockBadgeProps {
  status: StockStatus;
}

// Combined props using type discrimination
type BadgeProps = ExistingBadgeProps | StockBadgeProps;

// Type guard to check if props are ExistingBadgeProps
function isExistingBadgeProps(props: BadgeProps): props is ExistingBadgeProps {
  return 'text' in props && 'gradient' in props;
}

// Your existing Badge component (preserved and enhanced)
export function Badge(props: BadgeProps) {
  // Handle your existing Badge usage
  if (isExistingBadgeProps(props)) {
    const { text, gradient } = props;
    return (
      <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${gradient}`}>
        {text}
      </span>
    );
  }
  
  // Handle new StockBadge usage for cart
  const { status } = props;
  const config = COLORS.status[status];
  
  // Fallback if status is not found
  if (!config) {
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
        {status}
      </span>
    );
  }
  
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}

// Export a specific StockBadge component for better TypeScript support in cart
export const StockBadge: React.FC<StockBadgeProps> = ({ status }) => {
  const config = COLORS.status[status];
  
  // Fallback if status is not found
  if (!config) {
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
        {status}
      </span>
    );
  }
  
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
};