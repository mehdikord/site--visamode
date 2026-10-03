import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductDetail from '../../../components/ProductDetail';
import ProductCard from '../../../components/ProductCard';
import { PRODUCTS, getProductBySlug } from '../../../lib/data';

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'محصول پیدا نشد | VAISA MODE' };
  return { title: `${product.name} | VAISA MODE`, description: `${product.name} با کیفیت ژورنالی از ویسا مد. ${product.fabric}` };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = PRODUCTS.filter((item) => item.id !== product.id && (item.cat === product.cat || item.old > 0)).slice(0, 4);

  return <>
    <ProductDetail product={product} />
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-20"><div className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between"><div><div className="mb-2 font-latin text-[12px] tracking-[.3em] text-vaisa-golddark">YOU MAY ALSO LIKE</div><h2 className="text-2xl font-black md:text-3xl">محصولات <span className="gold-text">پیشنهادی</span></h2></div><Link href="/products" className="text-[13px] font-bold underline underline-offset-4">همه محصولات ←</Link></div><div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></section>
  </>;
}
