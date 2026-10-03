import Link from 'next/link';

export function Breadcrumbs({ items = [] }) {
  return <nav aria-label="مسیر صفحه" className="flex flex-wrap items-center gap-2 text-[12px] text-black/45">{items.map((item, index) => <span key={`${item.label}-${index}`} className="flex items-center gap-2">{index > 0 && <span className="text-vaisa-gold">←</span>}{item.href && index < items.length - 1 ? <Link href={item.href} className="transition hover:text-vaisa-golddark">{item.label}</Link> : <span className={index === items.length - 1 ? 'font-bold text-black/70' : ''}>{item.label}</span>}</span>)}</nav>;
}

export default function PageIntro({ eyebrow, title, description, breadcrumbs = [] }) {
  return <section className="relative overflow-hidden border-b border-black/5 bg-vaisa-cream py-9 sm:py-12 md:py-16"><div className="pointer-events-none absolute -left-24 -top-28 h-[320px] w-[320px] rounded-full bg-vaisa-gold/10 blur-[100px]" /><div className="relative mx-auto max-w-7xl px-4 md:px-6"><div className="mb-4 font-latin text-[11px] font-bold tracking-[.3em] text-vaisa-golddark sm:text-[12px]">{eyebrow}</div><h1 className="mb-3 text-2xl font-black leading-tight sm:text-3xl md:text-[48px]">{title}</h1>{description && <p className="max-w-3xl text-[14px] leading-7 text-black/55 md:text-[15px]">{description}</p>}{breadcrumbs.length > 0 && <div className="mt-5"><Breadcrumbs items={breadcrumbs} /></div>}</div></section>;
}
