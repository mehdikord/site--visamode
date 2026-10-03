'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useStore } from '../app/providers';
import { discountPercent, formatNumber, formatPrice } from '../lib/data';
import { Breadcrumbs } from './pages/PageIntro';

export default function ProductDetail({ product }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleWishlist, wishlist, toast, setVideoOpen } = useStore();
  const discount = discountPercent(product);
  const favorite = wishlist.includes(product.id);

  const add = () => {
    if (!size) return toast('لطفاً سایز موردنظرت را انتخاب کن 📏');
    addToCart(product.id, size, product.colors[colorIndex].n, quantity);
  };

  return <>
    <div className="mx-auto max-w-7xl px-4 pt-6 md:px-6"><Breadcrumbs items={[{ label: 'خانه', href: '/' }, { label: 'فروشگاه', href: '/products' }, { label: product.catFa, href: `/products?category=${product.cat}` }, { label: product.name }]} /></div>
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="grid grid-cols-[72px_1fr] gap-3 md:grid-cols-[90px_1fr] md:gap-4">
          <div className="flex flex-col gap-3">{product.imgs.map((image, index) => <button key={image + index} onClick={() => setImageIndex(index)} className={`overflow-hidden rounded-xl border-[3px] transition ${imageIndex === index ? 'border-vaisa-gold' : 'border-transparent opacity-70 hover:opacity-100'}`}><img src={image} alt={`${product.name} ${index + 1}`} className="aspect-[3/4] w-full object-cover" /></button>)}</div>
          <div className="img-zoom relative min-h-[420px] overflow-hidden rounded-[24px] bg-vaisa-cream md:min-h-[640px]"><img src={product.imgs[imageIndex]} alt={product.name} className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105" />{discount > 0 && <span className="absolute right-4 top-4 rounded-xl bg-red-600 px-3 py-1.5 text-[13px] font-black text-white">٪{formatNumber(discount)} تخفیف</span>}<button onClick={() => setVideoOpen(true)} className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2.5 text-[12px] font-bold text-white backdrop-blur transition hover:bg-vaisa-gold">▶ ویدیو تن‌خور</button></div>
        </div>
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="mb-2 flex items-center gap-2 text-[12px] font-bold text-vaisa-golddark"><Link href={`/products?category=${product.cat}`}>{product.catFa}</Link><span>•</span><span dir="ltr" className="font-latin">{product.en}</span></div>
          <h1 className="text-2xl font-black leading-10 md:text-[34px]">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2 text-[13px]"><span className="text-vaisa-gold">★★★★★</span><b>{formatNumber(product.rating)}</b><span className="text-black/40">({formatNumber(product.reviews)} نظر) • {formatNumber(product.sold)} فروش</span></div>
          <div className="mt-5 flex flex-wrap items-end gap-3 border-b border-black/10 pb-5">{product.old > 0 && <span className="text-[16px] text-black/35 line-through">{formatPrice(product.old)}</span>}<span className={`text-[28px] font-black md:text-[32px] ${product.old ? 'text-red-600' : ''}`}>{formatPrice(product.price)}</span>{product.old > 0 && <span className="rounded-lg bg-red-50 px-2 py-1 text-[12px] font-bold text-red-600">صرفه‌جویی {formatPrice(product.old - product.price)}</span>}</div>
          <div className="mt-5"><div className="mb-3 text-[14px] font-black">رنگ‌بندی: <span className="text-vaisa-golddark">{product.colors[colorIndex].n}</span></div><div className="flex gap-3">{product.colors.map((color, index) => <button key={color.n} onClick={() => setColorIndex(index)} title={color.n} className={`h-10 w-10 rounded-full border border-black/15 shadow ${colorIndex === index ? 'outline outline-2 outline-offset-2 outline-black' : ''}`} style={{ background: color.c }} />)}</div></div>
          <div className="mt-5"><div className="mb-3 flex items-center justify-between"><span className="text-[14px] font-black">انتخاب سایز</span><Link href="/size-guide" className="text-[12px] font-bold text-vaisa-golddark underline underline-offset-4">📏 راهنمای سایز</Link></div><div className="flex flex-wrap gap-2">{product.sizes.map((item) => <button key={item} onClick={() => setSize(item)} className={`rounded-xl border px-5 py-2.5 text-[14px] font-bold transition ${size === item ? 'border-vaisa-black bg-vaisa-black text-white' : 'border-black/15 hover:border-black'}`}>{item}</button>)}</div><div className="mt-2 text-[12px] text-black/50">💡 {product.fit}</div></div>
          <div className="mt-5 flex gap-3"><div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-2"><button onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="h-12 w-9 text-lg font-black">−</button><span className="w-6 text-center font-black">{formatNumber(quantity)}</span><button onClick={() => setQuantity((value) => Math.min(5, value + 1))} className="h-12 w-9 text-lg font-black">＋</button></div><button onClick={add} className="flex-1 rounded-2xl bg-vaisa-black text-[15px] font-black text-white transition hover:bg-vaisa-golddark">افزودن به سبد 🛍</button><button onClick={() => toggleWishlist(product.id)} className={`w-14 rounded-2xl border text-xl ${favorite ? 'border-red-200 bg-red-50 text-red-500' : 'border-black/15'}`} aria-label="افزودن به علاقه‌مندی‌ها">{favorite ? '♥' : '♡'}</button></div>
          <div className={`mt-3 rounded-xl px-4 py-3 text-[13px] font-bold ${product.stock < 15 ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>{product.stock < 15 ? `⚡ فقط ${formatNumber(product.stock)} عدد باقی مانده` : '✓ موجود در انبار — ارسال ۲۴ تا ۷۲ ساعته'}</div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-black/60"><div className="rounded-xl border border-black/5 bg-white py-3">⟲<br />۷ روز مرجوعی</div><div className="rounded-xl border border-black/5 bg-white py-3">✈<br />ارسال سراسری</div><div className="rounded-xl border border-black/5 bg-white py-3">◈<br />ضمانت اصالت</div></div>
          <div className="mt-6 space-y-3"><details open className="rounded-2xl border border-black/5 bg-white p-4"><summary className="cursor-pointer text-[14px] font-black">توضیحات و مشخصات پارچه</summary><p className="mt-3 text-[13px] leading-7 text-black/60">{product.fabric}</p></details><details className="rounded-2xl border border-black/5 bg-white p-4"><summary className="cursor-pointer text-[14px] font-black">راهنمای نگهداری</summary><p className="mt-3 text-[13px] leading-7 text-black/60">شستشو با آب سرد و شوینده ملایم؛ برای حفظ فرم لباس، از خشک‌کن استفاده نکنید. اتو با حرارت کم و از پشت پارچه توصیه می‌شود.</p></details></div>
        </div>
      </div>
    </section>
  </>;
}
