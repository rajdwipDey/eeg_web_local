import React from 'react';
import { Trash2, Heart } from 'lucide-react';
import { CartItem as CartItemType } from '@/src/types/cart';
import { QuantityControl } from './QuantityControl';
import { StockBadge } from '../ui/Badge';
import { formatCurrency } from '@/src/utils/orderUtils';

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onQuantityChange,
  onRemove,
}) => {
  return (
    <div className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300">
      <div className="flex items-center gap-6 flex-wrap">
        {/* Product Image */}
        <div className="relative group">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          {item.badge && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#6fb43f] text-white rounded-full flex items-center justify-center text-xs font-bold">
              {item.badge}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {item.description}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">SKU: {item.sku}</span>
            <StockBadge status={item.stockStatus} />
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <QuantityControl
            quantity={item.quantity}
            onIncrease={() => onQuantityChange(item.quantity + 1)}
            onDecrease={() => onQuantityChange(item.quantity - 1)}
            onChange={onQuantityChange}
          />
        </div>

        {/* Price and Actions */}
        <div className="text-right">
          {item.originalPrice && (
            <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
              {formatCurrency(item.originalPrice * item.quantity)}
            </div>
          )}
          <div className="text-2xl font-bold text-[#005d90] dark:text-[#42b3e5] mb-2">
            {formatCurrency(item.price * item.quantity)}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onRemove}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
              title="Remove from cart"
            >
              <Trash2 className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-400 hover:text-[#6fb43f] transition-colors duration-200"
              title="Save for later"
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
