import React from 'react';
import { CheckCircle, Truck, Clock } from 'lucide-react';
import { OrderStatus } from '@/src/types/order';
import { COLORS } from '@/src/lib/constants';


interface StatusBadgeProps {
  status: OrderStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const icons = {
    delivered: CheckCircle,
    shipped: Truck,
    processing: Clock,
  };

  const config = COLORS.status[status];
  const Icon = icons[status];

  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 ${config.bg} ${config.text} rounded-full text-sm font-semibold`}>
      <Icon className="w-4 h-4" />
      {config.label}
    </span>
  );
};