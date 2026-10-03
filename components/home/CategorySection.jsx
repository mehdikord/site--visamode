import Link from 'next/link';
import { CATS } from '../../lib/data';

export default function CategorySection() {
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
    <div className="reveal mb-8 flex items-end justify-between"><div><div className="mb-2 flex items-center gap-2 text-[13px] font-bold tracking-widest text-vaisa-golddark"><span className="h-px w-8 bg-vaisa-gold" /> SHOP BY CATEGORY</div><h2 className="text-3xl font-black md:text-[44px]">خرید بر اساس <span className="gold-text">دسته‌بندی</span></h2></div><Link href="/products" className="hidden items-center gap-2 border-b-2 border-black pb-1 text-[14px] font-bold transition hover:border-vaisa-gold hover:text-vaisa-golddark md:flex">مشاهده همه ←</Link></div>
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
      {CATS.map((category) => <Link key={category.k} href={category.k === 'all' ? '/products' : `/products?category=${category.k}`} className="group relative h-[190px] cursor-pointer overflow-hidden rounded-[22px] shadow-sm transition-all hover:-translate-y-1 hover:shadow-card md:h-[250px]">
        <img src={category.img} alt={category.n} className="absolute inset-0 h-full w-full object-cover transition duration-[1.2s] group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-0 right-0 left-0 p-4 text-white"><div className="font-latin text-[10px] tracking-[.25em] text-vaisa-gold">{category.e}</div><div className="text-[17px] font-black md:text-[19px]">{category.n}</div><div className="text-[12px] text-white/60">{category.c}</div></div>
        <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">←</span>
      </Link>)}
    </div>
  </section>;
}
