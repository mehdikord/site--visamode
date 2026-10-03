import PageIntro from '../../components/pages/PageIntro';
import CollectionsSection from '../../components/home/CollectionsSection';
import CategorySection from '../../components/home/CategorySection';

export const metadata = { title: 'کالکشن‌ها | ویسا مد', description: 'کالکشن‌های فصل و دسته‌بندی‌های منتخب پوشاک زنانه ویسا مد.' };

export default function CollectionsPage() {
  return <><PageIntro eyebrow="SEASONAL CAMPAIGNS" title={<>کالکشن‌های <span className="gold-text">ویسا</span></>} description="هر فصل، یک داستان مد؛ کمپین‌های فصل‌محور را ببین و استایل مورد علاقه‌ات را پیدا کن." breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'کالکشن‌ها' }]} /><CollectionsSection /><CategorySection /></>;
}
