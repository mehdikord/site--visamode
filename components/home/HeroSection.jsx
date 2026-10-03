'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { U } from '../../lib/data';
import { useStore } from '../../app/providers';

function HeroCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext('2d');
    let frame = 0;
    let width = 0;
    let height = 0;
    let particles = [];
    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const scale = window.devicePixelRatio || 1;
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
      particles = Array.from({ length: 40 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 2.5 + .5, speed: Math.random() * .0008 + .0002, opacity: Math.random() * .5 + .15 }));
    };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.y -= particle.speed;
        if (particle.y < 0) particle.y = 1;
        context.beginPath();
        context.arc(particle.x * width, particle.y * height, particle.r, 0, Math.PI * 2);
        context.fillStyle = `rgba(201,169,106,${particle.opacity})`;
        context.fill();
      });
      frame = window.requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener('resize', resize);
    frame = window.requestAnimationFrame(draw);
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} id="heroCanvas" aria-hidden="true" />;
}

function Counter({ target }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let current = 0;
      const interval = window.setInterval(() => {
        current += Math.ceil(target / 40);
        if (current >= target) { current = target; window.clearInterval(interval); }
        setValue(current);
      }, 40);
      observer.disconnect();
    }, { threshold: .75 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{new Intl.NumberFormat('fa-IR').format(value)}</span>;
}

export default function HeroSection() {
  const { setVideoOpen } = useStore();
  const tiltRef = useRef(null);
  const zoneRef = useRef(null);

  useEffect(() => {
    const zone = zoneRef.current;
    const tilt = tiltRef.current;
    if (!zone || !tilt || window.innerWidth < 1024) return undefined;
    const move = (event) => {
      const rect = zone.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      tilt.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    };
    const reset = () => { tilt.style.transform = 'rotateY(0) rotateX(0)'; };
    zone.addEventListener('mousemove', move);
    zone.addEventListener('mouseleave', reset);
    return () => { zone.removeEventListener('mousemove', move); zone.removeEventListener('mouseleave', reset); };
  }, []);

  return <>
    <section className="relative overflow-hidden bg-vaisa-cream">
      <HeroCanvas />
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-vaisa-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-vaisa-rose/15 blur-[100px]" />
      <div className="relative z-[2] mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-8 md:px-6 md:pt-14 lg:grid-cols-2 lg:gap-6">
        <div className="order-2 text-center lg:order-1 lg:text-right">
          <div className="mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-black/10 bg-white py-1.5 pl-2 pr-2 shadow-sm sm:flex-nowrap sm:pl-4"><span className="flex shrink-0 items-center gap-1 rounded-full bg-vaisa-black px-3 py-1.5 text-[10px] font-bold text-white sm:text-[11px]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> NEW DROP</span><span className="max-w-full text-center text-[11px] font-semibold sm:text-[13px]">کالکشن پاییز و زمستان ۱۴۰۵ رسید ✦</span></div>
          <h1 className="mb-2 text-[42px] font-black leading-[1.05] md:text-[68px] lg:text-[76px]">برند تخصصی<br /><span className="gold-text">پوشاک بانوان</span></h1>
          <div className="mb-5 font-latin text-[13px] tracking-[.4em] text-black/40 md:text-[15px]">VAISA — AUTUMN / WINTER 2025</div>
          <p className="mx-auto mb-8 max-w-xl text-[15px] leading-8 text-black/60 md:text-[17px] lg:mx-0">ویسا مد فقط یک فروشگاه نیست؛ یک خانه‌ی مد زنانه است. ست‌های ترند، کت‌های ژورنالی، شلوارهای فیت خاص و مدل‌های فصل‌محور با جزئیات متمایز، پارچه درجه‌یک و واردات مستقیم.</p>
          <div className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link href="/#shop" className="btn-lux flex items-center gap-2 rounded-full border border-vaisa-black bg-vaisa-black px-8 py-4 text-[15px] font-bold text-white shadow-lux">مشاهده کالکشن <span>←</span></Link>
            <button onClick={() => setVideoOpen(true)} className="flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-7 py-4 text-[15px] font-bold transition hover:border-black"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-vaisa-black text-white"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span> ویدیو لوک‌بوک</button>
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-10 lg:justify-start">
            <div><div className="text-2xl font-black md:text-3xl">+<Counter target={320} /></div><div className="mt-1 text-[12px] text-black/50">مدل اختصاصی فصل</div></div><div className="h-12 w-px bg-black/10" />
            <div><div className="text-2xl font-black md:text-3xl">+<Counter target={48} />K</div><div className="mt-1 text-[12px] text-black/50">مشتری وفادار</div></div><div className="h-12 w-px bg-black/10" />
            <div><div className="flex items-center gap-1 text-2xl font-black md:text-3xl">۴.۹ <span className="text-xl text-vaisa-gold">★</span></div><div className="mt-1 text-[12px] text-black/50">رضایت خرید</div></div>
          </div>
        </div>
        <div className="order-1 relative flex justify-center lg:order-2" ref={zoneRef}>
          <div className="tilt relative w-full max-w-[520px]" ref={tiltRef}>
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              <div className="img-zoom relative col-span-12 h-[310px] overflow-hidden rounded-[28px] shadow-lux sm:h-[380px] md:col-span-7 md:h-[520px]"><img src={U('1539109136881-3be0616acf4b')} alt="استایل پاییز ویسا" className="h-full w-full object-cover" /><Link href="/products/vaisa-tailored-blazer" aria-label="مشاهده جزئیات و خرید کت ژورنالی ویسا" className="glass absolute bottom-4 right-4 left-4 flex items-center gap-3 rounded-2xl p-3"><img src={U('1583496661160-fb5886a13d44f')} className="h-14 w-12 rounded-xl object-cover" alt="کت ژورنالی ویسا" /><div className="flex-1"><div className="text-[12px] font-bold">کت ژورنالی ویسا</div><div className="text-[12px] text-black/50">۳٬۸۹۰٬۰۰۰ تومان</div></div><span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-vaisa-gold">←</span></Link></div>
              <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-5 md:flex md:flex-col md:gap-4">
                <div className="img-zoom relative h-[150px] overflow-hidden rounded-[24px] shadow-card sm:h-[185px] md:h-[252px]"><img src={U('1515886657613-9f3515b0c78f')} className="h-full w-full object-cover" alt="استایل ترند زنانه" /><span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold backdrop-blur">ترند ۲۰۲۵</span></div>
                <div className="relative flex h-[150px] flex-col justify-between overflow-hidden rounded-[24px] bg-vaisa-black p-2 text-white shadow-card sm:h-[185px] sm:p-5 md:h-[252px]"><img src={U('1509631179647-0177331693ae')} className="absolute inset-0 h-full w-full object-cover opacity-50" alt="پیشنهاد ویژه ویسا" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" /><div className="relative flex items-start justify-between"><span className="animate-pulse rounded-full bg-red-600 px-2 py-1 text-[9px] font-bold sm:px-3 sm:text-[11px]">٪ تا ۴۰ تخفیف</span><span className="spin-slow flex h-7 w-7 items-center justify-center rounded-full border border-white/30 sm:h-9 sm:w-9">✦</span></div><div className="relative"><div className="mb-1 text-[14px] font-black leading-5 sm:mb-2 sm:text-lg sm:leading-6">شگفت‌انگیز<br />زمان‌دار</div><Link href="/#amazing" className="text-[10px] font-bold text-vaisa-gold underline underline-offset-4 sm:text-[12px]">مشاهده پیشنهادها ←</Link></div></div>
              </div>
            </div>
            <div className="float-anim absolute -right-2 -top-4 z-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card md:-right-6"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">✓</span><div><div className="text-[12px] font-black">واردات مستقیم</div><div className="text-[11px] text-black/50">بدون واسطه از چین</div></div></div>
            <div className="float-anim2 absolute -bottom-5 -left-2 z-10 flex items-center gap-3 rounded-2xl bg-vaisa-black px-5 py-3 text-white shadow-lux md:-left-6"><div className="flex -space-x-3 space-x-reverse">{['1524504388940-b1c1722653e1','1496747611176-843222e1e57c','1485968579580-b6d095142e6e'].map((image) => <img key={image} src={U(image)} className="h-9 w-9 rounded-full border-2 border-vaisa-black object-cover" alt="مشتری ویسا" />)}</div><div><div className="text-[12px] font-bold">۱۲٬۴۰۰+ نظر پنج‌ستاره</div><div className="text-[12px] tracking-widest text-vaisa-gold">★★★★★</div></div></div>
          </div>
        </div>
      </div>
      <div className="relative z-[2] border-t border-black/8 bg-white/60 backdrop-blur"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-4 text-center md:grid-cols-4 md:px-6">{[['◈', 'ضمانت اصالت پارچه'], ['⟲', '۷ روز مرجوعی بی‌قیدوشرط'], ['✈', 'ارسال به سراسر کشور'], ['◉', 'پرداخت امن اینترنتی']].map(([icon, label]) => <div key={label} className="flex items-center justify-center gap-2 text-[13px] font-semibold"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-[16px] text-white">{icon}</span>{label}</div>)}</div></div>
    </section>
  </>;
}
