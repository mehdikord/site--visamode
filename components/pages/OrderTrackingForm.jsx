'use client';

import { useState } from 'react';

export default function OrderTrackingForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return <section className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16"><div className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm md:p-9"><div className="mb-6 text-center"><div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-vaisa-cream text-2xl">📦</div><h2 className="text-2xl font-black">سفارش خود را پیگیری کن</h2><p className="mt-2 text-[13px] leading-6 text-black/50">کد سفارش و شماره موبایل ثبت‌شده را وارد کن.</p></div><form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]"><input required placeholder="کد سفارش، مانند VS-123456" className="rounded-xl bg-vaisa-cream px-4 py-3.5 text-[13px] outline-none focus:ring-2 focus:ring-vaisa-gold/40" /><input required type="tel" placeholder="شماره موبایل" className="rounded-xl bg-vaisa-cream px-4 py-3.5 text-[13px] outline-none focus:ring-2 focus:ring-vaisa-gold/40" /><button className="rounded-xl bg-vaisa-black px-5 py-3.5 text-[13px] font-bold text-white transition hover:bg-vaisa-golddark">پیگیری</button></form>{submitted && <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-[13px] leading-7 text-amber-900">این نسخهٔ پیش‌نمایش به سامانهٔ ارسال متصل نیست. پس از اتصال بک‌اند، وضعیت سفارش و کد رهگیری در همین بخش نمایش داده می‌شود.</div>}</div></section>;
}
