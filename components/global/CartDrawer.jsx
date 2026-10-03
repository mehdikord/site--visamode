'use client';

import Link from 'next/link';
import { useStore } from '../../app/providers';
import { PRODUCTS, formatNumber, formatPrice } from '../../lib/data';

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, cartCount, subtotal, discount, shipping, total, freeShipping, changeQuantity, removeFromCart } = useStore();
  if (!cartOpen) return null;
  const progress = Math.min(100, Math.round((subtotal / freeShipping) * 100));

  return (
    <div className="fixed inset-0 z-[88]" role="presentation">
      <button aria-label="بستن سبد خرید" className="modal-bg absolute inset-0 h-full w-full bg-black/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <aside className="drawer animate-drawer-in absolute left-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-vaisa-cream shadow-lux" role="dialog" aria-modal="true" aria-label="سبد خرید">
        <div className="flex items-center justify-between border-b border-black/10 bg-white p-5">
          <div className="text-lg font-black">سبد خرید <span className="text-vaisa-golddark">({formatNumber(cartCount)})</span></div>
          <button onClick={() => setCartOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white" aria-label="بستن">✕</button>
        </div>
        <div className="px-5 pt-4">
          <div className="rounded-2xl border border-black/5 bg-white p-4">
            <div className="mb-2 flex justify-between text-[12px] font-bold">
              <span>{subtotal >= freeShipping ? '🎉 ارسال رایگان شدی!' : 'تا ارسال رایگان چقدر مانده؟'}</span>
              <span className="text-vaisa-golddark">{formatNumber(progress)}٪</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-vaisa-beige"><div className="h-full rounded-full bg-gradient-to-l from-vaisa-gold to-emerald-500 transition-all duration-700" style={{ width: `${progress}%` }} /></div>
            {subtotal > 0 && subtotal < freeShipping && <div className="mt-2 text-[11px] text-black/50">{formatPrice(freeShipping - subtotal)} تا ارسال رایگان</div>}
          </div>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="py-14 text-center text-black/40">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl shadow-sm">🛍</div>
              <div className="font-black text-black">سبدت خالیه!</div>
              <div className="mb-4 mt-1 text-[13px]">بیا یه نگاه به کالکشن جدید بنداز ✨</div>
              <Link href="/products" onClick={() => setCartOpen(false)} className="inline-flex rounded-full bg-black px-6 py-2.5 text-[13px] font-bold text-white">مشاهده فروشگاه</Link>
            </div>
          ) : cart.map((item) => {
            const product = PRODUCTS.find((entry) => entry.id === item.id);
            if (!product) return null;
            return (
              <div key={item.key} className="flex gap-3 rounded-2xl border border-black/5 bg-white p-3">
                <Link href={`/products/${product.slug}`} onClick={() => setCartOpen(false)} className="shrink-0"><img src={product.imgs[0]} alt={product.name} className="h-[92px] w-[72px] rounded-xl object-cover" /></Link>
                <div className="min-w-0 flex-1">
                  <Link href={`/products/${product.slug}`} onClick={() => setCartOpen(false)} className="line-clamp-1 text-[13px] font-black hover:text-vaisa-golddark">{product.name}</Link>
                  <div className="mt-1 text-[12px] text-black/50">سایز {item.size} • {item.color}</div>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 rounded-full bg-vaisa-cream px-1 py-1">
                      <button onClick={() => changeQuantity(item.key, -1)} className="h-7 w-7 rounded-full bg-white font-bold shadow-sm" aria-label="کم کردن">−</button>
                      <span className="w-5 text-center text-[14px] font-black">{formatNumber(item.qty)}</span>
                      <button onClick={() => changeQuantity(item.key, 1)} className="h-7 w-7 rounded-full bg-black font-bold text-white" aria-label="زیاد کردن">＋</button>
                    </div>
                    <div className="text-[14px] font-black">{formatPrice(product.price * item.qty)}</div>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.key)} className="self-start text-lg text-black/30 hover:text-red-500" aria-label="حذف محصول">✕</button>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <div className="border-t border-black/10 bg-white p-5">
            <div className="mb-2 flex justify-between text-[14px]"><span className="text-black/60">جمع اقلام</span><b>{formatPrice(subtotal)}</b></div>
            <div className="mb-2 flex justify-between text-[14px]"><span className="text-black/60">تخفیف</span><b className="text-emerald-600">− {formatPrice(discount)}</b></div>
            <div className="mb-4 flex justify-between text-[14px]"><span className="text-black/60">هزینه ارسال</span><b>{shipping === 0 ? 'رایگان 🎉' : formatPrice(shipping)}</b></div>
            <div className="mb-4 flex justify-between border-t border-dashed border-black/15 pt-3 text-lg font-black"><span>مبلغ نهایی</span><span className="text-vaisa-golddark">{formatPrice(total)}</span></div>
            <Link href="/checkout" onClick={() => setCartOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-vaisa-black py-4 font-black text-white transition hover:bg-vaisa-golddark">ادامه و پرداخت ←</Link>
            <Link href="/cart" onClick={() => setCartOpen(false)} className="mt-2 block py-3 text-center text-[13px] font-bold text-black/50 hover:text-black">مشاهده سبد خرید</Link>
          </div>
        )}
      </aside>
    </div>
  );
}
