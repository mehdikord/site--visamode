import PageIntro from '../../components/pages/PageIntro';
import ProductsCatalog from '../../components/ProductsCatalog';

export const metadata = { title: 'جستجوی محصولات | ویسا مد', description: 'جستجو در مجموعهٔ پوشاک زنانه ویسا مد.' };

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = typeof params?.q === 'string' ? params.q : '';
  return <><PageIntro eyebrow="FIND YOUR STYLE" title={<>نتایج <span className="gold-text">جستجو</span></>} description={query ? `نتایج مرتبط با «${query}» در فروشگاه ویسا مد.` : 'محصول موردنظرت را جستجو کن.'} breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'جستجو' }]} /><ProductsCatalog initialQuery={query} /></>;
}
