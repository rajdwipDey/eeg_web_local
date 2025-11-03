import React from "react";
import { Package } from "lucide-react";
import { Order } from "@/src/types/dashboard";
import { OrderCard } from "../ui/OrderCard";

interface RecentOrdersProps {
  orders: Order[];
}

export const RecentOrders: React.FC<RecentOrdersProps> = ({ orders }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
    <div className="bg-gradient-to-r from-[#005d90] to-[#42b3e5] p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white flex items-center gap-3">
          <Package className="w-6 h-6" />
          Recent Orders
        </h3>
        <a
          href="/orders"
          className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
        >
          View All
        </a>
      </div>
    </div>
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  </div>
);
