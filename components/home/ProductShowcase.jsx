import Link from 'next/link';
import VideoButton from '../VideoButton';
import SizeFinder from './SizeFinder';

const features = [
  ['▣', 'عکس ژورنالی + ویدیو', 'نمایش واقعی روی تن مدل با قد و سایز مشخص', 'bg-vaisa-black text-vaisa-gold'],
  ['◈', 'زوم جزئیات دوخت', 'نمای ماکرو یقه، دکمه، آستر و تمیزی دوخت', 'bg-vaisa-gold text-white'],
  ['⬣', 'شناسنامه پارچه', 'درصد الیاف، گرماژ، آبرفت و نحوه شستشو', 'bg-vaisa-black text-vaisa-gold'],
  ['⬔', 'راهنمای سایز هوشمند', 'پیشنهاد سایز بر اساس اندازه بدن تو', 'bg-vaisa-gold text-white'],
];

export default function ProductShowcase() {
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className="reveal">
        <div className="mb-3 flex items-center gap-2 text-[13px] font-bold tracking-widest text-vaisa-golddark"><span className="h-px w-8 bg-vaisa-gold" /> JOURNAL PRESENTATION</div>
        <h2 className="mb-4 text-3xl font-black leading-tight md:text-[46px]">هر لباس، یک <span className="gold-text">معرفی ژورنالی</span> کامل</h2>
        <p className="mb-7 text-[15px] leading-8 text-black/60">در ویسا مد، خرید کور ممنوع! هر محصول با ویدیوی تن‌خور واقعی، نمای نزدیک دوخت و پارچه، جدول سایز دقیق، ترکیب الیاف و راهنمای استایل معرفی می‌شود تا دقیقاً بدانی چه می‌خری.</p>
        <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2">{features.map(([icon, title, description, color]) => <div key={title} className="flex gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-sm"><span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-bold ${color}`}>{icon}</span><div><div className="text-[14px] font-black">{title}</div><div className="mt-1 text-[12px] leading-5 text-black/50">{description}</div></div></div>)}</div>
        <div className="flex flex-wrap gap-3"><Link href="/size-guide" className="btn-lux rounded-full border border-vaisa-black bg-vaisa-black px-7 py-3.5 text-[14px] font-bold text-white">📏 راهنمای سایز و تن‌خور</Link><Link href="/products/vaisa-tailored-blazer" className="rounded-full border border-black/15 bg-white px-7 py-3.5 text-[14px] font-bold transition hover:border-black">مشاهده نمونه معرفی محصول</Link></div>
      </div>
      <div className="reveal relative">
        <div className="grid grid-cols-2 gap-3"><div className="img-zoom h-[220px] overflow-hidden rounded-[24px] shadow-card sm:h-[280px] md:h-[340px]"><img src="/images/photo-1551803091-e20673f15770.jpg" className="h-full w-full object-cover" alt="جزئیات پارچه ویسا" /></div><div className="img-zoom mt-8 h-[220px] overflow-hidden rounded-[24px] shadow-card sm:h-[280px] md:h-[340px]"><img src="/images/photo-1581044777550-4cfa60707c03.jpg" className="h-full w-full object-cover" alt="جزئیات دوخت لباس" /></div></div>
        <div className="absolute right-1/2 top-1/2 z-10 translate-x-1/2 -translate-y-1/2"><VideoButton className="group relative flex h-[86px] w-[86px] items-center justify-center rounded-full bg-white shadow-lux"><span className="absolute inset-0 animate-ping rounded-full bg-vaisa-gold/40" /><span className="relative flex h-[64px] w-[64px] items-center justify-center rounded-full bg-vaisa-black text-white transition group-hover:bg-vaisa-gold"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span></VideoButton></div>
        <div className="glass absolute -bottom-5 right-6 left-6 flex items-center gap-4 rounded-2xl border border-white p-4 shadow-card md:right-10 md:left-10"><div className="flex-1"><div className="text-[12px] font-semibold text-black/50">پارچه پیشنهادی فصل</div><div className="text-[15px] font-black">فوتر پشمی درجه‌یک • گرماژ ۴۲۰</div><div className="mt-2 flex flex-wrap items-center gap-1.5"><span className="h-6 w-6 rounded-full border-2 border-white shadow" style={{ background: '#C8A87A' }} /><span className="h-6 w-6 rounded-full border-2 border-white bg-[#2B2B2B] shadow" /><span className="h-6 w-6 rounded-full border-2 border-white bg-[#8B8B7E] shadow" /><span className="h-6 w-6 rounded-full border-2 border-white bg-[#5C3D2E] shadow" /><span className="mr-1 self-center text-[11px] text-black/50">۴ رنگ‌بندی</span></div></div><Link href="/products/oversize-autumn-coat" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:bg-vaisa-gold">←</Link></div>
      </div>
    </div>
    <SizeFinder />
  </section>;
}
