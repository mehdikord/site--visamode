import Link from 'next/link';
import PageIntro from '../../components/pages/PageIntro';
import BrandSection from '../../components/home/BrandSection';

export const metadata = { title: 'درباره ویسا مد', description: 'داستان، ارزش‌ها و مسیر برند پوشاک زنانه ویسا مد.' };

export default function AboutPage() {
  return <>
    <PageIntro eyebrow="THE STORY OF VAISA" title={<>درباره <span className="gold-text">ویسا مد</span></>} description="خانهٔ مد ویسا؛ همراه انتخاب‌های خاص و آگاهانهٔ بانوان ایرانی." breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'درباره ما' }]} />
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16"><div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
      <div className="reveal"><div className="mb-3 font-latin text-[12px] tracking-[.3em] text-vaisa-golddark">A WOMEN'S FASHION HOUSE</div><h2 className="mb-5 text-3xl font-black leading-tight md:text-[42px]">ما باور داریم <span className="gold-text">استایل، زبانِ خودباوری</span> است.</h2><p className="mb-4 text-[15px] leading-8 text-black/60">ویسا از یک ایدهٔ ساده شروع شد: لباس باید هم زیبا باشد، هم باکیفیت، و هم به زندگی واقعی نزدیک. امروز ویسا مد مجموعه‌ای از کت‌های ژورنالی، ست‌های روزمره و لباس‌های فصل‌محور را با نگاهی دقیق به پارچه، دوخت و فیت عرضه می‌کند.</p><p className="text-[15px] leading-8 text-black/60">ما در انتخاب هر مدل به جزئیاتی توجه می‌کنیم که شاید در نگاه اول کوچک باشند، اما تجربهٔ پوشیدن را متفاوت می‌کنند؛ از ایستایی پارچه و تمیزی آستر گرفته تا راهنمایی صادقانه برای انتخاب سایز.</p><Link href="/products" className="btn-lux mt-7 inline-flex rounded-full border border-vaisa-black bg-vaisa-black px-7 py-3.5 font-bold text-white">مشاهده کالکشن ویسا ←</Link></div>
      <div className="reveal relative overflow-hidden rounded-[28px] shadow-card"><img src="/images/photo-1483985988355-763728e1935b.jpg" alt="تیم ویسا مد" className="h-[420px] w-full object-cover md:h-[520px]" /><div className="absolute inset-x-5 bottom-5 glass rounded-2xl border border-white p-5"><div className="font-latin text-[11px] tracking-[.3em] text-vaisa-golddark">VAISA MODE • EST. 2021</div><div className="mt-1 text-lg font-black">برای انتخابی که شبیه توست.</div></div></div>
    </div></section>
    <BrandSection />
    <section className="bg-vaisa-black py-14 text-white md:py-20"><div className="mx-auto max-w-7xl px-4 md:px-6"><div className="mb-10 text-center"><div className="mb-2 font-latin text-[12px] tracking-[.3em] text-vaisa-gold">OUR PROMISE</div><h2 className="text-3xl font-black md:text-4xl">تعهدهای <span className="gold-text">ویسا به شما</span></h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[['۰۱', 'کیفیت قابل لمس', 'پارچه، برش و دوخت پیش از عرضه بررسی می‌شوند.'], ['۰۲', 'اطلاعات شفاف', 'ویژگی‌ها و راهنمای سایز را صادقانه ارائه می‌کنیم.'], ['۰۳', 'خرید آسوده', '۷ روز فرصت بررسی و درخواست مرجوعی دارید.'], ['۰۴', 'همراهی واقعی', 'تیم پشتیبانی برای انتخاب و پیگیری سفارش کنار شماست.']].map(([number, title, text]) => <div key={number} className="rounded-[22px] border border-white/10 bg-white/[.06] p-6"><div className="mb-4 font-latin text-3xl text-vaisa-gold">{number}</div><h3 className="mb-2 text-lg font-black">{title}</h3><p className="text-[13px] leading-7 text-white/55">{text}</p></div>)}</div></div></section>
  </>;
}
