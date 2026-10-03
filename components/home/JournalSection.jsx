import Link from 'next/link';
import { POSTS } from '../../lib/data';

export default function JournalSection() {
  return <section id="journal" className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
    <div className="reveal mb-8 flex items-end justify-between"><div><div className="mb-2 flex items-center gap-2 text-[13px] font-bold tracking-widest text-vaisa-golddark"><span className="h-px w-8 bg-vaisa-gold" /> VAISA JOURNAL</div><h2 className="text-3xl font-black md:text-[44px]">مجله <span className="gold-text">استایل ویسا</span></h2></div><Link href="/journal" className="hidden border-b-2 border-black pb-1 text-[14px] font-bold md:block">همه مقالات ←</Link></div>
    <div className="grid gap-5 md:grid-cols-3">{POSTS.map((post) => <Link key={post.slug} href={`/journal/${post.slug}`} className="reveal group cursor-pointer overflow-hidden rounded-[24px] border border-black/5 bg-white transition-all hover:-translate-y-1 hover:shadow-card">
      <div className="relative h-[220px] overflow-hidden md:h-[250px]"><img src={post.img} className="h-full w-full object-cover transition duration-[1.2s] group-hover:scale-110" alt={post.t} /><span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[12px] font-bold backdrop-blur">{post.tag}</span></div>
      <div className="p-5"><div className="mb-2 text-[12px] text-black/40">⏱ {post.time} مطالعه</div><h3 className="mb-2 text-[17px] font-black leading-7 transition group-hover:text-vaisa-golddark">{post.t}</h3><p className="mb-3 line-clamp-2 text-[13px] leading-6 text-black/55">{post.d}</p><span className="text-[13px] font-bold underline decoration-vaisa-gold underline-offset-4">خواندن مقاله ←</span></div>
    </Link>)}</div>
  </section>;
}
