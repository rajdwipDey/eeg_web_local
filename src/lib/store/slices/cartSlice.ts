import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  loading: boolean;
}

const CART_STORAGE_KEY = 'shopping_cart';

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
  loading: true,
};

const calculateTotals = (items: CartItem[]) => ({
  total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
});

const saveToStorage = (items: CartItem[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }
};

// Load cart from storage
export const loadCart = createAsyncThunk('cart/load', async () => {
  if (typeof window === 'undefined') return [];
  
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Omit<CartItem, 'quantity'>; quantity?: number }>) => {
      const { product, quantity = 1 } = action.payload;
      const existing = state.items.find(item => item.productId === product.productId);

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }

      Object.assign(state, calculateTotals(state.items));
      saveToStorage(state.items);
    },
    
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.productId !== action.payload);
      Object.assign(state, calculateTotals(state.items));
      saveToStorage(state.items);
    },
    
    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload;

      if (quantity <= 0) {
        state.items = state.items.filter(item => item.productId !== productId);
      } else {
        const item = state.items.find(item => item.productId === productId);
        if (item) item.quantity = quantity;
      }

      Object.assign(state, calculateTotals(state.items));
      saveToStorage(state.items);
    },
    
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
      if (typeof window !== 'undefined') {
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadCart.fulfilled, (state, action) => {
        state.items = action.payload;
        Object.assign(state, calculateTotals(action.payload));
        state.loading = false;
      })
      .addCase(loadCart.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;