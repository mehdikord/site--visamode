'use client';

import { useEffect, useRef, useState } from 'react';
import { TESTIS } from '../../lib/data';

export default function TestimonialsSection() {
  const track = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollToCard = (cardIndex) => {
    const card = track.current?.children[cardIndex];
    if (!card || !track.current) return;
    const trackRect = track.current.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const delta = cardRect.left - trackRect.left;
    track.current.scrollBy({ left: delta, behavior: 'smooth' });
  };

  const go = (next) => {
    const safe = (next + TESTIS.length) % TESTIS.length;
    setIndex(safe);
    scrollToCard(safe);
  };

  useEffect(() => {
    const node = track.current;
    if (!node) return undefined;
    let scrollFrame = 0;
    const updateIndex = () => {
      window.cancelAnimationFrame(scrollFrame);
      scrollFrame = window.requestAnimationFrame(() => {
        const trackRect = node.getBoundingClientRect();
        const center = (trackRect.left + trackRect.right) / 2;
        let nearest = 0;
        let distance = Number.POSITIVE_INFINITY;
        Array.from(node.children).forEach((card, cardIndex) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = (rect.left + rect.right) / 2;
          const nextDistance = Math.abs(cardCenter - center);
          if (nextDistance < distance) { nearest = cardIndex; distance = nextDistance; }
        });
        setIndex((current) => current === nearest ? current : nearest);
      });
    };
    node.addEventListener('scroll', updateIndex, { passive: true });
    const interval = window.setInterval(() => setIndex((current) => {
      const next = (current + 1) % TESTIS.length;
      const card = node.children[next];
      if (next === 0) node.scrollTo({ left: 0, behavior: 'smooth' });
      else if (card) node.scrollBy({ left: -(card.getBoundingClientRect().width + 16), behavior: 'smooth' });
      return next;
    }), 5000);
    return () => {
      window.clearInterval(interval);
      window.cancelAnimationFrame(scrollFrame);
      node.removeEventListener('scroll', updateIndex);
    };
  }, []);

  return <section className="overflow-hidden border-y border-black/5 bg-vaisa-beige/50 py-14 md:py-20">
    <div className="mx-auto max-w-7xl px-4 md:px-6"><div className="reveal mb-10 text-center"><div className="mb-3 font-latin text-[12px] tracking-[.3em] text-vaisa-golddark">LOVE NOTES</div><h2 className="text-3xl font-black md:text-[44px]">حرف‌های <span className="gold-text">مشتری‌های ویسا</span></h2></div>
      <div className="reveal"><div ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1">{TESTIS.map((review) => <article key={review.n} className="w-[88%] shrink-0 snap-start rounded-[24px] border border-black/5 bg-white p-5 shadow-sm sm:w-[420px] sm:p-6"><div className="mb-3 tracking-[.2em] text-vaisa-gold">★★★★★</div><p className="mb-5 text-[14px] leading-8 text-black/70">«{review.t}»</p><div className="flex items-center gap-3 border-t border-black/5 pt-4"><img src={review.img} className="h-12 w-12 shrink-0 rounded-full border-2 border-vaisa-gold/40 object-cover" alt={review.n} /><div className="min-w-0"><div className="text-[14px] font-black">{review.n}</div><div className="text-[12px] text-black/45">{review.c}</div></div><span className="mr-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-600" title="خرید تاییدشده">✓</span></div></article>)}</div><div className="mt-7 flex justify-center gap-2">{TESTIS.map((review, dotIndex) => <button key={review.n} onClick={() => go(dotIndex)} aria-label={`نظر ${dotIndex + 1}`} aria-current={index === dotIndex ? 'true' : undefined} className={`h-2 rounded-full transition-all ${index === dotIndex ? 'w-8 bg-vaisa-black' : 'w-2 bg-black/15'}`} />)}</div></div>
    </div>
  </section>;
}
