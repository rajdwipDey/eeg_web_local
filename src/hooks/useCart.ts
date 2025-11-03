import { useState, useCallback } from 'react';
import { CartItem } from '../types/cart';

export const useCart = (initialItems: CartItem[]) => {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const updateQuantity = useCallback((id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  return {
    items,
    updateQuantity,
    removeItem,
    clearCart,
  };
};