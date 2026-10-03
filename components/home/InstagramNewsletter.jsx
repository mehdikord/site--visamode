'use client';

import { useState } from 'react';
import { U } from '../../lib/data';
import { useStore } from '../../app/providers';

const instagram = [
  ['1529139574466-a303027c1d8b', '۲٫۴k'], ['1485968579580-b6d095142e6e', '۳٫۱k'], ['1496747611176-843222e1e57c', '۱٫۸k'],
  ['1583496661160-fb5886a13d44f', '۴٫۲k'], ['1469334031218-e382a71b716b', '۲٫۹k'], ['1509631179647-0177331693ae', '۵٫۶k'],
];

export default function InstagramNewsletter() {
  const [value, setValue] = useState('');
  const { toast } = useStore();
  const submit = (event) => {
    event.preventDefault();
    if (value.trim().length < 5) return toast('لطفاً شماره یا ایمیل معتبر وارد کن');
    setValue('');
    toast('🎉 کد VAISA10 برایت پیامک شد! (۱۰٪ تخفیف)');
  };
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20"><div className="grid items-stretch gap-8 lg:grid-cols-2">
    <div className="reveal"><div className="mb-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between"><h2 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xl font-black sm:text-2xl"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-lg text-white">◉</span> اینستاگرام ویسا <span dir="ltr" className="font-latin text-[11px] text-black/40 sm:text-[13px]">@vaisa.mode</span></h2><button onClick={() => toast('به‌زودی به اینستاگرام ویسا وصل می‌شوی 🤍')} className="rounded-full border border-vaisa-gold/40 px-4 py-2 text-[13px] font-bold text-vaisa-golddark transition hover:bg-vaisa-gold hover:text-white">+ فالو کن</button></div>
      <div className="grid grid-cols-3 gap-2.5">{instagram.map(([image, likes]) => <div key={image} className="img-zoom group relative h-[150px] overflow-hidden rounded-2xl md:h-[180px]"><img src={U(image)} className="h-full w-full object-cover" alt="استایل ویسا در اینستاگرام" /><span className="absolute inset-0 flex items-center justify-center bg-black/40 text-[13px] font-bold text-white opacity-0 transition group-hover:opacity-100">♥ {likes}</span></div>)}</div>
    </div>
    <div className="reveal relative flex flex-col justify-center overflow-hidden rounded-[28px] bg-vaisa-black p-8 text-white md:p-10"><div className="absolute -bottom-16 -right-16 h-[260px] w-[260px] rounded-full bg-vaisa-gold/25 blur-[70px]" /><div className="relative"><div className="mb-3 font-latin text-[12px] tracking-[.3em] text-vaisa-gold">VAISA CLUB — ٪۱۰ OFF</div><h2 className="mb-3 text-3xl font-black leading-tight md:text-4xl">عضو باشگاه ویسا شو،<br /><span className="gold-text">۱۰٪ تخفیف بگیر</span></h2><p className="mb-6 text-[14px] leading-7 text-white/60">اولین نفری باش که از دراپ‌های جدید، فروش‌های خصوصی و کدهای تخفیف مناسبتی باخبر می‌شود.</p><form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row"><input value={value} onChange={(event) => setValue(event.target.value)} type="text" placeholder="شماره موبایل یا ایمیل..." className="min-w-0 flex-1 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-[14px] outline-none placeholder:text-white/35 focus:border-vaisa-gold" /><button className="shrink-0 rounded-2xl bg-vaisa-gold px-8 py-4 text-[14px] font-black shadow-gold transition hover:bg-white hover:text-black">دریافت کد تخفیف</button></form><div className="mt-6 flex flex-wrap items-center gap-5 text-[12px] text-white/50"><span>✓ بدون اسپم</span><span>✓ لغو هر زمان</span><span>✓ ۲۴٬۰۰۰+ عضو</span></div></div></div>
  </div></section>;
}
