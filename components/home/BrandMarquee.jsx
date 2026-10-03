export default function BrandMarquee() {
  const text = 'VAISA MODE ✦ NEW SEASON ✦ FALL WINTER 2025 ✦ DIRECT IMPORT ✦ JOURNAL STYLE ✦';
  return <div className="overflow-hidden bg-vaisa-black py-4 text-white" dir="ltr"><div className="marquee-track items-center gap-10 font-latin text-[13px] tracking-[.35em] opacity-80" style={{ animationDuration: '30s' }}><span className="px-6">{text}</span><span className="px-6">{text}</span></div></div>;
}
