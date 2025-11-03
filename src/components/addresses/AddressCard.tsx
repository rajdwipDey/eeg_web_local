'use client';

import React from 'react';
import { HomeIcon, OfficeIcon, MapPinIcon, PhoneIcon, EditIcon, DeleteIcon, CheckIcon } from '../icons';
import { Button } from '../ui/Button';
import { Address } from '@/src/types/address';

interface AddressCardProps {
  address: Address;
  onEdit: (address: Address) => void;
  onDelete: (id: number) => void;
  onSetDefault: (id: number) => void;
}

export const AddressCard: React.FC<AddressCardProps> = ({ 
  address, 
  onEdit, 
  onDelete, 
  onSetDefault 
}) => {
  const getIcon = (label: string) => {
    if (label === 'Home') return <HomeIcon className="w-5 h-5 text-[#42b3e5]" />;
    if (label === 'Office') return <OfficeIcon className="w-5 h-5 text-[#42b3e5]" />;
    return <MapPinIcon className="w-5 h-5 text-[#42b3e5]" />;
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg relative group hover:shadow-xl transition-all duration-300 ${
      address.isDefault ? 'border-2 border-[#42b3e5]' : 'border border-gray-200 dark:border-gray-700 hover:border-[#42b3e5]'
    }`}>
      {address.isDefault && (
        <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-[#005d90] to-[#42b3e5] text-white px-3 py-1 rounded-full text-xs font-semibold">
            Default
          </span>
        </div>
      )}
      
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          {getIcon(address.label)}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{address.label}</h3>
        </div>
        
        <div className="space-y-2 text-gray-600 dark:text-gray-400">
          <p className="font-semibold text-gray-900 dark:text-white">{address.name}</p>
          <p>{address.street}</p>
          <p>{address.city}, {address.state} {address.zipCode}</p>
          <p>{address.country}</p>
          <p className="flex items-center gap-2 mt-3">
            <PhoneIcon />
            {address.phone}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        {!address.isDefault && (
          <Button
            variant="outline"
            onClick={() => onSetDefault(address.id)}
            className="flex-1 text-sm"
            icon={<CheckIcon />}
          >
            Set Default
          </Button>
        )}
        <Button
          variant="secondary"
          onClick={() => onEdit(address)}
          className={!address.isDefault ? '' : 'flex-1'}
          icon={<EditIcon />}
        >
          {address.isDefault ? 'Edit' : <span className="sr-only sm:not-sr-only">Edit</span>}
        </Button>
        <Button
          variant="danger"
          onClick={() => onDelete(address.id)}
          className={!address.isDefault ? '' : 'flex-1'}
          icon={<DeleteIcon />}
        >
          {address.isDefault ? 'Delete' : <span className="sr-only sm:not-sr-only">Delete</span>}
        </Button>
      </div>
    </div>
  );
};
