import Link from 'next/link';

export default function NotFound() {
  return <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-6"><div className="font-latin text-7xl font-bold gold-text">404</div><h1 className="mt-4 text-3xl font-black">این صفحه پیدا نشد</h1><p className="mt-3 text-[14px] text-black/55">شاید آدرس تغییر کرده یا صفحه دیگر در دسترس نیست.</p><Link href="/" className="mt-7 inline-flex rounded-full bg-vaisa-black px-7 py-3.5 font-bold text-white">بازگشت به خانه ←</Link></section>;
}
