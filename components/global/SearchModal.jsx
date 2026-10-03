'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { PRODUCTS, formatPrice } from '../../lib/data';
import { useStore } from '../../app/providers';

export default function SearchModal() {
  const { searchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('fa');
    if (!normalized) return PRODUCTS.slice(0, 3);
    return PRODUCTS.filter((product) => `${product.name} ${product.en} ${product.catFa}`.toLocaleLowerCase('fa').includes(normalized));
  }, [query]);
  if (!searchOpen) return null;

  const quickTerms = ['کت تک', 'ست زنانه', 'شلوار بگ', 'مانتو'];

  return (
    <div className="fixed inset-0 z-[85] overflow-y-auto" role="dialog" aria-modal="true" aria-label="جستجوی محصولات">
      <button className="absolute inset-0 h-full w-full bg-vaisa-black/90 backdrop-blur-xl" onClick={() => setSearchOpen(false)} aria-label="بستن جستجو" />
      <div className="relative mx-auto max-w-3xl px-6 pb-12 pt-24 md:pt-32">
        <button onClick={() => setSearchOpen(false)} className="absolute left-6 top-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black" aria-label="بستن">✕</button>
        <div className="mb-3 text-center font-latin text-sm tracking-[.3em] text-vaisa-gold">SEARCH</div>
        <h2 className="mb-8 text-center text-2xl font-black text-white md:text-4xl">دنبال چه استایلی هستی؟</h2>
        <div className="relative">
          <input value={query} onChange={(event) => setQuery(event.target.value)} autoFocus placeholder="جستجوی کت، ست، شلوار، مانتو..." className="w-full rounded-2xl border border-white/20 bg-white/10 py-5 pl-6 pr-14 text-[16px] text-white outline-none transition placeholder:text-white/40 focus:border-vaisa-gold focus:bg-white/15" />
          <svg className="absolute right-5 top-1/2 -translate-y-1/2 text-vaisa-gold" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {quickTerms.map((term) => <button key={term} onClick={() => setQuery(term)} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-vaisa-gold hover:bg-vaisa-gold hover:text-white">{term}</button>)}
        </div>
        <div className="mt-6 grid max-h-[38vh] grid-cols-2 gap-3 overflow-y-auto pb-6 md:grid-cols-3">
          {results.map((product) => (
            <div key={product.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/10 transition hover:border-vaisa-gold">
              <Link href={`/products/${product.slug}`} onClick={() => setSearchOpen(false)} className="block w-full text-right" aria-label={`مشاهده جزئیات ${product.name}`}>
                <img src={product.imgs[0]} alt={product.name} className="h-[130px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[150px]" />
                <div className="p-3"><div className="line-clamp-1 text-[13px] font-bold text-white">{product.name}</div><div className="mt-1 text-[13px] font-black text-vaisa-gold">{formatPrice(product.price)}</div></div>
              </Link>
            </div>
          ))}
          {query.trim() && results.length === 0 && <div className="col-span-full py-8 text-center text-white/50">چیزی پیدا نشد — «{query}» رو نداریم 😢</div>}
        </div>
        <Link href={`/search?q=${encodeURIComponent(query)}`} onClick={() => setSearchOpen(false)} className="mx-auto mt-4 block w-fit text-center text-[13px] font-bold text-vaisa-gold underline underline-offset-4">مشاهده همه نتایج جستجو ←</Link>
      </div>
    </div>
  );
}
