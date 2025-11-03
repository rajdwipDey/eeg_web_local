'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';
import { initializeAuth } from './slices/authSlice';
import { loadCart } from './slices/cartSlice';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore | null>(null); 

  if (!storeRef.current) {
    storeRef.current = makeStore();
    
    if (typeof window !== 'undefined') {
      storeRef.current.dispatch(initializeAuth());
      storeRef.current.dispatch(loadCart());
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}