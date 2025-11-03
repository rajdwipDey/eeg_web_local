import React from 'react';
import { Package } from 'lucide-react';
import { Order } from '@/src/types/dashboard';

interface OrderCardProps {
  order: Order;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const statusColors = {
    Delivered: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    Shipped: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Processing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  };

  return (
    <div className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">{order.orderNumber}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{order.items}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">{order.date}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-[#005d90] dark:text-[#42b3e5]">{order.amount}</p>
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
            {order.status}
          </span>
        </div>
      </div>
    </div>
  );
};