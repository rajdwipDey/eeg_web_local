import { ShoppingBag, DollarSign, Heart, Package, TrendingUp, Zap, CheckCircle } from 'lucide-react';
import { NavItem, Notification, Order, QuickAction, StatCardProps, UserProfile } from '../types/dashboard';

export const mockUser: UserProfile = {
  name: 'Dr. Johnson',
  role: 'Premium Member'
};

export const mockStats: StatCardProps[] = [
  {
    title: 'Total Orders',
    value: 24,
    icon: <ShoppingBag className="w-6 h-6 text-white" />,
    gradient: 'from-[#6fb43f] to-[#5a9935]',
    change: '+12%',
    changeLabel: 'from last month',
    changeType: 'positive'
  },
  {
    title: 'Total Spent',
    value: '$45,280',
    icon: <DollarSign className="w-6 h-6 text-white" />,
    gradient: 'from-[#005d90] to-[#42b3e5]',
    change: '+8%',
    changeLabel: 'from last month',
    changeType: 'positive'
  },
  {
    title: 'Saved Items',
    value: 8,
    icon: <Heart className="w-6 h-6 text-white" />,
    gradient: 'from-red-500 to-pink-500',
    change: '2 new',
    changeLabel: 'this week',
    changeType: 'neutral'
  }
];

export const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'Order #ORD-2024-001',
    items: 'PD240CH-Z4 Handheld Detector + 2 more items',
    date: 'January 15, 2024',
    amount: '$28,069.55',
    status: 'Delivered'
  },
  {
    id: '2',
    orderNumber: 'Order #ORD-2024-002',
    items: 'MSDW – FMD System',
    date: 'January 10, 2024',
    amount: '$1,299.00',
    status: 'Shipped'
  },
  {
    id: '3',
    orderNumber: 'Order #ORD-2024-003',
    items: 'MRI Safety Training Package',
    date: 'January 5, 2024',
    amount: '$1,999.00',
    status: 'Processing'
  }
];

export const mockQuickActions: QuickAction[] = [
  {
    label: 'Browse Products',
    href: '/services',
    icon: <ShoppingBag className="w-5 h-5" />,
    variant: 'primary'
  },
  {
    label: 'View Cart',
    href: '/cart',
    icon: <Package className="w-5 h-5" />,
    variant: 'secondary',
    badge: '(3)'
  },
  {
    label: 'Track Orders',
    href: '/orders',
    icon: <TrendingUp className="w-5 h-5" />,
    variant: 'secondary'
  },
  {
    label: 'Get Support',
    href: '/contact',
    icon: <Zap className="w-5 h-5" />,
    variant: 'secondary'
  }
];

export const mockNotifications: Notification[] = [
  {
    title: 'Order Shipped',
    message: 'Your order #ORD-2024-002 has been shipped and is on its way.',
    time: '2 hours ago',
    type: 'info'
  },
  {
    title: 'Payment Confirmed',
    message: 'Payment for order #ORD-2024-003 has been processed successfully.',
    time: '1 day ago',
    type: 'success'
  },
  {
    title: 'Profile Update',
    message: 'Please update your billing address for faster checkout.',
    time: '3 days ago',
    type: 'warning'
  }
];


export const mockNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <Package className="w-5 h-5" />,
    active: true,
  },
  {
    label: "Profile",
    href: "/profile-settings",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    label: "Addresses",
    href: "/addresses",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    label: "Orders",
    href: "/order-history",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  {
    label: "Security",
    href: "/security",
    icon: <CheckCircle className="w-5 h-5" />,
  },
];