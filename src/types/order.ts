export type OrderStatus = 'delivered' | 'shipped' | 'processing';

export interface OrderItem {
  name: string;
  quantity: number;
}

export interface TrackingStep {
  title: string;
  date: string;
  completed: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: OrderStatus;
  total: number;
  shippingAddress: string;
  deliveryDate?: string;
  estimatedDelivery?: string;
  items: OrderItem[];
  trackingNumber?: string;
  trackingSteps?: TrackingStep[];
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface NavItem {
  href: string;
  label: string;
  icon: any;
  active?: boolean;
}
