import { LucideIcon } from "lucide-react";

export interface StatCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode | LucideIcon;
    gradient: string;
    change: string;
    changeLabel: string;
    changeType: 'positive' | 'neutral';
    changeColor?: string;
  }
  
  export interface Order {
    id: string;
    orderNumber: string;
    items: string;
    date: string;
    amount: string;
    status: 'Delivered' | 'Shipped' | 'Processing';
  }
  
  export interface QuickAction {
    label: string;
    href: string;
    icon: React.ReactNode;
    variant: 'primary' | 'secondary';
    badge?: string;
  }
  
  export interface Notification {
    title: string;
    message: string;
    time: string;
    type: 'info' | 'success' | 'warning';
  }
  
  export interface NavItem {
    label: string;
    href: string;
    icon: React.ReactNode;
    active?: boolean;
  }
  
  export interface UserProfile {
    name: string;
    role: string;
    profileImage?: string;
  }