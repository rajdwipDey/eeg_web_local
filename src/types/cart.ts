export type StockStatus = 'in-stock' | 'limited' | 'pre-order';

export interface CartItem {
  id: string;
  name: string;
  description: string;
  sku: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  stockStatus: StockStatus;
  badge?: number;
}

export interface PromoCode {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
}

export interface CartSummaryData {
  subtotal: number;
  shipping: number;
  tax: number;
  taxRate: number;
  discount: number;
  total: number;
  itemCount: number;
}

export interface RecommendedProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge: string;
  badgeColor: string;
}
