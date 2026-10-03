import VideoButton from '../VideoButton';

export default function LookbookSection() {
  return <section className="group relative h-[480px] cursor-pointer overflow-hidden md:h-[600px]">
    <img src="/images/photo-1490481651871-ab68de25d43d.jpg" className="absolute inset-0 h-full w-full object-cover transition duration-[2s] group-hover:scale-105" alt="لوک‌بوک پاییز ویسا" />
    <div className="video-overlay absolute inset-0" />
    <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white"><div className="mb-4 font-latin text-[13px] tracking-[.4em] text-vaisa-gold">FASHION FILM — FW25</div><h2 className="mb-4 text-3xl font-black sm:text-4xl md:text-7xl">لوک‌بوک <span className="font-corm font-medium italic">پاییز</span> ویسا</h2><p className="mb-8 max-w-xl text-[15px] leading-7 text-white/70">ببین مدل‌ها روی تن واقعی چطور می‌ایستند؛ حرکت پارچه، برق دکمه‌ها و فیت دقیق هر ست را در فیلم ۶۰ ثانیه‌ای ما تماشا کن.</p>
      <VideoButton className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur"><span className="absolute inset-0 animate-ping rounded-full bg-white/20" /><span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-vaisa-gold shadow-gold"><svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg></span></VideoButton><div className="mt-4 text-[13px] font-bold tracking-widest">▶ تماشای ویدیو</div>
    </div>
  </section>;
}
