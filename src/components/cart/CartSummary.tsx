import React from 'react';
import { Calculator, Lock, ShoppingBag } from 'lucide-react';
import { PromoCodeInput } from './PromoCodeInput';
import { CartSummaryData } from '@/src/types/cart';
import { formatCurrency } from '@/src/utils/orderUtils';
import { Button } from '../ui/Button';
import { PAYMENT_METHODS } from '@/src/lib/constants';

interface CartSummaryProps {
  summary: CartSummaryData;
  onPromoApply: (code: string) => void;
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  summary,
  onPromoApply,
  onCheckout,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden sticky top-8">
      {/* Summary Header */}
      <div className="bg-gradient-to-r from-[#005d90] to-[#42b3e5] p-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Calculator className="w-6 h-6" />
          Order Summary
        </h3>
      </div>

      <div className="p-6 space-y-6">
        {/* Subtotal Breakdown */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">
              Subtotal ({summary.itemCount} items)
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {formatCurrency(summary.subtotal)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Shipping</span>
            <span className="font-semibold text-green-600">Free</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">
              Tax ({(summary.taxRate * 100).toFixed(1)}%)
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {formatCurrency(summary.tax)}
            </span>
          </div>
          <div className="flex justify-between items-center text-green-600">
            <span>Bulk Discount (10%)</span>
            <span className="font-semibold">-{formatCurrency(summary.discount)}</span>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-600" />

        {/* Total */}
        <div className="flex justify-between items-center text-xl font-bold">
          <span className="text-gray-900 dark:text-white">Total</span>
          <span className="text-[#005d90] dark:text-[#42b3e5]">
            {formatCurrency(summary.total)}
          </span>
        </div>

        {/* Promo Code */}
        <PromoCodeInput onApply={onPromoApply} />

        {/* Checkout Button */}
        <Button variant="primary" fullWidth onClick={onCheckout} className="py-4 text-lg font-bold">
          <Lock className="w-6 h-6" />
          Proceed to Checkout
        </Button>

        {/* Security Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Secure 256-bit SSL encryption
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center space-y-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">We accept</p>
          <div className="flex justify-center items-center gap-3">
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method.name}
                className={`w-12 h-8 ${method.color} rounded flex items-center justify-center text-white text-xs font-bold`}
              >
                {method.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};