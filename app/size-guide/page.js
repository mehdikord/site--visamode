import PageIntro from '../../components/pages/PageIntro';
import SizeFinder from '../../components/home/SizeFinder';

export const metadata = { title: 'راهنمای سایز | ویسا مد', description: 'جدول سایزبندی بالاتنه و پایین‌تنه و ماشین‌حساب هوشمند سایز ویسا.' };

const topSizes = [
  ['XS', '۸۰-۸۴', '۶۲-۶۶', '۸۶-۹۰', '۵۸', 'جذب'], ['S', '۸۴-۸۸', '۶۶-۷۰', '۹۰-۹۴', '۵۹', 'جذب'], ['M', '۸۸-۹۲', '۷۰-۷۴', '۹۴-۹۸', '۶۰', 'استاندارد'], ['L', '۹۲-۹۸', '۷۴-۸۰', '۹۸-۱۰۴', '۶۱', 'آزاد'], ['XL', '۹۸-۱۰۴', '۸۰-۸۶', '۱۰۴-۱۱۰', '۶۲', 'اورسایز'],
];
const bottomSizes = [
  ['XS / 34', '۶۴-۶۸', '۸۸-۹۲', '۵۲', '۱۰۰', 'متوسط'], ['S / 36', '۶۸-۷۲', '۹۲-۹۶', '۵۴', '۱۰۱', 'متوسط'], ['M / 38', '۷۲-۷۶', '۹۶-۱۰۰', '۵۶', '۱۰۲', 'بلند'], ['L / 40', '۷۶-۸۲', '۱۰۰-۱۰۶', '۵۸', '۱۰۳', 'بلند'], ['XL / 42', '۸۲-۸۸', '۱۰۶-۱۱۲', '۶۰', '۱۰۴', 'بلند'],
];

function SizeTable({ title, columns, rows }) {
  return <div className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-sm"><div className="border-b border-black/5 p-5"><h2 className="text-xl font-black">{title}</h2><p className="mt-1 text-[12px] text-black/45">همه اندازه‌ها بر حسب سانتی‌متر هستند.</p></div><div className="overflow-x-auto"><table className="w-full min-w-[560px] text-center text-[13px]"><thead><tr className="bg-vaisa-black text-white">{columns.map((column, index) => <th key={column} className={`px-3 py-3 ${index === 0 ? 'rounded-r-xl' : ''} ${index === columns.length - 1 ? 'rounded-l-xl' : ''}`}>{column}</th>)}</tr></thead><tbody className="font-semibold">{rows.map((row, index) => <tr key={row[0]} className={`border-b border-black/5 last:border-0 ${index % 2 ? 'bg-vaisa-cream/60' : ''}`}>{row.map((cell, cellIndex) => <td key={cellIndex} className={`px-3 py-3 ${cellIndex === 0 ? 'font-black' : ''}`}>{cell}</td>)}</tr>)}</tbody></table></div></div>;
}

export default function SizeGuidePage() {
  return <><PageIntro eyebrow="FIND YOUR PERFECT FIT" title={<>راهنمای <span className="gold-text">سایز ویسا</span></>} description="با جدول اندازه‌ها یا ماشین‌حساب هوشمند، انتخاب سایز را ساده‌تر کن." breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'راهنمای سایز' }]} /><section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14"><div className="grid gap-5 lg:grid-cols-2"><SizeTable title="بالاتنه (کت / مانتو / شومیز)" columns={['سایز', 'دور سینه', 'دور کمر', 'دور باسن', 'قد آستین', 'تن‌خور']} rows={topSizes} /><SizeTable title="پایین‌تنه (شلوار / دامن)" columns={['سایز', 'دور کمر', 'دور باسن', 'دور ران', 'قد شلوار', 'فاق']} rows={bottomSizes} /></div><div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-[13px] leading-7 text-amber-900">💡 <b>نکته استایلیست:</b> مدل‌های کت ویسا قالب استاندارد دارند؛ اگر بین دو سایز هستی و استایل اورسایز دوست داری، سایز بزرگ‌تر را انتخاب کن. قد مدل ژورنال ما ۱۷۴ با سایز S است.</div><SizeFinder /></section></>;
}
