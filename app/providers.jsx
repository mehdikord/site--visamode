'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { PRODUCTS } from '../lib/data';
import GlobalUI from '../components/global/GlobalUI';

const StoreContext = createContext(null);
const STORAGE_KEY = 'vaisa-mode-store-v1';
const FREE_SHIPPING = 1_500_000;

export function useStore() {
  const value = useContext(StoreContext);
  if (!value) throw new Error('useStore must be used inside AppProvider');
  return value;
}

export default function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [ready, setReady] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
      if (Array.isArray(saved.cart)) setCart(saved.cart);
      if (Array.isArray(saved.wishlist)) setWishlist(saved.wishlist);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ cart, wishlist }));
  }, [cart, wishlist, ready]);

  const toast = useCallback((message) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((current) => [...current, { id, message }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 3200);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => toast('🎉 به ویسا مد خوش اومدی! کد VAISA10 = ده درصد تخفیف اول'), 1500);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const addToCart = useCallback((productId, size, color, quantity = 1) => {
    const product = PRODUCTS.find((item) => item.id === Number(productId));
    if (!product) return;
    const safeSize = size || product.sizes[1] || product.sizes[0];
    const safeColor = color || product.colors[0].n;
    const key = `${product.id}-${safeSize}-${safeColor}`;
    setCart((current) => {
      const existing = current.find((item) => item.key === key);
      if (existing) {
        return current.map((item) => item.key === key ? { ...item, qty: item.qty + quantity } : item);
      }
      return [...current, { key, id: product.id, size: safeSize, color: safeColor, qty: quantity }];
    });
    toast('به سبد خرید اضافه شد 🛍');
  }, [toast]);

  const changeQuantity = useCallback((key, delta) => {
    setCart((current) => current
      .map((item) => item.key === key ? { ...item, qty: item.qty + delta } : item)
      .filter((item) => item.qty > 0));
  }, []);

  const removeFromCart = useCallback((key) => {
    setCart((current) => current.filter((item) => item.key !== key));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((productId) => {
    const id = Number(productId);
    const exists = wishlist.includes(id);
    setWishlist((current) => current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id]);
    toast(exists ? 'از علاقه‌مندی‌ها حذف شد' : 'به علاقه‌مندی‌ها اضافه شد 🤍');
  }, [toast, wishlist]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => {
    const product = PRODUCTS.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  const discount = cart.reduce((sum, item) => {
    const product = PRODUCTS.find((entry) => entry.id === item.id);
    return sum + (product?.old ? (product.old - product.price) * item.qty : 0);
  }, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING ? 0 : 95_000;
  const total = subtotal + shipping;

  const value = useMemo(() => ({
    cart,
    wishlist,
    cartCount,
    subtotal,
    discount,
    shipping,
    total,
    freeShipping: FREE_SHIPPING,
    ready,
    cartOpen,
    wishlistOpen,
    searchOpen,
    videoOpen,
    toasts,
    setCartOpen,
    setWishlistOpen,
    setSearchOpen,
    setVideoOpen,
    addToCart,
    changeQuantity,
    removeFromCart,
    clearCart,
    toggleWishlist,
    toast,
  }), [cart, wishlist, cartCount, subtotal, discount, shipping, total, ready, cartOpen, wishlistOpen, searchOpen, videoOpen, toasts, addToCart, changeQuantity, removeFromCart, clearCart, toggleWishlist, toast]);

  return (
    <StoreContext.Provider value={value}>
      {children}
      <GlobalUI />
    </StoreContext.Provider>
  );
}
