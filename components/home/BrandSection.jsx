export default function BrandSection() {
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
    <div className="grid items-stretch gap-8 lg:grid-cols-2">
      <div className="reveal group relative min-h-[420px] overflow-hidden rounded-[28px]"><img src="/images/photo-1483985988355-763728e1935b.jpg" className="absolute inset-0 h-full w-full object-cover transition duration-[1.5s] group-hover:scale-105" alt="استایل برند ویسا" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /><div className="absolute bottom-0 p-7 text-white md:p-9"><div className="mb-3 flex items-center gap-2"><span className="rounded-full bg-vaisa-gold px-3 py-1.5 text-[12px] font-bold">✦ واردات مستقیم از چین</span><span className="rounded-full bg-white/20 px-3 py-1.5 text-[12px] font-bold backdrop-blur">بدون واسطه</span></div><h2 className="mb-3 text-2xl font-black leading-tight md:text-4xl">کیفیت ژورنالی،<br />قیمت منصفانه.</h2><p className="max-w-md text-[14px] leading-7 text-white/70">بخشی از کالکشن ویسا با نظارت مستقیم تیم ما از تولیدکنندگان منتخب چین وارد می‌شود؛ همان کیفیتی که در بوتیک‌های دبی می‌بینی، با قیمت ریالی.</p></div></div>
      <div className="flex flex-col gap-4">
        <div className="reveal flex-1 rounded-[24px] border border-black/5 bg-white p-7 shadow-sm"><div className="mb-2 font-latin text-[12px] tracking-[.3em] text-vaisa-golddark">WHY VAISA MODE</div><h3 className="mb-5 text-2xl font-black md:text-3xl">چرا ویسا یک برند است، نه فقط یک فروشگاه؟</h3><div className="space-y-4">{[
          ['۱', 'طراحی اختصاصی و جزئیات متمایز', 'برش‌ها، یقه‌ها و خرج‌کارهایی که در بازار تکراری نیست؛ امضای ویسا روی هر مدل.'],
          ['۲', 'کنترل کیفیت سه‌مرحله‌ای', 'بازبینی پارچه، دوخت و فیت نهایی قبل از ورود به انبار؛ مرجوعی بی‌قیدوشرط.'],
          ['۳', 'استایلیست همراه خرید', 'مشاوره رایگان ست‌کردن، انتخاب سایز و رنگ مناسب پوست و فرم بدن تو.'],
        ].map(([number, title, description]) => <div key={number} className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black font-black text-vaisa-gold">{number}</span><div><div className="text-[15px] font-black">{title}</div><div className="mt-1 text-[13px] leading-6 text-black/55">{description}</div></div></div>)}</div></div>
        <div className="grid grid-cols-3 gap-4">{[['98%', 'رضایت از کیفیت', 'bg-vaisa-black text-white'], ['72h', 'ارسال به سراسر کشور', 'bg-vaisa-gold text-white'], ['7d', 'ضمانت مرجوعی', 'bg-white border border-black/5']].map(([value, caption, style]) => <div key={value} className={`reveal rounded-[20px] p-5 text-center ${style}`}><div className={`font-latin text-2xl font-black md:text-3xl ${value === '98%' ? 'gold-text' : ''}`}>{value}</div><div className={`mt-1 text-[12px] ${value === '7d' ? 'text-black/50' : 'text-white/70'}`}>{caption}</div></div>)}</div>
      </div>
    </div>
  </section>;
}
