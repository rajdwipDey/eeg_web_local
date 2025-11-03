'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { CloseIcon } from '../icons';
import { Address } from '@/src/types/address';
import SelectField from '../ui/SelectField';
import InputField from '../common/InputField';

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: Address | null;
  onSave: (formData: Omit<Address, 'id'> & { id?: number }) => void;
}

export const AddressModal: React.FC<AddressModalProps> = ({ 
  isOpen, 
  onClose, 
  address, 
  onSave 
}) => {
  const [formData, setFormData] = useState<Omit<Address, 'id'> & { id?: number }>({
    label: '',
    name: '',
    phone: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    isDefault: false
  });

  useEffect(() => {
    if (address) setFormData(address);
    else
      setFormData({
        label: '',
        name: '',
        phone: '',
        street: '',
        apartment: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        isDefault: false
      });
  }, [address, isOpen]);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  const countries = [
    { value: '', label: 'Select Country' },
    { value: 'United States', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Germany', label: 'Germany' },
    { value: 'France', label: 'France' },
    { value: 'India', label: 'India' },
    { value: 'China', label: 'China' },
    { value: 'Japan', label: 'Japan' },
    { value: 'Other', label: 'Other' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#005d90] to-[#42b3e5] text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
          <h3 className="text-2xl font-bold">{address ? 'Edit Address' : 'Add New Address'}</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
            <CloseIcon />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Address Label"
              id="label"
              placeholder="e.g., Home, Office, Parent's House"
              value={formData.label}
              onChange={(e) => handleChange('label', e.target.value)}
              required
              className="md:col-span-2"
            />
            <InputField
              label="Full Name"
              id="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
              className="md:col-span-2"
            />
            <InputField
              label="Phone Number"
              id="phone"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              required
              className="md:col-span-2"
            />
            <InputField
              label="Street Address"
              id="street"
              placeholder="Enter street address"
              value={formData.street}
              onChange={(e) => handleChange('street', e.target.value)}
              required
              className="md:col-span-2"
            />
            <InputField
              label="Apartment, Suite, etc. (Optional)"
              id="apartment"
              placeholder="Apt, Suite, Unit, etc."
              value={formData.apartment}
              onChange={(e) => handleChange('apartment', e.target.value)}
              className="md:col-span-2"
            />
            <InputField
              label="City"
              id="city"
              placeholder="Enter city"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              required
            />
            <InputField
              label="State/Province"
              id="state"
              placeholder="State or Province"
              value={formData.state}
              onChange={(e) => handleChange('state', e.target.value)}
              required
            />
            <InputField
              label="Zip/Postal Code"
              id="zipCode"
              placeholder="Zip or postal code"
              value={formData.zipCode}
              onChange={(e) => handleChange('zipCode', e.target.value)}
              required
            />
            <SelectField
              label="Country"
              id="country"
              options={countries}
              value={formData.country}
              onChange={(e) => handleChange('country', e.target.value)}
              required
            />
            <div className="md:col-span-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isDefault}
                  onChange={(e) => handleChange('isDefault', e.target.checked)}
                  className="w-5 h-5 text-[#42b3e5] border-gray-300 rounded focus:ring-2 focus:ring-[#42b3e5]"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Set as default address
                </span>
              </label>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 pt-4">
            <Button type="submit" variant="primary" className="flex-1">
              Save Address
            </Button>
            <Button type="button" variant="secondary" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
