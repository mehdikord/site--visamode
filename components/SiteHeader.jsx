'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '../app/providers';
import { formatNumber } from '../lib/data';

const navItems = [
  { label: 'خانه', href: '/' },
  { label: 'شگفت‌انگیز', href: '/products?discount=true', hot: true },
  { label: 'فروشگاه', href: '/products' },
  { label: 'کالکشن‌ها', href: '/collections' },
  { label: 'مناسبتی', href: '/occasions' },
  { label: 'ژورنال', href: '/journal' },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, wishlist, setSearchOpen, setWishlistOpen, setCartOpen } = useStore();

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return <>
    <div className="relative z-[60] bg-vaisa-black text-[12px] text-white md:text-[13px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
        <div className="flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-vaisa-gold" />
          <div className="overflow-hidden"><div className="marquee-track gap-8" style={{ animationDuration: '22s' }}><span className="pl-8">ارسال رایگان برای خرید بالای ۱٫۵ میلیون تومان • ضمانت ۷ روزه مرجوعی • واردات مستقیم از چین • کالکشن پاییز ۱۴۰۵ رسید •</span><span className="pl-8">ارسال رایگان برای خرید بالای ۱٫۵ میلیون تومان • ضمانت ۷ روزه مرجوعی • واردات مستقیم از چین • کالکشن پاییز ۱۴۰۵ رسید •</span></div></div>
        </div>
        <div className="hidden shrink-0 items-center gap-5 text-white/70 md:flex"><Link href="/order-tracking" className="transition hover:text-vaisa-gold">پیگیری سفارش</Link><span className="h-4 w-px bg-white/20" /><Link href="/journal" className="transition hover:text-vaisa-gold">مجله ویسا</Link><span className="h-4 w-px bg-white/20" /><span className="flex items-center gap-1">FA <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg></span></div>
      </div>
    </div>

    <header id="header" className="sticky top-0 z-50 border-b border-black/5 bg-vaisa-cream/80 backdrop-blur-xl transition-all duration-500">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        <div className="flex h-[68px] items-center justify-between gap-1 sm:h-[72px] sm:gap-3 md:h-[84px]">
          <button onClick={() => setMobileOpen(true)} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white min-[360px]:h-9 min-[360px]:w-9 sm:h-11 sm:w-11 lg:hidden" aria-label="باز کردن منو"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="16" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg></button>
          <Link href="/" className="flex min-w-0 shrink items-center gap-1 sm:gap-3" aria-label="VAISA MODE صفحه اصلی">
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-vaisa-black text-base font-bold text-vaisa-gold min-[360px]:h-9 min-[360px]:w-9 min-[360px]:text-lg sm:h-11 sm:w-11 sm:text-xl md:h-12 md:w-12 font-play">V<span className="absolute inset-0 m-1 rounded-full border border-vaisa-gold/30" /></div>
            <div className="leading-none"><div className="whitespace-nowrap font-latin text-[12px] font-bold text-vaisa-black min-[360px]:text-[13px] sm:text-[17px] md:text-[20px]">VAISA MODE</div><div className="mt-1 hidden whitespace-nowrap text-[10px] font-medium tracking-[.3em] text-vaisa-golddark sm:block">WOMEN • FASHION • HOUSE</div></div>
          </Link>
          <nav className="hidden items-center gap-8 text-[14px] font-medium lg:flex">
            {navItems.map((item) => <Link key={item.label} href={item.href} className={`hover-line ${pathname === item.href ? 'active' : ''} ${item.hot ? 'flex items-center gap-1.5 text-red-700' : ''}`}>
              {item.label}{item.hot && <span className="animate-pulse rounded-md bg-red-700 px-1.5 py-0.5 text-[10px] text-white">HOT</span>}
            </Link>)}
          </nav>
          <div className="flex shrink-0 items-center gap-0.5 min-[380px]:gap-1 sm:gap-3">
            <button onClick={() => setSearchOpen(true)} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-transparent transition hover:border-black hover:bg-black hover:text-white min-[360px]:h-9 min-[360px]:w-9 sm:h-11 sm:w-11" title="جستجو" aria-label="جستجو"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg></button>
            <button onClick={() => setWishlistOpen(true)} className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition hover:bg-black hover:text-white min-[360px]:h-9 min-[360px]:w-9 sm:h-11 sm:w-11" title="علاقه‌مندی" aria-label="علاقه‌مندی‌ها"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>{wishlist.length > 0 && <span className="absolute -left-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-vaisa-gold px-1 text-[11px] font-bold text-white">{formatNumber(wishlist.length)}</span>}</button>
            <button onClick={() => setCartOpen(true)} className="flex h-8 shrink-0 items-center gap-0.5 rounded-full bg-vaisa-black px-1.5 text-white shadow-card transition hover:bg-vaisa-golddark min-[360px]:h-9 min-[360px]:gap-1 min-[360px]:px-2 sm:h-11 sm:gap-2 sm:pl-4 sm:pr-3" title="سبد خرید"><svg width="17" height="17" className="sm:h-[19px] sm:w-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 7h15l-1.5 9h-12z" /><path d="M6 7 5 3H2" /><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /></svg><span className="hidden text-[13px] font-semibold sm:block">سبد خرید</span><span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-vaisa-gold px-0.5 text-[10px] font-bold min-[360px]:h-[22px] min-[360px]:min-w-[22px] min-[360px]:text-[11px] sm:px-1 sm:text-[12px]">{formatNumber(cartCount)}</span></button>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-0 bg-vaisa-gold transition-all" id="headerProgress" />
    </header>

    {mobileOpen && <div className="fixed inset-0 z-[80] lg:hidden" role="dialog" aria-modal="true" aria-label="منوی موبایل">
      <button onClick={closeMobile} className="absolute inset-0 h-full w-full bg-black/60 backdrop-blur-sm" aria-label="بستن منو" />
      <div className="mobile-drawer absolute right-0 top-0 flex h-full w-[85%] max-w-[380px] flex-col overflow-y-auto overscroll-contain bg-vaisa-cream p-7">
        <div className="mb-8 flex items-center justify-between"><div className="font-latin text-lg font-bold">VAISA MODE</div><button onClick={closeMobile} className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">✕</button></div>
        <nav className="flex flex-col gap-1 text-[16px] font-semibold">{navItems.map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="flex justify-between border-b border-black/5 py-3">{item.label}<span>←</span></Link>)}<Link href="/about" onClick={closeMobile} className="flex justify-between border-b border-black/5 py-3">درباره ما<span>←</span></Link></nav>
        <div className="mt-auto rounded-2xl bg-vaisa-black p-5 text-white"><div className="mb-1 text-sm font-bold text-vaisa-gold">مشاوره استایل رایگان</div><div className="mb-3 text-[13px] text-white/70">با کارشناسان ویسا در ارتباط باشید</div><Link href="/contact" onClick={closeMobile} className="block w-full rounded-xl bg-vaisa-gold py-2.5 text-center text-sm font-bold text-white">گفتگو با استایلیست</Link></div>
      </div>
    </div>}
  </>;
}
