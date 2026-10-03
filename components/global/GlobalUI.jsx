'use client';

import { useEffect, useState } from 'react';
import { useStore } from '../../app/providers';
import CartDrawer from './CartDrawer';
import WishlistDrawer from './WishlistDrawer';
import SearchModal from './SearchModal';
import VideoModal from './VideoModal';
import ChatWidget from './ChatWidget';

function ToastViewport() {
  const { toasts } = useStore();
  return <div className="fixed bottom-5 left-1/2 z-[99] flex w-max max-w-[92vw] -translate-x-1/2 flex-col gap-2 md:left-8 md:translate-x-0" aria-live="polite">
    {toasts.map((item) => <div key={item.id} className="toast-in flex max-w-[92vw] items-center gap-2 rounded-2xl bg-vaisa-black px-5 py-3.5 text-[13px] font-bold text-white shadow-lux"><span className="h-2 w-2 shrink-0 rounded-full bg-vaisa-gold" /><span>{item.message}</span></div>)}
  </div>;
}

function ScrollControls() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const progress = root.scrollHeight > root.clientHeight ? root.scrollTop / (root.scrollHeight - root.clientHeight) * 100 : 0;
      const bar = document.getElementById('headerProgress');
      if (bar) bar.style.width = `${progress}%`;
      document.getElementById('header')?.classList.toggle('shadow-card', root.scrollTop > 20);
      setVisible(root.scrollTop > 600);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-5 left-5 z-[70] flex h-[52px] w-[52px] items-center justify-center rounded-full border border-black/10 bg-white text-xl shadow-card transition hover:bg-black hover:text-white ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`} aria-label="بازگشت به بالا">↑</button>;
}

function EscapeHandler() {
  const { setCartOpen, setWishlistOpen, setSearchOpen, setVideoOpen } = useStore();
  useEffect(() => {
    const onKey = (event) => {
      if (event.key !== 'Escape') return;
      setCartOpen(false);
      setWishlistOpen(false);
      setSearchOpen(false);
      setVideoOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [setCartOpen, setWishlistOpen, setSearchOpen, setVideoOpen]);
  return null;
}

export default function GlobalUI() {
  const { cartOpen, wishlistOpen, searchOpen, videoOpen } = useStore();
  useEffect(() => {
    const lock = cartOpen || wishlistOpen || searchOpen || videoOpen;
    document.body.style.overflow = lock ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cartOpen, wishlistOpen, searchOpen, videoOpen]);

  return <>
    <CartDrawer />
    <WishlistDrawer />
    <SearchModal />
    <VideoModal />
    <ChatWidget />
    <ToastViewport />
    <ScrollControls />
    <EscapeHandler />
  </>;
}
