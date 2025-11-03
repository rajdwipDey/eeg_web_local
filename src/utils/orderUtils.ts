import { CartItem, CartSummaryData } from "../types/cart";

export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  export const calculateCartSummary = (
    items: CartItem[],
    taxRate: number = 0.085,
    discountRate: number = 0.1
  ): CartSummaryData => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const shipping = 0; // Free shipping
    const discount = subtotal * discountRate;
    const taxableAmount = subtotal - discount;
    const tax = taxableAmount * taxRate;
    const total = taxableAmount + tax + shipping;
  
    return {
      subtotal,
      shipping,
      tax,
      taxRate,
      discount,
      total,
      itemCount,
    };
  };