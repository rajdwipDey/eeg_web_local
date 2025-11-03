import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';

interface CartActionsProps {
  onClearCart: () => void;
  onUpdateCart: () => void;
}

export const CartActions: React.FC<CartActionsProps> = ({
  onClearCart,
  onUpdateCart,
}) => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <a
          href="/services"
          className="inline-flex items-center gap-2 text-[#005d90] dark:text-[#42b3e5] hover:text-[#6fb43f] transition-colors duration-200 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Continue Shopping
        </a>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onClearCart}>
            Clear Cart
          </Button>
          <Button variant="success" onClick={onUpdateCart}>
            Update Cart
          </Button>
        </div>
      </div>
    </div>
  );
};