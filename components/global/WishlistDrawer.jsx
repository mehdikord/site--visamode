'use client';

import Link from 'next/link';
import { useStore } from '../../app/providers';
import { PRODUCTS, formatPrice } from '../../lib/data';

export default function WishlistDrawer() {
  const { wishlist, wishlistOpen, setWishlistOpen, toggleWishlist, addToCart } = useStore();
  if (!wishlistOpen) return null;
  const items = wishlist.map((id) => PRODUCTS.find((product) => product.id === id)).filter(Boolean);

  return (
    <div className="fixed inset-0 z-[88]">
      <button aria-label="بستن علاقه‌مندی‌ها" className="absolute inset-0 h-full w-full bg-black/60 backdrop-blur-sm" onClick={() => setWishlistOpen(false)} />
      <aside className="drawer animate-drawer-in absolute left-0 top-0 flex h-full w-full max-w-[400px] flex-col bg-vaisa-cream shadow-lux" role="dialog" aria-modal="true" aria-label="علاقه‌مندی‌ها">
        <div className="flex items-center justify-between border-b border-black/10 bg-white p-5">
          <div className="text-lg font-black">علاقه‌مندی‌ها 🤍</div>
          <button onClick={() => setWishlistOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white" aria-label="بستن">✕</button>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-5">
          {!items.length ? (
            <div className="py-16 text-center text-black/40"><div className="mb-3 text-5xl">♡</div><div className="font-bold">هنوز چیزی ذخیره نکردی</div><div className="mt-1 text-[13px]">روی قلب محصولات بزن تا اینجا ذخیره بشن</div></div>
          ) : items.map((product) => (
            <div key={product.id} className="flex gap-3 rounded-2xl border border-black/5 bg-white p-3">
              <Link href={`/products/${product.slug}`} onClick={() => setWishlistOpen(false)} className="shrink-0">
                <img src={product.imgs[0]} alt={product.name} className="h-[90px] w-[70px] rounded-xl object-cover" />
              </Link>
              <div className="min-w-0 flex-1">
                <Link href={`/products/${product.slug}`} onClick={() => setWishlistOpen(false)} className="line-clamp-1 text-[13px] font-black">{product.name}</Link>
                <div className="mt-1 text-[14px] font-black">{formatPrice(product.price)}</div>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => addToCart(product.id, product.sizes[1] || product.sizes[0], product.colors[0].n)} className="flex-1 rounded-lg bg-black py-2 text-[12px] font-bold text-white">افزودن به سبد</button>
                  <button onClick={() => toggleWishlist(product.id)} className="w-9 rounded-lg border border-black/10 text-red-500" aria-label="حذف از علاقه‌مندی‌ها">✕</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
