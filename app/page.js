import HeroSection from '../components/home/HeroSection';
import BrandMarquee from '../components/home/BrandMarquee';
import CategorySection from '../components/home/CategorySection';
import AmazingSection from '../components/home/AmazingSection';
import CollectionsSection from '../components/home/CollectionsSection';
import ProductsCatalog from '../components/ProductsCatalog';
import ProductShowcase from '../components/home/ProductShowcase';
import OccasionSection from '../components/home/OccasionSection';
import BrandSection from '../components/home/BrandSection';
import LookbookSection from '../components/home/LookbookSection';
import JournalSection from '../components/home/JournalSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import InstagramNewsletter from '../components/home/InstagramNewsletter';

export const metadata = {
  title: 'VAISA MODE | برند تخصصی پوشاک زنانه',
  description: 'ویسا مد - برند تخصصی پوشاک بانوان | ست، کت، شلوار و کالکشن‌های فصل',
};

export default function HomePage() {
  return <>
    <HeroSection />
    <BrandMarquee />
    <CategorySection />
    <AmazingSection />
    <CollectionsSection />
    <ProductsCatalog />
    <ProductShowcase />
    <OccasionSection />
    <BrandSection />
    <LookbookSection />
    <JournalSection />
    <TestimonialsSection />
    <InstagramNewsletter />
  </>;
}
