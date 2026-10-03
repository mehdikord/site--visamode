import Link from 'next/link';
import PageIntro from '../../components/pages/PageIntro';

export const metadata = { title: 'سوالات متداول | ویسا مد', description: 'پاسخ پرسش‌های پرتکرار درباره خرید، سایز، ارسال و مرجوعی.' };

const questions = [
  ['چطور سایز مناسبم را انتخاب کنم؟', 'اندازه‌های دور سینه، کمر و باسن را با متر بگیر و از ماشین‌حساب سایز یا جدول راهنمای سایز استفاده کن. اگر بین دو سایز هستی، برای استایل آزادتر سایز بزرگ‌تر را انتخاب کن.'],
  ['سفارش من چه زمانی ارسال می‌شود؟', 'سفارش‌ها معمولاً طی ۲۴ تا ۷۲ ساعت کاری آماده و تحویل شرکت حمل‌ونقل می‌شوند. کد رهگیری بعد از تحویل بسته برایت ارسال خواهد شد.'],
  ['هزینهٔ ارسال چقدر است؟', 'هزینهٔ معمول ارسال تهران ۶۵ هزار تومان و سایر شهرها ۹۵ هزار تومان است. برای سفارش‌های بالای ۱٫۵ میلیون تومان ارسال رایگان خواهد بود.'],
  ['آیا امکان تعویض یا مرجوعی وجود دارد؟', 'تا ۷ روز پس از دریافت، می‌توانی درخواست بررسی مرجوعی ثبت کنی. کالا باید استفاده‌نشده و دارای اتیکت باشد. جزئیات در صفحهٔ ارسال و مرجوعی آمده است.'],
  ['چطور از وضعیت سفارش باخبر شوم؟', 'پس از ثبت سفارش، اطلاعات آن به شمارهٔ همراه ثبت‌شده ارسال می‌شود. کد رهگیری پس از تحویل بسته به شرکت حمل‌ونقل در اختیار شما قرار می‌گیرد.'],
  ['آیا پرداخت آنلاین امن است؟', 'در نسخهٔ نمایشی این پروژه هنوز درگاه پرداخت واقعی متصل نشده است. پیش از راه‌اندازی فروش، درگاه معتبر باید به سامانهٔ سفارش متصل شود.'],
  ['چطور با استایلیست ویسا گفتگو کنم؟', 'از دکمهٔ گفتگوی پایین صفحه استفاده کن یا از صفحهٔ تماس با ما برای ارتباط با پشتیبانی اقدام کن.'],
];

export default function FAQPage() {
  return <><PageIntro eyebrow="HELP CENTER" title={<>سوالات <span className="gold-text">متداول</span></>} description="پاسخ پرسش‌های پرتکرار درباره خرید، انتخاب سایز و تحویل سفارش." breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'سوالات متداول' }]} /><section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16"><div className="space-y-3">{questions.map(([question, answer], index) => <details key={question} className="group rounded-[20px] border border-black/5 bg-white p-5 shadow-sm" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-black"><span>{question}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-vaisa-cream transition group-open:rotate-45">＋</span></summary><p className="mt-4 border-t border-black/5 pt-4 text-[14px] leading-8 text-black/60">{answer}</p></details>)}</div><div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[22px] bg-vaisa-black p-6 text-white sm:flex-row"><div><h2 className="font-black">پاسخت را پیدا نکردی؟</h2><p className="mt-1 text-[13px] text-white/60">تیم پشتیبانی ویسا همراه توست.</p></div><Link href="/contact" className="rounded-full bg-vaisa-gold px-5 py-3 text-[13px] font-bold">تماس با ما ←</Link></div></section></>;
}
