import PageIntro from '../../components/pages/PageIntro';
import OccasionSection from '../../components/home/OccasionSection';

export const metadata = {
  title: 'استایل مناسبتی | VAISA MODE',
  description: 'پوشاک و استایل‌های پیشنهادی ویسا مد برای موقعیت‌ها و مناسبت‌های مختلف.',
};

export default function OccasionsPage() {
  return <>
    <PageIntro
      eyebrow="SHOP BY OCCASION"
      title={<>استایلِ <span className="gold-text">هر موقعیت</span></>}
      description="برای هر قرار و مناسبت، استایل مناسب خودت را از پیشنهادهای ویسا پیدا کن."
      breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'خرید مناسبتی' }]}
    />
    <OccasionSection showHeading={false} />
  </>;
}
