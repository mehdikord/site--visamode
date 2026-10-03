'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { OCCS } from '../../lib/data';

export default function OccasionSection({ showHeading = true }) {
  const rowRef = useRef(null);
  const scroll = (direction) => rowRef.current?.scrollBy({ left: direction * -300, behavior: 'smooth' });
  return <section id="occasions" className="relative overflow-hidden bg-[#111113] py-14 text-white md:py-20">
    <div className="outline-white pointer-events-none absolute right-0 top-4 w-full select-none whitespace-nowrap text-center font-latin text-[18vw] font-bold opacity-20 md:text-[10vw]" dir="ltr">OCCASION</div>
    <div className="relative mx-auto max-w-7xl px-4 md:px-6">
      {showHeading ? <div className="reveal mb-8 flex items-end justify-between"><div><div className="mb-2 text-[13px] font-bold tracking-widest text-vaisa-gold">SHOP BY OCCASION</div><h2 className="text-3xl font-black md:text-[44px]">استایلِ <span className="gold-text">هر موقعیت</span></h2></div><div className="hidden gap-2 md:flex"><button onClick={() => scroll(-1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:border-vaisa-gold hover:bg-vaisa-gold">→</button><button onClick={() => scroll(1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:border-vaisa-gold hover:bg-vaisa-gold">←</button></div></div> : <div className="mb-8 hidden justify-end gap-2 md:flex"><button onClick={() => scroll(-1)} aria-label="مناسبت‌های قبلی" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:border-vaisa-gold hover:bg-vaisa-gold">→</button><button onClick={() => scroll(1)} aria-label="مناسبت‌های بعدی" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:border-vaisa-gold hover:bg-vaisa-gold">←</button></div>}
      <div ref={rowRef} className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2">{OCCS.map((item) => <Link key={item.t} href={`/products?category=${item.cat}`} className="group relative h-[360px] w-[240px] shrink-0 snap-start cursor-pointer overflow-hidden rounded-[24px] border border-white/10 md:h-[420px] md:w-[280px]">
        <img src={item.img} alt={item.t} className="absolute inset-0 h-full w-full object-cover transition duration-[1.3s] group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" /><div className="absolute bottom-0 w-full p-5 text-white"><div className="mb-1 text-[12px] font-bold text-vaisa-gold">{item.n}</div><div className="mb-1 text-xl font-black">{item.t}</div><div className="mb-3 text-[13px] text-white/60">{item.d}</div><div className="flex items-center gap-2 text-[13px] font-bold">مشاهده استایل <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-vaisa-gold group-hover:text-white">←</span></div></div>
      </Link>)}</div>
    </div>
  </section>;
}
