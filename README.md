# VAISA MODE — فروشگاه Next.js

بازسازی کامپوننت‌محور وب‌سایت VAISA MODE با Next.js App Router. ظاهر، رنگ‌ها، تایپوگرافی، محتوای فارسی و هویت بصری فایل اصلی مبنای این نسخه بوده‌اند؛ بخش‌های اصلی به کامپوننت‌های React و مسیرهای مستقل تبدیل شده‌اند.

## فناوری‌ها

- Next.js `16.3.8`
- React / React DOM `19.3.0`
- Tailwind CSS `4.3.3`
- GSAP `3.15.0`

## اجرا روی Linux

پیش‌نیاز: Node.js نسخهٔ `20.9` یا جدیدتر (پیشنهاد: Node.js 22 LTS) و npm.

```bash
npm ci
npm run build
npm start
```

`npm start` سرور production خود Next.js را روی `0.0.0.0` اجرا می‌کند؛ پورت پیش‌فرض `3000` است و با `PORT` قابل تنظیم است:

```bash
PORT=3000 npm start
```

این پروژه **Static Export نیست**، از `next start` استفاده می‌کند و `output: "export"` در تنظیمات وجود ندارد.

### اجرای توسعه

```bash
npm run dev
```

### نمونهٔ unit برای systemd

مسیرها و کاربر را متناسب با سرور خود تغییر دهید. نمونهٔ آماده در `deploy/vaisa.service.example` نیز موجود است.

```ini
[Unit]
Description=VAISA MODE Next.js website
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/vaisa-next
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/npm start
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

## صفحات

| مسیر | صفحه |
|---|---|
| `/` | خانه و بخش‌های کامل فروشگاه |
| `/products` | فهرست، دسته‌بندی، جستجو، مرتب‌سازی و فیلتر تخفیف |
| `/products/[slug]` | جزئیات محصول، گالری، رنگ، سایز و افزودن به سبد |
| `/collections` | کمپین‌ها و کالکشن‌های فصل |
| `/occasions` | استایل‌های پیشنهادی برای مناسبت‌ها |
| `/about` | دربارهٔ ویسا مد |
| `/size-guide` | جدول سایزبندی و ماشین‌حساب سایز |
| `/cart` و `/wishlist` | سبد خرید و علاقه‌مندی‌ها |
| `/checkout` | فرم تکمیل سفارش نمایشی |
| `/contact` و `/faq` | تماس با ما و سوالات متداول |
| `/shipping-returns` | ارسال و مرجوعی |
| `/terms` و `/privacy` | قوانین، مقررات و حریم خصوصی |
| `/search?q=...` | صفحهٔ نتایج جستجو |
| `/journal` و `/journal/[slug]` | مجله و صفحهٔ مقاله |
| `/order-tracking` | فرم پیگیری سفارش (دمو) |

در همهٔ فهرست‌ها، کلیک روی کارت محصول به مسیر اختصاصی `/products/[slug]` می‌رود؛ انتخاب سایز، رنگ، تعداد و افزودن به سبد در همان صفحه انجام می‌شود و جزئیات محصول به‌صورت quick view/modal باز نمی‌شود. لینک‌های منوی اصلی نیز در همهٔ routeها به صفحهٔ مستقل مربوط وصل‌اند (مانند `/products`، `/collections`، `/occasions` و `/journal`).

## ساختار پروژه

- `app/` — مسیرها، layout و provider وضعیت سبد خرید
- `components/home/` — بخش‌های مستقل صفحهٔ اصلی
- `components/global/` — تعاملات سراسری، جستجو، سبد، علاقه‌مندی و ویدیوی لوک‌بوک
- `components/pages/` — اجزای قابل‌استفاده در صفحات داخلی
- `components/ProductCard.jsx` و `components/ProductDetail.jsx` — اجزای محصول
- `lib/data.js` — دادهٔ محصولات و محتوای ویترین
- `app/globals.css` — توکن‌های طراحی، Tailwind محلی و استایل‌های اختصاصی

سبد خرید و علاقه‌مندی‌ها در مرورگر با `localStorage` نگهداری می‌شوند. این نسخه، ویترین کامل و تعاملی فرانت‌اند است؛ برای فروش واقعی باید API/پایگاه داده، پنل مدیریت، سرویس پیامک و درگاه پرداخت به آن متصل شوند. ثبت سفارش در این نسخه به‌وضوح به‌عنوان پیش‌نمایش نمایش داده می‌شود و پرداخت واقعی انجام نمی‌دهد.

تصاویر و فونت‌ها داخل `public/` قرار دارند تا سایت و پیش‌نمایش بدون وابستگی به CDN ظاهر اصلی را نشان دهند. فقط ویدیوی لوک‌بوک از منبع خارجی فایل اولیه پخش می‌شود و برای پخش آن دسترسی اینترنت لازم است.

متن قوانین و حریم خصوصی برای نمونهٔ فروشگاهی تهیه شده است؛ پیش از استفادهٔ تجاری، آن را با شرایط واقعی کسب‌وکار و الزامات حقوقی محل فعالیت تطبیق دهید.
