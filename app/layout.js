import './globals.css';
import AppProvider from './providers';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import RevealController from '../components/global/RevealController';

export const metadata = {
  title: { default: 'VAISA MODE | برند تخصصی پوشاک زنانه', template: '%s | VAISA MODE' },
  description: 'ویسا مد - برند تخصصی پوشاک بانوان | ست، کت، شلوار و کالکشن‌های فصل',
  applicationName: 'VAISA MODE',
  openGraph: {
    title: 'VAISA MODE | برند تخصصی پوشاک زنانه',
    description: 'ست، کت، شلوار و کالکشن‌های فصل ویسا مد',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">
        <div className="grain" aria-hidden="true" />
        <AppProvider>
          <SiteHeader />
          <main id="home">{children}</main>
          <SiteFooter />
          <RevealController />
        </AppProvider>
      </body>
    </html>
  );
}
