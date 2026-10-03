import PageIntro from '../../components/pages/PageIntro';
import CartPage from '../../components/pages/CartPage';

export const metadata = { title: 'سبد خرید | ویسا مد', description: 'مرور و تکمیل سبد خرید در فروشگاه ویسا مد.' };

export default function CartRoute() {
  return <><PageIntro eyebrow="YOUR VAISA BAG" title={<>سبد <span className="gold-text">خرید</span></>} description="محصولات انتخاب‌شده و هزینهٔ ارسال سفارش را مرور کن." breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'سبد خرید' }]} /><CartPage /></>;
}
