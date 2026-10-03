import Link from 'next/link';

export default function SiteFooter() {
  return <footer className="relative overflow-hidden bg-[#0B0B0C] pb-6 pt-14 text-white">
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-vaisa-gold text-xl font-bold text-black font-play">V</div><div><div className="font-latin font-bold">VAISA MODE</div><div className="text-[11px] tracking-[.25em] text-white/40">WOMEN FASHION HOUSE</div></div></Link>
          <p className="mb-5 text-[13px] leading-7 text-white/55">خانه مد ویسا؛ برند تخصصی پوشاک بانوان با تمرکز بر طراحی متمایز، کیفیت ژورنالی و تجربه خرید لذت‌بخش. تهران، ایران.</p>
          <div className="flex gap-2">{['◉', '✈', '▶', '✉'].map((icon, index) => <a key={icon} href={index === 0 ? 'https://instagram.com' : '#'} aria-label={`شبکه اجتماعی ${index + 1}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[15px] transition hover:border-vaisa-gold hover:bg-vaisa-gold">{icon}</a>)}</div>
        </div>
        <div><h3 className="mb-4 text-[15px] font-black">دسترسی سریع</h3><ul className="space-y-2.5 text-[13px] text-white/60"><li><Link href="/products" className="transition hover:text-vaisa-gold">فروشگاه</Link></li><li><Link href="/products?discount=true" className="transition hover:text-vaisa-gold">شگفت‌انگیزها</Link></li><li><Link href="/collections" className="transition hover:text-vaisa-gold">کالکشن‌ها</Link></li><li><Link href="/occasions" className="transition hover:text-vaisa-gold">خرید مناسبتی</Link></li><li><Link href="/journal" className="transition hover:text-vaisa-gold">مجله مد</Link></li><li><Link href="/about" className="transition hover:text-vaisa-gold">درباره ما</Link></li></ul></div>
        <div><h3 className="mb-4 text-[15px] font-black">خدمات مشتریان</h3><ul className="space-y-2.5 text-[13px] text-white/60"><li><Link href="/size-guide" className="transition hover:text-vaisa-gold">راهنمای سایز</Link></li><li><Link href="/shipping-returns" className="transition hover:text-vaisa-gold">رویه مرجوعی و ارسال</Link></li><li><Link href="/order-tracking" className="transition hover:text-vaisa-gold">پیگیری سفارش</Link></li><li><Link href="/faq" className="transition hover:text-vaisa-gold">سوالات متداول</Link></li><li><Link href="/contact" className="transition hover:text-vaisa-gold">تماس با ما</Link></li><li><Link href="/terms" className="transition hover:text-vaisa-gold">قوانین و مقررات</Link></li><li><Link href="/privacy" className="transition hover:text-vaisa-gold">حریم خصوصی</Link></li></ul></div>
        <div><h3 className="mb-4 text-[15px] font-black">اعتماد شما، اعتبار ما</h3><div className="mb-4 grid grid-cols-3 gap-2">{[['نماد', 'اعتماد'], ['درگاه', 'امن بانکی'], ['نشان', 'ملی ثبت']].map(([top, bottom]) => <div key={bottom} className="rounded-xl border border-white/10 bg-white/5 py-4 text-center text-[11px] text-white/60">{top}<br /><b className="text-white">{bottom}</b></div>)}</div><div className="rounded-xl border border-white/10 bg-white/5 p-3 text-[12px] leading-6 text-white/60">☎ پشتیبانی: <bdi className="font-bold text-white" dir="ltr">021 - 9100 1234</bdi><br />✉ hello@vaisamode.ir</div></div>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 pt-6 text-[12px] text-white/40 md:flex-row"><span>© ۱۴۰۵ ویسا مد — کلیه حقوق محفوظ است. طراحی‌شده با 🤍 در تهران</span><span className="font-latin tracking-[.3em] opacity-60" dir="ltr">VAISA MODE • EST. 2021</span></div>
    </div>
  </footer>;
}
