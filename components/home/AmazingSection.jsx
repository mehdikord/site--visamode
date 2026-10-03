import Link from 'next/link';
import { PRODUCTS } from '../../lib/data';
import ProductCard from '../ProductCard';
import Countdown from './Countdown';

export default function AmazingSection() {
  const products = PRODUCTS.filter((product) => product.old).slice(0, 6);
  return <section id="amazing" className="relative overflow-hidden bg-vaisa-black text-white">
    <div className="absolute inset-0 opacity-[.12]"><img src="/images/photo-1469334031218-e382a71b716b.jpg" className="h-full w-full object-cover" alt="" /></div>
    <div className="absolute inset-0 bg-gradient-to-l from-vaisa-black via-vaisa-black/95 to-vaisa-black/70" />
    <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[340px_1fr]">
        <div className="reveal lg:sticky lg:top-28">
          <div className="shimmer mb-5 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-[13px] font-bold"><span className="animate-pulse">●</span> فروش شگفت‌انگیز • زمان‌دار</div>
          <h2 className="mb-3 text-4xl font-black leading-tight md:text-5xl">تخفیف‌های<br /><span className="gold-text">جنون پاییزه</span></h2>
          <p className="mb-6 text-[14px] leading-7 text-white/60">فقط تا پایان تایمر! موجودی محدود، قیمت‌ها تکرار نمی‌شوند. عجله کن، استایل منتظر نمی‌ماند.</p>
          <Countdown />
          <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4"><div className="mb-2 flex justify-between text-[12px]"><span className="text-white/60">٪۷۸ از ظرفیت فروش پر شده</span><span className="font-bold text-vaisa-gold">ظرفیت محدود!</span></div><div className="h-2.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[78%] rounded-full bg-gradient-to-l from-vaisa-gold to-red-500" /></div></div>
          <Link href="/products?discount=true" className="block rounded-2xl bg-white py-4 text-center font-black text-black transition hover:bg-vaisa-gold hover:text-white">مشاهده همه شگفت‌انگیزها ←</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{products.map((product) => <div key={product.id} className="reveal"><ProductCard product={product} dark /><div className="mt-2 px-1"><div className="mb-1 flex justify-between text-[11px] text-white/50"><span>فروخته‌شده: {new Intl.NumberFormat('fa-IR').format(product.sold)}</span><span className="font-bold text-vaisa-gold">٪{new Intl.NumberFormat('fa-IR').format(Math.round(product.sold / (product.sold + product.stock) * 100))} ظرفیت</span></div><div className="h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-l from-vaisa-gold to-red-500" style={{ width: `${Math.round(product.sold / (product.sold + product.stock) * 100)}%` }} /></div></div></div>)}</div>
      </div>
    </div>
  </section>;
}
