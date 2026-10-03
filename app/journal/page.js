import Link from 'next/link';
import PageIntro from '../../components/pages/PageIntro';
import { POSTS } from '../../lib/data';

export const metadata = { title: 'مجله استایل ویسا', description: 'راهنماهای خرید، ترندهای فصل و نکته‌های استایلینگ ویسا مد.' };

export default function JournalPage() {
  return <><PageIntro eyebrow="VAISA JOURNAL" title={<>مجلهٔ <span className="gold-text">استایل ویسا</span></>} description="الهام‌های روزمره، راهنماهای خرید و ترندهایی که با استایل تو همراه می‌شوند." breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'مجله ویسا' }]} /><section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16"><div className="grid gap-5 md:grid-cols-3">{POSTS.map((post) => <Link key={post.slug} href={`/journal/${post.slug}`} className="group overflow-hidden rounded-[24px] border border-black/5 bg-white transition-all hover:-translate-y-1 hover:shadow-card"><div className="h-[240px] overflow-hidden"><img src={post.img} alt={post.t} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><div className="p-5"><div className="mb-2 flex justify-between text-[12px] text-black/40"><span>{post.tag}</span><span>{post.time} مطالعه</span></div><h2 className="mb-2 text-lg font-black leading-8 group-hover:text-vaisa-golddark">{post.t}</h2><p className="text-[13px] leading-7 text-black/55">{post.d}</p><span className="mt-4 inline-block text-[13px] font-bold underline decoration-vaisa-gold underline-offset-4">ادامه مطلب ←</span></div></Link>)}</div></section></>;
}
