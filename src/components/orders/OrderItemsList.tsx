import { OrderItem } from '@/src/types/order';
import React from 'react';

interface OrderItemsListProps {
  items: OrderItem[];
}

export const OrderItemsList: React.FC<OrderItemsListProps> = ({ items }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4">
      <h4 className="font-semibold text-gray-900 mb-3">Items ({items.length})</h4>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#42b3e5] rounded-full"></div>
            <span className="text-gray-700">{item.name}</span>
            <span className="ml-auto text-gray-900 font-medium">× {item.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};