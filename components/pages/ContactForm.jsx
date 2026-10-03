'use client';

import { useState } from 'react';
import { useStore } from '../../app/providers';

export default function ContactForm() {
  const { toast } = useStore();
  const [sent, setSent] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    setSent(true);
    toast('پیامت ثبت شد؛ تیم ویسا به‌زودی با تو تماس می‌گیرد 🤍');
    event.currentTarget.reset();
  };
  return <form onSubmit={submit} className="rounded-[24px] border border-black/5 bg-white p-6 shadow-sm md:p-8"><h2 className="mb-1 text-xl font-black">برای ما پیام بگذار</h2><p className="mb-6 text-[13px] text-black/50">معمولاً در همان روز کاری پاسخ می‌دهیم.</p><div className="grid gap-3 sm:grid-cols-2"><label className="text-[13px] font-bold">نام<input required name="name" className="mt-2 w-full rounded-xl bg-vaisa-cream px-4 py-3.5 font-normal outline-none focus:ring-2 focus:ring-vaisa-gold/40" placeholder="نام شما" /></label><label className="text-[13px] font-bold">شماره تماس<input required name="phone" type="tel" className="mt-2 w-full rounded-xl bg-vaisa-cream px-4 py-3.5 font-normal outline-none focus:ring-2 focus:ring-vaisa-gold/40" placeholder="۰۹۱۲..." /></label></div><label className="mt-4 block text-[13px] font-bold">موضوع<select name="subject" className="mt-2 w-full rounded-xl bg-vaisa-cream px-4 py-3.5 font-normal outline-none"><option>پیگیری سفارش</option><option>راهنمای انتخاب سایز</option><option>تعویض یا مرجوعی</option><option>سایر موارد</option></select></label><label className="mt-4 block text-[13px] font-bold">پیام<textarea required name="message" rows="5" className="mt-2 w-full resize-y rounded-xl bg-vaisa-cream px-4 py-3.5 font-normal outline-none focus:ring-2 focus:ring-vaisa-gold/40" placeholder="چطور می‌توانیم کمکتان کنیم؟" /></label><button className="mt-5 w-full rounded-2xl bg-vaisa-black py-4 font-black text-white transition hover:bg-vaisa-golddark">{sent ? 'ارسال پیام جدید' : 'ارسال پیام'} ←</button><p className="mt-3 text-center text-[11px] text-black/40">ارسال فرم در این پیش‌نمایش شبیه‌سازی شده است؛ برای دریافت واقعی پیام، بک‌اند باید متصل شود.</p></form>;
}
