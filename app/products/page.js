import PageIntro from '../../components/pages/PageIntro';
import ProductsCatalog from '../../components/ProductsCatalog';

export const metadata = {
  title: 'فروشگاه | VAISA MODE',
  description: 'خرید کت، ست زنانه، شلوار، پیراهن و مانتو از فروشگاه ویسا مد.',
};

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  return <>
    <PageIntro eyebrow="THE VAISA BOUTIQUE" title={<>فروشگاه <span className="gold-text">ویسا مد</span></>} description="کالکشن‌های منتخب ویسا را بر اساس دسته‌بندی، قیمت و استایل مورد علاقه‌ات پیدا کن." breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'فروشگاه' }]} />
    <ProductsCatalog initialCategory={params?.category || 'all'} initialDiscountOnly={params?.discount === 'true'} initialQuery={params?.q || ''} />
  </>;
}
