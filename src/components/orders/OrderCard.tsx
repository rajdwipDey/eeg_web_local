import React from 'react';
import { Package, MapPin, Calendar, Download } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { TrackingProgress } from './TrackingProgress';
import { OrderItemsList } from './OrderItemsList';
import { Order } from '@/src/types/order';
import { Button } from '../ui/Button';

interface OrderCardProps {
  order: Order;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#005d90] to-[#42b3e5] rounded-xl flex items-center justify-center flex-shrink-0">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{order.orderNumber}</h3>
              <p className="text-sm text-gray-600">Placed on {order.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <StatusBadge status={order.status} />
            <span className="text-xl font-bold text-gray-900">${order.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Details */}
        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Shipping Address
              </p>
              <p className="font-medium text-gray-900 pl-6 whitespace-pre-line">{order.shippingAddress}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {order.deliveryDate ? 'Delivery Date' : 'Estimated Delivery'}
              </p>
              <p className="font-medium text-gray-900 pl-6">
                {order.deliveryDate || order.estimatedDelivery}
              </p>
            </div>
          </div>

          {/* Tracking Progress (if shipped) */}
          {order.trackingNumber && order.trackingSteps && (
            <TrackingProgress trackingNumber={order.trackingNumber} steps={order.trackingSteps} />
          )}

          {/* Order Items */}
          <OrderItemsList items={order.items} />

          {/* Action Buttons */}
          <div className="flex gap-3 flex-wrap">
            <Button variant="primary" className="flex-1 min-w-[120px]">
              {order.status === 'shipped' ? 'Track Order' : 'View Details'}
            </Button>
            
            {order.status === 'delivered' && (
              <>
                <Button variant="secondary" className="flex-1 min-w-[120px]">
                  Reorder
                </Button>
                <Button variant="secondary" icon={<Download className="w-5 h-5" />}>
                </Button>
              </>
            )}
            
            {order.status === 'processing' && (
              <Button variant="danger" className="flex-1 min-w-[120px]">
                Cancel Order
              </Button>
            )}
            
            {order.status === 'shipped' && (
              <Button variant="secondary" className="flex-1 min-w-[120px]">
                View Details
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
