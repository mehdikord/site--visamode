/* ================= DATA ================= */
export const U = (id) => `/images/photo-${id}.jpg`;
export const PRODUCTS = [
 {id:1,slug:'vaisa-tailored-blazer',name:'کت تک‌دکمه ژورنالی ویسا',en:'VAISA TAILORED BLAZER',cat:'coat',catFa:'کت',price:3890000,old:4890000,rating:4.9,reviews:412,sold:187,stock:23,badge:'شگفت‌انگیز',isNew:false,fabric:'۶۵٪ پشم، ۳۰٪ ویسکوز، ۵٪ الاستین • آستر ساتن • بدون آبرفت',fit:'فیت استاندارد کتی • قالب دقیق',colors:[{n:'شتری',c:'#C8A87A'},{n:'مشکی',c:'#1c1c1e'},{n:'کرم',c:'#E8DDCC'}],sizes:['S','M','L'],imgs:[U('1583496661160-fb5886a13d44f'),U('1596704017254-9b121068fb31'),U('1581044777550-4cfa60707c03')]},
 {id:2,slug:'linen-crop-set',name:'ست کراپ و شلوار لینن ترند',en:'LINEN CROP SET',cat:'set',catFa:'ست زنانه',price:2980000,old:3480000,rating:4.8,reviews:268,sold:143,stock:31,badge:'پرفروش',isNew:true,fabric:'۱۰۰٪ لینن طبیعی • تنفس بالا • مناسب تابستان و بهار',fit:'کراپ آزاد + شلوار های‌ویست',colors:[{n:'سفید',c:'#f5f5f5'},{n:'سبز سدری',c:'#5F6F5B'},{n:'صورتی',c:'#E8B4B8'}],sizes:['XS','S','M','L'],imgs:[U('1515886657613-9f3515b0c78f'),U('1490481651871-ab68de25d43d'),U('1529139574466-a303027c1d8b')]},
 {id:3,slug:'wide-leg-trousers',name:'شلوار بگ پارچه‌ای فیت آزاد',en:'WIDE-LEG TROUSERS',cat:'pants',catFa:'شلوار',price:1480000,old:0,rating:4.7,reviews:190,sold:320,stock:45,badge:'',isNew:false,fabric:'۷۰٪ ویسکوز، ۲۷٪ پلی‌استر، ۳٪ اسپاندکس • چروک کم',fit:'دمپای آزاد • فاق بلند',colors:[{n:'مشکی',c:'#1c1c1e'},{n:'کرمی',c:'#D9C7A7'},{n:'طوسی',c:'#9a9a9a'}],sizes:['S','M','L','XL'],imgs:[U('1594633312681-425c7b97ccd1'),U('1554412933-514a83d2f3c8'),U('1594633312681-425c7b97ccd1')]},
 {id:4,slug:'floral-maxi-dress',name:'پیراهن ماکسی گلدار بهاره',en:'FLORAL MAXI DRESS',cat:'dress',catFa:'پیراهن',price:2680000,old:3200000,rating:4.9,reviews:154,sold:98,stock:17,badge:'٪۱۶ تخفیف',isNew:true,fabric:'۱۰۰٪ ویسکوز لطیف • زیره نخی • بدون نیاز به اتو',fit:'کمردراز چین‌دار • آزاد و خنک',colors:[{n:'گلدار صورتی',c:'#E8A0A8'},{n:'سرمه‌ای',c:'#2B3A55'},{n:'سفید',c:'#f5f5f5'}],sizes:['S','M','L'],imgs:[U('1572804013309-59a88b7e92f1'),U('1595777457583-95e059d581b8'),U('1509631179647-0177331693ae')]},
 {id:5,slug:'oversize-autumn-coat',name:'مانتو کتی اورسایز پاییزه',en:'OVERSIZE AUTUMN COAT',cat:'manto',catFa:'مانتو',price:3290000,old:0,rating:5.0,reviews:321,sold:210,stock:28,badge:'کالکشن جدید',isNew:true,fabric:'فوتر پشمی گرماژ ۴۲۰ • آستر کامل • دکمه صدفی',fit:'اورسایز • قد ۱۱۵',colors:[{n:'شتری',c:'#C8A87A'},{n:'ذغالی',c:'#3a3a3a'},{n:'زیتونی',c:'#6B6A5E'}],sizes:['S','M','L'],imgs:[U('1539533018447-63fcce2678e3'),U('1544022613-e87ca75a784a'),U('1551803091-e20673f15770')]},
 {id:6,slug:'imported-leather-jacket',name:'کت چرم طبیعی فشن وارداتی',en:'IMPORTED LEATHER JACKET',cat:'coat',catFa:'کت',price:5490000,old:6900000,rating:4.9,reviews:98,sold:64,stock:9,badge:'وارداتی ✦',isNew:false,fabric:'۱۰۰٪ چرم طبیعی گوسفندی • آستر پلی‌استر • وارداتی',fit:'فیت جذب موتورسواری',colors:[{n:'مشکی',c:'#111'},{n:'قهوه‌ای',c:'#5C3D2E'}],sizes:['S','M','L'],imgs:[U('1551028719-00167b16eac5'),U('1521223890158-f9f7c3d5d504'),U('1544022613-e87ca75a784a')]},
 {id:7,slug:'satin-party-set',name:'ست سه‌تیکه مجلسی ساتن',en:'SATIN PARTY SET',cat:'set',catFa:'ست زنانه',price:4590000,old:0,rating:4.8,reviews:76,sold:52,stock:14,badge:'مجلسی',isNew:true,fabric:'ساتن ابریشم‌نما • براق ملایم • آستر نخی',fit:'تاپ + شلوار + روبند • جذب',colors:[{n:'شامپاینی',c:'#D9C2A0'},{n:'مشکی',c:'#111'},{n:'زمردی',c:'#1F5C4D'}],sizes:['XS','S','M','L'],imgs:[U('1509631179647-0177331693ae'),U('1469334031218-e382a71b716b'),U('1515886657613-9f3515b0c78f')]},
 {id:8,slug:'street-cargo-pants',name:'شلوار کارگو استریت زنانه',en:'STREET CARGO PANTS',cat:'pants',catFa:'شلوار',price:1890000,old:2290000,rating:4.6,reviews:203,sold:276,stock:39,badge:'ترند',isNew:false,fabric:'کتان کج‌راه ضخیم • ۶ جیب کاربردی • بند قابل تنظیم',fit:'راسته آزاد استریت',colors:[{n:'کرمی',c:'#CBB99B'},{n:'سبز ارتشی',c:'#5B6248'},{n:'مشکی',c:'#111'}],sizes:['S','M','L','XL'],imgs:[U('1594633312681-425c7b97ccd1'),U('1509631179647-0177331693ae'),U('1483985988355-763728e1935b')]},
 {id:9,slug:'midi-party-dress',name:'پیراهن میدی دکلته مهمانی',en:'MIDI PARTY DRESS',cat:'dress',catFa:'پیراهن',price:3190000,old:0,rating:4.9,reviews:187,sold:119,stock:21,badge:'',isNew:true,fabric:'کرپ مجلسی درجه‌یک • فنردوزی نیم‌تنه • زیپ مخفی',fit:'میدی جذب • قد ۱۲۰',colors:[{n:'قرمز',c:'#A41623'},{n:'مشکی',c:'#111'},{n:'سرمه‌ای',c:'#1F2A44'}],sizes:['XS','S','M'],imgs:[U('1595777457583-95e059d581b8'),U('1572804013309-59a88b7e92f1'),U('1487222477894-8943e31ef7b2')]},
 {id:10,slug:'wooden-button-linen-manto',name:'مانتو لینن دکمه‌چوبی',en:'WOODEN BUTTON LINEN',cat:'manto',catFa:'مانتو',price:2790000,old:3390000,rating:4.7,reviews:245,sold:198,stock:26,badge:'٪۱۸ تخفیف',isNew:false,fabric:'لینن بلژیکی • دکمه چوب زیتون • جیب مخفی',fit:'آزاد مینیمال • قد ۱۱۰',colors:[{n:'سفید',c:'#f2ede4'},{n:'بژ',c:'#C9B896'},{n:'آبی روشن',c:'#A8C3D1'}],sizes:['S','M','L','XL'],imgs:[U('1529139574466-a303027c1d8b'),U('1539533018447-63fcce2678e3'),U('1496747611176-843222e1e57c')]},
 {id:11,slug:'crop-cotton-blazer',name:'کت کتان کوتاه کراپ',en:'CROP COTTON BLAZER',cat:'coat',catFa:'کت',price:2590000,old:0,rating:4.8,reviews:132,sold:87,stock:33,badge:'جدید',isNew:true,fabric:'کتان ۱۰۰٪ • لایی‌کاری نیم‌تنه • دکمه فلزی طلایی',fit:'کراپ • قد ۵۵',colors:[{n:'کرم',c:'#E8DCC8'},{n:'مشکی',c:'#111'},{n:'صورتی',c:'#E8B4B8'}],sizes:['XS','S','M'],imgs:[U('1581044777550-4cfa60707c03'),U('1583496661160-fb5886a13d44f'),U('1596704017254-9b121068fb31')]},
 {id:12,slug:'autumn-knit-set',name:'ست بافت پاییزه دونفره',en:'AUTUMN KNIT SET',cat:'set',catFa:'ست زنانه',price:3290000,old:3990000,rating:5.0,reviews:289,sold:234,stock:19,badge:'شگفت‌انگیز',isNew:true,fabric:'بافت آکریل درجه‌یک ضدپرز • نرم و گرم • کشبافت',fit:'بافت آزاد + دامن/شلوار ست',colors:[{n:'کرم',c:'#E3D3B8'},{n:'قهوه‌ای',c:'#7A5C45'},{n:'طوسی',c:'#8a8a8a'}],sizes:['S','M','L'],imgs:[U('1434389677669-e08b4cac3105'),U('1515886657613-9f3515b0c78f'),U('1539109136881-3be0616acf4b')]}
];
export const CATS=[
 {k:'coat',n:'کت',e:'BLAZERS',c:'۲۴ مدل',img:U('1583496661160-fb5886a13d44f')},
 {k:'set',n:'ست زنانه',e:'SETS',c:'۳۸ مدل',img:U('1515886657613-9f3515b0c78f')},
 {k:'pants',n:'شلوار',e:'TROUSERS',c:'۱۹ مدل',img:U('1594633312681-425c7b97ccd1')},
 {k:'dress',n:'پیراهن',e:'DRESSES',c:'۲۷ مدل',img:U('1572804013309-59a88b7e92f1')},
 {k:'manto',n:'مانتو',e:'MANTOS',c:'۳۱ مدل',img:U('1539533018447-63fcce2678e3')},
 {k:'all',n:'همه محصولات',e:'VIEW ALL',c:'+۳۲۰ مدل',img:U('1469334031218-e382a71b716b')}
];
export const OCCS=[
 {t:'استایل مجلسی',d:'پیراهن و ست ساتن',n:'۴۲ مدل',img:U('1509631179647-0177331693ae'),cat:'dress'},
 {t:'استایل روزمره',d:'راحت و شیک',n:'۶۸ مدل',img:U('1483985988355-763728e1935b'),cat:'pants'},
 {t:'استایل محل کار',d:'رسمی و قدرتمند',n:'۳۵ مدل',img:U('1581044777550-4cfa60707c03'),cat:'coat'},
 {t:'استایل مهمانی',d:'بدرخش ✨',n:'۲۹ مدل',img:U('1469334031218-e382a71b716b'),cat:'set'},
 {t:'استایل سفر',d:'لینن و آزاد',n:'۲۴ مدل',img:U('1490481651871-ab68de25d43d'),cat:'manto'},
 {t:'استایل خیابانی',d:'اسپرت و ترند',n:'۳۳ مدل',img:U('1529139574466-a303027c1d8b'),cat:'pants'}
];
export const POSTS=[
 {slug:'autumn-fashion-trends-2025',t:'۵ ترند پاییز ۲۰۲۵ که هر زنی باید بداند',d:'از کت اورسایز تا بوت بلند؛ راهنمای کامل ست‌کردن ترندهای امسال با سلیقه ایرانی.',img:U('1469334031218-e382a71b716b'),tag:'ترندشناسی',time:'۶ دقیقه'},
 {slug:'choose-blazer-for-body-shape',t:'راهنمای انتخاب کت بر اساس فرم بدن',d:'گلابی، سیبی یا ساعت‌شنی؟ بفهم کدام برش کت، اندام تو را زیباتر نشان می‌دهد.',img:U('1581044777550-4cfa60707c03'),tag:'راهنمای خرید',time:'۴ دقیقه'},
 {slug:'linen-set-in-autumn',t:'چطور ست لینن را در پاییز هم بپوشیم؟',d:'ترفندهای لایه‌پوشی حرفه‌ای؛ از ترکیب بافت تا انتخاب بوت مناسب ست تابستانه.',img:U('1490481651871-ab68de25d43d'),tag:'استایلینگ',time:'۵ دقیقه'}
];
export const TESTIS=[
 {n:'نگار محمدی',c:'تهران • خرید کت ژورنالی',t:'کیفیت پارچه واقعاً فراتر از انتظارم بود. دوخت تمیز، آستر عالی و بسته‌بندی شیک مثل کادو. سایز M دقیقاً همون شد که راهنمای سایت گفت.',img:U('1524504388940-b1c1722653e1'),s:5},
 {n:'سارا کریمی',c:'اصفهان • خرید ست بافت',t:'اولین بار بود آنلاین لباس می‌خریدم و استرس سایز داشتم، ولی ویدیوی تن‌خور و مشاوره واتساپی عالی بود. ست بافتش فوق‌العاده گرم و نرمه.',img:U('1496747611176-843222e1e57c'),s:5},
 {n:'المیرا رضایی',c:'شیراز • خرید مانتو لینن',t:'بسته‌ام ۳ روزه رسید. مانتو دقیقاً مثل عکس ژورنالی بود، حتی قشنگ‌تر! مرجوعی سایز قبلیم هم بدون هیچ سوالی انجام شد. مشتری ثابت شدم.',img:U('1485968579580-b6d095142e6e'),s:5},
 {n:'دنیا احمدی',c:'مشهد • خرید پیراهن مجلسی',t:'پیراهن مهمانی رو برای عروسی خواهرم گرفتم، همه پرسیدن از کجاست! قیمت نسبت به کیفیت خیلی منصفانه‌ست. ممنون ویسا 🤍',img:U('1529626455594-4ff0802cfb7e'),s:5}
];


export const CATEGORY_LABELS = [
  { id: 'all', label: 'همه محصولات' },
  { id: 'coat', label: 'کت' },
  { id: 'set', label: 'ست زنانه' },
  { id: 'pants', label: 'شلوار' },
  { id: 'dress', label: 'پیراهن' },
  { id: 'manto', label: 'مانتو' },
];

export const PRICE_FORMAT = new Intl.NumberFormat('fa-IR');
export const formatNumber = (value) => PRICE_FORMAT.format(Number(value) || 0);
export const formatPrice = (value) => `${formatNumber(value)} تومان`;
export const discountPercent = (product) => product.old ? Math.round((1 - product.price / product.old) * 100) : 0;
export const getProductBySlug = (slug) => PRODUCTS.find((product) => product.slug === slug);
