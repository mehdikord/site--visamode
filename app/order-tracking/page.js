import PageIntro from '../../components/pages/PageIntro';
import OrderTrackingForm from '../../components/pages/OrderTrackingForm';

export const metadata = { title: 'پیگیری سفارش | ویسا مد', description: 'پیگیری وضعیت ارسال سفارش‌های ثبت‌شده در ویسا مد.' };

export default function OrderTrackingPage() {
  return <><PageIntro eyebrow="ORDER TRACKING" title={<>پیگیری <span className="gold-text">سفارش</span></>} description="وضعیت سفارش خود را با کد سفارش و شمارهٔ تماس بررسی کن." breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'پیگیری سفارش' }]} /><OrderTrackingForm /></>;
}
