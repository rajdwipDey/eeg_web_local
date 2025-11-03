import React from 'react';
import { Package } from 'lucide-react';
import { Button } from '../ui/Button';

export const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-20">
      <Package className="w-24 h-24 mx-auto mb-6 text-gray-400" />
      <h3 className="text-2xl font-bold text-gray-900 mb-2">No orders found</h3>
      <p className="text-gray-600 mb-6">You haven't placed any orders yet</p>
      <a href="/services">
        <Button variant="primary">Browse Products</Button>
      </a>
    </div>
  );
};