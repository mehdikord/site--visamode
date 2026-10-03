import PageIntro from '../../components/pages/PageIntro';
import CheckoutForm from '../../components/pages/CheckoutForm';

export const metadata = { title: 'تکمیل سفارش | ویسا مد', description: 'ثبت اطلاعات تحویل سفارش در فروشگاه ویسا مد.' };

export default function CheckoutPage() {
  return <><PageIntro eyebrow="SECURE CHECKOUT" title={<>تکمیل <span className="gold-text">سفارش</span></>} description="اطلاعات تحویل را وارد کن تا خلاصهٔ سفارش را بررسی کنی." breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'سبد خرید', href: '/cart' }, { label: 'تکمیل سفارش' }]} /><CheckoutForm /></>;
}
