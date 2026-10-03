import PageIntro from '../../components/pages/PageIntro';
import WishlistPage from '../../components/pages/WishlistPage';

export const metadata = { title: 'علاقه‌مندی‌ها | ویسا مد', description: 'محصولات ذخیره‌شده در فهرست علاقه‌مندی‌های شما.' };

export default function WishlistRoute() {
  return <><PageIntro eyebrow="SAVED FOR LATER" title={<>علاقه‌مندی‌های <span className="gold-text">من</span></>} description="مدل‌هایی را که دوست داری ذخیره کن تا هر زمان خواستی دوباره به آن‌ها برگردی." breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'علاقه‌مندی‌ها' }]} /><WishlistPage /></>;
}
