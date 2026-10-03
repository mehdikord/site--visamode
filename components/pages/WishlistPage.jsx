'use client';

import Link from 'next/link';
import { useStore } from '../../app/providers';
import { PRODUCTS } from '../../lib/data';
import ProductCard from '../ProductCard';

export default function WishlistPage() {
  const { wishlist, ready } = useStore();
  const saved = PRODUCTS.filter((product) => wishlist.includes(product.id));
  if (!ready) return <div className="mx-auto max-w-7xl px-4 py-16 md:px-6"><div className="h-64 animate-pulse rounded-[24px] bg-vaisa-cream" /></div>;
  return <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">{saved.length ? <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">{saved.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="rounded-[28px] border border-black/5 bg-white px-6 py-16 text-center shadow-sm"><div className="mb-3 text-5xl text-vaisa-golddark">♡</div><h2 className="mb-2 text-2xl font-black">هنوز محصولی ذخیره نکرده‌ای</h2><p className="mb-6 text-[14px] text-black/50">روی قلب محصولات بزن تا بعداً راحت‌تر پیدایشان کنی.</p><Link href="/products" className="inline-flex rounded-full bg-vaisa-black px-7 py-3.5 font-bold text-white">مشاهده محصولات ←</Link></div>}</section>;
}
