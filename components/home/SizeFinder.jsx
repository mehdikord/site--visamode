'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { formatNumber } from '../../lib/data';

function recommendSize({ bust, waist, hip }) {
  if (bust <= 84 && waist <= 66 && hip <= 90) return ['XS', 'قالب جذب • سایز XS دقیقاً اندازه توئه ✨'];
  if (bust <= 88 && waist <= 70 && hip <= 94) return ['S', 'فیت جذب استاندارد • انتخاب اکثر مشتری‌ها 🤍'];
  if (bust <= 93 && waist <= 75 && hip <= 99) return ['M', 'فیت استاندارد • برای استایل اورسایز L بگیر'];
  if (bust <= 99 && waist <= 81 && hip <= 105) return ['L', 'فیت آزاد راحت • قالب ویسا دقیق و استاندارده'];
  return ['XL', 'فیت اورسایز راحت • پارچه‌ها کشسانی کافی دارن ✨'];
}

export default function SizeFinder() {
  const [measurements, setMeasurements] = useState({ bust: 92, waist: 74, hip: 96 });
  const [size, description] = useMemo(() => recommendSize(measurements), [measurements]);
  const fields = [
    ['bust', 'دور سینه (سانتی‌متر)', 78, 120],
    ['waist', 'دور کمر (سانتی‌متر)', 60, 110],
    ['hip', 'دور باسن (سانتی‌متر)', 82, 128],
  ];
  return <div className="reveal relative mt-16 overflow-hidden rounded-[28px] bg-vaisa-black p-7 text-white md:mt-24 md:p-10">
    <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-vaisa-gold/20 blur-[80px]" />
    <div className="relative grid items-center gap-8 lg:grid-cols-2">
      <div><div className="mb-3 font-latin text-[12px] tracking-[.3em] text-vaisa-gold">SMART SIZE FINDER</div><h3 className="mb-3 text-2xl font-black md:text-4xl">ماشین‌حساب هوشمند سایز 🤍</h3><p className="mb-6 text-[14px] leading-7 text-white/60">اندازه‌هایت را با متر وارد کن تا دقیق‌ترین سایز ویسا را بهت پیشنهاد بدهیم. دیگر نگران تنگ یا گشاد بودن نباش.</p>
        <div className="space-y-4">{fields.map(([key, label, min, max]) => <label key={key} className="block"><span className="mb-2 flex justify-between text-[13px] font-bold"><span>{label}</span><span className="font-latin text-vaisa-gold">{formatNumber(measurements[key])}</span></span><input type="range" min={min} max={max} value={measurements[key]} onChange={(event) => setMeasurements((current) => ({ ...current, [key]: Number(event.target.value) }))} className="w-full" /></label>)}</div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/[.06] p-7 text-center backdrop-blur"><div className="mb-2 text-[13px] text-white/50">سایز پیشنهادی شما</div><div className="gold-text font-latin text-[84px] font-bold leading-none">{size}</div><div className="mt-2 text-[14px] leading-7 text-white/70">{description}</div><div className="mt-6 grid grid-cols-5 gap-2">{['XS', 'S', 'M', 'L', 'XL'].map((item) => <div key={item} className={`rounded-xl border py-2.5 text-[13px] font-bold transition-all ${item === size ? 'scale-110 border-vaisa-gold bg-vaisa-gold text-white shadow-gold' : 'border-white/15 text-white/40'}`}>{item}</div>)}</div><Link href="/size-guide" className="mt-6 inline-block text-[13px] font-bold text-vaisa-gold underline underline-offset-4">مشاهده جدول کامل سایزبندی ←</Link></div>
    </div>
  </div>;
}
