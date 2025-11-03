'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { RecommendedProduct, CartItem as CartItemType, } from '@/src/types/cart';
import { calculateCartSummary } from '@/src/utils/orderUtils';
import { useCart } from '@/src/hooks/useCart';
import { CartItem } from '@/src/components/cart/CartItem';
import { CartActions } from '@/src/components/cart/CartActions';
import { CartSummary } from '@/src/components/cart/CartSummary';
import { SupportCard } from '@/src/components/ui/SupportCard';
import { RecommendedProducts } from '@/src/components/product/RecommendedProducts';
import PageHeader from '@/src/components/common/PageHeader';

const initialCartItems: CartItemType[] = [
  {
    id: '1',
    name: 'PD240CH-Z4 Handheld Detector',
    description: 'Advanced metal detection for MRI safety',
    sku: 'PD240-Z4',
    price: 2499.0,
    quantity: 1,
    image: '/img/ab1.jpg',
    stockStatus: 'in-stock',
    badge: 1,
  },
  {
    id: '2',
    name: 'TechGate Access Control System',
    description: 'Complete MRI room access management',
    sku: 'TG-ACS-001',
    price: 8999.0,
    quantity: 1,
    image: '/img/ab2.jpg',
    stockStatus: 'limited',
    badge: 2,
  },
  {
    id: '3',
    name: 'MetalMag Portal System',
    description: 'Walk-through metal detection portal',
    sku: 'MMP-001',
    price: 12999.0,
    originalPrice: 15998.0,
    quantity: 2,
    image: '/img/ab3.jpg',
    stockStatus: 'in-stock',
    badge: 3,
  },
];

const recommendedProducts: RecommendedProduct[] = [
  {
    id: 'rec-1',
    name: 'MSDW – FMD System',
    description: 'Ferromagnetic detection wand',
    price: '$1,299.00',
    image: '/img/ab4.jpg',
    badge: 'Recommended',
    badgeColor: 'bg-[#6fb43f]',
  },
  {
    id: 'rec-2',
    name: 'MRI Safety Kit',
    description: 'Complete safety accessories bundle',
    price: '$599.00',
    image: '/img/ab1.jpg',
    badge: 'Accessory',
    badgeColor: 'bg-blue-500',
  },
  {
    id: 'rec-3',
    name: 'MRI Management Software',
    description: 'Annual license for system management',
    price: '$899.00/yr',
    image: '/img/ab2.jpg',
    badge: 'Software',
    badgeColor: 'bg-purple-500',
  },
  {
    id: 'rec-4',
    name: 'MRI Safety Training',
    description: 'Comprehensive staff training program',
    price: '$1,999.00',
    image: '/img/ab3.jpg',
    badge: 'Training',
    badgeColor: 'bg-orange-500',
  },
];

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart(initialCartItems);
  const summary = calculateCartSummary(items);

  const handlePromoApply = (code: string) => {
    console.log('Applying promo code:', code);
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout');
  };

  const handleAddToCart = (productId: string) => {
    console.log('Adding product to cart:', productId);
  };

  const handleUpdateCart = () => {
    console.log('Cart updated');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Cart"
        backgroundImage="/img/ab1.jpg"
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Cart Header */}
                <div className="bg-gradient-to-r from-[#005d90] to-[#42b3e5] p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                      <ShoppingCart className="w-8 h-8" />
                      Your Cart
                    </h2>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {summary.itemCount} Items
                    </span>
                  </div>
                </div>

                {/* Cart Items */}
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {items.length > 0 ? (
                    items.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onQuantityChange={(qty) => updateQuantity(item.id, qty)}
                        onRemove={() => removeItem(item.id)}
                      />
                    ))
                  ) : (
                    <div className="p-12 text-center">
                      <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Your cart is empty
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Add some products to get started
                      </p>
                      <a
                        href="/services"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-[#005d90] to-[#42b3e5] text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                      >
                        Browse Products
                      </a>
                    </div>
                  )}
                </div>

                {/* Cart Actions */}
                {items.length > 0 && (
                  <CartActions onClearCart={clearCart} onUpdateCart={handleUpdateCart} />
                )}
              </div>
            </div>

            {/* Cart Summary Section */}
            <div className="lg:col-span-1">
              <CartSummary
                summary={summary}
                onPromoApply={handlePromoApply}
                onCheckout={handleCheckout}
              />
              <SupportCard />
            </div>
          </div>

          {/* Recommended Products */}
          <RecommendedProducts products={recommendedProducts} onAddToCart={handleAddToCart} />
        </div>
      </section>
    </div>
  );
}