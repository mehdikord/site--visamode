'use client';

import { useEffect, useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import { CATEGORY_LABELS, PRODUCTS, discountPercent, formatNumber } from '../lib/data';

export default function ProductsCatalog({ initialCategory = 'all', initialDiscountOnly = false, initialQuery = '' }) {
  const [category, setCategory] = useState(CATEGORY_LABELS.some((item) => item.id === initialCategory) ? initialCategory : 'all');
  const [sort, setSort] = useState('newest');
  const [query, setQuery] = useState(initialQuery);
  const [discountOnly, setDiscountOnly] = useState(initialDiscountOnly);

  useEffect(() => {
    setCategory(CATEGORY_LABELS.some((item) => item.id === initialCategory) ? initialCategory : 'all');
    setDiscountOnly(initialDiscountOnly);
    setQuery(initialQuery);
  }, [initialCategory, initialDiscountOnly, initialQuery]);

  const filtered = useMemo(() => {
    let results = PRODUCTS.filter((product) => category === 'all' || product.cat === category);
    if (discountOnly) results = results.filter((product) => product.old > 0);
    if (query.trim()) {
      const term = query.trim().toLocaleLowerCase('fa');
      results = results.filter((product) => `${product.name} ${product.en} ${product.catFa}`.toLocaleLowerCase('fa').includes(term));
    }
    if (sort === 'cheap') results.sort((a, b) => a.price - b.price);
    if (sort === 'exp') results.sort((a, b) => b.price - a.price);
    if (sort === 'pop') results.sort((a, b) => b.sold - a.sold);
    if (sort === 'off') results.sort((a, b) => discountPercent(b) - discountPercent(a));
    return results;
  }, [category, discountOnly, query, sort]);

  const reset = () => { setCategory('all'); setDiscountOnly(false); setQuery(''); setSort('newest'); };

  return <section id="shop" className="bg-white"><div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
    <div className="reveal mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><div className="mb-2 flex items-center gap-2 text-[13px] font-bold tracking-widest text-vaisa-golddark"><span className="h-px w-8 bg-vaisa-gold" /> THE BOUTIQUE</div><h2 className="text-3xl font-black md:text-[44px]">فروشگاه <span className="gold-text">ویسا مد</span></h2></div><div className="flex w-full flex-wrap items-center gap-3 md:w-auto"><div className="relative w-full max-w-[280px] sm:w-[220px]"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جستجو در فروشگاه..." className="w-full rounded-full border border-black/10 bg-vaisa-cream py-3 pl-5 pr-12 text-[14px] outline-none transition focus:border-vaisa-gold focus:bg-white" /><svg className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg></div><select value={sort} onChange={(event) => setSort(event.target.value)} className="w-full max-w-full cursor-pointer rounded-full border border-black/10 bg-vaisa-cream px-5 py-3 text-[14px] font-semibold outline-none sm:w-auto"><option value="newest">جدیدترین</option><option value="cheap">ارزان‌ترین</option><option value="exp">گران‌ترین</option><option value="pop">پرفروش‌ترین</option><option value="off">بیشترین تخفیف</option></select></div></div>
    <div className="no-scrollbar mb-8 flex items-center gap-2 overflow-x-auto pb-2">{CATEGORY_LABELS.map((item) => <button key={item.id} onClick={() => setCategory(item.id)} className={`shrink-0 rounded-full border px-6 py-2.5 text-[14px] font-bold transition hover:border-black ${category === item.id ? 'border-vaisa-black bg-vaisa-black text-white' : 'border-black/15'}`}>{item.id === 'all' ? 'همه ✨' : item.label}</button>)}<button onClick={() => setDiscountOnly((value) => !value)} className={`shrink-0 rounded-full border border-dashed border-red-400 px-6 py-2.5 text-[14px] font-bold text-red-600 transition ${discountOnly ? 'bg-red-600 text-white' : ''}`}>٪ فقط تخفیف‌دارها</button></div>
    <div className="mb-4 flex items-center justify-between"><div className="text-[13px] font-semibold text-black/50">{filtered.length ? `${formatNumber(filtered.length)} محصول یافت شد` : ''}</div>{(category !== 'all' || discountOnly || query) && <button onClick={reset} className="text-[12px] font-bold text-vaisa-golddark underline underline-offset-4">حذف فیلترها</button>}</div>
    {filtered.length ? <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="py-16 text-center"><div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-vaisa-cream text-3xl">◍</div><h3 className="mb-2 text-xl font-black">محصولی پیدا نشد</h3><p className="mb-5 text-sm text-black/50">فیلترها را تغییر بده یا عبارت دیگری جستجو کن</p><button onClick={reset} className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white">حذف فیلترها</button></div>}
  </div></section>;
}
