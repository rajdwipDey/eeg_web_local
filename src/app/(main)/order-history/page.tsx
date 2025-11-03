'use client';

import PageHeader from '@/src/components/common/PageHeader';
import { NavigationTabs } from '@/src/components/dashboard/NavigationTabs';
import { EmptyState } from '@/src/components/orders/EmptyState';
import { FilterButtons } from '@/src/components/orders/FilterButtons';
import { OrderCard } from '@/src/components/orders/OrderCard';
import DashboardNav from '@/src/components/profile/DashboardNav';
import { mockNavItems } from '@/src/dummyData/dashboardData';
import { Order } from '@/src/types/order';
import { Home, MapPin, Shield, ShoppingCart, User } from 'lucide-react';
import React, { useState } from 'react';

const sampleOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'Order #ORD-2024-001',
    date: 'October 1, 2024',
    status: 'delivered',
    total: 1299.00,
    shippingAddress: '123 Main Street, Apt 4B\nNew York, NY 10001',
    deliveryDate: 'October 5, 2024',
    items: [
      { name: 'TechGate Auto MRI Safety System', quantity: 1 },
      { name: 'PD240CH-Z4 Handheld Detector', quantity: 1 },
    ],
  },
  {
    id: '2',
    orderNumber: 'Order #ORD-2024-002',
    date: 'October 10, 2024',
    status: 'shipped',
    total: 899.00,
    shippingAddress: '456 Business Ave, Suite 200\nLos Angeles, CA 90001',
    estimatedDelivery: 'October 18, 2024',
    trackingNumber: 'UPS-123456789',
    trackingSteps: [
      { title: 'Out for Delivery', date: 'October 13, 2024 - 8:45 AM', completed: true },
      { title: 'In Transit', date: 'October 12, 2024 - 2:30 PM', completed: true },
      { title: 'Shipped', date: 'October 11, 2024 - 10:00 AM', completed: false },
    ],
    items: [
      { name: 'MetalMag Portal Detection System', quantity: 1 },
    ],
  },
  {
    id: '3',
    orderNumber: 'Order #ORD-2024-003',
    date: 'October 14, 2024',
    status: 'processing',
    total: 549.00,
    shippingAddress: '789 Oak Street\nChicago, IL 60601',
    estimatedDelivery: 'October 20, 2024',
    items: [
      { name: 'PD240CH Handheld Metal Detector', quantity: 1 },
    ],
  },
];

export default function OrdersHistory() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredOrders = activeFilter === 'all' 
    ? sampleOrders 
    : sampleOrders.filter(order => order.status === activeFilter);

    const dashboardNavItems = [
      { label: 'Dashboard', href: '/dashboard', icon: <Home className="w-5 h-5" /> },
      { label: 'Profile', href: '/profile-settings', icon: <User className="w-5 h-5" />},
      { label: 'Addresses', href: '/addresses', icon: <MapPin className="w-5 h-5" /> },
      { label: 'Orders', href: '/orders', icon: <ShoppingCart className="w-5 h-5" />, active: true  },
      { label: 'Security', href: '/security', icon: <Shield className="w-5 h-5" /> }
    ];
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Order History" 
        subtitle="Track and manage your orders" 
        backgroundImage="/img/ab1.jpg"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
        {/* <NavigationTabs items={mockNavItems} /> */}
        <DashboardNav items={dashboardNavItems} />

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h2>
                <p className="text-gray-600">View and track your order history</p>
              </div>
              <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            </div>

            {/* Orders List */}
            {filteredOrders.length > 0 ? (
              <div className="space-y-6">
                {filteredOrders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
