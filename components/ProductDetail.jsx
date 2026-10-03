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
      <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="grid min-w-0 gap-3 lg:grid-cols-[90px_minmax(0,1fr)] lg:gap-4">
          <div className="order-2 flex max-w-full gap-2 overflow-x-auto pb-1 lg:order-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {product.imgs.map((image, index) => <button key={image + index} onClick={() => setImageIndex(index)} aria-label={`نمایش تصویر ${index + 1} از ${product.name}`} className={`w-16 shrink-0 overflow-hidden rounded-xl border-[3px] transition lg:w-full ${imageIndex === index ? 'border-vaisa-gold' : 'border-transparent opacity-70 hover:opacity-100'}`}><img src={image} alt="" className="aspect-[3/4] w-full object-cover" /></button>)}
          </div>
          <div className="img-zoom order-1 relative aspect-[3/4] min-w-0 overflow-hidden rounded-[24px] bg-vaisa-cream lg:order-2 lg:aspect-auto lg:min-h-[640px]"><img src={product.imgs[imageIndex]} alt={product.name} className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105" />{discount > 0 && <span className="absolute right-3 top-3 rounded-xl bg-red-600 px-2.5 py-1.5 text-[12px] font-black text-white sm:right-4 sm:top-4 sm:px-3 sm:text-[13px]">٪{formatNumber(discount)} تخفیف</span>}<button onClick={() => setVideoOpen(true)} className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-2.5 text-[11px] font-bold text-white backdrop-blur transition hover:bg-vaisa-gold sm:bottom-4 sm:right-4 sm:px-4 sm:text-[12px]">▶ ویدیو تن‌خور</button></div>
        </div>
        <div className="min-w-0 lg:sticky lg:top-32 lg:self-start">
          <div className="mb-2 flex min-w-0 flex-wrap items-center gap-2 text-[12px] font-bold text-vaisa-golddark"><Link href={`/products?category=${product.cat}`} className="shrink-0">{product.catFa}</Link><span>•</span><span dir="ltr" className="font-latin break-all">{product.en}</span></div>
          <h1 className="text-2xl font-black leading-10 sm:text-3xl md:text-[34px]">{product.name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px]"><span className="text-vaisa-gold">★★★★★</span><b>{formatNumber(product.rating)}</b><span className="text-black/40">({formatNumber(product.reviews)} نظر) • {formatNumber(product.sold)} فروش</span></div>
          <div className="mt-5 flex flex-wrap items-end gap-2 border-b border-black/10 pb-5 sm:gap-3">{product.old > 0 && <span className="text-[14px] text-black/35 line-through sm:text-[16px]">{formatPrice(product.old)}</span>}<span className={`text-2xl font-black sm:text-[28px] md:text-[32px] ${product.old ? 'text-red-600' : ''}`}>{formatPrice(product.price)}</span>{product.old > 0 && <span className="rounded-lg bg-red-50 px-2 py-1 text-[11px] font-bold text-red-600 sm:text-[12px]">صرفه‌جویی {formatPrice(product.old - product.price)}</span>}</div>
          <div className="mt-5"><div className="mb-3 text-[14px] font-black">رنگ‌بندی: <span className="text-vaisa-golddark">{product.colors[colorIndex].n}</span></div><div className="flex flex-wrap gap-3">{product.colors.map((color, index) => <button key={color.n} onClick={() => setColorIndex(index)} title={color.n} aria-label={`انتخاب رنگ ${color.n}`} className={`h-10 w-10 shrink-0 rounded-full border border-black/15 shadow ${colorIndex === index ? 'outline outline-2 outline-offset-2 outline-black' : ''}`} style={{ background: color.c }} />)}</div></div>
          <div className="mt-5"><div className="mb-3 flex flex-wrap items-center justify-between gap-2"><span className="text-[14px] font-black">انتخاب سایز</span><Link href="/size-guide" className="text-[12px] font-bold text-vaisa-golddark underline underline-offset-4">📏 راهنمای سایز</Link></div><div className="flex flex-wrap gap-2">{product.sizes.map((item) => <button key={item} onClick={() => setSize(item)} className={`min-w-12 rounded-xl border px-4 py-2.5 text-[14px] font-bold transition sm:px-5 ${size === item ? 'border-vaisa-black bg-vaisa-black text-white' : 'border-black/15 hover:border-black'}`}>{item}</button>)}</div><div className="mt-2 text-[12px] leading-6 text-black/50">💡 {product.fit}</div></div>
          <div className="mt-5 grid grid-cols-[1fr_auto] gap-3 sm:flex sm:items-center">
            <div className="flex w-fit items-center gap-2 rounded-2xl border border-black/10 bg-white px-2"><button onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="کم کردن تعداد" className="h-12 w-9 text-lg font-black">−</button><span className="w-6 text-center font-black">{formatNumber(quantity)}</span><button onClick={() => setQuantity((value) => Math.min(5, value + 1))} aria-label="زیاد کردن تعداد" className="h-12 w-9 text-lg font-black">＋</button></div>
            <button onClick={() => toggleWishlist(product.id)} className={`row-start-1 col-start-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-xl sm:order-3 sm:h-14 sm:w-14 ${favorite ? 'border-red-200 bg-red-50 text-red-500' : 'border-black/15'}`} aria-label={favorite ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}>{favorite ? '♥' : '♡'}</button>
            <button onClick={add} className="col-span-2 min-h-12 w-full min-w-0 rounded-2xl bg-vaisa-black px-4 py-3 text-[14px] font-black leading-5 text-white transition hover:bg-vaisa-golddark sm:order-2 sm:min-h-14 sm:w-auto sm:flex-1 sm:text-[15px]">افزودن به سبد 🛍</button>
          </div>
          <div className={`mt-3 rounded-xl px-4 py-3 text-[13px] font-bold leading-6 ${product.stock < 15 ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>{product.stock < 15 ? `⚡ فقط ${formatNumber(product.stock)} عدد باقی مانده` : '✓ موجود در انبار — ارسال ۲۴ تا ۷۲ ساعته'}</div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[10px] font-bold leading-5 text-black/60 sm:text-[11px]"><div className="rounded-xl border border-black/5 bg-white px-1 py-3">⟲<br />۷ روز مرجوعی</div><div className="rounded-xl border border-black/5 bg-white px-1 py-3">✈<br />ارسال سراسری</div><div className="rounded-xl border border-black/5 bg-white px-1 py-3">◈<br />ضمانت اصالت</div></div>
          <div className="mt-6 space-y-3"><details open className="rounded-2xl border border-black/5 bg-white p-4"><summary className="cursor-pointer text-[14px] font-black">توضیحات و مشخصات پارچه</summary><p className="mt-3 text-[13px] leading-7 text-black/60">{product.fabric}</p></details><details className="rounded-2xl border border-black/5 bg-white p-4"><summary className="cursor-pointer text-[14px] font-black">راهنمای نگهداری</summary><p className="mt-3 text-[13px] leading-7 text-black/60">شستشو با آب سرد و شوینده ملایم؛ برای حفظ فرم لباس، از خشک‌کن استفاده نکنید. اتو با حرارت کم و از پشت پارچه توصیه می‌شود.</p></details></div>
        </div>
      </div>
    </section>
  </>;
}
