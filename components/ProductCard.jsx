'use client';

import Link from 'next/link';
import { discountPercent, formatNumber, formatPrice } from '../lib/data';
import { useStore } from '../app/providers';

export default function ProductCard({ product, dark = false }) {
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const off = discountPercent(product);
  const favorite = wishlist.includes(product.id);

  const quickAdd = (event) => {
    event.stopPropagation();
    addToCart(product.id, product.sizes[1] || product.sizes[0], product.colors[0].n);
  };

  return <article className={`product-card group relative overflow-hidden rounded-[20px] border transition-all duration-500 hover:-translate-y-1 hover:shadow-card ${dark ? 'border-white/10 bg-white/[.06]' : 'border-black/5 bg-vaisa-cream'}`}>
    <Link href={`/products/${product.slug}`} aria-label={`مشاهده جزئیات و خرید ${product.name}`} className="absolute inset-0 z-10 rounded-[20px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vaisa-gold"><span className="sr-only">مشاهده جزئیات و خرید {product.name}</span></Link>
    <div className="relative aspect-[3/4] overflow-hidden">
      <img src={product.imgs[0]} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" alt={product.name} />
      <img src={product.imgs[1]} loading="lazy" className="second-img absolute inset-0 h-full w-full object-cover" alt="" />
      <div className="pointer-events-none absolute right-3 top-3 z-20 flex flex-col gap-1.5">
        {off > 0 && <span className="rounded-lg bg-red-600 px-2.5 py-1 text-[11px] font-black text-white shadow">٪{formatNumber(off)}</span>}
        {product.badge && <span className="rounded-lg bg-vaisa-black px-2.5 py-1 text-[11px] font-bold text-vaisa-gold">{product.badge}</span>}
        {product.isNew && <span className="rounded-lg bg-emerald-500 px-2.5 py-1 text-[11px] font-bold text-white">جدید ✦</span>}
      </div>
      <button type="button" onClick={() => toggleWishlist(product.id)} className={`absolute left-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full text-[16px] shadow transition hover:scale-110 ${favorite ? 'bg-red-500 text-white' : 'bg-white/90 text-black backdrop-blur'}`} aria-label={favorite ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}>{favorite ? '♥' : '♡'}</button>
      <div className="actions absolute bottom-3 right-3 left-3 z-30 flex gap-2">
        <button type="button" onClick={quickAdd} className="flex-1 rounded-xl bg-vaisa-black/90 py-2.5 text-[12px] font-bold text-white backdrop-blur transition hover:bg-vaisa-gold md:text-[13px]">＋ افزودن سریع</button>
      </div>
    </div>
    <div className={`p-3.5 md:p-4 ${dark ? 'text-white' : ''}`}>
      <div className={`mb-1 flex justify-between text-[11px] font-semibold ${dark ? 'text-white/40' : 'text-black/40'}`}><span>{product.catFa}</span><span className="flex items-center gap-1"><span className="text-vaisa-gold">{'★'.repeat(Math.round(product.rating))}</span><span className={dark ? 'text-white/40' : 'text-black/40'}>({formatNumber(product.reviews)})</span></span></div>
      <div className="line-clamp-1 text-[13px] font-black transition hover:text-vaisa-golddark md:text-[15px]">{product.name}</div>
      <div className={`mt-0.5 font-latin text-[10px] tracking-[.2em] ${dark ? 'text-white/30' : 'text-black/30'}`} dir="ltr">{product.en}</div>
      <div className="mt-2 flex flex-wrap items-center gap-1">{product.colors.map((color) => <span key={color.n} className="h-4 w-4 rounded-full border border-black/15 shadow-sm" style={{ background: color.c }} title={color.n} />)}<span className={`mr-1 text-[10px] sm:text-[11px] ${dark ? 'text-white/40' : 'text-black/40'}`}>{formatNumber(product.colors.length)} رنگ</span></div>
      <div className={`mt-2.5 flex flex-wrap items-end justify-between gap-2 border-t pt-2.5 ${dark ? 'border-white/10' : 'border-black/5'}`}>
        <div>{product.old > 0 && <div className={`text-[12px] line-through ${dark ? 'text-white/35' : 'text-black/35'}`}>{formatPrice(product.old)}</div>}<div className={`text-[15px] font-black md:text-[17px] ${product.old ? 'text-red-600' : ''}`}>{formatPrice(product.price)}</div></div>
        {product.stock < 15 ? <span className="rounded-lg bg-red-50 px-2 py-1 text-[11px] font-bold text-red-500">فقط {formatNumber(product.stock)} عدد!</span> : <span className="rounded-lg bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-600">✓ موجود</span>}
      </div>
    </div>
  </article>;
}
