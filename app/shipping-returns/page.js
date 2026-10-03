import Link from 'next/link';
import PageIntro from '../../components/pages/PageIntro';
import PolicyArticle from '../../components/pages/PolicyArticle';

export const metadata = { title: 'ارسال و مرجوعی | ویسا مد', description: 'هزینه و زمان ارسال سفارش و شرایط مرجوعی کالا در ویسا مد.' };

const sections = [
  { title: 'زمان آماده‌سازی و ارسال', paragraphs: ['سفارش‌ها پس از تأیید، معمولاً طی ۲۴ تا ۷۲ ساعت کاری آماده و به شرکت حمل‌ونقل تحویل داده می‌شوند. زمان رسیدن بسته با توجه به مقصد و شرایط شرکت حمل‌ونقل ممکن است متفاوت باشد. کد رهگیری پس از تحویل سفارش اطلاع‌رسانی می‌شود.'] },
  { title: 'هزینهٔ ارسال', items: ['تهران: ۶۵ هزار تومان.', 'سایر شهرها: ۹۵ هزار تومان.', 'برای سفارش‌های بالاتر از ۱٫۵ میلیون تومان، ارسال رایگان است.'] },
  { title: 'شرایط درخواست مرجوعی', items: ['درخواست را حداکثر تا ۷ روز پس از تحویل ثبت کنید.', 'کالا استفاده‌نشده، سالم و دارای اتیکت و بسته‌بندی اصلی باشد.', 'برای ایراد کیفی یا مغایرت، تصویر کالا و شمارهٔ سفارش را برای پشتیبانی بفرستید.', 'پس از بررسی و تأیید، روش بازگشت وجه یا تعویض با هماهنگی مشتری انجام می‌شود.'] },
  { title: 'موارد نیازمند بررسی', paragraphs: ['تغییر نظر پس از استفاده، آسیب ناشی از شست‌وشوی نادرست یا نبود اتیکت می‌تواند بر امکان مرجوعی اثر بگذارد. شرایط هر درخواست جداگانه و با توجه به وضعیت کالا بررسی خواهد شد.'] },
];

export default function ShippingReturnsPage() {
  return <><PageIntro eyebrow="DELIVERY & RETURNS" title={<>ارسال و <span className="gold-text">مرجوعی</span></>} description="از ثبت سفارش تا رسیدن بسته، جزئیات را شفاف و مرحله‌به‌مرحله دنبال کن." breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'ارسال و مرجوعی' }]} /><div className="mx-auto mt-10 grid max-w-4xl gap-4 px-4 md:grid-cols-3 md:px-6">{[['تهران', '۶۵٬۰۰۰ تومان', '۱ تا ۳ روز کاری'], ['شهرستان', '۹۵٬۰۰۰ تومان', '۲ تا ۵ روز کاری'], ['خرید بالای ۱٫۵ میلیون', 'رایگان', '۲۴ تا ۷۲ ساعت برای ارسال']].map(([title, price, eta]) => <div key={title} className="rounded-[22px] border border-black/5 bg-white p-5 text-center shadow-sm"><div className="mb-2 font-black">{title}</div><div className="font-latin text-xl font-bold text-vaisa-golddark">{price}</div><div className="mt-1 text-[12px] text-black/45">{eta}</div></div>)}</div><PolicyArticle sections={sections} /><div className="mx-auto mb-14 max-w-4xl px-4 md:px-6"><div className="rounded-2xl bg-vaisa-black p-6 text-white"><h2 className="mb-2 text-lg font-black">سوالی درباره سفارش داری؟</h2><p className="mb-4 text-[13px] text-white/60">شمارهٔ سفارش را آماده داشته باش تا سریع‌تر راهنمایی‌ات کنیم.</p><Link href="/contact" className="inline-flex rounded-full bg-vaisa-gold px-5 py-2.5 text-[13px] font-bold">تماس با پشتیبانی ←</Link></div></div></>;
}
