'use client';

import { AddressCard } from '@/src/components/addresses/AddressCard';
import { AddressModal } from '@/src/components/addresses/AddressModal';
import PageHeader from '@/src/components/common/PageHeader';
import { NavigationTabs } from '@/src/components/dashboard/NavigationTabs';
import DashboardNav from '@/src/components/profile/DashboardNav';
import { Button } from '@/src/components/ui/Button';
import { mockNavItems } from '@/src/dummyData/dashboardData';
import { Address } from '@/src/types/address';
import { Home, MapPin, PlusIcon, Shield, ShoppingCart, User } from 'lucide-react';
import React, { useState } from 'react';


export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      label: 'Home',
      name: 'John Doe',
      street: '123 Main Street, Apt 4B',
      apartment: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      isDefault: true
    },
    {
      id: 2,
      label: 'Office',
      name: 'John Doe',
      street: '456 Business Ave, Suite 200',
      apartment: 'Suite 200',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      country: 'United States',
      phone: '+1 (555) 987-6543',
      isDefault: false
    },
    {
      id: 3,
      label: "Parent's House",
      name: 'John Doe',
      street: '789 Oak Street',
      apartment: '',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      country: 'United States',
      phone: '+1 (555) 456-7890',
      isDefault: false
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this address?')) {
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
  };

  const handleSetDefault = (id: number) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const handleSave = (formData: Omit<Address, 'id'> & { id?: number }) => {
    if (editingAddress) {
      setAddresses(addresses.map(addr =>
        addr.id === editingAddress.id ? { ...formData, id: addr.id } as Address : addr
      ));
    } else {
      const newAddress: Address = {
        ...formData,
        id: Math.max(...addresses.map(a => a.id), 0) + 1
      } as Address;

      if (newAddress.isDefault) {
        setAddresses([...addresses.map(a => ({ ...a, isDefault: false })), newAddress]);
      } else {
        setAddresses([...addresses, newAddress]);
      }
    }
    setEditingAddress(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingAddress(null);
  };
  const dashboardNavItems = [
    { label: 'Dashboard', href: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { label: 'Profile', href: '/profile-settings', icon: <User className="w-5 h-5" />},
    { label: 'Addresses', href: '/addresses', icon: <MapPin className="w-5 h-5" />, active: true },
    { label: 'Orders', href: '/order-history', icon: <ShoppingCart className="w-5 h-5" /> },
    { label: 'Security', href: '/security', icon: <Shield className="w-5 h-5" /> }
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      <PageHeader
        title="Addresses"
        subtitle="Manage your addresses"
        backgroundImage="/img/ab1.jpg"
        scrollTargetId="'#next-section'"
      />
      <section id="next-section" className="py-20">
        <div className="container mx-auto px-4">
        {/* <NavigationTabs items={mockNavItems} /> */}
        <DashboardNav items={dashboardNavItems} />
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  My Addresses
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Manage your delivery addresses
                </p>
              </div>
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="primary"
                className="px-6 py-3"
                icon={<PlusIcon />}
              >
                Add New Address
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addresses.map(address => (
                <AddressCard
                  key={address.id}
                  address={address}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onSetDefault={handleSetDefault}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <AddressModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        address={editingAddress}
        onSave={handleSave}
      />
    </div>
  );
}
