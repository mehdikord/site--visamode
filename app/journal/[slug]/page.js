import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '../../../components/pages/PageIntro';
import { POSTS } from '../../../lib/data';

const details = {
  'autumn-fashion-trends-2025': [
    ['لایه‌پوشی هوشمند', 'پاییز فصل بازی با بافت‌هاست. یک کت خوش‌فرم روی بلوز سبک، هم ظاهر را کامل می‌کند و هم برای تغییر دما کاربردی است. رنگ‌های خنثی را با یک اکسسوری گرم یا کیف رنگی همراه کن.'],
    ['کت اورسایز، اما متعادل', 'اگر کت آزاد انتخاب می‌کنی، ترکیب آن با شلوار راسته یا دامن ساده تعادل خوبی می‌سازد. آستین و سرشانه باید راحت باشند، اما قد لباس متناسب با قد تو انتخاب شود.'],
    ['بافت و رنگ‌های خاکی', 'شتری، کرم، زیتونی و قهوه‌ای از رنگ‌های همراه پاییزند. ترکیب دو یا سه رنگ نزدیک در کنار یک بافت متفاوت، استایل را عمیق‌تر و ماندگارتر می‌کند.'],
  ],
  'choose-blazer-for-body-shape': [
    ['به سرشانه و قد کت توجه کن', 'کت خوب از سرشانه درست می‌نشیند؛ درز سرشانه نباید روی بازو بیفتد یا بیش از حد داخل برود. قد کت را با لباسی که معمولاً زیر آن می‌پوشی بسنج.'],
    ['فرم آزاد یا جذب؟', 'برای استایل متعادل، کت کمی آزاد با شلوار راسته انتخابی کاربردی است. اگر کت کوتاه می‌پوشی، فاق بلند به ایجاد تناسب در خطوط لباس کمک می‌کند.'],
    ['انتخاب سایز', 'دور سینه و کمر را روی لباس نازک اندازه بگیر و با جدول سایز مقایسه کن. اگر بین دو سایزی، برای لایه‌پوشی و آزادی حرکت سایز بزرگ‌تر را در نظر بگیر.'],
  ],
  'linen-set-in-autumn': [
    ['لینن را با بافت همراه کن', 'ست لینن را با یک کت سبک، ژاکت یا شال بافت‌دار لایه‌پوشی کن. تفاوت بافت‌ها باعث می‌شود لباس تابستانی در هوای خنک هم کاربرد داشته باشد.'],
    ['پالت رنگی پاییزی', 'کرم، شتری، زیتونی و قهوه‌ای به‌خوبی کنار رنگ طبیعی لینن می‌نشینند. کفش چرمی و اکسسوری مینیمال ظاهر نهایی را جمع‌وجور می‌کند.'],
    ['نگهداری از لینن', 'برای حفظ بافت، لباس را با آب خنک و شویندهٔ ملایم بشوی و از خشک‌کن داغ استفاده نکن. کمی چروک طبیعی بخشی از ظاهر پارچهٔ لینن است.'],
  ],
};

export function generateStaticParams() { return POSTS.map((post) => ({ slug: post.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS.find((item) => item.slug === slug);
  return post ? { title: post.t, description: post.d } : { title: 'مقاله پیدا نشد' };
}

export default async function JournalArticlePage({ params }) {
  const { slug } = await params;
  const post = POSTS.find((item) => item.slug === slug);
  if (!post) notFound();
  const sections = details[slug] || [];
  return <article className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12"><Breadcrumbs items={[{ label: 'خانه', href: '/' }, { label: 'مجله ویسا', href: '/journal' }, { label: post.t }]} /><header className="mt-6"><div className="mb-3 font-latin text-[12px] tracking-[.3em] text-vaisa-golddark">VAISA JOURNAL • {post.tag}</div><h1 className="mb-4 text-3xl font-black leading-tight md:text-[44px]">{post.t}</h1><p className="mb-6 text-[15px] leading-8 text-black/55">{post.d}</p><div className="h-[280px] overflow-hidden rounded-[26px] md:h-[460px]"><img src={post.img} alt={post.t} className="h-full w-full object-cover" /></div></header><div className="space-y-7 py-8">{sections.map(([heading, body], index) => <section key={heading}><div className="mb-2 font-latin text-[11px] tracking-[.25em] text-vaisa-golddark">STYLE NOTE 0{index + 1}</div><h2 className="mb-2 text-xl font-black">{heading}</h2><p className="text-[14px] leading-8 text-black/60">{body}</p></section>)}</div><div className="rounded-[22px] bg-vaisa-black p-6 text-white"><h2 className="mb-2 text-lg font-black">استایل بعدی‌ات را در ویسا پیدا کن</h2><p className="mb-4 text-[13px] text-white/60">کالکشن‌های تازه و محصولات منتخب را ببین.</p><Link href="/products" className="inline-flex rounded-full bg-vaisa-gold px-5 py-2.5 text-[13px] font-bold">رفتن به فروشگاه ←</Link></div></article>;
}
