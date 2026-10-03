import Link from 'next/link';

const collections = [
  { title: 'پاییز ژورنالی', subtitle: 'کت‌های اورسایز، ست‌های بافت و پالتوی شتری • ۴۸ مدل جدید', tag: 'کالکشن فعال ✦', season: 'FALL 2025', image: 'photo-1539533018447-63fcce2678e3', category: 'coat', tagClass: 'bg-vaisa-gold text-white' },
  { title: 'زمستان مینیمال', subtitle: 'پالتو فوتر، کت چرم وارداتی و بافت یقه‌اسکی • ٪۱۵ پیش‌خرید', tag: 'پیش‌فروش زمستان ❄', season: 'WINTER 2025', image: 'photo-1544022613-e87ca75a784a', category: 'manto', tagClass: 'bg-white text-black' },
  { title: 'بهار فلورال', subtitle: 'پیراهن‌های ماکسی، ست لینن و رنگ‌های پاستلی • اطلاع‌رسانی عرضه', tag: 'به‌زودی ✿', season: 'SPRING 2026', image: 'photo-1509631179647-0177331693ae', category: 'dress', tagClass: 'border border-white/20 bg-black/60 text-white backdrop-blur' },
];

export default function CollectionsSection() {
  return <section id="collections" className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
    <div className="reveal mb-10 text-center"><div className="mb-3 font-latin text-[13px] font-bold tracking-[.3em] text-vaisa-golddark">SEASONAL CAMPAIGNS</div><h2 className="mb-3 text-3xl font-black md:text-[48px]">کمپین‌ها و <span className="gold-text">کالکشن‌های فصل</span></h2><p className="mx-auto max-w-2xl text-[15px] leading-7 text-black/55">هر فصل، یک داستان مد. کالکشن‌های فصل‌محور ویسا با الهام از رانوی‌های جهانی و سلیقه زن ایرانی طراحی می‌شوند.</p></div>
    <div className="grid gap-4 md:grid-cols-3 md:gap-5">{collections.map((collection) => <Link key={collection.season} href={`/products?category=${collection.category}`} className="collection-card group reveal relative h-[420px] cursor-pointer sm:h-[480px] overflow-hidden rounded-[26px] md:h-[560px]">
      <img src={`/images/${collection.image}.jpg`} className="absolute inset-0 h-full w-full object-cover" alt={collection.title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <span className={`absolute right-5 top-5 rounded-full px-4 py-2 text-[12px] font-bold ${collection.tagClass}`}>{collection.tag}</span>
      <div className="absolute bottom-0 right-0 left-0 p-6 text-white md:p-7"><div className="mb-2 font-latin text-[12px] tracking-[.3em] text-vaisa-gold">{collection.season}</div><h3 className="mb-2 text-2xl font-black md:text-3xl">{collection.title}</h3><p className="mb-4 text-[13px] leading-6 text-white/70">{collection.subtitle}</p><div className="flex items-center justify-between"><span className="text-[14px] font-bold underline decoration-vaisa-gold underline-offset-8">ورود به کالکشن</span><span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-all group-hover:-translate-x-1 group-hover:bg-vaisa-gold group-hover:text-white">←</span></div></div>
    </Link>)}</div>
  </section>;
}
